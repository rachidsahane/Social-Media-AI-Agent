# LinkedIn AI Assistant

AI-powered Chrome extension for LinkedIn, powered by Google Gemini.

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd smm-plugin
   ```

2. **Configure your API Key**
   - Copy `api_key.example.js` to `api_key.js`
   - Open `api_key.js` and replace `YOUR_GEMINI_API_KEY_HERE` with your actual Gemini API key
   - ⚠️ **IMPORTANT**: `api_key.js` is gitignored and will NOT be committed to prevent exposing your key

3. **Load the extension in Chrome**
   - Go to `chrome://extensions/`
   - Enable "Developer mode" (top right)
   - Click "Load unpacked"
   - Select the `smm-plugin` folder
   - Reload LinkedIn

## Features

### Version 2.0
- 🧠 **AI Post Analysis** - Analyze posts with multimodal support (text + images)
- ✍️ **Content Creation**
  - Generate post ideas from topics
  - Rewrite and optimize drafts
- 👤 **Personalization** - Save your profile to get personalized AI responses
- 💬 **Smart Comments** - Generate engaging comments with different tones
- 📊 **Post Summaries** - Get structured summaries of posts
- 💌 **DM Generation** - Create personalized direct messages

## Security

- API keys are stored in `api_key.js` which is **gitignored**
- Never commit `api_key.js` to version control
- Only `api_key.example.js` (template) is tracked by git

## License

MIT