export enum Category {
    Grey,
    Chestnut,
    White,
    Black
}

export enum Personality {
    Perfect,
    Good,
    Fair,
    Bad,
}

export interface PigAttributes {
    name: string;
    breed: string;
    category: Category;
    height: number;
    weight: number;
    distinctPersonality: string;
    id: number;
    ability:string;
}
export abstract class Pigs implements PigAttributes {
    name: string;
    breed: string;
    category: Category;
    height: number;
    weight: number;
    distinctPersonality: string;
    id: number;
    ability:any;

    constructor(name: string, category: Category, breed: string, height: number, 
        weight:number, distinctPersonality: string, id: number, ability:string) {
            this.name = name;
            this.category = category;
            this.breed = breed;
            this.height = height;
            this.weight = weight;
            this.distinctPersonality = distinctPersonality;
            this.id = id;
            this.ability = ability
        }
}

export class GreyPigs extends Pigs {
    swimming: number;
    constructor(name: string, category: Category.Grey, breed: string, height: number, 
        weight:number, distinctPersonality: string, id: number, ability:string, swimming: number) {
            super(name, Category.Grey, breed,height, weight, distinctPersonality,id, ability)
            this.swimming = swimming;
        }
}

export class ChestnutPigs extends Pigs {
    linguistically: string;
    constructor(name: string, category: Category.Chestnut, breed: string, height: number, 
        weight:number, distinctPersonality: string, id: number, ability:string, linguistically: string) {
            super(name, Category.Chestnut, breed,height, weight, distinctPersonality,id, ability)
            this.linguistically = linguistically;
        }
}

export class WhitePigs extends Pigs {
    running: number;
    constructor(name: string, category: Category.White, breed: string, height: number, 
        weight:number, distinctPersonality: string, id: number, ability:string, running: number) {
            super(name, Category.White, breed,height, weight, distinctPersonality,id, ability)
            this.running = running;
        }
}

export class BlackPigs extends Pigs {
    strengthAbility: number;
    constructor(name: string, category: Category.Black, breed: string, height: number, 
        weight:number, distinctPersonality: string, id: number, ability:string, strengthAbility: number) {
            super(name, Category.Black, breed,height, weight, distinctPersonality,id, ability)
            this.strengthAbility = strengthAbility;
        }
}