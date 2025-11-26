class AIService {
    constructor() {
        this.apiKey = null; // Initialize your API key
        this.baseUrl = 'https://gemini.googleapis.com/v1'; // Base URL for Gemini API
    }

    async getApiKey() {
        if (!this.apiKey) {
            const result = await chrome.storage.sync.get(['geminiApiKey']);
            this.apiKey = result.geminiApiKey;
        }
        return this.apiKey;
    }

    async generateComment(postContent, tone = 'friendly') {
        const apiKey = await this.getApiKey();
        if (!apiKey) {
            throw new Error('API key not configured');
        }

        const prompt = `Generate a ${tone} comment for this social media post: "${postContent}"`;

        try {
            const response = await fetch(`${this.baseUrl}/comments/generate`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt: prompt,
                    max_tokens: 100,
                    temperature: 0.7
                })
            });

            if (!response.ok) {
                throw new Error(`API request failed: ${response.status}`);
            }

            const data = await response.json();
            return data.response; // Adjust based on Gemini's response format
        } catch (error) {
            console.error('Error generating comment:', error);
            throw error;
        }
    }

    async generatePostIdeas(topic, platform = 'general') {
        const apiKey = await this.getApiKey();
        if (!apiKey) {
            throw new Error('API key not configured');
        }

        const prompt = `Generate 3 creative post ideas about "${topic}" for ${platform}.`;

        try {
            const response = await fetch(`${this.baseUrl}/ideas/generate`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt: prompt,
                    max_tokens: 300,
                    temperature: 0.8
                })
            });

            if (!response.ok) {
                throw new Error(`API request failed: ${response.status}`);
            }

            const data = await response.json();
            return data.response; // Adjust based on Gemini's response format
        } catch (error) {
            console.error('Error generating post ideas:', error);
            throw error;
        }
    }
}

// Initialize AIService
const aiService = new AIService();
// Handle messages from popup and content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'generateComment') {
        aiService.generateComment(message.postContent, message.tone)
            .then(comment => sendResponse({ success: true, comment }))
            .catch(error => sendResponse({ success: false, error: error.message }));
        return true; // Keep message channel open for async response
    }
    if (message.action === 'generatePostIdeas') {
        aiService.generatePostIdeas(message.topic, message.platform)
            .then(ideas => sendResponse({ success: true, ideas }))
            .catch(error => sendResponse({ success: false, error: error.message }));
        return true;
    }
    if (message.action === 'extractPostContent') {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'extractContent' }, (response) => {
                sendResponse(response);
            });
        });
        return true;
    }
});