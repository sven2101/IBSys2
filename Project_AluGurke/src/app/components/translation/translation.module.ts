/**
 * Created by Max on 11.10.2015.
 */
/// <reference path="../../typeDefinitions/angular.d.ts" />
angular.module('TranslationModule', []);

angular.module('app').config(function($translateProvider) {
    // deutsche Sprache
    $translateProvider.translations('de_DE', {
        //Navigationsleiste
        NAV_Home: 'Startseite',
        NAV_File: 'Dateiverwaltung',
        NAV_productionPlan: 'Produktionsprogramm',
        NAV_OrderManagment: 'Bestellverwaltung',
        NAV_orderOverview:'Bestellüberblick',
        NAV_warehouse:'Lager',
        NAV_purchasing:'Kaufteildisposition',
        NAV_disposition: 'Disposition',
        NAV_productionOrders: 'Disposition Details',
        NAV_CapacityPlanning: 'Kapazitätsplanung',
        
        NAV_footer:'Sven, Marius und Max; Hochschule Karlsruhe – Technik und Wirtschaft',
        
        strategy_verySafe:'Sehr sicher',
        strategy_safe:'Sicher',
        strategy_normal:'Normal',
        strategy_risky:'Riskant',
        strategy_veryRisky:'Sehr Riskant',
        strategy_headline:'Wähle eine Strategie:',
        
        //Kaufteildisposition
        purchasing_headline:'Kaufteildisposition',
        purchasing_price:'Preis ',
        purchasing_consumption: 'Verbrauch',
        purchasing_stockQuantity: 'Lagermenge',
        purchasing_stockRange: 'Reichweite [Per.]',
        pruchasing_proculeadTime: 'WBZ [Per.]',
        purchasing_deviation: 'Abweichung[Per.]',
        purchasing_thisPeriode: 'aktuell',

        //Kaufteildisposition detailtabelle
        purchasing_detail_newOrders:'Neue Bestellungen',
        purchasing_detail_fastOrder:'Eil',
        purchasing_detail_amount:'Menge',
        purchasing_detail_costs:'Kosten',
        purchasing_detail_keyData:'Kennzahlen',
        purchasing_detail_amountOfCurretInwardStock:'Menge an aktuellem Lagerzugang',
        purchasing_detail_amountOfFutureInwardStock:'Menge an zukünftigem Lagerzugang',

        //Detailansicht
        details_headline: 'Detailansicht',
        details_scndHeadline: 'Detailainsicht für Kaufteil',
        details_consumption: 'Verbrauch',
        details_period: 'Periode',
        details_stockRange: 'Reichweite [Per.]',
        details_thisPeriode: 'aktuell',
        details_costs: 'Kosten',
        details_takeOver: 'Übernehmen',
        details_proposal: 'Vorschlag für eine neue Bestellung',
        details_newOrders: 'Neue Bestellungen',
        details_createNewOrder: 'Neue Bestellung anlegen',
        details_futureInwardStockmovement: 'Zukünftiger Lagerzugang',
        details_prediction:'Prognose',
        details_development:'Entwicklung durchschnittlicher Lagerbestand',
        details_inwardStockmovement:'Aktueller Lagerzugang',
        details_fastOrder:'Eilbestellung',
        details_create:'Anlegen',
        
        //Bestellüberblick
        orderOverview_headline: 'Bestellüberblick',
        orderOverview_Orders: 'Bestellungen',
        orderOverview_keydataHeadline: 'Kennzahlen für neue Bestellungen',
        orderOverview_OrdersHeadline: 'Bestellungen',
        orderOverview_numberNewOrders: 'Anzahl:',
        orderOverview_numberNormalOrders: 'Normalbestellungen:',
        orderOverview_numberFastOrders: 'Eilbestellungen:',
        orderOverview_newOrdersTab: 'Neue Bestellungen',
        orderOverview_ongoingOrdersTab: 'Laufende Bestellungen',
        orderOverview_inwardStockMovementTab: 'Lagerzugang',
        orderOverview_partialValueTab: 'Teilewertentwicklung',
        orderOverview_fast: 'Eil',
        orderOverview_totalCosts: 'Gesamtkosten',
        orderOverview_materialCosts: 'Materialkosten',
        orderOverview_orderCosts: 'Bestellkosten',
        orderOverview_pieceCosts: 'Stückkosten',
        orderOverview_actualPartialValue: 'Aktueller Teilewert',
        orderOverview_partialValueNewOrders: 'Teilewert mit neuen Bestellungen',
        orderOverview_partialValueOngoingOrders: 'Teilewert mit laufenden Bestellungen',
        orderOverview_partialValueNewAndOngoingOrders: 'Teilewert mit laufenden und neuen Bestellungen',
        orderOverview_partID: 'Teil ID',
        orderOverview_amount: 'Menge',
        orderOverview_orderPeriode: 'Bestellperiode',
        orderOverview_orderTime:'Zeit',
        
        //Disposition
        disposition_Headline: 'Disposition',
        dispostion_ChildrensBicycles: 'Kinderfahrräder',
        disposition_Id: 'Id',
        disposition_SalesOrder: 'Vertriebswunsch',
        disposition_planedStock: 'Geplanter Lagerstand',
        disposition_stock: 'Aktueller Lagerstand',
        disposition_OrderWaitingQueue: 'Aufträge in Warteschlange',
        disposition_WorkInProgress: 'Aufträge in Bearbeitung',
        disposition_productionProgram: 'Produktionsauftrag für kommende Periode',
        
        //Fertigungsaufträge
        productionOrders_headline: 'Disposition Details',
        productionOrders_Id: 'Id',
        productionOrders_workingPlace:'Arbeitsplatz',
        productionOrders_amount: 'Menge',
        productionOrders_priority: 'Priorität',
        productionOrders_productionPosition: 'Auftragspositionen, mit Komma getrennt',
        productionOrders_details: 'Details',
        productionOrders_normal: 'normal',
        productionOrders_high: 'hoch',
        productionOrders_critical: 'kritisch',
        productionOrders_orderPosition: 'Auftragspositionen',
        
        
        //Kapazitätsplanung
        capacityPlanning_headline: 'Kapazitätsplanung',
        capacityPlanning_Workplace: 'Arbeitsplatz',
        capacityPlanning_WorkingHours: 'Arbeitszeit',
        capacityPlanning_timeAvailable: 'Verfügbare Zeit',
        capacityPlanning_amountOrders: 'Anzahl der Produktionsaufträge',
        capacityPlanning_Shifts: 'Anzahl der Schichten',
        capacityPlanning_overtime: 'Überstunden in min',
        capacityPlanning_automaticCalculation:'Automatische Berechnung',
        capacityPlanning_deleteWorkingHours:'Arbeitszeiten löschen',
        capacityPlanning_calculateWorkingHours:'Arbeitszeiten automatisch berechnen',

        //Lager
        warehous_headline: 'Lager',
        warehous_statistics: 'Statistik',
        warehous_parts: 'Kaufteile',
        warehous_manufacturedProducts: 'Erzeugnisse',
        warehous_totalStockValue: 'Gesamter Lagerwert',
        warehous_stockQuantity: 'Lagermenge',
        warehous_stockValue: 'Lagerwert',
        warehous_partialValue: 'Teilewert',
        warehouse_multipleUsage: 'MFW',
        warehouse_description: 'Bezeichnung',

        //Produktionsproramm
        production_plan_headline: 'Produktionsprogramm',
        production_plan_sellWish: 'Vertriebswunsch',
        production_plan_product: 'Produkt',
        production_plan_count: 'Anzahl',
        production_plan_forecast: 'Prognose',
        production_plan_period: 'Periode',
        production_plan_amount: 'Menge',
        production_plan_price: 'Preis',
        production_plan_penalty: 'Konventionalstrafe',
        production_plan_sales:'Normalverk\u00E4ufe',
        production_plan_direct_sales:'Direktverk\u00E4ufe',

        //Dashboard
        dashboard_login:'Melde dich an um alle Erweiterungen zu nutzen!',
        dashboard_stockMovement:'Lagerentwicklung',
        dashboard_stockValue:'Lagerwert',
        dashboard_period:'Periode',
        dashboard_currentOrders:'Laufende Bestellungen',
        dashboard_standardPurchaseOrder:'Normalbestellungen',
        dashboard_rushOrder:'Eilbestellungen',
        dashboard_stockCostMovement:'Lagerkostenentwicklung',
        dashboard_profitMovement:'Profitentwicklung',
        dashboard_idleTime:'Leerzeiten und Kosten',
        dashboard_efficiency:'Auslastung, Liefertreue und Normalkapazit\u00E4t',
        dashboard_sellingWish:'Vertriebswunsch und Verkaufte Einheiten',
        dashboard_sales:'Einnahmen aus Verk\u00E4ufe',
        dashboard_averageStorevalue:'Durchschnittlicher Lagerwert',
        dashboard_storagecosts:'Lagerkosten',
        dashboard_storageFee:'Lagerkostensatz',
        dashboard_allPeriods:'Alle Perioden',
        dashboard_periodsPerAnno:'Perioden pro Jahr',
        dashboard_loadFile:'Herzlich Wilkommen bei SCManager.de!',
        dashboard_loadFileText:'Um das Dashboard und alle Funktionen zu verwenden, laden Sie bitte Ihre erste Datei hoch',
        dashboard_loadFileButton:'>> Hier geht\'s zum Datei Upload',

        //login
        login_welcome:'Willkommen bei SCManager.de',
        login_welcome_sub:'Nutze alle Funktionen für deine Produktionsplanung',
        login_username:'Benutzername',
        login_password:'Passwort',
        login_noAcc:'Noch keinen Account?',
        login_register:'Registrieren',

        //Registrieren
        register_welcome:'Registriere dich f\u00fcr deinen SC Manager',
        register_agbs:'AGB\'s akzeptieren',
        register_register:'Registrieren',
        register_alreadyRegistred:'Schon registriert?',

        //Datei
        file_upload_head:'Simulationsdatei hochladen',
        file_upload_button:'Datei hochladen',
        file_download_head:'Fertig mit der Eingabe? Dann erstellen Sie hier eine Datei für die Simulation!',
        file_download_button:'Datei erstellen',



    });

    // englische Sprache
    $translateProvider.translations('en_US', {
        //Navigationsleiste
        NAV_Home: 'Home',
        NAV_File: 'File management',
        NAV_productionPlan: 'Production plan',
        NAV_OrderManagment: 'Order Managment',
        NAV_orderOverview:'Order Overview',
        NAV_warehouse:'Warehouse',
        NAV_purchasing:'Purchasing',
        NAV_disposition: 'Material planning',
        NAV_productionOrders: 'Material planing details',
        NAV_CapacityPlanning: 'Capacity planning',
        NAV_footer:'Sven, Marius und Max; Karlsruhe University of Applied Sciences',
        
        strategy_verySafe:'Very safe',
        strategy_safe:'Safe',
        strategy_normal:'Normal',
        strategy_risky:'Risky',
        strategy_veryRisky:'Very risky',
        strategy_headline:'Choose a strategy:',
        
        //Kaufteildisposition
        purchasing_headline:'Purchasing',
        purchasing_price:'Price',
        purchasing_consumption: 'Consumption',
        purchasing_stockQuantity: 'Stock Quantity',
        purchasing_stockRange: 'Stock Range [Per.]',
        pruchasing_proculeadTime: 'Proculeadtime [Per.]',
        purchasing_deviation: 'Deviation[Per.]',
        purchasing_thisPeriode: 'this Period',

        //Kaufteildisposition detailtabelle
        purchasing_detail_newOrders:'New Orders',
        purchasing_detail_fastOrder:'Fast',
        purchasing_detail_amount:'Amount',
        purchasing_detail_costs:'Costs',
        purchasing_detail_keyData:'Key data',
        purchasing_detail_amountOfCurretInwardStock:'Amount of current inwardstockmovement',
        purchasing_detail_amountOfFutureInwardStock:'Amount of future inwardstockmovement',
        
        //Detailansicht
        details_headline: 'Details',
        details_scndHeadline: 'Details of Purchased Part',
        details_consumption: 'Consumption',
        details_period: 'Period',
        details_stockRange: 'Stock Range [Per.]',
        details_thisPeriode: 'this Period',
        details_costs: 'Costs',
        details_takeOver: 'Take Over',
        details_proposal: 'Proposal for new Order',
        details_newOrders: 'New Orders',
        details_createNewOrder: 'Create a new Order',
        details_futureInwardStockmovement: 'Future Inwardstockmovement',
        details_prediction:'Prediction',
        details_development:'Development of Stock Quantity',
        details_inwardStockmovement:'Inwardstockmovement',
        details_fastOrder:'Fast order',
        details_create:'Add',
        
        //Bestellüberblick
        orderOverview_headline: 'Order Overview',
        orderOverview_Orders: 'Orders',
        orderOverview_keydataHeadline: 'Keydata of new orders',
        orderOverview_OrdersHeadline: 'Orders',
        orderOverview_numberNewOrders: 'Amount:',
        orderOverview_numberNormalOrders: 'Normal orders:',
        orderOverview_numberFastOrders: 'Fast orders:',
        orderOverview_newOrdersTab: 'New Orders',
        orderOverview_ongoingOrdersTab: 'Ongoing Orders',
        orderOverview_inwardStockMovementTab: 'Actual Inward Stock Movement',
        orderOverview_partialValueTab: 'Development of Partial Value',
        orderManagment_partID: 'Part ID',
        orderOverview_fast: 'Fast',
        orderOverview_amount: 'Amount',
        orderOverview_totalCosts: 'Total Costs',
        orderOverview_materialCosts: 'Material Costs',
        orderOverview_orderCosts: 'Order Costs',
        orderOverview_pieceCosts: 'Piece Costs',
        orderOverview_actualPartialValue: 'Actual Partial Value',
        orderOverview_partialValueNewOrders: 'Partial Value with new Orders',
        orderOverview_partialValueOngoingOrders: 'Partial Value with ongoing Orders',
        orderOverview_partialValueNewAndOngoingOrders: 'Partial Value with ongoing and new Orders',
        orderOverview_partID: 'Part ID',
        orderOverview_orderPeriode: 'Order Period',
        orderOverview_orderTime:'Time',
        
        //Disposition
        disposition_Headline: 'Material planning',
        dispostion_ChildrensBicycles: 'Children´s bicycles',
        disposition_Id: 'Id',
        disposition_SalesOrder: 'Sales orders',
        disposition_planedStock: 'Planned warehouse stock',
        disposition_stock: 'Warehouse stock',
        disposition_OrderWaitingQueue: 'Orders in the waiting queue',
        disposition_WorkInProgress: 'Work in progress',
        disposition_productionProgram: 'Production order',
        
        //Fertigungsaufträge
        productionOrders_headline: 'Material planing details',
        productionOrders_Id: 'Id',
        productionOrders_workingPlace:'Working place',
        productionOrders_amount: 'Amount',
        productionOrders_priority: 'Priority',
        productionOrders_productionPosition: 'Order position, separated by commas',
        productionOrders_details: 'Details',
        productionOrders_normal: 'normal',
        productionOrders_high: 'high',
        productionOrders_critical: 'critical',
        productionOrders_orderPosition: 'Order positions',
        
        //Kapazitätsplanung
        capacityPlanning_headline: 'Capacity planning',
        capacityPlanning_Workplace: 'Workplace',
        capacityPlanning_WorkingHours: 'Working hours',
        capacityPlanning_timeAvailable: 'Time available',
        capacityPlanning_amountOrders: 'Amount of production orders',
        capacityPlanning_Shifts: 'Number of shifts',
        capacityPlanning_overtime: 'Overtime in min',
        capacityPlanning_automaticCalculation:'Automatic calculation',
        capacityPlanning_deleteWorkingHours:'Delete Working hours',
        capacityPlanning_calculateWorkingHours:'Calculate working hours',
        
        //Lager
        warehous_headline: 'Warehouse',
        warehous_statistics: 'Statistics',
        warehous_parts: 'Purchased Parts',
        warehous_manufacturedProducts: 'Manufactured Products',
        warehous_totalStockValue: 'Total Stock Value',
        warehous_stockQuantity: 'Stock Quantity',
        warehous_stockValue: 'Stock Value',
        warehous_partialValue: 'Partial Value',
        warehouse_multipleUsage: 'Multiple Usage',
        warehouse_description: 'Description',

        //Produktionsproramm
        production_plan_headline: 'Production plan',
        production_plan_sellWish: 'Sales wish',
        production_plan_product: 'Product',
        production_plan_count: 'Quantity',
        production_plan_forecast: 'Forecast',
        production_plan_period: 'Period',
        production_plan_amount: 'Amount',
        production_plan_price: 'Price',
        production_plan_penalty: 'Penalty',
        production_plan_sales:'Sales',
        production_plan_direct_sales:'Direct Sales',

        //Dashboard
        dashboard_login:'Login to use all features!',
        dashboard_stockMovement:'Stock movement',
        dashboard_stockValue:'Stock value',
        dashboard_period:'Period',
        dashboard_currentOrders:'Current orders',
        dashboard_standardPurchaseOrder:'Standard purchase Orders',
        dashboard_rushOrder:'Rush orders',
        dashboard_stockCostMovement:'Stock cost movement',
        dashboard_profitMovement:'Profit movement',
        dashboard_idleTime:'Idle time and costs',
        dashboard_efficiency:'Capacity, delivery reliability and normal capacity',
        dashboard_sellingWish:'Sales wish and sold units',
        dashboard_sales:'Income from sales',
        dashboard_averageStorevalue:'Average stock value',
        dashboard_storagecosts:'Storage costs',
        dashboard_storageFee:'Storage fee',
        dashboard_allPeriods:'All periods',
        dashboard_periodsPerAnno:'Periods p.a.',
        dashboard_loadFile:'Welcome to SCManager.de!',
        dashboard_loadFileText:'If you want to use all features you should upload your first file',
        dashboard_loadFileButton:'>> Uploady your file now',

        //login
        login_welcome:'Welcome to SCManager.de',
        login_welcome_sub:'Use all features for your production planning',
        login_username:'Username',
        login_password:'Password',
        login_noAcc:'No account?',
        login_register:'Register',

        //Registrieren
        register_welcome:'Register for your SC Manager',
        register_agbs:'Accept AGB\'s',
        register_register:'Register',
        register_alreadyRegistred:'Already registered ?',

        //Datei
        file_upload_head:'Upload simulation file',
        file_upload_button:'Upload file',
        file_download_head:'Input complete? Then create a new file for the simulation!',
        file_download_button:'Create file',

    });
    $translateProvider.preferredLanguage('de_DE');
    $translateProvider.useSanitizeValueStrategy(null);
});