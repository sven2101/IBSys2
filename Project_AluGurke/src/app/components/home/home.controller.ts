/**
 * Created by sven_ on 17.11.2015.
 */
    /// <reference path="../../typeDefinitions/angular.d.ts" />
    /// <reference path="../../typeDefinitions/highcharts.d.ts" />
    /// <reference path="../appServices/ResourceService.ts" />
class HomeController {
    resource;
    allSimulationFiles;
    hasSimulationFiles;

    fastOrders:number;
    normalOrders:number;

    selectedPeriodStr;

    constructor(resourceService: ResourceService) {
        this.resource = resourceService.resource;
        this.hasSimulationFiles = true;
        this.saveSimulationFiles();
    }

    onPeriodChange(){
        var simulationFile = this.getSelectedJSON();
        this.chartWorkplace(this.getWorkingTimeOnMachine(simulationFile),this.getTimeOnWaitinglist(simulationFile));
        this.chartIdleTimeCosts(this.getIdleTimeForWorkplace(simulationFile),this.getWageCost(simulationFile),this.getMachineCost(simulationFile))
    }

    getSelectedJSON(){
        var period = parseInt(this.selectedPeriodStr, 10)
        if (typeof this.allSimulationFiles !== "undefined" && this.allSimulationFiles.length >= period) {
            return JSON.parse(this.allSimulationFiles[period - 1].datei);
        }
    }

    getNumber(){
       return new Array(this.getLatestPeriod());
    }

    getStockValue()
    {
        var period = parseInt(this.selectedPeriodStr, 10)
        if (typeof this.allSimulationFiles !== "undefined" && this.allSimulationFiles.length >= period) {
            var obj = JSON.parse(this.allSimulationFiles[period - 1].datei);
            var number = Number(obj.results.warehousestock.totalstockvalue);
            return number;
        }
    }

    getStorageFee()
    {
        if (typeof this.allSimulationFiles !== "undefined") {
            var obj = JSON.parse(this.allSimulationFiles[this.allSimulationFiles.length - 1].datei);
            var averageStorecosts = Number(JSON.stringify(obj.results.result.general.storagecosts._average).slice(0,-1).substr(1));
            return ((averageStorecosts/this.getAverageStorevalue())*100)*52;
        }
    }

    getStoragecosts()
    {
        var period = parseInt(this.selectedPeriodStr, 10)
        if (typeof this.allSimulationFiles !== "undefined" && this.allSimulationFiles.length >= period) {
            var obj = JSON.parse(this.allSimulationFiles[period - 1].datei);
            var number = Number(JSON.stringify(obj.results.result.general.storagecosts._current).slice(0,-1).substr(1));
            return number;
        }
    }

    getAverageStorevalue()
    {
        if (typeof this.allSimulationFiles !== "undefined") {
            var obj = JSON.parse(this.allSimulationFiles[this.allSimulationFiles.length - 1].datei);
            var number = Number(JSON.stringify(obj.results.result.general.storevalue._average).slice(0,-1).substr(1));
            return number;
        }
    }

    getProfitValue()
    {
        var period = parseInt(this.selectedPeriodStr, 10)
        if (typeof this.allSimulationFiles !== "undefined" && this.allSimulationFiles.length >= period) {
            var obj = JSON.parse(this.allSimulationFiles[period - 1].datei);
            var number = Number(JSON.stringify(obj.results.result.summary.profit._current).slice(0, -1).substr(1));
            return number;
        }
    }

    getLatestPeriod(){
       if (typeof this.allSimulationFiles !== "undefined") {
           return Number(this.allSimulationFiles[this.allSimulationFiles.length - 1].periode);
        }
    }

    getPercentageStockChange(){
        var period = parseInt(this.selectedPeriodStr, 10)
        if (typeof this.allSimulationFiles !== "undefined") {
            if(this.allSimulationFiles.length>1 && period>1){
                var obj = JSON.parse(this.allSimulationFiles[period - 2].datei);
                var lastStock = Number(obj.results.warehousestock.totalstockvalue);
                var currentStock = this.getStockValue();
                return ((currentStock/lastStock)-1)*100
            }
            else if(this.allSimulationFiles.length==1 || period ==1){
                var currentStock = this.getStockValue();
                return ((currentStock/291355)-1)*100
            }
            else
                return 0;
        }
    }

    getPercentageProfitChange(){
        var period = parseInt(this.selectedPeriodStr, 10)
        if (typeof this.allSimulationFiles !== "undefined") {
            if(this.allSimulationFiles.length>1 && period >1){
                var obj = JSON.parse(this.allSimulationFiles[period - 2].datei);
                var lastProfit = Number(JSON.stringify(obj.results.result.summary.profit._current).slice(0, -1).substr(1));
                var currentProfit = this.getProfitValue();

                if(lastProfit < 0 && currentProfit > 0){
                    return (((currentProfit/lastProfit)-1)*100)*-1;
                }

                return ((currentProfit/lastProfit)-1)*100
            }
            else
                return 0;
        }
    }

    getPercentageStoragecostsChange(){
        var period = parseInt(this.selectedPeriodStr, 10)
        if (typeof this.allSimulationFiles !== "undefined") {
            if(this.allSimulationFiles.length>1 && period>1){
                var obj = JSON.parse(this.allSimulationFiles[period - 2].datei);
                var lastStoragecosts = Number(JSON.stringify(obj.results.result.general.storagecosts._current).slice(0,-1).substr(1));
                var currentStoragecosts = this.getStoragecosts();
                return ((currentStoragecosts/lastStoragecosts)-1)*100
            }
            else if(this.allSimulationFiles.length==1 || period==1){
                var currentStoragecosts = this.getStoragecosts();
                return ((currentStoragecosts/7296.26)-1)*100
            }
            else
                return 0;
        }
    }

    getPercentageAverageStockvalueChange(){
        if (typeof this.allSimulationFiles !== "undefined") {
            if(this.allSimulationFiles.length>1){
                var obj = JSON.parse(this.allSimulationFiles[this.allSimulationFiles.length - 2].datei);
                var lastAverageStockvalue = Number(JSON.stringify(obj.results.result.general.storevalue._average).slice(0,-1).substr(1));
                var currentAverageStockvalue = this.getAverageStorevalue();
                return ((currentAverageStockvalue/lastAverageStockvalue)-1)*100
            }
            else if(this.allSimulationFiles.length==1){
                var currentAverageStockvalue = this.getAverageStorevalue();
                return ((currentAverageStockvalue/291355)-1)*100
            }
            else
                return 0;
        }
    }

    getPercentageStorageFeeChange(){
        if (typeof this.allSimulationFiles !== "undefined") {
            if(this.allSimulationFiles.length>1){
                var obj = JSON.parse(this.allSimulationFiles[this.allSimulationFiles.length - 2].datei);
                var lastAverageStorecosts = Number(JSON.stringify(obj.results.result.general.storagecosts._average).slice(0,-1).substr(1));
                var lastAverageStoreValue = Number(JSON.stringify(obj.results.result.general.storevalue._average).slice(0,-1).substr(1));
                var lastStorageFee = ((lastAverageStorecosts/lastAverageStoreValue)*100)*52;
                return this.getStorageFee()-lastStorageFee;
            }
            else if(this.allSimulationFiles.length==1){
                return this.getStorageFee() - 117.95;
            }
            else
                return 0;
        }
    }

    getNormalOrders(){
        var period = parseInt(this.selectedPeriodStr, 10)
        if (typeof this.allSimulationFiles !== "undefined" && this.allSimulationFiles.length >= period) {
            if(this.allSimulationFiles.length>0){
                var ordersCount=0;
                var obj = JSON.parse(this.allSimulationFiles[period - 1].datei);
                var normalOrders = obj.results.inwardstockmovement.order;
                    if(!angular.isUndefined(normalOrders)) {
                    for (var i = 0; i < normalOrders.length; i++) {
                        if ((JSON.stringify(normalOrders[i]._mode).slice(0, -1).substr(1)) == "5") {
                            ordersCount++;
                        }
                    }
                }
                var futureOrders = obj.results.futureinwardstockmovement.order;
                if(!angular.isUndefined(futureOrders)) {
                    for (var i = 0; i < futureOrders.length; i++) {
                        if ((JSON.stringify(futureOrders[i]._mode).slice(0, -1).substr(1)) == "5") {
                            ordersCount++;
                        }
                    }
                }
               this.normalOrders=ordersCount;
              return ordersCount;
            }
            else{
                this.normalOrders=0;
                return 0;
            }
        }
    }

    getFastOrders(){
        var period = parseInt(this.selectedPeriodStr, 10)
        if (typeof this.allSimulationFiles !== "undefined" && this.allSimulationFiles.length >= period) {
            if(this.allSimulationFiles.length>0){
                var ordersCount=0;
                var obj = JSON.parse(this.allSimulationFiles[period - 1].datei);
                var fastOrders = obj.results.inwardstockmovement.order;
                if(!angular.isUndefined(fastOrders)) {
                    for (var i = 0; i < fastOrders.length; i++) {
                        if ((JSON.stringify(fastOrders[i]._mode).slice(0, -1).substr(1)) == "4") {
                            ordersCount++;
                        }
                    }
                }
                var futureOrders = obj.results.futureinwardstockmovement.order;
                if(!angular.isUndefined(futureOrders)) {
                    for (var i = 0; i < futureOrders.length; i++) {
                        if ((JSON.stringify(futureOrders[i]._mode).slice(0, -1).substr(1)) == "4") {
                            ordersCount++;
                        }
                    }
                }
                this.fastOrders=ordersCount;
                return ordersCount;
            }
            else{
                this.fastOrders=0;
                return 0;
            }

        }

    }

    getNormalOrdersPercentage(){
        if(this.normalOrders != 0){
            return (this.normalOrders/(this.normalOrders+this.fastOrders))*100;
        }
        else
        return 0;
    }

    getFastOrdersPercentage(){
        if(this.fastOrders != 0){
            return (this.fastOrders/(this.normalOrders+this.fastOrders))*100;
        }
        else
            return 0;
    }



    saveSimulationFiles() {
        var vm = this;
        this.resource.getSimulationFiles('', function(result, headers) {
            if (result.erg != '404' && result.erg != '502')
            {
                if(result.simulationFile.length==0){
                    vm.hasSimulationFiles = false;
                }
                else {
                    vm.selectedPeriodStr = result.simulationFile[result.simulationFile.length - 1].periode.toString();
                    vm.hasSimulationFiles = true;
                    vm.allSimulationFiles = result.simulationFile;
                    vm.chartStockMovement(vm.getStockMovement(result.simulationFile));
                    vm.chartEffiency(vm.getEffiency(result.simulationFile), vm.getDeliveryreliability(result.simulationFile), vm.getRelpossiblenormalcapacity(result.simulationFile));
                    vm.chartSellingUnit(vm.getSellwish(result.simulationFile), vm.getSalesquantity(result.simulationFile));
                    vm.chartIdle(vm.getIdletime(result.simulationFile), vm.getIdletimecosts(result.simulationFile));
                    vm.chartSellingSource(vm.getNormalsales(result.simulationFile), vm.getDirectsale(result.simulationFile), vm.getMarketplacesale(result.simulationFile));
                    vm.chartSales(vm.getTotalProfit(result.simulationFile), vm.getCurrentProfit(result.simulationFile), vm.getAverageProfit(result.simulationFile));
                    vm.chartStoreCosts(vm.getTotalCosts(result.simulationFile), vm.getCurrentCosts(result.simulationFile), vm.getAverageCosts(result.simulationFile));
                    vm.chartWorkplace(vm.getWorkingTimeOnMachine(JSON.parse(result.simulationFile[vm.selectedPeriodStr-1].datei)),vm.getTimeOnWaitinglist(JSON.parse(result.simulationFile[vm.selectedPeriodStr-1].datei)));
                    vm.chartIdleTimeCosts(vm.getIdleTimeForWorkplace(JSON.parse(result.simulationFile[vm.selectedPeriodStr-1].datei)),vm.getWageCost(JSON.parse(result.simulationFile[vm.selectedPeriodStr-1].datei)),vm.getMachineCost(JSON.parse(result.simulationFile[vm.selectedPeriodStr-1].datei)));
                }
            }
        });
    }

    getSimulationFileByPeriod(periodeNum : number){
        var vm = this;
        this.resource.getSimulationFile({periode : periodeNum}, function(result, headers) {
            if (result.erg != '404' && result.erg != '502')
            {
                return JSON.parse(result.simulationFile[0].datei);
            }
        });
    }

    getStockMovement(json){
        var stockMovement=[];
        stockMovement.push(291355.00);
        var isAvailable = false;
            for (var i = 0; i < json[json.length - 1].periode; i++) {
                isAvailable = false;
                for (var j = 0; j < json.length; j++) {
                    if (Number(json[j].periode) == (i + 1)) {
                        var obj = JSON.parse(json[j].datei);
                        var number = Number(obj.results.warehousestock.totalstockvalue);
                        stockMovement.push(number);
                        isAvailable = true;
                        break;
                    }
                }
                if (isAvailable == false) {
                    stockMovement.push(null);
                }

            }
            return stockMovement;
    }

    getEffiency(json)
    {
        var effiency=[];
        var isAvailable = false;

        for(var i=0; i < json[json.length-1].periode; i++){
            isAvailable = false;
            for(var j = 0; j<json.length;j++)
            {
                if(Number(json[j].periode) == (i+1)){
                    var obj = JSON.parse(json[j].datei);
                    var number = Number(JSON.stringify(obj.results.result.general.effiency._current).slice(0,-2).substr(1));
                    effiency.push(number);
                    isAvailable = true;
                    break;
                }
            }
            if(isAvailable == false){
                effiency.push(null);
            }

        }
        return effiency;
    }

    getDeliveryreliability(json)
    {
        var deliveryreliability=[];
        var isAvailable = false;

        for(var i=0; i < json[json.length-1].periode; i++){
            isAvailable = false;
            for(var j = 0; j<json.length;j++)
            {
                if(Number(json[j].periode) == (i+1)){
                    var obj = JSON.parse(json[j].datei);
                    var number = Number(JSON.stringify(obj.results.result.general.deliveryreliability._current).slice(0,-2).substr(1));
                    deliveryreliability.push(number);
                    isAvailable = true;
                    break;
                }
            }
            if(isAvailable == false){
                deliveryreliability.push(null);
            }

        }
        return deliveryreliability;
    }

    getRelpossiblenormalcapacity(json)
    {
        var relpossiblenormalcapacity=[];
        var isAvailable = false;

        for(var i=0; i < json[json.length-1].periode; i++){
            isAvailable = false;
            for(var j = 0; j<json.length;j++)
            {
                if(Number(json[j].periode) == (i+1)){
                    var obj = JSON.parse(json[j].datei);
                    var number = Number(JSON.stringify(obj.results.result.general.relpossiblenormalcapacity._current).slice(0,-2).substr(1));
                    relpossiblenormalcapacity.push(number);
                    isAvailable = true;
                    break;
                }
            }
            if(isAvailable == false){
                relpossiblenormalcapacity.push(null);
            }

        }
        return relpossiblenormalcapacity;
    }

    getSellwish(json)
    {
        var sellwish=[];
        var isAvailable = false;

        for(var i=0; i < json[json.length-1].periode; i++){
            isAvailable = false;
            for(var j = 0; j<json.length;j++)
            {
                if(Number(json[j].periode) == (i+1)){
                    var obj = JSON.parse(json[j].datei);
                    var number = Number(JSON.stringify(obj.results.result.general.sellwish._current).slice(0,-1).substr(1));
                    sellwish.push(number);
                    isAvailable = true;
                    break;
                }
            }
            if(isAvailable == false){
                sellwish.push(null);
            }

        }
        return sellwish;
    }

    getSalesquantity(json)
    {
        var salesquantity=[];
        var isAvailable = false;

        for(var i=0; i < json[json.length-1].periode; i++){
            isAvailable = false;
            for(var j = 0; j<json.length;j++)
            {
                if(Number(json[j].periode) == (i+1)){
                    var obj = JSON.parse(json[j].datei);
                    var number = Number(JSON.stringify(obj.results.result.general.salesquantity._current).slice(0,-1).substr(1));
                    salesquantity.push(number);
                    isAvailable = true;
                    break;
                }
            }
            if(isAvailable == false){
                salesquantity.push(null);
            }

        }
        return salesquantity;
    }

    getIdletime(json)
    {
        var idletime=[];
        var isAvailable = false;

        for(var i=0; i < json[json.length-1].periode; i++){
            isAvailable = false;
            for(var j = 0; j<json.length;j++)
            {
                if(Number(json[j].periode) == (i+1)){
                    var obj = JSON.parse(json[j].datei);
                    var number = Number(JSON.stringify(obj.results.result.general.idletime._current).slice(0,-1).substr(1));
                    idletime.push(number);
                    isAvailable = true;
                    break;
                }
            }
            if(isAvailable == false){
                idletime.push(null);
            }

        }
        return idletime;
    }

    getIdletimecosts(json)
    {
        var idletimecosts=[];
        var isAvailable = false;

        for(var i=0; i < json[json.length-1].periode; i++){
            isAvailable = false;
            for(var j = 0; j<json.length;j++)
            {
                if(Number(json[j].periode) == (i+1)){
                    var obj = JSON.parse(json[j].datei);
                    var number = Number(JSON.stringify(obj.results.result.general.idletimecosts._current).slice(0,-1).substr(1));
                    idletimecosts.push(number);
                    isAvailable = true;
                    break;
                }
            }
            if(isAvailable == false){
                idletimecosts.push(null);
            }

        }
        return idletimecosts;
    }

    getNormalsales(json)
    {
        var normalsale=[];
        var isAvailable = false;

        for(var i=0; i < json[json.length-1].periode; i++){
            isAvailable = false;
            for(var j = 0; j<json.length;j++)
            {
                if(Number(json[j].periode) == (i+1)){
                    var obj = JSON.parse(json[j].datei);
                    var number = Number(JSON.stringify(obj.results.result.normalsale.profit._current).slice(0,-1).substr(1));
                    normalsale.push(number);
                    isAvailable = true;
                    break;
                }
            }
            if(isAvailable == false){
                normalsale.push(null);
            }

        }
        return normalsale;
    }

    getDirectsale(json)
    {
        var directsale=[];
        var isAvailable = false;

        for(var i=0; i < json[json.length-1].periode; i++){
            isAvailable = false;
            for(var j = 0; j<json.length;j++)
            {
                if(Number(json[j].periode) == (i+1)){
                    var obj = JSON.parse(json[j].datei);
                    var number = Number(JSON.stringify(obj.results.result.directsale.profit._current).slice(0,-1).substr(1));
                    directsale.push(number);
                    isAvailable = true;
                    break;
                }
            }
            if(isAvailable == false){
                directsale.push(null);
            }

        }
        return directsale;
    }

    getMarketplacesale(json)
    {
        var marketplacesale=[];
        var isAvailable = false;

        for(var i=0; i < json[json.length-1].periode; i++){
            isAvailable = false;
            for(var j = 0; j<json.length;j++)
            {
                if(Number(json[j].periode) == (i+1)){
                    var obj = JSON.parse(json[j].datei);
                    var number = Number(JSON.stringify(obj.results.result.marketplacesale.profit._current).slice(0,-1).substr(1));
                    marketplacesale.push(number);
                    isAvailable = true;
                    break;
                }
            }
            if(isAvailable == false){
                marketplacesale.push(null);
            }

        }
        return marketplacesale;
    }

    getTotalProfit(json)
    {
        var totalProfit=[];
        var isAvailable = false;

        for(var i=0; i < json[json.length-1].periode; i++){
            isAvailable = false;
            for(var j = 0; j<json.length;j++)
            {
                if(Number(json[j].periode) == (i+1)){
                    var obj = JSON.parse(json[j].datei);
                    var number = Number(JSON.stringify(obj.results.result.summary.profit._all).slice(0,-1).substr(1));
                    totalProfit.push(number);
                    isAvailable = true;
                    break;
                }
            }
            if(isAvailable == false){
                totalProfit.push(null);
            }

        }
        return totalProfit;
    }

    getCurrentProfit(json)
    {
        var currentProfit=[];
        var isAvailable = false;

        for(var i=0; i < json[json.length-1].periode; i++){
            isAvailable = false;
            for(var j = 0; j<json.length;j++)
            {
                if(Number(json[j].periode) == (i+1)){
                    var obj = JSON.parse(json[j].datei);
                    var number = Number(JSON.stringify(obj.results.result.summary.profit._current).slice(0,-1).substr(1));
                    currentProfit.push(number);
                    isAvailable = true;
                    break;
                }
            }
            if(isAvailable == false){
                currentProfit.push(null);
            }

        }
        return currentProfit;
    }

    getAverageProfit(json)
    {
        var averageProfit=[];
        var isAvailable = false;

        for(var i=0; i < json[json.length-1].periode; i++){
            isAvailable = false;
            for(var j = 0; j<json.length;j++)
            {
                if(Number(json[j].periode) == (i+1)){
                    var obj = JSON.parse(json[j].datei);
                    var number = Number(JSON.stringify(obj.results.result.summary.profit._average).slice(0,-1).substr(1));
                    averageProfit.push(number);
                    isAvailable = true;
                    break;
                }
            }
            if(isAvailable == false){
                averageProfit.push(null);
            }

        }
        return averageProfit;
    }

    getTotalCosts(json)
    {
        var totalCosts=[];
        var isAvailable = false;

        for(var i=0; i < json[json.length-1].periode; i++){
            isAvailable = false;
            for(var j = 0; j<json.length;j++)
            {
                if(Number(json[j].periode) == (i+1)){
                    var obj = JSON.parse(json[j].datei);
                    var number = Number(JSON.stringify(obj.results.result.general.storagecosts._all).slice(0,-1).substr(1));
                    totalCosts.push(number);
                    isAvailable = true;
                    break;
                }
            }
            if(isAvailable == false){
                totalCosts.push(null);
            }

        }
        return totalCosts;
    }

    getCurrentCosts(json)
    {
        var currentCosts=[];
        var isAvailable = false;

        for(var i=0; i < json[json.length-1].periode; i++){
            isAvailable = false;
            for(var j = 0; j<json.length;j++)
            {
                if(Number(json[j].periode) == (i+1)){
                    var obj = JSON.parse(json[j].datei);
                    var number = Number(JSON.stringify(obj.results.result.general.storagecosts._current).slice(0,-1).substr(1));
                    currentCosts.push(number);
                    isAvailable = true;
                    break;
                }
            }
            if(isAvailable == false){
                currentCosts.push(null);
            }

        }
        return currentCosts;
    }

    getAverageCosts(json)
    {
        var averageCosts=[];
        var isAvailable = false;

        for(var i=0; i < json[json.length-1].periode; i++){
            isAvailable = false;
            for(var j = 0; j<json.length;j++)
            {
                if(Number(json[j].periode) == (i+1)){
                    var obj = JSON.parse(json[j].datei);
                    var number = Number(JSON.stringify(obj.results.result.general.storagecosts._average).slice(0,-1).substr(1));
                    averageCosts.push(number);
                    isAvailable = true;
                    break;
                }
            }
            if(isAvailable == false){
                averageCosts.push(null);
            }

        }
        return averageCosts;
    }
    getWorkingTimeOnMachine(json)
    {
        var period = parseInt(this.selectedPeriodStr, 10)
        var workingTime=[];

        var obj = json;
        var ordersInWork = obj.results.ordersinwork.workplace;
        for (var i = 0; i < 15; i++) {
            workingTime.push(0);
        }
        if(!angular.isUndefined(ordersInWork)) {
            for (var i = 0; i < ordersInWork.length; i++) {
                var id = Number(JSON.stringify(ordersInWork[i]._id).slice(0, -1).substr(1));
                var timeneed = Number(JSON.stringify(ordersInWork[i]._timeneed).slice(0, -1).substr(1));
                workingTime[(id - 1)] = timeneed;
            }
        }
        return workingTime;
    }

    getTimeOnWaitinglist(json)
    {
        var period = parseInt(this.selectedPeriodStr, 10)
        var waitinglistTime=[];

        var obj = json;
        var waitinglist = obj.results.waitinglistworkstations.workplace;

        for(var i = 0; i < waitinglist.length;i++){
            var id = Number(JSON.stringify(waitinglist[i]._id).slice(0,-1).substr(1));
            var timeneed = Number(JSON.stringify(waitinglist[i]._timeneed).slice(0,-1).substr(1));
            if(id == 6){
                waitinglistTime.push(0);
            }
            waitinglistTime.push(timeneed);
        }

        return waitinglistTime;
    }


    getIdleTimeForWorkplace(json)
    {
        var period = parseInt(this.selectedPeriodStr, 10)
        var idleTime=[];

        var obj = json;
        var idleTimeList = obj.results.idletimecosts.workplace;

        for(var i = 0; i < idleTimeList.length;i++){
            var id = Number(JSON.stringify(idleTimeList[i]._id).slice(0,-1).substr(1));
            var idletime = Number(JSON.stringify(idleTimeList[i]._idletime).slice(0,-1).substr(1));
            if(id == 6){
                idleTime.push(0);
            }
            idleTime.push(idletime);
        }

        return idleTime;
    }

    getWageCost(json)
    {
        var period = parseInt(this.selectedPeriodStr, 10)
        var idleCost=[];

        var obj = json;
        var idleCostList = obj.results.idletimecosts.workplace;

        for(var i = 0; i < idleCostList.length;i++){
            var id = Number(JSON.stringify(idleCostList[i]._id).slice(0,-1).substr(1));
            var idletime = Number(JSON.stringify(idleCostList[i]._wageidletimecosts).slice(0,-1).substr(1));
            if(id == 6){
                idleCost.push(0);
            }
            idleCost.push(idletime);
        }

        return idleCost;
    }

    getMachineCost(json)
    {
        var period = parseInt(this.selectedPeriodStr, 10)
        var idleCost=[];

        var obj = json;
        var idleCostList = obj.results.idletimecosts.workplace;

        for(var i = 0; i < idleCostList.length;i++){
            var id = Number(JSON.stringify(idleCostList[i]._id).slice(0,-1).substr(1));
            var idletime = Number(JSON.stringify(idleCostList[i]._machineidletimecosts).slice(0,-1).substr(1));
            if(id == 6){
                idleCost.push(0);
            }
            idleCost.push(idletime);
        }

        return idleCost;
    }




    chartStockMovement(data: Array<number>) {

        let categories = new Array<string>();
        categories.push('Anfangslagerwert')
        for (let i = 0; i < data.length; i++) {

            categories.push('Periode ' +(i+1));
        }

        $('#stockMovement').highcharts({
            chart: {
                type: 'area',
                spacingBottom: 30
            },
            title: {
                text: ''
            },
            subtitle: {
                floating: true,
                align: 'right',
                verticalAlign: 'bottom',
                y: 15
            },
            xAxis: {
                categories: categories
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    formatter: function () {
                        return this.value+" \u20AC";
                    }
                }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        this.x + ': ' + this.y +" \u20AC";
                }
            },
            plotOptions: {
                area: {
                    fillOpacity: 0.2
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Entwicklung des Lagerwertes',
                data: data
            }]
        });
    }

    chartEffiency(efficiencyData: Array<number>,deliveryreliabilityData: Array<number>,relpossiblenormalcapacityData: Array<number>) {

        let categories = new Array<string>();
        for (let i = 0; i < efficiencyData.length; i++) {

            categories.push('Periode ' +(i+1));
        }

        $('#effiency').highcharts({
            chart: {
                type: 'spline',
                spacingBottom: 30
            },
            title: {
                text: ''
            },
            subtitle: {
                floating: true,
                align: 'right',
                verticalAlign: 'bottom',
                y: 15
            },
            xAxis: {
                categories: categories
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    formatter: function () {
                        return this.value+" %";
                    }
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: ' %'
            },
            plotOptions: {
                area: {
                    fillOpacity: 0.2
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Entwicklung der Auslastung',
                data: efficiencyData
            },{
                name: 'Entwicklung der Liefertreue',
                data: deliveryreliabilityData
            },{
                name: 'Entwicklung der Normalkapazit\u00E4t' ,
                data: relpossiblenormalcapacityData
            }]
        });
    }


    chartSellingUnit(sellwish: Array<number>,salesquantity: Array<number>)
    {
        let categories = new Array<string>();
        for (let i = 0; i < sellwish.length; i++) {

            categories.push('Periode ' +(i+1));
        }


        $('#sellingUnit').highcharts({
            chart: {
                type: 'areaspline'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: categories
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    formatter: function () {
                        return this.value+" ME";
                    }
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: ' Einheiten'
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.5
                }
            },
            series: [{
                name: 'Vertriebswunsch',
                data: sellwish
            }, {
                name: 'Verkaufte Einheiten',
                data: salesquantity
            }]
        });
    }

    chartIdle(idletime: Array<number>,idletimecosts: Array<number>) {
        let categories = new Array<string>();
        for (let i = 0; i < idletime.length; i++) {

            categories.push('Periode ' + (i + 1));
        }
        
        var seriesOptions: HighchartsLineChartSeriesOptions;
        seriesOptions = {
                name: 'Leerzeitkosten',
                type: 'column',
                yAxis: 1,
                data: idletimecosts,
                tooltip: {
                    valueSuffix: ' \u20AC'
                }
            };

        $('#idle').highcharts({
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: ''
            },
            xAxis: [{
                categories:categories,
                crosshair: true
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value} min',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                title: {
                    text: '',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                }
            }, { // Secondary yAxis
                title: {
                    text: '',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '{value} \u20AC',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            series: [seriesOptions, {
                name: 'Leerzeit',
                type: 'spline',
                data: idletime,
                tooltip: {
                    valueSuffix: ' min'
                }
            }]
        });
    }

    chartSellingSource(normalSales: Array<number>,indirectSales: Array<number>,marktplaceSales: Array<number>)
    {
        let categories = new Array<string>();
        for (let i = 0; i < normalSales.length; i++) {

            categories.push('Periode ' + (i + 1));
        }

        $('#sellingSource').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: categories
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    formatter: function () {
                        return this.value+" \u20AC";
                    }
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: ' \u20AC'
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Normalverk\u00E4ufe',
                data: normalSales
            }, {
                name: 'Direkte Verk\u00E4ufe',
                data: indirectSales
            }, {
                name: 'Marktplatzverk\u00E4ufe',
                data: marktplaceSales
            }]
        });
    }

    chartSales(totalSale: Array<number>,currentSale: Array<number>,averageSale: Array<number>){
        let categories = new Array<string>();
        for (let i = 0; i < totalSale.length; i++) {

            categories.push('Periode ' + (i + 1));
        }

        $('#sales').highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: ''
            },
            xAxis: {
                title:'',
                categories: categories,
                tickmarkPlacement: 'on'
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    formatter: function () {
                        return this.value+" \u20AC";
                    }
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: ' \u20AC'
            },
            plotOptions: {
                area: {
                    stacking: 'normal',
                    lineColor: '#666666',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#666666'
                    }
                }
            },
            series: [{
                name: 'Gesamt Profit',
                data: totalSale
            }, {
                name: 'Profit in der Periode',
                data: currentSale
            }, {
                name: 'Durchschnittlicher Profit',
                data: averageSale
            }]
        });
    }

    chartStoreCosts(totalCosts: Array<number>,currentCosts: Array<number>,averageCosts: Array<number>) {
        let categories = new Array<string>();
        for (let i = 0; i < totalCosts.length; i++) {

            categories.push('Periode ' + (i + 1));
        }

        $('#storeCosts').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: categories,
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: '',
                    align: 'high'
                },
                labels: {
                    formatter: function () {
                        return this.value+" \u20AC";
                    },
                    overflow: 'justify'
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: '  \u20AC'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Gesamtkosten',
                data: totalCosts
            }, {
                name: 'Kosten in der Periode',
                data: currentCosts
            }, {
                name: 'Durchschnittliche Kosten',
                data: averageCosts
            }]
        });

    }
    onWaitinglist
    chartWorkplace(OnMachine: Array<number>,onWaitinglist: Array<number>){
        var seriesOptions1: HighchartsLineChartSeriesOptions;
        seriesOptions1 = {
            name: 'In der Wartschlange',
            type: 'column',
            color:'red',
            data: onWaitinglist,
            stack:'male'
        };

        var seriesOptions2: HighchartsLineChartSeriesOptions;
        seriesOptions2 = {
            name: 'Auf der Maschine',
            type: 'column',
            color:'#ffcc00',
            data: OnMachine,
            stack:'male'
        };
        $('#workplace').highcharts({

            chart: {
                type: 'column'
            },

            title: {
                text: ''
            },

            xAxis: {
                categories: ['Arbeitsplatz 1', 'Arbeitsplatz 2', 'Arbeitsplatz 3', 'Arbeitsplatz 4', 'Arbeitsplatz 5','Arbeitsplatz 6', 'Arbeitsplatz 7', 'Arbeitsplatz 8', 'Arbeitsplatz 9', 'Arbeitsplatz 10','Arbeitsplatz 11', 'Arbeitsplatz 12', 'Arbeitsplatz 13', 'Arbeitsplatz 14', 'Arbeitsplatz 15']
            },

            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: ''
                },
                labels: {
                    formatter: function () {
                        return this.value+" min";
                    },
                    overflow: 'justify'
                }
            },

            tooltip: {
                shared:true,
                valueSuffix:' min'
            },

            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },

            series: [seriesOptions1,seriesOptions2]

        });


    }


    chartIdleTimeCosts(idleTime: Array<number>,idleWageCost: Array<number>,idleMachineCost: Array<number>){

        var seriesOptions1: HighchartsLineChartSeriesOptions;
        seriesOptions1 = {
            name: 'Leerzeit',
            type: 'column',
            data: idleTime,
            color:'red',
            tooltip: {
                valueSuffix: ' min'
            },
            stack:'female'
        };

        var seriesOptions2: HighchartsLineChartSeriesOptions;
        seriesOptions2 = {
            name: 'Leerzeitlohnkosten',
            type: 'column',
            color:'#ffcc00',
            data: idleWageCost,
            yAxis: 1,
            tooltip: {
                valueSuffix: ' \u20AC'
            },
            stack:'male'
        };

        var seriesOptions3: HighchartsLineChartSeriesOptions;
        seriesOptions3 = {
            name: 'Leerzeitmaschinenkosten',
            type: 'column',
            color:'#303030',
            data: idleMachineCost,
            yAxis: 1,
            tooltip: {
                valueSuffix: ' \u20AC'
            },
            stack:'male'
        };


        $('#idleTimeCosts').highcharts({


            chart: {
                type: 'column'
            },

            title: {
                text: ''
            },

            xAxis: {
                categories: ['Arbeitsplatz 1', 'Arbeitsplatz 2', 'Arbeitsplatz 3', 'Arbeitsplatz 4', 'Arbeitsplatz 5','Arbeitsplatz 6', 'Arbeitsplatz 7', 'Arbeitsplatz 8', 'Arbeitsplatz 9', 'Arbeitsplatz 10','Arbeitsplatz 11', 'Arbeitsplatz 12', 'Arbeitsplatz 13', 'Arbeitsplatz 14', 'Arbeitsplatz 15']
            },

            yAxis: [{
                min: 0,
                title: {
                    text: 'Leerzeit'
                },
                labels: {
                    formatter: function () {
                        return this.value+" min";
                    },
                    overflow: 'justify'
                }
            }, {
                title: {
                    text: 'Leerkosten'
                },
                labels: {
                    formatter: function () {
                        return this.value+" \u20AC";
                    },
                    overflow: 'justify'
                },
                opposite: true
            }],
            tooltip: {
                shared:true
            },

            plotOptions: {
                column: {
                    stacking:"normal"
                }
            },

            series: [seriesOptions1,seriesOptions2,seriesOptions3]
        });

    }

}
angular.module('HomeModule').controller('HomeController', ['ResourceService',HomeController]);
