System.register([], function (exports_1, context_1) {
    "use strict";
    var Category, Personality, Pigs, GreyPigs, ChestnutPigs, WhitePigs, BlackPigs;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (Category) {
                Category[Category["Grey"] = 0] = "Grey";
                Category[Category["Chestnut"] = 1] = "Chestnut";
                Category[Category["White"] = 2] = "White";
                Category[Category["Black"] = 3] = "Black";
            })(Category || (exports_1("Category", Category = {})));
            (function (Personality) {
                Personality[Personality["Perfect"] = 0] = "Perfect";
                Personality[Personality["Good"] = 1] = "Good";
                Personality[Personality["Fair"] = 2] = "Fair";
                Personality[Personality["Bad"] = 3] = "Bad";
            })(Personality || (exports_1("Personality", Personality = {})));
            Pigs = class Pigs {
                constructor(name, category, breed, height, weight, distinctPersonality, id, ability) {
                    this.name = name;
                    this.category = category;
                    this.breed = breed;
                    this.height = height;
                    this.weight = weight;
                    this.distinctPersonality = distinctPersonality;
                    this.id = id;
                    this.ability = ability;
                }
            };
            exports_1("Pigs", Pigs);
            GreyPigs = class GreyPigs extends Pigs {
                constructor(name, category, breed, height, weight, distinctPersonality, id, ability, swimming) {
                    super(name, Category.Grey, breed, height, weight, distinctPersonality, id, ability);
                    this.swimming = swimming;
                }
            };
            exports_1("GreyPigs", GreyPigs);
            ChestnutPigs = class ChestnutPigs extends Pigs {
                constructor(name, category, breed, height, weight, distinctPersonality, id, ability, linguistically) {
                    super(name, Category.Chestnut, breed, height, weight, distinctPersonality, id, ability);
                    this.linguistically = linguistically;
                }
            };
            exports_1("ChestnutPigs", ChestnutPigs);
            WhitePigs = class WhitePigs extends Pigs {
                constructor(name, category, breed, height, weight, distinctPersonality, id, ability, running) {
                    super(name, Category.White, breed, height, weight, distinctPersonality, id, ability);
                    this.running = running;
                }
            };
            exports_1("WhitePigs", WhitePigs);
            BlackPigs = class BlackPigs extends Pigs {
                constructor(name, category, breed, height, weight, distinctPersonality, id, ability, strengthAbility) {
                    super(name, Category.Black, breed, height, weight, distinctPersonality, id, ability);
                    this.strengthAbility = strengthAbility;
                }
            };
            exports_1("BlackPigs", BlackPigs);
        }
    };
});
