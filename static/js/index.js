(function() {
    var app = angular.module('myApp', []);
    app.controller('customersCtrl', function($scope) {
        $scope.list = [{
            'title': 'Calculator',
            'img': './static/img/jdxdxr_0.jpeg',
            'intro': '刚开始接触前端做的一个小玩意儿~',
            'func': '基本的运算+清除+转成百分数;可实现连续运算',
            'link': 'http://119.29.240.225/Calculator',
            'id': 'item1'
        }, {
            'title': 'Calculator',
            'img': './static/img/jdxdxr_0.jpeg',
            'intro': '刚开始接触前端做的一个小玩意儿~',
            'func': '基本的运算+清除+转成百分数;可实现连续运算',
            'link': 'http://119.29.240.225/Calculator',
            'id': 'item2'
        }, {
            'title': 'Calculator',
            'img': './static/img/jdxdxr_0.jpeg',
            'intro': '刚开始接触前端做的一个小玩意儿~',
            'func': '基本的运算+清除+转成百分数;可实现连续运算',
            'link': 'http://119.29.240.225/Calculator',
            'id': 'item3'
        }, {
            'title': 'Calculator',
            'img': './static/img/jdxdxr_0.jpeg',
            'intro': '刚开始接触前端做的一个小玩意儿~',
            'func': '基本的运算+清除+转成百分数;可实现连续运算',
            'link': 'http://119.29.240.225/Calculator',
            'id': 'item4'
        }, {
            'title': 'Calculator',
            'img': './static/img/jdxdxr_0.jpeg',
            'intro': '刚开始接触前端做的一个小玩意儿~',
            'func': '基本的运算+清除+转成百分数;可实现连续运算',
            'link': 'http://119.29.240.225/Calculator',
            'id': 'item5'
        }, {
            'title': 'Calculator',
            'img': './static/img/jdxdxr_0.jpeg',
            'intro': '刚开始接触前端做的一个小玩意儿~',
            'func': '基本的运算+清除+转成百分数;可实现连续运算',
            'link': 'http://119.29.240.225/Calculator',
            'id': 'item6'
        }, {
            'title': '',
            'img': '',
            'intro': '',
            'func': '',
            'link': '',
            'id': 'item7'
        }, {
            'title': '',
            'img': '',
            'intro': '',
            'func': '',
            'link': '',
            'id': 'item8'
        }, {
            'title': '',
            'img': '',
            'intro': '',
            'func': '',
            'link': '',
            'id': 'item9'
        }, {
            'title': '',
            'img': '',
            'intro': '',
            'func': '',
            'link': '',
            'id': 'item10'
        }, {
            'title': '',
            'img': '',

            'intro': '',
            'func': '',
            'link': '',
            'id': 'item11'
        }];
        $scope.sortableListOptions = {
            containment: 'body',
            allowDuplicates: true,
            clone: true,
            orderChanged: function(event) {}
        };

        $scope.run = function() {
            var itemIn = function() {
                $("#item1")[0].style.right = '100%';
                $("#item2")[0].style.right = '100%';
                $("#item3")[0].style.right = '100%';
                $("#item4")[0].style.left = '100%';
                $("#item5")[0].style.left = '100%';
                $("#item6")[0].style.left = '100%';
                $("#item1").delay(1000).animate({ right: '0' }, { easing: 'easeOutQuint', duration: 500 });
                $("#item2").delay(2000).animate({ right: '0' }, { easing: 'easeOutQuint', duration: 500 });
                $("#item3").delay(3000).animate({ right: '0' }, { easing: 'easeOutQuint', duration: 500 });
                $("#item6").delay(4000).animate({ left: '0' }, { easing: 'easeOutQuint', duration: 500 });
                $("#item5").delay(5000).animate({ left: '0' }, { easing: 'easeOutQuint', duration: 500 });
                $("#item4").delay(6000).animate({ left: '0' }, { easing: 'easeOutQuint', duration: 500 });
            }
        	itemIn();
        }
    });
}());
