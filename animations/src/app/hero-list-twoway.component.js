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
var HeroListTwowayComponent = (function () {
    function HeroListTwowayComponent() {
    }
    return HeroListTwowayComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_service_1.Heroes)
], HeroListTwowayComponent.prototype, "heroes", void 0);
HeroListTwowayComponent = __decorate([
    core_1.Component({
        selector: 'hero-list-twoway',
        template: "\n   <ul>\n     <li *ngFor=\"let hero of heroes\"\n         [@heroState]=\"hero.state\"\n         (click)=\"hero.toggleState()\">\n       {{hero.name}}\n     </li>\n   </ul>\n ",
        styleUrls: ['./hero-list.component.css'],
        /*
         * Define two states, "inactive" and "active", and the end
         * styles that apply whenever the element is in those states.
         * Then define an animated transition between these two
         * states, in *both* directions.
         */
        animations: [
            animations_1.trigger('heroState', [
                animations_1.state('inactive', animations_1.style({
                    backgroundColor: '#eee',
                    transform: 'scale(1)'
                })),
                animations_1.state('active', animations_1.style({
                    backgroundColor: '#cfd8dc',
                    transform: 'scale(1.1)'
                })),
                animations_1.transition('inactive <=> active', animations_1.animate('100ms ease-out'))
            ])
        ]
    })
], HeroListTwowayComponent);
exports.HeroListTwowayComponent = HeroListTwowayComponent;
//# sourceMappingURL=hero-list-twoway.component.js.map