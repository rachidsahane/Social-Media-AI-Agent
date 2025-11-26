class PopupManager {
    constructor() {
        this.currentPostContent = null;
        this.currentPlatform = null;
        this.init();
    }
    init() {
        this.setupTabs();
        this.setupEventListeners();
        this.loadSettings();
    }
    setupTabs() {
        const tabs = document.querySelectorAll('.tab');
        const tabContents = document.querySelectorAll('.tab-content');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetTab = tab.dataset.tab;

                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(tc => tc.classList.remove('active'));

                tab.classList.add('active');
                document.getElementById(targetTab + '-tab').classList.add('active');
            });
        });
    }
    setupEventListeners() {
        // Extract post content
        document.getElementById('extract-post').addEventListener('click', () => {
            this.extractPostContent();
        });
        // Generate comment
        document.getElementById('generate-comment').addEventListener('click', () => {
            this.generateComment();
        });
        // Generate post ideas
        document.getElementById('generate-ideas').addEventListener('click', () => {
            this.generatePostIdeas();
        });
        // Copy buttons
        document.getElementById('copy-comment').addEventListener('click', () => {
            this.copyToClipboard('comment-result');
        });
        document.getElementById('copy-ideas').addEventListener('click', () => {
            this.copyToClipboard('ideas-result');
        });
        // Save settings
        document.getElementById('save-settings').addEventListener('click', () => {
            this.saveSettings();
        });
        // Enable generate button when topic is entered
        document.getElementById('post-topic').addEventListener('input', (e) => {
            const generateBtn = document.getElementById('generate-ideas');
            generateBtn.disabled = e.target.value.trim().length === 0;
        });
    }
    async loadSettings() {
        try {
            const result = await chrome.storage.sync.get(['geminiApiKey']);
            if (result.geminiApiKey) {
                document.getElementById('api-key').value = result.geminiApiKey;
                this.showMessage('settings-result', 'API key loaded successfully', 'success');
            }
        } catch (error) {
            console.error('Error loading settings:', error);
        }
    }

    async saveSettings() {
        const apiKey = document.getElementById('api-key').value.trim();

        if (!apiKey) {
            this.showMessage('settings-result', 'Please enter an API key', 'error');
            return;
        }

        try {
            await chrome.storage.sync.set({ geminiApiKey: apiKey });
            this.showMessage('settings-result', 'Settings saved successfully!', 'success');
        } catch (error) {
            this.showMessage('settings-result', 'Error saving settings: ' + error.message, 'error');
        }
    }
    async extractPostContent() {
        this.showLoading('comment-result');

        try {
            const response = await chrome.runtime.sendMessage({
                action: 'extractPostContent'
            });
            if (response.success && response.content) {
                this.currentPostContent = response.content;
                this.currentPlatform = response.platform;

                document.getElementById('post-preview').style.display = 'block';
                document.getElementById('post-content').textContent =
                    response.content.length > 150 ?
                        response.content.substring(0, 150) + '...' :
                        response.content;

                document.getElementById('generate-comment').disabled = false;
                this.showMessage('comment-result', 'Post content extracted successfully! Now you can generate a comment.', 'success');
            } else {
                this.showMessage('comment-result', 'No post content found on this page. Make sure you\'re on a social media site with visible posts.', 'error');
            }
        } catch (error) {
            this.showMessage('comment-result', 'Error extracting post content: ' + error.message, 'error');
        }
    }
    async generateComment() {
        if (!this.currentPostContent) {
            this.showMessage('comment-result', 'Please extract post content first', 'error');
            return;
        }
        const tone = document.getElementById('comment-tone').value;
        this.showLoading('comment-result');
        try {
            const response = await chrome.runtime.sendMessage({
                action: 'generateComment',
                postContent: this.currentPostContent,
                tone: tone
            });
            if (response.success) {
                this.showMessage('comment-result', response.comment, 'success');
                document.getElementById('copy-comment').style.display = 'block';
            } else {
                this.showMessage('comment-result', 'Error generating comment: ' + response.error, 'error');
            }
        } catch (error) {
            this.showMessage('comment-result', 'Error: ' + error.message, 'error');
        }
    }
    async generatePostIdeas() {
        const topic = document.getElementById('post-topic').value.trim();
        const platform = document.getElementById('platform-select').value;
        if (!topic) {
            this.showMessage('ideas-result', 'Please enter a topic', 'error');
            return;
        }
        this.showLoading('ideas-result');
        try {
            const response = await chrome.runtime.sendMessage({
                action: 'generatePostIdeas',
                topic: topic,
                platform: platform
            });
            if (response.success) {
                this.showMessage('ideas-result', response.ideas, 'success');
                document.getElementById('copy-ideas').style.display = 'block';
            } else {
                this.showMessage('ideas-result', 'Error generating ideas: ' + response.error, 'error');
            }
        } catch (error) {
            this.showMessage('ideas-result', 'Error: ' + error.message, 'error');
        }
    }
    async copyToClipboard(elementId) {
        const element = document.getElementById(elementId);
        const text = element.textContent;
        try {
            await navigator.clipboard.writeText(text);

            // Show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'copy-success';
            successMsg.textContent = 'Copied to clipboard!';
            element.parentNode.appendChild(successMsg);

            setTimeout(() => {
                successMsg.remove();
            }, 2000);
        } catch (error) {
            console.error('Error copying to clipboard:', error);
        }
    }
    showLoading(elementId) {
        const element = document.getElementById(elementId);
        element.className = 'result-area';
        element.innerHTML = '<div class="loading"><div class="spinner"></div>Generating...</div>';
    }
    showMessage(elementId, message, type = '') {
        const element = document.getElementById(elementId);
        element.className = 'result-area' + (type ? ' ' + type : '');
        element.textContent = message;
    }
}
// Initialize popup when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PopupManager();
});