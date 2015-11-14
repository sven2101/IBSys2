ppsApp.controller('p3Controller', function($scope, sharedProperties) {
    $scope.p3Direktverkauf = sharedProperties.getp3Direktverkauf();
    $scope.p3Absatz = sharedProperties.getP3AbsatzValue();
    $scope.p3PlanLagerbestand = sharedProperties.getP3PlanLagerbestandValue();
    $scope.p3IstLagerbestand = sharedProperties.getP3IstLagerbestandValue();
    $scope.p3Warteschlange = sharedProperties.getP3WarteschlangeValue();
    $scope.p3Bearbeitung = sharedProperties.getP3BearbeitungValue();
    $scope.p3Absatz = sharedProperties.getP3AbsatzValue();
    $scope.e26PlanLagerbestand = sharedProperties.getE26_3PlanLagerbestandValue();
    $scope.e26IstLagerbestand = parseInt(sharedProperties.getE26IstLagerbestandValue())/3;
    $scope.e26Warteschlange = sharedProperties.getE26_3WarteschlangeValue();
    $scope.e26Bearbeitung = sharedProperties.getE26_3BearbeitungValue();
    $scope.e31PlanLagerbestand = sharedProperties.getE31PlanLagerbestandValue();
    $scope.e31IstLagerbestand = sharedProperties.getE31IstLagerbestandValue();
    $scope.e31Warteschlange = sharedProperties.getE31WarteschlangeValue();
    $scope.e31Bearbeitung = sharedProperties.getE31BearbeitungValue();
    $scope.e16PlanLagerbestand = sharedProperties.getE16_3PlanLagerbestandValue();
    $scope.e16IstLagerbestand = parseInt(sharedProperties.getE16IstLagerbestandValue())/3;
    $scope.e16Warteschlange = sharedProperties.getE16_3WarteschlangeValue();
    $scope.e16Bearbeitung = sharedProperties.getE16_3BearbeitungValue();
    $scope.e17PlanLagerbestand = sharedProperties.getE17_3PlanLagerbestandValue();
    $scope.e17IstLagerbestand = parseInt(sharedProperties.getE17IstLagerbestandValue())/3;
    $scope.e17Warteschlange = sharedProperties.getE17_3WarteschlangeValue();
    $scope.e17Bearbeitung = sharedProperties.getE17_3BearbeitungValue();
    $scope.e30PlanLagerbestand = sharedProperties.getE30PlanLagerbestandValue();
    $scope.e30IstLagerbestand = sharedProperties.getE30IstLagerbestandValue();
    $scope.e30Warteschlange = sharedProperties.getE30WarteschlangeValue();
    $scope.e30Bearbeitung = sharedProperties.getE30BearbeitungValue();
    $scope.e6PlanLagerbestand = sharedProperties.getE6PlanLagerbestandValue();
    $scope.e6IstLagerbestand = sharedProperties.getE6IstLagerbestandValue();
    $scope.e6Warteschlange = sharedProperties.getE6WarteschlangeValue();
    $scope.e6Bearbeitung = sharedProperties.getE6BearbeitungValue();
    $scope.e12PlanLagerbestand = sharedProperties.getE12PlanLagerbestandValue();
    $scope.e12IstLagerbestand = sharedProperties.getE12IstLagerbestandValue();
    $scope.e12Warteschlange = sharedProperties.getE12WarteschlangeValue();
    $scope.e12Bearbeitung = sharedProperties.getE12BearbeitungValue();
    $scope.e29PlanLagerbestand = sharedProperties.getE29PlanLagerbestandValue();
    $scope.e29IstLagerbestand = sharedProperties.getE29IstLagerbestandValue();
    $scope.e29Warteschlange = sharedProperties.getE29WarteschlangeValue();
    $scope.e29Bearbeitung = sharedProperties.getE29BearbeitungValue();
    $scope.e9PlanLagerbestand = sharedProperties.getE9PlanLagerbestandValue();
    $scope.e9IstLagerbestand = sharedProperties.getE9IstLagerbestandValue();
    $scope.e9Warteschlange = sharedProperties.getE9WarteschlangeValue();
    $scope.e9Bearbeitung = sharedProperties.getE9BearbeitungValue();
    $scope.e15PlanLagerbestand = sharedProperties.getE15PlanLagerbestandValue();
    $scope.e15IstLagerbestand = sharedProperties.getE15IstLagerbestandValue();
    $scope.e15Warteschlange = sharedProperties.getE15WarteschlangeValue();
    $scope.e15Bearbeitung = sharedProperties.getE15BearbeitungValue();
    $scope.e20PlanLagerbestand = sharedProperties.getE20PlanLagerbestandValue();
    $scope.e20IstLagerbestand = sharedProperties.getE20IstLagerbestandValue();
    $scope.e20Warteschlange = sharedProperties.getE20WarteschlangeValue();
    $scope.e20Bearbeitung = sharedProperties.getE20BearbeitungValue();


    $scope.p3_Plan = function() {
        if ($scope.p3Absatz >= 0 && $scope.p3PlanLagerbestand >= 0 && $scope.p3IstLagerbestand >= 0 && $scope.p3Warteschlange >= 0 && $scope.p3Bearbeitung >= 0) {
            $scope.p3Plan = parseInt($scope.p3Absatz) + parseInt($scope.p3Direktverkauf) + parseInt($scope.p3PlanLagerbestand) - parseInt($scope.p3IstLagerbestand) - parseInt($scope.p3Warteschlange) - parseInt($scope.p3Bearbeitung);
            if($scope.p3Plan < 0) {
                $scope.p3Plan = 0;
            }
            sharedProperties.setp3Direktverkauf($scope.p3Direktverkauf);
            sharedProperties.setP3Value($scope.p3Plan);
            sharedProperties.setP3AbsatzValue($scope.p3Absatz);
            sharedProperties.setP3BearbeitungValue($scope.p3Bearbeitung);
            sharedProperties.setP3IstLagerbestandValue($scope.p3IstLagerbestand);
            sharedProperties.setP3PlanLagerbestandValue($scope.p3PlanLagerbestand);
            sharedProperties.setP3WarteschlangeValue($scope.p3Warteschlange);
            return $scope.p3Plan;
        }
    };

    $scope.e26_Plan = function() {
        if ($scope.p3Plan >= 0 &&$scope.p3Warteschlange >= 0 && $scope.e26Bearbeitung >= 0 && $scope.e26IstLagerbestand >= 0 && $scope.e26PlanLagerbestand >= 0 && $scope.e26Warteschlange >= 0) {
            $scope.e26Plan = parseInt($scope.p3Plan) + parseInt($scope.p3Warteschlange) + parseInt($scope.e26PlanLagerbestand) - parseInt($scope.e26IstLagerbestand) - parseInt($scope.e26Warteschlange) - parseInt($scope.e26Bearbeitung);
            if($scope.e26Plan < 0) {
                $scope.e26Plan = 0;
            }
            sharedProperties.setE26_3Value($scope.e26Plan);
            sharedProperties.setE26_3BearbeitungValue($scope.e26Bearbeitung);
            sharedProperties.setE26_3IstLagerbestandValue($scope.e26IstLagerbestand);
            sharedProperties.setE26_3PlanLagerbestandValue($scope.e26PlanLagerbestand);
            sharedProperties.setE26_3WarteschlangeValue($scope.e26Warteschlange);
            return $scope.e26Plan;
        }
    };

    $scope.e31_Plan = function() {
        if ($scope.p3Plan >= 0 &&$scope.p3Warteschlange >= 0 && $scope.e31Bearbeitung >= 0 && $scope.e31IstLagerbestand >= 0 && $scope.e31PlanLagerbestand >= 0 && $scope.e31Warteschlange >= 0) {
            $scope.e31Plan = parseInt($scope.p3Plan) + parseInt($scope.p3Warteschlange) + parseInt($scope.e31PlanLagerbestand) - parseInt($scope.e31IstLagerbestand) - parseInt($scope.e31Warteschlange) - parseInt($scope.e31Bearbeitung);
            if($scope.e31Plan < 0) {
                $scope.e31Plan = 0;
            }
            sharedProperties.setE31Value($scope.e31Plan);
            sharedProperties.setE31BearbeitungValue($scope.e31Bearbeitung);
            sharedProperties.setE31IstLagerbestandValue($scope.e31IstLagerbestand);
            sharedProperties.setE31PlanLagerbestandValue($scope.e31PlanLagerbestand);
            sharedProperties.setE31WarteschlangeValue($scope.e31Warteschlange);
            return $scope.e31Plan;
        }
    };

    $scope.e16_Plan = function() {
        if ($scope.e31Plan >= 0 &&$scope.e31Warteschlange >= 0 && $scope.e16Bearbeitung >= 0 && $scope.e16IstLagerbestand >= 0 && $scope.e16PlanLagerbestand >= 0 && $scope.e16Warteschlange >= 0) {
            $scope.e16Plan = parseInt($scope.e31Plan) + parseInt($scope.e31Warteschlange) + parseInt($scope.e16PlanLagerbestand) - parseInt($scope.e16IstLagerbestand) - parseInt($scope.e16Warteschlange) - parseInt($scope.e16Bearbeitung);
            if($scope.e16Plan < 0) {
                $scope.e16Plan = 0;
            }
            sharedProperties.setE16_3Value($scope.e16Plan);
            sharedProperties.setE16_3BearbeitungValue($scope.e16Bearbeitung);
            sharedProperties.setE16_3IstLagerbestandValue($scope.e16IstLagerbestand);
            sharedProperties.setE16_3PlanLagerbestandValue($scope.e16PlanLagerbestand);
            sharedProperties.setE16_3WarteschlangeValue($scope.e16Warteschlange);
            return $scope.e16Plan;
        }
    };

    $scope.e17_Plan = function() {
        if ($scope.e31Plan >= 0 &&$scope.e31Warteschlange >= 0 && $scope.e17Bearbeitung >= 0 && $scope.e17IstLagerbestand >= 0 && $scope.e17PlanLagerbestand >= 0 && $scope.e17Warteschlange >= 0) {
            $scope.e17Plan = parseInt($scope.e31Plan) + parseInt($scope.e31Warteschlange) + parseInt($scope.e17PlanLagerbestand) - parseInt($scope.e17IstLagerbestand) - parseInt($scope.e17Warteschlange) - parseInt($scope.e17Bearbeitung);
            if($scope.e17Plan < 0) {
                $scope.e17Plan = 0;
            }
            sharedProperties.setE17_3Value($scope.e17Plan);
            sharedProperties.setE17_3BearbeitungValue($scope.e17Bearbeitung);
            sharedProperties.setE17_3IstLagerbestandValue($scope.e17IstLagerbestand);
            sharedProperties.setE17_3PlanLagerbestandValue($scope.e17PlanLagerbestand);
            sharedProperties.setE17_3WarteschlangeValue($scope.e17Warteschlange);
            return $scope.e17Plan;
        }
    };

    $scope.e30_Plan = function() {
        if ($scope.e31Plan >= 0 && $scope.e31Warteschlange >= 0 && $scope.e30Bearbeitung >= 0 && $scope.e30IstLagerbestand >= 0 && $scope.e30PlanLagerbestand >= 0 && $scope.e30Warteschlange >= 0) {
            $scope.e30Plan = parseInt($scope.e31Plan) + parseInt($scope.e31Warteschlange) + parseInt($scope.e30PlanLagerbestand) - parseInt($scope.e30IstLagerbestand) - parseInt($scope.e30Warteschlange) - parseInt($scope.e30Bearbeitung);
            if($scope.e30Plan < 0) {
                $scope.e30Plan = 0;
            }
            sharedProperties.setE30Value($scope.e30Plan);
            sharedProperties.setE30BearbeitungValue($scope.e30Bearbeitung);
            sharedProperties.setE30IstLagerbestandValue($scope.e30IstLagerbestand);
            sharedProperties.setE30PlanLagerbestandValue($scope.e30PlanLagerbestand);
            sharedProperties.setE30WarteschlangeValue($scope.e30Warteschlange);
            return $scope.e30Plan;
        }
    };

    $scope.e6_Plan = function() {
        if ($scope.e30Plan >= 0 && $scope.e30Warteschlange >= 0 && $scope.e6Bearbeitung >= 0 && $scope.e6IstLagerbestand >= 0 && $scope.e6PlanLagerbestand >= 0 && $scope.e6Warteschlange >= 0) {
            $scope.e6Plan = parseInt($scope.e30Plan) + parseInt($scope.e30Warteschlange) + parseInt($scope.e6PlanLagerbestand) - parseInt($scope.e6IstLagerbestand) - parseInt($scope.e6Warteschlange) - parseInt($scope.e6Bearbeitung);
            if($scope.e6Plan < 0) {
                $scope.e6Plan = 0;
            }
            sharedProperties.setE6Value($scope.e6Plan);
            sharedProperties.setE6BearbeitungValue($scope.e6Bearbeitung);
            sharedProperties.setE6IstLagerbestandValue($scope.e6IstLagerbestand);
            sharedProperties.setE6PlanLagerbestandValue($scope.e6PlanLagerbestand);
            sharedProperties.setE6WarteschlangeValue($scope.e6Warteschlange);
            return $scope.e6Plan;
        }
    };

    $scope.e12_Plan = function() {
        if ($scope.e30Plan >= 0 && $scope.e30Warteschlange >= 0 && $scope.e12Bearbeitung >= 0 && $scope.e12IstLagerbestand >= 0 && $scope.e12PlanLagerbestand >= 0 && $scope.e12Warteschlange >= 0) {
            $scope.e12Plan = parseInt($scope.e30Plan) + parseInt($scope.e30Warteschlange) + parseInt($scope.e12PlanLagerbestand) - parseInt($scope.e12IstLagerbestand) - parseInt($scope.e12Warteschlange) - parseInt($scope.e12Bearbeitung);
            if($scope.e12Plan < 0) {
                $scope.e12Plan = 0;
            }
            sharedProperties.setE12Value($scope.e12Plan);
            sharedProperties.setE12BearbeitungValue($scope.e12Bearbeitung);
            sharedProperties.setE12IstLagerbestandValue($scope.e12IstLagerbestand);
            sharedProperties.setE12PlanLagerbestandValue($scope.e12PlanLagerbestand);
            sharedProperties.setE12WarteschlangeValue($scope.e12Warteschlange);
            return $scope.e12Plan;
        }
    };

    $scope.e29_Plan = function() {
        if ($scope.e30Plan >= 0 && $scope.e30Warteschlange >= 0 && $scope.e29Bearbeitung >= 0 && $scope.e29IstLagerbestand >= 0 && $scope.e29PlanLagerbestand >= 0 && $scope.e29Warteschlange >= 0) {
            $scope.e29Plan = parseInt($scope.e30Plan) + parseInt($scope.e30Warteschlange) + parseInt($scope.e29PlanLagerbestand) - parseInt($scope.e29IstLagerbestand) - parseInt($scope.e29Warteschlange) - parseInt($scope.e29Bearbeitung);
            if($scope.e29Plan < 0) {
                $scope.e29Plan = 0;
            }
            sharedProperties.setE29Value($scope.e29Plan);
            sharedProperties.setE29BearbeitungValue($scope.e29Bearbeitung);
            sharedProperties.setE29IstLagerbestandValue($scope.e29IstLagerbestand);
            sharedProperties.setE29PlanLagerbestandValue($scope.e29PlanLagerbestand);
            sharedProperties.setE29WarteschlangeValue($scope.e29Warteschlange);
            return $scope.e29Plan;
        }
    };

    $scope.e9_Plan = function() {
        if ($scope.e29Plan >= 0 && $scope.e29Warteschlange >= 0 && $scope.e9Bearbeitung >= 0 && $scope.e9IstLagerbestand >= 0 && $scope.e9PlanLagerbestand >= 0 && $scope.e9Warteschlange >= 0) {
            $scope.e9Plan = parseInt($scope.e29Plan) + parseInt($scope.e29Warteschlange) + parseInt($scope.e9PlanLagerbestand) - parseInt($scope.e9IstLagerbestand) - parseInt($scope.e9Warteschlange) - parseInt($scope.e9Bearbeitung);
            if($scope.e9Plan < 0) {
                $scope.e9Plan = 0;
            }
            sharedProperties.setE9Value($scope.e9Plan);
            sharedProperties.setE9BearbeitungValue($scope.e9Bearbeitung);
            sharedProperties.setE9IstLagerbestandValue($scope.e9IstLagerbestand);
            sharedProperties.setE9PlanLagerbestandValue($scope.e9PlanLagerbestand);
            sharedProperties.setE9WarteschlangeValue($scope.e9Warteschlange);
            return $scope.e9Plan;
        }
    };

    $scope.e15_Plan = function() {
        if ($scope.e29Plan >= 0 && $scope.e29Warteschlange >= 0 && $scope.e15Bearbeitung >= 0 && $scope.e15IstLagerbestand >= 0 && $scope.e15PlanLagerbestand >= 0 && $scope.e15Warteschlange >= 0) {
            $scope.e15Plan = parseInt($scope.e29Plan) + parseInt($scope.e29Warteschlange) + parseInt($scope.e15PlanLagerbestand) - parseInt($scope.e15IstLagerbestand) - parseInt($scope.e15Warteschlange) - parseInt($scope.e15Bearbeitung);
            if($scope.e15Plan < 0) {
                $scope.e15Plan = 0;
            }
            sharedProperties.setE15Value($scope.e15Plan);
            sharedProperties.setE15BearbeitungValue($scope.e15Bearbeitung);
            sharedProperties.setE15IstLagerbestandValue($scope.e15IstLagerbestand);
            sharedProperties.setE15PlanLagerbestandValue($scope.e15PlanLagerbestand);
            sharedProperties.setE15WarteschlangeValue($scope.e15Warteschlange);
            return $scope.e15Plan;
        }
    };

    $scope.e20_Plan = function() {
        if ($scope.e29Plan >= 0 && $scope.e29Warteschlange >= 0 && $scope.e20Bearbeitung >= 0 && $scope.e20IstLagerbestand >= 0 && $scope.e20PlanLagerbestand >= 0 && $scope.e20Warteschlange >= 0) {
            $scope.e20Plan = parseInt($scope.e29Plan) + parseInt($scope.e29Warteschlange) + parseInt($scope.e20PlanLagerbestand) - parseInt($scope.e20IstLagerbestand) - parseInt($scope.e20Warteschlange) - parseInt($scope.e20Bearbeitung);
            if($scope.e20Plan < 0) {
                $scope.e20Plan = 0;
            }
            sharedProperties.setE20Value($scope.e20Plan);
            sharedProperties.setE20BearbeitungValue($scope.e20Bearbeitung);
            sharedProperties.setE20IstLagerbestandValue($scope.e20IstLagerbestand);
            sharedProperties.setE20PlanLagerbestandValue($scope.e20PlanLagerbestand);
            sharedProperties.setE20WarteschlangeValue($scope.e20Warteschlange);
            return $scope.e20Plan;
        }
    };

    $scope.p3_Warteschlange = function() {
        return $scope.p3Warteschlange;
    };

    $scope.e31_Warteschlange = function() {
        return $scope.e31Warteschlange;
    };

    $scope.e30_Warteschlange = function() {
        return $scope.e30Warteschlange;
    };

    $scope.e29_Warteschlange = function() {
        return $scope.e29Warteschlange;
    };
    $scope.direktverkauf = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Direktverkauf";
        } else {
            return "Direct Sales"
        }
    };
    $scope.vertriebswunsch = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Verbindliche Aufträge/Vertriebswunsch";
        } else {
            return "Sales orders"
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
