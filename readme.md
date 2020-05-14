# ATTENTION! REPO IS ONLY USED FOR DEPLOYING ON HEROKU
Please refer to [https://github.com/robert-hoekstra/progressive-web-apps-1920](https://github.com/robert-hoekstra/progressive-web-apps-1920)

# Progressive Webapps
//Robuuste, toegankelijke websites ontwerpen en maken …

## Feedback punten
3 punten waar ik graag feedback over zou willen hebben:
* Manifest
* npm build, watch, run. What? Wat valt er precies onder tooling?
* Wat moet de service worker precies doen? Ik cache nu gewoon pagina's en css...

## Booky de OBA mascotte!

Een applicatie om informatie te verzamelen voor jouw werkstuk!

### Case
De gebruiker leert het OBA kennen door te navigeren door de OBA applicatie. De mascotte Booky helpt je op weg met verschillende elementen die komen kijken bij het maken van een werkstuk.

De leerling leert zo de basisprincipes van een werkstuk maar ook de functie van een bibliotheek en toegankelijkheid die het met zich meebrengt voor de leerling.

### Live on Heroku
The applicatie staat live op heroku en wordt gedeployed vanuit deze repo: [https://github.com/robert-hoekstra/pwa](https://github.com/robert-hoekstra/pwa)
De applicatie kan gestart worden door op de link te klikken bovenaan de repo!

### Lokaal op eigen machine
Zorg ervoor dat npm en node geinstalleerd is op jouw device!

* clone repo
* cd docs
* npm install
* npm run
* navigeer naar localhost:3000 in de browser

### Node & NPM Installeren
[node](https://nodejs.org/en/)
[npm](https://docs.npmjs.com/cli/install)


### Changes as of may
* Added sw-precache to Gulp
* Service worker is now being created through gulp
* New filetypes precached: html, js, css, jpg, png, ,gif,json
* Add Defer to script. Moved script to head
* Redeployed to Heroku
* removed folders from cache
* Add Async to gulp parallel tasks
* Removed SpeechJS (not allowed anymore)
* Add new lighthouse audit