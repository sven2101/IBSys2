if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'angular2/angular2'], function (require, exports, angular2_1) {
    var Test = (function () {
        function Test() {
            this.name = "Links zu anderen Seiten";
        }
        Test = __decorate([
            angular2_1.Component({
                selector: 'test', properties: ['name']
            }),
            angular2_1.View({
                template: "\n        <h2>{{name}}</h2>\n\n    ",
                directives: [angular2_1.For]
            }), 
            __metadata('design:paramtypes', [])
        ], Test);
        return Test;
    })();
    angular2_1.bootstrap(Test);
});
