(function () {

    var workshopService = function ($http) {

        var getWorkshops = function () {
            return $http.get("http://localhost:59533/workshops/Listar")
                        .then(function (response) {
                            return response.data;
                        });
        };

        var createWorkshop = function(name, date) {
            $http.post("http://localhost:59533/workshops/Cadastrar");
        };

        return {
            getWorkshops: getWorkshops,
            createWorkshop: createWorkshop
        };
    };

    var module = angular.module("SubscribeToWorkshop");
    module.factory("workshopService", workshopService);

}());