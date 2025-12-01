// --- CONFIGURATION API ---
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent";

/**
 * Convertit une URL d'image en Base64
 */
async function fetchImageAsBase64(url) {
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64data = reader.result.split(',')[1];
                resolve({
                    mimeType: blob.type,
                    data: base64data
                });
            };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    } catch (error) {
        console.error("Erreur lors du téléchargement de l'image:", error);
        return null;
    }
}

/**
 * Fonction pour gérer l'appel à l'API Gemini.
 * Elle est isolée des restrictions CSP de la page LinkedIn.
 */
async function callGeminiAPI(systemPrompt, images = []) {
    console.log("Service Worker: Appel API en cours...");
    try {
        const parts = [{ text: systemPrompt }];

        // Traitement des images
        if (images && images.length > 0) {
            for (const img of images) {
                let imageData = null;

                if (img.url) {
                    // Si c'est une URL, on la télécharge
                    imageData = await fetchImageAsBase64(img.url);
                } else if (img.data) {
                    // Si c'est déjà du base64
                    imageData = img;
                }

                if (imageData) {
                    parts.push({
                        inline_data: {
                            mime_type: imageData.mimeType,
                            data: imageData.data
                        }
                    });
                }
            }
        }

        const payload = {
            contents: [{
                parts: parts
            }]
        };

        const response = await fetch(`${API_URL}?key=${API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Service Worker - Gemini API Error:", errorData);
            throw new Error(`Gemini API returned status ${response.status}: ${JSON.stringify(errorData)}`);
        }

        const data = await response.json();

        // On retourne le texte généré
        return data.candidates[0].content.parts[0].text;

    } catch (error) {
        console.error("Service Worker - Fetch Error:", error.message);
        // On retourne le message d'erreur pour qu'il soit affiché par content.js
        return `Erreur: Impossible de contacter Gemini. (${error.message})`;
    }
}

// Écoute des messages venant du Content Script (content.js)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // Si l'action est 'GENERATE_CONTENT', on appelle l'API
    if (request.action === 'GENERATE_CONTENT') {
        // Le Service Worker doit utiliser un return true et appeler sendResponse de manière asynchrone
        callGeminiAPI(request.prompt, request.images)
            .then(response => {
                sendResponse({ success: true, text: response });
            })
            .catch(error => {
                sendResponse({ success: false, text: error.message });
            });

        // Indique que sendResponse sera appelé de manière asynchrone
        return true;
    }
});