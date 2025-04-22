import * as Model from "./Pig";
import Pigs = Model.Pigs

interface PigsServices {
    add(p:Pigs):void;
    getAll:() => Pigs[];
    delete(id: number):void
}

export class PigsController implements PigsServices {
    Pigs: Pigs[]

    constructor(){
        this.Pigs = []
    }

    add(p: Pigs) {
        this.Pigs.push(p)
        localStorage.PigsArray = JSON.stringify(this.Pigs)
    }

    getAll(): Pigs[] {
        return JSON.parse(localStorage.PigsArray)
    }

    delete(id:number): void {
        this.Pigs = this.Pigs.filter((p)=>{
            return p.id != id
        })
        localStorage.PigsArray = JSON.stringify(this.Pigs)
    }
} 