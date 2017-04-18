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
var HeroListGroupsComponent = (function () {
    function HeroListGroupsComponent() {
    }
    return HeroListGroupsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_service_1.Heroes)
], HeroListGroupsComponent.prototype, "heroes", void 0);
HeroListGroupsComponent = __decorate([
    core_1.Component({
        selector: 'hero-list-groups',
        template: "\n    <ul>\n      <li *ngFor=\"let hero of heroes\"\n          [@flyInOut]=\"'in'\">\n        {{hero.name}}\n      </li>\n    </ul>\n  ",
        styleUrls: ['./hero-list.component.css'],
        styles: ["\n    li {\n      padding: 0 !important;\n      text-align: center;\n    }\n  "],
        /* The element here always has the state "in" when it
         * is present. We animate two transitions: From void
         * to in and from in to void, to achieve an animated
         * enter and leave transition.
         *
         * The transitions have  *parallel group* that allow
         * animating several properties at the same time but
         * with different timing configurations. On enter
         * (void => *) we start the opacity animation 0.1s
         * earlier than the translation/width animation.
         * On leave (* => void) we do the opposite -
         * the translation/width animation begins immediately
         * and the opacity animation 0.1s later.
         */
        animations: [
            animations_1.trigger('flyInOut', [
                animations_1.state('in', animations_1.style({ width: 120, transform: 'translateX(0)', opacity: 1 })),
                animations_1.transition('void => *', [
                    animations_1.style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
                    animations_1.group([
                        animations_1.animate('0.3s 0.1s ease', animations_1.style({
                            transform: 'translateX(0)',
                            width: 120
                        })),
                        animations_1.animate('0.3s ease', animations_1.style({
                            opacity: 1
                        }))
                    ])
                ]),
                animations_1.transition('* => void', [
                    animations_1.group([
                        animations_1.animate('0.3s ease', animations_1.style({
                            transform: 'translateX(50px)',
                            width: 10
                        })),
                        animations_1.animate('0.3s 0.2s ease', animations_1.style({
                            opacity: 0
                        }))
                    ])
                ])
            ])
        ]
    })
], HeroListGroupsComponent);
exports.HeroListGroupsComponent = HeroListGroupsComponent;
//# sourceMappingURL=hero-list-groups.component.js.map