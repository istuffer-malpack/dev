//localStorage.shift = "Ramin/Shift A";
var machineLines = ['LINE 1', 'LINE 2', 'LINE 3', 'LINE 4', 'LINE 5', 'LINE 6', 'LINE 7', 'LINE 8'];

var app = angular.module("app", ["chart.js"]);

app.factory("overviewService", function($http) {
  var service = {};
  var gUrl = "https://script.google.com/macros/s/AKfycbwidMvPjKpIJQ087kXA2byrqpkaZppmAVMHLPE6QSNGVeoIQLLc/exec?id=13-2-O1bKhYp0rp6x-i-QOWN184uMwgU04cpVh32o4gU&sheet=";

  service.getAllOrders = function() {
    //return $http.get(gUrl + "schedule");
	return $http.get("https://script.google.com/a/malpack.ca/macros/s/AKfycbzIp9LKyA08fp-OpkzHiWud53ef1lE0hvulIx7FZ4OmrIDTUis/exec?id=1VxeeYM53wwdnwy-y-Y_yH12YkJa1LtEjxuFTj7IqLQY&sheet=sched");
  };

  service.getAllQcData = function(id) {
    //return $http.get(gUrl + "data");
	return $http.get("https://script.google.com/a/malpack.ca/macros/s/AKfycbzIp9LKyA08fp-OpkzHiWud53ef1lE0hvulIx7FZ4OmrIDTUis/exec?id=1VxeeYM53wwdnwy-y-Y_yH12YkJa1LtEjxuFTj7IqLQY&sheet=qc_data");
  };
  
  service.getMessages = function(){
	return $http.get("https://script.google.com/macros/s/AKfycbzBwYZnMhmw1DyK6QApwYFjUJxvlozt_mB31TiG_3ZZARQK9ip8/exec?id=1AfeXWTxKkcTcIp_JUj_GENl8STchqU1ncXMmNAPYMyg&sheet=message");  
	//https://script.google.com/macros/s/AKfycbza85RHYVyl8LGMN6lmqw_8AESHPZ5dVnqRnV00BQba24U4RRI/exec
  };
  
  service.getScrap = function(){
	//return $http.get(gUrl + "SCRAP_DATA");
	return $http.get("https://script.google.com/a/malpack.ca/macros/s/AKfycbzIp9LKyA08fp-OpkzHiWud53ef1lE0hvulIx7FZ4OmrIDTUis/exec?id=1VxeeYM53wwdnwy-y-Y_yH12YkJa1LtEjxuFTj7IqLQY&sheet=scrap");

  };
  
  service.getScanned = function(){
	return $http.get(gUrl + "scanned_summary");
	
  };
  
  service.getDefectsData = function(id) {
    //return $http.get(gUrl + "defects");
	return $http.get("https://script.google.com/a/malpack.ca/macros/s/AKfycbzIp9LKyA08fp-OpkzHiWud53ef1lE0hvulIx7FZ4OmrIDTUis/exec?id=1VxeeYM53wwdnwy-y-Y_yH12YkJa1LtEjxuFTj7IqLQY&sheet=defects&startRow=2&header=2");
  };
  
  service.getSkidTags = function(){
	  return $http.get("https://script.google.com/macros/s/AKfycbzBwYZnMhmw1DyK6QApwYFjUJxvlozt_mB31TiG_3ZZARQK9ip8/exec?id=1AfeXWTxKkcTcIp_JUj_GENl8STchqU1ncXMmNAPYMyg&sheet=skidtags");  
  };
    
  service.machineLines = ['LINE 1', 'LINE 2', 'LINE 3', 'LINE 4', 'LINE 5', 'LINE 6', 'LINE 7', 'LINE 8','LINE 9']

  return service;
});

app.controller("overviewController", [ "$scope","$log","$interval","$timeout","$http","$filter","overviewService",
  function($scope, $log, $interval, $timeout, $http, $filter, overviewService) {
	  
	var init = function() {
		$scope.loading = true;
		$scope.rendered = false;
		$scope.user = localStorage.shift;
		$scope.orders;
		$scope.allOrders;
		$scope.qcData;
		$scope.messages;
		$scope.test;
		$scope.load = false;
		$scope.scrapData;
		$scope.defectsD;
		$scope.totalProduction;
		$scope.testOrders;
		$scope.linen = "LINE 1";
		$scope.chartTitle = '';
		$scope.todayDate = new Date();
		var sdate = $scope.todayDate;
		$scope.weekAgo = sdate.setDate(sdate.getDate() - 7);
		$scope.yr = "20"; //sdate.getFullYear().toString().substr(2,2);
    
	  $scope.getOrders = function(){
		  overviewService.getAllOrders().then(
			function successCallback(response) {
			 $scope.allOrders =  response.data.records;
			 $scope.currentTime = new Date();
			 $scope.orders =  $scope.allOrders.filter(function(results) {

				 var start = new Date(results.START);
				 var end = new Date(results.END);

				 return $scope.currentTime.getTime() <= end.getTime()

				}); 		
				
			},
			function errorCallback(response) {
			  $log.log("Error");
			}
		  );
	  
	  };
	 
	
	  $scope.machineLine = overviewService.machineLines;  
	  
	  $scope.getQC = function(){
		   overviewService.getAllQcData().then(
			function successCallback(response) {
			 // $log.log(response.data.records);
			  $scope.qcData = response.data.records;		 
			 
			},
			function errorCallback(response) {
			  $log.log("Error");
			}
		  );
	  };
	  
	  $scope.getMessage = function() {

		overviewService.getMessages().then(
			function successCallback(response) {
			 // $log.log(response.data.records);
			  $scope.messages = response.data.records.filter(function(results) { return (results.Timestamp != '')});			 
			},
			function errorCallback(response) {
			  $log.log("Error");
			}
			 );
	   };
	   
	   $scope.getScrapData = function() {

		overviewService.getScrap().then(
			function successCallback(response) {			 
			  $scope.scrapData = response.data.records.filter(function(results) { return (results.SCRAP_CONTENT == 'Bales' || results.SCRAP_CONTENT == 'Chunks')});
					  
			},
			function errorCallback(response) {
			  $log.log("Error");
			}
		);
		
	   };
	   $scope.getDefectData = function(){
		   overviewService.getDefectsData().then(
				function successCallback(response) {
					$scope.defectsD = response.data.records.filter(function(results) { return (results.MACHINE != '') });
					},
				function errorCallback(response) {
				  $log.log("Error");
				}
			);
	   };
	   
	   $scope.getScannedData = function(){
		   overviewService.getScanned().then(
				function successCallback(response) {
					$scope.totalProduction = response.data.records.filter(function(results) { return (results.TOTAL != '') });
						/* angular.forEach($scope.totalProduction, function (data) {	
							if(data.ScheduledLine == ""){
								data.ScheduledLine = "LINE 4";
							}
						
						}); */
						
					},
				function errorCallback(response) {
				  $log.log("Error");
				}
			);
	   };
 
 
	  
		$scope.$watch('orders', function(newValue, oldValue, scope) {
			return $scope.orders;
		}, true);
	
		$scope.$watch('qcData', function(newValue, oldValue, scope) {
			return $scope.qcData;
		}, true);
		
				
		$scope.loading = false;
		$scope.rendered = true;
		$scope.load = true;
		
		$scope.getOrders();
		$scope.getQC();
		$scope.getMessage();
		$scope.getScrapData();
		$scope.getDefectData();
		$scope.getScannedData();		
		
		$interval(function() {
			$scope.getOrders();
		}, 60 * 1000); 
		
		$interval(function() {
			$scope.getQC();
		}, 5 * 60 * 1000); 
		
		
	
		$scope.addMessage = function() {

			$scope.errortext = "";
			if (!$scope.addMe) {
			 return;
			}
			if ($scope.messages.indexOf($scope.addMe) == -1) {
			 var d = new Date();
			 $scope.messages.push({
			  'Timestamp': d.toISOString(),
			  'Message': $scope.addMe,
			  'Operator': localStorage.shift
			 });
			 //send message to google sheets				
			 var dataUrl = "https://script.google.com/macros/s/AKfycbza85RHYVyl8LGMN6lmqw_8AESHPZ5dVnqRnV00BQba24U4RRI/exec?fromForm=message&Message=" +
			 
			  $scope.addMe + "&Operator=" + localStorage.shift;

			 $http.get(dataUrl).then(function(response) {

			  if (response.data.result === 'success') {
			   //console.log("to write localstorage");	
				$('#MessageForm textarea').val("");
				closeModal('sendMessageForm');			   
			  }

			 });

			} else {
			 $scope.errortext = "Your message is already posted.";
			}

		};

	   $scope.removeItem = function(x) {
		$scope.errortext = "";
		$scope.messages.splice(x, 1);
	   };
   
  		$scope.showDefectChart = function(line){		
		  
			//var defects = $scope.defectsD.filter(function(results) { return (results.MACHINE = line) });
			
			$scope.defectLabels = ["Film Consistency","Film Breaks","Holes","Gels_Black specks","Die lines","Film Splitting","Film Tearing","Dispersion Issue","Cling issue","Film Blocking","Film not centered on core","Bad Roll Geometry","Bad edge_cut","Gauge Band","Contamination","Wrinkles","Film Appearance","Other"];
			$scope.defectSeries = ["Film Consistency","Film Breaks","Holes","Gels_Black specks","Die lines","Film Splitting","Film Tearing","Dispersion Issue","Cling issue","Film Blocking","Film not centered on core","Bad Roll Geometry","Bad edge_cut","Gauge Band","Contamination","Wrinkles","Film Appearance","Other"];

			$scope.defectOptions = {
								//responsive: false,
								//maintainAspectRatio: false,				
								 scales: {
										yAxes: [{ stacked: false,
												ticks: {
															fontSize: 10,
															
															fontColor: '#FFFFFF'
														}	
										}],
											xAxes: [{ stacked: false,
														ticks: {
																beginAtZero: true,
																display: false,
																fontSize: 10,
																fontColor: '#FFFFFF'
																
														}	
													}]
										},
										legend: {
											display: false,
											position: 'right'
										} 
										
									};
					$scope.defectsData = [];
					var d1=[];var d2=[];var d3=[];var d4=[];var d5=[];var d6=[];var d7=[];var d8=[];var d9=[];var d10=[];var d11=[];var d12=[];var d13=[];var d14=[];var d15=[];var d16=[];var d17=[];var d18=[];
					var c1=[];var c2=[];var c3=[];var c4=[];var c5=[];var c6=[];var c7=[];var c8=[];var c9=[];var c10=[];var c11=[];var c12=[];var c13=[];var c14=[];var c15=[];var c16=[];var c17=[];var c18=[];
					$scope.defectData = [];
					angular.forEach($scope.defectsD, function (data) {	
					if(data.MACHINE == line){
						
						$scope.defectData.push(data.Film_Consistency);
						c1.push('#803690');
						$scope.defectData.push(data.Film_Breaks);
						c2.push('#00ADF9');
						$scope.defectData.push(data.Holes);
						c3.push('#BDB76B');
						$scope.defectData.push(data.Gels_Black_specks);
						c4.push('#46BFBD');
						$scope.defectData.push(data.Die_lines);
						c5.push('#FDB45C');
						$scope.defectData.push(data.Film_Splitting);
						c6.push('#949FB1');
						$scope.defectData.push(data.Film_Tearing);
						c7.push('#4D5360');
						$scope.defectData.push(data.Dispersion_Issue);
						c8.push('#FF6F61');
						$scope.defectData.push(data.Cling_issue);
						c9.push('#6B5B95');
						$scope.defectData.push(data.Film_Blocking);
						c10.push('#9B1B30');
						$scope.defectData.push(data.Film_not_centered_on_core);
						c11.push('#77212E');
						$scope.defectData.push(data.Bad_Roll_Geometry);
						c12.push('#556B2F');
						$scope.defectData.push(data.Bad_edge_cut);
						c13.push('#FA9A85');
						$scope.defectData.push(data.Gauge_Band);
						c14.push('#5A3E36');
						$scope.defectData.push(data.Contamination);
						c15.push('#CE5B78');
						$scope.defectData.push(data.Wrinkles);
						c16.push('#935529');
						$scope.defectData.push(data.Film_Appearance);
						c17.push('#2A4B7C');
						$scope.defectData.push(data.Other);
						c18.push('#264E36'); 
					}

					});
					//$scope.defectData = [d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16,d17,d18];
					//$log.log($scope.defectData);
					$scope.defectColors = ['#803690', '#00ADF9', '#BDB76B', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360','#FF6F61','#6B5B95','#9B1B30','#77212E','#556B2F','#FA9A85','#5A3E36','#CE5B78','#935529','#2A4B7C','#264E36'];
					$scope.defectOverride = [{
									fill: true,
									backgroundColor: c1
								  }, {
									fill: true,
									backgroundColor: c2 
								  },{
									fill: true,
									backgroundColor: c3 
								  },  {
									fill: true,
									backgroundColor: c4 
								  },  {
									fill: true,
									backgroundColor: c5 
								  },  {
									fill: true,
									backgroundColor: c6 
								  },  {
									fill: true,
									backgroundColor: c7 
								  },  {
									fill: true,
									backgroundColor: c8 
								  },  {
									fill: true,
									backgroundColor: c9 
								  },  {
									fill: true,
									backgroundColor: c10 
								  },  {
									fill: true,
									backgroundColor: c11 
								  },  {
									fill: true,
									backgroundColor: c12 
								  },  {
									fill: true,
									backgroundColor: c13 
								  },  {
									fill: true,
									backgroundColor: c14 
								  },  {
									fill: true,
									backgroundColor: c15 
								  },  {
									fill: true,
									backgroundColor: c16 
								  },  {
									fill: true,
									backgroundColor: c17 
								  },  {
									fill: true,
									backgroundColor: c18 
								  },    
								];				
			 
			
		   
		};
		
		$scope.showChart = function(line){		 
		  
			var keyword = $scope.allOrders.filter(function(results) { return results.FLAG == "ON-GOING" && results.LINE == line	});

			$scope.labels = [];
			$scope.series = ["Breakpoint","MIN","TGT","MAX"];
			$scope.dataSeries = [];
			$scope.colors = ['#0D47A1', '#EF5350', '#43a047', '#fb8c00'];
			//$log.log(line);
			var d = $scope.qcData.filter(function(results) {				
				return (results.LINE == line) && (results.KEYWORD == keyword[0]["KEYWORD"]) && results.ULTIMATE_BREAKPOINT != "";				
			});
			
			var min = [], max = [], tgt = [], ult =[];
			
			angular.forEach(d, function (data) {
				var label = $filter('date')(data.TIMESTAMP, 'MMM dd hh:mma') + /*" " + data.LINE +*/" ORD#/PO#: "+data.ORDER_PO;
			    $scope.labels.push(label);
                min.push(data.MIN);
				tgt.push(data.TGT);
				max.push(data.MAX);
				ult.push(data.ULTIMATE_BREAKPOINT);
            });
			
			$scope.dataSeries = [ult,min,tgt,max];
			//$log.log($scope.dataSeries);
			
			$scope.datasetOverride = [{  }];
			
			$scope.onClick = function (points, evt) {
				//console.log(points, evt);
			};
			$scope.chartTitle = keyword[0]["KEYWORD"];
			var minVal = Math.min.apply(Math, ult) - 40;
			var maxVal = Math.max.apply(Math, ult) + 40;
  
			$scope.options = {
							//responsive: true,
								//maintainAspectRatio: false,
							title: {
								display: false,
								text: keyword[0]["KEYWORD"],
								fontSize: 20,
								fontColor: "#fff"
							},
							tooltipEvents: [],
							showTooltips: true,
							tooltipCaretSize: 0,
							onAnimationComplete: function () {
								this.showTooltip(this.segments, true);
							},
							 hover: {
									animationDuration: 0
								},
							elements: {
								line: {
										fill: false,
										tension: 0,
										borderWidth: 2
								},
								point: {
										radius: 0,
										borderWidth: 2,
										hoverRadius : 0,
										hoverBorderWidth : 3,
										hitRadius: 3
								}
							},
							scales: {
								yAxes: [{
									//type: 'linear',
									ticks: {
											beginAtZero: true,
											min: minVal,
											max: maxVal
										},
										gridLines: {
											display: false
										}
									}],
								xAxes: [{
									
										ticks: {
											display: false
										},
										gridLines: {
											display: false
										}
									}]
							}
							
						 };
				$scope.datasetOverride = [{    
										label: "Breakpoint",
										fill: false,
										pointRadius: 6,
										pointHoverRadius : 5,
									  }];
						 
			//var modal = document.getElementById("chartModal");
			//			modal.style.display = "block";			
				
		};
				
		//$scope.showChart('AX-M-041','LINE 8');	
		$timeout(function () {
			//$log.log("test");
			$scope.showDefectChart('LINE 1');

		}, 6000);
			
   $scope.filterLine = function(x) {   
     $scope.test = x; 
		var modal = document.getElementById("scheduleModal");
						modal.style.display = "block";		
   };
   
   $scope.populateJO = function(data) {
    $scope.currentOrder = data;	
	
	var colorCore = data.CORE_SIZE;
	if(colorCore.indexOf('PURPLE') > -1){
		$scope.coreColor = 'core-purple';
	}else if(colorCore.indexOf('BR') > -1){
		$scope.coreColor = 'core-brown';
	}else{
		$scope.coreColor = 'core-blue';
	}
	
	
	document.querySelector('.recipe').innerHTML = '<label for="" class="col-form-label">Product Recipe: </label><table><tbody>'+data.RECIPE+'</tbody></table>';
	
	var modal = document.getElementById("jobOrderModal");
	modal.style.display = "block";
   };
   
   $scope.skidId = function(data,sId){
	   
	   var test = data.split(",");
	   
	   var lastSkid = test.length - 1;
	   //$log.log(test);
	  // if(data.length > 7){
		$scope.skidfrom = test[0];
		$scope.skidto = test[lastSkid];
	  // }else{
		//$scope.skidfrom = data[0];
		//$scope.skidto = data[0];
	  // }
	   $scope.prodid = sId;
	   $scope.skidIDtags = data;
   };
   
   
   
   $scope.filmType = function(desc) {
    if (desc != undefined) {
     if (desc.indexOf('MACHINE') > 0) {
      return 'Machine Film'
     } else if (desc.indexOf('CONVERSION') > 0) {
      return 'Master Roll Film'
     } else {
      return 'Hand Film'
     }
    }

   };
   
   $scope.splitProduct = function(string, nb) {

    if (string != undefined) {
     var array = string.split('-');
     //return array[nb];
     if (array[nb].indexOf('X') > 0) {
      return array[nb].replace('X', '') + ' in'
     } else if (array[nb].indexOf('K') > 0) {
      return parseFloat(array[nb].replace('K', '.')) * 1000
     } else if (array[nb].indexOf('M') > 0) {
      return parseInt(array[nb].replace('M', '')) * 3.28
     }else {
      return array[nb]
     }
    }

   };
   
	  
    };

    init();
  }
]);

$('body').on('click', function(e) {
 e.preventDefault(); 
 
 if ($(e.target).hasClass('skidtags')) {
	$('.modal input').val('');
 }
 if ($(e.target).hasClass('order-number')) {	
	
 }

if ($(e.target).hasClass('core-tag-label')) {
	
	var data = $(e.target).next().text();
	var td = new Date();
	var c = data.split(':')[4];	
	var tag = data.split(':')[0];
	var coretag = "";
	var ordn = data.split(':')[1];
	var linenum = (data.split(':')[9]).toString().replace("LINE ","L");

  if (c != undefined && c.indexOf('ULINE') > -1) {
   coretag = tag.split('/')[1];
   ordn = tag.split('/')[0] + "<br>" + ordn;
  
  }else{
	 coretag = tag.split('/')[0];
	 ordn = ordn;
  }
  
  var dd = data.split(":")[3];
  var d = dd.split("-")[5];
	if(d.indexOf('00') > -1 || d.indexOf('Q0') > -1 || d.indexOf('C0') > -1 || d.indexOf('P0') > -1 || d.indexOf('N0') > -1){
		d = "";
	}
	
  $('.coreContent .tag').text(coretag);
  $('.coreContent .ordn').html(ordn+d);
  $('.coreContent .timestamp.ts').text(td.toLocaleTimeString() + ' ' + localStorage.shift.split('/')[1].replace("Shift ","") + '00' + linenum.replace("L",""));
  $('.noOfC').val(parseInt(data.split(':')[2]) + 20);
  $('.printCopies').attr('data-print', data);
  
var modal = document.getElementById("coreTagPrint");
	modal.style.display = "block";	 

  //$("#selected_device option:eq(1)").attr("selected", "selected");
 // $('.printCopies').trigger('click');
 }
 
 //skid tag printing
if ($(e.target).hasClass('skid-tag')) {
	//$('#skidTagPrint').css('display':'block');
	var modal = document.getElementById("skidTagPrint");
		modal.style.display = "block";	
	
	var data = $(e.target).prev().text();
		
	//alert(data);
	//alert(shipTo+" - "+poNum +" - "+prodDesc+" - "+qty+" "+qtyLabel+" - "+prodID+" - "+td.toLocaleTimeString() + ' ' + localStorage.shift.split('/')[1]);
	
	$('.printSkidTags').attr('data-skidtag',data);
} 

});



$('.printSkidTags').click(function(){
	
	var skidId = $(this).attr('data-skidtag').split(":")[3];	
	var orderNumber = $(this).attr('data-skidtag').split(":")[1];
	var htmlContent;
	var noOfCopies = 0;	
	var skidIdtags = $('.skidIDtags').val();
	
	$('#printSkids').html("");
	//console.log(skidId);
	var skidIDs = new Array();
	skidIDs = skidIdtags.split(',');
	var uniqueSkidIds = [];
	$.each(skidIDs, function(i, el){
		if($.inArray(el, uniqueSkidIds) === -1) uniqueSkidIds.push(el);
	});
	//console.log(skidIDs);
	if(uniqueSkidIds.length >= 1){
		//var skidIDs = uniqueSkidIds;
		for(var i=0;i<uniqueSkidIds.length;i++){
			var skidnumber = uniqueSkidIds[i]; 
				
					htmlContent = '<div class="bc-div" style="width: 100%;display:block;">'+
									'<p class="bcodelabel"><span style="float:left;margin-left:50px;">'+skidnumber+'</span><span style="float:right;margin-right:0px;">'+skidId.replace(/-/g,"")+'</span></p>'+
									'<img class="barcode'+skidnumber+' barcode" style="display:block;margin:0 40px;width:100%;"/>'+
									'<p style="text-align:center;margin: 5px 0 0;color: #000;font-size: 38px;line-height: 1.5rem;font-family: arial;font-weight: 700;">MADE IN CANADA</p>'+
									'<p style="width:100%;text-align:right;margin-top:200px;color: #000;font-size:40px;font-family: arial;font-weight:700;margin-bottom:0;">'+(i + 1)+' of '+ uniqueSkidIds.length +'</p>'+
									'</div>';				  
					
				$('#printSkids').append(htmlContent);

			JsBarcode(".barcode"+skidnumber, skidnumber, 
				{
					format: "code39",
					font: "arial",
					fontSize: 40,
					textMargin: 0,
					text: skidnumber,
					width: 10,
					height:300,
					displayValue: false	
				});
								
			++skidnumber;		
		}
		noOfCopies = uniqueSkidIds.length;
		
	}else{
		var skidEnd = $('.skidIdTo').val();			
		var skidStart = $('.skidIdFrom').val();	
		
		if(skidStart != '' && skidEnd != '' && !isNaN(skidStart) && !isNaN(skidEnd)){
			var skids = 0;
			var totalskids = (skidEnd - skidStart) + 1;
			var skidnumber = skidStart;
				console.log(totalskids);
			for(var i=0;i<totalskids;i++){
				htmlContent = '<div class="bc-div" style="width: 100%;display:block;">'+
									  '<p class="bcodelabel"><span style="float:left;margin-left:50px;">'+skidnumber+'</span><span style="float:right;margin-right:0px;">'+skidId.replace(/-/g,"")+'</span></p>'+
									  '<img class="barcode'+skidnumber+' barcode" style="display:block;margin:0 40px;width:100%;"/>'+
									  '<p style="text-align:center;margin: 5px 0 0;color: #000;font-size: 38px;line-height: 1.5rem;font-family: arial;font-weight: 700;">MADE IN CANADA</p>'+
									  '<p style="width:100%;text-align:right;margin-top:200px;color: #000;font-size:40px;font-family: arial;font-weight:700;margin-bottom:0;">'+(i + 1)+' of '+ totalskids +'</p>'+
									'</div>';				  
					
					$('#printSkids').append(htmlContent);

						JsBarcode(".barcode"+skidnumber, skidnumber, 
									{
										format: "code39",
										  font: "arial",
										  fontSize: 40,
										  textMargin: 0,
										  text: "1335376",
										  width: 10,
										  height:300,
										  displayValue: false	
									});
									
					++skidnumber;		
			}
			
			noOfCopies = skids;
			
			
			setTimeout(function(){			
				$('#printSkids').printElem('skidTags',noOfCopies,orderNumber,localStorage.shift,"skidTagPrint"); 		
				//var modal = document.getElementById("skidTagPrint");
			},800);
			
			
		}else{
			alert("Please enter skid id number!");
		}	
	}
});

function printSkidLabel(ele){
$('#printLabel').html("");
var htmlText = '';
var data = $(ele).parent().find('.coreTcontainer').text();
var totalskid = parseInt(data.split(':')[7]);
var paperColor = 'white';
var utag = '';
//console.log(data);
//{{x.CODETAG}}/{{x.ULCODE}}:{{x.ORDER}}:{{x.QTY}}:{{x.PRODUCTID}}:{{x.CUSTOMER_NAME}}:{{x.PRODUCTDESC}}:{{x.PO}}:{{x.TOTALSKID}}:{{x.UOM}}:{{x.LINE}}:{{}}
for(var i=0;i<totalskid;i++){
	var pt = (data.split(':')[3]).split('-')[0] + '-' +(data.split(':')[3]).split('-')[1];
	
	var order = data.split(':')[1];
	var ponum = data.split(':')[6];
	var cust = data.split(':')[4];
	var ctag = (data.split(':')[0]).split('/')[0];
	utag = ulineCode[(data.split(':')[3])]; //(data.split(':')[0]).split('/')[1];
	var qty = parseInt(data.split(':')[2]) / totalskid;
	var uom = data.split(':')[8];
	
	var prodDesc = data.split(':')[5];
	if(prodDesc.indexOf('MAX 80') > -1){
		pt += '80';
	}
	var fstdgt = prodDesc.search(/\d/);
	var lstdgt = prodDesc.search(/\'/) + 1;
	if(((data.split(':')[3]).split('-')[4]).indexOf('M') > -1){
		lstdgt = prodDesc.indexOf('0M') + 2;
	}
	//prodDesc = prodDesc.substring(fstdgt,lstdgt);
	
	if(prodDesc.indexOf("CONVERSION") > -1 || prodDesc.indexOf("CONV") > -1){
		prodDesc = prodDesc.substring(prodDesc.indexOf("ROLL")+4,prodDesc.indexOf("(")).trim();
	}else{
		prodDesc = prodDesc.substring(prodDesc.indexOf("FILM") + 4,prodDesc.indexOf("(")).trim();
	}
	
	
	if(utag != undefined){
		htmlText += '<div class="container white-bg">'+
					'<div class="product-logo" style="text-align:center; font-size: 200px;font-weight:700;line-height:1;padding:0;line-height:.8;">'+utag+'</div>'+
					'<div class="section center-aligned">'+
						'<div class="top">'+
							'<p class="h2" style="font-size:82px;line-height:1.1;">'+prodDesc+'</p>'+
							'<p class="h2" style="font-size:58px;">MADE IN CANADA</p>'+
						'</div>'+					
						'<div class="section" style="position:relative;">'+
							'<div class="lot-box" style="position: relative;left: 0;margin: 10px auto;">'+
								'<h3>Lot Number:</h3>'+
								'<h5>'+ctag+'  <span>19</span></h5>'+
							'</div>'+							
							'<div class="middle-section">'+
								'<p class="big" style="font-size:75px; line-height:1.2;">P.O.#'+ponum+'</p>'+							
							'</div>'+
							'<div class="middle-section">'+
								'<p class="big">'+
									'<img class="uline-barcode barcode" />'+
								'</p>'+								
							'</div>'+				
						'</div>'+		
						'<div class="footer">'+							
							'<div class="page-count" style="bottom: -20px;">'+
								'<span> '+(i+1)+'</span>'+
								'<span> '+totalskid+'</span>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>';
	}else{
		
		if(pt == 'VX-H'){
			htmlText += '<div class="container white-bg">'+
						'<div class="product-logo" style="text-align:center; font-size: 120px;font-weight:700;line-height:1.1;">FULLER ROAD</div>'+
						'<div class="section center-aligned">'+	
							'<div class="top">'+			
								'<p class="h1" style="font-size:85px;">'+prodDesc+'</p>'+
								'<p class="h2" style="font-size:85px;">'+data.split(':')[1]+'</p>'+
							'</div>'+		
							'<div class="section" style="position:relative;">'+				
								'<div class="middle-section">'+
									'<p class="big" style="font-size:65px; line-height:1.1;">VMAXX HAND FILM</p>'+
									'<p class="big" style="font-size:65px; line-height:1.1;">CONVERSION ROLLS</p>'+
								'</div>'+
								'<div class="middle-section" style="margin-top: 100px;margin-bottom: 50px;">'+
									'<p class="big">'+ qty +' '+ uom +'/SKID</p>'+
								'</div>'+				
							'</div>'+		
							'<div class="footer">'+			
								'<div class="page-count" style="bottom: 20px;">'+
									'<span> '+(i+1)+'</span>'+
									'<span> '+totalskid+'</span>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>';
			
		}else if(pt == 'ST-M' || pt == 'CM-M'){
			var style = (pt == 'CM-M') ? "" : "style=\"height:180px;width:60%;\"";
			htmlText += '<div class="container white-bg">'+
						'<div class="product-logo"><img src="./img/'+pt+'.jpg" alt="" '+style+'/></div>'+
						'<div class="section center-aligned">'+	
							'<div class="top">'+
								'<p class="h1">'+cust+'</p>'+
								'<p class="h2">'+prodDesc+'</p>'+
							'</div>'+	
							'<div class="section" style="position:relative;">'+			
									'<div class="lot-box" style="position: relative;left: 0;margin: 10px auto;">'+
										'<h3>Lot Number:</h3>'+
										'<h5>'+ctag  +'<span>19</span></h5>'+
									'</div>'+			
								'<div class="middle-section">'+
									'<p class="big">P.O.#'+ponum+'</p>'+				
								'</div>'+	
								'<div class="middle-section">'+
									'<p class="big">'+ qty +' '+ uom +'/SKID</p>'+	
									'<p class="small">MADE IN CANADA</p>'+
								'</div>'+				
							'</div>'+		
							'<div class="footer">'+			
								'<div class="page-count">'+
									'<span> '+(i+1)+'</span>'+
									'<span> '+totalskid+'</span>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>';
			
		}else if((pt == 'PL-H' && (data.split(':')[5]).indexOf('CONV') <= -1) || pt == 'MW-H'){
			htmlText += '<div class="container white-bg">'+ 
						'<div class="product-logo"><img src="./img/'+pt+'.jpg" alt=""/></div>'+
						'<div class="section center-aligned">'+	
							'<div class="top" style="margin-top:15px;">'+
								'<p class="h1" style="font-size:75px;line-height:1.2;">'+cust+'</p>'+
								'<p class="h2" style="font-size:65px;line-height:1.2;">'+prodDesc+'</p>'+
							'</div>'+		
							'<div class="section" style="position:relative;">'+			
								'<div class="middle-section">'+
									'<p class="big" style="font-size:65px;margin-top: 25px;">P.O.#'+ponum+'</p>'+				
								'</div>'+	
								'<div class="middle-section">'+
									'<p class="big">'+ qty +' '+ uom +'/SKID</p>'+
									'<p class="big">MADE IN CANADA</p>'+
								'</div>'+				
							'</div>'+		
							'<div class="footer">'+			
								'<div class="page-count">'+
									'<span> '+(i+1)+'</span>'+
									'<span> '+totalskid+'</span>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>';
		}else{
			
			htmlText += '<div class="container white-bg">'+
				'<div class="product-logo"><img src="./img/'+pt+'.jpg" alt=""/></div>'+
				'<div class="section center-aligned">'+	
					'<div class="top">'+
						'<p class="h1">'+cust+'</p>'+
						'<p class="h2">'+prodDesc+'</p>'+
					'</div>'+		
					'<div class="section" style="position:relative;">'+			
							'<div class="lot-box">'+
								'<h3>Lot Number:</h3>'+
								'<h5>'+ctag+  '<span>19</span></h5>'+
							'</div>'+			
						'<div class="middle-section">'+
							'<p class="big">'+ qty +' '+ uom +'/SKID</p>'+				
						'</div>'+	
						'<div class="middle-section">'+
							'<p class="big">P.O.#'+ponum+'</p>'+
							'<p class="small">MADE IN CANADA</p>'+
						'</div>'+				
					'</div>'+		
					'<div class="footer">'+
						'<img src="./img/AX-FOOTER.jpg"/>'+
						'<div class="page-count" style="bottom: 20px;">'+
								'<span> '+(i+1)+'</span>'+
								'<span> '+totalskid+'</span>'+
							'</div>'+
							'</div>'+
					'</div>'+
				'</div>';
				
				switch (pt){
					case 'AX-M':
					paperColor = 'blue';
					break;
					case 'PL-M':
					paperColor = 'green';
					break;
					case 'PR-M':
					paperColor = 'yellow';
					break;
					default:
					paperColor = 'white';
				}
		}
		
	}
	
}
	
	$('#printLabel').append(htmlText);
	
	if(utag != ''){
		JsBarcode(".uline-barcode.barcode", utag, {format: "code128",font: "arial",fontSize: 40,textMargin: 0,text: "",height:80,displayValue: false});
	}

	setTimeout(function(){	
		alert('REMINDER: Make sure you insert '+paperColor+' paper before you hit the print button.');
		$('#printLabel').printElem('skidLabel',0,0,localStorage.shift,""); 	
			
	},800);
}


$('.printCopies').click(function() {
 var nc = $('.noOfC').val();
 var data = $(this).attr('data-print');
 var linenum = (data.split(':')[9]).toString().replace('LINE ','00');
 //var selectedPrinter = document.getElementById('selected_device').value;
 //if(selectedPrinter != ''){
	writeToSelectedPrinter(data.split(':')[0], data.split(':')[1], (localStorage.shift).split("/")[1].replace("Shift ","")+''+linenum, nc, data.split(':')[3], data.split(':')[4]);
 //}else{
	//alert("Please select printer.");
 //}
});


$(document).on('click', '#btnPrint', function(){
	$('#printThis').printElem();
});		  
		
			
	
$( ".formSubmit" ).click(function( event ) {
 
  event.preventDefault();
  $('.error-alert').css("display","none");
 // $('#scrapForm').submit();
  $.ajax({
        url: 'https://script.google.com/macros/s/AKfycby2jBsN1OLqXDBbbHpwXETQDBQHiQA1kpxv6A0LTJfvF4Ce4G05/exec',
        type: 'get',
        dataType: 'json',
        data: $('#scrapForm').serialize(),
        success: function(data) {
			if(data.result === "success"){
				$('.submitted-alert').css("display","block");
				$('#scrapForm').trigger("reset");
				setTimeout(function(){$('#scrapReportForm .close').trigger('click');}, 2000);
				
			}else{
				$('.error-alert').css("display","block");
				//alert("Ooppsss... Something went wrong, please resubmit your entry.");
			}
        }
    }); 
});

$('.dismiss').click(function(){
	$('#scrapReportForm .close').trigger('click');
});
$( ".sendMsg" ).click(function( event ) { 
 
  event.preventDefault();
 
 var message = $(this).prev().text();
  if(message != ""){
  $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbza85RHYVyl8LGMN6lmqw_8AESHPZ5dVnqRnV00BQba24U4RRI/exec',
        type: 'get',
        dataType: 'json',
        data: $('#MessageForm').serialize(),
        success: function(data) {
			
			$('#MessageForm textarea').val("");
			closeModal('sendMessageForm');
			
        }
    });
  }
  
});
function test(){
	$(".ON-GOING").get(0).scrollIntoView();	
	
}

function showChart(ele){
	var t = $(ele).next().text();
}
function getCoreTag(prodID,noOfSkid){	
			
	let product = prodID.split("-");
	let thickness = parseInt(product[3]);
	let length = product[4];
		
	let coretagCode = ((noOfSkid < 10) ?  '0'+noOfSkid : noOfSkid) + '-' + productType[product[0]];
	
			//thickness
		if(thickness < 100){
			coretagCode += coreCode[Math.floor(thickness/10)] + '' + coreCode[(thickness % 10 == 0) ? 24 : thickness % 10]; 
		}else{
			coretagCode += coreCode[(thickness % 10 == 0) ? thickness/10 : Math.floor(thickness/10)] + '' + coreCode[(thickness % 10 == 0) ? 24 : thickness % 10]; 
		}
			
			//length
		if(length.indexOf('K') > -1){
			var kCode = length.split('K'); 
			var fstdigit = parseInt(kCode[0]);
			var secondDigit = (kCode[1] == '') ? 24 : parseInt(kCode[1]);
				
			coretagCode += coreCode[fstdigit] + '' + coreCode[secondDigit];
				
		}else{
				
			var fstdigit = (length/100) % 5 == 0 ? coreCode[Math.floor(length/1000)] : coreCode[Math.floor(length/100)];
			var secondDigit = (length/100) % 5 == 0 ? coreCode[Math.floor((length % 1000)/100)] : coreCode[Math.floor((length % 1000)/10)];					
			coretagCode += fstdigit+''+secondDigit;
		}
			
			//date
			var today = new Date();
			coretagCode += dateCode[today.getMonth()] + '' + today.getDate();
			
			return coretagCode;
		}
		
jQuery.fn.extend({
 printElem: function(a,b,c,d,e) {
  var cloned = this.clone();
  var printSection = $('#printSection');
  if (printSection.length == 0) {
   printSection = $('<div id="printSection" class="container"></div>');
   $('body').append(printSection);
  }
  printSection.append(cloned);
  var toggleBody = $('body *:visible');
  toggleBody.hide();
  $('#printSection, #printSection *').show();
  
  //append css
  
	var css = '@page { size: 8.5in 11in;margin:15mm 15mm;}body{color:#000!important;width:785px;height: 980px;page-break-after: avoid;page-break-before: avoid;}.container.job-order-form{width:130%!important;display:block;}.recipe{margin: 0px auto;}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
	 
	 if(a == 'skidTags'){ 
		css = '@page { size: 11in 8.5in; margin-top: 5cm;}body{width:920px;height: 650px;}';
	 }else if(a == 'skidLabel'){
		 css = '@page { size: 11in 8.5in;margin:15mm 15mm;}body{width:980px;height: 650px;color:#000;font-family:"Times New Roman;"}.h1{font-size:60px;font-weight:700;margin:0;line-height:1.1}.h2{font-size:55px;font-weight:700;margin:0}h3{font-weight:700}h5{font-size:1.5em;margin:10px}h5 span{padding-left:15px}.product-logo{padding-top:0px}.product-logo img{margin-top:5px;height:140px;display:block;margin:5px auto}.lot-box{width:250px;padding:10px;border-style:double;position:absolute;left:10px}.big{font-size:50px;font-weight:700;margin:0}.small{font-size:30px;margin:0;font-weight:700;line-height:30px}.page-count{width:150px;position:absolute;right:50px;bottom:50px}.page-count span{display:block;border:1px #000 solid;padding:5px;font-size:50px;font-weight:700}.footer img{height:90px;display:block;margin:20px auto;width:65%}';
	 }

	style.type = 'text/css';
	style.media = 'print';

	if (style.styleSheet){
	  style.styleSheet.cssText = css;
	} else {
	  style.appendChild(document.createTextNode(css));
	  
	} 
	
	head.appendChild(style);  
	window.print();  
	printSection.remove();  
	toggleBody.show();
  
	window.onafterprint = function(event) { 
	//console.log("done");
	if(a == 'skidTags'){
		logPrint(a,b,c,d,e);	
	}		
	};
	
	//var modal = document.getElementById("skidTagPrint");
		//modal.style.display = "none";	
  
 }

});

$('input[type="checkbox"]').click(function(){	
	
	var checked = $(this).attr('checked');
	
	if(checked === undefined){
		$(this).attr('checked','checked');
		$(this).addClass('checked');
		$(this).parent().addClass('checkBoxChecked');
		
	}else{
		$(this).removeAttr('checked');
		$(this).removeClass('checked');
		$(this).parent().removeClass('checkBoxChecked');
	}		
	
});

function resetDailyChecklistForm(){
	$('#dailyChecklistForm input').removeAttr('checked').removeClass('checked');
	$('#dailyChecklistForm label').removeClass('checkBoxChecked');
	$('#dailyChecklistForm select, #dailyChecklistForm textarea, #dailyChecklistForm input[name="submitby"]').val('');
}

$('input[name="question6a"]').click(function(){$(this).next().trigger('click');});
$('input[name="question8a"]').click(function(){$(this).next().trigger('click');});

$( ".dailyChecklistFormSubmit" ).click(function( e ) { 
  e.preventDefault();
  $('.show-success-msg, .show-error-msg').css("display","none");
  //get values
  var line = $('#lineDropdown').find(':selected').val();
  var question6 = ($('input[name="question6"]').hasClass('checked')) ? $('input[name="question6a"].checked').val() : "";
  var question7 = ($('input[name="question7"]').hasClass('checked')) ? $('input[name="question7"]').val() : "";
  var question8 = ($('input[name="question8"]').hasClass('checked')) ? $('input[name="question8a"].checked').val() : "";
  var question9 = ($('input[name="question9"]').hasClass('checked')) ? $('input[name="question9"]').val() : "";
  var comment = $('textarea[name="comment"]').val();
  var submittedby = $('input[name="submitby"]').val();
  var shift = $('input[name="shift"]').val();
  var flagged = true;
  //console.log(line+" "+question6+" "+question7+" "+question8+" "+question9+" "+comment+" "+submittedby);  
	var data = "line="+line+"&q6="+question6+"&q7="+question7+"&q8="+question8+"&q9="+question9+"&comment="+comment+"&submittedby="+submittedby+"&shift="+shift;
	//if(line != '' && question6 != '', )
		if(question6 == undefined){
			alert('Please select Die/Lip, Cast Roll Cleaning whether it is "Scheduled" or "Quality Issue".');
			flagged = false;
		}
		if(question8 == undefined){
			alert('Please select changed blades whether it is "New Blades" or "Flipped".');
			flagged = false;
		}
		if(line == ''){
			alert('Please select machine line.');
			flagged = false;
		}
		if(submittedby == ''){
			alert('Please enter operator name.');
			flagged = false;
		}
		if(question6 == '' && question7 == '' && question8 == '' && question9 ==''){
			alert('Please at least one of the items to be reported.');
			flagged = false;
		}
		
	if(flagged){
		
		$.ajax({
			url: 'https://script.google.com/macros/s/AKfycbza85RHYVyl8LGMN6lmqw_8AESHPZ5dVnqRnV00BQba24U4RRI/exec?fromForm=checklist&'+data,
			type: 'get',
			dataType: 'json',
			success: function(data) {
				if(data.result === "success"){
					$('.show-success-msg').css("display","block");				
					setTimeout(function(){$('.show-success-msg').css("display","none");}, 5000);
					resetDailyChecklistForm();
				}else{
					$('.show-error-msg').css("display","block");				
					setTimeout(function(){$('.show-error-msg').css("display","none");}, 5000);
				}
			}
		});
		
	}
});
