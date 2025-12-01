# LinkedIn AI Assistant Plugin (v2)

Lightweight Chrome extension content script that injects an AI assistant into LinkedIn posts and the post composer. Helps with:
- Writing comments
- Generating post ideas
- Rewriting drafts with different tones
- Summarizing posts
- Writing direct messages (DMs)
- Simple profile analysis and prompts personalization

Status: Version 2 — currently only supports `LinkedIn`.

Main files:
- `content.js` — UI injection, DOM adapter for LinkedIn, actions and UI flows.
- Service worker / background script — handles calls to the AI service (via `chrome.runtime.sendMessage` with action `GENERATE_CONTENT`).
- `api_key.js` (user-provided; must not be committed).

Features overview
- Floating AI trigger per post (brain icon) to open a small assistant panel.
- Tone selector for comments and DMs.
- Post composer toolbar additions: generate post ideas and rewrite drafts.
- Profile settings UI to store contextual info used by the AI.
- Uses `chrome.storage.local` for storing user profile data.

Requirements
- Chrome (or Chromium-based browser) with extension support.
- An API key from AI Studio: https://aistudio.google.com/
- Developer mode to load the unpacked extension for testing.

Quick setup
1. Clone the repo.
2. Create `api_key.js` in the project root (see the snippet below).
3. Add `api_key.js` to ` .gitignore` (to avoid committing your key).
4. Load the extension in Chrome via Extensions > Load unpacked and select the project folder.
5. Open LinkedIn, wait a couple seconds for the content script to inject UI, then use the assistant.

API key setup
- Get an API key from: https://aistudio.google.com/
- Create a file named `api_key.js` in the project root and put your key there.
- Add `api_key.js` to ` .gitignore` to keep it out of the repository.

Explanation: `api_key.js` simply stores your key in a constant. Import this file from your service worker or background script that performs AI requests, and pass the key to the API client.

```javascript
// javascript
// Create `api_key.js` in the project root (DO NOT COMMIT).
// Replace 'YOUR_API_KEY_HERE' with the key from https://aistudio.google.com/
const API_KEY = 'YOUR_API_KEY_HERE';
export default API_KEY;
```

Development notes
- The content script implements an adapter pattern for LinkedIn (`LinkedInAdapter`) to extract author, content, images and profile URL from posts.
- UI and workflows are in `content.js`; AI generation requests are proxied via `chrome.runtime.sendMessage({ action: 'GENERATE_CONTENT', ... })` to the background/service worker which should call the AI API.
- User profile data saved via `chrome.storage.local` (managed by `UserProfileManager`).

Security and privacy
- Never commit `api_key.js` or your API key.
- Stored user profile data is saved locally via Chrome storage.

Troubleshooting
- If the assistant doesn't appear, open the console on LinkedIn and verify `content.js` logs and that the extension is loaded.
- Check the Service Worker console for failures to call the AI API (the extension sends messages and logs errors).

Contributing
- Follow project coding style and test on LinkedIn.
- Keep UI injection minimal to avoid breaking LinkedIn layout.

Version
- v2 — LinkedIn only.