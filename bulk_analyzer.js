// v3.2: Bulk Post Analyzer for Company & Person Pages

class BulkAnalyzer {
    static buttonInjected = false;
    static currentPageType = null;

    // Detect if we're on a company or person page
    static detectPageType() {
        const url = window.location.href;

        // Company: Matches /company/ID/admin/page-posts/published/ OR /company/name/posts/ OR /company/name/
        if (/linkedin\.com\/(company|organization)\/[^/]+\/(admin\/page-posts|posts|feed)/.test(url) ||
            /^https:\/\/www\.linkedin\.com\/(company|organization)\/[^/]+\/?(\?.*)?$/.test(url)) {
            return 'company';
        }

        // Person: Matches /in/name/recent-activity/ OR /in/name/
        if (/linkedin\.com\/in\/[^/]+\/recent-activity\/(all|shares|posts)/.test(url) ||
            /^https:\/\/www\.linkedin\.com\/in\/[^/]+\/?(\?.*)?$/.test(url)) {
            return 'person';
        }

        return null;
    }

    // Scrape the last 5 posts from the page
    static scrapeRecentPosts() {
        const posts = [];
        const postElements = document.querySelectorAll('.feed-shared-update-v2');

        // Limit to 5 most recent
        const limit = Math.min(5, postElements.length);

        for (let i = 0; i < limit; i++) {
            const postEl = postElements[i];

            // Author
            const authorEl = postEl.querySelector('.update-components-actor__name');
            const author = authorEl ? authorEl.innerText.trim() : 'Auteur inconnu';

            // Content
            const contentEl = postEl.querySelector('.feed-shared-inline-show-more-text, .feed-shared-text');
            const content = contentEl ? contentEl.innerText.trim() : '';

            // Metrics
            const likesEl = postEl.querySelector('.social-details-social-counts__reactions-count');
            const commentsEl = postEl.querySelector('.social-details-social-counts__comments');

            const likes = likesEl ? likesEl.getAttribute('aria-label') || '0' : '0';
            const comments = commentsEl ? commentsEl.innerText.trim() : '0';

            posts.push({
                author,
                content: content.substring(0, 500), // Limit length
                likes,
                comments
            });
        }

        return posts;
    }

    // Format posts for AI prompt
    static formatPostsForAI(posts) {
        return posts.map((post, index) => `
**Post ${index + 1}**
Auteur: ${post.author}
Contenu: ${post.content}
Likes: ${post.likes}
Commentaires: ${post.comments}
---
        `).join('\n');
    }

    // Inject floating button
    static injectFloatingButton(pageType) {
        // Check if button already exists
        if (document.getElementById('ai-bulk-analyze-btn')) return;

        const button = document.createElement('button');
        button.id = 'ai-bulk-analyze-btn';
        button.innerHTML = `
            <svg viewBox="0 0 24 24" fill="currentColor" style="width:20px;height:20px;">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
            <span style="margin-left:6px;">Analyser les 5 derniers posts</span>
            <span style="background:#10a37f;color:white;padding:2px 6px;border-radius:10px;font-size:11px;margin-left:6px;">5📊</span>
        `;

        button.style.cssText = `
            position: fixed;
            bottom: 24px;
            left: 24px;
            background: #6366f1;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 24px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            display: flex;
            align-items: center;
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
            z-index: 9999;
            transition: all 0.3s ease;
        `;

        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
            button.style.boxShadow = '0 6px 16px rgba(99, 102, 241, 0.5)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
            button.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.4)';
        });

        button.addEventListener('click', () => this.performAnalysis(pageType));

        document.body.appendChild(button);
    }

    // Perform bulk analysis
    static async performAnalysis(pageType) {
        const button = document.getElementById('ai-bulk-analyze-btn');
        if (!button) return;

        // Show loading state
        const originalContent = button.innerHTML;
        button.innerHTML = `
            <div style="width:20px;height:20px;border:2px solid white;border-top:2px solid transparent;border-radius:50%;animation:spin 1s linear infinite;"></div>
            <span style="margin-left:10px;">Analyse en cours...</span>
        `;
        button.disabled = true;

        // Add spin animation
        if (!document.getElementById('bulk-analyzer-styles')) {
            const style = document.createElement('style');
            style.id = 'bulk-analyzer-styles';
            style.textContent = `
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }

        try {
            // Scrape posts
            const posts = this.scrapeRecentPosts();

            if (posts.length === 0) {
                alert('Aucun post trouvé sur cette page.');
                button.innerHTML = originalContent;
                button.disabled = false;
                return;
            }

            // Format for AI
            const formattedPosts = this.formatPostsForAI(posts);

            // Determine prompt type
            const promptType = pageType === 'company' ? 'company_bulk_analysis' : 'person_bulk_analysis';

            // Get prompt template
            const fullPrompt = Prompts[promptType](formattedPosts);

            // Call AI via background script
            const response = await new Promise((resolve, reject) => {
                chrome.runtime.sendMessage({
                    action: 'GENERATE_CONTENT',
                    prompt: fullPrompt
                }, (response) => {
                    if (chrome.runtime.lastError) {
                        reject(chrome.runtime.lastError);
                    } else {
                        resolve(response);
                    }
                });
            });

            // Show results in modal
            this.showResultsModal(response.text, posts.length);

        } catch (error) {
            console.error('Bulk analysis error:', error);
            alert('Erreur lors de l\'analyse: ' + error.message);
        } finally {
            button.innerHTML = originalContent;
            button.disabled = false;
        }
    }

    // Show results in modal
    static showResultsModal(analysisText, postCount) {
        // Remove existing modal
        const existingModal = document.getElementById('ai-bulk-results-modal');
        if (existingModal) existingModal.remove();

        // Format markdown to HTML (reuse PluginManager formatter)
        const formattedText = this.formatMarkdownToHTML(analysisText);

        const modal = document.createElement('div');
        modal.id = 'ai-bulk-results-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        `;

        modal.innerHTML = `
            <div style="background:white;border-radius:12px;padding:24px;max-width:700px;max-height:80vh;overflow-y:auto;box-shadow:0 8px 32px rgba(0,0,0,0.2);">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
                    <h2 style="margin:0;font-size:20px;color:#1e293b;">📊 Analyse de ${postCount} posts</h2>
                    <button id="close-bulk-modal" style="background:none;border:none;font-size:24px;cursor:pointer;color:#64748b;">×</button>
                </div>
                <div style="white-space:pre-wrap;line-height:1.6;color:#334155;">${formattedText}</div>
                <div style="margin-top:20px;display:flex;gap:8px;">
                    <button id="copy-bulk-analysis" style="flex:1;background:#6366f1;color:white;border:none;padding:12px;border-radius:8px;cursor:pointer;font-weight:600;">
                        Copier l'analyse
                    </button>
                    <button id="close-bulk-modal-2" style="flex:1;background:#e2e8f0;color:#475569;border:none;padding:12px;border-radius:8px;cursor:pointer;font-weight:600;">
                        Fermer
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Event listeners
        const closeModal = () => modal.remove();

        document.getElementById('close-bulk-modal').addEventListener('click', closeModal);
        document.getElementById('close-bulk-modal-2').addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        document.getElementById('copy-bulk-analysis').addEventListener('click', () => {
            navigator.clipboard.writeText(analysisText);
            const btn = document.getElementById('copy-bulk-analysis');
            const originalText = btn.innerText;
            btn.innerText = '✓ Copié !';
            btn.style.background = '#10a37f';
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = '#6366f1';
            }, 2000);
        });
    }

    // Format markdown to HTML (same as PluginManager)
    static formatMarkdownToHTML(text) {
        return text
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.+?)\*/g, '<em>$1</em>')
            .replace(/^### (.+)$/gm, '<h3 style="margin:12px 0 8px 0; font-size:16px; font-weight:600;">$1</h3>')
            .replace(/^## (.+)$/gm, '<h2 style="margin:16px 0 10px 0; font-size:18px; font-weight:600;">$1</h2>')
            .replace(/^# (.+)$/gm, '<h1 style="margin:20px 0 12px 0; font-size:20px; font-weight:600;">$1</h1>')
            .replace(/^- (.+)$/gm, '<li style="margin-left:20px;">$1</li>')
            .replace(/\n/g, '<br>');
    }

    // Check and inject button if needed
    static maybeInjectButton(pageType) {
        if (this.currentPageType !== pageType) {
            // Page type changed, remove old button
            const oldButton = document.getElementById('ai-bulk-analyze-btn');
            if (oldButton) oldButton.remove();
            this.currentPageType = pageType;
            this.buttonInjected = false;
        }

        if (!this.buttonInjected && pageType) {
            this.injectFloatingButton(pageType);
            this.buttonInjected = true;
        }
    }
}
