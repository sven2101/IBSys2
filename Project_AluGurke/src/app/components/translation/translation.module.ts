/**
 * Created by Max on 11.10.2015.
 */
/// <reference path="../../typeDefinitions/angular.d.ts" />
angular.module('TranslationModule', []);

angular.module('app').config(function ($translateProvider) {
    // deutsche Sprache
    $translateProvider.translations('de_DE', {
        //Navigationsleiste
        NAV_Home:'Startseite',
        NAV_File:'Datei hochladen',
        NAV_OrderManagment:'Bestellverwaltung',
        
        //Bestellverwaltung
        orderManagment_headline:'Bestellverwaltung',
        orderManagment_product:'Produkt',
        orderManagment_period:'Periode',
        orderManagment_quantity:'Anzahl',
        orderManagment_id:'Id',
        orderManagment_deliveryTime:'Lieferzeit',
        orderManagment_deliveryTimeDeviance:'Abweichung Lieferzeit',
        orderManagment_inventoryDays:'Reichweite',
        orderManagment_warehouseStocks:'Lagerstand',
        orderManagment_demand:'Bedarf P',
        orderManagment_discount:'Rabattmenge',
        orderManagment_orderQuantity:'Menge',
        orderManagment_instantOrder:'Eilbestellung',
        orderManagment_partID: 'Teil ID',
        
        //Bestellüberblick
        orderOverview_headline:'Bestellüberblick',
        orderOverview_keydataHeadline:'Kennzahlen',
        orderOverview_OrdersHeadline:'Bestellungen',
        orderOverview_numberNewOrders:'Anzahl neuer Bestellungen:',
        orderOverview_numberNormalOrders:'Neubestellungen:',
        orderOverview_numberFastOrders:'Eilbestellungen:',
        orderOverview_newOrdersTab:'Neue Bestellungen',
        orderOverview_ongoingOrdersTab:'Laufende Bestellungen',
        orderOverview_inwardStockMovementTab:'Lagerzugang',
        orderOverview_partialValueTab:'Teilewertentwicklung',
        orderOverview_fast:'Eil',
        orderOverview_totalCosts:'Gesamtkosten',
        orderOverview_materialCosts:'Materialkosten',
        orderOverview_orderCosts:'Bestellkosten',
        orderOverview_pieceCosts:'Stückkosten',
        orderOverview_actualPartialValue:'Aktueller <br> Teilewert',
        orderOverview_partialValueNewOrders:'Teilewert mit <br> neuen Bestellungen',
        orderOverview_partialValueOngoingOrders:'Teilewert mit <br> laufenden Bestellungen',
        orderOverview_partialValueNewAndOngoingOrders:'Teilewert mit <br> laufenden und neuen Bestellungen',
        
    });

    // englische Sprache
    $translateProvider.translations('en_US', {
        //Navigationsleiste
        NAV_Home:'Home',
        NAV_File:'File Upload',
        NAV_OrderManagment:     'Order Managment',
        //Bestellverwaltung
        orderManagment_headline:'Order Managment',
        orderManagment_product:'Product',
        orderManagment_period:'periode',
        orderManagment_id:'Id',
        orderManagment_deliveryTime:'Delivery Time',
        orderManagment_deliveryTimeDeviance:'Delivery Time Deviance',
        orderManagment_inventoryDays:'Inventory Days',
        orderManagment_warehouseStocks:'Warehouse Stocks',
        orderManagment_demand:'Demand P',
        orderManagment_discount:'Discount',
        orderManagment_orderQuantity:'Order Quantity',
        orderManagment_instantOrder:'Instant Order',
        
        //Bestellüberblick
        orderOverview_headline:'Order Overview',
        orderOverview_keydataHeadline:'Keydata',
        orderOverview_OrdersHeadline:'Orders',
        orderOverview_numberNewOrders:'Number of new orders:',
        orderOverview_numberNormalOrders:'Normal orders:',
        orderOverview_numberFastOrders:'Fast orders:',
        orderOverview_newOrdersTab:'New Orders',
        orderOverview_ongoingOrdersTab:'Ongoing Orders',
        orderOverview_inwardStockMovementTab:'Actual Inward Stock Movement',
        orderOverview_partialValueTab:'Development of Partial Value',
        orderManagment_partID: 'Part ID',
        orderOverview_fast:'Fast',
        orderOverview_amount:'Amount',
        orderOverview_totalCosts:'Total costs',
        orderOverview_materialCosts:'Material Costs',
        orderOverview_orderCosts:'Order Costs',
        orderOverview_pieceCosts:'Piece Costs',
        orderOverview_actualPartialValue:'Actual <br> Partial Value',
        orderOverview_partialValueNewOrders:'Partial Value with <br> new Orders',
        orderOverview_partialValueOngoingOrders:'Partial Value with <br> ongoing Orders',
        orderOverview_partialValueNewAndOngoingOrders:'Partial Value with <br> ongoing and new Orders',
    });

    $translateProvider.preferredLanguage('de_DE');
});