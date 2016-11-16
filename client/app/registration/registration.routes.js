'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('registration', {
      url: '/register',
      template: '<registration></registration>'
    });
}
