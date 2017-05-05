var app = angular.module('basicinfo', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectmeasure.manage.basicinfo", {
        url : "/basicinfo",
        views : {  
            "content@root.projectmeasure.manage" : {
                templateUrl : "root/projectmeasure/manage/basicinfo/_res/html/index.html",
                controller:"basicinfoCtrl"
            },"menu@root.projectmeasure.manage" : {
                templateUrl : "root/projectmeasure/manage/basicinfo/_res/html/menu.html",
                controller:"basicinfoMenuCtrl"
            }
        }
    }).state("root.projectmeasure.manage.basicinfo.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectmeasure.manage.basicinfo":{
                templateUrl : "root/projectmeasure/manage/basicinfo/add/_res/html/index.html",
                controller:'basicinfoAddCtrl'
            }
        }
    }).state("root.projectmeasure.manage.basicinfo.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.projectmeasure.manage.basicinfo":{
                templateUrl : "root/projectmeasure/manage/basicinfo/edit/_res/html/index.html",
                controller:'EditCtrl'
            }
        }
    })
});