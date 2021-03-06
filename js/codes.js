const coreCode = {
					"1":"A",
					"2":"B",
					"3":"C",
					"4":"D",
					"5":"E",
					"6":"F",
					"7":"G",
					"8":"H",
					"9":"i",
					"10":"J",
					"11":"K",
					"12":"L",
					"13":"M",
					"14":"N",
					"15":"O",
					"16":"P",
					"17":"Q",
					"18":"R",
					"19":"S",
					"20":"T",
					"21":"U",
					"22":"V",
					"23":"W",
					"24":"X",
					"25":"Y",
					"26":"Z"
				};

const productType = {
						"AX":"A",
						"PL":"P",
						"PR":"R",
						"CM":"C",
						"ST":"S",
						"MD":"M",
						"VX":"V"
					};
					
const dateCode = {
					"0":"A",
					"1":"B",
					"2":"C",
					"3":"D",
					"4":"E",
					"5":"F",
					"6":"G",
					"7":"H",
					"8":"i",
					"9":"J",
					"10":"K",
					"11":"L"
				};

const ulineCode ={
					"PL-M-508-048-9000-Q032":"S-12902",
					"PL-M-508-055-6500-Q032":"S-12903",
					"PL-M-508-061-6000-Q032":"S-12904",
					"ST-M-40X-080-5000-Q016":"S-17973",
					"ST-M-508-060-6000-Q032":"S-2204",
					"ST-M-508-070-6500-OSC1":"S-12988",
					"ST-M-508-070-6500-Q032":"S-6668",
					"ST-M-508-075-5000-Q032":"S-14927",
					"ST-M-508-075-6000-Q032":"S-11498",
					"ST-M-508-080-5000-Q032":"S-2193",
					"ST-M-508-080-6000-BLK1":"S-6144",
					"ST-M-508-080-6000-BLU1":"S-6146",
					"ST-M-508-080-6000-GRN1":"S-14929",
					"ST-M-508-080-6000-ORG1":"S-17856",
					"ST-M-508-080-6000-OSC1":"S-11499",
					"ST-M-508-080-6000-Q032":"S-1524",
					"ST-M-508-080-6000-RED1":"S-6145",
					"ST-M-508-080-6000-YLW1":"S-14928",
					"ST-M-508-090-5000-Q032":"S-6667",
					"ST-M-508-120-4000-Q032":"S-8144",
					"ST-M-60X-080-5000-Q016":"S-12828",
					"ST-M-70X-080-5000-Q016":"S-14930",
					"ST-M-762-080-5000-Q016":"S-8143",
					"ST-M-50X-080-5000-Q016":"S-12987",
					"ST-M-508-060-8000-Q032":"S-3907",
					"MW-H-457-080-457M-BLK1":"S-2900BL",
					"MW-H-457-100-457M-OPBK":"S-5317",
					"MW-H-457-080-5000-Q016":"",
					"MW-H-457-080-457M-OPWT":"S-6019",
					"MW-H-457-080-457M-YLW1":"S-2900Y",
					"MW-H-457-080-457M-ORG1":"S-2900O",
					"MW-H-457-080-457M-RED1":"S-2900R",
					"MW-H-457-080-457M-PPL1":"S-2900P",
					"MW-H-457-120-305-BLU1":"S-14923BLU",
					"MW-H-457-080-457M-OPBK":"S-353",
					"PL-H-325-055-450M-Q048":"S-18838",
					"MW-H-457-080-457M-GRN1":"S-2900G",
					"PL-H-325-043-450M-Q048":"S-18837"
				};
				
const custName = {"3GPACK":"3G PACKAGING INC.",
					"ABLETA":"ABLE TAPE AND PACKAGING LLC",
					"ADCOPA":"ADCO PAPER & PACKAGING CO. INC.",
					"ADVANF":"ADVANTAGE LOGISTICS- FOUNTAIN",
					"ADVANT":"ADVANTAGE LOGISTICS",
					"AEAGLE":"AMERICAN EAGLE PACKAGING",
					"ALANSO":"ALANSON PRODUCTS INC.",
					"ALLIAN":"ALLIANCE PLASTICS",
					"ALLPAC":"ALLIANCE PACKAGING GROUP",
					"AMCORI":"AMCOR, INC.",
					"AMEPAK":"AMERIPAK SHIPPING SUPPLIES",
					"AMERIC":"AMERICAN PAPER & PACKAGING",
					"AMERPA":"AMERICAN PAPER & TWINE COMPANY",
					"AMESOU":"AMERISOURCE COMPANIES LP",
					"APACPA":"APAC PAPER & PACKAGING CORPORATION",
					"APMSHI":"APM SHIPPING SERVICES, LLC",
					"APOLLO":"APOLLO PACKAGING, INC.",
					"APSINC":"ADVANCE PAPER SYSTEMS, INC.",
					"ARMORP":"ARMOR PACKAGING CORP.",
					"ARNOLD":"ARNOLD PACKAGING",
					"ASSOCF":"ASSOCIATED PACKAGING, INC.",
					"ASSOCG":"ASSOCIATED PACKAGING, INC.",
					"ASSOCI":"ASSOCIATED PACKAGING, INC.",
					"ASSOCK":"ASSOCIATED PACKAGING, INC.",
					"ASSOCS":"ASSOCIATED PACKAGING INC.",
					"ATLCOR":"ATLANTIC CORPORATION OF WILMINGTON, INC.",
					"ATTAPE":"ATLANTIC TAPE CO.,INC.",
					"AUBERS":"AUBERST INC.",
					"AVIATI":"ACORN EAST",
					"AXISPA":"AXIS PACKAGING, LLC",
					"BECKPA":"LINDENMEYR MUNROE",
					"BETTER":"BETTER SOURCE SUPPLY COMPANY, LLC",
					"BFCGRO":"BFC GROUP",
					"BGRINC":"BGR INC.",
					"BRADEN":"BRADEN",
					"BUTBRO":"BUTLER BROS.",
					"CALCAL":"CALIBER PACKAGING CA LLC.",
					"CALIBE":"CALIBER PACKAGING &EQUIPMENT",
					"CALPAC":"CALIBER PACKAGING LLC",
					"CAMBRI":"CAMBRIDGE PACKAGING INC.",
					"CENTAR":"CENTRAL ARKANSAS WHOLESALE LLC",
					"CHANDL":"CHANDLER",
					"CHEMST":"CHEM STRETCH, INC.",
					"CHESAP":"CHESAPEAKE PACKAGING PRODUCTS INC",
					"COLONY":"COLONY PACKAGING & MACHINE",
					"CONLEY":"THE M. CONLEY COMPANY",
					"CONTIN":"CONTINENTAL PAPER & PLASTICS CORP.",
					"COUGAR":"COUGAR PACKAGING SOLUTIONS, INC.",
					"CROWNP":"CROWN PACKAGING CORP.",
					"CSSDIS":"CSS DISTRIBUTION GROUP, INC.",
					"DALEAS":"MEEKER ENTERPRISES",
					"DANDEE":"DANDEE PALLET & PACKAGING INC.",
					"DELCOP":"DELCO PACKAGING PRODUCTS",
					"DELTAP":"DELTA PACKAGING INC.",
					"DIRECT":"DIRECT SUPPLY, INC.",
					"DOTSYS":"DOT SYSTEMS",
					"DRPFLE":"DRP FLEXPAK",
					"DURHAM":"LINDENMEYR MUNROE",
					"ECONOM":"ECONOMY PRODUCTS & SOLUTIONS INC.",
					"EMPIRE":"E.J.D. ENTERPRISESdba: EMPIRE DISTRIBUTORS",
					"FASTPA":"FASTPAK SYSTEMS, INC.",
					"FIBERS":"FIBERS OF KALAMAZOO",
					"FLEETW":"SIGNODE INDUSTRIAL GROUP LLC",
					"FLEXPA":"FLEX-PAC, INC.",
					"FREEWA":"FREEWAY TRADING CORP.",
					"GENERA":"GENERAL PAPER GOODS COMPANY",
					"GOODPA":"GOOD PACKAGING PRODUCTS",
					"GROUPO":"GROUP O PACKAGING SOLUTIONS",
					"GULMID":"GULF-MIDWEST PACKAGING CORPORATION",
					"HARDER":"HARDER CORP.",
					"HARTMA":"HARTMAN INDEPENDENT CO.",
					"HERSHE":"MILBRO CO., INC.dba: HERSHEY PAPER CO.",
					"HUGHES":"HUGHES ENTERPRISES OF NJ INC.",
					"IMPTOY":"IMPERIAL TOY, LLC",
					"INDUST":"SUPPLYONE, INC.",
					"INTERP":"INTERSTATE PACKAGING,LLC.",
					"INTERS":"INTERSTATE PACKAGING GROUP, INC.",
					"IPSPAC":"IPS PACKAGING",
					"JAMEST":"JAMESTOWN CONTAINER COMPANIES",
					"JCPARR":"J C PARRY & SONS CO.",
					"JETSAL":"JET SALES SOLUTIONS, LLC",
					"JITPAC":"THE PACKAGING WHOLESALERS",
					"JOHNMA":"JOHN MAYE COMPANY",
					"JSPACK":"J&S PACKAGING, INC.",
					"K&JENT":"WOOTTON PACKAGING SERVICES dba: K&J ENTERPRISES",
					"KELLEY":"KELLEY SUPPLY INC.",
					"KELSAN":"KELSAN, INC.",
					"KENTWO":"KENTWOOD PACKAGING CORPORATIONdba:KPA",
					"KRECK":"KRECK PACKAGING LLC",
					"LAKELA":"LAKELAND SUPPLY, INC.",
					"LIBERT":"LIBERTY DISTRIBUTORS, INC.",
					"LINDEN":"LINDENMEYR MUNROE",
					"LOGANA":"LOGAN ALUMINUM INC.",
					"LONDON":"LINDENMEYR MUNROE",
					"MAILEN":"MAILENDER, INC.,",
					"MAJENT":"MAJ ENTERPRISES",
					"MANUFA":"MANUFACTURERS PACKAGING SERVICE",
					"MARKPA":"MARK-PACK INC.",
					"MAXPAC":"MAX PACKAGING INC.",
					"MCLDEW":"MCLEOD & DEWEY ASSOCIATES, INC.",
					"MGPKG":"M&G PACKAGING CORP",
					"MIDLAN":"MIDLAND PAPER COMPANY",
					"MLRPAC":"MLR PACKAGING, INC.",
					"MORRIS":"MORRISETTE PAPER COMPANY",
					"MTNJOY":"LINDENMEYR MUNROE",
					"NEUTEC":"NEUTECH PACKAGING SYSTEMS",
					"NEWAY":"NEWAY PACKAGING CORP",
					"NORTHE":"NORTHEAST INDUSTRIAL LLC",
					"OCTOWR":"OCTOWRAP, INC.",
					"OMEGAP":"OMEGA PACKAGING",
					"PACE":"P.A.C.E.",
					"PACFUL":"PACKAGING FULFILLMENT CO.",
					"PACIFI":"PACIFIC PACKAGING PRODUCTS",
					"PACIFN":"PACIFIC PACKAGING PRODUCTS, INC.",
					"PACKDE":"PACKAGE DESIGN & SUPPLY INC.",
					"PACKLI":"THE PACKLINE COMPANY",
					"PACKSP":"PACKAGING SPECIALTYdbaSALESMASTER",
					"PACKSY":"PACKSYS MEXICO, S.A. DE C.V.",
					"PAKRIT":"PAKRITE INC.",
					"PAKSOU":"PAKSOURCE",
					"PAKSOUT":"PAKSOUTH INC.",
					"PAPERP":"PAPER PRODUCTS COMPANY INC.",
					"PERFOR":"PERFORMANCE ASSOCIATES, INC.",
					"PETERS":"PETERS SUPPLY",
					"PIEDMO":"PIEDMONT NATIONAL CORP.",
					"PITTSBU":"LINDENMEYR MUNROE",
					"PKGINC":"BLACKHAWK INDUSTRIAL",
					"PKGINS":"PACKAGING INSIGHTS INC",
					"PKGOWE":"PACKAGING UNLIMITED",
					"PKGSPE":"PACKAGING SPECIALTIES, INC.",
					"PKGUNL":"PACKAGING UNLIMITED LLC",
					"PKGUNNC":"PACKAGING UNLIMITED OF NORTH CAROLINA, INC.",
					"PLASTI":"PLASTICS DISTRIBUTORS CO. INC.",
					"POLYET":"POLYETHICS ALL SOURCE",
					"PRECIS":"PRECISION CORR",
					"PREFER":"PREFERRED PLASTICS & PACKAGING CO., INC.",
					"PREMIE":"PREMIER PACKAGING, LLC",
					"PREMPA":"PREMIER PACKAGING",
					"PRIMEP":"PRIME PACKAGING CORP.",
					"PROPAC":"PRO-PACK, INC.",
					"PROVID":"PROVIDENT PACKAGING CORP.",
					"PXYS":"PXYS, LLC",
					"QUAKER":"QUAKER CITY PAPER COMPANY",
					"RAPPMA":"RAPID PACKAGING",
					"RELSYS":"RELIABLE PACKAGING SYSTEMS INC",
					"ROCHES":"LINDENMEYR MUNROE",
					"RONSTA":"RONSTAN PAPER CO.",
					"RUSCO":"RUSCO PACKAGING, INC.",
					"SEAIND":"SEA INDUSTRIES",
					"SHIPPA":"SHIP-PAQ, INC.",
					"SHIPPR":"NAGEL & SHIPPERS PRODUCTS",
					"SHIPSU":"SHIPPERS SUPPLY, INC.",
					"SHORRP":"SHORR PACKAGING CORP.",
					"SHRINK":"SHRINK PACKAGING SYSTEMS CORP",
					"SIGMAS":"SIGMA SUPPLY NORTH AMERICA",
					"SOUPAP":"SOUTHEASTERN PAPER GROUP",
					"SOUTHC":"SOUTHERN CONTAINER, LTD",
					"SOUTHE":"SOUTHEASTERN CONTAINER, INC.",
					"SOUTHP":"SUPPLYONE, INC. - DO NOT USEUSECUSTOMER \"INDUST\"",
					"SPECIA":"SPECIALTY PACKAGING, LLC.",
					"SPEIND":"SPECIALTY INDUSTRIES INC.",
					"SSINCO":"S & S INCORPORATED",
					"STARNY":"STAR NYL PAPER & TAPE CO INC.",
					"STEPHE":"STEPHEN GOULD CORPORATION",
					"STERLI":"STERLING PAPER CO",
					"STRICK":"STRICKLAND COMPANIES",
					"STRPAK":"STRETCH PAK INC.",
					"SUBURB":"SUBURBAN INDUSTRIAL PACKAGING",
					"SUPERS":"LUCKY B dba: SUPER SECURE PACKAGING SUPPLIES",
					"SUPPLY2":"SUPPLYONE- NY",
					"TABIND":"TAB INDUSTRIES, LLC",
					"TAPEMA":"TAPEMASTER INC.",
					"TEPESA":"TEPE SANITARY SUPPLY",
					"TLPACK":"TL PACKAGING LLC",
					"TOMAR":"TOMAR INDUSTRIES INC.",
					"TRANSC":"TRANS-CONSOLIDATED DISTRIBUTORS",
					"TRIANG":"TRIANGLE PACKAGING INC.",
					"TRINIT":"TRINITY PACKAGING SUPPLY",
					"TRMMFG":"TRM MANUFACTURING, INC.",
					"TYOGAC":"TYOGA CONTAINER CO INC.",
					"ULINE":"ULINE",
					"ULTRAP":"ULTRA - PAK, INC.",
					"UNITED":"UNITED PAPER CORPORATION",
					"UNIVER":"UNIVERSAL PACKAGING, INC.",
					"VIKING":"VIKING PLASTIC PACKAGING, INC.",
					"WBMASO":"W.B.MASON",
					"WEBBMA":"WEBB/MASON, INC.",
					"WESTER":"WESTERN PLASTICS, INC.",
					"WFSMIC":"WFS (USA) LTD.",
					"WILCOE":"UNITED PAN AMERICAN, INC. / DBA- WILCO ENTERPRISES",
					"WOODLA":"WOODLAND/TRIPAK, INC.",
					"XPEDX":"VERITIV OPERATING COMPANY , formerly XPEDX",
					"YODERP":"YODERS PRODUCE INC.",
					"3GPACK":"3G PACKAGING CORP",
					"A1SHIP":"ROCKETLINE",
					"ABAZC":"ABZAC INC. (Bowmanville Div.)",
					"ACORR":"3014703 CANADA INC.(ACORR)",
					"ACTION":"ACTION PAPER",
					"ALPACK":"AL-PACK ENTERPRISES",
					"ARCTIW":"CRAWFORD PACKAGING INC.",
					"ARIVA":"ARIVA, DIV. OF DOMTAR",
					"ARNTS":"ARNTS",
					"ATLANT":"ATLANTIC PACKAGING PRODUCTS",
					"ATLASC":"ATLAS CORRUGATED",
					"ATLASP":"ATLAS PAPER",
					"BASSPA":"BASS PAPER & PACKAGING LTD",
					"BESTPA":"BEST PACKAGING SYSTEMS INC.",
					"BISSET":"BISSETT FASTENERS LTD.",
					"BMSSAN":"BMS SANITATION & SAFETY",
					"BONDI":"BONDI PRODUCE",
					"BUNBUR":"BUNZL CANADA BURLINGTON",
					"CAMPBE":"CAMPBELL COMPANY OF CANADA",
					"CANADI":"CANADIAN PAPER & PACKAGING CO. LTD.",
					"CANPAC":"CANPACO INC.",
					"CARROU":"LES EMBALLAGES CARROUSEL INC.",
					"CITYWP":"CITYWIDE PACKAGING",
					"CLEF":"EMBALLAGES CLEF INC.",
					"COMPAC":"COMPLETE PACKAGING SYSTEMS",
					"CONTIN":"CONTINENTAL FOOD PRODUCTS INC.",
					"COUSIN":"COUSINEAU PACKAGING INC.",
					"CPPACUS":"CP PACKAGING , CANADIAN DIV. OF CROWN PACKAGING CORP.",
					"CROWNH":"CROWNHILL PACKAGING",
					"DANSHA":"DANSHAR POLYBAG & RESIN INC.",
					"DENPAC":"DEN PACKAGING",
					"DON&SO":"DON & SON",
					"DORFIN":"DORFIN INC.",
					"DOVERC":"DOVERCO INC.(VENDOR #6200)",
					"DSPACT":"DSP ACTIVITE INC.",
					"DUMAKI":"DUMAK INDUSTRIES",
					"EAGLES":"EAGLE SUPPLY",
					"EASYPA":"EASY PACK CORP.",
					"ECOMAN":"ECO II",
					"EUGENE":"EUGENE ALLARD",
					"FASTCA":"FAST CATS PACKAGING",
					"FREEPA":"FREEPAK",
					"FROMM":"FROMM PACKAGING SYSTEMS CANADA INC.",
					"GERTEX":"GERTEX DISTRIBUTING INC",
					"GF":"GF",
					"GULFMIDUS":"GULF MIDWEST PACKAGING",
					"HANSLE":"HANSLER SMITH LIMITED",
					"HEARTL":"HEARTLAND SHIPPING",
					"HIGMIS":"HIGHLAND FARMS INC.",
					"ILIASD":"ILIAS PLASTICS INC.",
					"IMPAKP":"IMPAK PACKAGING",
					"INDUST":"INDUSTRIES F.M. INC",
					"IOALDI":"I.O.A.L. DISTRIBUTING",
					"JEANCA":"EMBALLAGES JEAN CARTIER PACKAGING",
					"JEANUS":"EMBALLAGES JEAN CARTIER PACKAGING",
					"KELFOR":"KELFORD INDUSTRIAL SALES",
					"KEYPAK":"KEYPAKPACKAGING",
					"KISSNE":"BLENDTEK FINE INGREDIENTS INC.",
					"LEONAS":"LEONA STONE & BUILDING",
					"LIONSH":"LION DISTRIBUTION INC.",
					"LOBCAN":"CANDA SIX FORTUNE ENTERPRISE CO. LTD.",
					"LOBLAW":"LOBLAWS INC.",
					"LOBLEG":"CAN-AM LOGISTICS dba: LEGACY SUPPLY CHAIN SERVICES",
					"LOBMAT":"MATRIX LOGISTICS SERVICES LTD.",
					"METRIC":"METRIC PACKAGING SOLUTIONS",
					"OLAFPA":"OLAF PACKAGING GROUP INC.",
					"PACAGE":"WOLFPACK PACKAGING INC.",
					"PACKAG":"PACKAGING WORLD",
					"PPSPEC":"P.P. SPECIALTIES",
					"RALIKP":"LES EMBALLAGES RALIK PACKAGING",
					"REBELP":"REBEL PACKAGING",
					"REXPAK":"REX PAK LIMITED",
					"ROYTUR":"ROY TURK INDUSTRIAL SALES LTD.",
					"SAMUEL":"SAMUEL PACKAGING SYSTEMS GROUP",
					"SECOND":"SECOND PACKAGING",
					"SERVIC":"SERVICORP",
					"SHIPPE":"SHIPPERS SUPPLY INC.",
					"SHORTR":"SHORTREED PAPER INC.",
					"SIGMAP":"SIGMAPAC ENGINEERED SERVICES INC.",
					"SNELLI":"SNELLING PAPER & SANITATION",
					"SPARKL":"SPARKLING DISTRIBUTION",
					"SPECTR":"SPECTRUM SUPPLY INC.",
					"SPICER":"SPICERS CANADA LLC",
					"STONET":"STONETOWN SUPPLY SERVICES INC",
					"SUMMIT":"SUMMIT PAPER & PKG LTD.",
					"SUMSER":"SUMMIT FOOD SERVICE",
					"SUPREM":"SUPREME PACKAGING INDUSTRIES",
					"SURSEA":"SURSEAL PACKAGING",
					"TOTAL":"TOTAL PACKAGING SOLUTIONS",
					"ULINEC":"ULINE CANADA",
					"UNITRE":"UNITREND PLASTICS MANUFACTURING LTD.",
					"VISION":"VISION PACKAGING SUPPLIES",
					"WFSCAN":"WFS LTD.",
					"ZYNPAK":"ZYNPAK PACKAGING PRODUCTS"
				};