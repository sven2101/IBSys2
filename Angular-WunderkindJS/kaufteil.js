ppsApp.controller('kaufteilController', function($scope, sharedProperties) {

    $scope.p1_1Value = sharedProperties.getP1Value();
    $scope.p2_1Value = sharedProperties.getP2Value();
    $scope.p3_1Value = sharedProperties.getP3Value();
    $scope.p1_2Value = sharedProperties.getP1_2PlanValue();
    $scope.p2_2Value = sharedProperties.getP2_2PlanValue();
    $scope.p3_2Value = sharedProperties.getP3_2PlanValue();
    $scope.p1_3Value = sharedProperties.getP1_3PlanValue();
    $scope.p2_3Value = sharedProperties.getP2_3PlanValue();
    $scope.p3_3Value = sharedProperties.getP3_3PlanValue();
    $scope.p1_4Value = sharedProperties.getP1_4PlanValue();
    $scope.p2_4Value = sharedProperties.getP2_4PlanValue();
    $scope.p3_4Value = sharedProperties.getP3_4PlanValue();
    $scope.k21BestellungMode = 0;
    $scope.k21BestellungValue = 0;
    $scope.k22BestellungMode = 0;
    $scope.k22BestellungValue = 0;
    $scope.k23BestellungMode = 0;
    $scope.k23BestellungValue = 0;
    $scope.k24BestellungMode = 0;
    $scope.k24BestellungValue = 0;
    $scope.k25BestellungMode = 0;
    $scope.k25BestellungValue = 0;
    $scope.k27BestellungMode = 0;
    $scope.k27BestellungValue = 0;
    $scope.k28BestellungMode = 0;
    $scope.k28BestellungValue = 0;
    $scope.k32BestellungMode = 0;
    $scope.k32BestellungValue = 0;
    $scope.k33BestellungMode = 0;
    $scope.k33BestellungValue = 0;
    $scope.k34BestellungMode = 0;
    $scope.k34BestellungValue = 0;
    $scope.k35BestellungMode = 0;
    $scope.k35BestellungValue = 0;
    $scope.k36BestellungMode = 0;
    $scope.k36BestellungValue = 0;
    $scope.k37BestellungMode = 0;
    $scope.k37BestellungValue = 0;
    $scope.k38BestellungMode = 0;
    $scope.k38BestellungValue = 0;
    $scope.k39BestellungMode = 0;
    $scope.k39BestellungValue = 0;
    $scope.k40BestellungMode = 0;
    $scope.k40BestellungValue = 0;
    $scope.k41BestellungValue = 0;
    $scope.k41BestellungMode = 0;
    $scope.k42BestellungValue = 0;
    $scope.k42BestellungMode = 0;
    $scope.k43BestellungValue = 0;
    $scope.k43BestellungMode = 0;
    $scope.k44BestellungValue = 0;
    $scope.k44BestellungMode = 0;
    $scope.k45BestellungValue = 0;
    $scope.k45BestellungMode = 0;
    $scope.k46BestellungValue = 0;
    $scope.k46BestellungMode = 0;
    $scope.k47BestellungValue = 0;
    $scope.k47BestellungMode = 0;
    $scope.k48BestellungValue = 0;
    $scope.k48BestellungMode = 0;
    $scope.k52BestellungValue = 0;
    $scope.k52BestellungMode = 0;
    $scope.k53BestellungValue = 0;
    $scope.k53BestellungMode = 0;
    $scope.k57BestellungValue = 0;
    $scope.k57BestellungMode = 0;
    $scope.k58BestellungValue = 0;
    $scope.k58BestellungMode = 0;
    $scope.k59BestellungValue = 0;
    $scope.k59BestellungMode = 0;

    $scope.k21Lagerbestand = function() {
        return sharedProperties.getK21IstLagerbestandValue();
    };
    $scope.k22Lagerbestand = function() {
        return sharedProperties.getK22IstLagerbestandValue();
    };
    $scope.k23Lagerbestand = function() {
        return sharedProperties.getK23IstLagerbestandValue();
    };
    $scope.k24Lagerbestand = function() {
        return sharedProperties.getK24IstLagerbestandValue();
    };
    $scope.k25Lagerbestand = function() {
        return sharedProperties.getK25IstLagerbestandValue();
    };
    $scope.k27Lagerbestand = function() {
        return sharedProperties.getK27IstLagerbestandValue();
    };
    $scope.k28Lagerbestand = function() {
        return sharedProperties.getK28IstLagerbestandValue();
    };
    $scope.k32Lagerbestand = function() {
        return sharedProperties.getK32IstLagerbestandValue();
    };
    $scope.k33Lagerbestand = function() {
        return sharedProperties.getK33IstLagerbestandValue();
    };
    $scope.k34Lagerbestand = function() {
        return sharedProperties.getK34IstLagerbestandValue();
    };
    $scope.k35Lagerbestand = function() {
        return sharedProperties.getK35IstLagerbestandValue();
    };
    $scope.k36Lagerbestand = function() {
        return sharedProperties.getK36IstLagerbestandValue();
    };
    $scope.k37Lagerbestand = function() {
        return sharedProperties.getK37IstLagerbestandValue();
    };
    $scope.k38Lagerbestand = function() {
        return sharedProperties.getK38IstLagerbestandValue();
    };
    $scope.k39Lagerbestand = function() {
        return sharedProperties.getK39IstLagerbestandValue();
    };
    $scope.k40Lagerbestand = function() {
        return sharedProperties.getK40IstLagerbestandValue();
    };
    $scope.k41Lagerbestand = function() {
        return sharedProperties.getK41IstLagerbestandValue();
    };
    $scope.k42Lagerbestand = function() {
        return sharedProperties.getK42IstLagerbestandValue();
    };
    $scope.k43Lagerbestand = function() {
        return sharedProperties.getK43IstLagerbestandValue();
    };
    $scope.k44Lagerbestand = function() {
        return sharedProperties.getK44IstLagerbestandValue();
    };
    $scope.k45Lagerbestand = function() {
        return sharedProperties.getK45IstLagerbestandValue();
    };
    $scope.k46Lagerbestand = function() {
        return sharedProperties.getK46IstLagerbestandValue();
    };
    $scope.k47Lagerbestand = function() {
        return sharedProperties.getK47IstLagerbestandValue();
    };
    $scope.k48Lagerbestand = function() {
        return sharedProperties.getK48IstLagerbestandValue();
    };
    $scope.k52Lagerbestand = function() {
        return sharedProperties.getK52IstLagerbestandValue();
    };
    $scope.k53Lagerbestand = function() {
        return sharedProperties.getK53IstLagerbestandValue();
    };
    $scope.k57Lagerbestand = function() {
        return sharedProperties.getK57IstLagerbestandValue();
    };
    $scope.k58Lagerbestand = function() {
        return sharedProperties.getK58IstLagerbestandValue();
    };
    $scope.k59Lagerbestand = function() {
        return sharedProperties.getK59IstLagerbestandValue();
    };
    $scope.k21_1Value = function() {
        if($scope.p1_1Value >= 0) {
            return $scope.p1_1Value * 1;
        }
    };
    $scope.k21_2Value = function() {
        if($scope.p1_2Value >= 0){
            return $scope.p1_2Value * 1;
        }
    };
    $scope.k21_3Value = function() {
        if($scope.p1_3Value >= 0) {
            return $scope.p1_3Value * 1;
        }
    };
    $scope.k21_4Value = function() {
        if($scope.p1_4Value >= 0){
            return $scope.p1_4Value * 1;
        }
    };
    $scope.k21_SumValue = function() {
        if($scope.k21_1Value() >= 0 && $scope.k21_2Value() >= 0 && $scope.k21_3Value() >= 0 && $scope.k21_4Value() >= 0) {
            var tmp = parseInt($scope.k21Lagerbestand()) - parseInt($scope.k21_1Value()) - parseInt($scope.k21_2Value()) - parseInt($scope.k21_3Value()) + parseInt(sharedProperties.getK21PlanLagerbestandValue()) + parseInt(sharedProperties.getK21_1PlanLagerbestandValue());
            $scope.k21BestellungValue = tmp * (-1);
            if ($scope.k21BestellungValue < 0) {
                $scope.k21BestellungValue = 0;
            }
            if ((parseInt($scope.k21Lagerbestand()) - parseInt($scope.k21_1Value()) + parseInt(sharedProperties.getK21PlanLagerbestandValue())) < 0 || (parseInt($scope.k21Lagerbestand()) - parseInt($scope.k21_1Value()) - parseInt($scope.k21_2Value()) + parseInt(sharedProperties.getK21PlanLagerbestandValue()) + parseInt(sharedProperties.getK21_1PlanLagerbestandValue())) < 0 || (parseInt($scope.k21Lagerbestand()) - parseInt($scope.k21_1Value()) - parseInt($scope.k21_2Value()) - parseInt($scope.k21_3Value()) + parseInt(sharedProperties.getK21PlanLagerbestandValue()) + parseInt(sharedProperties.getK21_1PlanLagerbestandValue()) + parseInt($scope.k21BestellungValue)) < 0 || ((parseInt($scope.k21Lagerbestand()) - parseInt($scope.k21_1Value()) - parseInt($scope.k21_2Value()) + parseInt(sharedProperties.getK21PlanLagerbestandValue()) + parseInt(sharedProperties.getK21_1PlanLagerbestandValue())))/$scope.k21_3Value() < 0.5) {
                $scope.k21BestellungMode = 1;
            } else {
                $scope.k21BestellungMode = 0;
            }
            var div = parseInt(tmp) + parseInt($scope.k21BestellungValue);
            if ((div/$scope.k21_4Value()) < 0.5) {
                $scope.k21BestellungValue = parseInt($scope.k21BestellungValue) + parseInt($scope.k21_4Value());
            }
            if ($scope.k21BestellungValue < 300 && $scope.k21BestellungValue > 275) {
                $scope.k21BestellungValue = 300;
            }
            sharedProperties.setK21BestellungValue($scope.k21BestellungValue);
            sharedProperties.setK21BestellungMode($scope.k21BestellungMode);
            return parseInt($scope.k21_1Value()) + parseInt($scope.k21_2Value()) +  parseInt($scope.k21_3Value()) + parseInt($scope.k21_4Value());
        }
    };
    $scope.k22_1Value = function() {
        if($scope.p2_1Value >= 0) {
            return $scope.p2_1Value * 1;
        }
    };
    $scope.k22_2Value = function() {
        if($scope.p2_2Value >= 0) {
            return $scope.p2_2Value * 1;
        }
    };
    $scope.k22_3Value = function() {
        if($scope.p2_3Value >= 0) {
            return $scope.p2_3Value * 1;
        }
    };
    $scope.k22_4Value = function() {
        if($scope.p2_4Value >= 0) {
            return $scope.p2_4Value * 1;
        }
    };
    $scope.k22_SumValue = function() {
        if($scope.k22_1Value() >= 0 && $scope.k22_2Value() >= 0 && $scope.k22_3Value() >= 0 && $scope.k22_4Value() >= 0) {
            var tmp = parseInt($scope.k22Lagerbestand()) - parseInt($scope.k22_1Value()) - parseInt($scope.k22_2Value()) - parseInt($scope.k22_3Value()) + parseInt(sharedProperties.getK22PlanLagerbestandValue()) + parseInt(sharedProperties.getK22_1PlanLagerbestandValue());
            $scope.k22BestellungValue = tmp * (-1);
            if ($scope.k22BestellungValue < 0) {
                $scope.k22BestellungValue = 0;
            }
            if ((parseInt($scope.k22Lagerbestand()) - parseInt($scope.k22_1Value()) + parseInt(sharedProperties.getK22PlanLagerbestandValue())) < 0 || (parseInt($scope.k22Lagerbestand()) - parseInt($scope.k22_1Value()) - parseInt($scope.k22_2Value()) + parseInt(sharedProperties.getK22PlanLagerbestandValue()) + parseInt(sharedProperties.getK22_1PlanLagerbestandValue())) < 0 || (parseInt($scope.k22Lagerbestand()) - parseInt($scope.k22_1Value()) - parseInt($scope.k22_2Value()) - parseInt($scope.k22_3Value()) + parseInt(sharedProperties.getK22PlanLagerbestandValue()) + parseInt(sharedProperties.getK22_1PlanLagerbestandValue()) + parseInt($scope.k22BestellungValue)) < 0 || ((parseInt($scope.k22Lagerbestand()) - parseInt($scope.k22_1Value()) - parseInt($scope.k22_2Value()) + parseInt(sharedProperties.getK22PlanLagerbestandValue()) + parseInt(sharedProperties.getK22_1PlanLagerbestandValue())))/$scope.k22_3Value() < 0.5) {
                $scope.k22BestellungMode = 1;
            } else {
                $scope.k22BestellungMode = 0;
            }
            var div = parseInt(tmp) + parseInt($scope.k22BestellungValue);
            if ((div/$scope.k22_4Value()) < 0.5) {
                $scope.k22BestellungValue = parseInt($scope.k22BestellungValue) + parseInt($scope.k22_4Value());
            }
            if ($scope.k22BestellungValue < 300 && $scope.k22BestellungValue > 275) {
                $scope.k22BestellungValue = 300;
            }
            sharedProperties.setK22BestellungValue($scope.k22BestellungValue);
            sharedProperties.setK22BestellungMode($scope.k22BestellungMode);
            return parseInt($scope.k22_1Value()) + parseInt($scope.k22_2Value()) +  parseInt($scope.k22_3Value()) + parseInt($scope.k22_4Value());
        }
    };
    $scope.k23_1Value = function() {
        if($scope.p3_1Value >= 0) {
            return $scope.p3_1Value * 1;
        }
    };
    $scope.k23_2Value = function() {
        if($scope.p3_2Value >= 0) {
            return $scope.p3_2Value * 1;
        }
    };
    $scope.k23_3Value = function() {
        if($scope.p3_3Value >= 0) {
            return $scope.p3_3Value * 1;
        }
    };
    $scope.k23_4Value = function() {
        if($scope.p3_4Value >= 0) {
            return $scope.p3_4Value * 1;
        }
    };
    $scope.k23_SumValue = function() {
        if($scope.k23_1Value() >= 0 && $scope.k23_2Value() >= 0 && $scope.k23_3Value() >= 0 && $scope.k23_4Value() >= 0) {
            var tmp = parseInt($scope.k23Lagerbestand()) - parseInt($scope.k23_1Value()) - parseInt($scope.k23_2Value()) + parseInt(sharedProperties.getK23PlanLagerbestandValue());
            $scope.k23BestellungValue = tmp * (-1);
            if ($scope.k23BestellungValue < 0) {
                $scope.k23BestellungValue = 0;
            }
            if ((parseInt($scope.k23Lagerbestand()) - parseInt($scope.k23_1Value()) + parseInt(sharedProperties.getK23PlanLagerbestandValue())) < 0 || (parseInt($scope.k23Lagerbestand()) - parseInt($scope.k23_1Value()) - parseInt($scope.k23_2Value()) + parseInt(sharedProperties.getK23PlanLagerbestandValue()) + parseInt($scope.k23BestellungValue)) < 0 || (parseInt($scope.k23Lagerbestand()) - parseInt($scope.k23_1Value()) + parseInt(sharedProperties.getK23PlanLagerbestandValue()))/$scope.k23_2Value() < 0.5) {
                $scope.k23BestellungMode = 1;
            } else {
                $scope.k23BestellungMode = 0;
            }
            var div = parseInt(tmp) + parseInt($scope.k23BestellungValue);
            if ((div/$scope.k23_3Value()) < 0.5) {
                $scope.k23BestellungValue = parseInt($scope.k23BestellungValue) + parseInt($scope.k23_3Value());
            }
            if ($scope.k23BestellungValue < 300 && $scope.k23BestellungValue > 275) {
                $scope.k23BestellungValue = 300;
            }
            sharedProperties.setK23BestellungValue($scope.k23BestellungValue);
            sharedProperties.setK23BestellungMode($scope.k23BestellungMode);
            return parseInt($scope.k23_1Value()) + parseInt($scope.k23_2Value()) +  parseInt($scope.k23_3Value()) + parseInt($scope.k23_4Value());
        }
    };
    $scope.k24_1Value = function() {
        if($scope.p1_1Value >= 0 && $scope.p2_1Value >= 0 && $scope.p3_1Value >= 0) {
            return $scope.p1_1Value * 7 + $scope.p2_1Value * 7 + $scope.p3_1Value * 7;
        }
    };
    $scope.k24_2Value = function() {
        if($scope.p1_2Value >= 0 && $scope.p2_2Value >= 0 && $scope.p3_2Value >= 0) {
            return $scope.p1_2Value * 7 + $scope.p2_2Value * 7 + $scope.p3_2Value * 7;
        }
    };
    $scope.k24_3Value = function() {
        if($scope.p1_3Value >= 0 && $scope.p2_3Value >= 0 && $scope.p3_3Value >= 0) {
            return $scope.p1_3Value * 7 + $scope.p2_3Value * 7 + $scope.p3_3Value * 7;
        }
    };
    $scope.k24_4Value = function() {
        if($scope.p1_4Value >= 0 && $scope.p2_4Value >= 0 && $scope.p3_4Value >= 0) {
            return $scope.p1_4Value * 7 + $scope.p2_4Value * 7 + $scope.p3_4Value * 7;
        }
    };
    $scope.k24_SumValue = function() {
        if($scope.k24_1Value() >= 0 && $scope.k24_2Value() >= 0 && $scope.k24_3Value() >= 0 && $scope.k24_4Value() >= 0) {
            var tmp = parseInt($scope.k24Lagerbestand()) - parseInt($scope.k24_1Value()) - parseInt($scope.k24_2Value()) - parseInt($scope.k24_3Value()) - parseInt($scope.k24_4Value()) + parseInt(sharedProperties.getK24PlanLagerbestandValue()) + parseInt(sharedProperties.getK24_1PlanLagerbestandValue()) + parseInt(sharedProperties.getK24_2PlanLagerbestandValue());
            $scope.k24BestellungValue = tmp * (-1);
            if ($scope.k24BestellungValue < 0) {
                $scope.k24BestellungValue = 0;
            }
            if ((parseInt($scope.k24Lagerbestand()) - parseInt($scope.k24_1Value()) + parseInt(sharedProperties.getK24PlanLagerbestandValue())) < 0 || (parseInt($scope.k24Lagerbestand()) - parseInt($scope.k24_1Value()) - parseInt($scope.k24_2Value()) + parseInt(sharedProperties.getK24PlanLagerbestandValue()) + parseInt(sharedProperties.getK24_1PlanLagerbestandValue())) < 0 || (parseInt($scope.k24Lagerbestand()) - parseInt($scope.k24_1Value()) - parseInt($scope.k24_2Value()) - parseInt($scope.k24_3Value()) + parseInt(sharedProperties.getK24PlanLagerbestandValue()) + parseInt(sharedProperties.getK24_1PlanLagerbestandValue()) + parseInt(sharedProperties.getK24_2PlanLagerbestandValue())) < 0 || (parseInt($scope.k24Lagerbestand()) - parseInt($scope.k24_1Value()) - parseInt($scope.k24_2Value()) - parseInt($scope.k24_3Value()) + parseInt(sharedProperties.getK24PlanLagerbestandValue()) + parseInt(sharedProperties.getK24_1PlanLagerbestandValue()) + parseInt(sharedProperties.getK24_2PlanLagerbestandValue()))/$scope.k24_4Value() < 0.5) {
                $scope.k24BestellungMode = 1;
            } else {
                $scope.k24BestellungMode = 0;
            }
            var div = parseInt(tmp) + parseInt($scope.k24BestellungValue);
            if ((div/$scope.k24_4Value()) < 0.5) {
                $scope.k24BestellungValue = parseInt($scope.k24BestellungValue) + parseInt($scope.k24_4Value());
            }
            if ($scope.k24BestellungValue < 6100 && $scope.k24BestellungValue > 5750) {
                $scope.k24BestellungValue = 6100;
            }
            sharedProperties.setP1_2PlanValue($scope.p1_2Value);
            sharedProperties.setP1_3PlanValue($scope.p1_3Value);
            sharedProperties.setP1_4PlanValue($scope.p1_4Value);
            sharedProperties.setP2_2PlanValue($scope.p2_2Value);
            sharedProperties.setP2_3PlanValue($scope.p2_3Value);
            sharedProperties.setP2_4PlanValue($scope.p2_4Value);
            sharedProperties.setP3_2PlanValue($scope.p2_2Value);
            sharedProperties.setP3_3PlanValue($scope.p2_3Value);
            sharedProperties.setP3_4PlanValue($scope.p2_4Value);
            sharedProperties.setK24BestellungValue($scope.k24BestellungValue);
            sharedProperties.setK24BestellungMode($scope.k24BestellungMode);
            return parseInt($scope.k24_1Value()) + parseInt($scope.k24_2Value()) + parseInt($scope.k24_3Value()) + parseInt($scope.k24_4Value());
        }
    };
    $scope.k25_1Value = function() {
        if($scope.p1_1Value >= 0 && $scope.p2_1Value >= 0 && $scope.p3_1Value >= 0) {
            return $scope.p1_1Value * 4 + $scope.p2_1Value * 4 + $scope.p3_1Value * 4;
        }
    };
    $scope.k25_2Value = function() {
        if($scope.p1_2Value >= 0 && $scope.p2_2Value >= 0 && $scope.p3_2Value >= 0) {
            return $scope.p1_2Value * 4 + $scope.p2_2Value * 4 + $scope.p3_2Value * 4;
        }
    };
    $scope.k25_3Value = function() {
        if($scope.p1_3Value >= 0 && $scope.p2_3Value >= 0 && $scope.p3_3Value >= 0) {
            return $scope.p1_3Value * 4 + $scope.p2_3Value * 4 + $scope.p3_3Value * 4;
        }
    };
    $scope.k25_4Value = function() {
        if($scope.p1_4Value >= 0 && $scope.p2_4Value >= 0 && $scope.p3_4Value >= 0) {
            return $scope.p1_4Value * 4 + $scope.p2_4Value * 4 + $scope.p3_4Value * 4;
        }
    };
    $scope.k25_SumValue = function() {
        if($scope.k25_1Value() >= 0 && $scope.k25_2Value() >= 0 && $scope.k25_3Value() >= 0 && $scope.k25_4Value() >= 0) {
            var tmp = parseInt($scope.k25Lagerbestand()) - parseInt($scope.k25_1Value()) - parseInt($scope.k25_2Value()) + parseInt(sharedProperties.getK25PlanLagerbestandValue());
            $scope.k25BestellungValue = tmp * (-1);
            if ($scope.k25BestellungValue < 0) {
                $scope.k25BestellungValue = 0;
            }
            if ((parseInt($scope.k25Lagerbestand()) - parseInt($scope.k25_1Value()) + parseInt(sharedProperties.getK25PlanLagerbestandValue())) < 0 || (parseInt($scope.k25Lagerbestand()) - parseInt($scope.k25_1Value()) - parseInt($scope.k25_2Value()) + parseInt(sharedProperties.getK25PlanLagerbestandValue()) + parseInt($scope.k25BestellungValue)) < 0 || (parseInt($scope.k25Lagerbestand()) - parseInt($scope.k25_1Value()) + parseInt(sharedProperties.getK25PlanLagerbestandValue()))/$scope.k25_2Value() < 0.5) {
                $scope.k25BestellungMode = 1;
            } else {
                $scope.k25BestellungMode = 0;
            }
            var div = parseInt(tmp) + parseInt($scope.k25BestellungValue);
            if ((div/$scope.k25_3Value()) < 0.5) {
                $scope.k25BestellungValue = parseInt($scope.k25BestellungValue) + parseInt($scope.k25_3Value());
            }
            if ($scope.k25BestellungValue < 3600 && $scope.k25BestellungValue > 3250) {
                $scope.k25BestellungValue = 3600;
            }
            sharedProperties.setK25BestellungValue($scope.k25BestellungValue);
            sharedProperties.setK25BestellungMode($scope.k25BestellungMode);
            return parseInt($scope.k25_1Value()) + parseInt($scope.k25_2Value()) + parseInt($scope.k25_3Value()) + parseInt($scope.k25_4Value());
        }
    };
    $scope.k27_1Value = function() {
        if($scope.p1_1Value >= 0 && $scope.p2_1Value >= 0 && $scope.p3_1Value >= 0) {
            return $scope.p1_1Value * 2 + $scope.p2_1Value * 2 + $scope.p3_1Value * 2;
        }
    };
    $scope.k27_2Value = function() {
        if($scope.p1_2Value >= 0 && $scope.p2_2Value >= 0 && $scope.p3_2Value >= 0) {
            return $scope.p1_2Value * 2 + $scope.p2_2Value * 2 + $scope.p3_2Value * 2;
        }
    };
    $scope.k27_3Value = function() {
        if($scope.p1_3Value >= 0 && $scope.p2_3Value >= 0 && $scope.p3_3Value >= 0) {
            return $scope.p1_3Value * 2 + $scope.p2_3Value * 2 + $scope.p3_3Value * 2;
        }
    };
    $scope.k27_4Value = function() {
        if($scope.p1_4Value >= 0 && $scope.p2_4Value >= 0 && $scope.p3_4Value >= 0) {
            return $scope.p1_4Value * 2 + $scope.p2_4Value * 2 + $scope.p3_4Value * 2;
        }
    };
    $scope.k27_SumValue = function() {
        if($scope.k27_1Value() >= 0 && $scope.k27_2Value() >= 0 && $scope.k27_3Value() >= 0 && $scope.k27_4Value() >= 0) {
            var tmp = parseInt($scope.k27Lagerbestand()) - parseInt($scope.k27_1Value()) - parseInt($scope.k27_2Value()) + parseInt(sharedProperties.getK27PlanLagerbestandValue());
            $scope.k27BestellungValue = tmp * (-1);
            if ($scope.k27BestellungValue < 0) {
                $scope.k27BestellungValue = 0;
            }
            if ((parseInt($scope.k27Lagerbestand()) - parseInt($scope.k27_1Value()) + parseInt(sharedProperties.getK27PlanLagerbestandValue())) < 0 || (parseInt($scope.k27Lagerbestand()) - parseInt($scope.k27_1Value()) - parseInt($scope.k27_2Value()) + parseInt(sharedProperties.getK27PlanLagerbestandValue()) + parseInt($scope.k27BestellungValue)) < 0 || (parseInt($scope.k27Lagerbestand()) - parseInt($scope.k27_1Value()) + parseInt(sharedProperties.getK27PlanLagerbestandValue()))/$scope.k27_2Value() < 0.5) {
                $scope.k27BestellungMode = 1;
            } else {
                $scope.k27BestellungMode = 0;
            }
            var div = parseInt(tmp) + parseInt($scope.k27BestellungValue);
            if ((div/$scope.k27_3Value()) < 0.5) {
                $scope.k27BestellungValue = parseInt($scope.k27BestellungValue) + parseInt($scope.k27_3Value());
            }
            if ($scope.k27BestellungValue < 1800 && $scope.k27BestellungValue > 1450) {
                $scope.k27BestellungValue = 1800;
            }
            sharedProperties.setK27BestellungValue($scope.k27BestellungValue);
            sharedProperties.setK27BestellungMode($scope.k27BestellungMode);
            return parseInt($scope.k27_1Value()) + parseInt($scope.k27_2Value()) + parseInt($scope.k27_3Value()) + parseInt($scope.k27_4Value());
        }
    };
    $scope.k28_1Value = function() {
        if($scope.p1_1Value >= 0 && $scope.p2_1Value >= 0 && $scope.p3_1Value >= 0) {
            return $scope.p1_1Value * 4 + $scope.p2_1Value * 5 + $scope.p3_1Value * 6;
        }
    };
    $scope.k28_2Value = function() {
        if($scope.p1_2Value >= 0 && $scope.p2_2Value >= 0 && $scope.p3_2Value >= 0) {
            return $scope.p1_2Value * 4 + $scope.p2_2Value * 5 + $scope.p3_2Value * 6;
        }
    };
    $scope.k28_3Value = function() {
        if($scope.p1_3Value >= 0 && $scope.p2_3Value >= 0 && $scope.p3_3Value >= 0) {
            return $scope.p1_3Value * 4 + $scope.p2_3Value * 5 + $scope.p3_3Value * 6;
        }
    };
    $scope.k28_4Value = function() {
        if($scope.p1_4Value >= 0 && $scope.p2_4Value >= 0 && $scope.p3_4Value >= 0) {
            return $scope.p1_4Value * 4 + $scope.p2_4Value * 5 + $scope.p3_4Value * 6;
        }
    };
    $scope.k28_SumValue = function() {
        if($scope.k28_1Value() >= 0 && $scope.k28_2Value() >= 0 && $scope.k28_3Value() >= 0 && $scope.k28_4Value() >= 0) {
            var tmp = parseInt($scope.k28Lagerbestand()) - parseInt($scope.k28_1Value()) - parseInt($scope.k28_2Value()) - parseInt($scope.k28_3Value()) + parseInt(sharedProperties.getK28PlanLagerbestandValue()) + parseInt(sharedProperties.getK28_1PlanLagerbestandValue());
            $scope.k28BestellungValue = tmp * (-1);
            if ($scope.k28BestellungValue < 0) {
                $scope.k28BestellungValue = 0;
            }
            if ((parseInt($scope.k28Lagerbestand()) - parseInt($scope.k28_1Value()) + parseInt(sharedProperties.getK28PlanLagerbestandValue())) < 0 || (parseInt($scope.k28Lagerbestand()) - parseInt($scope.k28_1Value()) - parseInt($scope.k28_2Value()) + parseInt(sharedProperties.getK28PlanLagerbestandValue()) + parseInt(sharedProperties.getK28_1PlanLagerbestandValue())) < 0 || (parseInt($scope.k28Lagerbestand()) - parseInt($scope.k28_1Value()) - parseInt($scope.k28_2Value()) - parseInt($scope.k28_3Value()) + parseInt(sharedProperties.getK28PlanLagerbestandValue()) + parseInt(sharedProperties.getK28_1PlanLagerbestandValue()) + parseInt($scope.k28BestellungValue)) < 0 || (parseInt($scope.k28Lagerbestand()) - parseInt($scope.k28_1Value()) - parseInt($scope.k28_2Value()) + parseInt(sharedProperties.getK28PlanLagerbestandValue()) + parseInt(sharedProperties.getK28_1PlanLagerbestandValue()))/$scope.k28_3Value() < 0.5) {
                $scope.k28BestellungMode = 1;
            } else {
                $scope.k28BestellungMode = 0;
            }
            var div = parseInt(tmp) + parseInt($scope.k28BestellungValue);
            if ((div/$scope.k28_4Value()) < 0.5) {
                $scope.k28BestellungValue = parseInt($scope.k28BestellungValue) + parseInt($scope.k28_4Value());
            }
            if ($scope.k28BestellungValue < 4500 && $scope.k28BestellungValue > 4000) {
                $scope.k28BestellungValue = 4500;
            }
            sharedProperties.setK28BestellungValue($scope.k28BestellungValue);
            sharedProperties.setK28BestellungMode($scope.k28BestellungMode);
            return parseInt($scope.k28_1Value()) + parseInt($scope.k28_2Value()) + parseInt($scope.k28_3Value()) + parseInt($scope.k28_4Value());
        }
    };
    $scope.k32_1Value = function() {
        if($scope.p1_1Value >= 0 && $scope.p2_1Value >= 0 && $scope.p3_1Value >= 0) {
            return $scope.p1_1Value * 3 + $scope.p2_1Value * 3 + $scope.p3_1Value * 3;
        }
    };
    $scope.k32_2Value = function() {
        if($scope.p1_2Value >= 0 && $scope.p2_2Value >= 0 && $scope.p3_2Value >= 0) {
            return $scope.p1_2Value * 3 + $scope.p2_2Value * 3 + $scope.p3_2Value * 3;
        }
    };
    $scope.k32_3Value = function() {
        if($scope.p1_3Value >= 0 && $scope.p2_3Value >= 0 && $scope.p3_3Value >= 0) {
            return $scope.p1_3Value * 3 + $scope.p2_3Value * 3 + $scope.p3_3Value * 3;
        }
    };
    $scope.k32_4Value = function() {
        if($scope.p1_4Value >= 0 && $scope.p2_4Value >= 0 && $scope.p3_4Value >= 0) {
            return $scope.p1_4Value * 3 + $scope.p2_4Value * 3 + $scope.p3_4Value * 3;
        }
    };
    $scope.k32_SumValue = function() {
        if($scope.k32_1Value() >= 0 && $scope.k32_2Value() >= 0 && $scope.k32_3Value() >= 0 && $scope.k32_4Value() >= 0) {
            var tmp = parseInt($scope.k32Lagerbestand()) - parseInt($scope.k32_1Value()) - parseInt($scope.k32_2Value()) - parseInt($scope.k32_3Value()) + parseInt(sharedProperties.getK32PlanLagerbestandValue()) + parseInt(sharedProperties.getK32_1PlanLagerbestandValue());
            $scope.k32BestellungValue = tmp * (-1);
            if ($scope.k32BestellungValue < 0) {
                $scope.k32BestellungValue = 0;
            }
            if ((parseInt($scope.k32Lagerbestand()) - parseInt($scope.k32_1Value()) + parseInt(sharedProperties.getK32PlanLagerbestandValue())) < 0 || (parseInt($scope.k32Lagerbestand()) - parseInt($scope.k32_1Value()) - parseInt($scope.k32_2Value()) + parseInt(sharedProperties.getK32PlanLagerbestandValue()) + parseInt(sharedProperties.getK32_1PlanLagerbestandValue())) < 0 || (parseInt($scope.k32Lagerbestand()) - parseInt($scope.k32_1Value()) - parseInt($scope.k32_2Value()) - parseInt($scope.k32_3Value()) + parseInt(sharedProperties.getK32PlanLagerbestandValue()) + parseInt(sharedProperties.getK32_1PlanLagerbestandValue()) + parseInt($scope.k32BestellungValue)) < 0 || (parseInt($scope.k32Lagerbestand()) - parseInt($scope.k32_1Value()) - parseInt($scope.k32_2Value()) + parseInt(sharedProperties.getK32PlanLagerbestandValue()) + parseInt(sharedProperties.getK32_1PlanLagerbestandValue()))/$scope.k32_3Value() < 0.5) {
                $scope.k32BestellungMode = 1;
            } else {
                $scope.k32BestellungMode = 0;
            }
            var div = parseInt(tmp) + parseInt($scope.k32BestellungValue);
            if ((div/$scope.k32_4Value()) < 0.5) {
                $scope.k32BestellungValue = parseInt($scope.k32BestellungValue) + parseInt($scope.k32_4Value());
            }
            if ($scope.k32BestellungValue < 2700 && $scope.k32BestellungValue > 2400) {
                $scope.k32BestellungValue = 2700;
            }
            sharedProperties.setK32BestellungValue($scope.k32BestellungValue);
            sharedProperties.setK32BestellungMode($scope.k32BestellungMode);
            return parseInt($scope.k32_1Value()) + parseInt($scope.k32_2Value()) + parseInt($scope.k32_3Value()) + parseInt($scope.k32_4Value());
        }
    };
    $scope.k33_1Value = function() {
        if($scope.p3_1Value >= 0) {
            return $scope.p3_1Value * 2;
        }
    };
    $scope.k33_2Value = function() {
        if($scope.p3_2Value >= 0) {
            return $scope.p3_2Value * 2;
        }
    };
    $scope.k33_3Value = function() {
        if($scope.p3_3Value >= 0) {
            return $scope.p3_3Value * 2;
        }
    };
    $scope.k33_4Value = function() {
        if($scope.p3_4Value >= 0) {
            return $scope.p3_4Value * 2;
        }
    };
    $scope.k33_SumValue = function() {
        if($scope.k33_1Value() >= 0 && $scope.k33_2Value() >= 0 && $scope.k33_3Value() >= 0 && $scope.k33_4Value() >= 0) {
            var tmp = parseInt($scope.k33Lagerbestand()) - parseInt($scope.k33_1Value()) - parseInt($scope.k33_2Value()) - parseInt($scope.k33_3Value()) + parseInt(sharedProperties.getK33PlanLagerbestandValue()) + parseInt(sharedProperties.getK33_1PlanLagerbestandValue());
            $scope.k33BestellungValue = tmp * (-1);
            if ($scope.k33BestellungValue < 0) {
                $scope.k33BestellungValue = 0;
            }
            if ((parseInt($scope.k33Lagerbestand()) - parseInt($scope.k33_1Value()) + parseInt(sharedProperties.getK33PlanLagerbestandValue())) < 0 || (parseInt($scope.k33Lagerbestand()) - parseInt($scope.k33_1Value()) - parseInt($scope.k33_2Value()) + parseInt(sharedProperties.getK33PlanLagerbestandValue()) + parseInt(sharedProperties.getK33_1PlanLagerbestandValue())) < 0 || (parseInt($scope.k33Lagerbestand()) - parseInt($scope.k33_1Value()) - parseInt($scope.k33_2Value()) + parseInt(sharedProperties.getK33PlanLagerbestandValue()) + parseInt(sharedProperties.getK33_1PlanLagerbestandValue())) < 0 || (parseInt($scope.k33Lagerbestand()) - parseInt($scope.k33_1Value()) - parseInt($scope.k33_2Value()) + parseInt(sharedProperties.getK33PlanLagerbestandValue()) + parseInt(sharedProperties.getK33_1PlanLagerbestandValue()))/$scope.k33_3Value() < 0.5) {
                $scope.k33BestellungMode = 1;
            } else {
                $scope.k33BestellungMode = 0;
            }
            var div = parseInt(tmp) + parseInt($scope.k33BestellungValue);
            if ((div/$scope.k33_4Value()) < 0.5) {
                $scope.k33BestellungValue = parseInt($scope.k33BestellungValue) + parseInt($scope.k33_4Value());
            }
            if ($scope.k33BestellungValue < 900 && $scope.k33BestellungValue > 750) {
                $scope.k33BestellungValue = 900;
            }
            sharedProperties.setK33BestellungValue($scope.k33BestellungValue);
            sharedProperties.setK33BestellungMode($scope.k33BestellungMode);
            return parseInt($scope.k33_1Value()) + parseInt($scope.k33_2Value()) + parseInt($scope.k33_3Value()) + parseInt($scope.k33_4Value());
        }
    };
    $scope.k34_1Value = function() {
        if($scope.p3_1Value >= 0) {
            return $scope.p3_1Value * 72;
        }
    };
    $scope.k34_2Value = function() {
        if($scope.p3_2Value >= 0) {
            return $scope.p3_2Value * 72;
        }
    };
    $scope.k34_3Value = function() {
        if($scope.p3_3Value >= 0) {
            return $scope.p3_3Value * 72;
        }
    };
    $scope.k34_4Value = function() {
        if($scope.p3_4Value >= 0) {
            return $scope.p3_4Value * 72;
        }
    };
    $scope.k34_SumValue = function() {
        if($scope.k34_1Value() >= 0 && $scope.k34_2Value() >= 0 && $scope.k34_3Value() >= 0 && $scope.k34_4Value() >= 0) {
            var tmp = parseInt($scope.k34Lagerbestand()) - parseInt($scope.k34_1Value()) - parseInt($scope.k34_2Value()) - parseInt($scope.k34_3Value()) + parseInt(sharedProperties.getK34PlanLagerbestandValue());
            $scope.k34BestellungValue = tmp * (-1);
            if ($scope.k34BestellungValue < 0) {
                $scope.k34BestellungValue = 0;
            }
            if ((parseInt($scope.k34Lagerbestand()) - parseInt($scope.k34_1Value()) + parseInt(sharedProperties.getK34PlanLagerbestandValue())) < 0 || (parseInt($scope.k34Lagerbestand()) - parseInt($scope.k34_1Value()) - parseInt($scope.k34_2Value()) + parseInt(sharedProperties.getK34PlanLagerbestandValue()) + parseInt($scope.k34BestellungValue)) < 0) {
                $scope.k34BestellungMode = 1;
            } else {
                $scope.k34BestellungMode = 0;
            }
            if ($scope.k34BestellungValue < 22000 && $scope.k34BestellungValue > 17500) {
                $scope.k34BestellungValue = 22000;
            }
            sharedProperties.setK34BestellungValue($scope.k34BestellungValue);
            sharedProperties.setK34BestellungMode($scope.k34BestellungMode);
            return parseInt($scope.k34_1Value()) + parseInt($scope.k34_2Value()) + parseInt($scope.k34_3Value()) + parseInt($scope.k34_4Value());
        }
    };
    $scope.k35_1Value = function() {
        if($scope.p1_1Value >= 0 && $scope.p2_1Value >= 0 && $scope.p3_1Value >= 0) {
            return $scope.p1_1Value * 4 + $scope.p2_1Value * 4 + $scope.p3_1Value * 4;
        }
    };
    $scope.k35_2Value = function() {
        if($scope.p1_2Value >= 0 && $scope.p2_2Value >= 0 && $scope.p3_2Value >= 0) {
            return $scope.p1_2Value * 4 + $scope.p2_2Value * 4 + $scope.p3_2Value * 4;
        }
    };
    $scope.k35_3Value = function() {
        if($scope.p1_3Value >= 0 && $scope.p2_3Value >= 0 && $scope.p3_3Value >= 0) {
            return $scope.p1_3Value * 4 + $scope.p2_3Value * 4 + $scope.p3_3Value * 4;
        }
    };
    $scope.k35_4Value = function() {
        if($scope.p1_4Value >= 0 && $scope.p2_4Value >= 0 && $scope.p3_4Value >= 0) {
            return $scope.p1_4Value * 4 + $scope.p2_4Value * 4 + $scope.p3_4Value * 4;
        }
    };
    $scope.k35_SumValue = function() {
        if($scope.k35_1Value() >= 0 && $scope.k35_2Value() >= 0 && $scope.k35_3Value() >= 0 && $scope.k35_4Value() >= 0) {
            var tmp = parseInt($scope.k35Lagerbestand()) - parseInt($scope.k35_1Value()) - parseInt($scope.k35_2Value()) - parseInt($scope.k35_3Value()) + parseInt(sharedProperties.getK35PlanLagerbestandValue()) + parseInt(sharedProperties.getK35_1PlanLagerbestandValue());
            $scope.k35BestellungValue = tmp * (-1);
            if ($scope.k35BestellungValue < 0) {
                $scope.k35BestellungValue = 0;
            }
            if ((parseInt($scope.k35Lagerbestand()) - parseInt($scope.k35_1Value()) + parseInt(sharedProperties.getK35PlanLagerbestandValue())) < 0 || (parseInt($scope.k35Lagerbestand()) - parseInt($scope.k35_1Value()) - parseInt($scope.k35_2Value()) + parseInt(sharedProperties.getK35PlanLagerbestandValue()) + parseInt(sharedProperties.getK35_1PlanLagerbestandValue())) < 0 || (parseInt($scope.k35Lagerbestand()) - parseInt($scope.k35_1Value()) - parseInt($scope.k35_2Value()) - parseInt($scope.k35_3Value()) + parseInt(sharedProperties.getK35PlanLagerbestandValue()) + parseInt(sharedProperties.getK35_1PlanLagerbestandValue()) + parseInt($scope.k35BestellungValue)) < 0 || (parseInt($scope.k35Lagerbestand()) - parseInt($scope.k35_1Value()) - parseInt($scope.k35_2Value()) + parseInt(sharedProperties.getK35PlanLagerbestandValue()) + parseInt(sharedProperties.getK35_1PlanLagerbestandValue()))/$scope.k35_3Value() < 0.5) {
                $scope.k35BestellungMode = 1;
            } else {
                $scope.k35BestellungMode = 0;
            }
            var div = parseInt(tmp) + parseInt($scope.k35BestellungValue);
            if ((div/$scope.k35_4Value()) < 0.5) {
                $scope.k35BestellungValue = parseInt($scope.k35BestellungValue) + parseInt($scope.k35_4Value());
            }
            if ($scope.k35BestellungValue < 3600 && $scope.k35BestellungValue > 3300) {
                $scope.k35BestellungValue = 3600;
            }
            sharedProperties.setK35BestellungValue($scope.k35BestellungValue);
            sharedProperties.setK35BestellungMode($scope.k35BestellungMode);
            return parseInt($scope.k35_1Value()) + parseInt($scope.k35_2Value()) + parseInt($scope.k35_3Value()) + parseInt($scope.k35_4Value());
        }
    };
    $scope.k36_1Value = function() {
        if($scope.p1_1Value >= 0 && $scope.p2_1Value >= 0 && $scope.p3_1Value >= 0) {
            return parseInt($scope.p1_1Value) + parseInt($scope.p2_1Value) + parseInt($scope.p3_1Value);
        }
    };
    $scope.k36_2Value = function() {
        if($scope.p1_2Value >= 0 && $scope.p2_2Value >= 0 && $scope.p3_2Value >= 0) {
            return parseInt($scope.p1_2Value) + parseInt($scope.p2_2Value) + parseInt($scope.p3_2Value);
        }
    };
    $scope.k36_3Value = function() {
        if($scope.p1_3Value >= 0 && $scope.p2_3Value >= 0 && $scope.p3_3Value >= 0) {
            return parseInt($scope.p1_3Value) + parseInt($scope.p2_3Value) + parseInt($scope.p3_3Value);
        }
    };
    $scope.k36_4Value = function() {
        if($scope.p1_4Value >= 0 && $scope.p2_4Value >= 0 && $scope.p3_4Value >= 0) {
            return parseInt($scope.p1_4Value) + parseInt($scope.p2_4Value) + parseInt($scope.p3_4Value);
        }
    };
    $scope.k36_SumValue = function() {
        if($scope.k36_1Value() >= 0 && $scope.k36_2Value() >= 0 && $scope.k36_3Value() >= 0 && $scope.k36_4Value() >= 0) {
            var tmp = parseInt($scope.k36Lagerbestand()) - parseInt($scope.k36_1Value()) - parseInt($scope.k36_2Value()) + parseInt(sharedProperties.getK36PlanLagerbestandValue());
            $scope.k236BestellungValue = tmp * (-1);
            if ($scope.k36BestellungValue < 0) {
                $scope.k36BestellungValue = 0;
            }
            if ((parseInt($scope.k36Lagerbestand()) - parseInt($scope.k36_1Value()) + parseInt(sharedProperties.getK36PlanLagerbestandValue())) < 0 || (parseInt($scope.k36Lagerbestand()) - parseInt($scope.k36_1Value()) - parseInt($scope.k36_2Value()) + parseInt(sharedProperties.getK36PlanLagerbestandValue()) + parseInt($scope.k36BestellungValue)) < 0 || (parseInt($scope.k36Lagerbestand()) - parseInt($scope.k36_1Value()) + parseInt(sharedProperties.getK36PlanLagerbestandValue()))/$scope.k36_2Value() < 0.5) {
                $scope.k36BestellungMode = 1;
            } else {
                $scope.k36BestellungMode = 0;
            }
            var div = parseInt(tmp) + parseInt($scope.k36BestellungValue);
            if ((div/$scope.k36_3Value()) < 0.5) {
                $scope.k36BestellungValue = parseInt($scope.k36BestellungValue) + parseInt($scope.k36_3Value());
            }
            if ($scope.k36BestellungValue < 900 && $scope.k36BestellungValue > 750) {
                $scope.k36BestellungValue = 900;
            }
            sharedProperties.setK36BestellungValue($scope.k36BestellungValue);
            sharedProperties.setK36BestellungMode($scope.k36BestellungMode);
            return parseInt($scope.k36_1Value()) + parseInt($scope.k36_2Value()) + parseInt($scope.k36_3Value()) + parseInt($scope.k36_4Value());
        }
    };
    $scope.k37_1Value = function() {
        if($scope.p1_1Value >= 0 && $scope.p2_1Value >= 0 && $scope.p3_1Value >= 0) {
            return parseInt($scope.p1_1Value) + parseInt($scope.p2_1Value) + parseInt($scope.p3_1Value);
        }
    };
    $scope.k37_2Value = function() {
        if($scope.p1_2Value >= 0 && $scope.p2_2Value >= 0 && $scope.p3_2Value >= 0) {
            return parseInt($scope.p1_2Value) + parseInt($scope.p2_2Value) + parseInt($scope.p3_2Value);
        }
    };
    $scope.k37_3Value = function() {
        if($scope.p1_3Value >= 0 && $scope.p2_3Value >= 0 && $scope.p3_3Value >= 0) {
            return parseInt($scope.p1_3Value) + parseInt($scope.p2_3Value) + parseInt($scope.p3_3Value);
        }
    };
    $scope.k37_4Value = function() {
        if($scope.p1_4Value >= 0 && $scope.p2_4Value >= 0 && $scope.p3_4Value >= 0) {
            return parseInt($scope.p1_4Value) + parseInt($scope.p2_4Value) + parseInt($scope.p3_4Value);
        }
    };
    $scope.k37_SumValue = function() {
        if($scope.k37_1Value() >= 0 && $scope.k37_2Value() >= 0 && $scope.k37_3Value() >= 0 && $scope.k37_4Value() >= 0) {
            var tmp = parseInt($scope.k37Lagerbestand()) - parseInt($scope.k37_1Value()) - parseInt($scope.k37_2Value()) - parseInt($scope.k37_3Value()) + parseInt(sharedProperties.getK37PlanLagerbestandValue());
            $scope.k37BestellungValue = tmp * (-1);
            if ($scope.k37BestellungValue < 0) {
                $scope.k37BestellungValue = 0;
            }
            if ((parseInt($scope.k37Lagerbestand()) - parseInt($scope.k37_1Value()) + parseInt(sharedProperties.getK37PlanLagerbestandValue())) < 0 || (parseInt($scope.k37Lagerbestand()) - parseInt($scope.k37_1Value()) - parseInt($scope.k37_2Value()) + parseInt(sharedProperties.getK37PlanLagerbestandValue()) + parseInt($scope.k37BestellungValue)) < 0) {
                $scope.k37BestellungMode = 1;
            } else {
                $scope.k37BestellungMode = 0;
            }
            if ($scope.k37BestellungValue < 900 && $scope.k37BestellungValue > 750) {
                $scope.k37BestellungValue = 900;
            }
            sharedProperties.setK37BestellungValue($scope.k37BestellungValue);
            sharedProperties.setK37BestellungMode($scope.k37BestellungMode);
            return parseInt($scope.k37_1Value()) + parseInt($scope.k37_2Value()) + parseInt($scope.k37_3Value()) + parseInt($scope.k37_4Value());
        }
    };
    $scope.k38_1Value = function() {
        if($scope.p1_1Value >= 0 && $scope.p2_1Value >= 0 && $scope.p3_1Value >= 0) {
            return parseInt($scope.p1_1Value) + parseInt($scope.p2_1Value) + parseInt($scope.p3_1Value);
        }
    };
    $scope.k38_2Value = function() {
        if($scope.p1_2Value >= 0 && $scope.p2_2Value >= 0 && $scope.p3_2Value >= 0) {
            return parseInt($scope.p1_2Value) + parseInt($scope.p2_2Value) + parseInt($scope.p3_2Value);
        }
    };
    $scope.k38_3Value = function() {
        if($scope.p1_3Value >= 0 && $scope.p2_3Value >= 0 && $scope.p3_3Value >= 0) {
            return parseInt($scope.p1_3Value) + parseInt($scope.p2_3Value) + parseInt($scope.p3_3Value);
        }
    };
    $scope.k38_4Value = function() {
        if($scope.p1_4Value >= 0 && $scope.p2_4Value >= 0 && $scope.p3_4Value >= 0) {
            return parseInt($scope.p1_4Value) + parseInt($scope.p2_4Value) + parseInt($scope.p3_4Value);
        }
    };
    $scope.k38_SumValue = function() {
        if($scope.k38_1Value() >= 0 && $scope.k38_2Value() >= 0 && $scope.k38_3Value() >= 0 && $scope.k38_4Value() >= 0) {
            var tmp = parseInt($scope.k38Lagerbestand()) - parseInt($scope.k38_1Value()) - parseInt($scope.k38_2Value()) - (parseInt($scope.k38_3Value())) + parseInt(sharedProperties.getK38PlanLagerbestandValue()) + parseInt(sharedProperties.getK38_1PlanLagerbestandValue());
            $scope.k38BestellungValue = tmp * (-1);
            if ($scope.k38BestellungValue < 0) {
                $scope.k38BestellungValue = 0;
            }
            if ((parseInt($scope.k38Lagerbestand()) - parseInt($scope.k38_1Value()) + parseInt(sharedProperties.getK38PlanLagerbestandValue())) < 0 || (parseInt($scope.k38Lagerbestand()) - parseInt($scope.k38_1Value()) - parseInt($scope.k38_2Value()) + parseInt(sharedProperties.getK38PlanLagerbestandValue()) + parseInt(sharedProperties.getK38_1PlanLagerbestandValue())) < 0) {
                $scope.k38BestellungMode = 1;
            } else {
                $scope.k38BestellungMode = 0;
            }
            if ($scope.k38BestellungValue < 300 && $scope.k38BestellungValue > 250) {
                $scope.k38BestellungValue = 300;
            }
            sharedProperties.setK38BestellungValue($scope.k38BestellungValue);
            sharedProperties.setK38BestellungMode($scope.k38BestellungMode);
            return parseInt($scope.k38_1Value()) + parseInt($scope.k38_2Value()) + parseInt($scope.k38_3Value()) + parseInt($scope.k38_4Value());
        }
    };
    $scope.k39_1Value = function() {
        if($scope.p1_1Value >= 0 && $scope.p2_1Value >= 0 && $scope.p3_1Value >= 0) {
            return $scope.p1_1Value * 2 + $scope.p2_1Value * 2 + $scope.p3_1Value * 2;
        }
    };
    $scope.k39_2Value = function() {
        if($scope.p1_2Value >= 0 && $scope.p2_2Value >= 0 && $scope.p3_2Value >= 0) {
            return $scope.p1_2Value * 2 + $scope.p2_2Value * 2 + $scope.p3_2Value * 2;
        }
    };
    $scope.k39_3Value = function() {
        if($scope.p1_3Value >= 0 && $scope.p2_3Value >= 0 && $scope.p3_3Value >= 0) {
            return $scope.p1_3Value * 2 + $scope.p2_3Value * 2 + $scope.p3_3Value * 2;
        }
    };
    $scope.k39_4Value = function() {
        if($scope.p1_4Value >= 0 && $scope.p2_4Value >= 0 && $scope.p3_4Value >= 0) {
            return $scope.p1_4Value * 2 + $scope.p2_4Value * 2 + $scope.p3_4Value * 2;
        }
    };
    $scope.k39_SumValue = function() {
        if($scope.k39_1Value() >= 0 && $scope.k39_2Value() >= 0 && $scope.k39_3Value() >= 0 && $scope.k39_4Value() >= 0) {
            var tmp = parseInt($scope.k39Lagerbestand()) - parseInt($scope.k39_1Value()) - parseInt($scope.k39_2Value()) - parseInt($scope.k39_3Value()) + parseInt(sharedProperties.getK39PlanLagerbestandValue());
            $scope.k39BestellungValue = tmp * (-1);
            if ($scope.k39BestellungValue < 0) {
                $scope.k39BestellungValue = 0;
            }
            if ((parseInt($scope.k39Lagerbestand()) - parseInt($scope.k39_1Value()) + parseInt(sharedProperties.getK39PlanLagerbestandValue())) < 0 || (parseInt($scope.k39Lagerbestand()) - parseInt($scope.k39_1Value()) - parseInt($scope.k39_2Value()) + parseInt(sharedProperties.getK39PlanLagerbestandValue()) + parseInt($scope.k39BestellungValue)) < 0) {
                $scope.k39BestellungMode = 1;
            } else {
                $scope.k39BestellungMode = 0;
            }
            if ($scope.k39BestellungValue < 1800 && $scope.k39BestellungValue > 1450) {
                $scope.k39BestellungValue = 1800;
            }
            sharedProperties.setK39BestellungValue($scope.k39BestellungValue);
            sharedProperties.setK39BestellungMode($scope.k39BestellungMode);
            return parseInt($scope.k39_1Value()) + parseInt($scope.k39_2Value()) + parseInt($scope.k39_3Value()) + parseInt($scope.k39_4Value());
        }
    };
    $scope.k40_1Value = function() {
        if($scope.p1_1Value >= 0 && $scope.p2_1Value >= 0 && $scope.p3_1Value >= 0) {
            return parseInt($scope.p1_1Value) + parseInt($scope.p2_1Value) + parseInt($scope.p3_1Value);
        }
    };
    $scope.k40_2Value = function() {
        if($scope.p1_2Value >= 0 && $scope.p2_2Value >= 0 && $scope.p3_2Value >= 0) {
            return parseInt($scope.p1_2Value) + parseInt($scope.p2_2Value) + parseInt($scope.p3_2Value);
        }
    };
    $scope.k40_3Value = function() {
        if($scope.p1_3Value >= 0 && $scope.p2_3Value >= 0 && $scope.p3_3Value >= 0) {
            return parseInt($scope.p1_3Value) + parseInt($scope.p2_3Value) + parseInt($scope.p3_3Value);
        }
    };
    $scope.k40_4Value = function() {
        if($scope.p1_4Value >= 0 && $scope.p2_4Value >= 0 && $scope.p3_4Value >= 0) {
            return parseInt($scope.p1_4Value) + parseInt($scope.p2_4Value) + parseInt($scope.p3_4Value);
        }
    };
    $scope.k40_SumValue = function() {
        if($scope.k40_1Value() >= 0 && $scope.k40_2Value() >= 0 && $scope.k40_3Value() >= 0 && $scope.k40_4Value() >= 0) {
            var tmp = parseInt($scope.k40Lagerbestand()) - parseInt($scope.k40_1Value()) - parseInt($scope.k40_2Value()) - parseInt($scope.k40_3Value()) + parseInt(sharedProperties.getK40PlanLagerbestandValue());
            $scope.k40BestellungValue = tmp * (-1);
            if ($scope.k40BestellungValue < 0) {
                $scope.k40BestellungValue = 0;
            }
            if ((parseInt($scope.k40Lagerbestand()) - parseInt($scope.k40_1Value()) + parseInt(sharedProperties.getK40PlanLagerbestandValue())) < 0 || (parseInt($scope.k40Lagerbestand()) - parseInt($scope.k40_1Value()) - parseInt($scope.k40_2Value()) + parseInt(sharedProperties.getK40PlanLagerbestandValue()) + parseInt($scope.k40BestellungValue)) < 0) {
                $scope.k40BestellungMode = 1;
            } else {
                $scope.k40BestellungMode = 0;
            }
            if ($scope.k40BestellungValue < 900 && $scope.k40BestellungValue > 750) {
                $scope.k40BestellungValue = 900;
            }
            sharedProperties.setK40BestellungValue($scope.k40BestellungValue);
            sharedProperties.setK40BestellungMode($scope.k40BestellungMode);
            return parseInt($scope.k40_1Value()) + parseInt($scope.k40_2Value()) + parseInt($scope.k40_3Value()) + parseInt($scope.k40_4Value());
        }
    };
    $scope.k41_1Value = function() {
        if($scope.p1_1Value >= 0 && $scope.p2_1Value >= 0 && $scope.p3_1Value >= 0) {
            return parseInt($scope.p1_1Value) + parseInt($scope.p2_1Value) + parseInt($scope.p3_1Value);
        }
    };
    $scope.k41_2Value = function() {
        if($scope.p1_2Value >= 0 && $scope.p2_2Value >= 0 && $scope.p3_2Value >= 0) {
            return parseInt($scope.p1_2Value) + parseInt($scope.p2_2Value) + parseInt($scope.p3_2Value);
        }
    };
    $scope.k41_3Value = function() {
        if($scope.p1_3Value >= 0 && $scope.p2_3Value >= 0 && $scope.p3_3Value >= 0) {
            return parseInt($scope.p1_3Value) + parseInt($scope.p2_3Value) + parseInt($scope.p3_3Value);
        }
    };
    $scope.k41_4Value = function() {
        if($scope.p1_4Value >= 0 && $scope.p2_4Value >= 0 && $scope.p3_4Value >= 0) {
            return parseInt($scope.p1_4Value) + parseInt($scope.p2_4Value) + parseInt($scope.p3_4Value);
        }
    };
    $scope.k41_SumValue = function() {
        if($scope.k41_1Value() >= 0 && $scope.k41_2Value() >= 0 && $scope.k41_3Value() >= 0 && $scope.k41_4Value() >= 0) {
            var tmp = parseInt($scope.k41Lagerbestand()) - parseInt($scope.k41_1Value()) - parseInt($scope.k41_2Value()) + parseInt(sharedProperties.getK41PlanLagerbestandValue());
            $scope.k41BestellungValue = tmp * (-1);
            if ($scope.k41BestellungValue < 0) {
                $scope.k41BestellungValue = 0;
            }
            if ((parseInt($scope.k41Lagerbestand()) - parseInt($scope.k41_1Value()) + parseInt(sharedProperties.getK41PlanLagerbestandValue())) < 0 || (parseInt($scope.k41Lagerbestand()) - parseInt($scope.k41_1Value()) - parseInt($scope.k41_2Value()) + parseInt(sharedProperties.getK41PlanLagerbestandValue()) + parseInt($scope.k41BestellungValue)) < 0 || (parseInt($scope.k41Lagerbestand()) - parseInt($scope.k41_1Value()) + parseInt(sharedProperties.getK41PlanLagerbestandValue()))/$scope.k41_2Value() < 0.5) {
                $scope.k41BestellungMode = 1;
            } else {
                $scope.k41BestellungMode = 0;
            }
            var div = parseInt(tmp) + parseInt($scope.k41BestellungValue);
            if ((div/$scope.k41_3Value()) < 0.5) {
                $scope.k41BestellungValue = parseInt($scope.k41BestellungValue) + parseInt($scope.k41_3Value());
            }
            if ($scope.k41BestellungValue < 900 && $scope.k41BestellungValue > 750) {
                $scope.k41BestellungValue = 900;
            }
            sharedProperties.setK41BestellungValue($scope.k41BestellungValue);
            sharedProperties.setK41BestellungMode($scope.k41BestellungMode);
            return parseInt($scope.k41_1Value()) + parseInt($scope.k41_2Value()) + parseInt($scope.k41_3Value()) + parseInt($scope.k41_4Value());
        }
    };
    $scope.k42_1Value = function() {
        if($scope.p1_1Value >= 0 && $scope.p2_1Value >= 0 && $scope.p3_1Value >= 0) {
            return $scope.p1_1Value * 2 + $scope.p2_1Value * 2 + $scope.p3_1Value * 2;
        }
    };
    $scope.k42_2Value = function() {
        if($scope.p1_2Value >= 0 && $scope.p2_2Value >= 0 && $scope.p3_2Value >= 0) {
            return $scope.p1_2Value * 2 + $scope.p2_2Value * 2 + $scope.p3_2Value * 2;
        }
    };
    $scope.k42_3Value = function() {
        if($scope.p1_3Value >= 0 && $scope.p2_3Value >= 0 && $scope.p3_3Value >= 0) {
            return $scope.p1_3Value * 2 + $scope.p2_3Value * 2 + $scope.p3_3Value * 2;
        }
    };
    $scope.k42_4Value = function() {
        if($scope.p1_4Value >= 0 && $scope.p2_4Value >= 0 && $scope.p3_4Value >= 0) {
            return $scope.p1_4Value * 2 + $scope.p2_4Value * 2 + $scope.p3_4Value * 2;
        }
    };
    $scope.k42_SumValue = function() {
        if($scope.k42_1Value() >= 0 && $scope.k42_2Value() >= 0 && $scope.k42_3Value() >= 0 && $scope.k42_4Value() >= 0) {
            var tmp = parseInt($scope.k42Lagerbestand()) - parseInt($scope.k42_1Value()) - parseInt($scope.k42_2Value()) + parseInt(sharedProperties.getK42PlanLagerbestandValue());
            $scope.k42BestellungValue = tmp * (-1);
            if ($scope.k42BestellungValue < 0) {
                $scope.k42BestellungValue = 0;
            }
            if ((parseInt($scope.k42Lagerbestand()) - parseInt($scope.k42_1Value()) + parseInt(sharedProperties.getK42PlanLagerbestandValue())) < 0 || (parseInt($scope.k42Lagerbestand()) - parseInt($scope.k42_1Value()) - parseInt($scope.k42_2Value()) + parseInt(sharedProperties.getK42PlanLagerbestandValue()) + parseInt($scope.k42BestellungValue)) < 0 || (parseInt($scope.k42Lagerbestand()) - parseInt($scope.k42_1Value()) + parseInt(sharedProperties.getK42PlanLagerbestandValue()))/$scope.k42_2Value() < 0.5) {
                $scope.k42BestellungMode = 1;
            } else {
                $scope.k42BestellungMode = 0;
            }
            var div = parseInt(tmp) + parseInt($scope.k25BestellungValue);
            if ((div/$scope.k42_3Value()) < 0.5) {
                $scope.k42BestellungValue = parseInt($scope.k42BestellungValue) + parseInt($scope.k42_3Value());
            }
            if ($scope.k42BestellungValue < 1800 && $scope.k42BestellungValue > 1450) {
                $scope.k42BestellungValue = 1800;
            }
            sharedProperties.setK42BestellungValue($scope.k42BestellungValue);
            sharedProperties.setK42BestellungMode($scope.k42BestellungMode);
            return parseInt($scope.k42_1Value()) + parseInt($scope.k42_2Value()) + parseInt($scope.k42_3Value()) + parseInt($scope.k42_4Value());
        }
    };
    $scope.k43_1Value = function() {
        if($scope.p1_1Value >= 0 && $scope.p2_1Value >= 0 && $scope.p3_1Value >= 0) {
            return parseInt($scope.p1_1Value) + parseInt($scope.p2_1Value) + parseInt($scope.p3_1Value);
        }
    };
    $scope.k43_2Value = function() {
        if($scope.p1_2Value >= 0 && $scope.p2_2Value >= 0 && $scope.p3_2Value >= 0) {
            return parseInt($scope.p1_2Value) + parseInt($scope.p2_2Value) + parseInt($scope.p3_2Value);
        }
    };
    $scope.k43_3Value = function() {
        if($scope.p1_3Value >= 0 && $scope.p2_3Value >= 0 && $scope.p3_3Value >= 0) {
            return parseInt($scope.p1_3Value) + parseInt($scope.p2_3Value) + parseInt($scope.p3_3Value);
        }
    };
    $scope.k43_4Value = function() {
        if($scope.p1_4Value >= 0 && $scope.p2_4Value >= 0 && $scope.p3_4Value >= 0) {
            return parseInt($scope.p1_4Value) + parseInt($scope.p2_4Value) + parseInt($scope.p3_4Value);
        }
    };
    $scope.k43_SumValue = function() {
        if($scope.k43_1Value() >= 0 && $scope.k43_2Value() >= 0 && $scope.k43_3Value() >= 0 && $scope.k43_4Value() >= 0) {
            var tmp = parseInt($scope.k43Lagerbestand()) - parseInt($scope.k43_1Value()) - parseInt($scope.k43_2Value()) - parseInt($scope.k43_3Value()) + parseInt(sharedProperties.getK43PlanLagerbestandValue()) + parseInt(sharedProperties.getK43_1PlanLagerbestandValue());
            $scope.k43BestellungValue = tmp * (-1);
            if ($scope.k43BestellungValue < 0) {
                $scope.k43BestellungValue = 0;
            }
            if ((parseInt($scope.k43Lagerbestand()) - parseInt($scope.k43_1Value()) + parseInt(sharedProperties.getK43PlanLagerbestandValue())) < 0 || (parseInt($scope.k43Lagerbestand()) - parseInt($scope.k43_1Value()) - parseInt($scope.k43_2Value()) + parseInt(sharedProperties.getK43PlanLagerbestandValue()) + parseInt(sharedProperties.getK43_1PlanLagerbestandValue())) < 0 || (parseInt($scope.k43Lagerbestand()) - parseInt($scope.k43_1Value()) - parseInt($scope.k43_2Value()) - parseInt($scope.k43_3Value()) + parseInt(sharedProperties.getK43PlanLagerbestandValue()) + parseInt(sharedProperties.getK43_1PlanLagerbestandValue()) + parseInt($scope.k43BestellungValue)) < 0 || (parseInt($scope.k43Lagerbestand()) - parseInt($scope.k43_1Value()) - parseInt($scope.k43_2Value()) + parseInt(sharedProperties.getK43PlanLagerbestandValue()) + parseInt(sharedProperties.getK43_1PlanLagerbestandValue()))/$scope.k43_3Value() < 0.5) {
                $scope.k43BestellungMode = 1;
            } else {
                $scope.k43BestellungMode = 0;
            }
            var div = parseInt(tmp) + parseInt($scope.k43BestellungValue);
            if ((div/$scope.k43_4Value()) < 0.5) {
                $scope.k43BestellungValue = parseInt($scope.k43BestellungValue) + parseInt($scope.k43_4Value());
            }
            if ($scope.k43BestellungValue < 2700 && $scope.k43BestellungValue > 2300) {
                $scope.k43BestellungValue = 2700;
            }
            sharedProperties.setK43BestellungValue($scope.k43BestellungValue);
            sharedProperties.setK43BestellungMode($scope.k43BestellungMode);
            return parseInt($scope.k43_1Value()) + parseInt($scope.k43_2Value()) + parseInt($scope.k43_3Value()) + parseInt($scope.k43_4Value());
        }
    };
    $scope.k44_1Value = function() {
        if($scope.p1_1Value >= 0 && $scope.p2_1Value >= 0 && $scope.p3_1Value >= 0) {
            return $scope.p1_1Value * 2 + $scope.p2_1Value * 2 + $scope.p3_1Value * 2;
        }
    };
    $scope.k44_2Value = function() {
        if($scope.p1_2Value >= 0 && $scope.p2_2Value >= 0 && $scope.p3_2Value >= 0) {
            return $scope.p1_2Value * 2 + $scope.p2_2Value * 2 + $scope.p3_2Value * 2;
        }
    };
    $scope.k44_3Value = function() {
        if($scope.p1_3Value >= 0 && $scope.p2_3Value >= 0 && $scope.p3_3Value >= 0) {
            return $scope.p1_3Value * 2 + $scope.p2_3Value * 2 + $scope.p3_3Value * 2;
        }
    };
    $scope.k44_4Value = function() {
        if($scope.p1_4Value >= 0 && $scope.p2_4Value >= 0 && $scope.p3_4Value >= 0) {
            return $scope.p1_4Value * 2 + $scope.p2_4Value * 2 + $scope.p3_4Value * 2;
        }
    };
    $scope.k44_SumValue = function() {
        if($scope.k44_1Value() >= 0 && $scope.k44_2Value() >= 0 && $scope.k44_3Value() >= 0 && $scope.k44_4Value() >= 0) {
            var tmp = parseInt($scope.k44Lagerbestand()) - parseInt($scope.k44_1Value()) - parseInt($scope.k44_2Value()) + parseInt(sharedProperties.getK44PlanLagerbestandValue());
            $scope.k44BestellungValue = tmp * (-1);
            if ($scope.k44BestellungValue < 0) {
                $scope.k44BestellungValue = 0;
            }
            if ((parseInt($scope.k44Lagerbestand()) - parseInt($scope.k44_1Value()) + parseInt(sharedProperties.getK44PlanLagerbestandValue())) < 0 || (parseInt($scope.k44Lagerbestand()) - parseInt($scope.k44_1Value()) - parseInt($scope.k44_2Value()) + parseInt(sharedProperties.getK44PlanLagerbestandValue()) + parseInt($scope.k44BestellungValue)) < 0 || (parseInt($scope.k44Lagerbestand()) - parseInt($scope.k44_1Value()) + parseInt(sharedProperties.getK44PlanLagerbestandValue()))/$scope.k44_2Value() < 0.5) {
                $scope.k44BestellungMode = 1;
            } else {
                $scope.k44BestellungMode = 0;
            }
            var div = parseInt(tmp) + parseInt($scope.k44BestellungValue);
            if ((div/$scope.k44_3Value()) < 0.5) {
                $scope.k44BestellungValue = parseInt($scope.k44BestellungValue) + parseInt($scope.k44_3Value());
            }
            if ($scope.k44BestellungValue < 900 && $scope.k44BestellungValue > 750) {
                $scope.k44BestellungValue = 900;
            }
            sharedProperties.setK44BestellungValue($scope.k44BestellungValue);
            sharedProperties.setK44BestellungMode($scope.k44BestellungMode);
            return parseInt($scope.k44_1Value()) + parseInt($scope.k44_2Value()) + parseInt($scope.k44_3Value()) + parseInt($scope.k44_4Value());
        }
    };
    $scope.k45_1Value = function() {
        if($scope.p1_1Value >= 0 && $scope.p2_1Value >= 0 && $scope.p3_1Value >= 0) {
            return parseInt($scope.p1_1Value) + parseInt($scope.p2_1Value) + parseInt($scope.p3_1Value);
        }
    };
    $scope.k45_2Value = function() {
        if($scope.p1_2Value >= 0 && $scope.p2_2Value >= 0 && $scope.p3_2Value >= 0) {
            return parseInt($scope.p1_2Value) + parseInt($scope.p2_2Value) + parseInt($scope.p3_2Value);
        }
    };
    $scope.k45_3Value = function() {
        if($scope.p1_3Value >= 0 && $scope.p2_3Value >= 0 && $scope.p3_3Value >= 0) {
            return parseInt($scope.p1_3Value) + parseInt($scope.p2_3Value) + parseInt($scope.p3_3Value);
        }
    };
    $scope.k45_4Value = function() {
        if($scope.p1_4Value >= 0 && $scope.p2_4Value >= 0 && $scope.p3_4Value >= 0) {
            return parseInt($scope.p1_4Value) + parseInt($scope.p2_4Value) + parseInt($scope.p3_4Value);
        }
    };
    $scope.k45_SumValue = function() {
        if($scope.k45_1Value() >= 0 && $scope.k45_2Value() >= 0 && $scope.k45_3Value() >= 0 && $scope.k45_4Value() >= 0) {
            var tmp = parseInt($scope.k45Lagerbestand()) - parseInt($scope.k45_1Value()) - parseInt($scope.k45_2Value()) - parseInt($scope.k45_3Value()) + parseInt(sharedProperties.getK45PlanLagerbestandValue()) + parseInt(sharedProperties.getK45_1PlanLagerbestandValue());
            $scope.k45BestellungValue = tmp * (-1);
            if ($scope.k45BestellungValue < 0) {
                $scope.k45BestellungValue = 0;
            }
            if ((parseInt($scope.k45Lagerbestand()) - parseInt($scope.k45_1Value()) + parseInt(sharedProperties.getK45PlanLagerbestandValue())) < 0 || (parseInt($scope.k45Lagerbestand()) - parseInt($scope.k45_1Value()) - parseInt($scope.k45_2Value()) + parseInt(sharedProperties.getK45PlanLagerbestandValue()) +  parseInt(sharedProperties.getK45_1PlanLagerbestandValue()) + parseInt($scope.k45BestellungValue)) < 0 || (parseInt($scope.k45Lagerbestand()) - parseInt($scope.k45_1Value()) - parseInt($scope.k45_2Value()) - parseInt($scope.k45_3Value()) + parseInt(sharedProperties.getK45PlanLagerbestandValue()) + parseInt(sharedProperties.getK45_1PlanLagerbestandValue()) + parseInt($scope.k45BestellungValue)) < 0) {
                $scope.k45BestellungMode = 1;
            } else {
                $scope.k45BestellungMode = 0;
            }
            var div = parseInt(tmp) + parseInt($scope.k45BestellungValue);
            if ((div/$scope.k45_4Value()) < 0.5) {
                $scope.k45BestellungValue = parseInt($scope.k45BestellungValue) + parseInt($scope.k45_4Value())/2;
            }
            if ($scope.k45BestellungValue < 900 && $scope.k45BestellungValue > 750) {
                $scope.k45BestellungValue = 900;
            }
            sharedProperties.setK45BestellungValue($scope.k45BestellungValue);
            sharedProperties.setK45BestellungMode($scope.k45BestellungMode);
            return parseInt($scope.k45_1Value()) + parseInt($scope.k45_2Value()) + parseInt($scope.k45_3Value()) + parseInt($scope.k45_4Value());
        }
    };
    $scope.k46_1Value = function() {
        if($scope.p1_1Value >= 0 && $scope.p2_1Value >= 0 && $scope.p3_1Value >= 0) {
            return parseInt($scope.p1_1Value) + parseInt($scope.p2_1Value) + parseInt($scope.p3_1Value);
        }
    };
    $scope.k46_2Value = function() {
        if($scope.p1_2Value >= 0 && $scope.p2_2Value >= 0 && $scope.p3_2Value >= 0) {
            return parseInt($scope.p1_2Value) + parseInt($scope.p2_2Value) + parseInt($scope.p3_2Value);
        }
    };
    $scope.k46_3Value = function() {
        if($scope.p1_3Value >= 0 && $scope.p2_3Value >= 0 && $scope.p3_3Value >= 0) {
            return parseInt($scope.p1_3Value) + parseInt($scope.p2_3Value) + parseInt($scope.p3_3Value);
        }
    };
    $scope.k46_4Value = function() {
        if($scope.p1_4Value >= 0 && $scope.p2_4Value >= 0 && $scope.p3_4Value >= 0) {
            return parseInt($scope.p1_4Value) + parseInt($scope.p2_4Value) + parseInt($scope.p3_4Value);
        }
    };
    $scope.k46_SumValue = function() {
        if($scope.k46_1Value() >= 0 && $scope.k46_2Value() >= 0 && $scope.k46_3Value() >= 0 && $scope.k46_4Value() >= 0) {
            var tmp = parseInt($scope.k46Lagerbestand()) - parseInt($scope.k46_1Value()) - parseInt($scope.k46_2Value()) + parseInt(sharedProperties.getK46PlanLagerbestandValue());
            $scope.k46BestellungValue = tmp * (-1);
            if ($scope.k46BestellungValue < 0) {
                $scope.k46BestellungValue = 0;
            }
            if ((parseInt($scope.k46Lagerbestand()) - parseInt($scope.k46_1Value()) + parseInt(sharedProperties.getK46PlanLagerbestandValue())) < 0 || (parseInt($scope.k46Lagerbestand()) - parseInt($scope.k46_1Value()) - parseInt($scope.k46_2Value()) + parseInt(sharedProperties.getK46PlanLagerbestandValue()) + parseInt($scope.k44BestellungValue)) < 0 || ((parseInt($scope.k46Lagerbestand()) - parseInt($scope.k46_1Value()) + parseInt(sharedProperties.getK46PlanLagerbestandValue())))/$scope.k46_2Value() < 0.5) {
                $scope.k46BestellungMode = 1;
            } else {
                $scope.k46BestellungMode = 0;
            }
            var div = parseInt(tmp) + parseInt($scope.k46BestellungValue);
            if ((div/$scope.k46_3Value()) < 0.5) {
                $scope.k46BestellungValue = parseInt($scope.k46BestellungValue) + parseInt($scope.k46_3Value());
            }
            if ($scope.k46BestellungValue < 900 && $scope.k46BestellungValue > 750) {
                $scope.k46BestellungValue = 900;
            }
            sharedProperties.setK46BestellungValue($scope.k46BestellungValue);
            sharedProperties.setK46BestellungMode($scope.k46BestellungMode);
            return parseInt($scope.k46_1Value()) + parseInt($scope.k46_2Value()) + parseInt($scope.k46_3Value()) + parseInt($scope.k46_4Value());
        }
    };
    $scope.k47_1Value = function() {
        if($scope.p1_1Value >= 0 && $scope.p2_1Value >= 0 && $scope.p3_1Value >= 0) {
            return parseInt($scope.p1_1Value) + parseInt($scope.p2_1Value) + parseInt($scope.p3_1Value);
        }
    };
    $scope.k47_2Value = function() {
        if($scope.p1_2Value >= 0 && $scope.p2_2Value >= 0 && $scope.p3_2Value >= 0) {
            return parseInt($scope.p1_2Value) + parseInt($scope.p2_2Value) + parseInt($scope.p3_2Value);
        }
    };
    $scope.k47_3Value = function() {
        if($scope.p1_3Value >= 0 && $scope.p2_3Value >= 0 && $scope.p3_3Value >= 0) {
            return parseInt($scope.p1_3Value) + parseInt($scope.p2_3Value) + parseInt($scope.p3_3Value);
        }
    };
    $scope.k47_4Value = function() {
        if($scope.p1_4Value >= 0 && $scope.p2_4Value >= 0 && $scope.p3_4Value >= 0) {
            return parseInt($scope.p1_4Value) + parseInt($scope.p2_4Value) + parseInt($scope.p3_4Value);
        }
    };
    $scope.k47_SumValue = function() {
        if($scope.k47_1Value() >= 0 && $scope.k47_2Value() >= 0 && $scope.k47_3Value() >= 0 && $scope.k47_4Value() >= 0) {
            var tmp = parseInt($scope.k47Lagerbestand()) - parseInt($scope.k47_1Value()) - parseInt($scope.k47_2Value()) + parseInt(sharedProperties.getK47PlanLagerbestandValue());
            $scope.k47BestellungValue = tmp * (-1);
            if ($scope.k47BestellungValue < 0) {
                $scope.k47BestellungValue = 0;
            }
            if ((parseInt($scope.k47Lagerbestand()) - parseInt($scope.k47_1Value()) + parseInt(sharedProperties.getK47PlanLagerbestandValue())) < 0 || (parseInt($scope.k47Lagerbestand()) - parseInt($scope.k47_1Value()) - parseInt($scope.k47_2Value()) + parseInt(sharedProperties.getK47PlanLagerbestandValue()) + parseInt($scope.k47BestellungValue)) < 0 || (parseInt($scope.k47Lagerbestand()) - parseInt($scope.k47_1Value()) + parseInt(sharedProperties.getK47PlanLagerbestandValue()))/$scope.k47_2Value() < 0.5) {
                $scope.k47BestellungMode = 1;
            } else {
                $scope.k47BestellungMode = 0;
            }
            var div = parseInt(tmp) + parseInt($scope.k47BestellungValue);
            if ((div/$scope.k47_3Value()) < 0.5) {
                $scope.k47BestellungValue = parseInt($scope.k47BestellungValue) + parseInt($scope.k47_3Value());
            }
            if ($scope.k47BestellungValue < 900 && $scope.k47BestellungValue > 750) {
                $scope.k47BestellungValue = 900;
            }
            sharedProperties.setK47BestellungValue($scope.k47BestellungValue);
            sharedProperties.setK47BestellungMode($scope.k47BestellungMode);
            return parseInt($scope.k47_1Value()) + parseInt($scope.k47_2Value()) + parseInt($scope.k47_3Value()) + parseInt($scope.k47_4Value());
        }
    };
    $scope.k48_1Value = function() {
        if($scope.p1_1Value >= 0 && $scope.p2_1Value >= 0 && $scope.p3_1Value >= 0) {
            return $scope.p1_1Value * 2 + $scope.p2_1Value * 2 + $scope.p3_1Value * 2;
        }
    };
    $scope.k48_2Value = function() {
        if($scope.p1_2Value >= 0 && $scope.p2_2Value >= 0 && $scope.p3_2Value >= 0) {
            return $scope.p1_2Value * 2 + $scope.p2_2Value * 2 + $scope.p3_2Value * 2;
        }
    };
    $scope.k48_3Value = function() {
        if($scope.p1_3Value >= 0 && $scope.p2_3Value >= 0 && $scope.p3_3Value >= 0) {
            return $scope.p1_3Value * 2 + $scope.p2_3Value * 2 + $scope.p3_3Value * 2;
        }
    };
    $scope.k48_4Value = function() {
        if($scope.p1_4Value >= 0 && $scope.p2_4Value >= 0 && $scope.p3_4Value >= 0) {
            return $scope.p1_4Value * 2 + $scope.p2_4Value * 2 + $scope.p3_4Value * 2;
        }
    };
    $scope.k48_SumValue = function() {
        if($scope.k48_1Value() >= 0 && $scope.k48_2Value() >= 0 && $scope.k48_3Value() >= 0 && $scope.k48_4Value() >= 0) {
            var tmp = parseInt($scope.k48Lagerbestand()) - parseInt($scope.k48_1Value()) - parseInt($scope.k48_2Value()) + parseInt(sharedProperties.getK48PlanLagerbestandValue());
            $scope.k48BestellungValue = tmp * (-1);
            if ($scope.k48BestellungValue < 0) {
                $scope.k48BestellungValue = 0;
            }
            if ((parseInt($scope.k48Lagerbestand()) - parseInt($scope.k48_1Value()) + parseInt(sharedProperties.getK48PlanLagerbestandValue())) < 0 || (parseInt($scope.k48Lagerbestand()) - parseInt($scope.k48_1Value()) - parseInt($scope.k48_2Value()) + parseInt(sharedProperties.getK48PlanLagerbestandValue()) + parseInt($scope.k48BestellungValue)) < 0 || (parseInt($scope.k48Lagerbestand()) - parseInt($scope.k48_1Value()) + parseInt(sharedProperties.getK48PlanLagerbestandValue()))/$scope.k48_2Value() < 0.5) {
                $scope.k48BestellungMode = 1;
            } else {
                $scope.k48BestellungMode = 0;
            }
            var div = parseInt(tmp) + parseInt($scope.k48BestellungValue);
            if ((div/$scope.k48_3Value()) < 0.5) {
                $scope.k48BestellungValue = parseInt($scope.k48BestellungValue) + parseInt($scope.k48_3Value());
            }
            if ($scope.k48BestellungValue < 1800 && $scope.k48BestellungValue > 1450) {
                $scope.k48BestellungValue = 1800;
            }
            sharedProperties.setK48BestellungValue($scope.k48BestellungValue);
            sharedProperties.setK48BestellungMode($scope.k48BestellungMode);
            return parseInt($scope.k48_1Value()) + parseInt($scope.k48_2Value()) + parseInt($scope.k48_3Value()) + parseInt($scope.k48_4Value());
        }
    };
    $scope.k52_1Value = function() {
        if($scope.p1_1Value >= 0) {
            return $scope.p1_1Value * 2;
        }
    };
    $scope.k52_2Value = function() {
        if($scope.p1_2Value >= 0) {
            return $scope.p1_2Value * 2;
        }
    };
    $scope.k52_3Value = function() {
        if($scope.p1_3Value >= 0) {
            return $scope.p1_3Value * 2;
        }
    };
    $scope.k52_4Value = function() {
        if($scope.p1_4Value >= 0) {
            return $scope.p1_4Value * 2;
        }
    };
    $scope.k52_SumValue = function() {
        if($scope.k52_1Value() >= 0 && $scope.k52_2Value() >= 0 && $scope.k52_3Value() >= 0 && $scope.k52_4Value() >= 0) {
            var tmp = parseInt($scope.k52Lagerbestand()) - parseInt($scope.k52_1Value()) - parseInt($scope.k52_2Value()) - parseInt($scope.k52_3Value()) + parseInt(sharedProperties.getK52PlanLagerbestandValue()) + parseInt(sharedProperties.getK52_1PlanLagerbestandValue());
            $scope.k52BestellungValue = tmp * (-1);
            if ($scope.k52BestellungValue < 0) {
                $scope.k52BestellungValue = 0;
            }
            if ((parseInt($scope.k52Lagerbestand()) - parseInt($scope.k52_1Value()) + parseInt(sharedProperties.getK52PlanLagerbestandValue())) < 0 || (parseInt($scope.k52Lagerbestand()) - parseInt($scope.k52_1Value()) - parseInt($scope.k52_2Value()) + parseInt(sharedProperties.getK52PlanLagerbestandValue()) +  parseInt(sharedProperties.getK52_1PlanLagerbestandValue()) + parseInt($scope.k52BestellungValue)) < 0) {
                $scope.k52BestellungMode = 1;
            } else {
                $scope.k52BestellungMode = 0;
            }
            var div = parseInt(tmp) + parseInt($scope.k52BestellungValue);
            if ((div/$scope.k52_4Value()) < 0.5) {
                $scope.k52BestellungValue = parseInt($scope.k52BestellungValue) + parseInt($scope.k52_4Value())/2;
            }
            if ($scope.k52BestellungValue < 600 && $scope.k52BestellungValue > 450) {
                $scope.k52BestellungValue = 600;
            }
            sharedProperties.setK52BestellungValue($scope.k52BestellungValue);
            sharedProperties.setK52BestellungMode($scope.k52BestellungMode);
            return parseInt($scope.k52_1Value()) + parseInt($scope.k52_2Value()) + parseInt($scope.k52_3Value()) + parseInt($scope.k52_4Value());
        }
    };
    $scope.k53_1Value = function() {
        if($scope.p1_1Value >= 0) {
            return $scope.p1_1Value * 72;
        }
    };
    $scope.k53_2Value = function() {
        if($scope.p1_2Value >= 0) {
            return $scope.p1_2Value * 72;
        }
    };
    $scope.k53_3Value = function() {
        if($scope.p1_3Value >= 0) {
            return $scope.p1_3Value * 72;
        }
    };
    $scope.k53_4Value = function() {
        if($scope.p1_4Value >= 0) {
            return $scope.p1_4Value * 72;
        }
    };
    $scope.k53_SumValue = function() {
        if($scope.k53_1Value() >= 0 && $scope.k53_2Value() >= 0 && $scope.k53_3Value() >= 0 && $scope.k53_4Value() >= 0) {
            var tmp = parseInt($scope.k53Lagerbestand()) - parseInt($scope.k53_1Value()) - parseInt($scope.k53_2Value()) - parseInt($scope.k53_3Value()) + parseInt(sharedProperties.getK53PlanLagerbestandValue());
            $scope.k53BestellungValue = tmp * (-1);
            if ($scope.k53BestellungValue < 0) {
                $scope.k53BestellungValue = 0;
            }
            if ((parseInt($scope.k53Lagerbestand()) - parseInt($scope.k53_1Value()) + parseInt(sharedProperties.getK53PlanLagerbestandValue())) < 0 || (parseInt($scope.k53Lagerbestand()) - parseInt($scope.k53_1Value()) - parseInt($scope.k53_2Value()) + parseInt(sharedProperties.getK53PlanLagerbestandValue()) + parseInt($scope.k53BestellungValue)) < 0) {
                $scope.k53BestellungMode = 1;
            } else {
                $scope.k53BestellungMode = 0;
            }
            if ($scope.k53BestellungValue < 22000 && $scope.k53BestellungValue > 17500) {
                $scope.k53BestellungValue = 22000;
            }
            sharedProperties.setK53BestellungValue($scope.k53BestellungValue);
            sharedProperties.setK53BestellungMode($scope.k53BestellungMode);
            return parseInt($scope.k53_1Value()) + parseInt($scope.k53_2Value()) + parseInt($scope.k53_3Value()) + parseInt($scope.k53_4Value());
        }
    };
    $scope.k57_1Value = function() {
        if($scope.p2_1Value >= 0) {
            return $scope.p2_1Value * 2;
        }
    };
    $scope.k57_2Value = function() {
        if($scope.p2_2Value >= 0) {
            return $scope.p2_2Value * 2;
        }
    };
    $scope.k57_3Value = function() {
        if($scope.p2_3Value >= 0) {
            return $scope.p2_3Value * 2;
        }
    };
    $scope.k57_4Value = function() {
        if($scope.p2_4Value >= 0) {
            return $scope.p2_4Value * 2;
        }
    };
    $scope.k57_SumValue = function() {
        if($scope.k57_1Value() >= 0 && $scope.k57_2Value() >= 0 && $scope.k57_3Value() >= 0 && $scope.k57_4Value() >= 0) {
            var tmp = parseInt($scope.k57Lagerbestand()) - parseInt($scope.k57_1Value()) - parseInt($scope.k57_2Value()) - parseInt($scope.k57_3Value()) + parseInt(sharedProperties.getK57PlanLagerbestandValue()) + parseInt(sharedProperties.getK57_1PlanLagerbestandValue());
            $scope.k57BestellungValue = tmp * (-1);
            if ($scope.k57BestellungValue < 0) {
                $scope.k57BestellungValue = 0;
            }
            if ((parseInt($scope.k57Lagerbestand()) - parseInt($scope.k57_1Value()) + parseInt(sharedProperties.getK57PlanLagerbestandValue())) < 0 || (parseInt($scope.k57Lagerbestand()) - parseInt($scope.k57_1Value()) - parseInt($scope.k57_2Value()) + parseInt(sharedProperties.getK57PlanLagerbestandValue()) +  parseInt(sharedProperties.getK57_1PlanLagerbestandValue()) + parseInt($scope.k57BestellungValue)) < 0) {
                $scope.k57BestellungMode = 1;
            } else {
                $scope.k57BestellungMode = 0;
            }
            var div = parseInt(tmp) + parseInt($scope.k57BestellungValue);
            if ((div/$scope.k57_4Value()) < 0.5) {
                $scope.k57BestellungValue = parseInt($scope.k57BestellungValue) + parseInt($scope.k57_4Value())/2;
            }
            if ($scope.k57BestellungValue < 600 && $scope.k57BestellungValue > 450) {
                $scope.k57BestellungValue = 600;
            }
            sharedProperties.setK57BestellungValue($scope.k57BestellungValue);
            sharedProperties.setK57BestellungMode($scope.k57BestellungMode);
            return parseInt($scope.k57_1Value()) + parseInt($scope.k57_2Value()) + parseInt($scope.k57_3Value()) + parseInt($scope.k57_4Value());
        }
    };
    $scope.k58_1Value = function() {
        if($scope.p2_1Value >= 0) {
            return $scope.p2_1Value * 72;
        }
    };
    $scope.k58_2Value = function() {
        if($scope.p2_2Value >= 0) {
            return $scope.p2_2Value * 72;
        }
    };
    $scope.k58_3Value = function() {
        if($scope.p2_3Value >= 0) {
            return $scope.p2_3Value * 72;
        }
    };
    $scope.k58_4Value = function() {
        if($scope.p2_4Value >= 0) {
            return $scope.p2_4Value * 72;
        }
    };
    $scope.k58_SumValue = function() {
        if($scope.k58_1Value() >= 0 && $scope.k58_2Value() >= 0 && $scope.k58_3Value() >= 0 && $scope.k58_4Value() >= 0) {
            var tmp = parseInt($scope.k58Lagerbestand()) - parseInt($scope.k58_1Value()) - parseInt($scope.k58_2Value()) - parseInt($scope.k58_3Value()) + parseInt(sharedProperties.getK58PlanLagerbestandValue()) + parseInt(sharedProperties.getK58_1PlanLagerbestandValue());
            $scope.k58BestellungValue = tmp * (-1);
            if ($scope.k58BestellungValue < 0) {
                $scope.k58BestellungValue = 0;
            }
            if ((parseInt($scope.k58Lagerbestand()) - parseInt($scope.k58_1Value()) + parseInt(sharedProperties.getK58PlanLagerbestandValue())) < 0 || (parseInt($scope.k58Lagerbestand()) - parseInt($scope.k58_1Value()) - parseInt($scope.k58_2Value()) + parseInt(sharedProperties.getK58PlanLagerbestandValue()) +  parseInt(sharedProperties.getK58_1PlanLagerbestandValue()) + parseInt($scope.k58BestellungValue)) < 0 || (parseInt($scope.k58Lagerbestand()) - parseInt($scope.k58_1Value()) - parseInt($scope.k58_2Value()) - parseInt($scope.k58_3Value()) + parseInt(sharedProperties.getK58PlanLagerbestandValue()) + parseInt(sharedProperties.getK58_1PlanLagerbestandValue()) + parseInt($scope.k58BestellungValue)) < 0) {
                $scope.k58BestellungMode = 1;
            } else {
                $scope.k58BestellungMode = 0;
            }
            var div = parseInt(tmp) + parseInt($scope.k58BestellungValue);
            if ((div/$scope.k58_4Value()) < 0.5) {
                $scope.k58BestellungValue = parseInt($scope.k58BestellungValue) + parseInt($scope.k58_4Value())/2;
            }
            if ($scope.k58BestellungValue < 600 && $scope.k58BestellungValue > 450) {
                $scope.k58BestellungValue = 600;
            }
            sharedProperties.setK58BestellungValue($scope.k58BestellungValue);
            sharedProperties.setK58BestellungMode($scope.k58BestellungMode);
            return parseInt($scope.k58_1Value()) + parseInt($scope.k58_2Value()) + parseInt($scope.k58_3Value()) + parseInt($scope.k58_4Value());
        }
    };
    $scope.k59_1Value = function() {
        if($scope.p1_1Value >= 0 && $scope.p2_1Value >= 0 && $scope.p3_1Value >= 0) {
            return $scope.p1_1Value * 2 + $scope.p2_1Value * 2 + $scope.p3_1Value * 2;
        }
    };
    $scope.k59_2Value = function() {
        if($scope.p1_2Value >= 0 && $scope.p2_2Value >= 0 && $scope.p3_2Value >= 0) {
            return $scope.p1_2Value * 2 + $scope.p2_2Value * 2 + $scope.p3_2Value * 2;
        }
    };
    $scope.k59_3Value = function() {
        if($scope.p1_3Value >= 0 && $scope.p2_3Value >= 0 && $scope.p3_3Value >= 0) {
            return $scope.p1_3Value * 2 + $scope.p2_3Value * 2 + $scope.p3_3Value * 2;
        }
    };
    $scope.k59_4Value = function() {
        if($scope.p1_4Value >= 0 && $scope.p2_4Value >= 0 && $scope.p3_4Value >= 0) {
            return $scope.p1_4Value * 2 + $scope.p2_4Value * 2 + $scope.p3_4Value * 2;
        }
    };
    $scope.k59_SumValue = function() {
        if($scope.k59_1Value() >= 0 && $scope.k59_2Value() >= 0 && $scope.k59_3Value() >= 0 && $scope.k59_4Value() >= 0) {
            var tmp = parseInt($scope.k59Lagerbestand()) - parseInt($scope.k59_1Value()) - parseInt($scope.k59_2Value()) - parseInt($scope.k59_3Value()) + parseInt(sharedProperties.getK59PlanLagerbestandValue());
            $scope.k59BestellungValue = tmp * (-1);
            if ($scope.k59BestellungValue < 0) {
                $scope.k59BestellungValue = 0;
            }
            if ((parseInt($scope.k59Lagerbestand()) - parseInt($scope.k59_1Value()) + parseInt(sharedProperties.getK59PlanLagerbestandValue()) + parseInt($scope.k59BestellungValue)) < 0) {
                $scope.k59BestellungMode = 1;
            } else {
                $scope.k59BestellungMode = 0;
            }
            if ($scope.k59BestellungValue < 1800 && $scope.k59BestellungValue > 1450) {
                $scope.k59BestellungValue = 1800;
            }
            sharedProperties.setK59BestellungValue($scope.k59BestellungValue);
            sharedProperties.setK59BestellungMode($scope.k59BestellungMode);
            return parseInt($scope.k59_1Value()) + parseInt($scope.k59_2Value()) + parseInt($scope.k59_3Value()) + parseInt($scope.k59_4Value());
        }
    };
    $scope.k21_Plan2Value = function() {
        var tmp = 0;
        if($scope.k21_1Value() >= 0) {
            tmp = parseInt($scope.k21Lagerbestand()) - parseInt($scope.k21_1Value()) + parseInt(sharedProperties.getK21PlanLagerbestandValue());
        }
        if ($scope.k21BestellungMode == 1) {
            tmp = tmp + $scope.k21BestellungValue;
        }
        return tmp;
    };
    $scope.k21_Plan3Value = function() {
        var tmp = 0;
        if($scope.k21_1Value() >= 0 && $scope.k21_2Value() >= 0) {
            tmp = parseInt($scope.k21Lagerbestand()) - parseInt($scope.k21_1Value()) - parseInt($scope.k21_2Value()) + parseInt(sharedProperties.getK21PlanLagerbestandValue()) + parseInt(sharedProperties.getK21_1PlanLagerbestandValue());
        }
        if ($scope.k21BestellungMode == 1) {
            tmp = tmp + $scope.k21BestellungValue;
        }
        return tmp;
    };
    $scope.k21_Plan4Value = function() {
        if($scope.k21_1Value() >= 0 && $scope.k21_2Value() >= 0 && $scope.k21_3Value() >= 0) {
            return parseInt($scope.k21Lagerbestand()) - parseInt($scope.k21_1Value()) - parseInt($scope.k21_2Value()) - parseInt($scope.k21_3Value()) + parseInt(sharedProperties.getK21PlanLagerbestandValue()) + parseInt(sharedProperties.getK21_1PlanLagerbestandValue()) + parseInt($scope.k21BestellungValue);
        }
    };
    $scope.k21_Plan5Value = function() {
        if($scope.k21_1Value() >= 0 && $scope.k21_2Value() >= 0 && $scope.k21_3Value() >= 0 && $scope.k21_4Value() >= 0) {
            return parseInt($scope.k21Lagerbestand()) - parseInt($scope.k21_1Value()) - parseInt($scope.k21_2Value()) - parseInt($scope.k21_3Value()) - parseInt($scope.k21_4Value()) + parseInt(sharedProperties.getK21PlanLagerbestandValue()) + parseInt(sharedProperties.getK21_1PlanLagerbestandValue()) + parseInt($scope.k21BestellungValue);
        }
    };
    $scope.k22_Plan2Value = function() {
        var tmp = 0;
        if($scope.k22_1Value() >= 0) {
            tmp = parseInt($scope.k22Lagerbestand()) - parseInt($scope.k22_1Value()) + parseInt(sharedProperties.getK22PlanLagerbestandValue());
        }
        if ($scope.k22BestellungMode == 1) {
            tmp = tmp + $scope.k22BestellungValue;
        }
        return tmp;
    };
    $scope.k22_Plan3Value = function() {
        var tmp = 0;
        if($scope.k22_1Value() >= 0 && $scope.k22_2Value() >= 0) {
            tmp = parseInt($scope.k22Lagerbestand()) - parseInt($scope.k22_1Value()) - parseInt($scope.k22_2Value()) + parseInt(sharedProperties.getK22PlanLagerbestandValue()) + parseInt(sharedProperties.getK22_1PlanLagerbestandValue());
        }
        if ($scope.k22BestellungMode == 1) {
            tmp = tmp + $scope.k22BestellungValue;
        }
        return tmp;
    };
    $scope.k22_Plan4Value = function() {
        if($scope.k22_1Value() >= 0 && $scope.k22_2Value() >= 0 && $scope.k22_3Value() >= 0) {
            return parseInt($scope.k22Lagerbestand()) - parseInt($scope.k22_1Value()) - parseInt($scope.k22_2Value()) - parseInt($scope.k22_3Value()) + parseInt(sharedProperties.getK22PlanLagerbestandValue()) + parseInt(sharedProperties.getK22_1PlanLagerbestandValue()) + parseInt($scope.k22BestellungValue);
        }
    };
    $scope.k22_Plan5Value = function() {
        if($scope.k22_1Value() >= 0 && $scope.k22_2Value() >= 0 && $scope.k22_3Value() >= 0 && $scope.k22_4Value() >= 0) {
            return parseInt($scope.k22Lagerbestand()) - parseInt($scope.k22_1Value()) - parseInt($scope.k22_2Value()) - parseInt($scope.k22_3Value()) - parseInt($scope.k22_4Value()) + parseInt(sharedProperties.getK22PlanLagerbestandValue()) + parseInt(sharedProperties.getK22_1PlanLagerbestandValue()) + parseInt($scope.k22BestellungValue);
        }
    };
    $scope.k23_Plan2Value = function() {
        if($scope.k23_1Value() >= 0) {
            return parseInt($scope.k23Lagerbestand()) - parseInt($scope.k23_1Value()) + parseInt(sharedProperties.getK23PlanLagerbestandValue());
        }
    };
    $scope.k23_Plan3Value = function() {
        if($scope.k23_1Value() >= 0 && $scope.k23_2Value() >= 0) {
            return parseInt($scope.k23Lagerbestand()) - parseInt($scope.k23_1Value()) - parseInt($scope.k23_2Value()) + parseInt(sharedProperties.getK23PlanLagerbestandValue()) + parseInt($scope.k23BestellungValue);
        }
    };
    $scope.k23_Plan4Value = function() {
        if($scope.k23_1Value() >= 0 && $scope.k23_2Value() >= 0 && $scope.k23_3Value() >= 0) {
            return parseInt($scope.k23Lagerbestand()) - parseInt($scope.k23_1Value()) - parseInt($scope.k23_2Value()) - parseInt($scope.k23_3Value()) + parseInt(sharedProperties.getK23PlanLagerbestandValue()) + parseInt($scope.k23BestellungValue);
        }
    };
    $scope.k23_Plan5Value = function() {
        if($scope.k23_1Value() >= 0 && $scope.k23_2Value() >= 0 && $scope.k23_3Value() >= 0) {
            return parseInt($scope.k23Lagerbestand()) - parseInt($scope.k23_1Value()) - parseInt($scope.k23_2Value()) - parseInt($scope.k23_3Value()) - parseInt($scope.k23_4Value()) + parseInt(sharedProperties.getK23PlanLagerbestandValue()) + parseInt($scope.k23BestellungValue);
        }
    };
    $scope.k23_Plan2Value = function() {
        var tmp = 0;
        if($scope.k23_1Value() >= 0) {
            tmp = parseInt($scope.k23Lagerbestand()) - parseInt($scope.k23_1Value()) + parseInt(sharedProperties.getK23PlanLagerbestandValue());
        }
        if ($scope.k23BestellungMode == 1) {
            tmp = tmp + $scope.k23BestellungValue;
        }
        return tmp;
    };
    $scope.k23_Plan3Value = function() {
        if($scope.k23_1Value() >= 0 && $scope.k23_2Value() >= 0) {
            return parseInt($scope.k23Lagerbestand()) - parseInt($scope.k23_1Value()) - parseInt($scope.k23_2Value()) + parseInt(sharedProperties.getK23PlanLagerbestandValue()) + parseInt($scope.k23BestellungValue);
        }
    };
    $scope.k23_Plan4Value = function() {
        if($scope.k23_1Value() >= 0 && $scope.k23_2Value() >= 0 && $scope.k23_3Value() >= 0) {
            return parseInt($scope.k23Lagerbestand()) - parseInt($scope.k23_1Value()) - parseInt($scope.k23_2Value()) - parseInt($scope.k23_3Value()) + parseInt(sharedProperties.getK23PlanLagerbestandValue()) + parseInt($scope.k23BestellungValue);
        }
    };
    $scope.k23_Plan5Value = function() {
        if($scope.k23_1Value() >= 0 && $scope.k23_2Value() >= 0 && $scope.k23_3Value() >= 0 && $scope.k23_4Value() >= 0) {
            return parseInt($scope.k23Lagerbestand()) - parseInt($scope.k23_1Value()) - parseInt($scope.k23_2Value()) - parseInt($scope.k23_3Value()) - parseInt($scope.k23_4Value()) + parseInt(sharedProperties.getK23PlanLagerbestandValue()) + parseInt($scope.k23BestellungValue);
        }
    };
    $scope.k24_Plan2Value = function() {
        if($scope.k24_1Value() >= 0) {
            return parseInt($scope.k24Lagerbestand()) - parseInt($scope.k24_1Value()) + parseInt(sharedProperties.getK24PlanLagerbestandValue());
        }
    };
    $scope.k24_Plan3Value = function() {
        var tmp = 0;
        if($scope.k24_1Value() >= 0 && $scope.k24_2Value() >= 0) {
            tmp = parseInt($scope.k24Lagerbestand()) - parseInt($scope.k24_1Value()) - parseInt($scope.k24_2Value()) + parseInt(sharedProperties.getK24PlanLagerbestandValue()) + parseInt(sharedProperties.getK24_1PlanLagerbestandValue());
        }
        if($scope.k24BestellungMode == 0) {
            tmp = tmp + $scope.k24BestellungValue;
        }
        return tmp;
    };
    $scope.k24_Plan4Value = function() {
        var tmp = 0;
        if($scope.k24_1Value() >= 0 && $scope.k24_2Value() >= 0 && $scope.k24_3Value() >= 0) {
            tmp = parseInt($scope.k24Lagerbestand()) - parseInt($scope.k24_1Value()) - parseInt($scope.k24_2Value()) - parseInt($scope.k24_3Value()) + parseInt(sharedProperties.getK24PlanLagerbestandValue()) + parseInt(sharedProperties.getK24_1PlanLagerbestandValue()) + parseInt(sharedProperties.getK24_2PlanLagerbestandValue());
        }
        if($scope.k24BestellungMode == 0) {
            tmp = tmp + $scope.k24BestellungValue;
        }
        return tmp;
    };
    $scope.k24_Plan5Value = function() {
        if($scope.k24_1Value() >= 0 && $scope.k24_2Value() >= 0 && $scope.k24_3Value() >= 0 && $scope.k24_4Value() >= 0) {
            return parseInt($scope.k24Lagerbestand()) - parseInt($scope.k24_1Value()) - parseInt($scope.k24_2Value()) - parseInt($scope.k24_3Value()) - parseInt($scope.k24_4Value()) + parseInt(sharedProperties.getK24PlanLagerbestandValue()) + parseInt(sharedProperties.getK24_1PlanLagerbestandValue()) + parseInt(sharedProperties.getK24_2PlanLagerbestandValue()) + parseInt($scope.k24BestellungValue);
        }
    };
    $scope.k25_Plan2Value = function() {
        var tmp = 0;
        if($scope.k25_1Value() >= 0) {
            tmp = parseInt($scope.k25Lagerbestand()) - parseInt($scope.k25_1Value()) + parseInt(sharedProperties.getK25PlanLagerbestandValue());
        }
        if ($scope.k25BestellungMode == 1) {
            tmp = tmp + $scope.k25BestellungValue;
        }
        return tmp;
    };
    $scope.k25_Plan3Value = function() {
        if($scope.k25_1Value() >= 0 && $scope.k25_2Value() >= 0) {
            return parseInt($scope.k25Lagerbestand()) - parseInt($scope.k25_1Value()) - parseInt($scope.k25_2Value()) + parseInt(sharedProperties.getK25PlanLagerbestandValue()) + parseInt($scope.k25BestellungValue);
        }
    };
    $scope.k25_Plan4Value = function() {
        if($scope.k25_1Value() >= 0 && $scope.k25_2Value() >= 0 && $scope.k25_3Value() >= 0) {
            return parseInt($scope.k25Lagerbestand()) - parseInt($scope.k25_1Value()) - parseInt($scope.k25_2Value()) - parseInt($scope.k25_3Value()) + parseInt(sharedProperties.getK25PlanLagerbestandValue()) + parseInt($scope.k25BestellungValue);
        }
    };
    $scope.k25_Plan5Value = function() {
        if($scope.k25_1Value() >= 0 && $scope.k25_2Value() >= 0 && $scope.k25_3Value() >= 0) {
            return parseInt($scope.k25Lagerbestand()) - parseInt($scope.k25_1Value()) - parseInt($scope.k25_2Value()) - parseInt($scope.k25_3Value()) - parseInt($scope.k25_4Value()) + parseInt(sharedProperties.getK25PlanLagerbestandValue()) + parseInt($scope.k25BestellungValue);
        }
    };
    $scope.k27_Plan2Value = function() {
        var tmp = 0;
        if($scope.k27_1Value() >= 0) {
            tmp = parseInt($scope.k27Lagerbestand()) - parseInt($scope.k27_1Value()) + parseInt(sharedProperties.getK27PlanLagerbestandValue());
        }
        if($scope.k27BestellungMode == 1) {
            tmp = tmp + $scope.k27BestellungValue;
        }
        return tmp;
    };
    $scope.k27_Plan3Value = function() {
        if($scope.k27_1Value() >= 0 && $scope.k27_2Value() >= 0) {
            return parseInt($scope.k27Lagerbestand()) - parseInt($scope.k27_1Value()) - parseInt($scope.k27_2Value()) + parseInt(sharedProperties.getK27PlanLagerbestandValue()) + parseInt($scope.k27BestellungValue);
        }
    };
    $scope.k27_Plan4Value = function() {
        if($scope.k27_1Value() >= 0 && $scope.k27_2Value() >= 0 && $scope.k27_3Value() >= 0) {
            return parseInt($scope.k27Lagerbestand()) - parseInt($scope.k27_1Value()) - parseInt($scope.k27_2Value()) - parseInt($scope.k27_3Value()) + parseInt(sharedProperties.getK27PlanLagerbestandValue()) + parseInt($scope.k27BestellungValue);
        }
    };
    $scope.k27_Plan5Value = function() {
        if($scope.k27_1Value() >= 0 && $scope.k27_2Value() >= 0 && $scope.k25_3Value() >= 0 && $scope.k27_4Value() >= 0) {
            return parseInt($scope.k27Lagerbestand()) - parseInt($scope.k27_1Value()) - parseInt($scope.k27_2Value()) - parseInt($scope.k27_3Value()) - parseInt($scope.k27_4Value()) + parseInt(sharedProperties.getK27PlanLagerbestandValue()) + parseInt($scope.k27BestellungValue);
        }
    };
    $scope.k28_Plan2Value = function() {
        var tmp = 0;
        if($scope.k28_1Value() >= 0) {
            tmp = parseInt($scope.k28Lagerbestand()) - parseInt($scope.k28_1Value()) + parseInt(sharedProperties.getK28PlanLagerbestandValue());
        }
        if($scope.k28BestellungMode == 1) {
            tmp = tmp + $scope.k28BestellungValue;
        }
        return tmp;
    };
    $scope.k28_Plan3Value = function() {
        var tmp = 0;
        if($scope.k28_1Value() >= 0 && $scope.k28_2Value() >= 0) {
            tmp = parseInt($scope.k28Lagerbestand()) - parseInt($scope.k28_1Value()) - parseInt($scope.k28_2Value()) + parseInt(sharedProperties.getK28PlanLagerbestandValue()) + parseInt(sharedProperties.getK28_1PlanLagerbestandValue());
        }
        if($scope.k28BestellungMode == 1) {
            tmp = tmp + $scope.k28BestellungValue;
        }
        return tmp;
    };
    $scope.k28_Plan4Value = function() {
        if($scope.k28_1Value() >= 0 && $scope.k28_2Value() >= 0 && $scope.k28_3Value() >= 0) {
            return parseInt($scope.k28Lagerbestand()) - parseInt($scope.k28_1Value()) - parseInt($scope.k28_2Value()) - parseInt($scope.k28_3Value()) + parseInt(sharedProperties.getK28PlanLagerbestandValue()) + parseInt(sharedProperties.getK28_1PlanLagerbestandValue()) + parseInt($scope.k28BestellungValue);
        }
    };
    $scope.k28_Plan5Value = function() {
        if($scope.k28_1Value() >= 0 && $scope.k28_2Value() >= 0 && $scope.k28_3Value() >= 0 && $scope.k28_4Value() >= 0) {
            return parseInt($scope.k28Lagerbestand()) - parseInt($scope.k28_1Value()) - parseInt($scope.k28_2Value()) - parseInt($scope.k28_3Value()) - parseInt($scope.k28_4Value()) + parseInt(sharedProperties.getK28PlanLagerbestandValue()) + parseInt(sharedProperties.getK28_1PlanLagerbestandValue()) + parseInt($scope.k28BestellungValue);
        }
    };
    $scope.k32_Plan2Value = function() {
        if($scope.k32_1Value() >= 0) {
            return parseInt($scope.k32Lagerbestand()) - parseInt($scope.k32_1Value()) + parseInt(sharedProperties.getK32PlanLagerbestandValue());
        }
    };
    $scope.k32_Plan3Value = function() {
        var tmp = 0;
        if($scope.k32_1Value() >= 0 && $scope.k32_2Value() >= 0) {
            tmp = parseInt($scope.k32Lagerbestand()) - parseInt($scope.k32_1Value()) - parseInt($scope.k32_2Value()) + parseInt(sharedProperties.getK32PlanLagerbestandValue()) + parseInt(sharedProperties.getK32_1PlanLagerbestandValue());
        }
        if($scope.k32BestellungMode == 1) {
            tmp = tmp + $scope.k32BestellungValue;
        }
        return tmp;
    };
    $scope.k32_Plan4Value = function() {
        if($scope.k32_1Value() >= 0 && $scope.k32_2Value() >= 0 && $scope.k32_3Value() >= 0) {
            return parseInt($scope.k32Lagerbestand()) - parseInt($scope.k32_1Value()) - parseInt($scope.k32_2Value()) - parseInt($scope.k32_3Value()) + parseInt(sharedProperties.getK32PlanLagerbestandValue()) + parseInt(sharedProperties.getK32_1PlanLagerbestandValue()) + parseInt($scope.k32BestellungValue);
        }
    };
    $scope.k32_Plan5Value = function() {
        if($scope.k32_1Value() >= 0 && $scope.k32_2Value() >= 0 && $scope.k32_3Value() >= 0 && $scope.k32_4Value() >= 0) {
            return parseInt($scope.k32Lagerbestand()) - parseInt($scope.k32_1Value()) - parseInt($scope.k32_2Value()) - parseInt($scope.k32_3Value()) - parseInt($scope.k32_4Value()) + parseInt(sharedProperties.getK32PlanLagerbestandValue()) + parseInt(sharedProperties.getK32_1PlanLagerbestandValue()) + parseInt($scope.k32BestellungValue);
        }
    };
    $scope.k33_Plan2Value = function() {
        var tmp = 0;
        if($scope.k33_1Value() >= 0) {
            tmp = parseInt($scope.k33Lagerbestand()) - parseInt($scope.k33_1Value()) + parseInt(sharedProperties.getK33PlanLagerbestandValue());
        }
        if($scope.k33BestellungMode == 1) {
            tmp = tmp + $scope.k33BestellungValue;
        }
        return tmp;
    };
    $scope.k33_Plan3Value = function() {
        var tmp = 0;
        if($scope.k33_1Value() >= 0 && $scope.k33_2Value() >= 0) {
            tmp = parseInt($scope.k33Lagerbestand()) - parseInt($scope.k33_1Value()) - parseInt($scope.k33_2Value()) + parseInt(sharedProperties.getK33PlanLagerbestandValue()) + parseInt(sharedProperties.getK33_1PlanLagerbestandValue());
        }
        if($scope.k33BestellungMode == 1) {
            tmp = tmp + $scope.k33BestellungValue;
        }
        return tmp;
    };
    $scope.k33_Plan4Value = function() {
        if($scope.k33_1Value() >= 0 && $scope.k33_2Value() >= 0 && $scope.k33_3Value() >= 0) {
            return parseInt($scope.k33Lagerbestand()) - parseInt($scope.k33_1Value()) - parseInt($scope.k33_2Value()) - parseInt($scope.k33_3Value()) + parseInt(sharedProperties.getK33PlanLagerbestandValue()) + parseInt(sharedProperties.getK33_1PlanLagerbestandValue()) + parseInt($scope.k33BestellungValue);
        }
    };
    $scope.k33_Plan5Value = function() {
        if($scope.k33_1Value() >= 0 && $scope.k33_2Value() >= 0 && $scope.k33_3Value() >= 0 && $scope.k33_4Value() >= 0) {
            return parseInt($scope.k33Lagerbestand()) - parseInt($scope.k33_1Value()) - parseInt($scope.k33_2Value()) - parseInt($scope.k33_3Value()) - parseInt($scope.k33_4Value()) + parseInt(sharedProperties.getK33PlanLagerbestandValue()) + parseInt(sharedProperties.getK33_1PlanLagerbestandValue()) + parseInt($scope.k33BestellungValue);
        }
    };
    $scope.k34_Plan2Value = function() {
        var tmp = 0;
        if($scope.k34_1Value() >= 0) {
            tmp = parseInt($scope.k34Lagerbestand()) - parseInt($scope.k34_1Value()) + parseInt(sharedProperties.getK34PlanLagerbestandValue());
        }
        if($scope.k34BestellungMode == 1) {
            tmp = tmp + $scope.k34BestellungValue;
        }
        return tmp;
    };
    $scope.k34_Plan3Value = function() {
        var tmp = 0;
        if($scope.k34_1Value() >= 0 && $scope.k34_2Value() >= 0) {
            tmp = parseInt($scope.k34Lagerbestand()) - parseInt($scope.k34_1Value()) - parseInt($scope.k34_2Value()) + parseInt(sharedProperties.getK34PlanLagerbestandValue()) + parseInt($scope.k34BestellungValue);
        }
        if($scope.k34BestellungMode == 1) {
            tmp = tmp + $scope.k34BestellungValue;
        }
        return tmp;
    };
    $scope.k34_Plan4Value = function() {
        if($scope.k34_1Value() >= 0 && $scope.k34_2Value() >= 0 && $scope.k34_3Value() >= 0) {
            return parseInt($scope.k34Lagerbestand()) - parseInt($scope.k34_1Value()) - parseInt($scope.k34_2Value()) - parseInt($scope.k34_3Value()) + parseInt(sharedProperties.getK34PlanLagerbestandValue()) + parseInt($scope.k34BestellungValue);
        }
    };
    $scope.k34_Plan5Value = function() {
        if($scope.k34_1Value() >= 0 && $scope.k34_2Value() >= 0 && $scope.k34_3Value() >= 0 && $scope.k34_4Value() >= 0) {
            return parseInt($scope.k34Lagerbestand()) - parseInt($scope.k34_1Value()) - parseInt($scope.k34_2Value()) - parseInt($scope.k34_3Value()) - parseInt($scope.k34_4Value()) + parseInt(sharedProperties.getK34PlanLagerbestandValue()) + parseInt($scope.k34BestellungValue);
        }
    };
    $scope.k35_Plan2Value = function() {
        if($scope.k35_1Value() >= 0) {
            return parseInt($scope.k35Lagerbestand()) - parseInt($scope.k35_1Value()) + parseInt(sharedProperties.getK35PlanLagerbestandValue());
        }
    };
    $scope.k35_Plan3Value = function() {
        var tmp = 0;
        if($scope.k35_1Value() >= 0 && $scope.k35_2Value() >= 0) {
            tmp = parseInt($scope.k35Lagerbestand()) - parseInt($scope.k35_1Value()) - parseInt($scope.k35_2Value()) + parseInt(sharedProperties.getK35PlanLagerbestandValue()) + parseInt(sharedProperties.getK35_1PlanLagerbestandValue());
        }
        if($scope.k35BestellungMode == 1) {
            tmp = tmp + $scope.k35BestellungValue;
        }
        return tmp;
    };
    $scope.k35_Plan4Value = function() {
        if($scope.k35_1Value() >= 0 && $scope.k35_2Value() >= 0 && $scope.k35_3Value() >= 0) {
            return parseInt($scope.k35Lagerbestand()) - parseInt($scope.k35_1Value()) - parseInt($scope.k35_2Value()) - parseInt($scope.k35_3Value()) + parseInt(sharedProperties.getK35PlanLagerbestandValue()) + parseInt(sharedProperties.getK35_1PlanLagerbestandValue()) + parseInt($scope.k35BestellungValue);
        }
    };
    $scope.k35_Plan5Value = function() {
        if($scope.k35_1Value() >= 0 && $scope.k35_2Value() >= 0 && $scope.k35_3Value() >= 0 && $scope.k35_4Value() >= 0) {
            return parseInt($scope.k35Lagerbestand()) - parseInt($scope.k35_1Value()) - parseInt($scope.k35_2Value()) - parseInt($scope.k35_3Value()) - parseInt($scope.k35_4Value()) + parseInt(sharedProperties.getK35PlanLagerbestandValue()) + parseInt(sharedProperties.getK35_1PlanLagerbestandValue()) + parseInt($scope.k35BestellungValue);
        }
    };
    $scope.k36_Plan2Value = function() {
        var tmp = 0;
        if($scope.k36_1Value() >= 0) {
            tmp = parseInt($scope.k36Lagerbestand()) - parseInt($scope.k36_1Value()) + parseInt(sharedProperties.getK36PlanLagerbestandValue());
        }
        if($scope.k36BestellungMode == 1) {
            tmp = tmp + $scope.k36BestellungValue;
        }
        return tmp;
    };
    $scope.k36_Plan3Value = function() {
        if($scope.k36_1Value() >= 0 && $scope.k36_2Value() >= 0) {
            return parseInt($scope.k36Lagerbestand()) - parseInt($scope.k36_1Value()) - parseInt($scope.k36_2Value()) + parseInt(sharedProperties.getK36PlanLagerbestandValue()) + parseInt($scope.k36BestellungValue);
        }
    };
    $scope.k36_Plan4Value = function() {
        if($scope.k36_1Value() >= 0 && $scope.k36_2Value() >= 0 && $scope.k36_3Value() >= 0) {
            return parseInt($scope.k36Lagerbestand()) - parseInt($scope.k36_1Value()) - parseInt($scope.k36_2Value()) - parseInt($scope.k36_3Value()) + parseInt(sharedProperties.getK36PlanLagerbestandValue()) + parseInt($scope.k36BestellungValue);
        }
    };
    $scope.k36_Plan5Value = function() {
        if($scope.k36_1Value() >= 0 && $scope.k36_2Value() >= 0 && $scope.k36_3Value() >= 0 && $scope.k36_4Value() >= 0) {
            return parseInt($scope.k36Lagerbestand()) - parseInt($scope.k36_1Value()) - parseInt($scope.k36_2Value()) - parseInt($scope.k36_3Value()) - parseInt($scope.k36_4Value()) + parseInt(sharedProperties.getK36PlanLagerbestandValue()) + parseInt($scope.k36BestellungValue);
        }
    };
    $scope.k37_Plan2Value = function() {
        var tmp = 0;
        if($scope.k37_1Value() >= 0) {
            tmp = parseInt($scope.k37Lagerbestand()) - parseInt($scope.k37_1Value()) + parseInt(sharedProperties.getK37PlanLagerbestandValue());
        }
        if($scope.k37BestellungMode == 1) {
            tmp = tmp + $scope.k37BestellungValue;
        }
        return tmp;
    };
    $scope.k37_Plan3Value = function() {
        if($scope.k37_1Value() >= 0 && $scope.k37_2Value() >= 0) {
            return parseInt($scope.k37Lagerbestand()) - parseInt($scope.k37_1Value()) - parseInt($scope.k37_2Value()) + parseInt(sharedProperties.getK37PlanLagerbestandValue()) + parseInt($scope.k37BestellungValue);
        }

    };
    $scope.k37_Plan4Value = function() {
        if($scope.k37_1Value() >= 0 && $scope.k37_2Value() >= 0 && $scope.k37_3Value() >= 0) {
            return parseInt($scope.k37Lagerbestand()) - parseInt($scope.k37_1Value()) - parseInt($scope.k37_2Value()) - parseInt($scope.k37_3Value()) + parseInt(sharedProperties.getK37PlanLagerbestandValue()) + parseInt($scope.k37BestellungValue);
        }
    };
    $scope.k37_Plan5Value = function() {
        if($scope.k37_1Value() >= 0 && $scope.k37_2Value() >= 0 && $scope.k37_3Value() >= 0 && $scope.k37_4Value() >= 0) {
            return parseInt($scope.k37Lagerbestand()) - parseInt($scope.k37_1Value()) - parseInt($scope.k37_2Value()) - parseInt($scope.k37_3Value()) - parseInt($scope.k37_4Value()) + parseInt(sharedProperties.getK37PlanLagerbestandValue()) + parseInt($scope.k37BestellungValue);
        }
    };
    $scope.k38_Plan2Value = function() {
        var tmp = 0;
        if($scope.k38_1Value() >= 0) {
            tmp = parseInt($scope.k38Lagerbestand()) - parseInt($scope.k38_1Value()) + parseInt(sharedProperties.getK38PlanLagerbestandValue());
        }
        if ($scope.k38BestellungMode == 1) {
            tmp = tmp + $scope.k38BestellungValue;
        }
        return tmp;
    };
    $scope.k38_Plan3Value = function() {
        var tmp = 0;
        if($scope.k38_1Value() >= 0 && $scope.k38_2Value() >= 0) {
            tmp = parseInt($scope.k38Lagerbestand()) - parseInt($scope.k38_1Value()) - parseInt($scope.k38_2Value()) + parseInt(sharedProperties.getK38PlanLagerbestandValue()) + parseInt(sharedProperties.getK38_1PlanLagerbestandValue());
        }
        if ($scope.k38BestellungMode == 1) {
            tmp = tmp + $scope.k38BestellungValue;
        }
        return tmp;
    };
    $scope.k38_Plan4Value = function() {
        if($scope.k38_1Value() >= 0 && $scope.k38_2Value() >= 0 && $scope.k38_3Value() >= 0) {
            return parseInt($scope.k38Lagerbestand()) - parseInt($scope.k38_1Value()) - parseInt($scope.k38_2Value()) - parseInt($scope.k38_3Value()) + parseInt(sharedProperties.getK38PlanLagerbestandValue()) + parseInt(sharedProperties.getK38_1PlanLagerbestandValue()) + parseInt($scope.k38BestellungValue);
        }
    };
    $scope.k38_Plan5Value = function() {
        if($scope.k38_1Value() >= 0 && $scope.k38_2Value() >= 0 && $scope.k38_3Value() >= 0 && $scope.k38_4Value() >= 0) {
            return parseInt($scope.k38Lagerbestand()) - parseInt($scope.k38_1Value()) - parseInt($scope.k38_2Value()) - parseInt($scope.k38_3Value()) - parseInt($scope.k38_4Value()) + parseInt(sharedProperties.getK38PlanLagerbestandValue()) + parseInt(sharedProperties.getK38_1PlanLagerbestandValue()) + parseInt($scope.k38BestellungValue);
        }
    };
    $scope.k39_Plan2Value = function() {
        var tmp = 0;
        if($scope.k39_1Value() >= 0) {
            tmp = parseInt($scope.k39Lagerbestand()) - parseInt($scope.k39_1Value()) + parseInt(sharedProperties.getK39PlanLagerbestandValue());
        }
        if($scope.k39BestellungMode == 1) {
            tmp = tmp + $scope.k38BestellungValue;
        }
        return tmp;
    };
    $scope.k39_Plan3Value = function() {
        if($scope.k39_1Value() >= 0 && $scope.k39_2Value() >= 0) {
            return parseInt($scope.k39Lagerbestand()) - parseInt($scope.k39_1Value()) - parseInt($scope.k39_2Value()) + parseInt(sharedProperties.getK39PlanLagerbestandValue()) + parseInt($scope.k39BestellungValue);
        }
    };
    $scope.k39_Plan4Value = function() {
        if($scope.k39_1Value() >= 0 && $scope.k39_2Value() >= 0 && $scope.k39_3Value() >= 0) {
            return parseInt($scope.k39Lagerbestand()) - parseInt($scope.k39_1Value()) - parseInt($scope.k39_2Value()) - parseInt($scope.k39_3Value()) + parseInt(sharedProperties.getK39PlanLagerbestandValue()) + parseInt($scope.k39BestellungValue);
        }
    };
    $scope.k39_Plan5Value = function() {
        if($scope.k39_1Value() >= 0 && $scope.k39_2Value() >= 0 && $scope.k39_3Value() >= 0 && $scope.k39_4Value() >= 0) {
            return parseInt($scope.k39Lagerbestand()) - parseInt($scope.k39_1Value()) - parseInt($scope.k39_2Value()) - parseInt($scope.k39_3Value()) - parseInt($scope.k39_4Value()) + parseInt(sharedProperties.getK39PlanLagerbestandValue()) + parseInt($scope.k39BestellungValue);
        }
    };
    $scope.k40_Plan2Value = function() {
        var tmp = 0;
        if($scope.k40_1Value() >= 0) {
            tmp = parseInt($scope.k40Lagerbestand()) - parseInt($scope.k40_1Value()) + parseInt(sharedProperties.getK40PlanLagerbestandValue());
        }
        if($scope.k40BestellungMode == 1) {
            tmp = tmp + $scope.k40BestellungValue;
        }
        return tmp;
    };
    $scope.k40_Plan3Value = function() {
        if($scope.k40_1Value() >= 0 && $scope.k40_2Value() >= 0) {
            return parseInt($scope.k40Lagerbestand()) - parseInt($scope.k40_1Value()) - parseInt($scope.k40_2Value()) + parseInt(sharedProperties.getK40PlanLagerbestandValue()) + parseInt($scope.k40BestellungValue);
        }
    };
    $scope.k40_Plan4Value = function() {
        if($scope.k40_1Value() >= 0 && $scope.k40_2Value() >= 0 && $scope.k40_3Value() >= 0) {
            return parseInt($scope.k40Lagerbestand()) - parseInt($scope.k40_1Value()) - parseInt($scope.k40_2Value()) - parseInt($scope.k40_3Value()) + parseInt(sharedProperties.getK40PlanLagerbestandValue()) + parseInt($scope.k40BestellungValue);
        }
    };
    $scope.k40_Plan5Value = function() {
        if($scope.k40_1Value() >= 0 && $scope.k40_2Value() >= 0 && $scope.k40_3Value() >= 0 && $scope.k40_4Value() >= 0) {
            return parseInt($scope.k40Lagerbestand()) - parseInt($scope.k40_1Value()) - parseInt($scope.k40_2Value()) - parseInt($scope.k40_3Value()) - parseInt($scope.k40_4Value()) + parseInt(sharedProperties.getK40PlanLagerbestandValue()) + parseInt($scope.k40BestellungValue);
        }
    };
    $scope.k41_Plan2Value = function() {
        var tmp = 0;
        if($scope.k41_1Value() >= 0) {
            tmp = parseInt($scope.k41Lagerbestand()) - parseInt($scope.k41_1Value()) + parseInt(sharedProperties.getK41PlanLagerbestandValue());
        }
        if($scope.k41BestellungMode == 1) {
            tmp = tmp + $scope.k41BestellungValue;
        }
        return tmp;
    };
    $scope.k41_Plan3Value = function() {
        if($scope.k41_1Value() >= 0 && $scope.k41_2Value() >= 0) {
            return parseInt($scope.k41Lagerbestand()) - parseInt($scope.k41_1Value()) - parseInt($scope.k41_2Value()) + parseInt(sharedProperties.getK41PlanLagerbestandValue()) + parseInt($scope.k41BestellungValue);
        }
    };
    $scope.k41_Plan4Value = function() {
        if($scope.k41_1Value() >= 0 && $scope.k41_2Value() >= 0 && $scope.k41_3Value() >= 0) {
            return parseInt($scope.k41Lagerbestand()) - parseInt($scope.k41_1Value()) - parseInt($scope.k41_2Value()) - parseInt($scope.k41_3Value()) + parseInt(sharedProperties.getK41PlanLagerbestandValue()) + parseInt($scope.k41BestellungValue);
        }
    };
    $scope.k41_Plan5Value = function() {
        if($scope.k41_1Value() >= 0 && $scope.k41_2Value() >= 0 && $scope.k41_3Value() >= 0 && $scope.k41_4Value() >= 0) {
            return parseInt($scope.k41Lagerbestand()) - parseInt($scope.k41_1Value()) - parseInt($scope.k41_2Value()) - parseInt($scope.k41_3Value()) - parseInt($scope.k41_4Value()) + parseInt(sharedProperties.getK41PlanLagerbestandValue()) + parseInt($scope.k41BestellungValue);
        }
    };
    $scope.k42_Plan2Value = function() {
        var tmp = 0;
        if($scope.k42_1Value() >= 0) {
            tmp = parseInt($scope.k42Lagerbestand()) - parseInt($scope.k42_1Value()) + parseInt(sharedProperties.getK42PlanLagerbestandValue());
        }
        if($scope.k42BestellungMode == 1) {
            tmp = tmp + $scope.k42BestellungValue;
        }
        return tmp;
    };
    $scope.k42_Plan3Value = function() {
        if($scope.k42_1Value() >= 0 && $scope.k42_2Value() >= 0) {
            return parseInt($scope.k42Lagerbestand()) - parseInt($scope.k42_1Value()) - parseInt($scope.k42_2Value()) + parseInt(sharedProperties.getK42PlanLagerbestandValue()) + parseInt($scope.k42BestellungValue);
        }
    };
    $scope.k42_Plan4Value = function() {
        if($scope.k42_1Value() >= 0 && $scope.k42_2Value() >= 0 && $scope.k42_3Value() >= 0) {
            return parseInt($scope.k42Lagerbestand()) - parseInt($scope.k42_1Value()) - parseInt($scope.k42_2Value()) - parseInt($scope.k42_3Value()) + parseInt(sharedProperties.getK42PlanLagerbestandValue()) + parseInt($scope.k42BestellungValue);
        }
    };
    $scope.k42_Plan5Value = function() {
        if($scope.k42_1Value() >= 0 && $scope.k42_2Value() >= 0 && $scope.k42_3Value() >= 0 && $scope.k42_4Value() >= 0) {
            return parseInt($scope.k42Lagerbestand()) - parseInt($scope.k42_1Value()) - parseInt($scope.k42_2Value()) - parseInt($scope.k42_3Value()) - parseInt($scope.k42_4Value()) + parseInt(sharedProperties.getK42PlanLagerbestandValue()) + parseInt($scope.k42BestellungValue);
        }
    };
    $scope.k43_Plan2Value = function() {
        if($scope.k43_1Value() >= 0) {
            return parseInt($scope.k43Lagerbestand()) - parseInt($scope.k43_1Value()) + parseInt(sharedProperties.getK43PlanLagerbestandValue());
        }
    };
    $scope.k43_Plan3Value = function() {
        var tmp = 0;
        if($scope.k43_1Value() >= 0 && $scope.k43_2Value() >= 0) {
            tmp = parseInt($scope.k43Lagerbestand()) - parseInt($scope.k43_1Value()) - parseInt($scope.k43_2Value()) + parseInt(sharedProperties.getK43PlanLagerbestandValue()) + parseInt(sharedProperties.getK43_1PlanLagerbestandValue());
        }
        if($scope.k43BestellungMode == 1) {
            tmp = tmp + $scope.k43BestellungValue;

        }
        return tmp;
    };
    $scope.k43_Plan4Value = function() {
        if($scope.k43_1Value() >= 0 && $scope.k43_2Value() >= 0 && $scope.k43_3Value() >= 0) {
            return parseInt($scope.k43Lagerbestand()) - parseInt($scope.k43_1Value()) - parseInt($scope.k43_2Value()) - parseInt($scope.k43_3Value()) + parseInt(sharedProperties.getK43PlanLagerbestandValue()) + parseInt(sharedProperties.getK43_1PlanLagerbestandValue()) + parseInt($scope.k43BestellungValue);
        }
    };
    $scope.k43_Plan5Value = function() {
        if($scope.k43_1Value() >= 0 && $scope.k43_2Value() >= 0 && $scope.k43_3Value() >= 0 && $scope.k43_4Value() >= 0) {
            return parseInt($scope.k43Lagerbestand()) - parseInt($scope.k43_1Value()) - parseInt($scope.k43_2Value()) - parseInt($scope.k43_3Value()) - parseInt($scope.k43_4Value()) + parseInt(sharedProperties.getK43PlanLagerbestandValue()) + parseInt(sharedProperties.getK43_1PlanLagerbestandValue()) + parseInt($scope.k43BestellungValue);
        }
    };
    $scope.k44_Plan2Value = function() {
        var tmp = 0;
        if($scope.k44_1Value() >= 0) {
            tmp = parseInt($scope.k44Lagerbestand()) - parseInt($scope.k44_1Value()) + parseInt(sharedProperties.getK44PlanLagerbestandValue());
        }
        if ($scope.k44BestellungMode == 1) {
            tmp = tmp + $scope.k44BestellungValue;
        }
        return tmp;
    };
    $scope.k44_Plan3Value = function() {
        if($scope.k44_1Value() >= 0 && $scope.k44_2Value() >= 0) {
            return parseInt($scope.k44Lagerbestand()) - parseInt($scope.k44_1Value()) - parseInt($scope.k44_2Value()) + parseInt(sharedProperties.getK44PlanLagerbestandValue()) + parseInt($scope.k44BestellungValue);
        }
    };
    $scope.k44_Plan4Value = function() {
        if($scope.k44_1Value() >= 0 && $scope.k44_2Value() >= 0 && $scope.k44_3Value() >= 0) {
            return parseInt($scope.k44Lagerbestand()) - parseInt($scope.k44_1Value()) - parseInt($scope.k44_2Value()) - parseInt($scope.k44_3Value()) + parseInt(sharedProperties.getK44PlanLagerbestandValue()) + parseInt($scope.k44BestellungValue);
        }
    };
    $scope.k44_Plan5Value = function() {
        if($scope.k44_1Value() >= 0 && $scope.k44_2Value() >= 0 && $scope.k44_3Value() >= 0 && $scope.k44_4Value() >= 0) {
            return parseInt($scope.k44Lagerbestand()) - parseInt($scope.k44_1Value()) - parseInt($scope.k44_2Value()) - parseInt($scope.k44_3Value()) - parseInt($scope.k44_4Value()) + parseInt(sharedProperties.getK44PlanLagerbestandValue()) + parseInt($scope.k44BestellungValue);
        }
    };
    $scope.k45_Plan2Value = function() {
        var tmp = 0;
        if($scope.k45_1Value() >= 0) {
            tmp = parseInt($scope.k45Lagerbestand()) - parseInt($scope.k45_1Value()) + parseInt(sharedProperties.getK45PlanLagerbestandValue());
        }
        if($scope.k45BestellungMode == 1) {
            tmp = tmp + $scope.k45BestellungValue;
        }
        return tmp;
    };
    $scope.k45_Plan3Value = function() {
        if($scope.k45_1Value() >= 0 && $scope.k45_2Value() >= 0) {
            return parseInt($scope.k45Lagerbestand()) - parseInt($scope.k45_1Value()) - parseInt($scope.k45_2Value()) + parseInt(sharedProperties.getK45PlanLagerbestandValue()) +  parseInt(sharedProperties.getK45_1PlanLagerbestandValue()) + parseInt($scope.k45BestellungValue);
        }
    };
    $scope.k45_Plan4Value = function() {
        if($scope.k45_1Value() >= 0 && $scope.k45_2Value() >= 0 && $scope.k45_3Value() >= 0) {
            return parseInt($scope.k45Lagerbestand()) - parseInt($scope.k45_1Value()) - parseInt($scope.k45_2Value()) - parseInt($scope.k45_3Value()) + parseInt(sharedProperties.getK45PlanLagerbestandValue()) + parseInt(sharedProperties.getK45_1PlanLagerbestandValue()) + parseInt($scope.k45BestellungValue);
        }
    };
    $scope.k45_Plan5Value = function() {
        if($scope.k45_1Value() >= 0 && $scope.k45_2Value() >= 0 && $scope.k45_3Value() >= 0 && $scope.k45_4Value() >= 0) {
            return parseInt($scope.k45Lagerbestand()) - parseInt($scope.k45_1Value()) - parseInt($scope.k45_2Value()) - parseInt($scope.k45_3Value()) - parseInt($scope.k45_4Value()) + parseInt(sharedProperties.getK45PlanLagerbestandValue()) + parseInt(sharedProperties.getK45_1PlanLagerbestandValue()) + parseInt($scope.k45BestellungValue);
        }
    };
    $scope.k46_Plan2Value = function() {
        var tmp = 0;
        if($scope.k46_1Value() >= 0) {
            tmp = parseInt($scope.k46Lagerbestand()) - parseInt($scope.k46_1Value()) + parseInt(sharedProperties.getK46PlanLagerbestandValue());
        }
        if($scope.k46BestellungMode == 1) {
            tmp = tmp + $scope.k46BestellungValue;
        }
        return tmp;
    };
    $scope.k46_Plan3Value = function() {
        if($scope.k46_1Value() >= 0 && $scope.k46_2Value() >= 0) {
            return parseInt($scope.k46Lagerbestand()) - parseInt($scope.k46_1Value()) - parseInt($scope.k46_2Value()) + parseInt(sharedProperties.getK46PlanLagerbestandValue()) + parseInt($scope.k44BestellungValue);
        }
    };
    $scope.k46_Plan4Value = function() {
        if($scope.k46_1Value() >= 0 && $scope.k46_2Value() >= 0 && $scope.k46_3Value() >= 0) {
            return parseInt($scope.k46Lagerbestand()) - parseInt($scope.k46_1Value()) - parseInt($scope.k46_2Value()) - parseInt($scope.k46_3Value()) + parseInt(sharedProperties.getK46PlanLagerbestandValue()) + parseInt($scope.k46BestellungValue);
        }
    };
    $scope.k46_Plan5Value = function() {
        if($scope.k46_1Value() >= 0 && $scope.k46_2Value() >= 0 && $scope.k46_3Value() >= 0 && $scope.k46_4Value() >= 0) {
            return parseInt($scope.k46Lagerbestand()) - parseInt($scope.k46_1Value()) - parseInt($scope.k46_2Value()) - parseInt($scope.k46_3Value()) - parseInt($scope.k46_4Value()) + parseInt(sharedProperties.getK46PlanLagerbestandValue()) + parseInt($scope.k46BestellungValue);
        }
    };
    $scope.k47_Plan2Value = function() {
        var tmp = 0;
        if($scope.k47_1Value() >= 0) {
            tmp = parseInt($scope.k47Lagerbestand()) - parseInt($scope.k47_1Value()) + parseInt(sharedProperties.getK47PlanLagerbestandValue());
        }
        if($scope.k47BestellungMode == 1) {
            tmp = tmp + $scope.k47BestellungValue;
        }
        return tmp;
    };
    $scope.k47_Plan3Value = function() {
        if($scope.k47_1Value() >= 0 && $scope.k47_2Value() >= 0) {
            return parseInt($scope.k47Lagerbestand()) - parseInt($scope.k47_1Value()) - parseInt($scope.k47_2Value()) + parseInt(sharedProperties.getK47PlanLagerbestandValue()) + parseInt($scope.k47BestellungValue);
        }
    };
    $scope.k47_Plan4Value = function() {
        if($scope.k47_1Value() >= 0 && $scope.k47_2Value() >= 0 && $scope.k47_3Value() >= 0) {
            return parseInt($scope.k47Lagerbestand()) - parseInt($scope.k47_1Value()) - parseInt($scope.k47_2Value()) - parseInt($scope.k47_3Value()) + parseInt(sharedProperties.getK47PlanLagerbestandValue()) + parseInt($scope.k47BestellungValue);
        }
    };
    $scope.k47_Plan5Value = function() {
        if($scope.k47_1Value() >= 0 && $scope.k47_2Value() >= 0 && $scope.k47_3Value() >= 0 && $scope.k47_4Value() >= 0) {
            return parseInt($scope.k47Lagerbestand()) - parseInt($scope.k47_1Value()) - parseInt($scope.k47_2Value()) - parseInt($scope.k47_3Value()) - parseInt($scope.k47_4Value()) + parseInt(sharedProperties.getK47PlanLagerbestandValue()) + parseInt($scope.k47BestellungValue);
        }
    };
    $scope.k48_Plan2Value = function() {
        var tmp = 0;
        if($scope.k48_1Value() >= 0) {
            tmp = parseInt($scope.k48Lagerbestand()) - parseInt($scope.k48_1Value()) + parseInt(sharedProperties.getK48PlanLagerbestandValue());
        }
        if($scope.k48BestellungMode == 1) {
            tmp = tmp + $scope.k48BestellungValue;
        }
        return tmp;
    };
    $scope.k48_Plan3Value = function() {
        if($scope.k48_1Value() >= 0 && $scope.k48_2Value() >= 0) {
            return parseInt($scope.k48Lagerbestand()) - parseInt($scope.k48_1Value()) - parseInt($scope.k48_2Value()) + parseInt(sharedProperties.getK48PlanLagerbestandValue()) + parseInt($scope.k48BestellungValue);
        }
    };
    $scope.k48_Plan4Value = function() {
        if($scope.k48_1Value() >= 0 && $scope.k48_2Value() >= 0 && $scope.k48_3Value() >= 0) {
            return parseInt($scope.k48Lagerbestand()) - parseInt($scope.k48_1Value()) - parseInt($scope.k48_2Value()) - parseInt($scope.k48_3Value()) + parseInt(sharedProperties.getK48PlanLagerbestandValue()) + parseInt($scope.k48BestellungValue);
        }
    };
    $scope.k48_Plan5Value = function() {
        if($scope.k48_1Value() >= 0 && $scope.k48_2Value() >= 0 && $scope.k48_3Value() >= 0 && $scope.k48_4Value() >= 0) {
            return parseInt($scope.k48Lagerbestand()) - parseInt($scope.k48_1Value()) - parseInt($scope.k48_2Value()) - parseInt($scope.k48_3Value()) - parseInt($scope.k48_4Value()) + parseInt(sharedProperties.getK48PlanLagerbestandValue()) + parseInt($scope.k48BestellungValue);
        }
    };
    $scope.k52_Plan2Value = function() {
        var tmp = 0;
        if($scope.k52_1Value() >= 0) {
            tmp = parseInt($scope.k52Lagerbestand()) - parseInt($scope.k52_1Value()) + parseInt(sharedProperties.getK52PlanLagerbestandValue());
        }
        if($scope.k52BestellungMode == 1) {
            tmp = tmp + $scope.k52BestellungValue;
        }
        return tmp;
    };
    $scope.k52_Plan3Value = function() {
        if($scope.k52_1Value() >= 0 && $scope.k52_2Value() >= 0) {
            return parseInt($scope.k52Lagerbestand()) - parseInt($scope.k52_1Value()) - parseInt($scope.k52_2Value()) + parseInt(sharedProperties.getK52PlanLagerbestandValue()) +  parseInt(sharedProperties.getK52_1PlanLagerbestandValue()) + parseInt($scope.k52BestellungValue);
        }
    };
    $scope.k52_Plan4Value = function() {
        if($scope.k52_1Value() >= 0 && $scope.k52_2Value() >= 0 && $scope.k52_3Value() >= 0) {
            return parseInt($scope.k52Lagerbestand()) - parseInt($scope.k52_1Value()) - parseInt($scope.k52_2Value()) - parseInt($scope.k52_3Value()) + parseInt(sharedProperties.getK52PlanLagerbestandValue()) + parseInt(sharedProperties.getK52_1PlanLagerbestandValue()) + parseInt($scope.k52BestellungValue);
        }
    };
    $scope.k52_Plan5Value = function() {
        if($scope.k52_1Value() >= 0 && $scope.k52_2Value() >= 0 && $scope.k52_3Value() >= 0 && $scope.k52_4Value() >= 0) {
            return parseInt($scope.k52Lagerbestand()) - parseInt($scope.k52_1Value()) - parseInt($scope.k52_2Value()) - parseInt($scope.k52_3Value()) - parseInt($scope.k52_4Value()) + parseInt(sharedProperties.getK52PlanLagerbestandValue()) + parseInt(sharedProperties.getK52_1PlanLagerbestandValue()) + parseInt($scope.k52BestellungValue);
        }
    };
    $scope.k53_Plan2Value = function() {
        var tmp = 0;
        if($scope.k53_1Value() >= 0) {
            tmp = parseInt($scope.k53Lagerbestand()) - parseInt($scope.k53_1Value()) + parseInt(sharedProperties.getK53PlanLagerbestandValue());
        }
        if($scope.k53BestellungMode == 1) {
            tmp = tmp + $scope.k53BestellungValue;
        }
        return tmp;
    };
    $scope.k53_Plan3Value = function() {
        if($scope.k53_1Value() >= 0 && $scope.k53_2Value() >= 0) {
            return parseInt($scope.k53Lagerbestand()) - parseInt($scope.k53_1Value()) - parseInt($scope.k53_2Value()) + parseInt(sharedProperties.getK53PlanLagerbestandValue()) + parseInt($scope.k53BestellungValue);
        }
    };
    $scope.k53_Plan4Value = function() {
        if($scope.k53_1Value() >= 0 && $scope.k53_2Value() >= 0 && $scope.k53_3Value() >= 0) {
            return parseInt($scope.k53Lagerbestand()) - parseInt($scope.k53_1Value()) - parseInt($scope.k53_2Value()) - parseInt($scope.k53_3Value()) + parseInt(sharedProperties.getK53PlanLagerbestandValue()) + parseInt($scope.k53BestellungValue);
        }
    };
    $scope.k53_Plan5Value = function() {
        if($scope.k53_1Value() >= 0 && $scope.k53_2Value() >= 0 && $scope.k53_3Value() >= 0 && $scope.k53_4Value() >= 0) {
            return parseInt($scope.k53Lagerbestand()) - parseInt($scope.k53_1Value()) - parseInt($scope.k53_2Value()) - parseInt($scope.k53_3Value()) - parseInt($scope.k53_4Value()) + parseInt(sharedProperties.getK53PlanLagerbestandValue()) + parseInt($scope.k53BestellungValue);
        }
    };
    $scope.k57_Plan2Value = function() {
        var tmp = 0;
        if($scope.k57_1Value() >= 0) {
            tmp = parseInt($scope.k57Lagerbestand()) - parseInt($scope.k57_1Value()) + parseInt(sharedProperties.getK57PlanLagerbestandValue());
        }
        if($scope.k57BestellungMode == 1) {
            tmp = tmp + $scope.k57BestellungValue;
        }
        return tmp;
    };
    $scope.k57_Plan3Value = function() {
        if($scope.k57_1Value() >= 0 && $scope.k57_2Value() >= 0) {
            return parseInt($scope.k57Lagerbestand()) - parseInt($scope.k57_1Value()) - parseInt($scope.k57_2Value()) + parseInt(sharedProperties.getK57PlanLagerbestandValue()) +  parseInt(sharedProperties.getK57_1PlanLagerbestandValue()) + parseInt($scope.k57BestellungValue);
        }
    };
    $scope.k57_Plan4Value = function() {
        if($scope.k57_1Value() >= 0 && $scope.k57_2Value() >= 0 && $scope.k57_3Value() >= 0) {
            return parseInt($scope.k57Lagerbestand()) - parseInt($scope.k57_1Value()) - parseInt($scope.k57_2Value()) - parseInt($scope.k57_3Value()) + parseInt(sharedProperties.getK57PlanLagerbestandValue()) + parseInt(sharedProperties.getK57_1PlanLagerbestandValue()) + parseInt($scope.k57BestellungValue);
        }
    };
    $scope.k57_Plan5Value = function() {
        if($scope.k57_1Value() >= 0 && $scope.k57_2Value() >= 0 && $scope.k57_3Value() >= 0 && $scope.k57_4Value() >= 0) {
            return parseInt($scope.k57Lagerbestand()) - parseInt($scope.k57_1Value()) - parseInt($scope.k57_2Value()) - parseInt($scope.k57_3Value()) - parseInt($scope.k57_4Value()) + parseInt(sharedProperties.getK57PlanLagerbestandValue()) + parseInt(sharedProperties.getK57_1PlanLagerbestandValue()) + parseInt($scope.k57BestellungValue);
        }
    };
    $scope.k58_Plan2Value = function() {
        var tmp = 0;
        if($scope.k58_1Value() >= 0) {
            tmp = parseInt($scope.k58Lagerbestand()) - parseInt($scope.k58_1Value()) + parseInt(sharedProperties.getK58PlanLagerbestandValue());
        }
        if($scope.k58BestellungMode == 1) {
            tmp = tmp + $scope.k58BestellungValue;
        }
        return tmp;
    };
    $scope.k58_Plan3Value = function() {
        if($scope.k58_1Value() >= 0 && $scope.k58_2Value() >= 0) {
            return parseInt($scope.k58Lagerbestand()) - parseInt($scope.k58_1Value()) - parseInt($scope.k58_2Value()) + parseInt(sharedProperties.getK58PlanLagerbestandValue()) +  parseInt(sharedProperties.getK58_1PlanLagerbestandValue()) + parseInt($scope.k58BestellungValue);
        }
    };
    $scope.k58_Plan4Value = function() {
        if($scope.k58_1Value() >= 0 && $scope.k58_2Value() >= 0 && $scope.k58_3Value() >= 0) {
            return parseInt($scope.k58Lagerbestand()) - parseInt($scope.k58_1Value()) - parseInt($scope.k58_2Value()) - parseInt($scope.k58_3Value()) + parseInt(sharedProperties.getK58PlanLagerbestandValue()) + parseInt(sharedProperties.getK58_1PlanLagerbestandValue()) + parseInt($scope.k58BestellungValue);
        }
    };
    $scope.k58_Plan5Value = function() {
        if($scope.k58_1Value() >= 0 && $scope.k58_2Value() >= 0 && $scope.k58_3Value() >= 0 && $scope.k58_4Value() >= 0) {
            return parseInt($scope.k58Lagerbestand()) - parseInt($scope.k58_1Value()) - parseInt($scope.k58_2Value()) - parseInt($scope.k58_3Value()) - parseInt($scope.k58_4Value()) + parseInt(sharedProperties.getK58PlanLagerbestandValue()) + parseInt(sharedProperties.getK58_1PlanLagerbestandValue()) + parseInt($scope.k58BestellungValue);
        }
    };
    $scope.k59_Plan2Value = function() {
        if($scope.k59_1Value() >= 0) {
            return parseInt($scope.k59Lagerbestand()) - parseInt($scope.k59_1Value()) + parseInt(sharedProperties.getK59PlanLagerbestandValue()) + parseInt($scope.k59BestellungValue);
        }
    };
    $scope.k59_Plan3Value = function() {
        if($scope.k59_1Value() >= 0 && $scope.k59_2Value() >= 0) {
            return parseInt($scope.k59Lagerbestand()) - parseInt($scope.k59_1Value()) - parseInt($scope.k59_2Value()) + parseInt(sharedProperties.getK59PlanLagerbestandValue()) + parseInt($scope.k59BestellungValue);
        }
    };
    $scope.k59_Plan4Value = function() {
        if($scope.k59_1Value() >= 0 && $scope.k59_2Value() >= 0 && $scope.k59_3Value() >= 0) {
            return parseInt($scope.k59Lagerbestand()) - parseInt($scope.k59_1Value()) - parseInt($scope.k59_2Value()) - parseInt($scope.k59_3Value()) + parseInt(sharedProperties.getK59PlanLagerbestandValue()) + parseInt($scope.k59BestellungValue);
        }
    };
    $scope.k59_Plan5Value = function() {
        if($scope.k59_1Value() >= 0 && $scope.k59_2Value() >= 0 && $scope.k59_3Value() >= 0 && $scope.k59_4Value() >= 0) {
            return parseInt($scope.k59Lagerbestand()) - parseInt($scope.k59_1Value()) - parseInt($scope.k59_2Value()) - parseInt($scope.k59_3Value()) - parseInt($scope.k59_4Value()) + parseInt(sharedProperties.getK59PlanLagerbestandValue()) + parseInt($scope.k59BestellungValue);
        }
    };
    $scope.k21Bestellung = function() {
        var bestellung;
        if($scope.k21BestellungMode == 0) {
            bestellung = $scope.k21BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k21BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k22Bestellung = function() {
        var bestellung;
        if($scope.k22BestellungMode == 0) {
            bestellung = $scope.k22BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k22BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k23Bestellung = function() {
        var bestellung;
        if($scope.k23BestellungMode == 0) {
            bestellung = $scope.k23BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k23BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k24Bestellung = function() {
        var bestellung;
        if($scope.k24BestellungMode == 0) {
            bestellung = $scope.k24BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k24BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k25Bestellung = function() {
        var bestellung;
        if($scope.k25BestellungMode == 0) {
            bestellung = $scope.k25BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k25BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k27Bestellung = function() {
        var bestellung;
        if($scope.k27BestellungMode == 0) {
            bestellung = $scope.k27BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k27BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k28Bestellung = function() {
        var bestellung;
        if($scope.k28BestellungMode == 0) {
            bestellung = $scope.k28BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k28BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k32Bestellung = function() {
        var bestellung;
        if($scope.k32BestellungMode == 0) {
            bestellung = $scope.k32BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k32BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k33Bestellung = function() {
        var bestellung;
        if($scope.k33BestellungMode == 0) {
            bestellung = $scope.k33BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k33BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k34Bestellung = function() {
        var bestellung;
        if($scope.k34BestellungMode == 0) {
            bestellung = $scope.k34BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k34BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k35Bestellung = function() {
        var bestellung;
        if($scope.k35BestellungMode == 0) {
            bestellung = $scope.k35BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k35BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k36Bestellung = function() {
        var bestellung;
        if($scope.k36BestellungMode == 0) {
            bestellung = $scope.k36BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k36BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k37Bestellung = function() {
        var bestellung;
        if($scope.k37BestellungMode == 0) {
            bestellung = $scope.k37BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k37BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k38Bestellung = function() {
        var bestellung;
        if($scope.k38BestellungMode == 0) {
            bestellung = $scope.k38BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k38BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k39Bestellung = function() {
        var bestellung;
        if($scope.k39BestellungMode == 0) {
            bestellung = $scope.k39BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k39BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k40Bestellung = function() {
        var bestellung;
        if($scope.k40BestellungMode == 0) {
            bestellung = $scope.k40BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k40BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k41Bestellung = function() {
        var bestellung;
        if($scope.k41BestellungMode == 0) {
            bestellung = $scope.k41BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k41BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k42Bestellung = function() {
        var bestellung;
        if($scope.k42BestellungMode == 0) {
            bestellung = $scope.k42BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k42BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k43Bestellung = function() {
        var bestellung;
        if($scope.k43BestellungMode == 0) {
            bestellung = $scope.k43BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k43BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k44Bestellung = function() {
        var bestellung;
        if($scope.k44BestellungMode == 0) {
            bestellung = $scope.k44BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k44BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k45Bestellung = function() {
        var bestellung;
        if($scope.k45BestellungMode == 0) {
            bestellung = $scope.k45BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k45BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k46Bestellung = function() {
        var bestellung;
        if($scope.k46BestellungMode == 0) {
            bestellung = $scope.k46BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k46BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k47Bestellung = function() {
        var bestellung;
        if($scope.k47BestellungMode == 0) {
            bestellung = $scope.k47BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k47BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k48Bestellung = function() {
        var bestellung;
        if($scope.k48BestellungMode == 0) {
            bestellung = $scope.k48BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k48BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k52Bestellung = function() {
        var bestellung;
        if($scope.k52BestellungMode == 0) {
            bestellung = $scope.k52BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k52BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k53Bestellung = function() {
        var bestellung;
        if($scope.k53BestellungMode == 0) {
            bestellung = $scope.k53BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k53BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k57Bestellung = function() {
        var bestellung;
        if($scope.k57BestellungMode == 0) {
            bestellung = $scope.k57BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k57BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k58Bestellung = function() {
        var bestellung;
        if($scope.k58BestellungMode == 0) {
            bestellung = $scope.k58BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k58BestellungValue.toString();
        }
        return bestellung;
    };
    $scope.k59Bestellung = function() {
        var bestellung;
        if($scope.k59BestellungMode == 0) {
            bestellung = $scope.k59BestellungValue.toString() + "/" + 0;
        } else {
            bestellung = 0 + "/" + $scope.k59BestellungValue.toString();
        }
        return bestellung;
    };

    $scope.produktionsprogramm = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Produktionsprogramm";
        } else {
            return "Production program"
        }
    };
    $scope.periode = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Periode";
        } else {
            return "Period"
        }
    };
    $scope.number = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Nr. Kaufteil";
        } else {
            return "Item No."
        }
    };
    $scope.lieferfrist = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Lieferfrist";
        } else {
            return "Delivery time"
        }
    };
    $scope.abweichung = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Abweichung";
        } else {
            return "Deviation"
        }
    };
    $scope.verwendung = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Verwendung";
        } else {
            return "Used in"
        }
    };
    $scope.diskontmenge = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Diskontmenge";
        } else {
            return "Discount quantity"
        }
    };
    $scope.anfangsbestand = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Anfangsbestand in Per n";
        } else {
            return "Initial stock in Per n"
        }
    };
    $scope.bruttobedarf = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Bruttobedarf gemäß Produktionsprogramm";
        } else {
            return "Gross requirements according the prod.progr"
        }
    };
    $scope.bestellung = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Bestellung";
        } else {
            return "Order"
        }
    };
    $scope.wareneingang = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Bestand nach geplantem Wareneingang";
        } else {
            return "Stock after intended goods receipt"
        }
    };
    $scope.gesamtmenge = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Gesamtmenge";
        } else {
            return "quantity"
        }
    };
    $scope.modus = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Normal/Eil";
        } else {
            return "Normal/Fast"
        }
    };
    $scope.periode1 = function() {
        return (parseInt(sharedProperties.getPeriodValue()) + 1).toString() + "." +  $scope.periode();
    };
    $scope.periode2 = function() {
        return (parseInt(sharedProperties.getPeriodValue()) + 2).toString() + "." + $scope.periode();
    };
    $scope.periode3 = function() {
        return (parseInt(sharedProperties.getPeriodValue()) + 3).toString() + "." + $scope.periode();
    };
    $scope.periode4 = function() {
        return (parseInt(sharedProperties.getPeriodValue()) + 4).toString() + "." + $scope.periode();
    };
    $scope.periode5 = function() {
        return (parseInt(sharedProperties.getPeriodValue()) + 5).toString() + "." + $scope.periode();
    };
    $scope.periodeValue = function() {
        return parseInt(sharedProperties.getPeriodValue());
    };
} );
