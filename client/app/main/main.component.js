import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
    user = {
        email: '',
        mobile: '',
        address: '',
        zipcode: '',
        city: '',
        state: ''
    };
    errors = {};
    submitted = false;

    /*@ngInject*/
    constructor(Auth, $state) {
        this.Auth = Auth;
        this.$state = $state;
    }

    register(form) {
        this.submitted = true;

        if (form.$valid) {
            return this.Auth.createUser({
                                            name: this.user.email,
                                            email: this.user.mobile,
                                            password: this.user.address,
                                            name: this.user.city,
                                            email: this.user.zipcode,
                                            password: this.user.state
                                        })
                .then(() => {
                    // Account created, redirect to home
                    this.$state.go('admin');
                })
                .catch(err => {
                    err = err.data;
                    this.errors = {};
                    // Update validity of form fields that match the mongoose errors
                    angular.forEach(err.errors, (error, field) => {
                        form[field].$setValidity('mongoose', false);
                        this.errors[field] = error.message;
                    });
                });
        }
    }
}

export default angular.module('fullstackApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;

