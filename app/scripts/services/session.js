'use strict';

angular.module('buildersApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
