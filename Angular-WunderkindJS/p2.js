ppsApp.controller('p2Controller', function($scope, sharedProperties) {
    $scope.p2Direktverkauf = sharedProperties.getp2Direktverkauf();
    $scope.p2Absatz = sharedProperties.getP2AbsatzValue();
    $scope.p2PlanLagerbestand = sharedProperties.getP2PlanLagerbestandValue();
    $scope.p2IstLagerbestand = sharedProperties.getP2IstLagerbestandValue();
    $scope.p2Warteschlange = sharedProperties.getP2WarteschlangeValue();
    $scope.p2Bearbeitung = sharedProperties.getP2BearbeitungValue();
    $scope.p2Absatz = sharedProperties.getP2AbsatzValue();
    $scope.e26PlanLagerbestand = sharedProperties.getE26_2PlanLagerbestandValue();
    $scope.e26IstLagerbestand = parseInt(sharedProperties.getE26IstLagerbestandValue())/3;
    $scope.e26Warteschlange = sharedProperties.getE26_2WarteschlangeValue();
    $scope.e26Bearbeitung = sharedProperties.getE26_2BearbeitungValue();
    $scope.e56PlanLagerbestand = sharedProperties.getE56PlanLagerbestandValue();
    $scope.e56IstLagerbestand = sharedProperties.getE56IstLagerbestandValue();
    $scope.e56Warteschlange = sharedProperties.getE56WarteschlangeValue();
    $scope.e56Bearbeitung = sharedProperties.getE56BearbeitungValue();
    $scope.e16PlanLagerbestand = sharedProperties.getE16_2PlanLagerbestandValue();
    $scope.e16IstLagerbestand = parseInt(sharedProperties.getE16IstLagerbestandValue())/3;
    $scope.e16Warteschlange = sharedProperties.getE16_2WarteschlangeValue();
    $scope.e16Bearbeitung = sharedProperties.getE16_2BearbeitungValue();
    $scope.e17PlanLagerbestand = sharedProperties.getE17_2PlanLagerbestandValue();
    $scope.e17IstLagerbestand = parseInt(sharedProperties.getE17IstLagerbestandValue())/3;
    $scope.e17Warteschlange = sharedProperties.getE17_2WarteschlangeValue();
    $scope.e17Bearbeitung = sharedProperties.getE17_2BearbeitungValue();
    $scope.e55PlanLagerbestand = sharedProperties.getE55PlanLagerbestandValue();
    $scope.e55IstLagerbestand = sharedProperties.getE55IstLagerbestandValue();
    $scope.e55Warteschlange = sharedProperties.getE55WarteschlangeValue();
    $scope.e55Bearbeitung = sharedProperties.getE55BearbeitungValue();
    $scope.e5PlanLagerbestand = sharedProperties.getE5PlanLagerbestandValue();
    $scope.e5IstLagerbestand = sharedProperties.getE5IstLagerbestandValue();
    $scope.e5Warteschlange = sharedProperties.getE5WarteschlangeValue();
    $scope.e5Bearbeitung = sharedProperties.getE5BearbeitungValue();
    $scope.e11PlanLagerbestand = sharedProperties.getE11PlanLagerbestandValue();
    $scope.e11IstLagerbestand = sharedProperties.getE11IstLagerbestandValue();
    $scope.e11Warteschlange = sharedProperties.getE11WarteschlangeValue();
    $scope.e11Bearbeitung = sharedProperties.getE11BearbeitungValue();
    $scope.e54PlanLagerbestand = sharedProperties.getE54PlanLagerbestandValue();
    $scope.e54IstLagerbestand = sharedProperties.getE54IstLagerbestandValue();
    $scope.e54Warteschlange = sharedProperties.getE54WarteschlangeValue();
    $scope.e54Bearbeitung = sharedProperties.getE54BearbeitungValue();
    $scope.e8PlanLagerbestand = sharedProperties.getE8PlanLagerbestandValue();
    $scope.e8IstLagerbestand = sharedProperties.getE8IstLagerbestandValue();
    $scope.e8Warteschlange = sharedProperties.getE8WarteschlangeValue();
    $scope.e8Bearbeitung = sharedProperties.getE8BearbeitungValue();
    $scope.e14PlanLagerbestand = sharedProperties.getE14PlanLagerbestandValue();
    $scope.e14IstLagerbestand = sharedProperties.getE14IstLagerbestandValue();
    $scope.e14Warteschlange = sharedProperties.getE14WarteschlangeValue();
    $scope.e14Bearbeitung = sharedProperties.getE14BearbeitungValue();
    $scope.e19PlanLagerbestand = sharedProperties.getE19PlanLagerbestandValue();
    $scope.e19IstLagerbestand = sharedProperties.getE19IstLagerbestandValue();
    $scope.e19Warteschlange = sharedProperties.getE19WarteschlangeValue();
    $scope.e19Bearbeitung = sharedProperties.getE19BearbeitungValue();


    $scope.p2_Plan = function() {
        if ($scope.p2Absatz >= 0 && $scope.p2PlanLagerbestand >= 0 && $scope.p2IstLagerbestand >= 0 && $scope.p2Warteschlange >= 0 && $scope.p2Bearbeitung >= 0) {
            $scope.p2Plan = parseInt($scope.p2Absatz) + parseInt($scope.p2Direktverkauf) + parseInt($scope.p2PlanLagerbestand) - parseInt($scope.p2IstLagerbestand) - parseInt($scope.p2Warteschlange) - parseInt($scope.p2Bearbeitung);
            if($scope.p2Plan < 0) {
                $scope.p2Plan = 0;
            }
            sharedProperties.setp2Direktverkauf($scope.p2Direktverkauf);
            sharedProperties.setP2Value($scope.p2Plan);
            sharedProperties.setP2AbsatzValue($scope.p2Absatz);
            sharedProperties.setP2BearbeitungValue($scope.p2Bearbeitung);
            sharedProperties.setP2IstLagerbestandValue($scope.p2IstLagerbestand);
            sharedProperties.setP2PlanLagerbestandValue($scope.p2PlanLagerbestand);
            sharedProperties.setP2WarteschlangeValue($scope.p2Warteschlange);
            return $scope.p2Plan;
        }
    };

    $scope.e26_Plan = function() {
        if ($scope.p2Plan >= 0 &&$scope.p2Warteschlange >= 0 && $scope.e26Bearbeitung >= 0 && $scope.e26IstLagerbestand >= 0 && $scope.e26PlanLagerbestand >= 0 && $scope.e26Warteschlange >= 0) {
            $scope.e26Plan = parseInt($scope.p2Plan) + parseInt($scope.p2Warteschlange) + parseInt($scope.e26PlanLagerbestand) - parseInt($scope.e26IstLagerbestand) - parseInt($scope.e26Warteschlange) - parseInt($scope.e26Bearbeitung);
            if($scope.e26Plan < 0) {
                $scope.e26Plan = 0;
            }
            sharedProperties.setE26_2Value($scope.e26Plan);
            sharedProperties.setE26_2BearbeitungValue($scope.e26Bearbeitung);
            sharedProperties.setE26_2IstLagerbestandValue($scope.e26IstLagerbestand);
            sharedProperties.setE26_2PlanLagerbestandValue($scope.e26PlanLagerbestand);
            sharedProperties.setE26_2WarteschlangeValue($scope.e26Warteschlange);
            return $scope.e26Plan;
        }
    };

    $scope.e56_Plan = function() {
        if ($scope.p2Plan >= 0 &&$scope.p2Warteschlange >= 0 && $scope.e56Bearbeitung >= 0 && $scope.e56IstLagerbestand >= 0 && $scope.e56PlanLagerbestand >= 0 && $scope.e56Warteschlange >= 0) {
            $scope.e56Plan = parseInt($scope.p2Plan) + parseInt($scope.p2Warteschlange) + parseInt($scope.e56PlanLagerbestand) - parseInt($scope.e56IstLagerbestand) - parseInt($scope.e56Warteschlange) - parseInt($scope.e56Bearbeitung);
            if($scope.e56Plan < 0) {
                $scope.e56Plan = 0;
            }
            sharedProperties.setE56Value($scope.e56Plan);
            sharedProperties.setE56BearbeitungValue($scope.e56Bearbeitung);
            sharedProperties.setE56IstLagerbestandValue($scope.e56IstLagerbestand);
            sharedProperties.setE56PlanLagerbestandValue($scope.e56PlanLagerbestand);
            sharedProperties.setE56WarteschlangeValue($scope.e56Warteschlange);
            return $scope.e56Plan;
        }
    };

    $scope.e16_Plan = function() {
        if ($scope.e56Plan >= 0 &&$scope.e56Warteschlange >= 0 && $scope.e16Bearbeitung >= 0 && $scope.e16IstLagerbestand >= 0 && $scope.e16PlanLagerbestand >= 0 && $scope.e16Warteschlange >= 0) {
            $scope.e16Plan = parseInt($scope.e56Plan) + parseInt($scope.e56Warteschlange) + parseInt($scope.e16PlanLagerbestand) - parseInt($scope.e16IstLagerbestand) - parseInt($scope.e16Warteschlange) - parseInt($scope.e16Bearbeitung);
            if($scope.e16Plan < 0) {
                $scope.e16Plan = 0;
            }
            sharedProperties.setE16_2Value($scope.e16Plan);
            sharedProperties.setE16_2BearbeitungValue($scope.e16Bearbeitung);
            sharedProperties.setE16_2IstLagerbestandValue($scope.e16IstLagerbestand);
            sharedProperties.setE16_2PlanLagerbestandValue($scope.e16PlanLagerbestand);
            sharedProperties.setE16_2WarteschlangeValue($scope.e16Warteschlange);
            return $scope.e16Plan;
        }
    };

    $scope.e17_Plan = function() {
        if ($scope.e56Plan >= 0 &&$scope.e56Warteschlange >= 0 && $scope.e17Bearbeitung >= 0 && $scope.e17IstLagerbestand >= 0 && $scope.e17PlanLagerbestand >= 0 && $scope.e17Warteschlange >= 0) {
            $scope.e17Plan = parseInt($scope.e56Plan) + parseInt($scope.e56Warteschlange) + parseInt($scope.e17PlanLagerbestand) - parseInt($scope.e17IstLagerbestand) - parseInt($scope.e17Warteschlange) - parseInt($scope.e17Bearbeitung);
            if($scope.e17Plan < 0) {
                $scope.e17Plan = 0;
            }
            sharedProperties.setE17_2Value($scope.e17Plan);
            sharedProperties.setE17_2BearbeitungValue($scope.e17Bearbeitung);
            sharedProperties.setE17_2IstLagerbestandValue($scope.e17IstLagerbestand);
            sharedProperties.setE17_2PlanLagerbestandValue($scope.e17PlanLagerbestand);
            sharedProperties.setE17_2WarteschlangeValue($scope.e17Warteschlange);
            return $scope.e17Plan;
        }
    };

    $scope.e55_Plan = function() {
        if ($scope.e56Plan >= 0 && $scope.e56Warteschlange >= 0 && $scope.e55Bearbeitung >= 0 && $scope.e55IstLagerbestand >= 0 && $scope.e55PlanLagerbestand >= 0 && $scope.e55Warteschlange >= 0) {
            $scope.e55Plan = parseInt($scope.e56Plan) + parseInt($scope.e56Warteschlange) + parseInt($scope.e55PlanLagerbestand) - parseInt($scope.e55IstLagerbestand) - parseInt($scope.e55Warteschlange) - parseInt($scope.e55Bearbeitung);
            if($scope.e55Plan < 0) {
                $scope.e55Plan = 0;
            }
            sharedProperties.setE55Value($scope.e55Plan);
            sharedProperties.setE55BearbeitungValue($scope.e55Bearbeitung);
            sharedProperties.setE55IstLagerbestandValue($scope.e55IstLagerbestand);
            sharedProperties.setE55PlanLagerbestandValue($scope.e55PlanLagerbestand);
            sharedProperties.setE55WarteschlangeValue($scope.e55Warteschlange);
            return $scope.e55Plan;
        }
    };

    $scope.e5_Plan = function() {
        if ($scope.e55Plan >= 0 && $scope.e55Warteschlange >= 0 && $scope.e5Bearbeitung >= 0 && $scope.e5IstLagerbestand >= 0 && $scope.e5PlanLagerbestand >= 0 && $scope.e5Warteschlange >= 0) {
            $scope.e5Plan = parseInt($scope.e55Plan) + parseInt($scope.e55Warteschlange) + parseInt($scope.e5PlanLagerbestand) - parseInt($scope.e5IstLagerbestand) - parseInt($scope.e5Warteschlange) - parseInt($scope.e5Bearbeitung);
            if($scope.e5Plan < 0) {
                $scope.e5Plan = 0;
            }
            sharedProperties.setE5Value($scope.e5Plan);
            sharedProperties.setE5BearbeitungValue($scope.e5Bearbeitung);
            sharedProperties.setE5IstLagerbestandValue($scope.e5IstLagerbestand);
            sharedProperties.setE5PlanLagerbestandValue($scope.e5PlanLagerbestand);
            sharedProperties.setE5WarteschlangeValue($scope.e5Warteschlange);
            return $scope.e5Plan;
        }
    };

    $scope.e11_Plan = function() {
        if ($scope.e55Plan >= 0 && $scope.e55Warteschlange >= 0 && $scope.e11Bearbeitung >= 0 && $scope.e11IstLagerbestand >= 0 && $scope.e11PlanLagerbestand >= 0 && $scope.e11Warteschlange >= 0) {
            $scope.e11Plan = parseInt($scope.e55Plan) + parseInt($scope.e55Warteschlange) + parseInt($scope.e11PlanLagerbestand) - parseInt($scope.e11IstLagerbestand) - parseInt($scope.e11Warteschlange) - parseInt($scope.e11Bearbeitung);
            if($scope.e11Plan < 0) {
                $scope.e11Plan = 0;
            }
            sharedProperties.setE11Value($scope.e11Plan);
            sharedProperties.setE11BearbeitungValue($scope.e11Bearbeitung);
            sharedProperties.setE11IstLagerbestandValue($scope.e11IstLagerbestand);
            sharedProperties.setE11PlanLagerbestandValue($scope.e11PlanLagerbestand);
            sharedProperties.setE11WarteschlangeValue($scope.e11Warteschlange);
            return $scope.e11Plan;
        }
    };

    $scope.e54_Plan = function() {
        if ($scope.e55Plan >= 0 && $scope.e55Warteschlange >= 0 && $scope.e54Bearbeitung >= 0 && $scope.e54IstLagerbestand >= 0 && $scope.e54PlanLagerbestand >= 0 && $scope.e54Warteschlange >= 0) {
            $scope.e54Plan = parseInt($scope.e55Plan) + parseInt($scope.e55Warteschlange) + parseInt($scope.e54PlanLagerbestand) - parseInt($scope.e54IstLagerbestand) - parseInt($scope.e54Warteschlange) - parseInt($scope.e54Bearbeitung);
            if($scope.e54Plan < 0) {
                $scope.e54Plan = 0;
            }
            sharedProperties.setE54Value($scope.e54Plan);
            sharedProperties.setE54BearbeitungValue($scope.e54Bearbeitung);
            sharedProperties.setE54IstLagerbestandValue($scope.e54IstLagerbestand);
            sharedProperties.setE54PlanLagerbestandValue($scope.e54PlanLagerbestand);
            sharedProperties.setE54WarteschlangeValue($scope.e54Warteschlange);
            return $scope.e54Plan;
        }
    };

    $scope.e8_Plan = function() {
        if ($scope.e54Plan >= 0 && $scope.e54Warteschlange >= 0 && $scope.e8Bearbeitung >= 0 && $scope.e8IstLagerbestand >= 0 && $scope.e8PlanLagerbestand >= 0 && $scope.e8Warteschlange >= 0) {
            $scope.e8Plan = parseInt($scope.e54Plan) + parseInt($scope.e54Warteschlange) + parseInt($scope.e8PlanLagerbestand) - parseInt($scope.e8IstLagerbestand) - parseInt($scope.e8Warteschlange) - parseInt($scope.e8Bearbeitung);
            if($scope.e8Plan < 0) {
                $scope.e8Plan = 0;
            }
            sharedProperties.setE8Value($scope.e8Plan);
            sharedProperties.setE8BearbeitungValue($scope.e8Bearbeitung);
            sharedProperties.setE8IstLagerbestandValue($scope.e8IstLagerbestand);
            sharedProperties.setE8PlanLagerbestandValue($scope.e8PlanLagerbestand);
            sharedProperties.setE8WarteschlangeValue($scope.e8Warteschlange);
            return $scope.e8Plan;
        }
    };

    $scope.e14_Plan = function() {
        if ($scope.e54Plan >= 0 && $scope.e54Warteschlange >= 0 && $scope.e14Bearbeitung >= 0 && $scope.e14IstLagerbestand >= 0 && $scope.e14PlanLagerbestand >= 0 && $scope.e14Warteschlange >= 0) {
            $scope.e14Plan = parseInt($scope.e54Plan) + parseInt($scope.e54Warteschlange) + parseInt($scope.e14PlanLagerbestand) - parseInt($scope.e14IstLagerbestand) - parseInt($scope.e14Warteschlange) - parseInt($scope.e14Bearbeitung);
            if($scope.e14Plan < 0) {
                $scope.e14Plan = 0;
            }
            sharedProperties.setE14Value($scope.e14Plan);
            sharedProperties.setE14BearbeitungValue($scope.e14Bearbeitung);
            sharedProperties.setE14IstLagerbestandValue($scope.e14IstLagerbestand);
            sharedProperties.setE14PlanLagerbestandValue($scope.e14PlanLagerbestand);
            sharedProperties.setE14WarteschlangeValue($scope.e14Warteschlange);
            return $scope.e14Plan;
        }
    };

    $scope.e19_Plan = function() {
        if ($scope.e54Plan >= 0 && $scope.e54Warteschlange >= 0 && $scope.e19Bearbeitung >= 0 && $scope.e19IstLagerbestand >= 0 && $scope.e19PlanLagerbestand >= 0 && $scope.e19Warteschlange >= 0) {
            $scope.e19Plan = parseInt($scope.e54Plan) + parseInt($scope.e54Warteschlange) + parseInt($scope.e19PlanLagerbestand) - parseInt($scope.e19IstLagerbestand) - parseInt($scope.e19Warteschlange) - parseInt($scope.e19Bearbeitung);
            if($scope.e19Plan < 0) {
                $scope.e19Plan = 0;
            }
            sharedProperties.setE19Value($scope.e19Plan);
            sharedProperties.setE19BearbeitungValue($scope.e19Bearbeitung);
            sharedProperties.setE19IstLagerbestandValue($scope.e19IstLagerbestand);
            sharedProperties.setE19PlanLagerbestandValue($scope.e19PlanLagerbestand);
            sharedProperties.setE19WarteschlangeValue($scope.e19Warteschlange);
            return $scope.e19Plan;
        }
    };

    $scope.p2_Warteschlange = function() {
        return $scope.p2Warteschlange;
    };

    $scope.e56_Warteschlange = function() {
        return $scope.e56Warteschlange;
    };

    $scope.e55_Warteschlange = function() {
        return $scope.e55Warteschlange;
    };

    $scope.e54_Warteschlange = function() {
        return $scope.e54Warteschlange;
    };
    $scope.vertriebswunsch = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Verbindliche Aufträge/Vertriebswunsch";
        } else {
            return "Sales orders"
        }
    };
    $scope.direktverkauf = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Direktverkauf";
        } else {
            return "Direct Sales"
        }
    };
    $scope.planLagerbestand = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Geplanter Lagerbestand am Ende der Planperiode (Sicherheitsbestand)";
        } else {
            return "Planned warehouse stock at the end of the following period (safety stock)"
        }
    };
    $scope.istLagerbestand = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Lagerbestand am Ende der Vorperiode";
        } else {
            return "Warehouse stock at the end of the passed period"
        }
    };
    $scope.warteschlange = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Aufträge in der Warteschlange";
        } else {
            return "Orders in the waiting queue"
        }
    };
    $scope.bearbeitung = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Aufträge in Bearbeitung";
        } else {
            return "Work in progress"
        }
    };
    $scope.produktionsprogramm = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Produktionsaufträge für die kommende Periode";
        } else {
            return "Production orders for the following period"
        }
    };
} );
