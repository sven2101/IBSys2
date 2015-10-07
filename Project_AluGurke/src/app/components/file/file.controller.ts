/// <reference path="../../angular.d.ts" />

class FileController {
	
	test: string = "test";
	
	constructor () {
	}
}


angular.module("FileModule").controller("FileController",[FileController]);