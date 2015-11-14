ppsApp.controller('p1Controller', function($scope, sharedProperties) {
    $scope.p1Direktverkauf = sharedProperties.getp1Direktverkauf();
    $scope.p1Absatz = sharedProperties.getP1AbsatzValue();
    $scope.p1PlanLagerbestand = sharedProperties.getP1PlanLagerbestandValue();
    $scope.p1IstLagerbestand = sharedProperties.getP1IstLagerbestandValue();
    $scope.p1Warteschlange = sharedProperties.getP1WarteschlangeValue();
    $scope.p1Bearbeitung = sharedProperties.getP1BearbeitungValue();
    $scope.p1Absatz = sharedProperties.getP1AbsatzValue();
    $scope.e26PlanLagerbestand = sharedProperties.getE26_1PlanLagerbestandValue();
    $scope.e26IstLagerbestand = parseInt(sharedProperties.getE26IstLagerbestandValue())/3;
    $scope.e26Warteschlange = sharedProperties.getE26_1WarteschlangeValue();
    $scope.e26Bearbeitung = sharedProperties.getE26_1BearbeitungValue();
    $scope.e51PlanLagerbestand = sharedProperties.getE51PlanLagerbestandValue();
    $scope.e51IstLagerbestand = sharedProperties.getE51IstLagerbestandValue();
    $scope.e51Warteschlange = sharedProperties.getE51WarteschlangeValue();
    $scope.e51Bearbeitung = sharedProperties.getE51BearbeitungValue();
    $scope.e16PlanLagerbestand = sharedProperties.getE16_1PlanLagerbestandValue();
    $scope.e16IstLagerbestand = parseInt(sharedProperties.getE16IstLagerbestandValue())/3;
    $scope.e16Warteschlange = sharedProperties.getE16_1WarteschlangeValue();
    $scope.e16Bearbeitung = sharedProperties.getE16_1BearbeitungValue();
    $scope.e17PlanLagerbestand = sharedProperties.getE17_1PlanLagerbestandValue();
    $scope.e17IstLagerbestand = parseInt(sharedProperties.getE17IstLagerbestandValue())/3;
    $scope.e17Warteschlange = sharedProperties.getE17_1WarteschlangeValue();
    $scope.e17Bearbeitung = sharedProperties.getE17_1BearbeitungValue();
    $scope.e50PlanLagerbestand = sharedProperties.getE50PlanLagerbestandValue();
    $scope.e50IstLagerbestand = sharedProperties.getE50IstLagerbestandValue();
    $scope.e50Warteschlange = sharedProperties.getE50WarteschlangeValue();
    $scope.e50Bearbeitung = sharedProperties.getE50BearbeitungValue();
    $scope.e4PlanLagerbestand = sharedProperties.getE4PlanLagerbestandValue();
    $scope.e4IstLagerbestand = sharedProperties.getE4IstLagerbestandValue();
    $scope.e4Warteschlange = sharedProperties.getE4WarteschlangeValue();
    $scope.e4Bearbeitung = sharedProperties.getE4BearbeitungValue();
    $scope.e10PlanLagerbestand = sharedProperties.getE10PlanLagerbestandValue();
    $scope.e10IstLagerbestand = sharedProperties.getE10IstLagerbestandValue();
    $scope.e10Warteschlange = sharedProperties.getE10WarteschlangeValue();
    $scope.e10Bearbeitung = sharedProperties.getE10BearbeitungValue();
    $scope.e49PlanLagerbestand = sharedProperties.getE49PlanLagerbestandValue();
    $scope.e49IstLagerbestand = sharedProperties.getE49IstLagerbestandValue();
    $scope.e49Warteschlange = sharedProperties.getE49WarteschlangeValue();
    $scope.e49Bearbeitung = sharedProperties.getE49BearbeitungValue();
    $scope.e7PlanLagerbestand = sharedProperties.getE7PlanLagerbestandValue();
    $scope.e7IstLagerbestand = sharedProperties.getE7IstLagerbestandValue();
    $scope.e7Warteschlange = sharedProperties.getE7WarteschlangeValue();
    $scope.e7Bearbeitung = sharedProperties.getE7BearbeitungValue();
    $scope.e13PlanLagerbestand = sharedProperties.getE13PlanLagerbestandValue();
    $scope.e13IstLagerbestand = sharedProperties.getE13IstLagerbestandValue();
    $scope.e13Warteschlange = sharedProperties.getE13WarteschlangeValue();
    $scope.e13Bearbeitung = sharedProperties.getE13BearbeitungValue();
    $scope.e18PlanLagerbestand = sharedProperties.getE18PlanLagerbestandValue();
    $scope.e18IstLagerbestand = sharedProperties.getE18IstLagerbestandValue();
    $scope.e18Warteschlange = sharedProperties.getE18WarteschlangeValue();
    $scope.e18Bearbeitung = sharedProperties.getE18BearbeitungValue();


    $scope.p1_Plan = function() {
        if ($scope.p1Absatz >= 0 && $scope.p1PlanLagerbestand >= 0 && $scope.p1IstLagerbestand >= 0 && $scope.p1Warteschlange >= 0 && $scope.p1Bearbeitung >= 0) {
            $scope.p1Plan = parseInt($scope.p1Absatz) + parseInt($scope.p1Direktverkauf) + parseInt($scope.p1PlanLagerbestand) - parseInt($scope.p1IstLagerbestand) - parseInt($scope.p1Warteschlange) - parseInt($scope.p1Bearbeitung);
            if($scope.p1Plan < 0) {
                $scope.p1Plan = 0;
            }
            sharedProperties.setp1Direktverkauf($scope.p1Direktverkauf);
            sharedProperties.setP1Value($scope.p1Plan);
            sharedProperties.setP1AbsatzValue($scope.p1Absatz);
            sharedProperties.setP1BearbeitungValue($scope.p1Bearbeitung);
            sharedProperties.setP1IstLagerbestandValue($scope.p1IstLagerbestand);
            sharedProperties.setP1PlanLagerbestandValue($scope.p1PlanLagerbestand);
            sharedProperties.setP1WarteschlangeValue($scope.p1Warteschlange);
            return $scope.p1Plan;
        }
    };

    $scope.e26_Plan = function() {
        if ($scope.p1Plan >= 0 &&$scope.p1Warteschlange >= 0 && $scope.e26Bearbeitung >= 0 && $scope.e26IstLagerbestand >= 0 && $scope.e26PlanLagerbestand >= 0 && $scope.e26Warteschlange >= 0) {
            $scope.e26Plan = parseInt($scope.p1Plan) + parseInt($scope.p1Warteschlange) + parseInt($scope.e26PlanLagerbestand) - parseInt($scope.e26IstLagerbestand) - parseInt($scope.e26Warteschlange) - parseInt($scope.e26Bearbeitung);
            if($scope.e26Plan < 0) {
                $scope.e26Plan = 0;
            }
            sharedProperties.setE26_1Value($scope.e26Plan);
            sharedProperties.setE26_1BearbeitungValue($scope.e26Bearbeitung);
            sharedProperties.setE26_1IstLagerbestandValue($scope.e26IstLagerbestand);
            sharedProperties.setE26_1PlanLagerbestandValue($scope.e26PlanLagerbestand);
            sharedProperties.setE26_1WarteschlangeValue($scope.e26Warteschlange);
            return $scope.e26Plan;
        }
    };

    $scope.e51_Plan = function() {
        if ($scope.p1Plan >= 0 &&$scope.p1Warteschlange >= 0 && $scope.e51Bearbeitung >= 0 && $scope.e51IstLagerbestand >= 0 && $scope.e51PlanLagerbestand >= 0 && $scope.e51Warteschlange >= 0) {
            $scope.e51Plan = parseInt($scope.p1Plan) + parseInt($scope.p1Warteschlange) + parseInt($scope.e51PlanLagerbestand) - parseInt($scope.e51IstLagerbestand) - parseInt($scope.e51Warteschlange) - parseInt($scope.e51Bearbeitung);
            if($scope.e51Plan < 0) {
                $scope.e51Plan = 0;
            }
            sharedProperties.setE51Value($scope.e51Plan);
            sharedProperties.setE51BearbeitungValue($scope.e51Bearbeitung);
            sharedProperties.setE51IstLagerbestandValue($scope.e51IstLagerbestand);
            sharedProperties.setE51PlanLagerbestandValue($scope.e51PlanLagerbestand);
            sharedProperties.setE51WarteschlangeValue($scope.e51Warteschlange);
            return $scope.e51Plan;
        }
    };

    $scope.e16_Plan = function() {
        if ($scope.e51Plan >= 0 &&$scope.e51Warteschlange >= 0 && $scope.e16Bearbeitung >= 0 && $scope.e16IstLagerbestand >= 0 && $scope.e16PlanLagerbestand >= 0 && $scope.e16Warteschlange >= 0) {
            $scope.e16Plan = parseInt($scope.e51Plan) + parseInt($scope.e51Warteschlange) + parseInt($scope.e16PlanLagerbestand) - parseInt($scope.e16IstLagerbestand) - parseInt($scope.e16Warteschlange) - parseInt($scope.e16Bearbeitung);
            if($scope.e16Plan < 0) {
                $scope.e16Plan = 0;
            }
            sharedProperties.setE16_1Value($scope.e16Plan);
            sharedProperties.setE16_1BearbeitungValue($scope.e16Bearbeitung);
            sharedProperties.setE16_1IstLagerbestandValue($scope.e16IstLagerbestand);
            sharedProperties.setE16_1PlanLagerbestandValue($scope.e16PlanLagerbestand);
            sharedProperties.setE16_1WarteschlangeValue($scope.e16Warteschlange);
            return $scope.e16Plan;
        }
    };

    $scope.e17_Plan = function() {
        if ($scope.e51Plan >= 0 &&$scope.e51Warteschlange >= 0 && $scope.e17Bearbeitung >= 0 && $scope.e17IstLagerbestand >= 0 && $scope.e17PlanLagerbestand >= 0 && $scope.e17Warteschlange >= 0) {
            $scope.e17Plan = parseInt($scope.e51Plan) + parseInt($scope.e51Warteschlange) + parseInt($scope.e17PlanLagerbestand) - parseInt($scope.e17IstLagerbestand) - parseInt($scope.e17Warteschlange) - parseInt($scope.e17Bearbeitung);
            if($scope.e17Plan < 0) {
                $scope.e17Plan = 0;
            }
            sharedProperties.setE17_1Value($scope.e17Plan);
            sharedProperties.setE17_1BearbeitungValue($scope.e17Bearbeitung);
            sharedProperties.setE17_1IstLagerbestandValue($scope.e17IstLagerbestand);
            sharedProperties.setE17_1PlanLagerbestandValue($scope.e17PlanLagerbestand);
            sharedProperties.setE17_1WarteschlangeValue($scope.e17Warteschlange);
            return $scope.e17Plan;
        }
    };

    $scope.e50_Plan = function() {
        if ($scope.e51Plan >= 0 && $scope.e51Warteschlange >= 0 && $scope.e50Bearbeitung >= 0 && $scope.e50IstLagerbestand >= 0 && $scope.e50PlanLagerbestand >= 0 && $scope.e50Warteschlange >= 0) {
            $scope.e50Plan = parseInt($scope.e51Plan) + parseInt($scope.e51Warteschlange) + parseInt($scope.e50PlanLagerbestand) - parseInt($scope.e50IstLagerbestand) - parseInt($scope.e50Warteschlange) - parseInt($scope.e50Bearbeitung);
            if($scope.e50Plan < 0) {
                $scope.e50Plan = 0;
            }
            sharedProperties.setE50Value($scope.e50Plan);
            sharedProperties.setE50BearbeitungValue($scope.e50Bearbeitung);
            sharedProperties.setE50IstLagerbestandValue($scope.e50IstLagerbestand);
            sharedProperties.setE50PlanLagerbestandValue($scope.e50PlanLagerbestand);
            sharedProperties.setE50WarteschlangeValue($scope.e50Warteschlange);
            return $scope.e50Plan;
        }
    };

    $scope.e4_Plan = function() {
        if ($scope.e50Plan >= 0 && $scope.e50Warteschlange >= 0 && $scope.e4Bearbeitung >= 0 && $scope.e4IstLagerbestand >= 0 && $scope.e4PlanLagerbestand >= 0 && $scope.e4Warteschlange >= 0) {
            $scope.e4Plan = parseInt($scope.e50Plan) + parseInt($scope.e50Warteschlange) + parseInt($scope.e4PlanLagerbestand) - parseInt($scope.e4IstLagerbestand) - parseInt($scope.e4Warteschlange) - parseInt($scope.e4Bearbeitung);
            if($scope.e4Plan < 0) {
                $scope.e4Plan = 0;
            }
            sharedProperties.setE4Value($scope.e4Plan);
            sharedProperties.setE4BearbeitungValue($scope.e4Bearbeitung);
            sharedProperties.setE4IstLagerbestandValue($scope.e4IstLagerbestand);
            sharedProperties.setE4PlanLagerbestandValue($scope.e4PlanLagerbestand);
            sharedProperties.setE4WarteschlangeValue($scope.e4Warteschlange);
            return $scope.e4Plan;
        }
    };

    $scope.e10_Plan = function() {
        if ($scope.e50Plan >= 0 && $scope.e50Warteschlange >= 0 && $scope.e10Bearbeitung >= 0 && $scope.e10IstLagerbestand >= 0 && $scope.e10PlanLagerbestand >= 0 && $scope.e10Warteschlange >= 0) {
            $scope.e10Plan = parseInt($scope.e50Plan) + parseInt($scope.e50Warteschlange) + parseInt($scope.e10PlanLagerbestand) - parseInt($scope.e10IstLagerbestand) - parseInt($scope.e10Warteschlange) - parseInt($scope.e10Bearbeitung);
            if($scope.e10Plan < 0) {
                $scope.e10Plan = 0;
            }
            sharedProperties.setE10Value($scope.e10Plan);
            sharedProperties.setE10BearbeitungValue($scope.e10Bearbeitung);
            sharedProperties.setE10IstLagerbestandValue($scope.e10IstLagerbestand);
            sharedProperties.setE10PlanLagerbestandValue($scope.e10PlanLagerbestand);
            sharedProperties.setE10WarteschlangeValue($scope.e10Warteschlange);
            return $scope.e10Plan;
        }
    };

    $scope.e49_Plan = function() {
        if ($scope.e50Plan >= 0 && $scope.e50Warteschlange >= 0 && $scope.e49Bearbeitung >= 0 && $scope.e49IstLagerbestand >= 0 && $scope.e49PlanLagerbestand >= 0 && $scope.e49Warteschlange >= 0) {
            $scope.e49Plan = parseInt($scope.e50Plan) + parseInt($scope.e50Warteschlange) + parseInt($scope.e49PlanLagerbestand) - parseInt($scope.e49IstLagerbestand) - parseInt($scope.e49Warteschlange) - parseInt($scope.e49Bearbeitung);
            if($scope.e49Plan < 0) {
                $scope.e49Plan = 0;
            }
            sharedProperties.setE49Value($scope.e49Plan);
            sharedProperties.setE49BearbeitungValue($scope.e49Bearbeitung);
            sharedProperties.setE49IstLagerbestandValue($scope.e49IstLagerbestand);
            sharedProperties.setE49PlanLagerbestandValue($scope.e49PlanLagerbestand);
            sharedProperties.setE49WarteschlangeValue($scope.e49Warteschlange);
            return $scope.e49Plan;
        }
    };

    $scope.e7_Plan = function() {
        if ($scope.e49Plan >= 0 && $scope.e49Warteschlange >= 0 && $scope.e7Bearbeitung >= 0 && $scope.e7IstLagerbestand >= 0 && $scope.e7PlanLagerbestand >= 0 && $scope.e7Warteschlange >= 0) {
            $scope.e7Plan = parseInt($scope.e49Plan) + parseInt($scope.e49Warteschlange) + parseInt($scope.e7PlanLagerbestand) - parseInt($scope.e7IstLagerbestand) - parseInt($scope.e7Warteschlange) - parseInt($scope.e7Bearbeitung);
            if($scope.e7Plan < 0) {
                $scope.e7Plan = 0;
            }
            sharedProperties.setE7Value($scope.e7Plan);
            sharedProperties.setE7BearbeitungValue($scope.e7Bearbeitung);
            sharedProperties.setE7IstLagerbestandValue($scope.e7IstLagerbestand);
            sharedProperties.setE7PlanLagerbestandValue($scope.e7PlanLagerbestand);
            sharedProperties.setE7WarteschlangeValue($scope.e7Warteschlange);
            return $scope.e7Plan;
        }
    };

    $scope.e13_Plan = function() {
        if ($scope.e49Plan >= 0 && $scope.e49Warteschlange >= 0 && $scope.e13Bearbeitung >= 0 && $scope.e13IstLagerbestand >= 0 && $scope.e13PlanLagerbestand >= 0 && $scope.e13Warteschlange >= 0) {
            $scope.e13Plan = parseInt($scope.e49Plan) + parseInt($scope.e49Warteschlange) + parseInt($scope.e13PlanLagerbestand) - parseInt($scope.e13IstLagerbestand) - parseInt($scope.e13Warteschlange) - parseInt($scope.e13Bearbeitung);
            if($scope.e13Plan < 0) {
                $scope.e13Plan = 0;
            }
            sharedProperties.setE13Value($scope.e13Plan);
            sharedProperties.setE13BearbeitungValue($scope.e13Bearbeitung);
            sharedProperties.setE13IstLagerbestandValue($scope.e13IstLagerbestand);
            sharedProperties.setE13PlanLagerbestandValue($scope.e13PlanLagerbestand);
            sharedProperties.setE13WarteschlangeValue($scope.e13Warteschlange);
            return $scope.e13Plan;
        }
    };

    $scope.e18_Plan = function() {
        if ($scope.e49Plan >= 0 && $scope.e49Warteschlange >= 0 && $scope.e18Bearbeitung >= 0 && $scope.e18IstLagerbestand >= 0 && $scope.e18PlanLagerbestand >= 0 && $scope.e18Warteschlange >= 0) {
            $scope.e18Plan = parseInt($scope.e49Plan) + parseInt($scope.e49Warteschlange) + parseInt($scope.e18PlanLagerbestand) - parseInt($scope.e18IstLagerbestand) - parseInt($scope.e18Warteschlange) - parseInt($scope.e18Bearbeitung);
            if($scope.e18Plan < 0) {
                $scope.e18Plan = 0;
            }
            sharedProperties.setE18Value($scope.e18Plan);
            sharedProperties.setE18BearbeitungValue($scope.e18Bearbeitung);
            sharedProperties.setE18IstLagerbestandValue($scope.e18IstLagerbestand);
            sharedProperties.setE18PlanLagerbestandValue($scope.e18PlanLagerbestand);
            sharedProperties.setE18WarteschlangeValue($scope.e18Warteschlange);
            return $scope.e18Plan;
        }
    };

    $scope.p1_Warteschlange = function() {
        return $scope.p1Warteschlange;
    };

    $scope.e51_Warteschlange = function() {
        return $scope.e51Warteschlange;
    };

    $scope.e50_Warteschlange = function() {
        return $scope.e50Warteschlange;
    };

    $scope.e49_Warteschlange = function() {
        return $scope.e49Warteschlange;
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
