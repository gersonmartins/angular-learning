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
var HeroListEnterLeaveComponent = (function () {
    function HeroListEnterLeaveComponent() {
    }
    return HeroListEnterLeaveComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_service_1.Heroes)
], HeroListEnterLeaveComponent.prototype, "heroes", void 0);
HeroListEnterLeaveComponent = __decorate([
    core_1.Component({
        selector: 'hero-list-enter-leave',
        template: "\n    <ul>\n      <li *ngFor=\"let hero of heroes\"\n          [@flyInOut]=\"'in'\">\n        {{hero.name}}\n      </li>\n    </ul>\n  ",
        styleUrls: ['./hero-list.component.css'],
        /* The element here always has the state "in" when it
         * is present. We animate two transitions: From void
         * to in and from in to void, to achieve an animated
         * enter and leave transition. The element enters from
         * the left and leaves to the right using translateX.
         */
        animations: [
            animations_1.trigger('flyInOut', [
                animations_1.state('in', animations_1.style({ transform: 'translateX(0)' })),
                animations_1.transition('void => *', [
                    animations_1.style({ transform: 'translateX(-100%)' }),
                    animations_1.animate(100)
                ]),
                animations_1.transition('* => void', [
                    animations_1.animate(100, animations_1.style({ transform: 'translateX(100%)' }))
                ])
            ])
        ]
    })
], HeroListEnterLeaveComponent);
exports.HeroListEnterLeaveComponent = HeroListEnterLeaveComponent;
//# sourceMappingURL=hero-list-enter-leave.component.js.map