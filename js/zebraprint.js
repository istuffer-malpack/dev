var selected_device;
var devices = [];
function setup()
{
	//Get the default device from the application as a first step. Discovery takes longer to complete.
	BrowserPrint.getDefaultDevice("printer", function(device)
			{
		
				selected_device = device;
				devices.push(device);
				
				var html_select = document.getElementById("selected_device");
				var html_select2 = document.getElementById("selected_device2");
				var option = document.createElement("option");
				option.text = device.name;
				var option2 = document.createElement("option");
				option2.text = device.name;
				html_select.add(option);
				//html_select2.add(option2);
				
				//Discover any other devices available to the application
				BrowserPrint.getLocalDevices(function(device_list){
					for(var i = 0; i < device_list.length; i++)
					{
						//Add device to list of devices and to html select element
						var device = device_list[i];
						if(!selected_device || device.uid != selected_device.uid)
						{
							devices.push(device);
							var option = document.createElement("option");
							option.text = device.name;
							option.value = device.uid;
							var option2 = document.createElement("option");
							option2.text = device.name;
							option2.value = device.uid;
							html_select.add(option);
							//html_select2.add(option);
							
						}
					}
					
				}, function(){console.log("Error getting local devices")},"printer");
				
			}, function(error){
				console.log("line 41: error-"+error);
			})
}
function getConfig(){
	BrowserPrint.getApplicationConfiguration(function(config){
		alert(JSON.stringify(config))
	}, function(error){
		alert(JSON.stringify(new BrowserPrint.ApplicationConfiguration()));
	})
}
function writeToSelectedPrinter(coretag,order,shift,noOfCopies,prodid,cust){
	selected_device = devices[0]; //set default printer
	var td = new Date();
	var ct = coretag.split(':')[0];
	var uCode,coreT,dataToWrite;
	var d = prodid.split("-")[5];
	if(d.indexOf('00') > -1 || d.indexOf('Q0') > -1 || d.indexOf('C0') > -1 || d.indexOf('P0') > -1){
		d = "";
	}
	
	var arrow = "";
	if (noOfCopies == ''){noOfCopies = 2;}else{noOfCopies = (noOfCopies/2) + 20;}
	
	if(cust.indexOf('ULIN') > -1){
		coreT = ct.split('/')[0];
		uCode = ct.split('/')[1];
		
		dataToWrite = "^XA"+
						"^PQ" + noOfCopies +
						"^CFA,30"+
						"^FO105,50^A0N42,42^FD"+uCode+"^FS"+
						"^FO90,90^A0N24,24^FDMADE IN CANADA^FS"+
						"^FO90,110"+
						"^GFA,195,195,13,L08M06M01,L0CM06M018,L0EM07M01C,L0FM078L01E,L0F8L07CL01F,0LFC0LFE01LF8,0LFE0MF03LFC,0MF0MF83LFE,0LFE0MF03LFC,0LFC0LFE03LF8,L0F8L07CL01F,L0FM078L01E,L0EM07M01C,L0CM06M018,L08M06M01,"+
						"^FS"+
						"^FO215,112^A0N20,20^FD20 ^FS"+
						"^FO100,130^A0N28,28^FD"+coreT+"^FS"+
						"^FO110,160^A0N24,24^FD"+order.toUpperCase()+d+"^FS"+
						"^FO95,185^A0N22,22^FD"+td.toLocaleTimeString()+" "+shift+"^FS"+
						
						"^FO500,50^A0N42,42^FD"+uCode+"^FS"+
						"^FO485,90^A0N24,24^FDMADE IN CANADA^FS"+
						"^FO485,110"+
						"^GFA,195,195,13,L08M06M01,L0CM06M018,L0EM07M01C,L0FM078L01E,L0F8L07CL01F,0LFC0LFE01LF8,0LFE0MF03LFC,0MF0MF83LFE,0LFE0MF03LFC,0LFC0LFE03LF8,L0F8L07CL01F,L0FM078L01E,L0EM07M01C,L0CM06M018,L08M06M01,"+
						"^FS"+
						"^FO615,112^A0N20,20^FD20 ^FS"+
						"^FO495,130^A0N28,28^FD"+coreT+"^FS"+
						"^FO505,160^A0N24,24^FD"+order+d+"^FS"+
						"^FO490,185^A0N22,22^FD"+td.toLocaleTimeString()+" "+shift+"^FS"+					
						"^XZ";	
		
	}else{
		coreT=ct.split('/')[0];
		
		dataToWrite = "^XA"+
						"^PQ" + noOfCopies +
						"^CFA,30"+
						"^FO75,55^A0N42,42^FD"+coreT+"^FS"+
						"^FO95,95^A0N24,24^FDMADE IN CANADA^FS"+
						"^FO100,115"+
						"^GFA,195,195,13,L08M06M01,L0CM06M018,L0EM07M01C,L0FM078L01E,L0F8L07CL01F,0LFC0LFE01LF8,0LFE0MF03LFC,0MF0MF83LFE,0LFE0MF03LFC,0LFC0LFE03LF8,L0F8L07CL01F,L0FM078L01E,L0EM07M01C,L0CM06M018,L08M06M01,"+
						"^FS"+
						"^FO220,117^A0N20,20^FD20 ^FS"+
						"^FO110,135^A0N28,28^FD"+order.toUpperCase()+d+"^FS"+
						"^FO95,160^A0N22,22^FD"+td.toLocaleTimeString()+" "+shift+"^FS"+
						
						"^FO470,55^A0N42,42^FD"+coreT+"^FS"+
						"^FO495,95^A0N24,24^FDMADE IN CANADA^FS"+
						"^FO500,115"+
						"^GFA,195,195,13,L08M06M01,L0CM06M018,L0EM07M01C,L0FM078L01E,L0F8L07CL01F,0LFC0LFE01LF8,0LFE0MF03LFC,0MF0MF83LFE,0LFE0MF03LFC,0LFC0LFE03LF8,L0F8L07CL01F,L0FM078L01E,L0EM07M01C,L0CM06M018,L08M06M01,"+
						"^FS"+
						"^FO620,117^A0N20,20^FD20 ^FS"+
						"^FO505,135^A0N28,28^FD"+order.toUpperCase()+d+"^FS"+
						"^FO495,160^A0N22,22^FD"+td.toLocaleTimeString()+" "+shift+"^FS"+					
						"^XZ";	
	}
	
	selected_device.send(dataToWrite, undefined, errorCallback);
	
	//send log
	$.ajax({
				url: 'https://script.google.com/macros/s/AKfycbyfyv_0mWpNkMTTsaXCxR6NGYRVPJHhaMq1758jfk76krsWhLE/exec',
				type: 'get',
				dataType: 'json',
				data: {
					'document_type':'coretags',
					'noOfCopies':noOfCopies,
					'orderNumber':order,
					'Operator':shift
				},
				success: function(data) {			
					console.log("print logged.");	
						//$('.close').trigger('click');
							
				}
			});		
}

function testLabel(data,skidFrom,skidTo){
	alert("Please check if label size is correct.");
	
	//selected_device = devices[2];
	var td = new Date();
	var shipTo = data.split(':')[4];
	var poNum = data.split(':')[6];
	var prodDesc = data.split(':')[5];
	var qty = parseInt(data.split(':')[2]) / parseInt(data.split(':')[7]);
	var qtyLabel = data.split(':')[8] + "S/SKID";
	var prodID = (data.split(':')[3]).replace(/-/g,"");
	var shiftNameTime = td.toLocaleTimeString() + ' ' + localStorage.shift.split('/')[1];
	var ct = data.split(':')[0];
	var uCode,coreT,label;	
	var test = 1;	
	//alert(ct.split('/')[0]);
	if(shipTo.indexOf('ULIN') > -1){
		coreT = ct.split('/')[0];
		uCode = ct.split('/')[1];
		label = "^XA"+
				"^FWB"+
				"^LH10,30"+
				"^FX customer, address and product information."+
				"^CFA,30"+
				"^FO100,900"+
				"^FDShip To: "+shipTo+"^FS"+
				"^FO135,955^FDPO#: "+poNum+"^FS"+
				"^FO170,255^FD"+prodDesc+"^FS"+
				"^FO205,939^FD"+qty+" "+qtyLabel+"^FS"+

				"^FX barcode for uline"+
				"^FO15,480^BY3"+
				"^BCB,110,Y,N,N"+
				"^FD"+uCode+"^FS"+

				"^FX QRCODE"+
				"^CF0,40"+
				"^FO20,0"+
				"^BQ,2,4^FDQA,"+coreT+","+ //coretag
				""+data.split(':')[1]+","+data.split(':')[9]+" "+shiftNameTime+" ^FS"+

				"^FX barcode."+
				"^BY8,3,270"+
				"^FO290,10"+
				"^B3B,N,390,N,N"+
				"^FD^SN"+skidFrom+",1,N^FS"+
				"^FT275,450^ADB,27,22"+
				"^FD"+prodID+"^FS"+
				"^FT275,1145"+
				"^ADB,27,22"+
				"^FD^SN"+skidFrom+",1,N^FS"+
				"^PQ"+((skidTo - skidFrom) + 1)*2+",0,2,N"+
				"^FT720,830"+
				"^ADB,30,25^FDMADE IN CANADA^FS"+

				"^FX totalskids"+
				"^CFB0,30"+
				"^FO730,130"+
				"^FD^SN1,1,N^FS"+
				"^FO730,85^FD/^FS"+
				"^FO730,10^FD"+data.split(':')[7]+"^FS"+
				"^XZ";		
		
	}else{
		coreT=ct.split('/')[0];
		label = "^XA"+
			"^FWB"+
			"^LH10,30"+
			"^FX customer, address and product information."+
			"^CFA,30"+
			"^FO80,900"+
			"^FDShip To: "+shipTo+"^FS"+
			"^FO115,955^FDPO#: "+poNum+"^FS"+
			"^FO150,255^FD"+prodDesc+"^FS"+
			"^FO185,939^FD"+qty+" "+qtyLabel+"^FS"+

			"^FX QRCODE"+
			"^CF0,40"+
			"^FO20,0"+
			"^BQ,2,4^FDQA,"+coreT+","+ //coretag
            ""+data.split(':')[1]+","+data.split(':')[9]+" "+shiftNameTime+" ^FS"+

			"^FX barcode."+
			"^BY8,3,270"+
			"^FO290,10"+
			"^B3B,N,390,N,N"+
			"^FD^SN"+skidFrom+",1,N^FS"+
			"^FT275,450^ADB,27,22"+
			"^FD"+prodID+"^FS"+
			"^FT275,1145"+
			"^ADB,27,22"+
			"^FD^SN"+skidFrom+",1,N^FS"+
			"^PQ"+((skidTo - skidFrom) + 1)*2+",0,2,N"+
			"^FT720,830"+
			"^ADB,30,25^FDMADE IN CANADA^FS"+

			"^FX totalskids"+
			"^CFB0,30"+
			"^FO730,130"+
			"^FD^SN1,1,N^FS"+
			"^FO730,85^FD/^FS"+
			"^FO730,10^FD"+data.split(':')[7]+"^FS"+
			"^XZ";

	}

	selected_device.send(label, undefined, errorCallback);
	//alert(label);
	//console.log(label);
	
}

var readCallback = function(readData) {
	if(readData === undefined || readData === null || readData === "")
	{
		alert("No Response from Device");
	}
	else
	{
		alert(readData);
	}
	
}
var errorCallback = function(errorMessage){
	alert("Error: " + errorMessage);	
}
function readFromSelectedPrinter()
{

	selected_device.read(readCallback, errorCallback);
	
}
function getDeviceCallback(deviceList)
{
	alert("Devices: \n" + JSON.stringify(deviceList, null, 4))
}

function sendImage(imageUrl)
{
	url = window.location.href.substring(0, window.location.href.lastIndexOf("/"));
	url = url + "/" + imageUrl;
	selected_device.sendUrl(url, undefined, errorCallback)
}
function sendImageHttp(imageUrl)
{
	url = window.location.href.substring(0, window.location.href.lastIndexOf("/"));
	url = url + "/" + imageUrl;
	url = url.replace("https", "http");
	selected_device.sendUrl(url, undefined, errorCallback)
}
function onDeviceSelected(selected)
{
	for(var i = 0; i < devices.length; ++i){
		if(selected.value == devices[i].uid)
		{
			selected_device = devices[i];
			return;
		}
	}
}			
			
window.onload = setup;