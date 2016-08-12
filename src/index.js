import angularAnimate from 'angular-animate';
import angularUIRouter from 'angular-ui-router';
import angularUIBootstrap from 'angular-ui-bootstrap';

import env from './scripts/common/env.js';
import debug from './scripts/common/debug.js';

export const Kaas = angular.module('kaas', [
angularAnimate,
angularUIRouter,
angularUIBootstrap,
env,
debug
]);

import config from './scripts/common/config.js';
Kaas.config(config);


Kaas.run((debug) => {
	debug.info('Kaas is working!');

})

Kaas.controller('kaas', ($scope) => {
	$scope.test = "testing";
})
if(module.hot){
	module.hot.accept();
}
