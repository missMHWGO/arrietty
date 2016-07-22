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
                $("#item7")[0].style.right = '100%';
                $("#item8")[0].style.right = '100%';
                $("#item9")[0].style.right = '100%';
                $("#item10")[0].style.left = '100%';
                $("#item11")[0].style.left = '100%';
                $("#item1").delay(1000).animate({ right: '0' }, { easing: 'easeOutQuint', duration: 500 });
                $("#item2").delay(2000).animate({ right: '0' }, { easing: 'easeOutQuint', duration: 500 });
                $("#item3").delay(3000).animate({ right: '0' }, { easing: 'easeOutQuint', duration: 500 });
                $("#item6").delay(4000).animate({ left: '0' }, { easing: 'easeOutQuint', duration: 500 });
                $("#item5").delay(5000).animate({ left: '0' }, { easing: 'easeOutQuint', duration: 500 });
                $("#item4").delay(6000).animate({ left: '0' }, { easing: 'easeOutQuint', duration: 500 });
                $("#item7").delay(7000).animate({ right: '0' }, { easing: 'easeOutQuint', duration: 500 });
                $("#item8").delay(8000).animate({ right: '0' }, { easing: 'easeOutQuint', duration: 500 });
                $("#item9").delay(9000).animate({ right: '0' }, { easing: 'easeOutQuint', duration: 500 });
                $("#item11").delay(10000).animate({ left: '0' }, { easing: 'easeOutQuint', duration: 500 });
                $("#item10").delay(11000).animate({ left: '0' }, { easing: 'easeOutQuint', duration: 500 });
            }
            itemIn();
        }
        var audio = document.getElementById("audio");
        $scope.state = "";
        $scope.playMusic = function(state){
            $scope.state = state;
            if ($scope.state=='play') {
                audio.play();
                document.getElementsByClassName("music")[0].style.display = 'none';
                document.getElementsByClassName("music-run")[0].style.display = 'block';                
            } else if($scope.state=='stop'){
                audio.pause();
                document.getElementsByClassName("music-run")[0].style.display = 'none';
                document.getElementsByClassName("music")[0].style.display = 'block';
            }
        }
    });
}());
