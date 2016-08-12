let env = angular.module('env', []);
env.constant('env', 'dev');

env.run(($log, env) => {
    $log.info('current enviroment is ' + env);
});
export default env = env.name;