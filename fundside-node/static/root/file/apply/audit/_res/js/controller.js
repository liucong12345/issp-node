var app = angular.module('applyAudit', ['toastr']);
app.controller('applyAuditCtrl', function($scope, applySer,$state,toastr,$stateParams){
    var basicId = {id : $stateParams.id};
    //获取值
    applySer.getOneById(basicId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.basicEditFun = function(){
        var vm = $scope;
        vm.editInfo.fundEntryTime = angular.element('.fundEntryTime').val();
        applySer.auditContent(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.file.apply.list[12]');
                toastr.success( "已成功编辑", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});