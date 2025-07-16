exports.handler = async function(event, context) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  if (!OPENAI_API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Missing OpenAI API key' })
    };
  }

  // Parse the request to check if streaming is requested
  const requestBody = JSON.parse(event.body);
  const isStreaming = requestBody.stream === true;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
    },
    body: event.body,
  });

  // If not streaming or if there's an error, return normally
  if (!isStreaming || !response.ok) {
    const body = await response.text();
    return {
      statusCode: response.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body,
    };
  }

  // For streaming responses, we need to return the stream directly
  const reader = response.body.getReader();
  
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
    body: response.body,
    isBase64Encoded: false,
  };
}; 