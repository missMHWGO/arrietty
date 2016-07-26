(function() {
    var app = angular.module('myApp', []);
    app.controller('customersCtrl', function($scope) {
        $scope.list = [{
            'title': '长江云政务新媒体平台',
            'img': './static/img/jdxdxr_0.jpeg',
            'intro': '实习时参与的项目~',
            'func': '长江云政务新媒体平台后台管理页面',
            'time': '进行中',
            'link': '',
            'id': 'item1'
        }, {
            'title': '腾讯众创海报生成器',
            'img': './static/img/jdxdxr_1.jpeg',
            'intro': '腾讯众创开园活动的宣传工具~',
            'func': '选择本地照片（拍照或相册）;用自己的照片瞬间做成一个高大上的封面或海报;可自己输入内容;将照片保存到本地相册;分享应用',
            'time': '2016.5',
            'link': 'http://119.29.240.225/txzc',
            'id': 'item2'
        }, {
            'title': '自动发送邮件工具',
            'img': './static/img/jdxdxr_2.png',
            'intro': '为了方便给几千人发送邮件而写的一个小工具~',
            'func': '一键给几千人发送邮件;可读取excel中的邮箱信息和txt中的正文内容;由用户输入主题;可添加多个附件;可视化界面;VBScript',
            'time': '2016.5',
            'link': 'http://119.29.240.225/sendemail/', 
            'id': 'item3'
        }, {
            'title': '你藏我猜',
            'img': './static/img/jdxdxr_3.jpg',
            'intro': '数字图像处理课设做的一个小玩意~',
            'func': '将文字信息隐藏在一张图片中;可加密;可解密;文字、图片和密码用户自行输入;可读取任意上传的隐藏了文字信息的图片中的信息',
            'time': '2016.5',
            'link': 'http://1.yinxieshu.applinzi.com/encode.php',
            'id': 'item4'
        }, {
            'title': '奇怪的PS大法',
            'img': './static/img/jdxdxr_4.jpg',
            'intro': '机器学习课设做的一个小东东~',
            'func': '深度学习+人脸检测+haar特征+python',
            'time': '2016.4',
            'link': 'http://119.29.240.225/faceswap',
            'id': 'item5'
        }, {
            'title': '武汉创业红娘投票系统',
            'img': './static/img/jdxdxr_5.jpeg',
            'intro': '武汉创业红娘公益服务中心投资人投票使用的一个小页面~',
            'func': '显示各项目信息;提供投票功能;简单验证填入信息是否合法;统计投票信息',
            'time': '2016.4',
            'link': '',
            'id': 'item6'
        }, {
            'title': 'Contacts',
            'img': './static/img/jdxdxr_6.png',
            'intro': '刚开始接触前端做的一个小通讯录~',
            'func': '显示基本的通讯录信息;附带照片;记录、导师、年级的增删查改;照片用户自行上传;内容筛选显示;分页;照片直传七牛云',
            'time': '2016.3',
            'link': 'http://119.29.240.225/training',
            'id': 'item7'
        }, {
            'title': 'Puzzle',
            'img': './static/img/jdxdxr_7.png',
            'intro': '刚开始接触前端做的一个小拼图游戏~',
            'func': '点击方块若周围有空格则移动;可判定胜利条件;可重置;可生成任意阶拼图;数字随机;可使用键盘操作',
            'time': '2016.1',
            'link': 'http://119.29.240.225/Puzzle8/Puzzle8.html',
            'id': 'item8'
        }, {
            'title': 'Calculator',
            'img': './static/img/jdxdxr_8.jpeg',
            'intro': '刚开始接触前端做的一个小计算器~',
            'func': '两个数字（包括小数）的基本运算;一个数字求百分比;可清零;连续运算',
            'time': '2015.12',
            'link': 'http://119.29.240.225/Calculator',
            'id': 'item9'
        }, {
            'title': 'WangJiajing的blog',
            'img': './static/img/jdxdxr_9.jpg',
            'intro': '这是宝宝的博客啦~⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄',
            'func': '帮助宝宝自己长记性 = =',
            'time': '进行中',
            'link': 'http://www.wangjiajing.com',
            'id': 'item10'
        }, {
            'title': 'WangJiajing的github',
            'img': './static/img/jdxdxr_10.png',
            'intro': '这是宝宝的github啦~⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄',
            'func': '让宝宝的代码不会丢 = =',
            'time': '进行中',
            'link': 'https://github.com/missMHWGO/',
            'id': 'item11'
        }];
        $scope.sortableListOptions = {
            containment: 'body',
            allowDuplicates: true,
            clone: true,
            orderChanged: function(event) {}
        };

        $scope.run = function() {
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
        var audio = document.getElementById("audio");
        $scope.state = "";
        $scope.playMusic = function(state) {
            $scope.state = state;
            if ($scope.state == 'play') {
                audio.play();
                document.getElementsByClassName("music")[0].style.display = 'none';
                document.getElementsByClassName("music-run")[0].style.display = 'block';
            } else if ($scope.state == 'stop') {
                audio.pause();
                document.getElementsByClassName("music-run")[0].style.display = 'none';
                document.getElementsByClassName("music")[0].style.display = 'block';
            }
        }
    });
}());
