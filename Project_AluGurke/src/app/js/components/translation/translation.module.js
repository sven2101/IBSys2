/**
 * Created by Max on 11.10.2015.
 */
/// <reference path="../../angular.d.ts" />
angular.module('TranslationModule', []);
angular.module('app').config(function ($translateProvider) {
    // deutsche Sprache
    $translateProvider.translations('de_DE', {
        //Navigationsleiste
        NAV_Home: 'Startseite',
        NAV_File: 'Datei hochladen',
        NAV_OrderManagment: 'Bestellverwaltung',
        //Bestellverwaltung
        orderManagment_headline: 'Bestellverwaltung',
        orderManagment_product: 'Produkt',
        orderManagment_period: 'Periode',
        orderManagment_quantity: 'Anzahl',
        orderManagment_id: 'Id',
        orderManagment_deliveryTime: 'Lieferzeit',
        orderManagment_deliveryTimeDeviance: 'Abweichung Lieferzeit',
        orderManagment_inventoryDays: 'Reichweite',
        orderManagment_warehouseStocks: 'Lagerstand',
        orderManagment_demand: 'Bedarf P',
        orderManagment_discount: 'Rabattmenge',
        orderManagment_orderQuantity: 'Menge',
        orderManagment_instantOrder: 'Eilbestellung'
    });
    // englische Sprache
    $translateProvider.translations('en_US', {
        //Navigationsleiste
        NAV_Home: 'Home',
        NAV_File: 'File Upload',
        NAV_OrderManagment: 'Order Managment',
        //Bestellverwaltung
        orderManagment_headline: 'Order Managment',
        orderManagment_product: 'Product',
        orderManagment_period: 'periode',
        orderManagment_id: 'Id',
        orderManagment_deliveryTime: 'Delivery Time',
        orderManagment_deliveryTimeDeviance: 'Delivery Time Deviance',
        orderManagment_inventoryDays: 'Inventory Days',
        orderManagment_warehouseStocks: 'Warehouse Stocks',
        orderManagment_demand: 'Demand P',
        orderManagment_discount: 'Discount',
        orderManagment_orderQuantity: 'Order Quantity',
        orderManagment_instantOrder: 'Instant Order'
    });
    $translateProvider.preferredLanguage('de_DE');
});
