"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var hero_team_builder_component_1 = require("./hero-team-builder.component");
var hero_list_basic_component_1 = require("./hero-list-basic.component");
var hero_list_inline_styles_component_1 = require("./hero-list-inline-styles.component");
var hero_list_enter_leave_component_1 = require("./hero-list-enter-leave.component");
var hero_list_enter_leave_states_component_1 = require("./hero-list-enter-leave-states.component");
var hero_list_combined_transitions_component_1 = require("./hero-list-combined-transitions.component");
var hero_list_twoway_component_1 = require("./hero-list-twoway.component");
var hero_list_auto_component_1 = require("./hero-list-auto.component");
var hero_list_groups_component_1 = require("./hero-list-groups.component");
var hero_list_multistep_component_1 = require("./hero-list-multistep.component");
var hero_list_timings_component_1 = require("./hero-list-timings.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, animations_1.BrowserAnimationsModule],
        declarations: [
            hero_team_builder_component_1.HeroTeamBuilderComponent,
            hero_list_basic_component_1.HeroListBasicComponent,
            hero_list_inline_styles_component_1.HeroListInlineStylesComponent,
            hero_list_combined_transitions_component_1.HeroListCombinedTransitionsComponent,
            hero_list_twoway_component_1.HeroListTwowayComponent,
            hero_list_enter_leave_component_1.HeroListEnterLeaveComponent,
            hero_list_enter_leave_states_component_1.HeroListEnterLeaveStatesComponent,
            hero_list_auto_component_1.HeroListAutoComponent,
            hero_list_timings_component_1.HeroListTimingsComponent,
            hero_list_multistep_component_1.HeroListMultistepComponent,
            hero_list_groups_component_1.HeroListGroupsComponent
        ],
        bootstrap: [hero_team_builder_component_1.HeroTeamBuilderComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map