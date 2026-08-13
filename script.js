/* ============================================
   HAYES LOGISTIK — SETTINGS
   Passe diese Werte an eure echten Daten an.
   ============================================ */
const CONFIG = {
  discordInvite: "https://discord.gg/JYTReebRTb",
  bewerbungsLink: "https://trucksbook.eu/company/226854",
  gegruendet: "2026",
};

/* ============================================
   LADEGÜTER — DATEN
   Quelle: Frachtenliste (Stellvertretung)
   Format je Eintrag: [Name, Tonnen, ADR, DLC, Anmerkung, Trailer]
   ============================================ */
const CARGO=[["Abgassysteme","3 – 7T","","","","Containertransporter"],["Acetylen","9 – 19T","ADR (Klasse 2)","","","Containertransporter"],["Ahornsirup","17T","","","","Curtainsider"],["Alk. freies Bier","22T","","","","Curtainsider"],["Altkunststoff 1.","3 - 7T","","","","Containertransporter"],["Altkunststoff 2.","9T","","","","Curtainsider"],["Altverpackung","20T","","","","Curtainsider"],["Aluminium Fensterrahmen","10T","","","","Curtainsider"],["Aluminium Barren","26T","","","","Flachbett"],["Aluminium Profiele","16T","","","","Flachbett"],["Antriebsaggregat JCB 1.25QE","12T","","JCB (DLC)","","Flachbett"],["Aquarien","7T","","","","Curtainsider"],["Arbeitskleidung","16T","","","","Curtainsider"],["Arsen","9 – 18T","ADR (Klasse 6)","","","Containertransporter"],["Asphaltfräse","44T","","","Schwerlast","Tieflader/Tiefbett"],["ATL. Kabeljaufilets","16T","","","","Gekühlt"],["AutonomerTraktor","8T","","Farmer (DLC)","","Tieflader/Tiefbett"],["Autos 1","7T","","","","Autotransporter"],["Autos 2","10T","","","","Autotransporter"],["Autos 3","9T","","","","Autotransporter"],["Autos 4","4T","","","","Nfz-Transporter"],["Autos 5","8T","","","","Autotransporter"],["Autos 6","8T","","","","Autotransporter"],["Autos 7","6T","","","","Autotransporter"],["Autos 8","7T","","","","Autotransporter"],["Außenfliesen","19T","","","","Curtainsider"],["Bagger Bobcat E60","6T","","Bobcat (DLC)","","Tieflader/Tiefbett"],["Bagger JCB 245XR","28T","","JCB (DLC)","Schwerlast","Tieflader/Tiefbett"],["Baggerlader","8T","","","","Tieflader/Tiefbett"],["Baggerlader JCB 4CX","8T","","JCB (DLC)","","Tieflader/Tiefbett"],["Ballenpresse","7T","","Farmer (DLC)","","Tieflader/Tiefbett"],["Basilikum","21T","","","","Curtainsider"],["Batterien","15 – 17T","","","","Curt/Container"],["Bauholz","15T","","","","Flachbett"],["Baumrinde","6T","","","","Kipper"],["Baumstämme","24T","","","","Rungen"],["Baumwollerntemaschiene","30T","","","Schwerlast","Tieflader"],["Benzin","21T","ADR (Klasse 3)","","","Kraftstofftank"],["Beton-Bodenplatten","23T","","","1 Auflieger","Tieflader"],["Beton-Lehrgerüst","19T","","","","Flachbett"],["Betontreppe","18T","","","","Flachbett"],["Betonträger 1","14T","","","","Flachbett"],["Betonträger 2","51T","","","Schwerlast","Tieflader/Tiefbett"],["Bewehrungsstahl","15T","","","","Flachbett"],["Bier","22T","","","","Curtainsider"],["Birnen","15T","","","","Curt/Gekühlt"],["Blei","9 – 18T","ADR (Klasse 6)","","","Containertransporter"],["Blumenkohl","9T","","","","Curt/Gekühlt"],["Bohnen","12T","","","","Curtainsider"],["Bohrer/Driller D-50","8T","","","","Tiefbett"],["Bohrsäure","16T","","","","Curtainsider"],["Bremsbeläge","20T","","","","Curtainsider"],["Bremsflüssigkeit","2 - 5T","","","","Containertransporter"],["Bulldozer - Kriecher","39T","","","Schwerlast","Tieflader/Tiefbett"],["Büropapier 1","18T","","","","Curtainsider"],["Büropapier 2","18T","","","","Curtainsider"],["Chemikalien","18T","ADR (Klasse 6)","","","Chemietank"],["Chemische Granulate","15 – 17T","ADR (Klasse 4)","","","Curt/Container"],["Chemisches Sorptionsmittel 1","4 - 8T","","","","Containertransporter"],["Chemisches Sorptionsmittel 2","11T","","","","Curtainsider"],["Chlor 1","8 – 16T","ADR (Klasse 2)","","","Containertransporter"],["Chlor 2","28T","ADR (Klasse 2)","","Schwerlast","Gastank"],["cn_Backpacks","15T","","","","Curtainsider"],["cn_Books","15T","","","","Curtainsider"],["cn_School_sup","15T","","","","Curtainsider"],["Computerprozessoren","3T","","","","Curtainsider"],["Containerbäumen","4T","","","","Curt/Gekühlt"],["Dachfenster","11T","","","","Curtainsider"],["Dachpappe","19T","","","","Curtainsider"],["Dachziegeln","19T","","","","Curt/Pritschen"],["Desinfektionsmittel","16T","","","","Curtainsider"],["Diesel","25T","ADR (Klasse 3)","","","Kraftstofftank"],["Dieselgenerator","21T","","","","Curtainsider"],["Dosenbohnen","16T","","","","Curtainsider"],["Dosenfisch","18T","","","","Gekühlt"],["Dosenrindfleisch","22T","","","","Gekühlt"],["Dosensardienen","18T","","","","Curtainsider"],["Dosenschweinefleisch","22T","","","","Gekühlt"],["Dosenthunfisch","18T","","","","Gekühlt"],["Drehgestelle","18T","","","","Flachbett"],["Druckbehälter","7T","","","","Flachbett"],["Dynamid","17T","ADR (Klasse 1)","","","Curtainsider"],["Düngemittel","19T","","","","Curt/Pritschen"],["Düngerstreuer","14T","","Farmer (DLC)","","Tieflader"],["Einmachgläser","7T","","","","Curtainsider"],["Eisenbahnachsen","23T","","","","Flachbett"],["Eisenrohre 1","20T","","","","Rungen"],["Eisenrohre 2","24T","","","","Flachbett"],["Eiskaffee in Dosen","21T","","","","Curtainsider"],["Elektrische Leitungen","15T","","","","Curtainsider"],["Elektrischer Minibagger JCB 19C-E","5T","","JCB (DLC)","","Flachbett"],["Elektro-Muldenkipper JCB HTD-5E","3T","","JCB (DLC)","","Flachbett"],["Elektronik","8T","","","","Curtainsider"],["Erbsen","18T","","","","Curtainsider"],["Erdaushub","26T","","","Schwerlast","Kipper"],["Erdbauwalze Volvo SD160B","16T","","VOLVO (DLC)","","Tieflader/Tiefbett"],["Erdnussbutter","19T","","","","Curt/Gekühlt"],["Erntebehälter","2T","","Farmer (DLC)","","Curtainsider"],["Erz","25T","","","","Kipper"],["Essig 1","15T","","","","Curtainsider"],["Essig 2","4 – 9T","","","","Containertransporter"],["Ethan","21T","ADR (Klasse 2)","","","Gastank"],["Explosive Stoffe","12T","ADR (Klasse 1)","","","Curtainsider"],["Felbinder EUT","6T","","","Felbinder",""],["Felbinder KIP","6T","","","Felbinder",""],["Felbinder TSA ADR","6T","","","Felbinder",""],["Felbinder TSA LM","6T","","","Felbinder",""],["Feldhäcksler","13T","","Farmer (DLC)","","Tieflader"],["Feldhäcksler Krone BIG X 1180","17T","","KRONE (DLC)","","Tieflader"],["Feldspritze","15T","","Farmer (DLC)","","Tieflader"],["Fertighauswände","22T","","","1 Auflieger","Tieflader"],["Fertigtreppen (Beton)","22T","","","","Curtainsider"],["Fettversiegelte Lager","23T","","","","Curtainsider"],["Feuerwerkskörper","9T","ADR (Klasse 1)","","","Curtainsider"],["Fischstäbchen","17T","","","","Curtainsider"],["Flach Verpackte Möbel 1","18T","","","","Curtainsider"],["Flach Verpackte Möbel 2","18T","","","","Curtainsider"],["Flugzeugreifen","18T","","","","Curtainsider"],["Flour","6 – 13T","ADR (Klasse 2)","","","Containertransporter"],["Forst Raupenbagger","17T","","Forst DLC","","Tieflader"],["Forstmulcher","14T","","Forst DLC","","Tieflader/Tiefbett"],["Frische Kräuter","5T","","","","Gekühlt"],["Frischer Fisch","18T","","","","Gekühlt"],["Gabelstabler","16T","","","","Tiefbett"],["Gabelstapler Bobcat D30","4 - 9T","","Bobcat (DLC)","","Tiefbett"],["Gebrauchte Autobatterien","17T","","","","Curtainsider"],["Gefrohrener Oktopuss (Tintenfisch)","14T","","","","Gekühlt"],["Geländegängiger Gabelstapler","12T","","","","Flachbett"],["Gerste","16 - 18T","","","","Kipper/Silo"],["Geräucherte Sprotten","17T","","","","Curtainsider"],["Geräucherter Aal","11T","","","","Gekühlt"],["Gerüstmaterial","22T","","","","Curtainsider"],["Gesteinsmehl","25T","","","Schwerlast","Kipper/Silo"],["Getriebe","14T","","","","Curtainsider"],["Getränke 1","26T","","","Schwerlast","Lebensmitteltank"],["Getränke 2","10 – 21T","","","","Containertransporter"],["Getränke 3","23T","","","","Curtainsider"],["Giant Haulie (covered)","1- 2T","","","Haulie Event","Flachbett/Tiefbett"],["Glasscheiben","21T","","","","Flachbett"],["Gleiskette","11T","","","","Tiefbett"],["Gnocchi","18T","","","","Gekühlt"],["Granitblöcke","25T","","","Schwerlast","Kipper"],["Graphitfett","16T","","","","Curtainsider"],["Großer Container","11T","","","","Flachbett/Tiefbett"],["Große Eisenrohre","21T","","","","Flachbett/Rugen"],["Gummibärchen","21T","","","","Curtainsider"],["Hardware","24T","","","","Curtainsider"],["Haushaltsgegenstände","8T","","","","Curtainsider"],["Heizöl","25T","ADR (Klasse 3)","","","Kraftstofftank"],["Heiße Chemikalien","19T","ADR (Klasse 6)","","","Chemietank"],["Hochdruckabperrventiele","19T","","","","Curtainsider"],["Hochspannungsleitungen","21T","","","","Curtainsider"],["Holzbalken","13T","","","","Curt/Flachbett"],["Holzvollernter","22T","","Forst DLC","","Tieflader"],["Honig","20T","","","","Curtainsider"],["Hubschrauber - Ring - 429","3T","","","","Tieflader/Tiefbett"],["Hühnerfleisch","17T","","","","Gekühlt"],["Hüttenkäse","18T","","","","Gekühlt"],["IBC-Container","11T","","","","Curtainsider"],["Industiekabeltrommel","34T","","","Schwerlast","Tieflader"],["Industrieruß","3 – 7T","","","","Containertransporter"],["Jacht","6T","","","","Tiefbett"],["Jogurt","17T","","","","Gekühlt"],["Junge Setzlinge","3T","","","","Curt/Gekühlt"],["Kalium","10 – 20T","ADR (Klasse 4)","","","Containertransporter"],["Kaliumhydroxid","19T","ADR (Klasse 8)","","","Chemietank"],["Kaminsysteme","18T","","","","Curtainsider"],["Karotten 1","16T","","","","Curtainsider"],["Karotten 2","7 – 15T","","","","Containertransporter"],["Kartoffeln","22T","","","","Curtainsider"],["Kastenwagen 1","6T","","","","Nfz-Transporter"],["Kastenwagen 2","6T","","","","Nfz-Transporter"],["Kastenwagen 3","8T","","","","LKW-Transporter"],["Kaugummi","23T","","","","Curtainsider"],["Kautschuk","21T","","","","Curtainsider"],["Karviar","14T","","","","Gekühlt"],["Kerosin","23T","ADR (Klasse 3)","","","Kraftstofftank"],["Ketchup","15T","","","","Curtainsider"],["Kies","25T","","","Schwerlast","Kipper"],["Klebebandrollen 1","18T","","","","Curtainsider"],["Klebebandrollen 2","5 - 11T","","","","Containertransporter"],["Klebebandrollen 3","18T","","","","Curtainsider"],["Kleidung 1","15T","","","","Curtainsider"],["Kleidung 2","9 – 18T","","","","Containertransporter"],["Klimanlagen 1","8 – 11T","","","","Tieflader/Tiefbett"],["Klimanlagen 2","14T","","","","Tiefbett"],["Knickgelenk-Dumper Volvo A25G","25T","","VOLVO (DLC)","","Tieflader/Tiefbett"],["Knoblauch","12T","","","","Curtainsider"],["Kohle","24T","","","","Kipper"],["Kokosnussmilch","23T","","","","Curtainsider"],["Kokosnussöl","23T","","","","Curtainsider"],["Kompakte Generatoren JCB G1000RS","11T","","JCB (DLC)","","Flachbett"],["Kompaktlader Bobcat S86","4 – 9T","","Bobcat (DLC)","","Tiefbett"],["Kompressor Bobcat PA12.7v","2 – 3T","","Bobcat (DLC)","","Flachbett/Tiefbett"],["Kontaminiertes Material","10-20T","ADR (Klasse 6)","","","Containertransporter"],["Kork","5T","","","","Curtainsider"],["Kraftstofftank","9 – 19T","ADR (Klasse 3)","","","Containertransporter"],["Kraftstofftanks","10T","","","","Curtainsider"],["Krankenhausabfälle","11 – 23T","ADR (Klasse 3)","","","Containertransporter"],["Kreiselrechen Krone Swardro TC 1370","4T","","KRONE (DLC)","","Tieflader"],["Krone Box Liner","10T","","KRONE (DLC)","",""],["Krone Cool Liner","8T","","KRONE (DLC)","",""],["Krone Profi Liner","6T","","KRONE (DLC)","",""],["Krone Profi Liner Building","6T","","KRONE (DLC)","",""],["Kugelventiele","22T","","","","Curtainsider"],["Kunststoffgranulat","24T","","","","Silo"],["Kunststoffrohre","5T","","","","Flachbett"],["Kupferdachrinnen","8T","","","","Curtainsider"],["Käse","18T","","","","Gekühlt"],["Körperpflegeprodukten","18T","","","","Curtainsider"],["Lachsfilet","14T","","","","Gekühlt"],["Lammmägen","13T","","","","Gekühlt"],["Landwirtschaftlicher Teleskoplader Bobcat TL30.70","5T","","Bobcat (DLC)","","Tieflader/Tiefbett"],["Langholzschlepper","19T","","Forst DLC","","Tieflader"],["Lastwagen - MAN","14T","","","","LKW-Transporter"],["Lastwagen - DAF","14T","","","","LKW-Transporter"],["Lavendel","15T","","","","Curtainsider"],["Lebendrinder","23T","","","","Viehtransporter"],["Leberwurst","17T","","","","Gekühlt"],["Leere Fässer","9T","","","","Curtainsider"],["Leere Paletten 1","22T","","","","Curtainsider"],["Leere Paletten 2","22T","","","","Curtainsider"],["Leere Spule","780Kg – 1T","","","","Flachbett/Tiefbett"],["Leere Weinflaschen","13T","","","","Curtainsider"],["Leere Weinfässer","8T","","","","Curtainsider"],["Leergerüst","28T","","","Schwerlast","Tieflader"],["Leitpfosten","12T","","","","Curtainsider"],["Leitplanken","22T","","","","Curtainsider"],["Limonade","23T","","","","Curtainsider"],["LKW Batterien 1","18T","","","","Curtainsider"],["LKW Batterien 2","7 – 14T","","","","Containertransporter"],["LKW Felgen 1","12T","","","","Curtainsider"],["LKW Felgen 2","4 – 9T","","","","Containertransporter"],["LKW Reifen","13T","","","","Curtainsider"],["Locomotive CZ LOKO Effi Shunter 300","36T","","","Schwerlast","Tiefbett"],["Locomotive CZ LOKO MUV 75","14T","","","","Tiefbett"],["Locomotive Vossloh G6","61T","","","Schwerlast","Tiefbett"],["LPG 1","10 – 21T","ADR (Klasse 2)","","","Containertransporter"],["LPG 2","22T","ADR (Klasse 2)","","","Gastank"],["Luftpost","10T","","","","Curtainsider"],["Luxus – Jacht","9T","","","","Tieflader/Tiefbett"],["Luxus SUV´s","11T","","","","Autotransporter"],["Lüftungsschacht","4T","","","","Flachbett"],["Magnesium","8 – 17T","ADR (Klasse 4)","","","Containertransporter"],["Mandeln","17T","","","","Curtainsider"],["Marmorblöcke 1","21T","","","","Flachbett"],["Marmorblöcke 2","24T","","","","Flachbett"],["Marmorplatte","23T","","","","Flachbett"],["Materialumschlaggerät","36T","","VOLVO (DLC)","","Tieflader"],["Medizinische Ausrüstung","5T","","","","Curtainsider"],["Medizinische Impfstoffe","5T","ADR (Klasse 6)","","","Gekühlt"],["Meeresfrüchte","18T","","","","Gekühlt"],["Mehl","20T","","","","Curtainsider"],["Metalldosen","9T","","","","Curtainsider"],["Metallschrott","23T","","","","Kipper"],["Metallspulen","25T","","","","Flachbett"],["Metallträger","23T","","","","Flachbett"],["Milch 1","26T","","","Schwerlast","Lebensmitteltank"],["Milch 2","20T","","","","Curtainsider"],["Milchprodukte","22T","","","","Gekühlt"],["Milchpulver","18T","","","","Curtainsider"],["Mineralwasser","23T","","","","Curtainsider"],["Minibagger Bobcat E10e","3T","","Bobcat (DLC)","","Flachbett"],["Mobile Air Compressor","3T","","","","Flachbett/Tiefbett"],["Mobiele Siebmaschiene","39T","","","Schwerlast","Tieflader"],["Mobiele Zugwinde","10T","","","","Tieflader/Tiefbett"],["Mobieler Brecher","40T","","","Schwerlast","Tieflader/Tiefbett"],["Mobieler Stapler","10T","","","","Tieflader/Tiefbett"],["Mobilkran","36T","","","Schwerlast","Tieflader"],["Motorkühler","9T","","","","Curtainsider"],["Motorradgabeln","16T","","","","Curtainsider"],["Motorradreifen","22T","","","","Curtainsider"],["Motorroller","9T","","","","Curtainsider"],["Motorräder","15T","","","","Curtainsider"],["Motoröl 1","7 - 14T","","","","Containertransporter"],["Motoröl 2","18T","","","","Curtainsider"],["Mozzarelle","20T","","","","Gekühlt"],["Muldenkipper JCB 6T-2","5T","","JCB (DLC)","","Tieflader/Tiefbett"],["Munition","18T","ADR (Klasse 1)","","","Curtainsider"],["Mähaufbereiter Krone BIG M 450","","","KRONE (DLC)","","Tieflader"],["Möbel","16T","","","","Curtainsider"],["Natrium","9 – 19T","ADR (Klasse 4)","","","Containertransporter"],["Natriumhydroxid","9 – 18T","ADR (Klasse 8)","","","Containertransporter"],["Natriumhypochlorit","18T","ADR (Klasse 8)","","","Chemietank"],["Neon","8 - 17T","ADR (Klasse 2)","","","Containertransporter"],["Nitrozellulose","6 – 13T","ADR (Klasse 4)","","","Containertransporter"],["Nylonschnur","23T","","","","Curtainsider"],["Nüsse","18T","","","","Curtainsider"],["Oliven","18T","","","","Curtainsider"],["Olivenbäume","2T","","","","Pritschen"],["Olivenöl 1","17T","","","","Curtainsider"],["Olivenöl 2","25T","","","","Lebensmitteltank"],["Orangen","20T","","","","Gekühlt"],["Pasta","20T","","","","Curtainsider"],["Pestizide","10 - 21T","ADR (Klasse 6)","","","Containertransporter"],["Pesto","18T","","","","Curtainsider"],["Pferdeanhänger","7T","","","","LKW-Transporter"],["Pflanzmaschiene","8T","","Farmer (DLC)","","Tieflader"],["Pflanzensubstrat","17T","","","","Curtainsider"],["Pflaumen","16T","","","","Gekühlt"],["Pickup-Trucks","6T","","","","LKW-Transporter"],["PKW-Motoren","4T","","","","Curtainsider"],["Postpakete","11T","","","","Curtainsider"],["Propan","19T","ADR (Klasse 2)","","","Gastank"],["Pumpen","14T","","","","Curtainsider"],["Quaderballenpresse Krone BIG Pack 1290 HDP VC","10T","","KRONE (DLC)","","Tieflader"],["Quecksilberchlorid","11 - 22T","ADR (Klasse 6)","","","Containertransporter"],["Radlader","15T","","","","Tieflader/Tiefbett"],["Radlader Bobcat L95","5T","","Bobcat (DLC)","","Tieflader/Tiefbett"],["Radlader JCB 457","20T","","JCB (DLC)","","Tieflader/Tiefbett"],["Radlader Volvo L250H","35T","","VOLVO (DLC)","Schwerlast","Tieflader/Tiefbett"],["Radlader-Schaufel Volvo SPN P T SEG","3T","","VOLVO (DLC)","","Tieflader/Tiefbett"],["Raupenbagger","21T","","","","Tieflader/Tiefbett"],["Raupenbagger Volvo EC220E","20T","","VOLVO (DLC)","","Tieflader/Tiefbett"],["Raupenfahrzeug","10T","","","","Tieflader/Tiefbett"],["Raupentraktor","13T","","","","Tieflader/Tiefbett"],["Raupentraktor 2","25T","","","Schwerlast","Tieflader"],["Reifen","16T","","","","Curtainsider"],["Reis 1","8 – 17T","","","","Containertransporter"],["Reis 2","22T","","","","Curtainsider"],["Rentierfleisch","13T","","","","Gekühlt"],["Rindfleisch","21T","","","","Gekühlt"],["Roggen","18 - 21T","","","","Kipper/Silo"],["Rohrleitungszubehör","18T","","","","Curtainsider"],["Roller","8T","","","","Tieflader/Tiefbett"],["Rollrasen","15T","","","","Curtainsider"],["Rundballenpresse Krone Vari Pack V 190 XC","4T","","KRONE (DLC)","","Tieflader/Tiefbett"],["Räder mit VOLVO Felgen","11T","","VOLVO (DLC)","","Flachbett"],["Rückezug","20T","","Forst DLC","","Tieflader"],["Rückschlagventile","23T","","","","Curtainsider"],["Saatgut Bigbags","19T","","","","Curtainsider"],["Saftkonzentrat 1","23T","","","","Curtainsider"],["Saftkonzentrat 2","26T","","","","Lebensmitteltank"],["Salz und Gewürze 1","6 – 12T","","","","Containertransporter"],["Salz und Gewürze 2","16T","","","","Curtainsider"],["Salzsäure","21T","ADR (Klasse 8)","","","Chemietank"],["Sand","25T","","","","Kipper/Silo"],["Sandwichpaneele","12T","","","","Curtainsider"],["Satteltieflader","17T","","","","Tiefbett"],["Schafwolle","13T","","","","Curtainsider"],["Scheibeneggen","6T","","Farmer (DLC)","","Tieflader/Tiefbett"],["Scheibenmähwerk Krone EasyCut B88 CV","2T","","KRONE (DLC)","","Tiefbett"],["Schinken","16T","","","","Gekühlt"],["Schnittblumen","1T","","","","Gekühlt"],["Schokolade","23T","","","","Curtainsider"],["Schutzkleidung","20T","","","","Curtainsider"],["Schwefelsäure 1","25T","ADR (Klasse 8)","","Schwerlast","Chemietank"],["Schwefelsäure 2","10 – 20T","ADR (Klasse 8)","","","Containertransporter"],["Schweine","10T","","","","Viehtransporter"],["Schweinefleisch","18T","","","","Gekühlt"],["Schwermetalle","10 – 20T","ADR (Klasse 6)","","","Containertransporter"],["Siliziumdioxyd","19T","","","","Curtainsider"],["Sojamilch 1","21T","","","","Curtainsider"],["Sojamilch 2","25T","","","","Lebensmitteltank"],["Spanplatten","21T","","","","Curtainsider"],["Speiseeis","14T","","","","Gekühlt"],["Speiseöl","25T","","","","Lebensmitteltank"],["Spielzeug","9T","","","","Curtainsider"],["Stahlseile","14T","","","","Curtainsider"],["Steine","25T","","","Schwerlast","Kipper"],["Steinwolle","5T","","","","Curtainsider"],["Stickstoff","9 – 18T","ADR (Klasse 2)","","","Containertransporter"],["Stilles Mineralwasser i. Flaschen","23T","","","","Curtainsider"],["Stoßdämpfer","16T","","","","Curtainsider"],["Strohballen","15T","","","","Curt/Flachbett"],["Styroporkisten","3T","","","","Curtainsider"],["SUV´s","12T","","","","Autotransporter"],["Sägespäne","4T","","","","Kipper/Silo"],["Säure","19T","ADR (Klasse 8)","","","Chemietank"],["Tafelgeschirr","16T","","","","Curtainsider"],["Teile für Gaspipeline","21T","","","","Tieflader/Tiefbett"],["Teleskoplader JCB 540-180","11T","","JCB (DLC)","","Tieflader/Tiefbett"],["Tiefgekühlter Seehecht","17T","","","","Gekühlt"],["Tierfutter 1","9 – 18T","","","","Containertransporter"],["Tierfutter 2","20T","","","","Curtainsider"],["Tomaten","18T","","","","Gekühlt"],["Topfpflanzen","3T","","","","Gekühlt"],["Tracktor JCB-Fastrac 4220","9T","","JCB (DLC)","","Tieflader/Tiefbett"],["Tracktoren","8T","","","","Tieflader/Tiefbett"],["Transformator - PK900","47T","","","Schwerlast","Tieflader"],["Trauben","14T","","","","Gekühlt"],["Trockener Zement","26T","","","Schwerlast","Curtainsider"],["Umschlagbagger Volvo EW240E MH","26T","","VOLVO (DLC)","Schwerlast","Tieflader/Tiefbett"],["Verpackte Lebensmittel","17T","","","","Curtainsider"],["Verpacktes Glas","22T","","","","Innenlader"],["Verpackungshelfer","19T","","","","Flachbett"],["Vierkantrohre","14T","","","","Flachbett"],["Vorratstank","6T","","","","Flachbett"],["Wagen Krone GX 520","10T","","KRONE (DLC)","","Tieflader"],["Wasserfreies Ammoniak","27T","ADR (Klasse 2)","","","Gastank"],["Wassermelonen","20T","","","","Gekühlt"],["Wasserstoff","2- 5T","ADR (Klasse 2)","","","Containertransporter"],["Wassertank","1 - 2T","","","","Flachbett/Tieflader"],["Weizen","17 – 19T","","","","Kipper/Silo"],["Weißer Phosphor","8 - 17T","ADR (Klasse 4)","","","Containertransporter"],["Windkraftwerksgondel","21T","","","","Flachbett/Tieflader"],["Windkraftwerksturm","9T","","","","Tiefbett/Tieflader"],["Wohnmobile","6T","","","","LKW-Transporter"],["Wäschetrockner","13T","","","","Curtainsider"],["Würste","17T","","","","Gekühlt"],["Zement","24T","","","","Silo"],["Ziegelsteine","19T","","","","Pritschen"],["Ziegenkäse","15T","","","","Gekühlt"],["Zucker 1","7T","","","","Silo"],["Zucker 2","22T","","","","Curtainsider"],["Zugmaschiene – Scania","14T","","","","LKW-Transporter"],["Zugmaschiene – Volvo","14T","","","","LKW-Transporter"],["Zwiebeln","17T","","","","Curtainsider"],["Zyanid","11 - 22T","ADR (Klasse 6)","","","Containertransporter"],["Äpfel 1","20T","","","","Curtainsider"],["Äpfel 2","9 – 18T","","","","Containertransporter"],["Öl","24T","ADR (Klasse 3)","","","Kraftstofftank"],["Ölfilter 1","4 – 9T","","","","Containertransporter"],["Ölfilter 2","12T","","","","Curtainsider"],["Überladewagen","7T","","Farmer (DLC)","","Tieflader"]];


/* ============================================
   ICONS (inline SVG, currentColor)
   ============================================ */
const ICON = {
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 7h11v9H2z"/><path d="M13 10h4l4 3v3h-8z"/><circle cx="6.5" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/></svg>`,
  route: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="5" cy="6" r="2.3"/><circle cx="19" cy="18" r="2.3"/><path d="M5 8.3V13a4 4 0 0 0 4 4h6"/></svg>`,
  team: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="8" r="3"/><path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6"/><circle cx="18" cy="9" r="2.4"/><path d="M16 14.2c2.7.4 5 2.4 5 5.8"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2 20 5v6c0 5-3.4 8.5-8 11-4.6-2.5-8-6-8-11V5z"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.6 4 5.9 4 9s-1.4 6.4-4 9c-2.6-2.6-4-5.9-4-9s1.4-6.4 4-9z"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12l5 5L20 6"/></svg>`,
  compass: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M15 9l-2.2 5.8L9 17l2.2-5.8z"/></svg>`,
  radio: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="15" r="2"/><path d="M6 11a8 8 0 0 1 12 0M3 8a12 12 0 0 1 18 0"/></svg>`,
  weight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 4h8l2 4H6z"/><path d="M4 8h16l-2.2 12H6.2z"/></svg>`,
  wrench: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4L21 6l-3-3z"/></svg>`,
  discord: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 5.4A17 17 0 0 0 15.6 4l-.3.6c1.7.4 2.7.9 3.7 1.6-1.6-.8-3.2-1.2-4.9-1.2s-3.3.4-4.9 1.2c1-.7 2.2-1.3 3.7-1.6L12.6 4A17 17 0 0 0 8.2 5.4C5.6 9.1 4.9 12.7 5.2 16.3a17 17 0 0 0 4.9 2.4l.6-1c-.9-.3-1.7-.7-2.4-1.2l.4-.3a11.6 11.6 0 0 0 9.6 0l.4.3c-.7.5-1.5.9-2.4 1.2l.6 1a17 17 0 0 0 4.9-2.4c.4-4.2-.6-7.8-2.8-10.9zM9.7 14.3c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8zm4.6 0c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8z"/></svg>`,
};

/* ============================================
   HERO ROAD SVG
   ============================================ */
function heroRoadSVG(){
  return `
  <svg class="hero-road" viewBox="0 0 520 360" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    <defs>
      <linearGradient id="fadeUp" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stop-color="#e11c2e" stop-opacity="0"/>
        <stop offset="100%" stop-color="#e11c2e" stop-opacity=".9"/>
      </linearGradient>
    </defs>
    <path d="M40 340 C 140 260, 160 200, 260 170 C 360 140, 420 90, 470 20"
          fill="none" stroke="#232630" stroke-width="34" stroke-linecap="round"/>
    <path d="M40 340 C 140 260, 160 200, 260 170 C 360 140, 420 90, 470 20"
          fill="none" stroke="url(#fadeUp)" stroke-width="34" stroke-linecap="round" opacity=".5"/>
    <path id="dashline" d="M40 340 C 140 260, 160 200, 260 170 C 360 140, 420 90, 470 20"
          fill="none" stroke="#f5f6f7" stroke-width="2.5" stroke-dasharray="14 16" stroke-linecap="round" opacity=".8"/>
    <circle r="5" fill="#ff3b4e">
      <animateMotion dur="3.2s" repeatCount="indefinite"
        path="M40 340 C 140 260, 160 200, 260 170 C 360 140, 420 90, 470 20"/>
    </circle>
  </svg>`;
}

/* ============================================
   PAGE TEMPLATES
   ============================================ */
const routeLabel = (crumbs) => `
  <div class="route-label">
    ${crumbs.map((c,i)=> i < crumbs.length-1 ? `<span>${c}</span><span class="sep">/</span>` : `<span style="color:var(--silver)">${c}</span>`).join('')}
  </div>`;

const pages = {};

/* ---------- START ---------- */
pages['/'] = () => `
  <section class="hero">
    <div class="hero-inner">
      <div class="hero-copy reveal in">
        <div class="eyebrow">Euro Truck Simulator 2 · Rollenspiel-Netzwerk</div>
        <h1>HAYES <span class="accent">LOGISTIK</span></h1>
        <div class="tagline">Gemeinsam. <span class="w">Weiter.</span> Ans Ziel.</div>
        <p class="hero-lede">Wir sind eine Community von Fahrerinnen und Fahrern, die im virtuellen Fernverkehr durch ganz Europa unterwegs sind — organisiert, verlässlich und mit echtem Team-Gedanken. Vom ersten Kilometer bis zur Ausfahrt im Konvoi.</p>
        <div class="hero-ctas">
          <a href="#/karriere" class="btn btn-primary" data-route="/karriere">Jetzt bewerben</a>
          <a href="#/kontakt" class="btn btn-ghost" data-route="/kontakt">Discord beitreten</a>
        </div>
      </div>
      <div class="hero-visual reveal in">${heroRoadSVG()}</div>
    </div>
  </section>

  <section class="stats-strip">
    <div class="container">
      <div class="stat"><span class="num">5</span><span class="label">Aktive Fahrer</span></div>
      <div class="stat"><span class="num">${CONFIG.gegruendet}</span><span class="label">Gegründet</span></div>
      <div class="stat"><span class="num">EU<span class="unit">-27</span></span><span class="label">Streckennetz</span></div>
      <div class="stat"><span class="num">DE<span class="unit">·AT·CH</span></span><span class="label">Sprachraum</span></div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head reveal">
        <div class="eyebrow">Was wir tun</div>
        <h2>Ein Fuhrpark, drei Sparten, ein Ziel</h2>
        <p>Von planbaren Linienrouten bis zum spontanen Sondertransport — bei Hayes Logistik findet jede Fahrerin und jeder Fahrer die Strecke, die zum eigenen Spielstil passt.</p>
      </div>
      <div class="grid grid-3">
        <div class="card reveal">
          <div class="icon">${ICON.route}</div>
          <h3>Fernverkehr Europa</h3>
          <p>Feste Linienrouten quer durch Europa, im Konvoi oder solo — planbar und mit klaren Zeitfenstern.</p>
          <a href="#/leistungen/fernverkehr" class="card-link" data-route="/leistungen/fernverkehr">Mehr erfahren</a>
        </div>
        <div class="card reveal">
          <div class="icon">${ICON.weight}</div>
          <h3>Sondertransporte</h3>
          <p>Schwer- und Sondergüter, Eventfahrten und Begleitfahrzeuge für die anspruchsvollen Strecken.</p>
          <a href="#/leistungen/sondertransporte" class="card-link" data-route="/leistungen/sondertransporte">Mehr erfahren</a>
        </div>
        <div class="card reveal">
          <div class="icon">${ICON.radio}</div>
          <h3>Spedition &amp; Disposition</h3>
          <p>Routenplanung, Auftragsvergabe und Koordination — organisiert über unseren Discord-Server.</p>
          <a href="#/leistungen/spedition" class="card-link" data-route="/leistungen/spedition">Mehr erfahren</a>
        </div>
      </div>
    </div>
  </section>

  <div class="road-divider"></div>

  <section class="section">
    <div class="container">
      <div class="pillars reveal">
        <div class="pillar"><div class="icon">${ICON.team}</div><h4>Teamwork</h4></div>
        <div class="pillar"><div class="icon">${ICON.shield}</div><h4>Zuverlässigkeit</h4></div>
        <div class="pillar"><div class="icon">${ICON.route}</div><h4>Weg. Ziel. Zusammen.</h4></div>
        <div class="pillar"><div class="icon">${ICON.globe}</div><h4>Europaweit</h4></div>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:0;">
    <div class="container">
      <div class="cta-banner reveal">
        <div>
          <h2>Lust, den Motor zu starten?</h2>
          <p>Wir suchen laufend neue Fahrerinnen und Fahrer, die Lust auf Community, Konvois und ein Stück virtuelle Straße haben.</p>
        </div>
        <div class="cta-banner-actions">
          <a href="#/karriere" class="btn btn-primary" data-route="/karriere">Bewerbung starten</a>
          <a href="#/flotte" class="btn btn-ghost" data-route="/flotte">Flotte ansehen</a>
        </div>
      </div>
    </div>
  </section>
`;

/* ---------- UNTERNEHMEN / ÜBER UNS ---------- */
pages['/unternehmen'] = () => `
  <div class="page-header">
    <div class="container">
      ${routeLabel(['Unternehmen','Über uns'])}
      <h1>Über Hayes Logistik</h1>
      <p>Aus einer kleinen Fahrgemeinschaft im Discord ist ein festes Team geworden — mit eigener Flotte, eigenen Routen und eigenem Anspruch an Zuverlässigkeit.</p>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="split">
        <div class="reveal">
          <div class="eyebrow">Unsere Geschichte</div>
          <h2>Von der ersten Fahrt zum festen Netzwerk</h2>
          <p>Hayes Logistik entstand ${CONFIG.gegruendet} aus dem Wunsch heraus, den virtuellen Fernverkehr in Euro Truck Simulator 2 nicht dem Zufall zu überlassen. Statt loser Solofahrten wollten wir feste Strukturen: geplante Routen, verlässliche Ansprechpartner und ein Team, auf das man sich verlassen kann — egal ob um Mitternacht auf der Autobahn oder beim gemeinsamen Konvoi am Wochenende.</p>
          <p>Heute sind wir eine feste Größe in unserer Community: mit eigenem Fuhrpark, klaren Zuständigkeiten in der Disposition und einem Bewerbungsprozess, der neue Fahrerinnen und Fahrer behutsam ins Team einführt.</p>
        </div>
        <div class="panel reveal" style="padding:40px;">
          <div class="quote-block">
            <p>„Es geht nicht nur um Kilometer. Es geht darum, gemeinsam anzukommen.“</p>
            <cite>— Gründungsteam, Hayes Logistik</cite>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="road-divider"></div>

  <section class="section">
    <div class="container">
      <div class="section-head reveal">
        <div class="eyebrow">Wie wir arbeiten</div>
        <h2>Strukturiert, aber ohne den Spaß zu verlieren</h2>
      </div>
      <div class="grid grid-3">
        <div class="card reveal">
          <div class="icon">${ICON.compass}</div>
          <h3>Feste Routen</h3>
          <p>Jede Fahrt ist geplant — von der Beladung bis zur Ankunft, abgestimmt über unsere Disposition.</p>
        </div>
        <div class="card reveal">
          <div class="icon">${ICON.team}</div>
          <h3>Echtes Team</h3>
          <p>Konvois, gemeinsame Events und ein Discord, in dem man nie allein auf der Strecke ist.</p>
        </div>
        <div class="card reveal">
          <div class="icon">${ICON.wrench}</div>
          <h3>Klare Standards</h3>
          <p>Von Fahrverhalten bis Funkdisziplin — feste Richtlinien sorgen für ein angenehmes Miteinander.</p>
        </div>
      </div>
    </div>
  </section>
`;

/* ---------- WERTE ---------- */
pages['/werte'] = () => `
  <div class="page-header">
    <div class="container">
      ${routeLabel(['Unternehmen','Werte'])}
      <h1>Unsere Werte</h1>
      <p>Vier Grundsätze, die jede Fahrt bei Hayes Logistik tragen.</p>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="grid grid-2">
        <div class="card reveal">
          <div class="icon">${ICON.team}</div>
          <h3>Teamwork</h3>
          <p>Keiner fährt allein, wenn er nicht möchte. Konvois, gegenseitige Unterstützung bei Problemen auf der Strecke und ein offenes Ohr in der Disposition gehören für uns zum Standard.</p>
        </div>
        <div class="card reveal">
          <div class="icon">${ICON.shield}</div>
          <h3>Zuverlässigkeit</h3>
          <p>Ein zugesagter Slot wird gehalten, eine Ladung kommt an. Verlässlichkeit ist die Grundlage, auf der unser gesamtes Netzwerk aufbaut.</p>
        </div>
        <div class="card reveal">
          <div class="icon">${ICON.route}</div>
          <h3>Weg. Ziel. Zusammen.</h3>
          <p>Es zählt nicht nur die Ankunft — der gemeinsame Weg dorthin macht den Unterschied. Wir feiern Etappen genauso wie Ziele.</p>
        </div>
        <div class="card reveal">
          <div class="icon">${ICON.globe}</div>
          <h3>Europaweit</h3>
          <p>Unser Streckennetz kennt keine Grenzen. Von Skandinavien bis zur Iberischen Halbinsel — wir sind überall dort unterwegs, wo die Straße hinführt.</p>
        </div>
      </div>
    </div>
  </section>
`;

/* ---------- TEAM ---------- */
pages['/team'] = () => `
  <div class="page-header">
    <div class="container">
      ${routeLabel(['Unternehmen','Team & Disposition'])}
      <h1>Team &amp; Disposition</h1>
      <p>Die Köpfe hinter der Planung — vom Streckennetz bis zur Aufnahme neuer Fahrer.</p>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="people-grid">
        <div class="person reveal">
          <div class="avatar">MH</div>
          <h4>Marla Hayes</h4>
          <div class="role">Inhaberin</div>
          <p>Gründerin von Hayes Logistik und verantwortlich für die Ausrichtung des gesamten Netzwerks.</p>
        </div>
        <div class="person reveal">
          <div class="avatar">KD</div>
          <h4>Kura Diele</h4>
          <div class="role">Geschäftsführung</div>
          <p>Verantwortlich für die operative Leitung und das große Ganze im Tagesgeschäft.</p>
        </div>
        <div class="person reveal">
          <div class="avatar">FA</div>
          <h4>Flo Army</h4>
          <div class="role">Stellvertretung &amp; Disposition</div>
          <p>Vertritt die Geschäftsführung und plant gemeinsam die Routen und Aufträge des Teams.</p>
        </div>
        <div class="person reveal">
          <div class="avatar">SJ</div>
          <h4>Speed Junky</h4>
          <div class="role">Stellvertretung</div>
          <p>Vertritt die Geschäftsführung und unterstützt bei allen organisatorischen Fragen.</p>
        </div>
      </div>
      <p style="margin-top:36px;font-size:.92rem;color:var(--muted);max-width:640px;">Namen und Rollen der Disposition findet ihr im Detail auf unserem Discord-Server — dort ist das Team auch direkt ansprechbar.</p>
    </div>
  </section>
`;

/* ---------- LEISTUNGEN — ÜBERSICHT ---------- */
pages['/leistungen'] = () => `
  <div class="page-header">
    <div class="container">
      ${routeLabel(['Leistungen','Übersicht'])}
      <h1>Leistungen</h1>
      <p>Drei Sparten, die unser Streckennetz tragen — jede mit eigenem Anspruch und eigener Zielgruppe.</p>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="grid grid-3">
        <div class="card reveal">
          <div class="icon">${ICON.route}</div>
          <h3>Fernverkehr Europa</h3>
          <p>Planbare Linienrouten quer durch Europa — solo oder im Konvoi, mit festen Zeitfenstern.</p>
          <a href="#/leistungen/fernverkehr" class="card-link" data-route="/leistungen/fernverkehr">Details ansehen</a>
        </div>
        <div class="card reveal">
          <div class="icon">${ICON.weight}</div>
          <h3>Sondertransporte</h3>
          <p>Schwergut, Eventfahrten und Sondergüter für alle, die es etwas anspruchsvoller mögen.</p>
          <a href="#/leistungen/sondertransporte" class="card-link" data-route="/leistungen/sondertransporte">Details ansehen</a>
        </div>
        <div class="card reveal">
          <div class="icon">${ICON.radio}</div>
          <h3>Spedition &amp; Disposition</h3>
          <p>Koordination, Routenplanung und Auftragsvergabe für ein reibungsloses Netzwerk.</p>
          <a href="#/leistungen/spedition" class="card-link" data-route="/leistungen/spedition">Details ansehen</a>
        </div>
      </div>
    </div>
  </section>
`;

const serviceDetail = (title, eyebrow, lede, points, icon) => `
  <div class="page-header">
    <div class="container">
      ${routeLabel(['Leistungen', title])}
      <h1>${title}</h1>
      <p>${lede}</p>
    </div>
  </div>
  <section class="section">
    <div class="container">
      <div class="split">
        <div class="reveal">
          <div class="eyebrow">${eyebrow}</div>
          <h2>Was das für euch bedeutet</h2>
          <ul class="check-list" style="grid-template-columns:1fr;margin-top:22px;">
            ${points.map(p => `<li>${ICON.check}<span>${p}</span></li>`).join('')}
          </ul>
        </div>
        <div class="panel reveal" style="padding:48px;display:flex;align-items:center;justify-content:center;">
          <div style="width:120px;height:120px;color:var(--red);">${icon}</div>
        </div>
      </div>
    </div>
  </section>
  <section class="section" style="padding-top:0;">
    <div class="container">
      <div class="cta-banner reveal">
        <div>
          <h2>Klingt nach eurer Strecke?</h2>
          <p>Bewerbt euch bei Hayes Logistik und werdet Teil unseres Fernverkehrs-Netzwerks.</p>
        </div>
        <div class="cta-banner-actions">
          <a href="#/karriere" class="btn btn-primary" data-route="/karriere">Jetzt bewerben</a>
        </div>
      </div>
    </div>
  </section>
`;

pages['/leistungen/fernverkehr'] = () => serviceDetail(
  'Fernverkehr Europa',
  'Linienverkehr',
  'Unser Kerngeschäft: geplante Langstrecken durch ganz Europa, mit festen Abfahrtszeiten und klaren Zielen.',
  [
    'Feste Linienrouten mit veröffentlichtem Fahrplan im Discord',
    'Fahrten solo oder im organisierten Konvoi',
    'Abstimmung von Lade- und Zielorten über die Disposition',
    'Regelmäßige Strecken für alle, die Planbarkeit schätzen',
  ],
  ICON.route
);

pages['/leistungen/sondertransporte'] = () => serviceDetail(
  'Sondertransporte',
  'Schwergut & Events',
  'Für alles, was nicht in den normalen Fahrplan passt: Schwertransporte, Sondergüter und Fahrten zu besonderen Anlässen.',
  [
    'Schwer- und Sperrguttransporte mit Begleitfahrzeugen',
    'Eventfahrten zu Community-Treffen und Sonderaktionen',
    'Enge Abstimmung mit der Disposition wegen Routenwahl',
    'Ideal für erfahrenere Fahrerinnen und Fahrer',
  ],
  ICON.weight
);

pages['/leistungen/spedition'] = () => serviceDetail(
  'Spedition & Disposition',
  'Koordination',
  'Das organisatorische Rückgrat von Hayes Logistik — hier laufen Routen, Aufträge und Absprachen zusammen.',
  [
    'Routenplanung und Zuteilung von Aufträgen im Discord',
    'Koordination von Konvois und gemeinsamen Fahrten',
    'Ansprechpartner bei Fragen rund um Strecken und Zeitfenster',
    'Laufende Abstimmung zwischen Fahrern und Team',
  ],
  ICON.radio
);

/* ---------- FLOTTE ---------- */
pages['/flotte'] = () => `
  <div class="page-header">
    <div class="container">
      ${routeLabel(['Flotte'])}
      <h1>Unsere Flotte</h1>
      <p>Vom Fernverkehrs-Zugmaschinen bis zum Sondertransport — unser Fuhrpark wächst mit dem Team.</p>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="fleet-grid">
        <div class="fleet-card reveal">
          <div class="fleet-art">${truckIcon()}</div>
          <div class="body">
            <span class="fleet-tag">Fernverkehr</span>
            <h3>Standard-Zugmaschine</h3>
            <p>Das Arbeitstier unserer Linienrouten — zuverlässig auf jeder Langstrecke im Einsatz.</p>
          </div>
        </div>
        <div class="fleet-card reveal">
          <div class="fleet-art">${truckIcon()}</div>
          <div class="body">
            <span class="fleet-tag">Sondertransport</span>
            <h3>Schwerlast-Zugmaschine</h3>
            <p>Für Übergröße und Schwergut ausgelegt, meist mit Begleitfahrzeug unterwegs.</p>
          </div>
        </div>
        <div class="fleet-card reveal">
          <div class="fleet-art">${truckIcon()}</div>
          <div class="body">
            <span class="fleet-tag">Konvoi</span>
            <h3>Community-Lackierung</h3>
            <p>Unsere Event-Fahrzeuge im Hayes-Design — erkennbar bei jedem gemeinsamen Konvoi.</p>
          </div>
        </div>
      </div>
      <p style="margin-top:32px;font-size:.92rem;color:var(--muted);max-width:640px;">Aktuelle Skins und Fahrzeugbilder teilen wir laufend in unserem Discord-Server.</p>
    </div>
  </section>
`;

function truckIcon(){
  return `<svg viewBox="0 0 120 80" width="70%" style="color:var(--line-strong)" fill="none" stroke="currentColor" stroke-width="2.4">
    <path d="M6 20h58v40H6z"/>
    <path d="M64 34h20l22 14v12H64z"/>
    <circle cx="28" cy="64" r="8" stroke="var(--red)"/>
    <circle cx="90" cy="64" r="8" stroke="var(--red)"/>
    <line x1="6" y1="30" x2="64" y2="30" stroke="var(--red)" stroke-width="1.5" opacity=".5"/>
  </svg>`;
}

/* ---------- LADEGÜTER ---------- */
pages['/ladegueter'] = () => `
  <div class="page-header">
    <div class="container">
      ${routeLabel(['Ladegüter'])}
      <h1>Ladegüter</h1>
      <p>Ein Überblick über die Frachten, die bei Hayes Logistik unterwegs sind — von Alltagsgütern bis zum ADR-Sondertransport. Zusammengestellt von unserer Disposition.</p>
    </div>
  </div>

  <section class="section" style="padding-top:56px;">
    <div class="container">
      <div class="cargo-toolbar reveal">
        <div class="cargo-search-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
          <input type="text" id="cargo-search" placeholder="Fracht suchen …" autocomplete="off">
        </div>
        <select id="cargo-trailer-filter"></select>
        <select id="cargo-adr-filter"></select>
      </div>

      <div class="cargo-count" id="cargo-count"></div>

      <div class="cargo-table-wrap reveal">
        <table class="cargo-table">
          <thead>
            <tr>
              <th class="sortable" data-sort="0" data-type="text">Fracht<span class="sort-arrow"></span></th>
              <th class="sortable" data-sort="1" data-type="weight">Gewicht<span class="sort-arrow"></span></th>
              <th class="sortable" data-sort="5" data-type="text">Trailer<span class="sort-arrow"></span></th>
              <th>Hinweise</th>
            </tr>
          </thead>
          <tbody id="cargo-tbody"></tbody>
        </table>
        <p class="cargo-empty" id="cargo-empty" hidden>Keine Fracht gefunden — Suchbegriff oder Filter anpassen.</p>
      </div>

      <p style="margin-top:28px;font-size:.88rem;color:var(--muted);max-width:640px;">Liste ohne Anspruch auf Vollständigkeit. Änderungen und aktuelle Sonderfrachten bespricht die Disposition laufend im Discord-Server.</p>
    </div>
  </section>
`;

/* ---------- KARRIERE ---------- */
pages['/karriere'] = () => `
  <div class="page-header">
    <div class="container">
      ${routeLabel(['Karriere'])}
      <h1>Werde Teil des Teams</h1>
      <p>Wir suchen Fahrerinnen und Fahrer, die Lust auf gemeinsame Strecken, Konvois und ein verlässliches Team haben.</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:24px;">
        <span class="fleet-tag">Gesucht: Fahrer/in (m/w/d)</span>
        <span class="fleet-tag">Gesucht: Disponent/in (m/w/d)</span>
      </div>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="split">
        <div class="reveal">
          <div class="eyebrow">Was ihr mitbringen solltet</div>
          <h2>Voraussetzungen</h2>
          <ul class="check-list" style="grid-template-columns:1fr;margin-top:22px;">
            <li>${ICON.check}<span>Mindestalter von 18 Jahren</span></li>
            <li>${ICON.check}<span>Euro Truck Simulator 2 mit aktivem Multiplayer-Mod</span></li>
            <li>${ICON.check}<span>Ein aktiver Discord-Account für Absprache und Konvois</span></li>
            <li>${ICON.check}<span>Zuverlässigkeit — zugesagte Fahrten auch einhalten</span></li>
            <li>${ICON.check}<span>Grundlegendes Verständnis für Rollenspiel-Regeln im Straßenverkehr</span></li>
            <li>${ICON.check}<span>Lust, Teil einer Community zu sein — kein Solo-Ritt</span></li>
          </ul>
        </div>
        <div class="panel reveal" style="padding:44px;">
          <h3 style="margin-bottom:14px;">Bereit loszufahren?</h3>
          <p style="margin-bottom:26px;">Die Bewerbung läuft über unser Bewerbungsformular — dauert nur wenige Minuten.</p>
          <a href="${CONFIG.bewerbungsLink}" target="_blank" rel="noopener" class="btn btn-primary btn-lg btn-block">Bewerbung starten</a>
        </div>
      </div>
    </div>
  </section>

  <div class="road-divider"></div>

  <section class="section">
    <div class="container">
      <div class="section-head reveal">
        <div class="eyebrow">Ablauf</div>
        <h2>So läuft eure Bewerbung</h2>
      </div>
      <div class="steps">
        <div class="step reveal">
          <span class="num">01</span>
          <div><h3>Bewerbungsformular ausfüllen</h3><p>Über den Button oben gelangt ihr zu unserem Bewerbungsformular. Kurze Angaben zu euch reichen für den Anfang.</p></div>
        </div>
        <div class="step reveal">
          <span class="num">02</span>
          <div><h3>Kennenlerngespräch im Discord</h3><p>Ein Mitglied der Personalabteilung meldet sich bei euch und stellt Team und Abläufe vor.</p></div>
        </div>
        <div class="step reveal">
          <span class="num">03</span>
          <div><h3>Erste Konvoifahrt</h3><p>Ihr begleitet ein Team-Mitglied auf einer gemeinsamen Fahrt und lernt die Disposition in der Praxis kennen.</p></div>
        </div>
        <div class="step reveal">
          <span class="num">04</span>
          <div><h3>Aufnahme ins Team</h3><p>Nach erfolgreicher Probefahrt seid ihr offiziell Teil von Hayes Logistik — willkommen an Bord.</p></div>
        </div>
      </div>
    </div>
  </section>
`;

/* ---------- KONTAKT ---------- */
pages['/kontakt'] = () => `
  <div class="page-header">
    <div class="container">
      ${routeLabel(['Kontakt'])}
      <h1>Kontakt &amp; Discord</h1>
      <p>Der schnellste Weg zu uns führt über unseren Discord-Server — dort läuft alles zusammen.</p>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="discord-panel reveal">
        <div class="discord-info">
          <div class="icon" style="margin-bottom:20px;">${ICON.discord}</div>
          <h2 style="font-size:1.7rem;margin-bottom:14px;">Tritt unserem Discord bei</h2>
          <p style="margin-bottom:26px;">Disposition, Konvoi-Ansagen, Team-Chat und alle aktuellen Infos rund um Hayes Logistik findet ihr auf unserem Server.</p>
          <a href="${CONFIG.discordInvite}" target="_blank" rel="noopener" class="btn btn-primary">Discord öffnen</a>
        </div>
        <div class="discord-visual">
          <div class="discord-stat"><span class="k">Server</span><span class="v">Hayes Logistik</span></div>
          <div class="discord-stat"><span class="k">Sprache</span><span class="v">Deutsch</span></div>
          <div class="discord-stat"><span class="k">Disposition</span><span class="v">Nach Absprache erreichbar</span></div>
          <div class="discord-stat"><span class="k">Bewerbung</span><span class="v">Jederzeit offen</span></div>
        </div>
      </div>
    </div>
  </section>
`;

/* ============================================
   ROUTER
   ============================================ */
const app = document.getElementById('app');
const header = document.getElementById('site-header');

function currentPath(){
  const hash = window.location.hash.replace(/^#/, '') || '/';
  return hash;
}

function render(){
  const path = currentPath();
  const template = pages[path] || pages['/'];
  app.innerHTML = template();
  document.title = path === '/' ? 'Hayes Logistik — Gemeinsam. Weiter. Ans Ziel.' : `Hayes Logistik — ${document.querySelector('#app h1')?.textContent || ''}`;

  // active nav state
  document.querySelectorAll('[data-route]').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-route') === path);
  });

  window.scrollTo({top:0, behavior:'instant' in window ? 'instant' : 'auto'});
  app.focus();
  closeMobileNav();
  initReveal();
  initLadegueter();
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', () => {
  if(!window.location.hash) window.location.hash = '#/';
  render();
  document.getElementById('year').textContent = new Date().getFullYear();
});

/* ============================================
   MOBILE NAV
   ============================================ */
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('mobile-open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
});

function closeMobileNav(){
  mainNav.classList.remove('mobile-open');
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}

/* ============================================
   LADEGÜTER — SUCHE & FILTER
   ============================================ */
function initLadegueter(){
  const search = document.getElementById('cargo-search');
  const trailerFilter = document.getElementById('cargo-trailer-filter');
  const adrFilter = document.getElementById('cargo-adr-filter');
  const tbody = document.getElementById('cargo-tbody');
  const countEl = document.getElementById('cargo-count');
  const emptyEl = document.getElementById('cargo-empty');
  const sortHeaders = document.querySelectorAll('.cargo-table th.sortable');
  if(!search || !tbody) return; // Seite nicht aktiv

  const trailers = [...new Set(CARGO.map(c => c[5]).filter(Boolean))].sort((a,b) => a.localeCompare(b, 'de'));
  trailerFilter.innerHTML = '<option value="">Alle Trailer</option>' +
    trailers.map(t => `<option value="${t}">${t}</option>`).join('');

  const adrClasses = [...new Set(CARGO.map(c => c[2]).filter(Boolean))].sort((a,b) => a.localeCompare(b, 'de'));
  adrFilter.innerHTML = '<option value="">Alle Frachten</option><option value="__adr__">Nur ADR-Fracht</option>' +
    adrClasses.map(a => `<option value="${a}">${a}</option>`).join('');

  function escapeHTML(str){
    return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
  }

  // Gewicht als Zahl fürs Sortieren nutzbar machen (z.B. "9 – 19T" -> 9, "17T" -> 17)
  function weightValue(str){
    const match = String(str).match(/[\d.,]+/);
    return match ? parseFloat(match[0].replace(',', '.')) : -1;
  }

  // Sortier-Status: Spaltenindex + Richtung. Standard: alphabetisch nach Fracht.
  let sortCol = 0;
  let sortDir = 1; // 1 = aufsteigend, -1 = absteigend

  function updateSortIndicators(){
    sortHeaders.forEach(th => {
      const col = parseInt(th.dataset.sort, 10);
      th.classList.toggle('sort-active', col === sortCol);
      const arrow = th.querySelector('.sort-arrow');
      if(col === sortCol){
        arrow.textContent = sortDir === 1 ? '▲' : '▼';
      } else {
        arrow.textContent = '';
      }
    });
  }

  function renderRows(){
    const q = search.value.trim().toLowerCase();
    const tVal = trailerFilter.value;
    const aVal = adrFilter.value;

    let filtered = CARGO.filter(c => {
      if(q && !c[0].toLowerCase().includes(q)) return false;
      if(tVal && c[5] !== tVal) return false;
      if(aVal === '__adr__' && !c[2]) return false;
      if(aVal && aVal !== '__adr__' && c[2] !== aVal) return false;
      return true;
    });

    filtered = filtered.slice().sort((a, b) => {
      let av, bv;
      if(sortCol === 1){
        av = weightValue(a[1]); bv = weightValue(b[1]);
        return (av - bv) * sortDir;
      }
      av = (a[sortCol] || '').toLowerCase();
      bv = (b[sortCol] || '').toLowerCase();
      return av.localeCompare(bv, 'de') * sortDir;
    });

    countEl.textContent = `${filtered.length} von ${CARGO.length} Frachten`;

    if(filtered.length === 0){
      tbody.innerHTML = '';
      emptyEl.hidden = false;
    } else {
      emptyEl.hidden = true;
      tbody.innerHTML = filtered.map(c => {
        const [name, tonnen, adr, dlc, anmerkung, trailer] = c;
        const badges = [adr, dlc, anmerkung].filter(Boolean)
          .map(x => `<span class="cargo-badge${x===adr ? ' cargo-badge-adr' : ''}">${escapeHTML(x)}</span>`).join('');
        return `<tr>
          <td>${escapeHTML(name)}</td>
          <td>${escapeHTML(tonnen) || '–'}</td>
          <td>${escapeHTML(trailer) || '–'}</td>
          <td>${badges || '<span class="cargo-badge-none">–</span>'}</td>
        </tr>`;
      }).join('');
    }

    updateSortIndicators();
  }

  sortHeaders.forEach(th => {
    th.addEventListener('click', () => {
      const col = parseInt(th.dataset.sort, 10);
      if(sortCol === col){
        sortDir *= -1;
      } else {
        sortCol = col;
        sortDir = 1;
      }
      renderRows();
    });
  });

  search.addEventListener('input', renderRows);
  trailerFilter.addEventListener('change', renderRows);
  adrFilter.addEventListener('change', renderRows);
  renderRows();
}

/* ============================================
   REVEAL ON SCROLL
   ============================================ */
function initReveal(){
  const items = document.querySelectorAll('.reveal:not(.in)');
  if(!('IntersectionObserver' in window)){
    items.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:.12});
  items.forEach(el => io.observe(el));
}
