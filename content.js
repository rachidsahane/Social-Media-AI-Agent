// --- ICÔNES SVG (Pour éviter les dépendances externes) ---
const Icons = {
    brain: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.97-3.284"/><path d="M17.97 14.716A4 4 0 0 1 18 18"/></svg>`,
    x: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>`,
    sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M9 3v4"/><path d="M3 5h4"/><path d="M3 9h4"/></svg>`,
    message: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>`,
    fileText: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,
    send: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`,
    userSearch: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="7"/><path d="m21 21-6-6"/><circle cx="10" cy="10" r="3"/><path d="M7 16v4"/><path d="M13 16v4"/></svg>`,
    copy: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
    refresh: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>`,
    check: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
    lightbulb: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`,
    penTool: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`,
    settings: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`
};

/**
 * 1. ADAPTER PATTERN
 */
class LinkedInAdapter {
    getPostSelector() {
        return '.feed-shared-update-v2, .occludable-update, div[data-urn]';
    }

    getAuthorName(el) {
        const node = el.querySelector('.update-components-actor__title span[dir="ltr"] > span:first-child') ||
            el.querySelector('.update-components-actor__title') ||
            el.querySelector('.feed-shared-actor__name');
        return node ? node.innerText.trim() : 'Auteur Inconnu';
    }

    getPostContent(el) {
        const node = el.querySelector('.update-components-text') ||
            el.querySelector('.feed-shared-update-v2__description');
        return node ? node.innerText.trim() : 'Contenu non trouvé';
    }

    getAuthorProfileUrl(el) {
        const node = el.querySelector('a.update-components-actor__meta-link') ||
            el.querySelector('a.app-aware-link');
        return node ? node.href : '';
    }

    getPostImages(el) {
        const images = [];
        const mediaContainers = el.querySelectorAll('.update-components-image, .feed-shared-image, .update-components-article__image');

        mediaContainers.forEach(container => {
            const img = container.querySelector('img');
            if (img && img.src) {
                images.push({ url: img.src });
            }
        });

        return images;
    }
}

/**
 * 2. USER PROFILE MANAGER
 */
class UserProfileManager {
    async getProfile() {
        return new Promise((resolve) => {
            chrome.storage.local.get(['userProfile'], (result) => {
                resolve(result.userProfile || {});
            });
        });
    }

    async saveProfile(profile) {
        return new Promise((resolve) => {
            chrome.storage.local.set({ userProfile: profile }, () => {
                resolve();
            });
        });
    }
}

/**
 * 3. MOTEUR IA
 */
class AIEngine {
    static async generateResponse(promptType, contextData, tone = 'Neutre') {
        const { author, content, images, userProfile } = contextData;
        let systemPrompt = "";

        switch (promptType) {
            case 'comment':
                systemPrompt = Prompts.comment(author, content, tone, userProfile);
                break;
            case 'summary':
                systemPrompt = Prompts.summary(author, content);
                break;
            case 'dm':
                systemPrompt = Prompts.dm(author, content, tone, userProfile);
                break;
            case 'analyze':
                systemPrompt = Prompts.analyze(author, content);
                break;
            case 'post_idea':
                systemPrompt = Prompts.post_idea(contextData.topic, userProfile);
                break;
            case 'rewrite':
                systemPrompt = Prompts.rewrite(contextData.draft, tone, userProfile);
                break;
            default:
                systemPrompt = "Veuillez spécifier une action valide.";
        }

        try {
            const response = await chrome.runtime.sendMessage({
                action: 'GENERATE_CONTENT',
                prompt: systemPrompt,
                images: images
            });

            if (response.success) {
                return response.text;
            } else {
                console.error("Content Script - Erreur Service Worker:", response.text);
                throw new Error(response.text);
            }
        } catch (error) {
            return `Erreur: Impossible de contacter le Service Worker. (${error.message})`;
        }
    }
}

/**
 * 4. GESTIONNAIRE DE CRÉATION DE POST
 */
class PostCreationManager {
    constructor(userProfileManager) {
        this.injected = false;
        this.userProfileManager = userProfileManager;
    }

    checkAndInject(modal) {
        if (modal.querySelector('.ai-creation-tools')) return;

        const footer = modal.querySelector('.share-creation-state__footer') || modal.querySelector('.share-box_actions');
        if (!footer) return;

        const toolbar = document.createElement('div');
        toolbar.className = 'ai-creation-tools';
        toolbar.style.cssText = 'display: flex; gap: 8px; margin-right: auto; align-items: center;';

        const ideaBtn = this.createButton('Idée de Post', Icons.lightbulb, () => this.openIdeaModal(modal));
        const rewriteBtn = this.createButton('Réécrire', Icons.penTool, () => this.openRewriteModal(modal));

        toolbar.appendChild(ideaBtn);
        toolbar.appendChild(rewriteBtn);

        if (footer.classList.contains('share-creation-state__footer')) {
            footer.insertBefore(toolbar, footer.firstChild);
        } else {
            footer.parentNode.insertBefore(toolbar, footer);
        }
    }

    createButton(text, iconSvg, onClick) {
        const btn = document.createElement('button');
        btn.className = 'artdeco-button artdeco-button--2 artdeco-button--tertiary ember-view';
        btn.innerHTML = `<span style="display:flex; align-items:center; gap:4px;">${iconSvg} <span>${text}</span></span>`;
        btn.type = 'button';
        btn.addEventListener('click', onClick);
        return btn;
    }

    async openIdeaModal(modal) {
        const userProfile = await this.userProfileManager.getProfile();
        const overlay = this.createOverlay('Générer une idée de post');
        overlay.innerHTML += `
            <div style="padding: 16px;">
                <label style="display:block; margin-bottom:8px; font-weight:600;">Sujet du post</label>
                <input type="text" id="ai-topic-input" class="ai-input" placeholder="Ex: Les avantages du télétravail..." style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px; margin-bottom:16px;">
                <button id="ai-generate-btn" class="ai-btn-primary" style="width:100%;">Générer</button>
            </div>
        `;
        document.body.appendChild(overlay);

        const input = overlay.querySelector('#ai-topic-input');
        const btn = overlay.querySelector('#ai-generate-btn');

        btn.addEventListener('click', async () => {
            const topic = input.value.trim();
            if (!topic) return;

            btn.disabled = true;
            btn.innerText = "Génération...";

            try {
                const text = await AIEngine.generateResponse('post_idea', { topic: topic, userProfile: userProfile });
                this.insertTextIntoEditor(modal, text);
                document.body.removeChild(overlay);
            } catch (e) {
                alert("Erreur: " + e.message);
                btn.disabled = false;
                btn.innerText = "Générer";
            }
        });

        overlay.querySelector('.ai-close-overlay').addEventListener('click', () => document.body.removeChild(overlay));
    }

    async openRewriteModal(modal) {
        const editor = modal.querySelector('.ql-editor');
        const content = editor.innerText.trim();

        if (!content) {
            alert("Veuillez d'abord rédiger un brouillon.");
            return;
        }

        const userProfile = await this.userProfileManager.getProfile();
        const overlay = this.createOverlay('Réécrire le post');
        const tones = ['Professionnel', 'Engageant', 'Court', 'Storytelling'];

        overlay.innerHTML += `
            <div style="padding: 16px;">
                <p style="margin-bottom:12px; font-size:14px; color:#666;">Choisissez un style pour réécrire votre brouillon :</p>
                <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:16px;">
                    ${tones.map(t => `<button class="ai-tone-btn" data-tone="${t}" style="padding:6px 12px; border:1px solid #0a66c2; border-radius:16px; background:white; color:#0a66c2; cursor:pointer;">${t}</button>`).join('')}
                </div>
                <div id="ai-rewrite-status" style="text-align:center; display:none;">Réécriture en cours...</div>
            </div>
        `;
        document.body.appendChild(overlay);

        overlay.querySelectorAll('.ai-tone-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
                const tone = btn.dataset.tone;
                const status = overlay.querySelector('#ai-rewrite-status');
                status.style.display = 'block';

                try {
                    const text = await AIEngine.generateResponse('rewrite', { draft: content, userProfile: userProfile }, tone);
                    this.insertTextIntoEditor(modal, text);
                    document.body.removeChild(overlay);
                } catch (e) {
                    alert("Erreur: " + e.message);
                    status.style.display = 'none';
                }
            });
        });

        overlay.querySelector('.ai-close-overlay').addEventListener('click', () => document.body.removeChild(overlay));
    }

    createOverlay(title) {
        const div = document.createElement('div');
        div.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:10000; display:flex; justify-content:center; align-items:center;';

        const content = document.createElement('div');
        content.style.cssText = 'background:white; width:400px; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.15); overflow:hidden;';

        content.innerHTML = `
            <div style="padding:12px 16px; border-bottom:1px solid #eee; display:flex; justify-content:space-between; align-items:center;">
                <h3 style="margin:0; font-size:16px;">${title}</h3>
                <button class="ai-close-overlay" style="background:none; border:none; cursor:pointer;">${Icons.x}</button>
            </div>
        `;

        div.appendChild(content);
        return div;
    }

    insertTextIntoEditor(modal, text) {
        const editor = modal.querySelector('.ql-editor');
        if (editor) {
            editor.focus();
            if (document.execCommand('insertText', false, text)) {
                return;
            }
            editor.innerText = text;
            editor.dispatchEvent(new Event('input', { bubbles: true }));
        }
    }
}

/**
 * 5. PLUGIN MANAGER (UI & Logic)
 */
class PluginManager {
    constructor(adapter) {
        this.adapter = adapter;
        this.userProfileManager = new UserProfileManager();
        this.postCreationManager = new PostCreationManager(this.userProfileManager);
        this.activePanel = null;
        this.processedPosts = new WeakSet();
    }

    init() {
        console.log("LinkedIn AI Assistant: Démarrage...");

        this.scanForPosts();
        this.scanForPostModal();

        const observer = new MutationObserver((mutations) => {
            let shouldScan = false;
            let shouldScanModal = false;

            for (const mutation of mutations) {
                if (mutation.addedNodes.length > 0) {
                    shouldScan = true;
                    if (document.querySelector('.share-box') || document.querySelector('.artdeco-modal')) {
                        shouldScanModal = true;
                    }
                    break;
                }
            }
            if (shouldScan) this.scanForPosts();
            if (shouldScanModal) this.scanForPostModal();
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }

    scanForPosts() {
        const posts = document.querySelectorAll(this.adapter.getPostSelector());
        posts.forEach(post => {
            if (!this.processedPosts.has(post)) {
                if (post.offsetHeight > 50) {
                    this.attachFloatingIcon(post);
                    this.processedPosts.add(post);
                }
            }
        });
    }

    scanForPostModal() {
        const modal = document.querySelector('.share-box');
        if (modal) {
            this.postCreationManager.checkAndInject(modal);
        }
    }

    attachFloatingIcon(postElement) {
        if (getComputedStyle(postElement).position === 'static') {
            postElement.style.position = 'relative';
        }

        const icon = document.createElement('div');
        icon.className = 'ai-trigger-icon ai-assistant-wrapper';
        icon.innerHTML = Icons.brain;
        icon.title = "Assistant IA";

        icon.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.togglePanel(postElement);
        });

        postElement.appendChild(icon);
    }

    togglePanel(postElement) {
        if (this.activePanel) {
            this.activePanel.remove();
            this.activePanel = null;
        }

        const panel = this.createPanelUI(postElement);
        postElement.appendChild(panel);
        this.activePanel = panel;
    }

    createPanelUI(postElement) {
        const panel = document.createElement('div');
        panel.className = 'ai-panel ai-assistant-wrapper';

        panel.innerHTML = `
            <div class="ai-panel-header">
                <span class="ai-panel-title">
                    ${Icons.sparkles} Assistant IA
                </span>
                <button class="ai-close-btn" id="ai-close-btn">
                    ${Icons.x}
                </button>
            </div>
            <div id="ai-content-area"></div>
        `;

        panel.querySelector('#ai-close-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            panel.remove();
            this.activePanel = null;
        });

        this.showMainMenu(panel.querySelector('#ai-content-area'), postElement);
        panel.addEventListener('click', (e) => e.stopPropagation());

        return panel;
    }

    showMainMenu(container, postElement) {
        container.innerHTML = `
            <div class="ai-action-list">
                <div class="ai-action-item" data-action="comment">
                    <span class="ai-action-icon">${Icons.message}</span>
                    Rédiger un commentaire
                </div>
                <div class="ai-action-item" data-action="summary">
                    <span class="ai-action-icon">${Icons.fileText}</span>
                    Résumer le post
                </div>
                <div class="ai-action-item" data-action="dm">
                    <span class="ai-action-icon">${Icons.send}</span>
                    Rédiger un DM
                </div>
                <div class="ai-action-item" data-action="analyze">
                    <span class="ai-action-icon">${Icons.userSearch}</span>
                    Analyser le profil
                </div>
                <div class="ai-action-item" id="ai-settings-btn" style="border-top:1px solid #eee; margin-top:8px; padding-top:8px;">
                    <span class="ai-action-icon">${Icons.settings}</span>
                    Mon Profil (Paramètres)
                </div>
            </div>
        `;

        container.querySelectorAll('.ai-action-item:not(#ai-settings-btn)').forEach(item => {
            item.addEventListener('click', () => {
                const action = item.dataset.action;
                this.handleActionSelection(action, container, postElement);
            });
        });

        container.querySelector('#ai-settings-btn').addEventListener('click', () => {
            this.openSettingsModal();
        });
    }

    async openSettingsModal() {
        const profile = await this.userProfileManager.getProfile();
        const overlay = this.postCreationManager.createOverlay('Mon Profil IA');

        overlay.innerHTML += `
            <div style="padding: 16px;">
                <p style="font-size:12px; color:#666; margin-bottom:12px;">Ces informations aideront l'IA à personnaliser vos réponses.</p>
                
                <label style="display:block; margin-bottom:4px; font-weight:600;">Nom complet</label>
                <input type="text" id="ai-profile-name" class="ai-input" value="${profile.name || ''}" style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px; margin-bottom:12px;">

                <label style="display:block; margin-bottom:4px; font-weight:600;">Titre / Expertise</label>
                <input type="text" id="ai-profile-title" class="ai-input" value="${profile.title || ''}" placeholder="Ex: Expert Marketing Digital" style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px; margin-bottom:12px;">

                <label style="display:block; margin-bottom:4px; font-weight:600;">Sujets de prédilection</label>
                <textarea id="ai-profile-topics" class="ai-input" placeholder="Ex: Tech, Startup, Management..." style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px; margin-bottom:16px; height:60px;">${profile.topics || ''}</textarea>

                <button id="ai-save-profile-btn" class="ai-btn-primary" style="width:100%;">Enregistrer</button>
            </div>
        `;
        document.body.appendChild(overlay);

        overlay.querySelector('#ai-save-profile-btn').addEventListener('click', async () => {
            const newProfile = {
                name: overlay.querySelector('#ai-profile-name').value,
                title: overlay.querySelector('#ai-profile-title').value,
                topics: overlay.querySelector('#ai-profile-topics').value
            };
            await this.userProfileManager.saveProfile(newProfile);
            alert("Profil enregistré !");
            document.body.removeChild(overlay);
        });

        overlay.querySelector('.ai-close-overlay').addEventListener('click', () => document.body.removeChild(overlay));
    }

    handleActionSelection(action, container, postElement) {
        if (['comment', 'dm'].includes(action)) {
            this.showToneSelector(container, action, postElement);
        } else {
            this.executeAction(action, null, container, postElement);
        }
    }

    showToneSelector(container, action, postElement) {
        const tones = ['Professionnel', 'Amical', 'Humoristique', 'Contradictoire', 'Inspirant'];

        let html = `
            <div class="ai-view-tone">
                <span class="ai-helper-text">Choisir le ton</span>
                <div style="display:flex; flex-wrap:wrap; margin-bottom:12px;">
                    ${tones.map(t => `<span class="ai-tone-chip" data-tone="${t}">${t}</span>`).join('')}
                </div>
                <button class="ai-link-btn" id="ai-back-btn">Retour</button>
            </div>
        `;
        container.innerHTML = html;

        container.querySelector('#ai-back-btn').addEventListener('click', () => this.showMainMenu(container, postElement));

        container.querySelectorAll('.ai-tone-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                container.querySelectorAll('.ai-tone-chip').forEach(c => c.classList.remove('selected'));
                chip.classList.add('selected');
                this.executeAction(action, chip.dataset.tone, container, postElement);
            });
        });
    }

    async executeAction(action, tone, container, postElement) {
        container.innerHTML = `
            <div style="text-align:center; padding:24px;">
                <div class="ai-spinner"></div>
                <p style="font-size:12px; color:#6b7280; margin-top:12px;">L'IA analyse le post...</p>
            </div>
        `;

        // Fetch profile
        const userProfile = await this.userProfileManager.getProfile();

        const contextData = {
            author: this.adapter.getAuthorName(postElement),
            content: this.adapter.getPostContent(postElement),
            url: this.adapter.getAuthorProfileUrl(postElement),
            images: this.adapter.getPostImages(postElement),
            userProfile: userProfile
        };

        try {
            const resultText = await AIEngine.generateResponse(action, contextData, tone);
            this.showResult(resultText, container, postElement);
        } catch (error) {
            this.showResult(`Erreur: ${error.message}. Veuillez vérifier la console du Service Worker pour plus de détails.`, container, postElement);
        }
    }

    showResult(text, container, postElement) {
        const display = text.startsWith("Erreur:") ? text : text.trim();

        container.innerHTML = `
            <div class="ai-result-view">
                <textarea class="ai-response-box">${display}</textarea>
                <div style="display:flex; gap:8px;">
                    <button class="ai-btn-primary" id="ai-copy-btn" ${display.startsWith("Erreur:") ? 'disabled' : ''}>
                        ${Icons.copy} Copier
                    </button>
                    <button class="ai-btn-secondary" id="ai-retry-btn" title="Recommencer">
                        ${Icons.refresh}
                    </button>
                </div>
                <button class="ai-link-btn" id="ai-home-btn">Nouvelle action</button>
            </div>
        `;

        const textarea = container.querySelector('textarea');
        const copyBtn = container.querySelector('#ai-copy-btn');

        if (display.startsWith("Erreur:")) {
            textarea.style.color = "#dc2626";
        }

        copyBtn.addEventListener('click', () => {
            textarea.select();
            document.execCommand('copy');

            const originalContent = copyBtn.innerHTML;
            copyBtn.innerHTML = `${Icons.check} Copié !`;
            copyBtn.style.background = "#059669";

            setTimeout(() => {
                copyBtn.innerHTML = originalContent;
                copyBtn.style.background = "#6366f1";
            }, 2000);
        });

        container.querySelector('#ai-retry-btn').addEventListener('click', () => {
            this.showMainMenu(container, postElement);
        });

        container.querySelector('#ai-home-btn').addEventListener('click', () => {
            this.showMainMenu(container, postElement);
        });
    }
}

// --- DÉMARRAGE ---
setTimeout(() => {
    const linkedInAdapter = new LinkedInAdapter();
    const manager = new PluginManager(linkedInAdapter);
    manager.init();
}, 2000);