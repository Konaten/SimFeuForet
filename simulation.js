import { readFileSync } from 'fs'

function lireConfig(nomFichier){
    try {
        const cf = readFileSync(nomFichier, 'utf-8')
        const l = cf.split('\n')
        const config = {}

        l.forEach(l => {
            const [parametre,valeur] = l.split('=').map(item => item.trim())
            config[parametre] = valeur
        })

        return config
    } catch (erreur) {
        console.error('Erreur lors de la lecture du fichier de configuration :', erreur)
        return null
    }
}

function initGrille(hauteur, largeur, posInit){

}

function afficherGrille(grille){
    const container = document.querySelector('#containerId')
    container.innerText = ''

    for(let i = 0; i < grille.length; i++){
        const row = document.createElement('div')
        row.textContent = grille[i].join(' ')
        container.append(row)
    }
}

function regleEtape(grille,probPropagation){

}

function main(){
    const config = lireConfig("config.txt")
    const {hauteur, largeur, posInit,probPropagation} = config

    let grille = initGrille(hauteur,largeur,posInit)
    let etape = 0;

    while(true){
        afficherGrille(grille)
        regleEtape(grille,probPropagation)
        etape++;
        
        if(!grille.some(row => row.includes('en feu'))) {
            console.log('La simulation est terminée après ${etape} étape.')
            break
        }
    }
}

main()