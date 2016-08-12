import env from './env.js';
let debug = angular.module('debug', [env]);
debug.factory('debug', ($log, env) => {
    if(env == 'production') {
        return {
            info: () => null
        };
    }
    return {
        info: $log.info
    }
})
export default debug = debug.name;