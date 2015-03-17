(function () {

    var workshopService = function ($http, $location) {

        var getWorkshops = function () {
            return $http.get("http://localhost:59533/workshops/Listar")
                        .then(function (response) {
                            return response.data;
                        });
        };

        var createWorkshop = function(data) {
            $http.post("/workshops/Create", data);
        };

        return {
            getWorkshops: getWorkshops,
            createWorkshop: createWorkshop
        };
    };

    var module = angular.module("SubscribeToWorkshop");
    module.factory("workshopService", workshopService);

}());