var app = angular.module('projectBonus',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.projectBonus", {
        url: "/projectBonus",
        views: {
            "content@root": {
                templateUrl: "root/projectBonus/_res/html/index.html",
                controller: "projectBonusCtrl"
            },"nav@root": {
                templateUrl: "root/projectBonus/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})