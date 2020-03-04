 # IBSYS2 - Projekt im Rahmen der Hochschule Karlsruhe - Technik und Wirtschaft
 
Integrierte Betriebliche Systeme – Entwicklung einer Webanwendung zur Produktionsplanung


## Beschreibung
Die Webanwendung soll im Rahmen eines Planspiels die logistischen Aufgaben der Planung einer Produktion über mehrere Perioden (eine Periode = 1 Woche = 5 Tage = 40 Stunden = 2400 Minuten) bereitstellen. 
Dabei gilt es folgende Anforderungen zu erfüllen:

* Treffen von Vertriebsentscheidungen d.h. Annahme oder Ablehnung von Verkaufsaufträgen
* Disposition der Eigenfertigprodukte und Kaufteile
* Durchführung des strategischen und operativen Einkaufs
* Planung der Produktionskapazitäten

Die Webanwendung enthält folgende Komponenten:

* Dashboard zur Übersicht
* Dateiverwaltung zum einspeisen von Daten
* Produktionsprogramm
* Dispositionsverwaltung
* Bestellverwaltung
* Kapazitätsplanung
* Lagerübersicht
* Prognosen

Weitere Details zur Anwendung und Verwendung sind im [Handbuch](https://github.com/sven2101/IBSys2/blob/master/Manual/final/manual%20final.pdf) enthalten. 

## Architektur
MEAN-Stack

* Browser Webapp (AngularJS) als Client
* NODE.JS als Anwendungsserver
* MongoDB als Datenbank

## Live-Betrieb

Die entwicklte Webanwendung wurde in das bestehende Planspiel für weitere Vorlesungen integriert und ist somit für alle Endgeräte wie Computer, Tablet und Smartphone erreichbar, sofern eine Internetverbindung vorhanden ist. Den Supply Chain Manager erreichen Sie unter www.http://www.scsimulator.de/ unter dem Reiter SCManager in Ihrem Browser. Empfohlen werden die Browser Google Chrome oder Mozilla Firefox. Durch Aufruf der Webseite landen Sie auf dem Dashboard.

