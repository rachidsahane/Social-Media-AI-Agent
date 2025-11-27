// --- ICÔNES SVG (Pour éviter les dépendances externes) ---
const Icons = {
    brain: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.97-3.284"/><path d="M17.97 14.716A4 4 0 0 1 18 18"/></svg>`,
    x: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>`,
    sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M9 3v4"/><path d="M3 5h4"/><path d="M3 9h4"/></svg>`,
    message: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>`,
    fileText: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,
    send: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`,
    userSearch: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="7"/><path d="m21 21-6-6"/><circle cx="10" cy="10" r="3"/><path d="M7 16v4"/><path d="M13 16v4"/></svg>`,
    copy: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
    refresh: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>`,
    check: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`
};

/**
 * 1. ADAPTER PATTERN
 * Gestion des spécificités LinkedIn
 */
class LinkedInAdapter {
    getPostSelector() {
        // Sélecteurs précis pour le feed LinkedIn 2024
        return '.feed-shared-update-v2, .occludable-update, div[data-urn]';
    }

    getAuthorName(el) {
        // On essaie plusieurs sélecteurs car LinkedIn change souvent ses classes
        const node = el.querySelector('.update-components-actor__title span[dir="ltr"] > span:first-child') ||
            el.querySelector('.update-components-actor__title') ||
            el.querySelector('.feed-shared-actor__name');
        return node ? node.innerText.trim() : 'Auteur Inconnu';
    }

    getPostContent(el) {
        // Le contenu textuel principal
        const node = el.querySelector('.update-components-text') ||
            el.querySelector('.feed-shared-update-v2__description');
        return node ? node.innerText.trim() : 'Contenu non trouvé';
    }

    getAuthorProfileUrl(el) {
        const node = el.querySelector('a.update-components-actor__meta-link') ||
            el.querySelector('a.app-aware-link');
        return node ? node.href : '';
    }
}

/**
 * 2. MOTEUR IA (Inter-process Communication avec Service Worker)
 */
class AIEngine {
    static async generateResponse(promptType, contextData, tone = 'Neutre') {
        const { author, content } = contextData;
        let systemPrompt = "";

        // Construction du prompt selon l'action
        switch(promptType) {
            case 'comment':
                systemPrompt = `Tu es un expert en réseautage sur LinkedIn. Rédige un commentaire ${tone} en réponse au post suivant de ${author}. Le commentaire doit être pertinent, engageant et professionnel.
                
                POST DE L'AUTEUR:
                "${content}"
                
                COMMENTAIRE SUGGÉRÉ:`;
                break;

            case 'summary':
                systemPrompt = `Résume ce post LinkedIn de ${author} en 3 points clés (bullet points). Sois concis.
                
                POST:
                "${content}"`;
                break;

            case 'dm':
                systemPrompt = `Rédige un message privé (DM) pour ${author} basé sur son post. Le ton doit être ${tone}. Le but est d'initier une conversation ou de féliciter.
                
                POST:
                "${content}"`;
                break;

            case 'analyze':
                systemPrompt = `Analyse le profil psychologique et professionnel de ${author} en te basant uniquement sur ce post. Quel est son style d'écriture ? Quels semblent être ses expertises ? Comment l'approcher efficacement ?
                
                POST:
                "${content}"`;
                break;

            default:
                systemPrompt = "Veuillez spécifier une action valide.";
        }

        try {
            // Envoi du prompt au Service Worker pour qu'il fasse l'appel API
            const response = await chrome.runtime.sendMessage({
                action: 'GENERATE_CONTENT',
                prompt: systemPrompt
            });

            if (response.success) {
                return response.text;
            } else {
                // L'erreur vient du Service Worker, probablement l'API Gemini
                console.error("Content Script - Erreur Service Worker:", response.text);
                throw new Error(response.text);
            }

        } catch (error) {
            // L'erreur vient de la communication chrome.runtime.sendMessage elle-même
            return `Erreur: Impossible de contacter le Service Worker. (${error.message})`;
        }
    }
}

/**
 * 3. PLUGIN MANAGER (UI & Logic)
 */
class PluginManager {
    constructor(adapter) {
        this.adapter = adapter;
        this.activePanel = null;
        this.processedPosts = new WeakSet(); // Pour ne pas ajouter 2x l'icône sur le même élément
    }

    init() {
        console.log("LinkedIn AI Assistant: Démarrage...");

        // 1. Scan initial
        this.scanForPosts();

        // 2. Observer les changements du DOM (Scroll infini)
        const observer = new MutationObserver((mutations) => {
            let shouldScan = false;
            for (const mutation of mutations) {
                if (mutation.addedNodes.length > 0) {
                    shouldScan = true;
                    break;
                }
            }
            if (shouldScan) this.scanForPosts();
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }

    scanForPosts() {
        const posts = document.querySelectorAll(this.adapter.getPostSelector());
        posts.forEach(post => {
            if (!this.processedPosts.has(post)) {
                // Vérifier si le post est assez grand pour mériter l'icône (éviter les faux positifs)
                if (post.offsetHeight > 50) {
                    this.attachFloatingIcon(post);
                    this.processedPosts.add(post);
                }
            }
        });
    }

    attachFloatingIcon(postElement) {
        // S'assurer que le parent est relatif pour positionner l'icône
        if (getComputedStyle(postElement).position === 'static') {
            postElement.style.position = 'relative';
        }

        const icon = document.createElement('div');
        icon.className = 'ai-trigger-icon ai-assistant-wrapper';
        icon.innerHTML = Icons.brain;
        icon.title = "Assistant IA";

        // Empêcher le clic de se propager au post LinkedIn (sinon ça ouvre le post)
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.togglePanel(postElement);
        });

        postElement.appendChild(icon);
    }

    togglePanel(postElement) {
        // Fermer l'ancien panneau s'il existe
        if (this.activePanel) {
            this.activePanel.remove();
            this.activePanel = null;
        }

        // Création du panneau
        const panel = this.createPanelUI(postElement);
        postElement.appendChild(panel);
        this.activePanel = panel;

        // Positionnement
        // Le CSS gère le position:absolute left:-320px
    }

    createPanelUI(postElement) {
        const panel = document.createElement('div');
        panel.className = 'ai-panel ai-assistant-wrapper';

        // Header
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

        // Event Close
        panel.querySelector('#ai-close-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            panel.remove();
            this.activePanel = null;
        });

        // Afficher le menu principal
        this.showMainMenu(panel.querySelector('#ai-content-area'), postElement);

        // Empêcher les clics dans le panneau de fermer ou d'interagir avec LinkedIn
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
            </div>
        `;

        container.querySelectorAll('.ai-action-item').forEach(item => {
            item.addEventListener('click', () => {
                const action = item.dataset.action;
                this.handleActionSelection(action, container, postElement);
            });
        });
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
                // UI Selection feedback
                container.querySelectorAll('.ai-tone-chip').forEach(c => c.classList.remove('selected'));
                chip.classList.add('selected');

                this.executeAction(action, chip.dataset.tone, container, postElement);
            });
        });
    }

    async executeAction(action, tone, container, postElement) {
        // UI Loading
        container.innerHTML = `
            <div style="text-align:center; padding:24px;">
                <div class="ai-spinner"></div>
                <p style="font-size:12px; color:#6b7280; margin-top:12px;">L'IA analyse le post...</p>
            </div>
        `;

        // Data Gathering
        const contextData = {
            author: this.adapter.getAuthorName(postElement),
            content: this.adapter.getPostContent(postElement),
            url: this.adapter.getAuthorProfileUrl(postElement)
        };

        // Call API
        try {
            const resultText = await AIEngine.generateResponse(action, contextData, tone);
            this.showResult(resultText, container, postElement);
        } catch(error) {
            // Afficher l'erreur si elle n'a pas été gérée dans AIEngine
            this.showResult(`Erreur: ${error.message}. Veuillez vérifier la console du Service Worker pour plus de détails.`, container, postElement);
        }
    }

    showResult(text, container, postElement) {
        // Nettoyer le texte si c'est une erreur pour éviter d'afficher le JSON brut
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

        // Empêcher la sélection/copie si c'est un message d'erreur
        if (display.startsWith("Erreur:")) {
            textarea.style.color = "#dc2626"; // Rouge pour l'erreur
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
// On attend un peu que la page charge
setTimeout(() => {
    const linkedInAdapter = new LinkedInAdapter();
    const manager = new PluginManager(linkedInAdapter);
    manager.init();
}, 2000);