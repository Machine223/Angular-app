export class AboutService {

    Objets = [
        {
          name : 'Machine a laver',
          status: 'allumé'
        },
        {
          name : 'Television',
          status: 'éteint'
        },  
        {
          name : 'Ordinateur',
          status: 'allumé'
        },
    ];
    switchOnAll(){
        for(let objet of this.Objets){
            objet.status = 'allumé';
        }
    }
    switchOffAll(){
        for(let objet of this.Objets){
            objet.status = 'éteint';
        }
    }
}