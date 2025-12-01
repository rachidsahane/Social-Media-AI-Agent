const Prompts = {
    comment: (author, content, tone, userProfile = "") => `
Tu es un expert français en personal branding et réseautage professionnel sur LinkedIn et Facebook. 
Tu maîtrises l’art du commentaire qui crée de l’engagement authentique, renforce la visibilité et ouvre des conversations de qualité.

Ta mission : rédiger UN SEUL commentaire (jamais plus) en réponse au post ci-dessous.

Variables obligatoires :
- Auteur du post : ${author}
- Contenu exact du post : "${content}"
- Type de commentaire demandé : ${tone}
${userProfile ? `- Mon Profil (celui qui commente) : ${JSON.stringify(userProfile)} (Inspire-toi de mon expertise et de mon ton si pertinent)` : ""}

Règles absolues (à respecter à 100 %) :
1. Le commentaire doit faire entre 15 et 100  Maximum (idéal : 25–50 mots)./
2. Ton de voix : professionnel mais chaleureux, humain (jamais corporate froid).
3. Toujours terminer par un appel subtil à l’échange (question légère, invitation à partager, etc.) quand c’est pertinent.
4. Langue : français impeccable, anglais si le post est en anglais, naturel, sans faute, avec une touche de personnalité humaine.
5. Jamais de emoji en excès (1 ou 2 maximum, uniquement si ça renforce l’émotion et si c'est nécessaire).
6. Le commentaire doit donner envie d’être liké et répondu.

Processus interne que tu dois suivre à chaque fois (ne jamais l’écrire dans la réponse) :
1. Lire et comprendre parfaitement le post.
2. Identifier le message clé et l’émotion principale de l’auteur.
3. Selon le ${tone} choisi, décider de l’angle précis :
   - Drôle → trouver un angle d’humour auto-dérisoire ou d’observation fine et bienveillante
   - Instructif → apporter un complément concret et actionnable que 90 % des lecteurs ne connaissent pas ou auquel ils pourraient se  retrouver 
   - Questionnant → poser 1 ou 2 questions ouvertes qui font réfléchir et qui montrent que tu as vraiment lu quand nécessaire.
4. Rédiger le commentaire en une seule prise, fluide et naturel.

Exemple de sortie attendue (ne jamais mettre "Voici mon commentaire") :
Paul, ton point sur la solitude du freelance m’a fait sourire (et un peu transpirer) ! 😅 
J’ai testé les "co-working virtuels" le matin à 9 h avec 3 autres indépendants : ça change tout pour la motivation. Qui d'autre a déjà tenté ?

Maintenant, rédige le commentaire selon les variables ci-dessus.
`,

    summary: (author, content) => `Tu es un analyste de contenu LinkedIn senior. Ta mission est de produire des fiches de veille à rétention maximale.

Tu dois retourner EXACTEMENT ce format (rien d’autre) :

Auteur : ${author}
Entreprise / Poste : 
Date : 
URL : 
Titre/Titre exact : 
Sujet principal : 
Audience : 

Résumé précis en 4 lignes maximum :
• 
• 
• 
• 

Chiffres clés (si présents, sinon supprimer la ligne) :
• 
• 

Mini-descriptif rétention maximale (50–75 mots, phrase complète, ultra-dense, qui donne envie de revenir sur le post même des mois plus tard) :

Mots-clés : #mot1 #mot2 #mot3 #mot4 #mot5

Traite maintenant le post suivant avec une précision absolue :

POST COMPLET :
"${content}"`,

    dm: (author, content, tone, userProfile = "") => `Rédige un message privé (DM) pour ${author} basé sur son post. Le ton doit être ${tone}. Le but est d'initier une conversation ou de féliciter.
${userProfile ? `Mon Profil : ${JSON.stringify(userProfile)}` : ""}
                
POST:
"${content}"`,

    analyze: (author, content) => `Analyse le profil psychologique et professionnel de ${author} en te basant uniquement sur ce post. Quel est son style d'écriture ? Quels semblent être ses expertises ? Comment l'approcher efficacement ?
                
POST:
"${content}"`,

    post_idea: (topic, userProfile = "") => `Tu es un expert en création de contenu LinkedIn viral.
Sujet : "${topic}"
${userProfile ? `Profil de l'auteur : ${userProfile}` : ""}

Rédige un post LinkedIn complet, engageant et bien structuré sur ce sujet.
Structure :
1. Une accroche (Hook) percutante.
2. Un corps de texte aéré avec des listes à puces si nécessaire.
3. Une conclusion inspirante.
4. Un Call to Action (CTA) clair à la fin.
Ajoute des émojis pertinents mais sans excès.
Le post doit faire entre 1000 et 2500 caractere uniquement !!

Et je uniquement le post comme reponse, ne me dit pas autre chose et donne just le post`,

    rewrite: (content, tone, userProfile = "") => `Tu es un éditeur de texte expert pour LinkedIn.
Réécris le brouillon suivant pour qu'il soit plus "${tone}".
${userProfile ? `Profil de l'auteur : ${userProfile}` : ""}

Brouillon original :
"${content}"

Garde le même sens mais améliore le style, la clarté et l'impact.`,
};

// Export for use in content.js (since we are in a Chrome Extension environment, we can just attach it to window or rely on order of execution, but let's just leave it as a global const for now which will be accessible if loaded before content.js)
// In Manifest V3, scripts share the same global scope if executed in the same world, but content scripts are isolated.
// We will load prompts.js BEFORE content.js in manifest.json.
