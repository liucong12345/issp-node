/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('marketserveAdd', ['toastr']);
app.controller('personDemandAddCtrl', function($scope, marketserveSer,$state,toastr){
    //添加竞争对手
    $scope.companyAddFun = function(){
        var data = $scope.data;
        marketserveSer.addMarketserveapply(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectmeasure.manage.personDemand.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
});



