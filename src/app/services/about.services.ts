import { Subject } from "rxjs";

export class AboutService {

    objetSubject = new Subject<any[]>();

    private Objets = [
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
    emitObjetSubject(){
        this.objetSubject.next(this.Objets.slice()); // force le Suject a emettre ce quon y passe comme argument
    }

    getObjetById(id: number){
        const objet = this.Objets.find(
            (monObjet)=> {return monObjet.id === id;}
        );
        return objet;
        this.emitObjetSubject();

    }
    switchOnAll(){
        for(let objet of this.Objets){
            objet.status = 'allumé';
        }
        this.emitObjetSubject();
    }
    switchOffAll(){
        for(let objet of this.Objets){
            objet.status = 'éteint';
        }
        this.emitObjetSubject();
    }

    switchOnOne(index: number){
        this.Objets[index].status = 'allumé';
        this.emitObjetSubject();
    }
    switchOffOne(index: number){
        this.Objets[index].status = 'éteint';
        this.emitObjetSubject();
    }
}