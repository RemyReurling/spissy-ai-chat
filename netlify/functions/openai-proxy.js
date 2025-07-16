exports.handler = async function(event, context) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  if (!OPENAI_API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Missing OpenAI API key' })
    };
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
    },
    body: event.body,
  });

  // For streaming responses, we need to collect and forward the stream data
  const requestBody = JSON.parse(event.body);
  if (requestBody.stream && response.ok) {
    const reader = response.body.getReader();
    let streamData = '';
    
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        streamData += new TextDecoder().decode(value);
      }
      
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-cache',
        },
        body: streamData,
      };
    } catch (error) {
      return {
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Streaming error: ' + error.message }),
      };
    }
  }

  // For non-streaming responses or errors
  const body = await response.text();
  return {
    statusCode: response.status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body,
  };
}; 