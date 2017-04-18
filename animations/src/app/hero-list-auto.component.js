"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var hero_service_1 = require("./hero.service");
var HeroListAutoComponent = (function () {
    function HeroListAutoComponent() {
    }
    return HeroListAutoComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_service_1.Heroes)
], HeroListAutoComponent.prototype, "heroes", void 0);
HeroListAutoComponent = __decorate([
    core_1.Component({
        selector: 'hero-list-auto',
        template: "\n    <ul>\n      <li *ngFor=\"let hero of heroes\"\n          [@shrinkOut]=\"'in'\">\n        {{hero.name}}\n      </li>\n    </ul>\n  ",
        styleUrls: ['./hero-list.component.css'],
        /* When the element leaves (transition "in => void" occurs),
         * get the element's current computed height and animate
         * it down to 0.
         */
        animations: [
            animations_1.trigger('shrinkOut', [
                animations_1.state('in', animations_1.style({ height: '*' })),
                animations_1.transition('* => void', [
                    animations_1.style({ height: '*' }),
                    animations_1.animate(250, animations_1.style({ height: 0 }))
                ])
            ])
        ]
    })
], HeroListAutoComponent);
exports.HeroListAutoComponent = HeroListAutoComponent;
//# sourceMappingURL=hero-list-auto.component.js.map