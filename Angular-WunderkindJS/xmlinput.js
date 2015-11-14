ppsApp.controller('xmlController', function ($scope, sharedProperties, $compile) {
    $scope.options = [{name: "normal", id: 2}, {name: "fast", id: 1}];
    $scope.add = function(){
        var f = document.getElementById('file').files[0],
            r = new FileReader();
        r.onloadend = function(e){
            $scope.xmlinput = e.target.result;
            $scope.onButtonImport();
        }
        r.readAsBinaryString(f);
    };
    $scope.calculate = function() {
        $scope.p1InputValue = sharedProperties.getP1AbsatzValue();
        $scope.p2InputValue = sharedProperties.getP2AbsatzValue();
        $scope.p3InputValue = sharedProperties.getP3AbsatzValue();
        $scope.p1DirektMengeValue = sharedProperties.getp1Direktverkauf();
        $scope.p1DirektPreisValue = 0;
        $scope.p1DirektKonvetionalstrafeValue = 0;
        $scope.p2DirektMengeValue = sharedProperties.getp2Direktverkauf();
        $scope.p2DirektPreisValue = 0;
        $scope.p2DirektKonvetionalstrafeValue = 0;
        $scope.p3DirektMengeValue = sharedProperties.getp3Direktverkauf();
        $scope.p3DirektPreisValue = 0;
        $scope.p3DirektKonvetionalstrafeValue = 0;
        $scope.fa1InputValue = "4";
        $scope.fq1InputValue = sharedProperties.getE4Value();
        $scope.fa2InputValue = "5";
        $scope.fq2InputValue = sharedProperties.getE5Value();
        $scope.fa3InputValue = "6";
        $scope.fq3InputValue = sharedProperties.getE6Value();
        $scope.fa4InputValue = "7";
        $scope.fq4InputValue = sharedProperties.getE7Value();
        $scope.fa5InputValue = "8";
        $scope.fq5InputValue = sharedProperties.getE8Value();
        $scope.fa6InputValue = "9";
        $scope.fq6InputValue = sharedProperties.getE9Value();
        $scope.fa7InputValue = "10";
        $scope.fq7InputValue = sharedProperties.getE10Value();
        $scope.fa8InputValue = "11";
        $scope.fq8InputValue = sharedProperties.getE11Value();
        $scope.fa9InputValue = "12";
        $scope.fq9InputValue = sharedProperties.getE12Value();
        $scope.fa10InputValue = "13";
        $scope.fq10InputValue = sharedProperties.getE13Value();
        $scope.fa11InputValue = "14";
        $scope.fq11InputValue = sharedProperties.getE14Value();
        $scope.fa12InputValue = "15";
        $scope.fq12InputValue = sharedProperties.getE15Value();
        $scope.fa13InputValue = "16";
        $scope.fq13InputValue = sharedProperties.getKDH16Value();
        $scope.fa14InputValue = "17";
        $scope.fq14InputValue = sharedProperties.getKDH17Value();
        $scope.fa15InputValue = "18";
        $scope.fq15InputValue = sharedProperties.getE18Value();
        $scope.fa16InputValue = "19";
        $scope.fq16InputValue = sharedProperties.getE19Value();
        $scope.fa17InputValue = "20";
        $scope.fq17InputValue = sharedProperties.getE20Value();
        $scope.fa18InputValue = "26";
        $scope.fq18InputValue = sharedProperties.getKDH26Value();
        $scope.fa19InputValue = "49";
        $scope.fq19InputValue = sharedProperties.getE49Value();
        $scope.fa20InputValue = "54";
        $scope.fq20InputValue = sharedProperties.getE54Value();
        $scope.fa21InputValue = "29";
        $scope.fq21InputValue = sharedProperties.getE29Value();
        $scope.fa22InputValue = "50";
        $scope.fq22InputValue = sharedProperties.getE50Value();
        $scope.fa23InputValue = "55";
        $scope.fq23InputValue = sharedProperties.getE55Value();
        $scope.fa24InputValue = "30";
        $scope.fq24InputValue = sharedProperties.getE30Value();
        $scope.fa25InputValue = "51";
        $scope.fq25InputValue = sharedProperties.getE51Value();
        $scope.fa26InputValue = "56";
        $scope.fq26InputValue = sharedProperties.getE56Value();
        $scope.fa27InputValue = "31";
        $scope.fq27InputValue = sharedProperties.getE31Value();
        $scope.fa28InputValue = "1";
        $scope.fq28InputValue = sharedProperties.getP1Value();
        $scope.fa29InputValue = "2";
        $scope.fq29InputValue = sharedProperties.getP2Value();
        $scope.fa30InputValue = "3";
        $scope.fq30InputValue = sharedProperties.getP3Value();
        $scope.fa31InputValue = null;
        $scope.fq31InputValue = null;
        $scope.fa32InputValue = null;
        $scope.fq32InputValue = null;
        $scope.fa33InputValue = null;
        $scope.fq33InputValue = null;
        $scope.fa34InputValue = null;
        $scope.fq34InputValue = null;
        $scope.fa35InputValue = null;
        $scope.fq35InputValue = null;
        $scope.fa36InputValue = null;
        $scope.fq36InputValue = null;
        $scope.fa37InputValue = null;
        $scope.fq37InputValue = null;
        $scope.fa38InputValue = null;
        $scope.fq38InputValue = null;
        $scope.fa39InputValue = null;
        $scope.fq39InputValue = null;
        $scope.fa40InputValue = null;
        $scope.fq40InputValue = null;
        $scope.fa41InputValue = null;
        $scope.fq41InputValue = null;
        $scope.fa42InputValue = null;
        $scope.fq42InputValue = null;
        $scope.fa43InputValue = null;
        $scope.fq43InputValue = null;
        $scope.fa44InputValue = null;
        $scope.fq44InputValue = null;
        $scope.fa45InputValue = null;
        $scope.fq45InputValue = null;
        $scope.fa46InputValue = null;
        $scope.fq46InputValue = null;
        $scope.fa47InputValue = null;
        $scope.fq47InputValue = null;
        $scope.fa48InputValue = null;
        $scope.fq48InputValue = null;
        $scope.fa49InputValue = null;
        $scope.fq49InputValue = null;
        $scope.fa50InputValue = null;
        $scope.fq50InputValue = null;
        $scope.fa51InputValue = null;
        $scope.fq51InputValue = null;
        $scope.fa52InputValue = null;
        $scope.fq52InputValue = null;
        $scope.fa53InputValue = null;
        $scope.fq53InputValue = null;
        $scope.fa54InputValue = null;
        $scope.fq54InputValue = null;
        $scope.fa55InputValue = null;
        $scope.fq55InputValue = null;
        $scope.fa56InputValue = null;
        $scope.fq56InputValue = null;
        $scope.fa57InputValue = null;
        $scope.fq57InputValue = null;
        $scope.fa58InputValue = null;
        $scope.fq58InputValue = null;
        $scope.fa59InputValue = null;
        $scope.fq59InputValue = null;
        $scope.fa60InputValue = null;
        $scope.fq60InputValue = null;
        var i = 0;
        $scope.options = [{name: "normal", id: 2}, {name: "fast", id: 1}];
        if (sharedProperties.getK21BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "21";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK21BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK21BestellungMode()];
            i++;
        }
        if (sharedProperties.getK22BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "22";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK22BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK22BestellungMode()];
            i++;
        }
        if (sharedProperties.getK23BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "23";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK23BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK23BestellungMode()];
            i++;
        }
        if (sharedProperties.getK24BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "24";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK24BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK24BestellungMode()];
            i++;
        }
        if (sharedProperties.getK25BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "25";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK25BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK25BestellungMode()];
            i++;
        }
        if (sharedProperties.getK27BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "27";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK27BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK27BestellungMode()];
            i++;
        }
        if (sharedProperties.getK28BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "28";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK28BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK28BestellungMode()];
            i++;
        }
        if (sharedProperties.getK32BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "32";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK32BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK32BestellungMode()];
            i++;
        }
        if (sharedProperties.getK33BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "33";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK33BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK33BestellungMode()];
            i++;
        }
        if (sharedProperties.getK34BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "34";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK34BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK34BestellungMode()];
            i++;
        }
        if (sharedProperties.getK35BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "35";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK35BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK35BestellungMode()];
            i++;
        }
        if (sharedProperties.getK36BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "36";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK36BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK36BestellungMode()];
            i++;
        }
        if (sharedProperties.getK37BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "37";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK37BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK37BestellungMode()];
            i++;
        }
        if (sharedProperties.getK38BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "38";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK38BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK38BestellungMode()];
            i++;
        }
        if (sharedProperties.getK39BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "39";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK39BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK39BestellungMode()];
            i++;
        }
        if (sharedProperties.getK40BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "40";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK40BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK40BestellungMode()];
            i++;
        }
        if (sharedProperties.getK41BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "41";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK41BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK41BestellungMode()];
            i++;
        }
        if (sharedProperties.getK42BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "42";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK42BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK42BestellungMode()];
            i++;
        }
        if (sharedProperties.getK43BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "43";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK43BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK43BestellungMode()];
            i++;
        }
        if (sharedProperties.getK44BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "44";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK44BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK44BestellungMode()];
            i++;
        }
        if (sharedProperties.getK45BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "45";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK45BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK45BestellungMode()];
            i++;
        }
        if (sharedProperties.getK46BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "46";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK46BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK46BestellungMode()];
            i++;
        }
        if (sharedProperties.getK47BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "47";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK47BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK47BestellungMode()];
            i++;
        }
        if (sharedProperties.getK48BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "48";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK48BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK48BestellungMode()];
            i++;
        }
        if (sharedProperties.getK52BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "52";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK52BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK52BestellungMode()];
            i++;
        }
        if (sharedProperties.getK53BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "53";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK53BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK53BestellungMode()];
            i++;
        }
        if (sharedProperties.getK57BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "57";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK57BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK57BestellungMode()];
            i++;
        }
        if (sharedProperties.getK58BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "58";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK58BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK58BestellungMode()];
            i++;
        }
        if (sharedProperties.getK59BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "59";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK59BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK59BestellungMode()];
            i++;
        }
        $scope.schichtarbeitsplatz1 = sharedProperties.getSchicht1Value();
        $scope.schichtarbeitsplatz2 = sharedProperties.getSchicht2Value();
        $scope.schichtarbeitsplatz3 = sharedProperties.getSchicht3Value();
        $scope.schichtarbeitsplatz4 = sharedProperties.getSchicht4Value();
        $scope.schichtarbeitsplatz5 = 0;
        $scope.schichtarbeitsplatz6 = sharedProperties.getSchicht6Value();
        $scope.schichtarbeitsplatz7 = sharedProperties.getSchicht7Value();
        $scope.schichtarbeitsplatz8 = sharedProperties.getSchicht8Value();
        $scope.schichtarbeitsplatz9 = sharedProperties.getSchicht9Value();
        $scope.schichtarbeitsplatz10 = sharedProperties.getSchicht10Value();
        $scope.schichtarbeitsplatz11 = sharedProperties.getSchicht11Value();
        $scope.schichtarbeitsplatz12 = sharedProperties.getSchicht12Value();
        $scope.schichtarbeitsplatz13 = sharedProperties.getSchicht13Value();
        $scope.schichtarbeitsplatz14 = sharedProperties.getSchicht14Value();
        $scope.schichtarbeitsplatz15 = sharedProperties.getSchicht15Value();
        $scope.ueberstundenarbeitsplatz1 = sharedProperties.getUeberstunden1Value();
        $scope.ueberstundenarbeitsplatz2 = sharedProperties.getUeberstunden2Value();
        $scope.ueberstundenarbeitsplatz3 = sharedProperties.getUeberstunden3Value();
        $scope.ueberstundenarbeitsplatz4 = sharedProperties.getUeberstunden4Value();
        $scope.ueberstundenarbeitsplatz5 = 0;
        $scope.ueberstundenarbeitsplatz6 = sharedProperties.getUeberstunden6Value();
        $scope.ueberstundenarbeitsplatz7 = sharedProperties.getUeberstunden7Value();
        $scope.ueberstundenarbeitsplatz8 = sharedProperties.getUeberstunden8Value();
        $scope.ueberstundenarbeitsplatz9 = sharedProperties.getUeberstunden9Value();
        $scope.ueberstundenarbeitsplatz10 = sharedProperties.getUeberstunden10Value();
        $scope.ueberstundenarbeitsplatz11 = sharedProperties.getUeberstunden11Value();
        $scope.ueberstundenarbeitsplatz12 = sharedProperties.getUeberstunden12Value();
        $scope.ueberstundenarbeitsplatz13 = sharedProperties.getUeberstunden13Value();
        $scope.ueberstundenarbeitsplatz14 = sharedProperties.getUeberstunden14Value();
        $scope.ueberstundenarbeitsplatz15 = sharedProperties.getUeberstunden15Value();
        sharedProperties.setFirstUpdateValue(1);
    };
    $scope.onButtonImport = function () {
        $scope.result = x2js.xml_str2json($scope.xmlinput);
        sharedProperties.resetValues();
        sharedProperties.setPeriodValue($scope.result.results._period);
        sharedProperties.setP1IstLagerbestandValue($scope.result.results.warehousestock.article['0']._amount);
        sharedProperties.setP2IstLagerbestandValue($scope.result.results.warehousestock.article['1']._amount);
        sharedProperties.setP3IstLagerbestandValue($scope.result.results.warehousestock.article['2']._amount);
        sharedProperties.setE4IstLagerbestandValue($scope.result.results.warehousestock.article['3']._amount);
        sharedProperties.setE5IstLagerbestandValue($scope.result.results.warehousestock.article['4']._amount);
        sharedProperties.setE6IstLagerbestandValue($scope.result.results.warehousestock.article['5']._amount);
        sharedProperties.setE7IstLagerbestandValue($scope.result.results.warehousestock.article['6']._amount);
        sharedProperties.setE8IstLagerbestandValue($scope.result.results.warehousestock.article['7']._amount);
        sharedProperties.setE9IstLagerbestandValue($scope.result.results.warehousestock.article['8']._amount);
        sharedProperties.setE10IstLagerbestandValue($scope.result.results.warehousestock.article['9']._amount);
        sharedProperties.setE11IstLagerbestandValue($scope.result.results.warehousestock.article['10']._amount);
        sharedProperties.setE12IstLagerbestandValue($scope.result.results.warehousestock.article['11']._amount);
        sharedProperties.setE13IstLagerbestandValue($scope.result.results.warehousestock.article['12']._amount);
        sharedProperties.setE14IstLagerbestandValue($scope.result.results.warehousestock.article['13']._amount);
        sharedProperties.setE15IstLagerbestandValue($scope.result.results.warehousestock.article['14']._amount);
        sharedProperties.setE16IstLagerbestandValue($scope.result.results.warehousestock.article['15']._amount);
        sharedProperties.setE17IstLagerbestandValue($scope.result.results.warehousestock.article['16']._amount);
        sharedProperties.setE18IstLagerbestandValue($scope.result.results.warehousestock.article['17']._amount);
        sharedProperties.setE19IstLagerbestandValue($scope.result.results.warehousestock.article['18']._amount);
        sharedProperties.setE20IstLagerbestandValue($scope.result.results.warehousestock.article['19']._amount);
        sharedProperties.setK21IstLagerbestandValue($scope.result.results.warehousestock.article['20']._amount);
        sharedProperties.setK22IstLagerbestandValue($scope.result.results.warehousestock.article['21']._amount);
        sharedProperties.setK23IstLagerbestandValue($scope.result.results.warehousestock.article['22']._amount);
        sharedProperties.setK24IstLagerbestandValue($scope.result.results.warehousestock.article['23']._amount);
        sharedProperties.setK25IstLagerbestandValue($scope.result.results.warehousestock.article['24']._amount);
        sharedProperties.setE26IstLagerbestandValue($scope.result.results.warehousestock.article['25']._amount);
        sharedProperties.setK27IstLagerbestandValue($scope.result.results.warehousestock.article['26']._amount);
        sharedProperties.setK28IstLagerbestandValue($scope.result.results.warehousestock.article['27']._amount);
        sharedProperties.setE29IstLagerbestandValue($scope.result.results.warehousestock.article['28']._amount);
        sharedProperties.setE30IstLagerbestandValue($scope.result.results.warehousestock.article['29']._amount);
        sharedProperties.setE31IstLagerbestandValue($scope.result.results.warehousestock.article['30']._amount);
        sharedProperties.setK32IstLagerbestandValue($scope.result.results.warehousestock.article['31']._amount);
        sharedProperties.setK33IstLagerbestandValue($scope.result.results.warehousestock.article['32']._amount);
        sharedProperties.setK34IstLagerbestandValue($scope.result.results.warehousestock.article['33']._amount);
        sharedProperties.setK35IstLagerbestandValue($scope.result.results.warehousestock.article['34']._amount);
        sharedProperties.setK36IstLagerbestandValue($scope.result.results.warehousestock.article['35']._amount);
        sharedProperties.setK37IstLagerbestandValue($scope.result.results.warehousestock.article['36']._amount);
        sharedProperties.setK38IstLagerbestandValue($scope.result.results.warehousestock.article['37']._amount);
        sharedProperties.setK39IstLagerbestandValue($scope.result.results.warehousestock.article['38']._amount);
        sharedProperties.setK40IstLagerbestandValue($scope.result.results.warehousestock.article['39']._amount);
        sharedProperties.setK41IstLagerbestandValue($scope.result.results.warehousestock.article['40']._amount);
        sharedProperties.setK42IstLagerbestandValue($scope.result.results.warehousestock.article['41']._amount);
        sharedProperties.setK43IstLagerbestandValue($scope.result.results.warehousestock.article['42']._amount);
        sharedProperties.setK44IstLagerbestandValue($scope.result.results.warehousestock.article['43']._amount);
        sharedProperties.setK45IstLagerbestandValue($scope.result.results.warehousestock.article['44']._amount);
        sharedProperties.setK46IstLagerbestandValue($scope.result.results.warehousestock.article['45']._amount);
        sharedProperties.setK47IstLagerbestandValue($scope.result.results.warehousestock.article['46']._amount);
        sharedProperties.setK48IstLagerbestandValue($scope.result.results.warehousestock.article['47']._amount);
        sharedProperties.setE49IstLagerbestandValue($scope.result.results.warehousestock.article['48']._amount);
        sharedProperties.setE50IstLagerbestandValue($scope.result.results.warehousestock.article['49']._amount);
        sharedProperties.setE51IstLagerbestandValue($scope.result.results.warehousestock.article['50']._amount);
        sharedProperties.setK52IstLagerbestandValue($scope.result.results.warehousestock.article['51']._amount);
        sharedProperties.setK53IstLagerbestandValue($scope.result.results.warehousestock.article['52']._amount);
        sharedProperties.setE54IstLagerbestandValue($scope.result.results.warehousestock.article['53']._amount);
        sharedProperties.setE55IstLagerbestandValue($scope.result.results.warehousestock.article['54']._amount);
        sharedProperties.setE56IstLagerbestandValue($scope.result.results.warehousestock.article['55']._amount);
        sharedProperties.setK57IstLagerbestandValue($scope.result.results.warehousestock.article['56']._amount);
        sharedProperties.setK58IstLagerbestandValue($scope.result.results.warehousestock.article['57']._amount);
        sharedProperties.setK59IstLagerbestandValue($scope.result.results.warehousestock.article['58']._amount);

        if (typeof $scope.result.results.ordersinwork.workplace !== 'undefined') {
            for (var i = 0; i < $scope.result.results.ordersinwork.workplace.length; i++) {
                switch ($scope.result.results.ordersinwork.workplace[i]._item) {
                    case "1":
                        sharedProperties.setP1BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "2":
                        sharedProperties.setP2BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "3":
                        sharedProperties.setP3BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "4":
                        sharedProperties.setE4BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "5":
                        sharedProperties.setE5BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "6":
                        sharedProperties.setE6BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "7":
                        sharedProperties.setE7BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "8":
                        sharedProperties.setE8BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "9":
                        sharedProperties.setE9BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "10":
                        sharedProperties.setE10BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "11":
                        sharedProperties.setE11BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "12":
                        sharedProperties.setE12BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "13":
                        sharedProperties.setE13BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "14":
                        sharedProperties.setE14BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "15":
                        sharedProperties.setE15BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "16":
                        sharedProperties.setE16BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "17":
                        sharedProperties.setE17BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "18":
                        sharedProperties.setE18BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "19":
                        sharedProperties.setE19BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "20":
                        sharedProperties.setE20BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "26":
                        sharedProperties.setE26BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "49":
                        sharedProperties.setE49BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "54":
                        sharedProperties.setE54BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "29":
                        sharedProperties.setE29BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "50":
                        sharedProperties.setE50BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "55":
                        sharedProperties.setE55BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "30":
                        sharedProperties.setE30BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "51":
                        sharedProperties.setE51BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "56":
                        sharedProperties.setE56BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                    case "31":
                        sharedProperties.setE31BearbeitungValue($scope.result.results.ordersinwork.workplace[i]._amount);

                }
                switch ($scope.result.results.ordersinwork.workplace[i]._id) {
                    case "1":
                        sharedProperties.setW1OrderTimeValue($scope.result.results.ordersinwork.workplace[i]._timeneed);
                        break;
                    case "2":
                        sharedProperties.setW2OrderTimeValue($scope.result.results.ordersinwork.workplace[i]._timeneed);
                        break;
                    case "3":
                        sharedProperties.setW3OrderTimeValue($scope.result.results.ordersinwork.workplace[i]._timeneed);
                        break;
                    case "4":
                        sharedProperties.setW4OrderTimeValue($scope.result.results.ordersinwork.workplace[i]._timeneed);
                        break;
                    case "6":
                        sharedProperties.setW6OrderTimeValue($scope.result.results.ordersinwork.workplace[i]._timeneed);
                        break;
                    case "7":
                        sharedProperties.setW7OrderTimeValue($scope.result.results.ordersinwork.workplace[i]._timeneed);
                        break;
                    case "8":
                        sharedProperties.setW8OrderTimeValue($scope.result.results.ordersinwork.workplace[i]._timeneed);
                        break;
                    case "9":
                        sharedProperties.setW9OrderTimeValue($scope.result.results.ordersinwork.workplace[i]._timeneed);
                        break;
                    case "10":
                        sharedProperties.setW10OrderTimeValue($scope.result.results.ordersinwork.workplace[i]._timeneed);
                        break;
                    case "11":
                        sharedProperties.setW11OrderTimeValue($scope.result.results.ordersinwork.workplace[i]._timeneed);
                        break;
                    case "12":
                        sharedProperties.setW12OrderTimeValue($scope.result.results.ordersinwork.workplace[i]._timeneed);
                        break;
                    case "13":
                        sharedProperties.setW13OrderTimeValue($scope.result.results.ordersinwork.workplace[i]._timeneed);
                        break;
                    case "14":
                        sharedProperties.setW14OrderTimeValue($scope.result.results.ordersinwork.workplace[i]._timeneed);
                        break;
                    case "15":
                        sharedProperties.setW15OrderTimeValue($scope.result.results.ordersinwork.workplace[i]._timeneed);
                        break;
                }
            }
        }
            if (typeof $scope.result.results.waitinglistworkstations.workplace['0'].waitinglist !== 'undefined') {
                if ($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist.length > 1) {
                    for (var i = 0; i < $scope.result.results.waitinglistworkstations.workplace['0'].waitinglist.length; i++) {
                        switch ($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._item) {
                            case "1":
                                sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "2":
                                sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "3":
                                sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "4":
                                sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "5":
                                sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "6":
                                sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "7":
                                sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "8":
                                sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "9":
                                sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "10":
                                sharedProperties.setE10WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "11":
                                sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "12":
                                sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "13":
                                sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "14":
                                sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "15":
                                sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "16":
                                sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "17":
                                sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "18":
                                sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "19":
                                sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "20":
                                sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "26":
                                sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "49":
                                sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "54":
                                sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "29":
                                sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "50":
                                sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "55":
                                sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "30":
                                sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "51":
                                sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "56":
                                sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                            case "31":
                                sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist[i]._amount);
                                break;
                        }
                    }
                } else {
                    switch ($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._item) {
                        case "1":
                            sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "2":
                            sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "3":
                            sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "4":
                            sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "5":
                            sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "6":
                            sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "7":
                            sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "8":
                            sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "9":
                            sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "10":
                            sharedProperties.setE10WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "11":
                            sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "12":
                            sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "13":
                            sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "14":
                            sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "15":
                            sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "16":
                            sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "17":
                            sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "18":
                            sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "19":
                            sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "20":
                            sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "26":
                            sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "49":
                            sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "54":
                            sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "29":
                            sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "50":
                            sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "55":
                            sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "30":
                            sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "51":
                            sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "56":
                            sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                        case "31":
                            sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['0'].waitinglist._amount);
                            break;
                    }
                }
            }
            if (typeof $scope.result.results.waitinglistworkstations.workplace['1'].waitinglist !== 'undefined') {
                if ($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist.length > 1) {
                    for (var i = 0; i < $scope.result.results.waitinglistworkstations.workplace['1'].waitinglist.length; i++) {
                        switch ($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._item) {
                            case "1":
                                sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "2":
                                sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "3":
                                sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "4":
                                sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "5":
                                sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "6":
                                sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "7":
                                sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "8":
                                sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "9":
                                sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "10":
                                sharedProperties.setE10WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "11":
                                sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "12":
                                sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "13":
                                sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "14":
                                sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "15":
                                sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "16":
                                sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "17":
                                sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "18":
                                sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "19":
                                sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "20":
                                sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "26":
                                sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "49":
                                sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "54":
                                sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "29":
                                sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "50":
                                sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "55":
                                sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "30":
                                sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "51":
                                sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "56":
                                sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                            case "31":
                                sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist[i]._amount);
                                break;
                        }
                    }
                } else {
                    switch ($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._item) {
                        case "1":
                            sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "2":
                            sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "3":
                            sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "4":
                            sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "5":
                            sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "6":
                            sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "7":
                            sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "8":
                            sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "9":
                            sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "10":
                            sharedProperties.setE10WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "11":
                            sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "12":
                            sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "13":
                            sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "14":
                            sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "15":
                            sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "16":
                            sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "17":
                            sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "18":
                            sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "19":
                            sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "20":
                            sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "26":
                            sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "49":
                            sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "54":
                            sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "29":
                            sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "50":
                            sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "55":
                            sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "30":
                            sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "51":
                            sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "56":
                            sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                        case "31":
                            sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['1'].waitinglist._amount);
                            break;
                    }
                }
            }
            if (typeof $scope.result.results.waitinglistworkstations.workplace['2'].waitinglist !== 'undefined') {
                if ($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist.length > 1) {
                    for (var i = 0; i < $scope.result.results.waitinglistworkstations.workplace['2'].waitinglist.length; i++) {
                        switch ($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._item) {
                            case "1":
                                sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "2":
                                sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "3":
                                sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "4":
                                sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "5":
                                sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "6":
                                sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "7":
                                sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "8":
                                sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "9":
                                sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "10":
                                sharedProperties.setE10WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "11":
                                sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "12":
                                sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "13":
                                sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "14":
                                sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "15":
                                sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "16":
                                sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "17":
                                sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "18":
                                sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "19":
                                sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "20":
                                sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "26":
                                sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "49":
                                sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "54":
                                sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "29":
                                sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "50":
                                sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "55":
                                sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "30":
                                sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "51":
                                sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "56":
                                sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                            case "31":
                                sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist[i]._amount);
                                break;
                        }
                    }
                } else {
                    switch ($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._item) {
                        case "1":
                            sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "2":
                            sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "3":
                            sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "4":
                            sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "5":
                            sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "6":
                            sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "7":
                            sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "8":
                            sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "9":
                            sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "10":
                            sharedProperties.setE10WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "11":
                            sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "12":
                            sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "13":
                            sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "14":
                            sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "15":
                            sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "16":
                            sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "17":
                            sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "18":
                            sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "19":
                            sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "20":
                            sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "26":
                            sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "49":
                            sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "54":
                            sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "29":
                            sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "50":
                            sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "55":
                            sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "30":
                            sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "51":
                            sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "56":
                            sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                        case "31":
                            sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['2'].waitinglist._amount);
                            break;
                    }
                }
            }
            if (typeof $scope.result.results.waitinglistworkstations.workplace['3'].waitinglist !== 'undefined') {
                if ($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist.length > 1) {
                    for (var i = 0; i < $scope.result.results.waitinglistworkstations.workplace['3'].waitinglist.length; i++) {
                        switch ($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._item) {
                            case "1":
                                sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "2":
                                sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "3":
                                sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "4":
                                sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "5":
                                sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "6":
                                sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "7":
                                sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "8":
                                sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "9":
                                sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "10":
                                sharedProperties.setE10WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "11":
                                sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "12":
                                sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "13":
                                sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "14":
                                sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "15":
                                sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "16":
                                sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "17":
                                sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "18":
                                sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "19":
                                sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "20":
                                sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "26":
                                sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "49":
                                sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "54":
                                sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "29":
                                sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "50":
                                sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "55":
                                sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "30":
                                sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "51":
                                sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "56":
                                sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                            case "31":
                                sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist[i]._amount);
                                break;
                        }
                    }
                } else {
                    switch ($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._item) {
                        case "1":
                            sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "2":
                            sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "3":
                            sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "4":
                            sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "5":
                            sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "6":
                            sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "7":
                            sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "8":
                            sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "9":
                            sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "10":
                            sharedProperties.setE10WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "11":
                            sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "12":
                            sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "13":
                            sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "14":
                            sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "15":
                            sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "16":
                            sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "17":
                            sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "18":
                            sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "19":
                            sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "20":
                            sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "26":
                            sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "49":
                            sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "54":
                            sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "29":
                            sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "50":
                            sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "55":
                            sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "30":
                            sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "51":
                            sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "56":
                            sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                        case "31":
                            sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['3'].waitinglist._amount);
                            break;
                    }
                }
            }
            if (typeof $scope.result.results.waitinglistworkstations.workplace['4'].waitinglist !== 'undefined') {
                if ($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist.length > 1) {
                    for (var i = 0; i < $scope.result.results.waitinglistworkstations.workplace['4'].waitinglist.length; i++) {
                        switch ($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._item) {
                            case "1":
                                sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "2":
                                sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "3":
                                sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "4":
                                sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "5":
                                sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "6":
                                sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "7":
                                sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "8":
                                sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "9":
                                sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "10":
                                sharedProperties.setE10WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "11":
                                sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "12":
                                sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "13":
                                sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "14":
                                sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "15":
                                sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "16":
                                sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "17":
                                sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "18":
                                sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "19":
                                sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "20":
                                sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "26":
                                sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "49":
                                sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "54":
                                sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "29":
                                sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "50":
                                sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "55":
                                sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "30":
                                sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "51":
                                sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "56":
                                sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                            case "31":
                                sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist[i]._amount);
                                break;
                        }
                    }
                } else {
                    switch ($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._item) {
                        case "1":
                            sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "2":
                            sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "3":
                            sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "4":
                            sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "5":
                            sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "6":
                            sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "7":
                            sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "8":
                            sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "9":
                            sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "10":
                            sharedProperties.setE10WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "11":
                            sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "12":
                            sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "13":
                            sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "14":
                            sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "15":
                            sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "16":
                            sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "17":
                            sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "18":
                            sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "19":
                            sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "20":
                            sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "26":
                            sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "49":
                            sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "54":
                            sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "29":
                            sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "50":
                            sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "55":
                            sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "30":
                            sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "51":
                            sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "56":
                            sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                        case "31":
                            sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['4'].waitinglist._amount);
                            break;
                    }
                }
            }
            if (typeof $scope.result.results.waitinglistworkstations.workplace['5'].waitinglist !== 'undefined') {
                if ($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist.length > 1) {
                    for (var i = 0; i < $scope.result.results.waitinglistworkstations.workplace['5'].waitinglist.length; i++) {
                        switch ($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._item) {
                            case "1":
                                sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "2":
                                sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "3":
                                sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "4":
                                sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "5":
                                sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "6":
                                sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "7":
                                sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "8":
                                sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "9":
                                sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "10":
                                sharedProperties.setE10WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "11":
                                sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "12":
                                sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "13":
                                sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "14":
                                sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "15":
                                sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "16":
                                sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "17":
                                sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "18":
                                sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "19":
                                sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "20":
                                sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "26":
                                sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "49":
                                sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "54":
                                sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "29":
                                sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "50":
                                sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "55":
                                sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "30":
                                sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "51":
                                sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "56":
                                sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                            case "31":
                                sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist[i]._amount);
                                break;
                        }
                    }
                } else {
                    switch ($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._item) {
                        case "1":
                            sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "2":
                            sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "3":
                            sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "4":
                            sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "5":
                            sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "6":
                            sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "7":
                            sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "8":
                            sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "9":
                            sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "10":
                            sharedProperties.setE10WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "11":
                            sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "12":
                            sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "13":
                            sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "14":
                            sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "15":
                            sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "16":
                            sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "17":
                            sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "18":
                            sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "19":
                            sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "20":
                            sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "26":
                            sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "49":
                            sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "54":
                            sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "29":
                            sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "50":
                            sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "55":
                            sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "30":
                            sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "51":
                            sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "56":
                            sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                        case "31":
                            sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['5'].waitinglist._amount);
                            break;
                    }
                }
            }
            if (typeof $scope.result.results.waitinglistworkstations.workplace['6'].waitinglist !== 'undefined') {
                if ($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist.length > 1) {
                    for (var i = 0; i < $scope.result.results.waitinglistworkstations.workplace['6'].waitinglist.length; i++) {
                        switch ($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._item) {
                            case "1":
                                sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "2":
                                sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "3":
                                sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "4":
                                sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "5":
                                sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "6":
                                sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "7":
                                sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "8":
                                sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "9":
                                sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "10":
                                sharedProperties.setE10WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "11":
                                sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "12":
                                sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "13":
                                sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "14":
                                sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "15":
                                sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "16":
                                sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "17":
                                sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "18":
                                sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "19":
                                sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "20":
                                sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "26":
                                sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "49":
                                sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "54":
                                sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "29":
                                sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "50":
                                sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "55":
                                sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "30":
                                sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "51":
                                sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "56":
                                sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                            case "31":
                                sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist[i]._amount);
                                break;
                        }
                    }
                } else {
                    switch ($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._item) {
                        case "1":
                            sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "2":
                            sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "3":
                            sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "4":
                            sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "5":
                            sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "6":
                            sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "7":
                            sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "8":
                            sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "9":
                            sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "10":
                            sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "11":
                            sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "12":
                            sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "13":
                            sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "14":
                            sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "15":
                            sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "16":
                            sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "17":
                            sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "18":
                            sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "19":
                            sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "20":
                            sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "26":
                            sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "49":
                            sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "54":
                            sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "29":
                            sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "50":
                            sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "55":
                            sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "30":
                            sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "51":
                            sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "56":
                            sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                        case "31":
                            sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['6'].waitinglist._amount);
                            break;
                    }
                }
            }
            if (typeof $scope.result.results.waitinglistworkstations.workplace['7'].waitinglist !== 'undefined') {
                if ($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist.length > 1) {
                    for (var i = 0; i < $scope.result.results.waitinglistworkstations.workplace['7'].waitinglist.length; i++) {
                        switch ($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._item) {
                            case "1":
                                sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "2":
                                sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "3":
                                sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "4":
                                sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "5":
                                sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "6":
                                sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "7":
                                sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "8":
                                sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "9":
                                sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "10":
                                sharedProperties.setE10WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "11":
                                sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "12":
                                sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "13":
                                sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "14":
                                sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "15":
                                sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "16":
                                sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "17":
                                sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "18":
                                sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "19":
                                sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "20":
                                sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "26":
                                sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "49":
                                sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "54":
                                sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "29":
                                sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "50":
                                sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "55":
                                sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "30":
                                sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "51":
                                sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "56":
                                sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                            case "31":
                                sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist[i]._amount);
                                break;
                        }
                    }
                } else {
                    switch ($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._item) {
                        case "1":
                            sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "2":
                            sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "3":
                            sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "4":
                            sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "5":
                            sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "6":
                            sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "7":
                            sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "8":
                            sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "9":
                            sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "10":
                            sharedProperties.setE10WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "11":
                            sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "12":
                            sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "13":
                            sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "14":
                            sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "15":
                            sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "16":
                            sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "17":
                            sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "18":
                            sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "19":
                            sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "20":
                            sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "26":
                            sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "49":
                            sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "54":
                            sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "29":
                            sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "50":
                            sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "55":
                            sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "30":
                            sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "51":
                            sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "56":
                            sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                        case "31":
                            sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['7'].waitinglist._amount);
                            break;
                    }
                }
            }
            if (typeof $scope.result.results.waitinglistworkstations.workplace['8'].waitinglist !== 'undefined') {
                if ($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist.length > 1) {
                    for (var i = 0; i < $scope.result.results.waitinglistworkstations.workplace['8'].waitinglist.length; i++) {
                        switch ($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._item) {
                            case "1":
                                sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "2":
                                sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "3":
                                sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "4":
                                sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "5":
                                sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "6":
                                sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "7":
                                sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "8":
                                sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "9":
                                sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "10":
                                sharedProperties.setE10WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "11":
                                sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "12":
                                sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "13":
                                sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "14":
                                sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "15":
                                sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "16":
                                sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "17":
                                sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "18":
                                sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "19":
                                sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "20":
                                sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "26":
                                sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "49":
                                sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "54":
                                sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "29":
                                sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "50":
                                sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "55":
                                sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "30":
                                sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "51":
                                sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "56":
                                sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                            case "31":
                                sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist[i]._amount);
                                break;
                        }
                    }
                } else {
                    switch ($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._item) {
                        case "1":
                            sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "2":
                            sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "3":
                            sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "4":
                            sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "5":
                            sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "6":
                            sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "7":
                            sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "8":
                            sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "9":
                            sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "10":
                            sharedProperties.setE10WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "11":
                            sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "12":
                            sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "13":
                            sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "14":
                            sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "15":
                            sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "16":
                            sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "17":
                            sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "18":
                            sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "19":
                            sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "20":
                            sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "26":
                            sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "49":
                            sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "54":
                            sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "29":
                            sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "50":
                            sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "55":
                            sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "30":
                            sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "51":
                            sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "56":
                            sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                        case "31":
                            sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['8'].waitinglist._amount);
                            break;
                    }
                }
            }
            if (typeof $scope.result.results.waitinglistworkstations.workplace['9'].waitinglist !== 'undefined') {
                if ($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist.length > 1) {
                    for (var i = 0; i < $scope.result.results.waitinglistworkstations.workplace['9'].waitinglist.length; i++) {
                        switch ($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._item) {
                            case "1":
                                sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "2":
                                sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "3":
                                sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "4":
                                sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "5":
                                sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "6":
                                sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "7":
                                sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "8":
                                sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "9":
                                sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "10":
                                sharedProperties.setE10WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "11":
                                sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "12":
                                sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "13":
                                sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "14":
                                sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "15":
                                sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "16":
                                sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "17":
                                sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "18":
                                sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "19":
                                sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "20":
                                sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "26":
                                sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "49":
                                sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "54":
                                sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "29":
                                sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "50":
                                sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "55":
                                sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "30":
                                sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "51":
                                sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "56":
                                sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                            case "31":
                                sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist[i]._amount);
                                break;
                        }
                    }
                } else {
                    switch ($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._item) {
                        case "1":
                            sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "2":
                            sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "3":
                            sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "4":
                            sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "5":
                            sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "6":
                            sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "7":
                            sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "8":
                            sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "9":
                            sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "10":
                            sharedProperties.setE10WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "11":
                            sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "12":
                            sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "13":
                            sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "14":
                            sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "15":
                            sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "16":
                            sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "17":
                            sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "18":
                            sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "19":
                            sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "20":
                            sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "26":
                            sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "49":
                            sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "54":
                            sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "29":
                            sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "50":
                            sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "55":
                            sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "30":
                            sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "51":
                            sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "56":
                            sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                        case "31":
                            sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['9'].waitinglist._amount);
                            break;
                    }
                }
            }
            if (typeof $scope.result.results.waitinglistworkstations.workplace['10'].waitinglist !== 'undefined') {
                if ($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist.length > 1) {
                    for (var i = 0; i < $scope.result.results.waitinglistworkstations.workplace['10'].waitinglist.length; i++) {
                        switch ($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._item) {
                            case "1":
                                sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "2":
                                sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "3":
                                sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "4":
                                sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "5":
                                sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "6":
                                sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "7":
                                sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "8":
                                sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "9":
                                sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "10":
                                sharedProperties.setE10WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "11":
                                sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "12":
                                sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "13":
                                sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "14":
                                sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "15":
                                sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "16":
                                sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "17":
                                sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "18":
                                sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "19":
                                sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "20":
                                sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "26":
                                sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "49":
                                sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "54":
                                sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "29":
                                sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "50":
                                sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "55":
                                sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "30":
                                sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "51":
                                sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "56":
                                sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                            case "31":
                                sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist[i]._amount);
                                break;
                        }
                    }
                } else {
                    switch ($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._item) {
                        case "1":
                            sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "2":
                            sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "3":
                            sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "4":
                            sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "5":
                            sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "6":
                            sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "7":
                            sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "8":
                            sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "9":
                            sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "10":
                            sharedProperties.setE10WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "11":
                            sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "12":
                            sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "13":
                            sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "14":
                            sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "15":
                            sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "16":
                            sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "17":
                            sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "18":
                            sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "19":
                            sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "20":
                            sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "26":
                            sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "49":
                            sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "54":
                            sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "29":
                            sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "50":
                            sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "55":
                            sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "30":
                            sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "51":
                            sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "56":
                            sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                        case "31":
                            sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['10'].waitinglist._amount);
                            break;
                    }
                }
            }
            if (typeof $scope.result.results.waitinglistworkstations.workplace['11'].waitinglist !== 'undefined') {
                if ($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist.length > 1) {
                    for (var i = 0; i < $scope.result.results.waitinglistworkstations.workplace['11'].waitinglist.length; i++) {
                        switch ($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._item) {
                            case "1":
                                sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "2":
                                sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "3":
                                sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "4":
                                sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "5":
                                sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "6":
                                sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "7":
                                sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "8":
                                sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "9":
                                sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "10":
                                sharedProperties.setE10WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "11":
                                sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "12":
                                sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "13":
                                sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "14":
                                sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "15":
                                sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "16":
                                sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "17":
                                sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "18":
                                sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "19":
                                sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "20":
                                sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "26":
                                sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "49":
                                sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "54":
                                sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "29":
                                sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "50":
                                sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "55":
                                sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "30":
                                sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "51":
                                sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "56":
                                sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                            case "31":
                                sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist[i]._amount);
                                break;
                        }
                    }
                } else {
                    switch ($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._item) {
                        case "1":
                            sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "2":
                            sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "3":
                            sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "4":
                            sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "5":
                            sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "6":
                            sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "7":
                            sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "8":
                            sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "9":
                            sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "10":
                            sharedProperties.setE10WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "11":
                            sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "12":
                            sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "13":
                            sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "14":
                            sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "15":
                            sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "16":
                            sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "17":
                            sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "18":
                            sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "19":
                            sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "20":
                            sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "26":
                            sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "49":
                            sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "54":
                            sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "29":
                            sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "50":
                            sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "55":
                            sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "30":
                            sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "51":
                            sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "56":
                            sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                        case "31":
                            sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['11'].waitinglist._amount);
                            break;
                    }
                }
            }
            if (typeof $scope.result.results.waitinglistworkstations.workplace['12'].waitinglist !== 'undefined') {
                if ($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist.length > 1) {
                    for (var i = 0; i < $scope.result.results.waitinglistworkstations.workplace['12'].waitinglist.length; i++) {
                        switch ($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._item) {
                            case "1":
                                sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "2":
                                sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "3":
                                sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "4":
                                sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "5":
                                sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "6":
                                sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "7":
                                sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "8":
                                sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "9":
                                sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "10":
                                sharedProperties.setE10WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "11":
                                sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "12":
                                sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "13":
                                sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "14":
                                sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "15":
                                sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "16":
                                sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "17":
                                sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "18":
                                sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "19":
                                sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "20":
                                sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "26":
                                sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "49":
                                sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "54":
                                sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "29":
                                sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "50":
                                sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "55":
                                sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "30":
                                sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "51":
                                sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "56":
                                sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                            case "31":
                                sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist[i]._amount);
                                break;
                        }
                    }
                } else {
                    switch ($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._item) {
                        case "1":
                            sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "2":
                            sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "3":
                            sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "4":
                            sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "5":
                            sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "6":
                            sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "7":
                            sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "8":
                            sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "9":
                            sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "10":
                            sharedProperties.setE10WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "11":
                            sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "12":
                            sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "13":
                            sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "14":
                            sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "15":
                            sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "16":
                            sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "17":
                            sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "18":
                            sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "19":
                            sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "20":
                            sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "26":
                            sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "49":
                            sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "54":
                            sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "29":
                            sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "50":
                            sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "55":
                            sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "30":
                            sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "51":
                            sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "56":
                            sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                        case "31":
                            sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['12'].waitinglist._amount);
                            break;
                    }
                }
            }
            if (typeof $scope.result.results.waitinglistworkstations.workplace['13'].waitinglist !== 'undefined') {
                if ($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist.length > 1) {
                    for (var i = 0; i < $scope.result.results.waitinglistworkstations.workplace['13'].waitinglist.length; i++) {
                        switch ($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._item) {
                            case "1":
                                sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "2":
                                sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "3":
                                sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "4":
                                sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "5":
                                sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "6":
                                sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "7":
                                sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "8":
                                sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "9":
                                sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "10":
                                sharedProperties.setE10WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "11":
                                sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "12":
                                sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "13":
                                sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "14":
                                sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "15":
                                sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "16":
                                sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "17":
                                sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "18":
                                sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "19":
                                sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "20":
                                sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "26":
                                sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "49":
                                sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "54":
                                sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "29":
                                sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "50":
                                sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "55":
                                sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "30":
                                sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "51":
                                sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "56":
                                sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                            case "31":
                                sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist[i]._amount);
                                break;
                        }
                    }
                } else {
                    switch ($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._item) {
                        case "1":
                            sharedProperties.setP1WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "2":
                            sharedProperties.setP2WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "3":
                            sharedProperties.setP3WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "4":
                            sharedProperties.setE4WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "5":
                            sharedProperties.setE5WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "6":
                            sharedProperties.setE6WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "7":
                            sharedProperties.setE7WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "8":
                            sharedProperties.setE8WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "9":
                            sharedProperties.setE9WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "10":
                            sharedProperties.setE10WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "11":
                            sharedProperties.setE11WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "12":
                            sharedProperties.setE12WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "13":
                            sharedProperties.setE13WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "14":
                            sharedProperties.setE14WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "15":
                            sharedProperties.setE15WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "16":
                            sharedProperties.setE16WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "17":
                            sharedProperties.setE17WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "18":
                            sharedProperties.setE18WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "19":
                            sharedProperties.setE19WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "20":
                            sharedProperties.setE20WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "26":
                            sharedProperties.setE26WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "49":
                            sharedProperties.setE49WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "54":
                            sharedProperties.setE54WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "29":
                            sharedProperties.setE29WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "50":
                            sharedProperties.setE50WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "55":
                            sharedProperties.setE55WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "30":
                            sharedProperties.setE30WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "51":
                            sharedProperties.setE51WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "56":
                            sharedProperties.setE56WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                        case "31":
                            sharedProperties.setE31WarteschlangeValue($scope.result.results.waitinglistworkstations.workplace['13'].waitinglist._amount);
                            break;
                    }
                }
            }
        var plan = 0;
        if (typeof $scope.result.results.futureinwardstockmovement.order !== 'undefined') {
            for (var i = 0; i < $scope.result.results.futureinwardstockmovement.order.length; i++) {
                switch ($scope.result.results.futureinwardstockmovement.order[i]._article) {
                    case "21":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 0) {
                            sharedProperties.setK21_1PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        } else if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 1) {
                            sharedProperties.setK21PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "22":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 0) {
                            sharedProperties.setK22_1PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        } else if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 1) {
                            sharedProperties.setK22PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "23":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 0) {
                            sharedProperties.setK23PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "24":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 0) {
                            sharedProperties.setK24_2PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        } else if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 1) {
                            sharedProperties.setK24_1PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        } else if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 2) {
                            sharedProperties.setK24PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "25":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 0) {
                            sharedProperties.setK25PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "27":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 0) {
                            sharedProperties.setK27PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "28":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 0) {
                            sharedProperties.setK28_1PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        } else if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 1) {
                            sharedProperties.setK28PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "32":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 0) {
                            sharedProperties.setK32_1PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        } else if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 1) {
                            sharedProperties.setK32PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "33":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 0) {
                            sharedProperties.setK33_1PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        } else if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 1) {
                            sharedProperties.setK33PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "34":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 1) {
                            sharedProperties.setK34PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "35":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 0) {
                            sharedProperties.setK35_1PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        } else if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 1) {
                            sharedProperties.setK35PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "36":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 0) {
                            sharedProperties.setK36PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "37":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 1) {
                            sharedProperties.setK37PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "38":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 0) {
                            sharedProperties.setK38_1PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        } else if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 1) {
                            sharedProperties.setK38PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "39":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 1) {
                            sharedProperties.setK39PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "40":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 0) {
                            sharedProperties.setK40_1PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        } else if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 1) {
                            sharedProperties.setK40PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "41":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 0) {
                            sharedProperties.setK41PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "42":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 0) {
                            sharedProperties.setK42PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "43":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 0) {
                            sharedProperties.setK43_1PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        } else if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 1) {
                            sharedProperties.setK43PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "44":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 0) {
                            sharedProperties.setK44PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "45":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 0) {
                            sharedProperties.setK45_1PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        } else if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 1) {
                            sharedProperties.setK45PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "46":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 0) {
                            sharedProperties.setK46PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "47":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 0) {
                            sharedProperties.setK47PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "48":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 0) {
                            sharedProperties.setK48PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "52":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 0) {
                            sharedProperties.setK52_1PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        } else if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 1) {
                            sharedProperties.setK52PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "53":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 0) {
                            sharedProperties.setK53_1PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        } else if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 1) {
                            sharedProperties.setK53PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "57":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 0) {
                            sharedProperties.setK57_1PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        } else if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 1) {
                            sharedProperties.setK57PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "58":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 0) {
                            sharedProperties.setK58_1PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        } else if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 1) {
                            sharedProperties.setK58PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                    case "59":
                        if ((parseInt(sharedProperties.getPeriodValue()) - parseInt($scope.result.results.futureinwardstockmovement.order[i]._orderperiod)) == 0) {
                            sharedProperties.setK59PlanLagerbestandValue($scope.result.results.futureinwardstockmovement.order[i]._amount);
                        }
                        break;
                }
            }
        }
        sharedProperties.setW1TimeValue($scope.result.results.waitinglistworkstations.workplace['0']._timeneed);
        sharedProperties.setW2TimeValue($scope.result.results.waitinglistworkstations.workplace['1']._timeneed);
        sharedProperties.setW3TimeValue($scope.result.results.waitinglistworkstations.workplace['2']._timeneed);
        sharedProperties.setW4TimeValue($scope.result.results.waitinglistworkstations.workplace['3']._timeneed);
        sharedProperties.setW6TimeValue($scope.result.results.waitinglistworkstations.workplace['4']._timeneed);
        sharedProperties.setW7TimeValue($scope.result.results.waitinglistworkstations.workplace['5']._timeneed);
        sharedProperties.setW8TimeValue($scope.result.results.waitinglistworkstations.workplace['6']._timeneed);
        sharedProperties.setW9TimeValue($scope.result.results.waitinglistworkstations.workplace['7']._timeneed);
        sharedProperties.setW10TimeValue($scope.result.results.waitinglistworkstations.workplace['8']._timeneed);
        sharedProperties.setW11TimeValue($scope.result.results.waitinglistworkstations.workplace['9']._timeneed);
        sharedProperties.setW12TimeValue($scope.result.results.waitinglistworkstations.workplace['10']._timeneed);
        sharedProperties.setW13TimeValue($scope.result.results.waitinglistworkstations.workplace['11']._timeneed);
        sharedProperties.setW14TimeValue($scope.result.results.waitinglistworkstations.workplace['12']._timeneed);
        sharedProperties.setW15TimeValue($scope.result.results.waitinglistworkstations.workplace['13']._timeneed);
        alert("Upload completed!");
    };
    $scope.onButtonReset = function () {
        sharedProperties.resetValues();
    };


    $scope.bestellungModel = [{
        article: "a1InputValue",
        quantity: "q1InputValue",
        mode: "m1selectedOption"
    }, {article: "a2InputValue", quantity: "q2InputValue", mode: "m2selectedOption"}, {
        article: "a3InputValue",
        quantity: "q3InputValue",
        mode: "m3selectedOption"
    }, {article: "a4InputValue", quantity: "q4InputValue", mode: "m4selectedOption"}, {
        article: "a5InputValue",
        quantity: "q5InputValue",
        mode: "m5selectedOption"
    }, {article: "a6InputValue", quantity: "q6InputValue", mode: "m6selectedOption"}, {
        article: "a7InputValue",
        quantity: "q7InputValue",
        mode: "m7selectedOption"
    }, {article: "a8InputValue", quantity: "q8InputValue", mode: "m8selectedOption"}, {
        article: "a9InputValue",
        quantity: "q9InputValue",
        mode: "m9selectedOption"
    }, {article: "a10InputValue", quantity: "q10InputValue", mode: "m10selectedOption"}, {
        article: "a11InputValue",
        quantity: "q11InputValue",
        mode: "m11selectedOption"
    }, {article: "a12InputValue", quantity: "q12InputValue", mode: "m12selectedOption"}, {
        article: "a13InputValue",
        quantity: "q13InputValue",
        mode: "m13selectedOption"
    }, {article: "a14InputValue", quantity: "q14InputValue", mode: "m14selectedOption"}, {
        article: "a15InputValue",
        quantity: "q15InputValue",
        mode: "m15selectedOption"
    }, {article: "a16InputValue", quantity: "q16InputValue", mode: "m16selectedOption"}, {
        article: "a17InputValue",
        quantity: "q17InputValue",
        mode: "m17selectedOption"
    }, {article: "a18InputValue", quantity: "q18InputValue", mode: "m18selectedOption"}, {
        article: "a19InputValue",
        quantity: "q19InputValue",
        mode: "m19selectedOption"
    }, {article: "a20InputValue", quantity: "q20InputValue", mode: "m20selectedOption"}, {
        article: "a21InputValue",
        quantity: "q21InputValue",
        mode: "m21selectedOption"
    }, {article: "a22InputValue", quantity: "q22InputValue", mode: "m22selectedOption"}, {
        article: "a23InputValue",
        quantity: "q23InputValue",
        mode: "m23selectedOption"
    }, {article: "a24InputValue", quantity: "q24InputValue", mode: "m24selectedOption"}, {
        article: "a25InputValue",
        quantity: "q25InputValue",
        mode: "m25selectedOption"
    }, {article: "a26InputValue", quantity: "q26InputValue", mode: "m26selectedOption"}, {
        article: "a27InputValue",
        quantity: "q27InputValue",
        mode: "m27selectedOption"
    }, {article: "a28InputValue", quantity: "q28InputValue", mode: "m28selectedOption"}, {
        article: "a29InputValue",
        quantity: "q29InputValue",
        mode: "m29selectedOption"
    }, {article: "a30InputValue", quantity: "q30InputValue", mode: "m30selectedOption"}];

    if (sharedProperties.getFirstUpdateValue() == 0) {
        $scope.p1DirektMengeValue = sharedProperties.getp1Direktverkauf();
        $scope.p2DirektMengeValue = sharedProperties.getp2Direktverkauf();
        $scope.p3DirektMengeValue = sharedProperties.getp3Direktverkauf();
        $scope.p1InputValue = sharedProperties.getP1AbsatzValue();
        $scope.p2InputValue = sharedProperties.getP2AbsatzValue();
        $scope.p3InputValue = sharedProperties.getP3AbsatzValue();
        $scope.p1DirektPreisValue = 0;
        $scope.p1DirektKonvetionalstrafeValue = 0;
        $scope.p2DirektPreisValue = 0;
        $scope.p2DirektKonvetionalstrafeValue = 0;
        $scope.p3DirektPreisValue = 0;
        $scope.p3DirektKonvetionalstrafeValue = 0;
        $scope.fa1InputValue = "4";
        $scope.fq1InputValue = sharedProperties.getE4Value();
        $scope.fa2InputValue = "5";
        $scope.fq2InputValue = sharedProperties.getE5Value();
        $scope.fa3InputValue = "6";
        $scope.fq3InputValue = sharedProperties.getE6Value();
        $scope.fa4InputValue = "7";
        $scope.fq4InputValue = sharedProperties.getE7Value();
        $scope.fa5InputValue = "8";
        $scope.fq5InputValue = sharedProperties.getE8Value();
        $scope.fa6InputValue = "9";
        $scope.fq6InputValue = sharedProperties.getE9Value();
        $scope.fa7InputValue = "10";
        $scope.fq7InputValue = sharedProperties.getE10Value();
        $scope.fa8InputValue = "11";
        $scope.fq8InputValue = sharedProperties.getE11Value();
        $scope.fa9InputValue = "12";
        $scope.fq9InputValue = sharedProperties.getE12Value();
        $scope.fa10InputValue = "13";
        $scope.fq10InputValue = sharedProperties.getE13Value();
        $scope.fa11InputValue = "14";
        $scope.fq11InputValue = sharedProperties.getE14Value();
        $scope.fa12InputValue = "15";
        $scope.fq12InputValue = sharedProperties.getE15Value();
        $scope.fa13InputValue = "16";
        $scope.fq13InputValue = sharedProperties.getKDH16Value();
        $scope.fa14InputValue = "17";
        $scope.fq14InputValue = sharedProperties.getKDH17Value();
        $scope.fa15InputValue = "18";
        $scope.fq15InputValue = sharedProperties.getE18Value();
        $scope.fa16InputValue = "19";
        $scope.fq16InputValue = sharedProperties.getE19Value();
        $scope.fa17InputValue = "20";
        $scope.fq17InputValue = sharedProperties.getE20Value();
        $scope.fa18InputValue = "26";
        $scope.fq18InputValue = sharedProperties.getKDH26Value();
        $scope.fa19InputValue = "49";
        $scope.fq19InputValue = sharedProperties.getE49Value();
        $scope.fa20InputValue = "54";
        $scope.fq20InputValue = sharedProperties.getE54Value();
        $scope.fa21InputValue = "29";
        $scope.fq21InputValue = sharedProperties.getE29Value();
        $scope.fa22InputValue = "50";
        $scope.fq22InputValue = sharedProperties.getE50Value();
        $scope.fa23InputValue = "55";
        $scope.fq23InputValue = sharedProperties.getE55Value();
        $scope.fa24InputValue = "30";
        $scope.fq24InputValue = sharedProperties.getE30Value();
        $scope.fa25InputValue = "51";
        $scope.fq25InputValue = sharedProperties.getE51Value();
        $scope.fa26InputValue = "56";
        $scope.fq26InputValue = sharedProperties.getE56Value();
        $scope.fa27InputValue = "31";
        $scope.fq27InputValue = sharedProperties.getE31Value();
        $scope.fa28InputValue = "1";
        $scope.fq28InputValue = sharedProperties.getP1Value();
        $scope.fa29InputValue = "2";
        $scope.fq29InputValue = sharedProperties.getP2Value();
        $scope.fa30InputValue = "3";
        $scope.fq30InputValue = sharedProperties.getP3Value();
        var i = 0;
        if (sharedProperties.getK21BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "21";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK21BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK21BestellungMode()];
            i++;
        }
        if (sharedProperties.getK22BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "22";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK22BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK22BestellungMode()];
            i++;
        }
        if (sharedProperties.getK23BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "23";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK23BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK23BestellungMode()];
            i++;
        }
        if (sharedProperties.getK24BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "24";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK24BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK24BestellungMode()];
            i++;
        }
        if (sharedProperties.getK25BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "25";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK25BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK25BestellungMode()];
            i++;
        }
        if (sharedProperties.getK27BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "27";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK27BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK27BestellungMode()];
            i++;
        }
        if (sharedProperties.getK28BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "28";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK28BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK28BestellungMode()];
            i++;
        }
        if (sharedProperties.getK32BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "32";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK32BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK32BestellungMode()];
            i++;
        }
        if (sharedProperties.getK33BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "33";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK33BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK33BestellungMode()];
            i++;
        }
        if (sharedProperties.getK34BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "34";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK34BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK34BestellungMode()];
            i++;
        }
        if (sharedProperties.getK35BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "35";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK35BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK35BestellungMode()];
            i++;
        }
        if (sharedProperties.getK36BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "36";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK36BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK36BestellungMode()];
            i++;
        }
        if (sharedProperties.getK37BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "37";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK37BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK37BestellungMode()];
            i++;
        }
        if (sharedProperties.getK38BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "38";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK38BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK38BestellungMode()];
            i++;
        }
        if (sharedProperties.getK39BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "39";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK39BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK39BestellungMode()];
            i++;
        }
        if (sharedProperties.getK40BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "40";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK40BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK40BestellungMode()];
            i++;
        }
        if (sharedProperties.getK41BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "41";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK41BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK41BestellungMode()];
            i++;
        }
        if (sharedProperties.getK42BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "42";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK42BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK42BestellungMode()];
            i++;
        }
        if (sharedProperties.getK43BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "43";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK43BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK43BestellungMode()];
            i++;
        }
        if (sharedProperties.getK44BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "44";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK44BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK44BestellungMode()];
            i++;
        }
        if (sharedProperties.getK45BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "45";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK45BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK45BestellungMode()];
            i++;
        }
        if (sharedProperties.getK46BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "46";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK46BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK46BestellungMode()];
            i++;
        }
        if (sharedProperties.getK47BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "47";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK47BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK47BestellungMode()];
            i++;
        }
        if (sharedProperties.getK48BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "48";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK48BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK48BestellungMode()];
            i++;
        }
        if (sharedProperties.getK52BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "52";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK52BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK52BestellungMode()];
            i++;
        }
        if (sharedProperties.getK53BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "53";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK53BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK53BestellungMode()];
            i++;
        }
        if (sharedProperties.getK57BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "57";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK57BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK57BestellungMode()];
            i++;
        }
        if (sharedProperties.getK58BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "58";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK58BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK58BestellungMode()];
            i++;
        }
        if (sharedProperties.getK59BestellungValue() > 0) {
            $scope[$scope.bestellungModel[i].article] = "59";
            $scope[$scope.bestellungModel[i].quantity] = sharedProperties.getK59BestellungValue();
            $scope[$scope.bestellungModel[i].mode] = $scope.options[sharedProperties.getK59BestellungMode()];
            i++;
        }
        $scope.schichtarbeitsplatz1 = sharedProperties.getSchicht1Value();
        $scope.schichtarbeitsplatz2 = sharedProperties.getSchicht2Value();
        $scope.schichtarbeitsplatz3 = sharedProperties.getSchicht3Value();
        $scope.schichtarbeitsplatz4 = sharedProperties.getSchicht4Value();
        $scope.schichtarbeitsplatz5 = 0;
        $scope.schichtarbeitsplatz6 = sharedProperties.getSchicht6Value();
        $scope.schichtarbeitsplatz7 = sharedProperties.getSchicht7Value();
        $scope.schichtarbeitsplatz8 = sharedProperties.getSchicht8Value();
        $scope.schichtarbeitsplatz9 = sharedProperties.getSchicht9Value();
        $scope.schichtarbeitsplatz10 = sharedProperties.getSchicht10Value();
        $scope.schichtarbeitsplatz11 = sharedProperties.getSchicht11Value();
        $scope.schichtarbeitsplatz12 = sharedProperties.getSchicht12Value();
        $scope.schichtarbeitsplatz13 = sharedProperties.getSchicht13Value();
        $scope.schichtarbeitsplatz14 = sharedProperties.getSchicht14Value();
        $scope.schichtarbeitsplatz15 = sharedProperties.getSchicht15Value();
        $scope.ueberstundenarbeitsplatz1 = sharedProperties.getUeberstunden1Value();
        $scope.ueberstundenarbeitsplatz2 = sharedProperties.getUeberstunden2Value();
        $scope.ueberstundenarbeitsplatz3 = sharedProperties.getUeberstunden3Value();
        $scope.ueberstundenarbeitsplatz4 = sharedProperties.getUeberstunden4Value();
        $scope.ueberstundenarbeitsplatz5 = 0;
        $scope.ueberstundenarbeitsplatz6 = sharedProperties.getUeberstunden6Value();
        $scope.ueberstundenarbeitsplatz7 = sharedProperties.getUeberstunden7Value();
        $scope.ueberstundenarbeitsplatz8 = sharedProperties.getUeberstunden8Value();
        $scope.ueberstundenarbeitsplatz9 = sharedProperties.getUeberstunden9Value();
        $scope.ueberstundenarbeitsplatz10 = sharedProperties.getUeberstunden10Value();
        $scope.ueberstundenarbeitsplatz11 = sharedProperties.getUeberstunden11Value();
        $scope.ueberstundenarbeitsplatz12 = sharedProperties.getUeberstunden12Value();
        $scope.ueberstundenarbeitsplatz13 = sharedProperties.getUeberstunden13Value();
        $scope.ueberstundenarbeitsplatz14 = sharedProperties.getUeberstunden14Value();
        $scope.ueberstundenarbeitsplatz15 = sharedProperties.getUeberstunden15Value();
        sharedProperties.setFirstUpdateValue(1);
    } else {
        $scope.p1InputValue = sharedProperties.getP1InputValue();
        $scope.p2InputValue = sharedProperties.getP2InputValue();
        $scope.p3InputValue = sharedProperties.getP3InputValue();
        $scope.p1DirektMengeValue = sharedProperties.getP1DirektMengeValue();
        $scope.p1DirektPreisValue = sharedProperties.getP1DirektPreisValue();
        $scope.p1DirektKonvetionalstrafeValue = sharedProperties.getP1DirektKonvetionalstrafeValue();
        $scope.p2DirektMengeValue = sharedProperties.getP2DirektMengeValue();
        $scope.p2DirektPreisValue = sharedProperties.getP2DirektPreisValue();
        $scope.p2DirektKonvetionalstrafeValue = sharedProperties.getP2DirektKonvetionalstrafeValue();
        $scope.p3DirektMengeValue = sharedProperties.getP3DirektMengeValue();
        $scope.p3DirektPreisValue = sharedProperties.getP3DirektPreisValue();
        $scope.p3DirektKonvetionalstrafeValue = sharedProperties.getP3DirektKonvetionalstrafeValue();
        $scope.fa1InputValue = "4";
        $scope.fa2InputValue = "5";
        $scope.fa3InputValue = "6";
        $scope.fa4InputValue = "7";
        $scope.fa5InputValue = "8";
        $scope.fa6InputValue = "9";
        $scope.fa7InputValue = "10";
        $scope.fa8InputValue = "11";
        $scope.fa9InputValue = "12";
        $scope.fa10InputValue = "13";
        $scope.fa11InputValue = "14";
        $scope.fa12InputValue = "15";
        $scope.fa13InputValue = "16";
        $scope.fa14InputValue = "17";
        $scope.fa15InputValue = "18";
        $scope.fa16InputValue = "19";
        $scope.fa17InputValue = "20";
        $scope.fa18InputValue = "26";
        $scope.fa19InputValue = "49";
        $scope.fa20InputValue = "54";
        $scope.fa21InputValue = "29";
        $scope.fa22InputValue = "50";
        $scope.fa23InputValue = "55";
        $scope.fa24InputValue = "30";
        $scope.fa25InputValue = "51";
        $scope.fa26InputValue = "56";
        $scope.fa27InputValue = "31";
        $scope.fa28InputValue = "1";
        $scope.fa29InputValue = "2";
        $scope.fa30InputValue = "3";
        $scope.fa31InputValue = sharedProperties.getfa31InputValue();
        $scope.fa32InputValue = sharedProperties.getfa32InputValue();
        $scope.fa33InputValue = sharedProperties.getfa33InputValue();
        $scope.fa34InputValue = sharedProperties.getfa34InputValue();
        $scope.fa35InputValue = sharedProperties.getfa35InputValue();
        $scope.fa36InputValue = sharedProperties.getfa36InputValue();
        $scope.fa37InputValue = sharedProperties.getfa37InputValue();
        $scope.fa38InputValue = sharedProperties.getfa38InputValue();
        $scope.fa39InputValue = sharedProperties.getfa39InputValue();
        $scope.fa40InputValue = sharedProperties.getfa40InputValue();
        $scope.fa41InputValue = sharedProperties.getfa41InputValue();
        $scope.fa42InputValue = sharedProperties.getfa42InputValue();
        $scope.fa43InputValue = sharedProperties.getfa43InputValue();
        $scope.fa44InputValue = sharedProperties.getfa44InputValue();
        $scope.fa45InputValue = sharedProperties.getfa45InputValue();
        $scope.fa46InputValue = sharedProperties.getfa46InputValue();
        $scope.fa47InputValue = sharedProperties.getfa47InputValue();
        $scope.fa48InputValue = sharedProperties.getfa48InputValue();
        $scope.fa49InputValue = sharedProperties.getfa49InputValue();
        $scope.fa50InputValue = sharedProperties.getfa50InputValue();
        $scope.fa51InputValue = sharedProperties.getfa51InputValue();
        $scope.fa52InputValue = sharedProperties.getfa52InputValue();
        $scope.fa53InputValue = sharedProperties.getfa53InputValue();
        $scope.fa54InputValue = sharedProperties.getfa54InputValue();
        $scope.fa55InputValue = sharedProperties.getfa55InputValue();
        $scope.fa56InputValue = sharedProperties.getfa56InputValue();
        $scope.fa57InputValue = sharedProperties.getfa57InputValue();
        $scope.fa58InputValue = sharedProperties.getfa58InputValue();
        $scope.fa59InputValue = sharedProperties.getfa59InputValue();
        $scope.fa60InputValue = sharedProperties.getfa60InputValue();
        $scope.fq1InputValue = sharedProperties.getfq1InputValue();
        $scope.fq2InputValue = sharedProperties.getfq2InputValue();
        $scope.fq4InputValue = sharedProperties.getfq3InputValue();
        $scope.fq4InputValue = sharedProperties.getfq4InputValue();
        $scope.fq5InputValue = sharedProperties.getfq5InputValue();
        $scope.fq6InputValue = sharedProperties.getfq6InputValue();
        $scope.fq7InputValue = sharedProperties.getfq7InputValue();
        $scope.fq8InputValue = sharedProperties.getfq8InputValue();
        $scope.fq9InputValue = sharedProperties.getfq9InputValue();
        $scope.fq10InputValue = sharedProperties.getfq10InputValue();
        $scope.fq11InputValue = sharedProperties.getfq11InputValue();
        $scope.fq12InputValue = sharedProperties.getfq12InputValue();
        $scope.fq13InputValue = sharedProperties.getfq13InputValue();
        $scope.fq14InputValue = sharedProperties.getfq14InputValue();
        $scope.fq15InputValue = sharedProperties.getfq15InputValue();
        $scope.fq16InputValue = sharedProperties.getfq16InputValue();
        $scope.fq17InputValue = sharedProperties.getfq17InputValue();
        $scope.fq18InputValue = sharedProperties.getfq18InputValue();
        $scope.fq19InputValue = sharedProperties.getfq19InputValue();
        $scope.fq20InputValue = sharedProperties.getfq20InputValue();
        $scope.fq21InputValue = sharedProperties.getfq21InputValue();
        $scope.fq22InputValue = sharedProperties.getfq22InputValue();
        $scope.fq23InputValue = sharedProperties.getfq23InputValue();
        $scope.fq24InputValue = sharedProperties.getfq24InputValue();
        $scope.fq25InputValue = sharedProperties.getfq25InputValue();
        $scope.fq26InputValue = sharedProperties.getfq26InputValue();
        $scope.fq27InputValue = sharedProperties.getfq27InputValue();
        $scope.fq28InputValue = sharedProperties.getfq28InputValue();
        $scope.fq29InputValue = sharedProperties.getfq29InputValue();
        $scope.fq30InputValue = sharedProperties.getfq30InputValue();
        $scope.fq31InputValue = sharedProperties.getfq31InputValue();
        $scope.fq32InputValue = sharedProperties.getfq32InputValue();
        $scope.fq33InputValue = sharedProperties.getfq33InputValue();
        $scope.fq34InputValue = sharedProperties.getfq34InputValue();
        $scope.fq35InputValue = sharedProperties.getfq35InputValue();
        $scope.fq36InputValue = sharedProperties.getfq36InputValue();
        $scope.fq37InputValue = sharedProperties.getfq37InputValue();
        $scope.fq38InputValue = sharedProperties.getfq38InputValue();
        $scope.fq39InputValue = sharedProperties.getfq39InputValue();
        $scope.fq40InputValue = sharedProperties.getfq40InputValue();
        $scope.fq41InputValue = sharedProperties.getfq41InputValue();
        $scope.fq42InputValue = sharedProperties.getfq42InputValue();
        $scope.fq43InputValue = sharedProperties.getfq43InputValue();
        $scope.fq44InputValue = sharedProperties.getfq44InputValue();
        $scope.fq45InputValue = sharedProperties.getfq45InputValue();
        $scope.fq46InputValue = sharedProperties.getfq46InputValue();
        $scope.fq47InputValue = sharedProperties.getfq47InputValue();
        $scope.fq48InputValue = sharedProperties.getfq48InputValue();
        $scope.fq49InputValue = sharedProperties.getfq49InputValue();
        $scope.fq50InputValue = sharedProperties.getfq50InputValue();
        $scope.fq51InputValue = sharedProperties.getfq51InputValue();
        $scope.fq52InputValue = sharedProperties.getfq52InputValue();
        $scope.fq53InputValue = sharedProperties.getfq53InputValue();
        $scope.fq54InputValue = sharedProperties.getfq54InputValue();
        $scope.fq55InputValue = sharedProperties.getfq55InputValue();
        $scope.fq56InputValue = sharedProperties.getfq56InputValue();
        $scope.fq57InputValue = sharedProperties.getfq57InputValue();
        $scope.fq58InputValue = sharedProperties.getfq58InputValue();
        $scope.fq59InputValue = sharedProperties.getfq59InputValue();
        $scope.fq60InputValue = sharedProperties.getfq60InputValue();
        $scope.a1InputValue = sharedProperties.geta1InputValue();
        $scope.q1InputValue = sharedProperties.getq1InputValue();
        if (typeof sharedProperties.getm1selectedOption() !== 'undefined' && sharedProperties.getm1selectedOption().name == 'normal') {
            $scope.m1selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm1selectedOption() !== 'undefined'){
            $scope.m1selectedOption = $scope.options[1];
        }
        $scope.a2InputValue = sharedProperties.geta2InputValue();
        $scope.q2InputValue = sharedProperties.getq2InputValue();
        if (typeof sharedProperties.getm2selectedOption() !== 'undefined' && sharedProperties.getm2selectedOption().name == 'normal') {
            $scope.m2selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm2selectedOption() !== 'undefined'){
            $scope.m2selectedOption = $scope.options[1];
        }
        $scope.a4InputValue = sharedProperties.geta3InputValue();
        $scope.q3InputValue = sharedProperties.getq3InputValue();
        if (typeof sharedProperties.getm3selectedOption() !== 'undefined' && sharedProperties.getm3selectedOption().name == 'normal') {
            $scope.m3selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm3selectedOption() !== 'undefined'){
            $scope.m3selectedOption = $scope.options[1];
        }
        $scope.a4InputValue = sharedProperties.geta4InputValue();
        $scope.q4InputValue = sharedProperties.getq4InputValue();
        if (typeof sharedProperties.getm4selectedOption() !== 'undefined' && sharedProperties.getm4selectedOption().name == 'normal') {
            $scope.m4selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm4selectedOption() !== 'undefined'){
            $scope.m4selectedOption = $scope.options[1];
        }
        $scope.a5InputValue = sharedProperties.geta5InputValue();
        $scope.q5InputValue = sharedProperties.getq5InputValue();
        if (typeof sharedProperties.getm5selectedOption() !== 'undefined' && sharedProperties.getm5selectedOption().name == 'normal') {
            $scope.m5selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm5selectedOption() !== 'undefined') {
            $scope.m5selectedOption = $scope.options[1];
        }
        $scope.a6InputValue = sharedProperties.geta6InputValue();
        $scope.q6InputValue = sharedProperties.getq6InputValue();
        if (typeof sharedProperties.getm6selectedOption() !== 'undefined' && sharedProperties.getm6selectedOption().name == 'normal') {
            $scope.m6selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm6selectedOption() !== 'undefined'){
            $scope.m6selectedOption = $scope.options[1];
        }
        $scope.a7InputValue = sharedProperties.geta7InputValue();
        $scope.q7InputValue = sharedProperties.getq7InputValue();
        if (typeof sharedProperties.getm7selectedOption() !== 'undefined' && sharedProperties.getm7selectedOption().name == 'normal') {
            $scope.m7selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm7selectedOption() !== 'undefined'){
            $scope.m7selectedOption = $scope.options[1];
        }
        $scope.a8InputValue = sharedProperties.geta8InputValue();
        $scope.q8InputValue = sharedProperties.getq8InputValue();
        if (typeof sharedProperties.getm8selectedOption() !== 'undefined' && sharedProperties.getm8selectedOption().name == 'normal') {
            $scope.m8selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm8selectedOption() !== 'undefined'){
            $scope.m8selectedOption = $scope.options[1];
        }
        $scope.a9InputValue = sharedProperties.geta9InputValue();
        $scope.q9InputValue = sharedProperties.getq9InputValue();
        if (typeof sharedProperties.getm9selectedOption() !== 'undefined' && sharedProperties.getm9selectedOption().name == 'normal') {
            $scope.m9selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm9selectedOption() !== 'undefined'){
            $scope.m9selectedOption = $scope.options[1];
        }
        $scope.a10InputValue = sharedProperties.geta10InputValue();
        $scope.q10InputValue = sharedProperties.getq10InputValue();
        if (typeof sharedProperties.getm10selectedOption() !== 'undefined' && sharedProperties.getm10selectedOption().name == 'normal') {
            $scope.m10selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm10selectedOption() !== 'undefined'){
            $scope.m10selectedOption = $scope.options[1];
        }
        $scope.a11InputValue = sharedProperties.geta11InputValue();
        $scope.q11InputValue = sharedProperties.getq11InputValue();
        if (typeof sharedProperties.getm11selectedOption() !== 'undefined' && sharedProperties.getm11selectedOption().name == 'normal') {
            $scope.m11selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm11selectedOption() !== 'undefined'){
            $scope.m11selectedOption = $scope.options[1];
        }
        $scope.a12InputValue = sharedProperties.geta12InputValue();
        $scope.q12InputValue = sharedProperties.getq12InputValue();
        if (typeof sharedProperties.getm12selectedOption() !== 'undefined' && sharedProperties.getm12selectedOption().name == 'normal') {
            $scope.m12selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm12selectedOption() !== 'undefined'){
            $scope.m12selectedOption = $scope.options[1];
        }
        $scope.a13InputValue = sharedProperties.geta13InputValue();
        $scope.q13InputValue = sharedProperties.getq13InputValue();
        if (typeof sharedProperties.getm13selectedOption() !== 'undefined' && sharedProperties.getm13selectedOption().name == 'normal') {
            $scope.m13selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm13selectedOption() !== 'undefined'){
            $scope.m13selectedOption = $scope.options[1];
        }
        $scope.a14InputValue = sharedProperties.geta14InputValue();
        $scope.q14InputValue = sharedProperties.getq14InputValue();
        if (typeof sharedProperties.getm14selectedOption() !== 'undefined' && sharedProperties.getm14selectedOption().name == 'normal') {
            $scope.m14selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm14selectedOption() !== 'undefined'){
            $scope.m14selectedOption = $scope.options[1];
        }
        $scope.a15InputValue = sharedProperties.geta15InputValue();
        $scope.q15InputValue = sharedProperties.getq15InputValue();
        if (typeof sharedProperties.getm15selectedOption() !== 'undefined' && sharedProperties.getm15selectedOption().name == 'normal') {
            $scope.m15selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm15selectedOption() !== 'undefined'){
            $scope.m15selectedOption = $scope.options[1];
        }
        $scope.a16InputValue = sharedProperties.geta16InputValue();
        $scope.q16InputValue = sharedProperties.getq16InputValue();
        if (typeof sharedProperties.getm16selectedOption() !== 'undefined' && sharedProperties.getm16selectedOption().name == 'normal') {
            $scope.m16selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm16selectedOption() !== 'undefined'){
            $scope.m16selectedOption = $scope.options[1];
        }
        $scope.a17InputValue = sharedProperties.geta17InputValue();
        $scope.q17InputValue = sharedProperties.getq17InputValue();
        if (typeof sharedProperties.getm17selectedOption() !== 'undefined' && sharedProperties.getm17selectedOption().name == 'normal') {
            $scope.m17selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm17selectedOption() !== 'undefined'){
            $scope.m17selectedOption = $scope.options[1];
        }
        $scope.a18InputValue = sharedProperties.geta18InputValue();
        $scope.q18InputValue = sharedProperties.getq18InputValue();
        if (typeof sharedProperties.getm18selectedOption() !== 'undefined' && sharedProperties.getm18selectedOption().name == 'normal') {
            $scope.m18selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm18selectedOption() !== 'undefined'){
            $scope.m18selectedOption = $scope.options[1];
        }
        $scope.a19InputValue = sharedProperties.geta19InputValue();
        $scope.q19InputValue = sharedProperties.getq19InputValue();
        if (typeof sharedProperties.getm19selectedOption() !== 'undefined' && sharedProperties.getm19selectedOption().name == 'normal') {
            $scope.m19selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm19selectedOption() !== 'undefined'){
            $scope.m19selectedOption = $scope.options[1];
        }
        $scope.a20InputValue = sharedProperties.geta20InputValue();
        $scope.q20InputValue = sharedProperties.getq20InputValue();
        if (typeof sharedProperties.getm20selectedOption() !== 'undefined' && sharedProperties.getm20selectedOption().name == 'normal') {
            $scope.m20selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm20selectedOption() !== 'undefined'){
            $scope.m20selectedOption = $scope.options[1];
        }
        $scope.a21InputValue = sharedProperties.geta21InputValue();
        $scope.q21InputValue = sharedProperties.getq21InputValue();
        if (typeof sharedProperties.getm21selectedOption() !== 'undefined' && sharedProperties.getm21selectedOption().name == 'normal') {
            $scope.m21selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm21selectedOption() !== 'undefined'){
            $scope.m21selectedOption = $scope.options[1];
        }
        $scope.a22InputValue = sharedProperties.geta22InputValue();
        $scope.q22InputValue = sharedProperties.getq22InputValue();
        if (typeof sharedProperties.getm22selectedOption() !== 'undefined' && sharedProperties.getm22selectedOption().name == 'normal') {
            $scope.m22selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm22selectedOption() !== 'undefined'){
            $scope.m22selectedOption = $scope.options[1];
        }
        $scope.a23InputValue = sharedProperties.geta23InputValue();
        $scope.q23InputValue = sharedProperties.getq23InputValue();
        if (typeof sharedProperties.getm23selectedOption() !== 'undefined' && sharedProperties.getm23selectedOption().name == 'normal') {
            $scope.m23selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm23selectedOption() !== 'undefined'){
            $scope.m23selectedOption = $scope.options[1];
        }
        $scope.a24InputValue = sharedProperties.geta24InputValue();
        $scope.q24InputValue = sharedProperties.getq24InputValue();
        if (typeof sharedProperties.getm24selectedOption() !== 'undefined' && sharedProperties.getm24selectedOption().name == 'normal') {
            $scope.m24selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm24selectedOption() !== 'undefined'){
            $scope.m24selectedOption = $scope.options[1];
        }
        $scope.a25InputValue = sharedProperties.geta25InputValue();
        $scope.q25InputValue = sharedProperties.getq25InputValue();
        if (typeof sharedProperties.getm25selectedOption() !== 'undefined' && sharedProperties.getm25selectedOption().name == 'normal') {
            $scope.m25selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm25selectedOption() !== 'undefined'){
            $scope.m25selectedOption = $scope.options[1];
        }
        $scope.a26InputValue = sharedProperties.geta26InputValue();
        $scope.q26InputValue = sharedProperties.getq26InputValue();
        if (typeof sharedProperties.getm26selectedOption() !== 'undefined' && sharedProperties.getm26selectedOption().name == 'normal') {
            $scope.m26selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm26selectedOption() !== 'undefined'){
            $scope.m26selectedOption = $scope.options[1];
        }
        $scope.a27InputValue = sharedProperties.geta27InputValue();
        $scope.q27InputValue = sharedProperties.getq27InputValue();
        if (typeof sharedProperties.getm27selectedOption() !== 'undefined' && sharedProperties.getm27selectedOption().name == 'normal') {
            $scope.m27selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm27selectedOption() !== 'undefined'){
            $scope.m27selectedOption = $scope.options[1];
        }
        $scope.a28InputValue = sharedProperties.geta28InputValue();
        $scope.q28InputValue = sharedProperties.getq28InputValue();
        if (typeof sharedProperties.getm28selectedOption() !== 'undefined' && sharedProperties.getm28selectedOption().name == 'normal') {
            $scope.m28selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm28selectedOption() !== 'undefined'){
            $scope.m28selectedOption = $scope.options[1];
        }
        $scope.a29InputValue = sharedProperties.geta29InputValue();
        $scope.q29InputValue = sharedProperties.getq29InputValue();
        if (typeof sharedProperties.getm29selectedOption() !== 'undefined' && sharedProperties.getm29selectedOption().name == 'normal') {
            $scope.m29selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm29selectedOption() !== 'undefined'){
            $scope.m29selectedOption = $scope.options[1];
        }
        $scope.a30InputValue = sharedProperties.geta30InputValue();
        $scope.q30InputValue = sharedProperties.getq30InputValue();
        if (typeof sharedProperties.getm30selectedOption() !== 'undefined' && sharedProperties.getm30selectedOption().name == 'normal') {
            $scope.m30selectedOption = $scope.options[0];
        } else if (typeof sharedProperties.getm30selectedOption() !== 'undefined'){
            $scope.m30selectedOption = $scope.options[1];
        }
        $scope.schichtarbeitsplatz1 = sharedProperties.getSchichtZ1Value();
        $scope.schichtarbeitsplatz2 = sharedProperties.getSchichtZ2Value();
        $scope.schichtarbeitsplatz3 = sharedProperties.getSchichtZ3Value();
        $scope.schichtarbeitsplatz4 = sharedProperties.getSchichtZ4Value();
        $scope.schichtarbeitsplatz5 = 0;
        $scope.schichtarbeitsplatz6 = sharedProperties.getSchichtZ6Value();
        $scope.schichtarbeitsplatz7 = sharedProperties.getSchichtZ7Value();
        $scope.schichtarbeitsplatz8 = sharedProperties.getSchichtZ8Value();
        $scope.schichtarbeitsplatz9 = sharedProperties.getSchichtZ9Value();
        $scope.schichtarbeitsplatz10 = sharedProperties.getSchichtZ10Value();
        $scope.schichtarbeitsplatz11 = sharedProperties.getSchichtZ11Value();
        $scope.schichtarbeitsplatz12 = sharedProperties.getSchichtZ12Value();
        $scope.schichtarbeitsplatz13 = sharedProperties.getSchichtZ13Value();
        $scope.schichtarbeitsplatz14 = sharedProperties.getSchichtZ14Value();
        $scope.schichtarbeitsplatz15 = sharedProperties.getSchichtZ15Value();
        $scope.ueberstundenarbeitsplatz1 = sharedProperties.getUeberstundenZ1Value();
        $scope.ueberstundenarbeitsplatz2 = sharedProperties.getUeberstundenZ2Value();
        $scope.ueberstundenarbeitsplatz3 = sharedProperties.getUeberstundenZ3Value();
        $scope.ueberstundenarbeitsplatz4 = sharedProperties.getUeberstundenZ4Value();
        $scope.ueberstundenarbeitsplatz5 = 0;
        $scope.ueberstundenarbeitsplatz6 = sharedProperties.getUeberstundenZ6Value();
        $scope.ueberstundenarbeitsplatz7 = sharedProperties.getUeberstundenZ7Value();
        $scope.ueberstundenarbeitsplatz8 = sharedProperties.getUeberstundenZ8Value();
        $scope.ueberstundenarbeitsplatz9 = sharedProperties.getUeberstundenZ9Value();
        $scope.ueberstundenarbeitsplatz10 = sharedProperties.getUeberstundenZ10Value();
        $scope.ueberstundenarbeitsplatz11 = sharedProperties.getUeberstundenZ11Value();
        $scope.ueberstundenarbeitsplatz12 = sharedProperties.getUeberstundenZ12Value();
        $scope.ueberstundenarbeitsplatz13 = sharedProperties.getUeberstundenZ13Value();
        $scope.ueberstundenarbeitsplatz14 = sharedProperties.getUeberstundenZ14Value();
        $scope.ueberstundenarbeitsplatz15 = sharedProperties.getUeberstundenZ15Value();
    }

    //$scope.options = [{name: "fast", id: 1}, {name: 'normal', id: 2}];
    //$scope.m1selectedOption = $scope.options[1];
    $scope.arbeitsplatz = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Arbeitsplatz";
        } else {
            return "Workplace"
        }
    };
    $scope.schicht = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Schicht";
        } else {
            return "Shift"
        }
    };
    $scope.ueberstunden = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Überstunden";
        } else {
            return "Overtime"
        }
    };
    $scope.menge = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Menge";
        } else {
            return "Amount"
        }
    };
    $scope.preis = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Preis";
        } else {
            return "Price"
        }
    };
    $scope.konventionalstrafe = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Konventionalstrafe";
        } else {
            return "Contract penality"
        }
    };
    $scope.direktverkauf = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Direktverkauf";
        } else {
            return "Direct sales"
        }
    };
    $scope.vertriebswunsch = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Vertriebswunsch";
        } else {
            return "Sales"
        }
    };
    $scope.bestellungen = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Bestellungen";
        } else {
            return "Orders"
        }
    };
    $scope.artikel = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Artikel";
        } else {
            return "Article"
        }
    };
    $scope.menge = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Menge";
        } else {
            return "Quantity"
        }
    };
    $scope.modus = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Modus";
        } else {
            return "Mode"
        }
    };
    $scope.fertigungsauftraege = function () {
        if (sharedProperties.getLanguageValue() == "DE") {
            return "Fertigungsaufträge";
        } else {
            return "Production releases"
        }
    };
    $scope.$on('$locationChangeStart', function (event, next, current) {
        sharedProperties.setP1InputValue($scope.p1InputValue);
        sharedProperties.setP2InputValue($scope.p2InputValue);
        sharedProperties.setP3InputValue($scope.p3InputValue);
        sharedProperties.setP1DirektMengeValue($scope.p1DirektMengeValue);
        sharedProperties.setP2DirektMengeValue($scope.p2DirektMengeValue);
        sharedProperties.setP3DirektMengeValue($scope.p3DirektMengeValue);
        sharedProperties.setP1DirektPreisValue($scope.p1DirektPreisValue);
        sharedProperties.setP2DirektPreisValue($scope.p2DirektPreisValue);
        sharedProperties.setP3DirektPreisValue($scope.p3DirektPreisValue);
        sharedProperties.setP1DirektKonvetionalstrafeValue($scope.p1DirektKonvetionalstrafeValue);
        sharedProperties.setP2DirektKonvetionalstrafeValue($scope.p2DirektKonvetionalstrafeValue);
        sharedProperties.setP3DirektKonvetionalstrafeValue($scope.p3DirektKonvetionalstrafeValue);
        sharedProperties.setfq1InputValue($scope.fq1InputValue);
        sharedProperties.setfq2InputValue($scope.fq2InputValue);
        sharedProperties.setfq3InputValue($scope.fq3InputValue);
        sharedProperties.setfq4InputValue($scope.fq4InputValue);
        sharedProperties.setfq5InputValue($scope.fq5InputValue);
        sharedProperties.setfq6InputValue($scope.fq6InputValue);
        sharedProperties.setfq7InputValue($scope.fq7InputValue);
        sharedProperties.setfq8InputValue($scope.fq8InputValue);
        sharedProperties.setfq9InputValue($scope.fq9InputValue);
        sharedProperties.setfq10InputValue($scope.fq10InputValue);
        sharedProperties.setfq11InputValue($scope.fq11InputValue);
        sharedProperties.setfq12InputValue($scope.fq12InputValue);
        sharedProperties.setfq13InputValue($scope.fq13InputValue);
        sharedProperties.setfq14InputValue($scope.fq14InputValue);
        sharedProperties.setfq15InputValue($scope.fq15InputValue);
        sharedProperties.setfq16InputValue($scope.fq16InputValue);
        sharedProperties.setfq17InputValue($scope.fq17InputValue);
        sharedProperties.setfq18InputValue($scope.fq18InputValue);
        sharedProperties.setfq19InputValue($scope.fq19InputValue);
        sharedProperties.setfq20InputValue($scope.fq20InputValue);
        sharedProperties.setfq21InputValue($scope.fq21InputValue);
        sharedProperties.setfq22InputValue($scope.fq22InputValue);
        sharedProperties.setfq23InputValue($scope.fq23InputValue);
        sharedProperties.setfq24InputValue($scope.fq24InputValue);
        sharedProperties.setfq25InputValue($scope.fq25InputValue);
        sharedProperties.setfq26InputValue($scope.fq26InputValue);
        sharedProperties.setfq27InputValue($scope.fq27InputValue);
        sharedProperties.setfq28InputValue($scope.fq28InputValue);
        sharedProperties.setfq29InputValue($scope.fq29InputValue);
        sharedProperties.setfq30InputValue($scope.fq30InputValue);
        sharedProperties.setfq31InputValue($scope.fq31InputValue);
        sharedProperties.setfq32InputValue($scope.fq32InputValue);
        sharedProperties.setfq33InputValue($scope.fq33InputValue);
        sharedProperties.setfq34InputValue($scope.fq34InputValue);
        sharedProperties.setfq35InputValue($scope.fq35InputValue);
        sharedProperties.setfq36InputValue($scope.fq36InputValue);
        sharedProperties.setfq37InputValue($scope.fq37InputValue);
        sharedProperties.setfq38InputValue($scope.fq38InputValue);
        sharedProperties.setfq39InputValue($scope.fq39InputValue);
        sharedProperties.setfq40InputValue($scope.fq40InputValue);
        sharedProperties.setfq41InputValue($scope.fq41InputValue);
        sharedProperties.setfq42InputValue($scope.fq42InputValue);
        sharedProperties.setfq43InputValue($scope.fq43InputValue);
        sharedProperties.setfq44InputValue($scope.fq44InputValue);
        sharedProperties.setfq45InputValue($scope.fq45InputValue);
        sharedProperties.setfq46InputValue($scope.fq46InputValue);
        sharedProperties.setfq47InputValue($scope.fq47InputValue);
        sharedProperties.setfq48InputValue($scope.fq48InputValue);
        sharedProperties.setfq49InputValue($scope.fq49InputValue);
        sharedProperties.setfq50InputValue($scope.fq50InputValue);
        sharedProperties.setfq51InputValue($scope.fq51InputValue);
        sharedProperties.setfq52InputValue($scope.fq52InputValue);
        sharedProperties.setfq53InputValue($scope.fq53InputValue);
        sharedProperties.setfq54InputValue($scope.fq54InputValue);
        sharedProperties.setfq55InputValue($scope.fq55InputValue);
        sharedProperties.setfq56InputValue($scope.fq56InputValue);
        sharedProperties.setfq57InputValue($scope.fq57InputValue);
        sharedProperties.setfq58InputValue($scope.fq58InputValue);
        sharedProperties.setfq59InputValue($scope.fq59InputValue);
        sharedProperties.setfq60InputValue($scope.fq60InputValue);
        sharedProperties.setfa31InputValue($scope.fa31InputValue);
        sharedProperties.setfa32InputValue($scope.fa32InputValue);
        sharedProperties.setfa33InputValue($scope.fa33InputValue);
        sharedProperties.setfa34InputValue($scope.fa34InputValue);
        sharedProperties.setfa35InputValue($scope.fa35InputValue);
        sharedProperties.setfa36InputValue($scope.fa36InputValue);
        sharedProperties.setfa37InputValue($scope.fa37InputValue);
        sharedProperties.setfa38InputValue($scope.fa38InputValue);
        sharedProperties.setfa39InputValue($scope.fa39InputValue);
        sharedProperties.setfa40InputValue($scope.fa40InputValue);
        sharedProperties.setfa41InputValue($scope.fa41InputValue);
        sharedProperties.setfa42InputValue($scope.fa42InputValue);
        sharedProperties.setfa43InputValue($scope.fa43InputValue);
        sharedProperties.setfa44InputValue($scope.fa44InputValue);
        sharedProperties.setfa45InputValue($scope.fa45InputValue);
        sharedProperties.setfa46InputValue($scope.fa46InputValue);
        sharedProperties.setfa47InputValue($scope.fa47InputValue);
        sharedProperties.setfa48InputValue($scope.fa48InputValue);
        sharedProperties.setfa49InputValue($scope.fa49InputValue);
        sharedProperties.setfa50InputValue($scope.fa50InputValue);
        sharedProperties.setfa51InputValue($scope.fa51InputValue);
        sharedProperties.setfa52InputValue($scope.fa52InputValue);
        sharedProperties.setfa53InputValue($scope.fa53InputValue);
        sharedProperties.setfa54InputValue($scope.fa54InputValue);
        sharedProperties.setfa55InputValue($scope.fa55InputValue);
        sharedProperties.setfa56InputValue($scope.fa56InputValue);
        sharedProperties.setfa57InputValue($scope.fa57InputValue);
        sharedProperties.setfa58InputValue($scope.fa58InputValue);
        sharedProperties.setfa59InputValue($scope.fa59InputValue);
        sharedProperties.setfa60InputValue($scope.fa60InputValue);
        sharedProperties.seta1InputValue($scope.a1InputValue);
        sharedProperties.setq1InputValue($scope.q1InputValue);
        sharedProperties.setm1selectedOption($scope.m1selectedOption);
        sharedProperties.seta2InputValue($scope.a2InputValue);
        sharedProperties.setq2InputValue($scope.q2InputValue);
        sharedProperties.setm2selectedOption($scope.m2selectedOption);
        sharedProperties.seta3InputValue($scope.a3InputValue);
        sharedProperties.setq3InputValue($scope.q3InputValue);
        sharedProperties.setm3selectedOption($scope.m3selectedOption);
        sharedProperties.seta4InputValue($scope.a4InputValue);
        sharedProperties.setq4InputValue($scope.q4InputValue);
        sharedProperties.setm4selectedOption($scope.m4selectedOption);
        sharedProperties.seta5InputValue($scope.a5InputValue);
        sharedProperties.setq5InputValue($scope.q5InputValue);
        sharedProperties.setm5selectedOption($scope.m5selectedOption);
        sharedProperties.seta6InputValue($scope.a6InputValue);
        sharedProperties.setq6InputValue($scope.q6InputValue);
        sharedProperties.setm6selectedOption($scope.m6selectedOption);
        sharedProperties.seta7InputValue($scope.a7InputValue);
        sharedProperties.setq7InputValue($scope.q7InputValue);
        sharedProperties.setm7selectedOption($scope.m7selectedOption);
        sharedProperties.seta8InputValue($scope.a8InputValue);
        sharedProperties.setq8InputValue($scope.q8InputValue);
        sharedProperties.setm8selectedOption($scope.m8selectedOption);
        sharedProperties.seta9InputValue($scope.a9InputValue);
        sharedProperties.setq9InputValue($scope.q9InputValue);
        sharedProperties.setm9selectedOption($scope.m9selectedOption);
        sharedProperties.seta10InputValue($scope.a10InputValue);
        sharedProperties.setq10InputValue($scope.q10InputValue);
        sharedProperties.setm10selectedOption($scope.m10selectedOption);
        sharedProperties.seta11InputValue($scope.a11InputValue);
        sharedProperties.setq11InputValue($scope.q11InputValue);
        sharedProperties.setm11selectedOption($scope.m11selectedOption);
        sharedProperties.seta12InputValue($scope.a12InputValue);
        sharedProperties.setq12InputValue($scope.q12InputValue);
        sharedProperties.setm12selectedOption($scope.m12selectedOption);
        sharedProperties.seta13InputValue($scope.a13InputValue);
        sharedProperties.setq13InputValue($scope.q13InputValue);
        sharedProperties.setm13selectedOption($scope.m13selectedOption);
        sharedProperties.seta14InputValue($scope.a14InputValue);
        sharedProperties.setq14InputValue($scope.q14InputValue);
        sharedProperties.setm14selectedOption($scope.m14selectedOption);
        sharedProperties.seta15InputValue($scope.a15InputValue);
        sharedProperties.setq15InputValue($scope.q15InputValue);
        sharedProperties.setm15selectedOption($scope.m15selectedOption);
        sharedProperties.seta16InputValue($scope.a16InputValue);
        sharedProperties.setq16InputValue($scope.q16InputValue);
        sharedProperties.setm16selectedOption($scope.m16selectedOption);
        sharedProperties.seta17InputValue($scope.a17InputValue);
        sharedProperties.setq17InputValue($scope.q17InputValue);
        sharedProperties.setm17selectedOption($scope.m17selectedOption);
        sharedProperties.seta18InputValue($scope.a18InputValue);
        sharedProperties.setq18InputValue($scope.q18InputValue);
        sharedProperties.setm18selectedOption($scope.m18selectedOption);
        sharedProperties.seta19InputValue($scope.a19InputValue);
        sharedProperties.setq19InputValue($scope.q19InputValue);
        sharedProperties.setm19selectedOption($scope.m19selectedOption);
        sharedProperties.seta20InputValue($scope.a20InputValue);
        sharedProperties.setq20InputValue($scope.q20InputValue);
        sharedProperties.setm20selectedOption($scope.m20selectedOption);
        sharedProperties.seta21InputValue($scope.a21InputValue);
        sharedProperties.setq21InputValue($scope.q21InputValue);
        sharedProperties.setm21selectedOption($scope.m21selectedOption);
        sharedProperties.seta22InputValue($scope.a22InputValue);
        sharedProperties.setq22InputValue($scope.q22InputValue);
        sharedProperties.setm22selectedOption($scope.m22selectedOption);
        sharedProperties.seta23InputValue($scope.a23InputValue);
        sharedProperties.setq23InputValue($scope.q23InputValue);
        sharedProperties.setm23selectedOption($scope.m23selectedOption);
        sharedProperties.seta24InputValue($scope.a24InputValue);
        sharedProperties.setq24InputValue($scope.q24InputValue);
        sharedProperties.setm24selectedOption($scope.m24selectedOption);
        sharedProperties.seta25InputValue($scope.a25InputValue);
        sharedProperties.setq25InputValue($scope.q25InputValue);
        sharedProperties.setm25selectedOption($scope.m25selectedOption);
        sharedProperties.seta26InputValue($scope.a26InputValue);
        sharedProperties.setq26InputValue($scope.q26InputValue);
        sharedProperties.setm26selectedOption($scope.m26selectedOption);
        sharedProperties.seta27InputValue($scope.a27InputValue);
        sharedProperties.setq27InputValue($scope.q27InputValue);
        sharedProperties.setm27selectedOption($scope.m27selectedOption);
        sharedProperties.seta28InputValue($scope.a28InputValue);
        sharedProperties.setq28InputValue($scope.q28InputValue);
        sharedProperties.setm28selectedOption($scope.m28selectedOption);
        sharedProperties.seta29InputValue($scope.a29InputValue);
        sharedProperties.setq29InputValue($scope.q29InputValue);
        sharedProperties.setm29selectedOption($scope.m29selectedOption);
        sharedProperties.seta30InputValue($scope.a30InputValue);
        sharedProperties.setq30InputValue($scope.q30InputValue);
        sharedProperties.setm30selectedOption($scope.m30selectedOption);
        sharedProperties.setSchichtZ1Value($scope.schichtarbeitsplatz1);
        sharedProperties.setSchichtZ2Value($scope.schichtarbeitsplatz2);
        sharedProperties.setSchichtZ3Value($scope.schichtarbeitsplatz3);
        sharedProperties.setSchichtZ4Value($scope.schichtarbeitsplatz4);
        sharedProperties.setSchichtZ6Value($scope.schichtarbeitsplatz6);
        sharedProperties.setSchichtZ7Value($scope.schichtarbeitsplatz7);
        sharedProperties.setSchichtZ8Value($scope.schichtarbeitsplatz8);
        sharedProperties.setSchichtZ9Value($scope.schichtarbeitsplatz9);
        sharedProperties.setSchichtZ10Value($scope.schichtarbeitsplatz10);
        sharedProperties.getSchichtZ11Value($scope.schichtarbeitsplatz11);
        sharedProperties.setSchichtZ12Value($scope.schichtarbeitsplatz12);
        sharedProperties.setSchichtZ13Value($scope.schichtarbeitsplatz13);
        sharedProperties.setSchichtZ14Value($scope.schichtarbeitsplatz14);
        sharedProperties.setSchichtZ15Value($scope.schichtarbeitsplatz15);
        sharedProperties.setUeberstundenZ1Value($scope.ueberstundenarbeitsplatz1);
        sharedProperties.setUeberstundenZ2Value($scope.ueberstundenarbeitsplatz2);
        sharedProperties.setUeberstundenZ3Value($scope.ueberstundenarbeitsplatz3);
        sharedProperties.setUeberstundenZ4Value($scope.ueberstundenarbeitsplatz4);
        sharedProperties.setUeberstundenZ6Value($scope.ueberstundenarbeitsplatz6);
        sharedProperties.setUeberstundenZ7Value($scope.ueberstundenarbeitsplatz7);
        sharedProperties.setUeberstundenZ8Value($scope.ueberstundenarbeitsplatz8);
        sharedProperties.setUeberstundenZ9Value($scope.ueberstundenarbeitsplatz9);
        sharedProperties.setUeberstundenZ10Value($scope.ueberstundenarbeitsplatz10);
        sharedProperties.setUeberstundenZ11Value($scope.ueberstundenarbeitsplatz11);
        sharedProperties.setUeberstundenZ12Value($scope.ueberstundenarbeitsplatz12);
        sharedProperties.setUeberstundenZ13Value($scope.ueberstundenarbeitsplatz13);
        sharedProperties.setUeberstundenZ14Value($scope.ueberstundenarbeitsplatz14);
        sharedProperties.setUeberstundenZ15Value($scope.ueberstundenarbeitsplatz15);
    });


    $scope.getBlob = function () {
        var tmp = 5;
        var order = '{"order":[';
        if ($scope.q1InputValue > 0) {
            if ($scope.m1selectedOption.name == 'normal') {
                var tmp = 5;
            } else {
                tmp = 4;
            }
            order = order + '{"_article":' + $scope.a1InputValue + ', "_quantity":' + $scope.q1InputValue + ', "_modus":' + tmp + '}';
            if ($scope.q2InputValue > 0) {
                if ($scope.m2selectedOption.name == 'normal') {
                    var tmp = 5;
                } else {
                    tmp = 4;
                }
                order = order + ',{"_article":' + $scope.a2InputValue + ', "_quantity":' + $scope.q2InputValue + ', "_modus":' + tmp + '}';
                if ($scope.q3InputValue > 0) {
                    if ($scope.m3selectedOption.name == 'normal') {
                        var tmp = 5;
                    } else {
                        tmp = 4;
                    }
                    order = order + ',{"_article":' + $scope.a3InputValue + ', "_quantity":' + $scope.q3InputValue + ', "_modus":' + tmp + '}';
                    if ($scope.q4InputValue > 0) {
                        if ($scope.m4selectedOption.name == 'normal') {
                            var tmp = 5;
                        } else {
                            tmp = 4;
                        }
                        order = order + ',{"_article":' + $scope.a4InputValue + ', "_quantity":' + $scope.q4InputValue + ', "_modus":' + tmp + '}';
                        if ($scope.q5InputValue > 0) {
                            if ($scope.m5selectedOption.name == 'normal') {
                                var tmp = 5;
                            } else {
                                tmp = 4;
                            }
                            order = order + ',{"_article":' + $scope.a5InputValue + ', "_quantity":' + $scope.q5InputValue + ', "_modus":' + tmp + '}';
                            if ($scope.q6InputValue > 0) {
                                if ($scope.m6selectedOption.name == 'normal') {
                                    var tmp = 5;
                                } else {
                                    tmp = 4;
                                }
                                order = order + ',{"_article":' + $scope.a6InputValue + ', "_quantity":' + $scope.q6InputValue + ', "_modus":' + tmp + '}';
                                if ($scope.q7InputValue > 0) {
                                    if ($scope.m7selectedOption.name == 'normal') {
                                        var tmp = 5;
                                    } else {
                                        tmp = 4;
                                    }
                                    order = order + ',{"_article":' + $scope.a7InputValue + ', "_quantity":' + $scope.q7InputValue + ', "_modus":' + tmp + '}';
                                    if ($scope.q8InputValue > 0) {
                                        if ($scope.m8selectedOption.name == 'normal') {
                                            var tmp = 5;
                                        } else {
                                            tmp = 4;
                                        }
                                        order = order + ',{"_article":' + $scope.a8InputValue + ', "_quantity":' + $scope.q8InputValue + ', "_modus":' + tmp + '}';
                                        if ($scope.q9InputValue > 0) {
                                            if ($scope.m9selectedOption.name == 'normal') {
                                                var tmp = 5;
                                            } else {
                                                tmp = 4;
                                            }
                                            order = order + ',{"_article":' + $scope.a9InputValue + ', "_quantity":' + $scope.q9InputValue + ', "_modus":' + tmp + '}';
                                            if ($scope.q10InputValue > 0) {
                                                if ($scope.m10selectedOption.name == 'normal') {
                                                    var tmp = 5;
                                                } else {
                                                    tmp = 4;
                                                }
                                                order = order + ',{"_article":' + $scope.a10InputValue + ', "_quantity":' + $scope.q10InputValue + ', "_modus":' + tmp + '}';
                                                if ($scope.q11InputValue > 0) {
                                                    if ($scope.m11selectedOption.name == 'normal') {
                                                        var tmp = 5;
                                                    } else {
                                                        tmp = 4;
                                                    }
                                                    order = order + ',{"_article":' + $scope.a11InputValue + ', "_quantity":' + $scope.q11InputValue + ', "_modus":' + tmp + '}';
                                                    if ($scope.q12InputValue > 0) {
                                                        if ($scope.m12selectedOption.name == 'normal') {
                                                            var tmp = 5;
                                                        } else {
                                                            tmp = 4;
                                                        }
                                                        order = order + ',{"_article":' + $scope.a12InputValue + ', "_quantity":' + $scope.q12InputValue + ', "_modus":' + tmp + '}';
                                                        if ($scope.q13InputValue > 0) {
                                                            if ($scope.m13selectedOption.name == 'normal') {
                                                                var tmp = 5;
                                                            } else {
                                                                tmp = 4;
                                                            }
                                                            order = order + ',{"_article":' + $scope.a13InputValue + ', "_quantity":' + $scope.q13InputValue + ', "_modus":' + tmp + '}';
                                                            if ($scope.q14InputValue > 0) {
                                                                if ($scope.m14selectedOption.name == 'normal') {
                                                                    var tmp = 5;
                                                                } else {
                                                                    tmp = 4;
                                                                }
                                                                order = order + ',{"_article":' + $scope.a14InputValue + ', "_quantity":' + $scope.q14InputValue + ', "_modus":' + tmp + '}';
                                                                if ($scope.q15InputValue > 0) {
                                                                    if ($scope.m15selectedOption.name == 'normal') {
                                                                        var tmp = 5;
                                                                    } else {
                                                                        tmp = 4;
                                                                    }
                                                                    order = order + ',{"_article":' + $scope.a15InputValue + ', "_quantity":' + $scope.q15InputValue + ', "_modus":' + tmp + '}';
                                                                    if ($scope.q16InputValue > 0) {
                                                                        if ($scope.m16selectedOption.name == 'normal') {
                                                                            var tmp = 5;
                                                                        } else {
                                                                            tmp = 4;
                                                                        }
                                                                        order = order + ',{"_article":' + $scope.a16InputValue + ', "_quantity":' + $scope.q16InputValue + ', "_modus":' + tmp + '}';
                                                                        if ($scope.q17InputValue > 0) {
                                                                            if ($scope.m17selectedOption.name == 'normal') {
                                                                                var tmp = 5;
                                                                            } else {
                                                                                tmp = 4;
                                                                            }
                                                                            order = order + ',{"_article":' + $scope.a17InputValue + ', "_quantity":' + $scope.q17InputValue + ', "_modus":' + tmp + '}';
                                                                            if ($scope.q18InputValue > 0) {
                                                                                if ($scope.m18selectedOption.name == 'normal') {
                                                                                    var tmp = 5;
                                                                                } else {
                                                                                    tmp = 4;
                                                                                }
                                                                                order = order + ',{"_article":' + $scope.a18InputValue + ', "_quantity":' + $scope.q18InputValue + ', "_modus":' + tmp + '}';
                                                                                if ($scope.q19InputValue > 0) {
                                                                                    if ($scope.m19selectedOption.name == 'normal') {
                                                                                        var tmp = 5;
                                                                                    } else {
                                                                                        tmp = 4;
                                                                                    }
                                                                                    order = order + ',{"_article":' + $scope.a19InputValue + ', "_quantity":' + $scope.q19InputValue + ', "_modus":' + tmp + '}';
                                                                                    if ($scope.q20InputValue > 0) {
                                                                                        if ($scope.m20selectedOption.name == 'normal') {
                                                                                            var tmp = 5;
                                                                                        } else {
                                                                                            tmp = 4;
                                                                                        }
                                                                                        order = order + ',{"_article":' + $scope.a20InputValue + ', "_quantity":' + $scope.q20InputValue + ', "_modus":' + tmp + '}';
                                                                                        if ($scope.q21InputValue > 0) {
                                                                                            if ($scope.m21selectedOption.name == 'normal') {
                                                                                                var tmp = 5;
                                                                                            } else {
                                                                                                tmp = 4;
                                                                                            }
                                                                                            order = order + ',{"_article":' + $scope.a21InputValue + ', "_quantity":' + $scope.q21InputValue + ', "_modus":' + tmp + '}';
                                                                                            if ($scope.q22InputValue > 0) {
                                                                                                if ($scope.m22selectedOption.name == 'normal') {
                                                                                                    var tmp = 5;
                                                                                                } else {
                                                                                                    tmp = 4;
                                                                                                }
                                                                                                order = order + ',{"_article":' + $scope.a22InputValue + ', "_quantity":' + $scope.q22InputValue + ', "_modus":' + tmp + '}';
                                                                                                if ($scope.q23InputValue > 0) {
                                                                                                    if ($scope.m23selectedOption.name == 'normal') {
                                                                                                        var tmp = 5;
                                                                                                    } else {
                                                                                                        tmp = 4;
                                                                                                    }
                                                                                                    order = order + ',{"_article":' + $scope.a23InputValue + ', "_quantity":' + $scope.q23InputValue + ', "_modus":' + tmp + '}';
                                                                                                    if ($scope.q24InputValue > 0) {
                                                                                                        if ($scope.m24selectedOption.name == 'normal') {
                                                                                                            var tmp = 5;
                                                                                                        } else {
                                                                                                            tmp = 4;
                                                                                                        }
                                                                                                        order = order + ',{"_article":' + $scope.a24InputValue + ', "_quantity":' + $scope.q24InputValue + ', "_modus":' + tmp + '}';
                                                                                                        if ($scope.q25InputValue > 0) {
                                                                                                            if ($scope.m25selectedOption.name == 'normal') {
                                                                                                                var tmp = 5;
                                                                                                            } else {
                                                                                                                tmp = 4;
                                                                                                            }
                                                                                                            order = order + ',{"_article":' + $scope.a25InputValue + ', "_quantity":' + $scope.q25InputValue + ', "_modus":' + tmp + '}';
                                                                                                            if ($scope.q26InputValue > 0) {
                                                                                                                if ($scope.m26selectedOption.name == 'normal') {
                                                                                                                    var tmp = 5;
                                                                                                                } else {
                                                                                                                    tmp = 4;
                                                                                                                }
                                                                                                                order = order + ',{"_article":' + $scope.a26InputValue + ', "_quantity":' + $scope.q26InputValue + ', "_modus":' + tmp + '}';
                                                                                                                if ($scope.q27InputValue > 0) {
                                                                                                                    if ($scope.m27selectedOption.name == 'normal') {
                                                                                                                        var tmp = 5;
                                                                                                                    } else {
                                                                                                                        tmp = 4;
                                                                                                                    }
                                                                                                                    order = order + ',{"_article":' + $scope.a27InputValue + ', "_quantity":' + $scope.q27InputValue + ', "_modus":' + tmp + '}';
                                                                                                                    if ($scope.q28InputValue > 0) {
                                                                                                                        if ($scope.m28selectedOption.name == 'normal') {
                                                                                                                            var tmp = 5;
                                                                                                                        } else {
                                                                                                                            tmp = 4;
                                                                                                                        }
                                                                                                                        order = order + ',{"_article":' + $scope.a28InputValue + ', "_quantity":' + $scope.q28InputValue + ', "_modus":' + tmp + '}';
                                                                                                                        if ($scope.q29InputValue > 0) {
                                                                                                                            if ($scope.m29selectedOption.name == 'normal') {
                                                                                                                                var tmp = 5;
                                                                                                                            } else {
                                                                                                                                tmp = 4;
                                                                                                                            }
                                                                                                                            order = order + ',{"_article":' + $scope.a29InputValue + ', "_quantity":' + $scope.q29InputValue + ', "_modus":' + tmp + '}';
                                                                                                                            if ($scope.q30InputValue > 0) {
                                                                                                                                if ($scope.m30selectedOption.name == 'normal') {
                                                                                                                                    var tmp = 5;
                                                                                                                                } else {
                                                                                                                                    tmp = 4;
                                                                                                                                }
                                                                                                                                order = order + ',{"_article":' + $scope.a30InputValue + ', "_quantity":' + $scope.q30InputValue + ', "_modus":' + tmp + '}';
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        order = order + ']}';
        var counter = 0;
        var production = '{"production":[';
        if ($scope.fq1InputValue > 0) {
            production = production + '{"_article":' + $scope.fa1InputValue + ', "_quantity":' + $scope.fq1InputValue + '}';
            counter = 1;
        }
        if ($scope.fq2InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa2InputValue + ',"_quantity":' + $scope.fq2InputValue + '}';
        }
        if ($scope.fq3InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa3InputValue + ', "_quantity":' + $scope.fq3InputValue + '}';
        }
        if ($scope.fq4InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa4InputValue + ', "_quantity":' + $scope.fq4InputValue + '}';
        }
        if ($scope.fq5InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa5InputValue + ', "_quantity":' + $scope.fq5InputValue + '}';
        }
        if ($scope.fq6InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa6InputValue + ', "_quantity":' + $scope.fq6InputValue + '}';
        }
        if ($scope.fq7InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa7InputValue + ', "_quantity":' + $scope.fq7InputValue + '}';
        }
        if ($scope.fq8InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa8InputValue + ', "_quantity":' + $scope.fq8InputValue + '}';
        }
        if ($scope.fq9InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa9InputValue + ', "_quantity":' + $scope.fq9InputValue + '}';
        }
        if ($scope.fq10InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa10InputValue + ', "_quantity":' + $scope.fq10InputValue + '}';
        }
        if ($scope.fq11InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa11InputValue + ', "_quantity":' + $scope.fq11InputValue + '}';
        }
        if ($scope.fq12InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa12InputValue + ', "_quantity":' + $scope.fq12InputValue + '}';
        }
        if ($scope.fq13InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa13InputValue + ', "_quantity":' + $scope.fq13InputValue + '}';
        }
        if ($scope.fq14InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa14InputValue + ', "_quantity":' + $scope.fq14InputValue + '}';
        }
        if ($scope.fq15InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa15InputValue + ', "_quantity":' + $scope.fq15InputValue + '}';
        }
        if ($scope.fq16InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa16InputValue + ', "_quantity":' + $scope.fq16InputValue + '}';
        }
        if ($scope.fq17InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa17InputValue + ', "_quantity":' + $scope.fq17InputValue + '}';
        }
        if ($scope.fq18InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa18InputValue + ', "_quantity":' + $scope.fq18InputValue + '}';
        }
        if ($scope.fq19InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa19InputValue + ', "_quantity":' + $scope.fq19InputValue + '}';
        }
        if ($scope.fq20InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa20InputValue + ', "_quantity":' + $scope.fq20InputValue + '}';
        }
        if ($scope.fq21InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa21InputValue + ', "_quantity":' + $scope.fq21InputValue + '}';
        }
        if ($scope.fq22InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa22InputValue + ', "_quantity":' + $scope.fq22InputValue + '}';
        }
        if ($scope.fq23InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa23InputValue + ', "_quantity":' + $scope.fq23InputValue + '}';
        }
        if ($scope.fq24InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa24InputValue + ', "_quantity":' + $scope.fq24InputValue + '}';
        }
        if ($scope.fq25InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa25InputValue + ', "_quantity":' + $scope.fq25InputValue + '}';
        }
        if ($scope.fq26InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa26InputValue + ', "_quantity":' + $scope.fq26InputValue + '}';
        }
        if ($scope.fq27InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa27InputValue + ', "_quantity":' + $scope.fq27InputValue + '}';
        }
        if ($scope.fq28InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa28InputValue + ', "_quantity":' + $scope.fq28InputValue + '}';
        }
        if ($scope.fq29InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa29InputValue + ', "_quantity":' + $scope.fq29InputValue + '}';
        }
        if ($scope.fq30InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa30InputValue + ', "_quantity":' + $scope.fq30InputValue + '}';
        }
        if ($scope.fq31InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa31InputValue + ', "_quantity":' + $scope.fq31InputValue + '}';
        }
        if ($scope.fq32InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa32InputValue + ', "_quantity":' + $scope.fq32InputValue + '}';
        }
        if ($scope.fq33InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa33InputValue + ', "_quantity":' + $scope.fq33InputValue + '}';
        }
        if ($scope.fq34InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa34InputValue + ', "_quantity":' + $scope.fq34InputValue + '}';
        }
        if ($scope.fq35InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa35InputValue + ', "_quantity":' + $scope.fq35InputValue + '}';
        }
        if ($scope.fq36InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa36InputValue + ', "_quantity":' + $scope.fq36InputValue + '}';
        }
        if ($scope.fq37InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa37InputValue + ', "_quantity":' + $scope.fq37InputValue + '}';
        }
        if ($scope.fq38InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa38InputValue + ', "_quantity":' + $scope.fq38InputValue + '}';
        }
        if ($scope.fq39InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa39InputValue + ', "_quantity":' + $scope.fq39InputValue + '}';
        }
        if ($scope.fq40InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa40InputValue + ', "_quantity":' + $scope.fq40InputValue + '}';
        }
        if ($scope.fq41InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa41InputValue + ', "_quantity":' + $scope.fq41InputValue + '}';
        }
        if ($scope.fq42InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa42InputValue + ', "_quantity":' + $scope.fq42InputValue + '}';
        }
        if ($scope.fq43InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa43InputValue + ', "_quantity":' + $scope.fq43InputValue + '}';
        }
        if ($scope.fq44InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa44InputValue + ', "_quantity":' + $scope.fq44InputValue + '}';
        }
        if ($scope.fq45InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa45InputValue + ', "_quantity":' + $scope.fq45InputValue + '}';
        }
        if ($scope.fq46InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa46InputValue + ', "_quantity":' + $scope.fq46InputValue + '}';
        }
        if ($scope.fq47InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa47InputValue + ', "_quantity":' + $scope.fq47InputValue + '}';
        }
        if ($scope.fq48InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa48InputValue + ', "_quantity":' + $scope.fq48InputValue + '}';
        }
        if ($scope.fq49InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa49InputValue + ', "_quantity":' + $scope.fq49InputValue + '}';
        }
        if ($scope.fq50InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa50InputValue + ', "_quantity":' + $scope.fq50InputValue + '}';
        }
        if ($scope.fq51InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa51InputValue + ', "_quantity":' + $scope.fq51InputValue + '}';
        }
        if ($scope.fq52InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa52InputValue + ', "_quantity":' + $scope.fq52InputValue + '}';
        }
        if ($scope.fq53InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa53InputValue + ', "_quantity":' + $scope.fq53InputValue + '}';
        }
        if ($scope.fq54InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa54InputValue + ', "_quantity":' + $scope.fq54InputValue + '}';
        }
        if ($scope.fq55InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa55InputValue + ', "_quantity":' + $scope.fq55InputValue + '}';
        }
        if ($scope.fq56InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa56InputValue + ', "_quantity":' + $scope.fq56InputValue + '}';
        }
        if ($scope.fq57InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa57InputValue + ', "_quantity":' + $scope.fq57InputValue + '}';
        }
        if ($scope.fq58InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa58InputValue + ', "_quantity":' + $scope.fq58InputValue + '}';
        }
        if ($scope.fq59InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa59InputValue + ', "_quantity":' + $scope.fq59InputValue + '}';
        }
        if ($scope.fq60InputValue > 0) {
            if(counter == 1) {
                production = production + ',';
            }
            counter = 1;
            production = production + '{"_article":' + $scope.fa60InputValue + ', "_quantity":' + $scope.fq60InputValue + '}';
        }
        production = production + ']}';
        var productionlist = JSON.parse(production);
        var orderlist = JSON.parse(order);
        var order = '{"_article":1, "_quantity":100,"modus":1}';
        var data = {
            "input": {
                "qualitycontrol": {"_type": "no", "_losequantity": 0, "_delay": 0},
                "sellwish": {
                    "item": [{"_article": 1, "_quantity": + $scope.p1InputValue}, {
                        "_article": 2,
                        "_quantity": + $scope.p2InputValue
                    }, {"_article": 3, "_quantity": +$scope.p3InputValue}]
                },
                "selldirect": {
                    "item": [{
                        "_article": 1,
                        "_quantity": + $scope.p1DirektMengeValue,
                        "_price": + parseFloat($scope.p1DirektPreisValue),
                        "_penalty": + parseFloat($scope.p1DirektKonvetionalstrafeValue)
                    }, {
                        "_article": 2,
                        "_quantity": +$scope.p2DirektMengeValue,
                        "_price": + parseFloat($scope.p2DirektPreisValue),
                        "_penalty": parseFloat($scope.p2DirektKonvetionalstrafeValue)
                    }, {
                        "_article": 3,
                        "_quantity": $scope.p3DirektMengeValue,
                        "_price": parseFloat($scope.p3DirektPreisValue),
                        "_penalty": + parseFloat($scope.p3DirektKonvetionalstrafeValue)
                    }]
                },
                "orderlist": orderlist,
                "productionlist": productionlist,
                "workingtimelist": {
                    "workingtime": [{
                        "_station": 1,
                        "_shift": $scope.schichtarbeitsplatz1,
                        "_overtime": $scope.ueberstundenarbeitsplatz1
                    }, {
                        "_station": 2,
                        "_shift": $scope.schichtarbeitsplatz2,
                        "_overtime": $scope.ueberstundenarbeitsplatz2
                    }, {
                        "_station": 3,
                        "_shift": $scope.schichtarbeitsplatz3,
                        "_overtime": $scope.ueberstundenarbeitsplatz3
                    }, {
                        "_station": 4,
                        "_shift": $scope.schichtarbeitsplatz4,
                        "_overtime": $scope.ueberstundenarbeitsplatz4
                    }, {
                        "_station": 6,
                        "_shift": $scope.schichtarbeitsplatz6,
                        "_overtime": $scope.ueberstundenarbeitsplatz6
                    }, {
                        "_station": 7,
                        "_shift": $scope.schichtarbeitsplatz7,
                        "_overtime": $scope.ueberstundenarbeitsplatz7
                    }, {
                        "_station": 8,
                        "_shift": $scope.schichtarbeitsplatz8,
                        "_overtime": $scope.ueberstundenarbeitsplatz8
                    }, {
                        "_station": 9,
                        "_shift": $scope.schichtarbeitsplatz9,
                        "_overtime": $scope.ueberstundenarbeitsplatz9
                    }, {
                        "_station": 10,
                        "_shift": $scope.schichtarbeitsplatz10,
                        "_overtime": $scope.ueberstundenarbeitsplatz10
                    }, {
                        "_station": 11,
                        "_shift": $scope.schichtarbeitsplatz11,
                        "_overtime": $scope.ueberstundenarbeitsplatz11
                    }, {
                        "_station": 12,
                        "_shift": $scope.schichtarbeitsplatz12,
                        "_overtime": $scope.ueberstundenarbeitsplatz12
                    }, {
                        "_station": 13,
                        "_shift": $scope.schichtarbeitsplatz13,
                        "_overtime": $scope.ueberstundenarbeitsplatz13
                    }, {
                        "_station": 14,
                        "_shift": $scope.schichtarbeitsplatz14,
                        "_overtime": $scope.ueberstundenarbeitsplatz14
                    }, {
                        "_station": 15,
                        "_shift": $scope.schichtarbeitsplatz15,
                        "_overtime": $scope.ueberstundenarbeitsplatz15
                    }]
                }
            }
        };
        var xml = x2js.json2xml_str(data);
        return new Blob([xml], {type: "text/xml"});
    };

    $scope.export = function($element) {
        saveAs($scope.getBlob(), "input.xml");
    }
});
/*
ppsApp.directive('myDownload', function ($compile) {
    return {
        restrict: 'E',
        scope: {getUrlData: '&getData'},
        link: function (scope, elm, attrs) {
            var url = URL.createObjectURL(scope.getUrlData());
            elm.append($compile(
                '<a class="btn btn-default" download="input.xml"' +
                'href="' + url + '">' +
                'Export' +
                '</a>'
            )(scope));
        }
    };
});
*/

