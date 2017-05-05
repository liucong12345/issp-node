/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('marketserveAdd', ['toastr']);
app.controller('basicinfoAddCtrl', function($scope, basicinfoSer,$state,toastr){
    //添加
    $scope.companyAddFun = function(){
        $scope.data.startTime = angular.element('.startTiming').val();//计划时间
        var data = $scope.data;
        basicinfoSer.addMarketserveapply1(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectmeasure.manage.basicinfo.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
    //控制数字不能小于1
    $scope.changeNum =function(){
        if($scope.data.predictAttendNo < 1){
            $scope.data.predictAttendNo = 1;
        }
    }
});




