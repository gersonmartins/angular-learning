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
var hero_service_1 = require("./hero.service");
var HeroTeamBuilderComponent = (function () {
    function HeroTeamBuilderComponent(heroes) {
        this.heroes = heroes;
    }
    return HeroTeamBuilderComponent;
}());
HeroTeamBuilderComponent = __decorate([
    core_1.Component({
        selector: 'hero-team-builder',
        template: "\n    <div class=\"buttons\">\n      <button [disabled]=\"!heroes.canAdd()\" (click)=\"heroes.addInactive()\">Add inactive hero</button>\n      <button [disabled]=\"!heroes.canAdd()\" (click)=\"heroes.addActive()\">Add active hero</button>\n      <button [disabled]=\"!heroes.canRemove()\" (click)=\"heroes.remove()\">Remove hero</button>\n    </div>\n    <div class=\"columns\">\n      <div class=\"column\">\n        <h4>Basic State</h4>\n        <p>Switch between active/inactive on click.</p>\n        <hero-list-basic [heroes]=heroes></hero-list-basic>\n      </div>\n      <div class=\"column\">\n        <h4>Styles inline in transitions</h4>\n        <p>Animated effect on click, no persistend end styles.</p>\n        <hero-list-inline-styles [heroes]=heroes></hero-list-inline-styles>\n      </div>\n      <div class=\"column\">\n        <h4>Combined transition syntax</h4>\n        <p>Switch between active/inactive on click. Define just one transition used in both directions.</p>\n        <hero-list-combined-transitions [heroes]=heroes></hero-list-combined-transitions>\n      </div>\n      <div class=\"column\">\n        <h4>Two-way transition syntax</h4>\n        <p>Switch between active/inactive on click. Define just one transition used in both directions using the <=> syntax.</p>\n        <hero-list-twoway [heroes]=heroes></hero-list-twoway>\n      </div>\n      <div class=\"column\">\n        <h4>Enter & Leave</h4>\n        <p>Enter and leave animations using the void state.</p>\n        <hero-list-enter-leave [heroes]=heroes></hero-list-enter-leave>\n      </div>\n    </div>\n    <div class=\"columns\">\n      <div class=\"column\">\n        <h4>Enter & Leave & States</h4>\n        <p>\n          Enter and leave animations combined with active/inactive state animations.\n          Different enter and leave transitions depending on state.\n        </p>\n        <hero-list-enter-leave-states [heroes]=heroes></hero-list-enter-leave-states>\n      </div>\n      <div class=\"column\">\n        <h4>Auto Style Calc</h4>\n        <p>Leave animation from the current computed height using the auto-style value *.</p>\n        <hero-list-auto [heroes]=heroes></hero-list-auto>\n      </div>\n      <div class=\"column\">\n        <h4>Different Timings</h4>\n        <p>Enter and leave animations with different easings, ease-in for enter, ease-out for leave.</p>\n        <hero-list-timings [heroes]=heroes></hero-list-timings>\n      </div>\n      <div class=\"column\">\n        <h4>Multiple Keyframes</h4>\n        <p>Enter and leave animations with three keyframes in each, to give the transition some bounce.</p>\n        <hero-list-multistep [heroes]=heroes></hero-list-multistep>\n      </div>\n      <div class=\"column\">\n        <h4>Parallel Groups</h4>\n        <p>Enter and leave animations with multiple properties animated in parallel with different timings.</p>\n        <hero-list-groups [heroes]=heroes></hero-list-groups>\n      </div>\n    </div>\n  ",
        styles: ["\n    .buttons {\n      text-align: center;\n    }\n    button {\n      padding: 1.5em 3em;\n    }\n    .columns {\n      display: flex;\n      flex-direction: row;\n    }\n    .column {\n      flex: 1;\n      padding: 10px;\n    }\n    .column p {\n      min-height: 6em;\n    }\n  "],
        providers: [hero_service_1.Heroes]
    }),
    __metadata("design:paramtypes", [hero_service_1.Heroes])
], HeroTeamBuilderComponent);
exports.HeroTeamBuilderComponent = HeroTeamBuilderComponent;
//# sourceMappingURL=hero-team-builder.component.js.map