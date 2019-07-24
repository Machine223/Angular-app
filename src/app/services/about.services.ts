export class AboutService {

    Objets = [
        {
            id: 1,
          name : 'Machine a laver',
          status: 'allumé'
        },
        {
            id: 2,
          name : 'Television',
          status: 'éteint'
        },  
        {
            id: 3,
          name : 'Ordinateur',
          status: 'allumé'
        },
    ];
    getObjetById(id: number){
        const objet = this.Objets.find(
            (monObjet)=> {return monObjet.id === id;}
        );
        return objet;
    }
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

    switchOnOne(index: number){
        this.Objets[index].status = 'allumé';
    }
    switchOffOne(index: number){
        this.Objets[index].status = 'éteint';
    }
}