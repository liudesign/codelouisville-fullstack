import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';
// controls the main page and render the comments
export class MainController {
    Comments = [];
    newComment = '';

    /*@ngInject*/
    constructor($http, $scope, socket) {
        this.$http = $http;
        this.socket = socket;

        $scope.$on('$destroy', function () {
            socket.unsyncUpdates('comment');
        });
    }

    $onInit() {
        this.$http.get('/api/comments').success(function (comments) {
            $scope.comments = comments;

            // Update array with any new or deleted items pushed from the socket
            socket.syncUpdates('comment', $scope.comments, function (event, comment, comments) {
                // This callback is fired after the comments array is updated by the socket listeners

                // sort the array every time its modified
                comments.sort(function (a, b) {
                    a = new Date(a.date);
                    b = new Date(b.date);
                    return a > b ? -1 : a < b ? 1 : 0;
                });
            });
        })
            .then(response => {
                this.Comments = response.data;
                this.socket.syncUpdates('Comment', this.Comments);
            });
    }

    addComment() {
        if (this.newComment) {
            this.$http.post('/api/comments', {
                content: this.newComment
            });
            this.newComment = '';
        }
    }

    deleteComment(comment) {
        this.$http.delete(`/api/comments/${Comment._id}`);
    }
}

export default angular.module('fullstackApp.main', [uiRouter])
    .config(routing)
    .component('main', {
        template: require('./main.html'),
        controller: MainController
    })
    .name;
