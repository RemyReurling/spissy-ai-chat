# SPISSY - AI SPIS Analyst

A modern, interactive chat interface for SPISSY, an AI-powered SPIS (Strategic Planning and Investment System) analyst. Built with vanilla HTML, CSS, and JavaScript, deployed on Netlify.

## ✨ Features

- **Real-time AI Chat**: Interactive conversation with SPISSY
- **Streaming Responses**: Progressive text display for natural conversation flow
- **Speech Bubble Animation**: Visual feedback while AI is processing
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Modern UI**: Beautiful glassmorphism design with smooth animations
- **Markdown Support**: Rich text formatting in AI responses

## 🚀 Live Demo

Visit the live application at: [Your Netlify URL]

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Markdown Parsing**: Marked.js
- **AI Integration**: OpenAI GPT-3.5 Turbo
- **Deployment**: Netlify Functions
- **Styling**: Custom CSS with glassmorphism effects

## 📁 Project Structure

```
Coach-Demo/
├── index.html              # Main application file
├── netlify/
│   └── functions/
│       └── openai-proxy.js # OpenAI API proxy
├── img/
│   ├── avataaars.png      # SPISSY avatar
│   └── avataaars (3).png  # Animated avatar frame
├── netlify.toml           # Netlify configuration
├── package.json           # Dependencies
└── README.md             # This file
```

## 🎯 Key Features

### Chat Interface
- Fixed height chat container (70vh)
- Auto-scroll to latest messages
- Smooth animations and transitions
- User and assistant message styling

### AI Integration
- Streaming responses for real-time feel
- Progressive text display
- Error handling and retry logic
- Conversation history management

### Visual Design
- Purple gradient background with tessellation pattern
- Glassmorphism chat container
- Animated avatar cycling
- Speech bubble loading animation

## 🔧 Setup & Installation

### Prerequisites
- Node.js (for Netlify CLI)
- OpenAI API key

### Local Development

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd Coach-Demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Start development server**
   ```bash
   npx netlify dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:8888`

### Deployment

1. **Deploy to Netlify**
   ```bash
   netlify deploy --prod
   ```

2. **Set environment variables**
   In your Netlify dashboard, add:
   - `OPENAI_API_KEY`: Your OpenAI API key

## 🎨 Customization

### Styling
- Colors are defined in CSS custom properties in `index.html`
- Main color: `#5B18C2` (purple)
- Accent color: `#00D8AE` (teal)

### AI Behavior
- System prompt is defined in the JavaScript section
- Modify the `SYSTEM_PROMPT` constant to change AI behavior

### Animations
- Speech bubble animation: 1.5s pulse cycle
- Avatar cycling: 200ms intervals
- Streaming speed: 50ms per token

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenAI for GPT-3.5 Turbo API
- Netlify for hosting and serverless functions
- Marked.js for markdown parsing
- Plus Jakarta Sans font family

## 📞 Support

For questions or support, please open an issue in this repository.

---

**SPISSY** - Making AI-powered analysis accessible and engaging! 🚀 