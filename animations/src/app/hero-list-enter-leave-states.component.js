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
var HeroListEnterLeaveStatesComponent = (function () {
    function HeroListEnterLeaveStatesComponent() {
    }
    return HeroListEnterLeaveStatesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_service_1.Heroes)
], HeroListEnterLeaveStatesComponent.prototype, "heroes", void 0);
HeroListEnterLeaveStatesComponent = __decorate([
    core_1.Component({
        selector: 'hero-list-enter-leave-states',
        template: "\n    <ul>\n      <li *ngFor=\"let hero of heroes\"\n          (click)=\"hero.toggleState()\"\n          [@heroState]=\"hero.state\">\n        {{hero.name}}\n      </li>\n    </ul>\n  ",
        styleUrls: ['./hero-list.component.css'],
        /* The elements here have two possible states based
         * on the hero state, "active", or "inactive". We animate
         * six transitions: Between the two states in both directions,
         * and between each state and void. With this we can animate
         * the enter and leave of elements differently based on which
         * state they are in when they are added and removed.
         */
        animations: [
            animations_1.trigger('heroState', [
                animations_1.state('inactive', animations_1.style({ transform: 'translateX(0) scale(1)' })),
                animations_1.state('active', animations_1.style({ transform: 'translateX(0) scale(1.1)' })),
                animations_1.transition('inactive => active', animations_1.animate('100ms ease-in')),
                animations_1.transition('active => inactive', animations_1.animate('100ms ease-out')),
                animations_1.transition('void => inactive', [
                    animations_1.style({ transform: 'translateX(-100%) scale(1)' }),
                    animations_1.animate(100)
                ]),
                animations_1.transition('inactive => void', [
                    animations_1.animate(100, animations_1.style({ transform: 'translateX(100%) scale(1)' }))
                ]),
                animations_1.transition('void => active', [
                    animations_1.style({ transform: 'translateX(0) scale(0)' }),
                    animations_1.animate(200)
                ]),
                animations_1.transition('active => void', [
                    animations_1.animate(200, animations_1.style({ transform: 'translateX(0) scale(0)' }))
                ])
            ])
        ]
    })
], HeroListEnterLeaveStatesComponent);
exports.HeroListEnterLeaveStatesComponent = HeroListEnterLeaveStatesComponent;
//# sourceMappingURL=hero-list-enter-leave-states.component.js.map