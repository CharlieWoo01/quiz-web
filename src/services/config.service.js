angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quiz-api-char-env.eba-8y2udkpe.eu-north-1.elasticbeanstalk.com/';

    return service;
}]);