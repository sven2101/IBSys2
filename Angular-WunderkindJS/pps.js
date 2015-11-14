ppsApp.controller('ppsController', function($scope, sharedProperties) {

    $scope.k1 = sharedProperties.getP1Value();
    $scope.d2 = sharedProperties.getP2Value();
    $scope.h3 = sharedProperties.getP3Value();
    $scope.k4 = sharedProperties.getK4Value();
    $scope.d5 = sharedProperties.getD5Value();
    $scope.h6 = sharedProperties.getH6Value();
    $scope.k7 = sharedProperties.getK7Value();
    $scope.d8 = sharedProperties.getD8Value();
    $scope.h9 = sharedProperties.getH9Value();
    $scope.k10 = sharedProperties.getK10Value();
    $scope.d11 = sharedProperties.getD11Value();
    $scope.h12 = sharedProperties.getH12Value();
    $scope.k13 = sharedProperties.getK13Value();
    $scope.d14 = sharedProperties.getD14Value();
    $scope.h15 = sharedProperties.getH15Value();
    $scope.kdh16 = sharedProperties.getKDH16Value();
    $scope.kdh17 = sharedProperties.getKDH17Value();
    $scope.k18 = sharedProperties.getK18Value();
    $scope.d19 = sharedProperties.getD19Value();
    $scope.h20 = sharedProperties.getH20Value();
    $scope.kdh26 = sharedProperties.getKDH26Value();
    $scope.k49 = sharedProperties.getK49Value();
    $scope.d54 = sharedProperties.getD54Value();
    $scope.h29 = sharedProperties.getH29Value();
    $scope.k50 = sharedProperties.getK50Value();
    $scope.d55 = sharedProperties.getD55Value();
    $scope.h30 = sharedProperties.getH30Value();
    $scope.k51 = sharedProperties.getK51Value();
    $scope.d56 = sharedProperties.getD56Value();
    $scope.h31 = sharedProperties.getH31Value();

    $scope.k4_10 = function() {
        var k4 = $scope.k4;
        var k4_multi = 4;

        if (k4 >= 0 && k4_multi >= 0) {
            $scope.k4A10 = k4 * k4_multi;
            return k4 * k4_multi;
        }
    };

    $scope.k4_11 = function() {
        var k4 = $scope.k4;
        var k4_multi = 3;

        if (k4 >= 0 && k4_multi >= 0) {
            $scope.k4A11 = k4 * k4_multi;
            return k4 * k4_multi;
        }
    };

    $scope.d5_10 = function() {
        var d5 = $scope.d5;
        var d5_multi = 4;

        if (d5 >= 0 && d5_multi >= 0) {
            $scope.d5A10 = d5 * d5_multi;
            return d5 * d5_multi;
        }
    };

    $scope.d5_11 = function() {
        var d5 = $scope.d5;
        var d5_multi = 3;

        if (d5 >= 0 && d5_multi >= 0) {
            $scope.d5A11 = d5 * d5_multi;
            return d5 * d5_multi;
        }
    };

    $scope.h6_10 = function() {
        var h6 = $scope.h6;
        var h6_multi = 4;

        if (h6 >= 0 && h6_multi >= 0) {
            $scope.h6A10 = h6 * h6_multi;
            return h6 * h6_multi;
        }
    };

    $scope.h6_11 = function() {
        var h6 = $scope.h6;
        var h6_multi = 3;

        if (h6 >= 0 && h6_multi >= 0) {
            $scope.h6A11 = h6 * h6_multi;
            return h6 * h6_multi;
        }
    };

    $scope.k7_10 = function() {
        var k7 = $scope.k7;
        var k7_multi = 4;

        if (k7 >= 0 && k7_multi >= 0) {
            $scope.k7A10 = k7 * k7_multi;
            return k7 * k7_multi;
        }
    };

    $scope.k7_11 = function() {
        var k7 = $scope.k7;
        var k7_multi = 3;

        if (k7 >= 0 && k7_multi >= 0) {
            $scope.k7A11 = k7 * k7_multi;
            return k7 * k7_multi;
        }
    };

    $scope.d8_10 = function() {
        var d8 = $scope.d8;
        var d8_multi = 4;

        if (d8 >= 0 && d8_multi >= 0) {
            $scope.d8A10 = d8 * d8_multi;
            return d8 * d8_multi;
        }
    };

    $scope.d8_11 = function() {
        var d8 = $scope.d8;
        var d8_multi = 3;

        if (d8 >= 0 && d8_multi >= 0) {
            $scope.d8A11 = d8 * d8_multi;
            return d8 * d8_multi;
        }
    };

    $scope.h9_10 = function() {
        var h9 = $scope.h9;
        var h9_multi = 4;

        if (h9 >= 0 && h9_multi >= 0) {
            $scope.h9A10 = h9 * h9_multi;
            return h9 * h9_multi;
        }
    };

    $scope.h9_11 = function() {
        var h9 = $scope.h9;
        var h9_multi = 3;

        if (h9 >= 0 && h9_multi >= 0) {
            $scope.h9A11 = h9 * h9_multi;
            return h9 * h9_multi;
        }
    };

    $scope.k10_7 = function() {
        var k10 = $scope.k10;
        var k10_multi = 2;

        if (k10 >= 0 && k10_multi >= 0) {
            $scope.k10A7 = k10 * k10_multi;
            return k10 * k10_multi;
        }
    };

    $scope.k10_8 = function() {
        var k10 = $scope.k10;
        var k10_multi = 1;

        if (k10 >= 0 && k10_multi >= 0) {
            $scope.k10A8 = k10 * k10_multi;
            return k10 * k10_multi;
        }
    };

    $scope.k10_9 = function() {
        var k10 = $scope.k10;
        var k10_multi = 3;

        if (k10 >= 0 && k10_multi >= 0) {
            $scope.k10A9 = k10 * k10_multi;
            return k10 * k10_multi;
        }
    };

    $scope.k10_12 = function() {
        var k10 = $scope.k10;
        var k10_multi = 3;

        if (k10 >= 0 && k10_multi >= 0) {
            $scope.k10A12 = k10 * k10_multi;
            return k10 * k10_multi;
        }
    };

    $scope.k10_13 = function() {
        var k10 = $scope.h9;
        var k10_multi = 2;

        if (k10 >= 0 && k10_multi >= 0) {
            $scope.k10A13 = k10 * k10_multi;
            return k10 * k10_multi;
        }
    };

    $scope.d11_7 = function() {
        var d11 = $scope.d11;
        var d11_multi = 2;

        if (d11 >= 0 && d11_multi >= 0) {
            $scope.d11A7 = d11 * d11_multi;
            return d11 * d11_multi;
        }
    };

    $scope.d11_8 = function() {
        var d11 = $scope.d11;
        var d11_multi = 2;

        if (d11 >= 0 && d11_multi >= 0) {
            $scope.d11A8 = d11 * d11_multi;
            return d11 * d11_multi;
        }
    };

    $scope.d11_9 = function() {
        var d11 = $scope.d11;
        var d11_multi = 3;

        if (d11 >= 0 && d11_multi >= 0) {
            $scope.d11A9 = d11 * d11_multi;
            return d11 * d11_multi;
        }
    };

    $scope.d11_12 = function() {
        var d11 = $scope.d11;
        var d11_multi = 3;

        if (d11 >= 0 && d11_multi >= 0) {
            $scope.d11A12 = d11 * d11_multi;
            return d11 * d11_multi;
        }
    };

    $scope.d11_13 = function() {
        var d11 = $scope.d11;
        var d11_multi = 2;

        if (d11 >= 0 && d11_multi >= 0) {
            $scope.d11A13 = d11 * d11_multi;
            return d11 * d11_multi;
        }
    };

    $scope.h12_7 = function() {
        var h12 = $scope.h12;
        var h12_multi = 2;

        if (h12 >= 0 && h12_multi >= 0) {
            $scope.h12A7 = h12 * h12_multi;
            return h12 * h12_multi;
        }
    };

    $scope.h12_8 = function() {
        var h12 = $scope.h12;
        var h12_multi = 2;

        if (h12 >= 0 && h12_multi >= 0) {
            $scope.h12A8 = h12 * h12_multi;
            return h12 * h12_multi;
        }
    };

    $scope.h12_9 = function() {
        var h12 = $scope.h12;
        var h12_multi = 3;

        if (h12 >= 0 && h12_multi >= 0) {
            $scope.h12A9 = h12 * h12_multi;
            return h12 * h12_multi;
        }
    };

    $scope.h12_12 = function() {
        var h12 = $scope.h12;
        var h12_multi = 3;

        if (h12 >= 0 && h12_multi >= 0) {
            $scope.h12A12 = h12 * h12_multi;
            return h12 * h12_multi;
        }
    };

    $scope.h12_13 = function() {
        var h12 = $scope.h12;
        var h12_multi = 2;

        if (h12 >= 0 && h12_multi >= 0) {
            $scope.h12A13 = h12 * h12_multi;
            return h12 * h12_multi;
        }
    };

    $scope.k13_7 = function() {
        var k13 = $scope.k13;
        var k13_multi = 2;

        if (k13 >= 0 && k13_multi >= 0) {
            $scope.k13A7 = k13 * k13_multi;
            return k13 * k13_multi;
        }
    };

    $scope.k13_8 = function() {
        var k13 = $scope.k13;
        var k13_multi = 1;

        if (k13 >= 0 && k13_multi >= 0) {
            $scope.k13A8 = k13 * k13_multi;
            return k13 * k13_multi;
        }
    };

    $scope.k13_9 = function() {
        var k13 = $scope.k13;
        var k13_multi = 3;

        if (k13 >= 0 && k13_multi >= 0) {
            $scope.k13A9 = k13 * k13_multi;
            return k13 * k13_multi;
        }
    };

    $scope.k13_12 = function() {
        var k13 = $scope.k13;
        var k13_multi = 3;

        if (k13 >= 0 && k13_multi >= 0) {
            $scope.k13A12 = k13 * k13_multi;
            return k13 * k13_multi;
        }
    };

    $scope.k13_13 = function() {
        var k13 = $scope.k13;
        var k13_multi = 2;

        if (k13 >= 0 && k13_multi >= 0) {
            $scope.k13A13 = k13 * k13_multi;
            return k13 * k13_multi;
        }
    };

    $scope.d14_7 = function() {
        var d14 = $scope.d14;
        var d14_multi = 2;

        if (d14 >= 0 && d14_multi >= 0) {
            $scope.d14A7 = d14 * d14_multi;
            return d14 * d14_multi;
        }
    };

    $scope.d14_8 = function() {
        var d14 = $scope.d14;
        var d14_multi = 2;

        if (d14 >= 0 && d14_multi >= 0) {
            $scope.d14A8 = d14 * d14_multi;
            return d14 * d14_multi;
        }
    };

    $scope.d14_9 = function() {
        var d14 = $scope.d14;
        var d14_multi = 3;

        if (d14 >= 0 && d14_multi >= 0) {
            $scope.d14A9 = d14 * d14_multi;
            return d14 * d14_multi;
        }
    };

    $scope.d14_12 = function() {
        var d14 = $scope.d14;
        var d14_multi = 3;

        if (d14 >= 0 && d14_multi >= 0) {
            $scope.d14A12 = d14 * d14_multi;
            return d14 * d14_multi;
        }
    };

    $scope.d14_13 = function() {
        var d14 = $scope.d14;
        var d14_multi = 2;

        if (d14 >= 0 && d14_multi >= 0) {
            $scope.d14A13 = d14 * d14_multi;
            return d14 * d14_multi;
        }
    };

    $scope.h15_7 = function() {
        var h15 = $scope.h15;
        var h15_multi = 2;

        if (h15 >= 0 && h15_multi >= 0) {
            $scope.h15A7 = h15 * h15_multi;
            return h15 * h15_multi;
        }
    };

    $scope.h15_8 = function() {
        var h15 = $scope.h15;
        var h15_multi = 2;

        if (h15 >= 0 && h15_multi >= 0) {
            $scope.h15A8 = h15 * h15_multi;
            return h15 * h15_multi;
        }
    };

    $scope.h15_9 = function() {
        var h15 = $scope.h15;
        var h15_multi = 3;

        if (h15 >= 0 && h15_multi >= 0) {
            $scope.h15A9 = h15 * h15_multi;
            return h15 * h15_multi;
        }
    };

    $scope.h15_12 = function() {
        var h15 = $scope.h15;
        var h15_multi = 3;

        if (h15 >= 0 && h15_multi >= 0) {
            $scope.h15A12 = h15 * h15_multi;
            return h15 * h15_multi;
        }
    };

    $scope.h15_13 = function() {
        var h15 = $scope.h15;
        var h15_multi = 2;

        if (h15 >= 0 && h15_multi >= 0) {
            $scope.h15A13 = h15 * h15_multi;
            return h15 * h15_multi;
        }
    };

    $scope.kdh16_6 = function() {
        var kdh16 = $scope.kdh16;
        var kdh16_multi = 2;

        if (kdh16 >= 0 && kdh16_multi >= 0) {
            $scope.kdh16A6 = kdh16 * kdh16_multi;
            return kdh16 * kdh16_multi;
        }
    };

    $scope.kdh16_14 = function() {
        var kdh16 = $scope.kdh16;
        var kdh16_multi = 3;

        if (kdh16 >= 0 && kdh16_multi >= 0) {
            $scope.kdh16A14 = kdh16 * kdh16_multi;
            return kdh16 * kdh16_multi;
        }
    };

    $scope.kdh17_15 = function() {
        var kdh17 = $scope.kdh17;
        var kdh17_multi = 3;

        if (kdh17 >= 0 && kdh17_multi >= 0) {
            $scope.kdh17A15 = kdh17 * kdh17_multi;
            return kdh17 * kdh17_multi;
        }
    };

    $scope.k18_6 = function() {
        var k18 = $scope.k18;
        var k18_multi = 3;

        if (k18 >= 0 && k18_multi >= 0) {
            $scope.k18A6 = k18 * k18_multi;
            return k18 * k18_multi;
        }
    };

    $scope.k18_7 = function() {
        var k18 = $scope.k18;
        var k18_multi = 2;

        if (k18 >= 0 && k18_multi >= 0) {
            $scope.k18A7 = k18 * k18_multi;
            return k18 * k18_multi;
        }
    };

    $scope.k18_8 = function() {
        var k18 = $scope.k18;
        var k18_multi = 3;

        if (k18 >= 0 && k18_multi >= 0) {
            $scope.k18A8 = k18 * k18_multi;
            return k18 * k18_multi;
        }
    };

    $scope.k18_9 = function() {
        var k18 = $scope.k18;
        var k18_multi = 2;

        if (k18 >= 0 && k18_multi >= 0) {
            $scope.k18A9 = k18 * k18_multi;
            return k18 * k18_multi;
        }
    };

    $scope.d19_6 = function() {
        var d19 = $scope.d19;
        var d19_multi = 3;

        if (d19 >= 0 && d19_multi >= 0) {
            $scope.d19A6 = d19 * d19_multi;
            return d19 * d19_multi;
        }
    };

    $scope.d19_7 = function() {
        var d19 = $scope.d19;
        var d19_multi = 2;

        if (d19 >= 0 && d19_multi >= 0) {
            $scope.d19A7 = d19 * d19_multi;
            return d19 * d19_multi;
        }
    };

    $scope.d19_8 = function() {
        var d19 = $scope.d19;
        var d19_multi = 3;

        if (d19 >= 0 && d19_multi >= 0) {
            $scope.d19A8 = d19 * d19_multi;
            return d19 * d19_multi;
        }
    };

    $scope.d19_9 = function() {
        var d19 = $scope.d19;
        var d19_multi = 2;

        if (d19 >= 0 && d19_multi >= 0) {
            $scope.d19A9 = d19 * d19_multi;
            return d19 * d19_multi;
        }
    };

    $scope.h20_6 = function() {
        var h20 = $scope.h20;
        var h20_multi = 3;

        if (h20 >= 0 && h20_multi >= 0) {
            $scope.h20A6 = h20 * h20_multi;
            return h20 * h20_multi;
        }
    };

    $scope.h20_7 = function() {
        var h20 = $scope.h20;
        var h20_multi = 2;

        if (h20 >= 0 && h20_multi >= 0) {
            $scope.h20A7 = h20 * h20_multi;
            return h20 * h20_multi;
        }
    };

    $scope.h20_8 = function() {
        var h20 = $scope.h20;
        var h20_multi = 3;

        if (h20 >= 0 && h20_multi >= 0) {
            $scope.h20A8 = h20 * h20_multi;
            return h20 * h20_multi;
        }
    };

    $scope.h20_9 = function() {
        var h20 = $scope.h20;
        var h20_multi = 2;

        if (h20 >= 0 && h20_multi >= 0) {
            $scope.h20A9 = h20 * h20_multi;
            return h20 * h20_multi;
        }
    };

    $scope.kdh26_7 = function() {
        var kdh26 = $scope.kdh26;
        var kdh26_multi = 2;

        if (kdh26 >= 0 && kdh26_multi >= 0) {
            $scope.kdh26A7 = kdh26 * kdh26_multi;
            return kdh26 * kdh26_multi;
        }
    };

    $scope.kdh26_15 = function() {
        var kdh26 = $scope.kdh26;
        var kdh26_multi = 3;

        if (kdh26 >= 0 && kdh26_multi >= 0) {
            $scope.kdh26A15 = kdh26 * kdh26_multi;
            return kdh26 * kdh26_multi;
        }
    };

    $scope.k49_1 = function() {
        var k49 = $scope.k49;
        var k49_multi = 6;

        if (k49 >= 0 && k49_multi >= 0) {
            $scope.k49A1 = k49 * k49_multi;
            return k49 * k49_multi;
        }
    };

    $scope.d54_1 = function() {
        var d54 = $scope.d54;
        var d54_multi = 6;

        if (d54 >= 0 && d54_multi >= 0) {
            $scope.d54A1 = d54 * d54_multi;
            return d54 * d54_multi;
        }
    };

    $scope.h29_1 = function() {
        var h29 = $scope.h29;
        var h29_multi = 6;

        if (h29 >= 0 && h29_multi >= 0) {
            $scope.h29A1 = h29 * h29_multi;
            return h29 * h29_multi;
        }
    };

    $scope.k50_2 = function() {
        var k50 = $scope.k50;
        var k50_multi = 5;

        if (k50 >= 0 && k50_multi >= 0) {
            $scope.k50A2 = k50 * k50_multi;
            return k50 * k50_multi;
        }
    };

    $scope.d55_2 = function() {
        var d55 = $scope.d55;
        var d55_multi = 5;

        if (d55 >= 0 && d55_multi >= 0) {
            $scope.d55A2 = d55 * d55_multi;
            return d55 * d55_multi;
        }
    };

    $scope.h30_2 = function() {
        var h30 = $scope.h30;
        var h30_multi = 5;

        if (h30 >= 0 && h30_multi >= 0) {
            $scope.h30A2 = h30 * h30_multi;
            return h30 * h30_multi;
        }
    };

    $scope.k51_3 = function() {
        var k51 = $scope.k51;
        var k51_multi = 5;

        if (k51 >= 0 && k51_multi >= 0) {
            $scope.k51A3 = k51 * k51_multi;
            return k51 * k51_multi;
        }
    };

    $scope.d56_3 = function() {
        var d56 = $scope.d56;
        var d56_multi = 6;

        if (d56 >= 0 && d56_multi >= 0) {
            $scope.d56A3 = d56 * d56_multi;
            return d56 * d56_multi;
        }
    };

    $scope.h31_3 = function() {
        var h31 = $scope.h31;
        var h31_multi = 6;

        if (h31 >= 0 && h31_multi >= 0) {
            $scope.h31A3 = h31 * h31_multi;
            return h31 * h31_multi;
        }
    };

    $scope.k1_4 = function() {
        var k1 = $scope.k1;
        var k1_multi = 6;

        if (k1 >= 0 && k1_multi >= 0) {
            $scope.k1A4 = k1 * k1_multi;
            return k1 * k1_multi;
        }
    };

    $scope.d2_4 = function() {
        var d2 = $scope.d2;
        var d2_multi = 7;

        if (d2 >= 0 && d2_multi >= 0) {
            $scope.d2A4 = d2 * d2_multi;
            return d2 * d2_multi;
        }
    };

    $scope.h3_4 = function() {
        var h3 = $scope.h3;
        var h3_multi = 7;

        if (h3 >= 0 && h3_multi >= 0) {
            $scope.h3A4 = h3 * h3_multi;
            return h3 * h3_multi;
        }
    };
    $scope.kap1 = function() {
        if ($scope.k49A1 >= 0 && $scope.d54A1 >= 0 && $scope.h29A1 >= 0) {
            $scope.kapa1 = parseInt($scope.k49A1) + parseInt($scope.d54A1) + parseInt($scope.h29A1);
            return $scope.kapa1;
        }
    };

    $scope.kap2 = function() {
        if ($scope.k50A2 >= 0 && $scope.d55A2 >= 0 && $scope.h30A2 >= 0) {
            $scope.kapa2 = parseInt($scope.k50A2) + parseInt($scope.d55A2) + parseInt($scope.h30A2);
            return $scope.kapa2;
        }
    };

    $scope.kap3 = function() {
        if ($scope.k51A3 >= 0 && $scope.d56A3 >= 0 && $scope.h31A3 >= 0) {
            $scope.kapa3 = parseInt($scope.k51A3) + parseInt($scope.d56A3) + parseInt($scope.h31A3);
            return $scope.kapa3;
        }
    };

    $scope.kap4 = function() {
        if ($scope.k1A4 >= 0 && $scope.d2A4 >= 0 && $scope.h3A4 >= 0) {
            $scope.kapa4 = parseInt($scope.k1A4) + parseInt($scope.d2A4) + parseInt($scope.h3A4);
            return $scope.kapa4;
        }
    };

    $scope.kap6 = function() {
        if ($scope.kdh16A6 >= 0 && $scope.k18A6 >= 0 && $scope.d19A6 >= 0 && $scope.h20A6 >= 0) {
            $scope.kapa6 = parseInt($scope.kdh16A6) + parseInt($scope.k18A6) + parseInt($scope.d19A6) + parseInt($scope.h20A6);
            return $scope.kapa6;
        }
    };

    $scope.kap7 = function() {
        if ($scope.k10A7 >= 0 && $scope.d11A7 >= 0 && $scope.h12A7 >= 0 && $scope.k13A7 >= 0 && $scope.d14A7 >= 0 && $scope.h15A7 >= 0 && $scope.k18A7 >= 0 && $scope.d19A7 >= 0 && $scope.h20A7 >= 0 && $scope.kdh26A7 >= 0) {
            $scope.kapa7 = parseInt($scope.k10A7) + parseInt($scope.d11A7) + parseInt($scope.h12A7) + parseInt($scope.k13A7) + parseInt($scope.d14A7) + parseInt($scope.h15A7) + parseInt($scope.k18A7) + parseInt($scope.d19A7) + parseInt($scope.h20A7) + parseInt($scope.kdh26A7);
            return $scope.kapa7;
        }
    };

    $scope.kap8 = function() {
        if ($scope.k10A8 >= 0 && $scope.d11A8 >= 0 && $scope.h12A8 >= 0 && $scope.k13A8 >= 0 && $scope.d14A8 >= 0 && $scope.h15A8 >= 0 && $scope.k18A8 >= 0 && $scope.d19A8 >= 0 && $scope.h20A8 >= 0) {
            $scope.kapa8 = parseInt($scope.k10A8) + parseInt($scope.d11A8) + parseInt($scope.h12A8) + parseInt($scope.k13A8) + parseInt($scope.d14A8) + parseInt($scope.h15A8) + parseInt($scope.k18A8) + parseInt($scope.d19A8) + parseInt($scope.h20A8);
            return $scope.kapa8;
        }
    };

    $scope.kap9 = function() {
        if ($scope.k10A9 >= 0 && $scope.d11A9 >= 0 && $scope.h12A9 >= 0 && $scope.k13A9 >= 0 && $scope.d14A9 >= 0 && $scope.h15A9 >= 0 && $scope.k18A9 >= 0 && $scope.d19A9 >= 0 && $scope.h20A9 >= 0) {
            $scope.kapa9 = $scope.k10A9 + $scope.d11A9 + $scope.h12A9 + $scope.k13A9 + $scope.d14A9 + $scope.h15A9 + $scope.k18A9 + $scope.d19A9 + $scope.h20A9;
            return $scope.kapa9;
        }
    };

    $scope.kap10 = function() {
        if ($scope.k4A10 >= 0 && $scope.d5A10 >= 0 && $scope.h6A10 >= 0 && $scope.k7A10 >= 0 && $scope.d8A10 >= 0 && $scope.h9A10 >= 0) {
            $scope.kapa10 = parseInt($scope.k4A10) + parseInt($scope.d5A10) + parseInt($scope.h6A10) + parseInt($scope.k7A10) + parseInt($scope.d8A10) + parseInt($scope.h9A10);
            return $scope.kapa10;
        }
    };

    $scope.kap11 = function() {
        if ($scope.k4A11 >= 0 && $scope.d5A11 >= 0 && $scope.h6A11 >= 0 && $scope.k7A11 >= 0 && $scope.d8A11 >= 0 && $scope.h9A11 >= 0) {
            $scope.kapa11 = parseInt($scope.k4A11) + parseInt($scope.d5A11) + parseInt($scope.h6A11) + parseInt($scope.k7A11) + parseInt($scope.d8A11) + parseInt($scope.h9A11);
            return $scope.kapa11;
        }
    };

    $scope.kap12 = function() {
        if ($scope.k10A12 >= 0 && $scope.d11A12 >= 0 && $scope.h12A12 >= 0 && $scope.k13A12 >= 0 && $scope.d14A12 >= 0 && $scope.h15A12 >= 0) {
            $scope.kapa12 = parseInt($scope.k10A12) + parseInt($scope.d11A12) + parseInt($scope.h12A12) + parseInt($scope.k13A12) + parseInt($scope.d14A12) + parseInt($scope.h15A12);
            return $scope.kapa12;
        }
    };

    $scope.kap13 = function() {
        if ($scope.k10A13 >= 0 && $scope.d11A13 >= 0 && $scope.h12A13 >= 0 && $scope.k13A13 >= 0 && $scope.d14A13 >= 0 && $scope.h15A13 >= 0) {
            $scope.kapa13 = parseInt($scope.k10A13) + parseInt($scope.d11A13) + parseInt($scope.h12A13) + parseInt($scope.k13A13) + parseInt($scope.d14A13) + parseInt($scope.h15A13);
            return $scope.kapa13;
        }
    };

    $scope.kap14 = function() {
        if ($scope.kdh16A14 >= 0 ) {
            $scope.kapa14 = $scope.kdh16A14;
            return $scope.kapa14;
        }
    };

    $scope.kap15 = function() {
        if ($scope.kdh17A15 >= 0 && $scope.kdh26A15 >= 0) {
            $scope.kapa15 = parseInt($scope.kdh17A15) + parseInt($scope.kdh26A15);
            return $scope.kapa15;
        }
    };
    $scope.w1TimeNeedValue = function(){
        return (parseInt(sharedProperties.getW1TimeValue()) + parseInt(sharedProperties.getW1OrderTimeValue()));
    };
    $scope.w2TimeNeedValue = function(){
        return (parseInt(sharedProperties.getW2TimeValue()) + parseInt(sharedProperties.getW2OrderTimeValue()));
    };
    $scope.w3TimeNeedValue = function(){
        return (parseInt(sharedProperties.getW3TimeValue()) + parseInt(sharedProperties.getW3OrderTimeValue()));
    };
    $scope.w4TimeNeedValue = function(){
        return (parseInt(sharedProperties.getW4TimeValue()) + parseInt(sharedProperties.getW4OrderTimeValue()));
    };
    $scope.w6TimeNeedValue = function(){
        return (parseInt(sharedProperties.getW6TimeValue()) + parseInt(sharedProperties.getW6OrderTimeValue()));
    };
    $scope.w7TimeNeedValue = function(){
        return (parseInt(sharedProperties.getW7TimeValue()) + parseInt(sharedProperties.getW7OrderTimeValue()));
    };
    $scope.w8TimeNeedValue = function(){
        return (parseInt(sharedProperties.getW8TimeValue()) + parseInt(sharedProperties.getW8OrderTimeValue()));
    };
    $scope.w9TimeNeedValue = function(){
        return (parseInt(sharedProperties.getW9TimeValue()) + parseInt(sharedProperties.getW9OrderTimeValue()));
    };
    $scope.w10TimeNeedValue = function(){
        return (parseInt(sharedProperties.getW10TimeValue()) + parseInt(sharedProperties.getW10OrderTimeValue()));
    };
    $scope.w11TimeNeedValue = function(){
        return (parseInt(sharedProperties.getW11TimeValue()) + parseInt(sharedProperties.getW11OrderTimeValue()));
    };
    $scope.w12TimeNeedValue = function(){
        return (parseInt(sharedProperties.getW12TimeValue()) + parseInt(sharedProperties.getW12OrderTimeValue()));
    };
    $scope.w13TimeNeedValue = function(){
        return (parseInt(sharedProperties.getW13TimeValue()) + parseInt(sharedProperties.getW13OrderTimeValue()));
    };
    $scope.w14TimeNeedValue = function(){
        return (parseInt(sharedProperties.getW14TimeValue()) + parseInt(sharedProperties.getW14OrderTimeValue()));
    };
    $scope.w15TimeNeedValue = function(){
        return (parseInt(sharedProperties.getW15TimeValue()) + parseInt(sharedProperties.getW15OrderTimeValue()));
    };
    $scope.AltRueck1 = function() {
        return parseInt($scope.w1TimeNeedValue()/2400 * 60);
    };
    $scope.AltRueck2 = function() {
        return parseInt($scope.w2TimeNeedValue()/2400 * 80);
    };
    $scope.AltRueck3 = function() {
        return parseInt($scope.w3TimeNeedValue()/2400 * 60);
    };
    $scope.AltRueck4 = function() {
        return parseInt($scope.w4TimeNeedValue()/2400 * 80);
    };
    $scope.AltRueck6 = function() {
        return parseInt($scope.w6TimeNeedValue()/2400 * 60);
    };
    $scope.AltRueck7 = function() {
        return parseInt($scope.w7TimeNeedValue()/2400 * 200);
    };
    $scope.AltRueck8 = function() {
        return parseInt($scope.w8TimeNeedValue()/2400 * 135);
    };
    $scope.AltRueck9 = function() {
        return parseInt($scope.w9TimeNeedValue()/2400 * 135);
    };
    $scope.AltRueck10 = function() {
        return parseInt($scope.w10TimeNeedValue()/2400 * 120);
    };
    $scope.AltRueck11 = function() {
        return parseInt($scope.w11TimeNeedValue()/2400 * 120);
    };
    $scope.AltRueck12 = function() {
        return parseInt($scope.w12TimeNeedValue()/2400 * 0);
    };
    $scope.AltRueck13 = function() {
        return parseInt($scope.w13TimeNeedValue()/2400 * 0);
    };
    $scope.AltRueck14 = function() {
        return parseInt($scope.w14TimeNeedValue()/2400 * 0);
    };
    $scope.AltRueck15 = function() {
        return parseInt($scope.w15TimeNeedValue()/2400 * 30);
    };
    $scope.Rueck1 = function() {
        return parseInt($scope.kapa1/2400 * 60);
    };
    $scope.Rueck2 = function() {
        return parseInt($scope.kapa2/2400 * 80);
    };
    $scope.Rueck3 = function() {
        return parseInt($scope.kapa3/2400 * 60);
    };
    $scope.Rueck4 = function() {
        return parseInt($scope.kapa4/2400 * 80);
    };
    $scope.Rueck6 = function() {
        return parseInt($scope.kapa6/2400 * 60);
    };
    $scope.Rueck7 = function() {
        return parseInt($scope.kapa7/2400 * 200);
    };
    $scope.Rueck8 = function() {
        return parseInt($scope.kapa8/2400 * 135);
    };
    $scope.Rueck9 = function() {
        return parseInt($scope.kapa9/2400 * 135);
    };
    $scope.Rueck10 = function() {
        return parseInt($scope.kapa10/2400 * 120);
    };
    $scope.Rueck11 = function() {
        return parseInt($scope.kapa11/2400 * 120);
    };
    $scope.Rueck12 = function() {
        return parseInt($scope.kapa12/2400 * 0);
    };
    $scope.Rueck13 = function() {
        return parseInt($scope.kapa13/2400 * 0);
    };
    $scope.Rueck14 = function() {
        return parseInt($scope.kapa14/2400 * 0);
    };
    $scope.Rueck15 = function() {
        return parseInt($scope.kapa15/2400 * 30);
    };

    $scope.gesamtkap1 = function() {
        return parseInt($scope.kapa1) + parseInt($scope.Rueck1()) + parseInt(($scope.AltRueck1())) + parseInt($scope.w1TimeNeedValue());
    };

    $scope.gesamtkap2 = function() {
        return parseInt($scope.kapa2) + parseInt($scope.Rueck2()) + parseInt(($scope.AltRueck2())) + parseInt($scope.w2TimeNeedValue());
    };

    $scope.gesamtkap3 = function() {
        return parseInt($scope.kapa3) + parseInt($scope.Rueck3()) + parseInt(($scope.AltRueck3())) + parseInt($scope.w3TimeNeedValue());
    };

    $scope.gesamtkap4 = function() {
        return parseInt($scope.kapa4) + parseInt($scope.Rueck4()) + parseInt(($scope.AltRueck4())) + parseInt($scope.w4TimeNeedValue());
    };

    $scope.gesamtkap6 = function() {
        return parseInt($scope.kapa6) + parseInt($scope.Rueck6()) + parseInt(($scope.AltRueck6())) + parseInt($scope.w6TimeNeedValue());
    };

    $scope.gesamtkap7 = function() {
        return parseInt($scope.kapa7) + parseInt($scope.Rueck7()) + parseInt(($scope.AltRueck7())) + parseInt($scope.w7TimeNeedValue());
    };

    $scope.gesamtkap8 = function() {
        return parseInt($scope.kapa8) + parseInt($scope.Rueck8()) + parseInt(($scope.AltRueck8())) + parseInt($scope.w8TimeNeedValue());
    };

    $scope.gesamtkap9 = function() {
        return parseInt($scope.kapa9) + parseInt($scope.Rueck9()) + parseInt(($scope.AltRueck9())) + parseInt($scope.w9TimeNeedValue());
    };

    $scope.gesamtkap10 = function() {
        return parseInt($scope.kapa10) + parseInt($scope.Rueck10()) + parseInt(($scope.AltRueck10())) + parseInt($scope.w10TimeNeedValue());
    };

    $scope.gesamtkap11 = function() {
        return parseInt($scope.kapa11) + parseInt($scope.Rueck11()) + parseInt(($scope.AltRueck11())) + parseInt($scope.w11TimeNeedValue());
    };

    $scope.gesamtkap12 = function() {
        return parseInt($scope.kapa12) + parseInt($scope.Rueck12()) + parseInt(($scope.AltRueck12())) + parseInt($scope.w12TimeNeedValue());
    };

    $scope.gesamtkap13 = function() {
        return parseInt($scope.kapa13) + parseInt($scope.Rueck13()) + parseInt(($scope.AltRueck13())) + parseInt($scope.w13TimeNeedValue());
    };

    $scope.gesamtkap14 = function() {
        return parseInt($scope.kapa14) + parseInt($scope.Rueck14()) + parseInt(($scope.AltRueck14())) + parseInt($scope.w14TimeNeedValue());
    };

    $scope.gesamtkap15 = function() {
        return parseInt($scope.kapa15) + parseInt($scope.Rueck15()) + parseInt(($scope.AltRueck15())) + parseInt($scope.w15TimeNeedValue());
    };
    $scope.schichten1 = function() {
        var schicht =  $scope.gesamtkap1()/2400;
        if(schicht < 1) {
            $scope.schicht1 = 1;
            $scope.ueberstunden1 = 0;
        } else if (schicht > 1.5 && schicht < 2) {
            $scope.ueberstunden1 = 0;
            $scope.schicht1 = 2;
        } else if (schicht > 2.25 && schicht <= 3) {
            $scope.ueberstunden1 = 0;
            $scope.schicht1 = 3;
        } else if (schicht >= 3) {
            $scope.schicht1 = 3;
            $scope.ueberstunden1 = 0;
        }else {
            $scope.schicht1 = parseInt(schicht);
            $scope.ueberstunden1 = parseInt((parseFloat(schicht) - parseFloat($scope.schicht1)) * 2400/5);
        }
        sharedProperties.setSchicht1Value($scope.schicht1);
        sharedProperties.setUeberstunden1Value($scope.ueberstunden1);
        return ($scope.schicht1.toString() + "/" + $scope.ueberstunden1.toString());
    };
    $scope.schichten2 = function() {
        var schicht =  $scope.gesamtkap2()/2400;
        if(schicht < 1) {
            $scope.schicht2 = 1;
            $scope.ueberstunden2 = 0;
        } else if (schicht > 1.5 && schicht < 2) {
            $scope.ueberstunden2 = 0;
            $scope.schicht2 = 2;
        } else if (schicht > 2.25 && schicht < 3) {
            $scope.ueberstunden2 = 0;
            $scope.schicht2 = 3;
        } else if (schicht >= 3) {
            $scope.schicht2 = 3;
            $scope.ueberstunden2 = 0;
        }else {
            $scope.schicht2 = parseInt(schicht);
            $scope.ueberstunden2 = parseInt((parseFloat(schicht) - parseFloat($scope.schicht2)) * 2400/5);
        }
        sharedProperties.setSchicht2Value($scope.schicht2);
        sharedProperties.setUeberstunden2Value($scope.ueberstunden2);
        return ($scope.schicht2.toString() + "/" + $scope.ueberstunden2.toString());
    };
    $scope.schichten3 = function() {
        var schicht =  $scope.gesamtkap3()/2400;
        if(schicht < 1) {
            $scope.schicht3 = 1;
            $scope.ueberstunden3 = 0;
        } else if (schicht > 1.5 && schicht < 2) {
            $scope.ueberstunden3 = 0;
            $scope.schicht3 = 2;
        } else if (schicht > 2.25 && schicht <= 3) {
            $scope.ueberstunden3 = 0;
            $scope.schicht3 = 3;
        } else if (schicht >= 3) {
            $scope.schicht3 = 3;
            $scope.ueberstunden3 = 0;
        }else {
            $scope.schicht3 = parseInt(schicht);
            $scope.ueberstunden3 = parseInt((parseFloat(schicht) - parseFloat($scope.schicht3)) * 2400/5);
        }
        sharedProperties.setSchicht3Value($scope.schicht3);
        sharedProperties.setUeberstunden3Value($scope.ueberstunden3);
        return ($scope.schicht3.toString() + "/" + $scope.ueberstunden3.toString());
    };
    $scope.schichten4 = function() {
        var schicht =  $scope.gesamtkap4()/2400;
        if(schicht < 1) {
            $scope.schicht4 = 1;
            $scope.ueberstunden4 = 0;
        } else if (schicht > 1.5 && schicht < 2) {
            $scope.ueberstunden4 = 0;
            $scope.schicht4 = 2;
        } else if (schicht > 2.25 && schicht <= 3) {
            $scope.ueberstunden4 = 0;
            $scope.schicht4 = 3;
        } else if (schicht >= 3) {
            $scope.schicht4 = 3;
            $scope.ueberstunden4 = 0;
        }else {
            $scope.schicht4 = parseInt(schicht);
            $scope.ueberstunden4 = parseInt((parseFloat(schicht) - parseFloat($scope.schicht4)) * 2400/5);
        }
        sharedProperties.setSchicht4Value($scope.schicht4);
        sharedProperties.setUeberstunden4Value($scope.ueberstunden4);
        return ($scope.schicht4.toString() + "/" + $scope.ueberstunden4.toString());
    };
    $scope.schichten6 = function() {
        var schicht =  $scope.gesamtkap6()/2400;
        if(schicht < 1) {
            $scope.schicht6 = 1;
            $scope.ueberstunden6 = 0;
        } else if (schicht > 1.5 && schicht < 2) {
            $scope.ueberstunden6 = 0;
            $scope.schicht6 = 2;
        } else if (schicht > 2.25 && schicht <= 3) {
            $scope.ueberstunden6 = 0;
            $scope.schicht6 = 3;
        } else if (schicht >= 3) {
            $scope.schicht6 = 3;
            $scope.ueberstunden6 = 0;
        }else {
            $scope.schicht6 = parseInt(schicht);
            $scope.ueberstunden6 = parseInt((parseFloat(schicht) - parseFloat($scope.schicht6)) * 2400/5);
        }
        sharedProperties.setSchicht6Value($scope.schicht6);
        sharedProperties.setUeberstunden6Value($scope.ueberstunden6);
        return ($scope.schicht6.toString() + "/" + $scope.ueberstunden6.toString());
    };
    $scope.schichten7 = function() {
        var schicht =  $scope.gesamtkap7()/2400;
        if(schicht < 1) {
            $scope.schicht7 = 1;
            $scope.ueberstunden7 = 0;
        } else if (schicht > 1.5 && schicht < 2) {
            $scope.ueberstunden7 = 0;
            $scope.schicht7 = 2;
        } else if (schicht > 2.25 && schicht <= 3) {
            $scope.ueberstunden7 = 0;
            $scope.schicht7 = 3;
        } else if (schicht >= 3) {
            $scope.schicht7 = 3;
            $scope.ueberstunden7 = 0;
        }else {
            $scope.schicht7 = parseInt(schicht);
            $scope.ueberstunden7 = parseInt((parseFloat(schicht) - parseFloat($scope.schicht7)) * 2400/5);
        }
        sharedProperties.setSchicht7Value($scope.schicht7);
        sharedProperties.setUeberstunden7Value($scope.ueberstunden7);
        return ($scope.schicht7.toString() + "/" + $scope.ueberstunden7.toString());
    };
    $scope.schichten8 = function() {
        var schicht =  $scope.gesamtkap8()/2400;
        if(schicht < 1) {
            $scope.schicht8 = 1;
            $scope.ueberstunden8 = 0;
        } else if (schicht > 1.5 && schicht < 2) {
            $scope.ueberstunden8 = 0;
            $scope.schicht8 = 2;
        } else if (schicht > 2.25 && schicht <= 3) {
            $scope.ueberstunden8 = 0;
            $scope.schicht8 = 3;
        } else if (schicht >= 3) {
            $scope.schicht8 = 3;
            $scope.ueberstunden8 = 0;
        }else {
            $scope.schicht8 = parseInt(schicht);
            $scope.ueberstunden8 = parseInt((parseFloat(schicht) - parseFloat($scope.schicht8)) * 2400/5);
        }
        sharedProperties.setSchicht8Value($scope.schicht8);
        sharedProperties.setUeberstunden8Value($scope.ueberstunden8);
        return ($scope.schicht8.toString() + "/" + $scope.ueberstunden8.toString());
    };
    $scope.schichten9 = function() {
        var schicht =  $scope.gesamtkap9()/2400;
        if(schicht < 1) {
            $scope.schicht9 = 1;
            $scope.ueberstunden9 = 0;
        } else if (schicht > 1.5 && schicht < 2) {
            $scope.ueberstunden9 = 0;
            $scope.schicht9 = 2;
        } else if (schicht > 2.25 && schicht <= 3) {
            $scope.ueberstunden9 = 0;
            $scope.schicht9 = 3;
        } else if (schicht >= 3) {
            $scope.schicht9 = 3;
            $scope.ueberstunden9 = 0;
        }else {
            $scope.schicht9 = parseInt(schicht);
            $scope.ueberstunden9 = parseInt((parseFloat(schicht) - parseFloat($scope.schicht9)) * 2400/5);
        }
        sharedProperties.setSchicht9Value($scope.schicht9);
        sharedProperties.setUeberstunden9Value($scope.ueberstunden9);
        return ($scope.schicht9.toString() + "/" + $scope.ueberstunden9.toString());
    };
    $scope.schichten10 = function() {
        var schicht =  $scope.gesamtkap10()/2400;
        if(schicht < 1) {
            $scope.schicht10 = 1;
            $scope.ueberstunden10 = 0;
        } else if (schicht > 1.5 && schicht < 2) {
            $scope.ueberstunden10 = 0;
            $scope.schicht10 = 2;
        } else if (schicht > 2.25 && schicht <= 3) {
            $scope.ueberstunden10 = 0;
            $scope.schicht10 = 3;
        } else if (schicht >= 3) {
            $scope.schicht10 = 3;
            $scope.ueberstunden10 = 0;
        }else {
            $scope.schicht10 = parseInt(schicht);
            $scope.ueberstunden10 = parseInt((parseFloat(schicht) - parseFloat($scope.schicht10)) * 2400/5);
        }
        sharedProperties.setSchicht10Value($scope.schicht10);
        sharedProperties.setUeberstunden10Value($scope.ueberstunden10);
        return ($scope.schicht10.toString() + "/" + $scope.ueberstunden10.toString());
    };
    $scope.schichten11 = function() {
        var schicht =  $scope.gesamtkap11()/2400;
        if(schicht < 1) {
            $scope.schicht11 = 1;
            $scope.ueberstunden11 = 0;
        } else if (schicht > 1.5 && schicht < 2) {
            $scope.ueberstunden11 = 0;
            $scope.schicht11 = 2;
        } else if (schicht > 2.25 && schicht <= 3) {
            $scope.ueberstunden11 = 0;
            $scope.schicht11 = 3;
        } else if (schicht >= 3) {
            $scope.schicht11 = 3;
            $scope.ueberstunden11 = 0;
        }else {
            $scope.schicht11 = parseInt(schicht);
            $scope.ueberstunden11 = parseInt((parseFloat(schicht) - parseFloat($scope.schicht11)) * 2400/5);
        }
        sharedProperties.setSchicht11Value($scope.schicht11);
        sharedProperties.setUeberstunden11Value($scope.ueberstunden11);
        return ($scope.schicht11.toString() + "/" + $scope.ueberstunden11.toString());
    };
    $scope.schichten12 = function() {
        var schicht =  $scope.gesamtkap12()/2400;
        if(schicht < 1) {
            $scope.schicht12 = 1;
            $scope.ueberstunden12 = 0;
        } else if (schicht > 1.5 && schicht < 2) {
            $scope.ueberstunden12 = 0;
            $scope.schicht12 = 2;
        } else if (schicht > 2.25 && schicht <= 3) {
            $scope.ueberstunden12 = 0;
            $scope.schicht12 = 3;
        } else if (schicht >= 3) {
            $scope.schicht12 = 3;
            $scope.ueberstunden12 = 0;
        }else {
            $scope.schicht12 = parseInt(schicht);
            $scope.ueberstunden12 = parseInt((parseFloat(schicht) - parseFloat($scope.schicht12)) * 2400/5);
        }
        sharedProperties.setSchicht12Value($scope.schicht12);
        sharedProperties.setUeberstunden12Value($scope.ueberstunden12);
        return ($scope.schicht12.toString() + "/" + $scope.ueberstunden12.toString());
    };
    $scope.schichten13 = function() {
        var schicht =  $scope.gesamtkap13()/2400;
        if(schicht < 1) {
            $scope.schicht13 = 1;
            $scope.ueberstunden13 = 0;
        } else if (schicht > 1.5 && schicht < 2) {
            $scope.ueberstunden13 = 0;
            $scope.schicht13 = 2;
        } else if (schicht > 2.25 && schicht <= 3) {
            $scope.ueberstunden13 = 0;
            $scope.schicht13 = 3;
        } else if (schicht >= 3) {
            $scope.schicht13 = 3;
            $scope.ueberstunden13 = 0;
        }else {
            $scope.schicht13 = parseInt(schicht);
            $scope.ueberstunden13 = parseInt((parseFloat(schicht) - parseFloat($scope.schicht13)) * 2400/5);
        }
        sharedProperties.setSchicht13Value($scope.schicht13);
        sharedProperties.setUeberstunden13Value($scope.ueberstunden13);
        return ($scope.schicht13.toString() + "/" + $scope.ueberstunden13.toString());
    };
    $scope.schichten14 = function() {
        var schicht =  $scope.gesamtkap14()/2400;
        if(schicht < 1) {
            $scope.schicht14 = 1;
            $scope.ueberstunden14 = 0;
        } else if (schicht > 1.5 && schicht < 2) {
            $scope.ueberstunden14 = 0;
            $scope.schicht14 = 2;
        } else if (schicht > 2.25 && schicht <= 3) {
            $scope.ueberstunden14 = 0;
            $scope.schicht14 = 3;
        }  else if (schicht >= 3) {
            $scope.schicht14 = 3;
            $scope.ueberstunden14 = 0;
        }
        else
         {
            $scope.schicht14 = parseInt(schicht);
            $scope.ueberstunden14 = parseInt((parseFloat(schicht) - parseFloat($scope.schicht14)) * 2400/5);
        }
        sharedProperties.setSchicht14Value($scope.schicht14);
        sharedProperties.setUeberstunden14Value($scope.ueberstunden14);
        return ($scope.schicht14.toString() + "/" + $scope.ueberstunden14.toString());
    };
    $scope.schichten15 = function() {
        var schicht =  $scope.gesamtkap15()/2400;
        if(schicht < 1) {
            $scope.schicht15 = 1;
            $scope.ueberstunden15 = 0;
        } else if (schicht > 1.5 && schicht < 2) {
            $scope.ueberstunden15 = 0;
            $scope.schicht15 = 2;
        } else if (schicht > 2.25 && schicht <= 3) {
            $scope.ueberstunden15 = 0;
            $scope.schicht15 = 3;
        } else if (schicht >= 3) {
            $scope.schicht15 = 3;
            $scope.ueberstunden15 = 0;
        }else {
            $scope.schicht15 = parseInt(schicht);
            $scope.ueberstunden15 = parseInt((parseFloat(schicht) - parseFloat($scope.schicht15)) * 2400/5);
        }
        sharedProperties.setSchicht15Value($scope.schicht15);
        sharedProperties.setUeberstunden15Value($scope.ueberstunden15);
        return ($scope.schicht15.toString() + "/" + $scope.ueberstunden15.toString());
    };

    $scope.arbeitsplatz = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Arbeitsplatz";
        } else {
            return "Workplace";
        }
    };
    $scope.auftragsmenge = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Auftragsmenge";
        } else {
            return "Orderquantity";
        }
    };
    $scope.kategorie = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Kategorie";
        } else {
            return "Category";
        }
    };
    $scope.bezeichnung = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Bezeichnung";
        } else {
            return "Description";
        }
    };
    $scope.hinterrad = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Hinterrad";
        } else {
            return "Rear wheel";
        }
    };
    $scope.vorderrad = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Vorderrad";
        } else {
            return "Front wheel";
        }
    };
    $scope.schutzblechhinten = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Schutzblech hinten";
        } else {
            return "Mudguard rear";
        }
    };
    $scope.schutzblechvorne = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Schutzblech vorne";
        } else {
            return "Mudguard front";
        }
    };
    $scope.lenker = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Lenker";
        } else {
            return "Handle bar";
        }
    };
    $scope.sattel = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Sattel";
        } else {
            return "Seat";
        }
    };
    $scope.rahmen = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Rahmen";
        } else {
            return "Frame";
        }
    };
    $scope.pedale = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Pedale";
        } else {
            return "Pedal";
        }
    };
    $scope.vorderradkomplett = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Vorderrad komplett";
        } else {
            return "Front wheel complete";
        }
    };
    $scope.rahmenundraeder = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Rahmen und Räder";
        } else {
            return "Frame and wheels";
        }
    };
    $scope.fahrradohnepedale = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Fahrrad ohne Pedale";
        } else {
            return "Bicycle w/o pedal";
        }
    };
    $scope.fahrradkomplett = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Fahrrad komplett";
        } else {
            return "Bicycle complete"
        }
    };
    $scope.kapazitaetneu = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Kapazitätsbedarf (neu)";
        } else {
            return "Capacity requirements (new)"
        }
    };
    $scope.ruestzeitneu = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Rüstzeit (neu)";
        } else {
            return "Setup time (new)"
        }
    };
    $scope.kapazitaetalt = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Kapazitätsbedarf (Rückstand)";
        } else {
            return "Cap.req. (backlog prev. periods)"
        }
    };
    $scope.ruestzeitalt = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Rüstzeit (Rückstand)";
        } else {
            return "Setup time (backlog prev. periods)"
        }
    };
    $scope.total = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Gesamtkapazitätsbedarf";
        } else {
            return "Total capacity requirements"
        }
    };
    $scope.schichten = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Schichten und Überstunden";
        } else {
            return "Shifts and Overtime "
        }
    };
} );