System.register([], function (exports_1, context_1) {
    "use strict";
    var PigsController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            PigsController = class PigsController {
                constructor() {
                    this.Pigs = [];
                }
                add(p) {
                    this.Pigs.push(p);
                    localStorage.PigsArray = JSON.stringify(this.Pigs);
                }
                getAll() {
                    return JSON.parse(localStorage.PigsArray);
                }
                delete(id) {
                    this.Pigs = this.Pigs.filter((p) => {
                        return p.id != id;
                    });
                    localStorage.PigsArray = JSON.stringify(this.Pigs);
                }
            };
            exports_1("PigsController", PigsController);
        }
    };
});
