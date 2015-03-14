(function () {

    var workshopService = function ($http) {

        var getWorkshops = function () {
            return $http.get("https://localhost:1233/workshops/listar")
                        .then(function (response) {
                            return response.data;
                        });
        };
        return {
            getWorkshops: getWorkshops
        };

    };

    var module = angular.module("SubscribeToWorkshop");
    module.factory("workshopService", workshopService);

}());