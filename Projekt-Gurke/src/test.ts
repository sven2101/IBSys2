/**
 * Created by Max on 13.08.2015.
 */

/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2'

// Annotation section
@Component({
    selector: 'my-app'
})
@View({
    template: '<h1></h1>'
})
// Component controller
class MyAppComponent {
    name: string;
    constructor() {
        this.name = 'Bob';
    }
}
bootstrap(MyAppComponent);