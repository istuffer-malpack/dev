function printSkidLabel(ele){
$('#printLabel').html("");
var htmlText = '';
var data = $(ele).parent().find('.coreTcontainer').text();
//{{x.CODETAG}}/{{x.ULCODE}}:{{x.ORDER}}:{{x.QTY}}:{{x.PRODUCTID}}:{{x.CUSTOMER_NAME}}:{{x.PRODUCTDESC}}:{{x.PO}}:{{x.TOTALSKID}}:{{x.UOM}}:{{x.LINE}}:{{}}
for(var i=0;i<parseInt(data.split(':')[7]);i++){
	var footer = '';
	if((data.split(':')[3]).split('-')[0] == 'AX' || (data.split(':')[3]).split('-')[0] == 'CM' || (data.split(':')[3]).split('-')[0] == 'PL' || (data.split(':')[3]).split('-')[0] == 'PR'){
		footer = '<div class=""><img src="./img/AX-FOOTER.jpg" style="width: 75%;height:85%; display:block;margin: 20px auto;"/></div>';
	}
	htmlText += '<div class="container white-bg">'+
	'<div class="product-logo"><img src="./img/'+(data.split(':')[3]).split('-')[0]+'.jpg" alt=""/></div>'+
	'<div class="section center-aligned">'+
		'<p class="h1">'+data.split(':')[4]+'</p>'+
		'<p class="h2">'+(data.split(':')[3]).split('-')[2]+' x '+(data.split(':')[3]).split('-')[3]+'G x'+(data.split(':')[3]).split('-')[4]+'\'</p>'+
		
		'<div class="lot-box">'+
			'<h3>Lot Number:</h3>'+
			'<h5>'+(data.split(':')[0]).split('/')[0]+' 19</h5>'+
		'</div>'+
		
		'<div class="section" style="position:relative;">'+
			'<div>'+
				'<p class="big">P.O.#'+parseInt(data.split(':')[6])+'</p>'+
				'<p class="big">'+parseInt(data.split(':')[2]) / parseInt(data.split(':')[7])+' '+data.split(':')[8]+'/SKID</p>'+
				'<p class="small">MADE IN CANADA</p>'+
			'</div>'+
			'<div class="page-count">'+
				'<span> '+(i+1)+'</span>'+
				'<span> '+data.split(':')[7]+'</span>'+
			'</div>'+
		'</div>'+		
		footer+
	'</div>'+
'</div>';
}
$('#printLabel').append(htmlText);
setTimeout(function(){			
		$('#printLabel').printElem('skidLabel',0,0,localStorage.shift,""); 		
		
	},800);
}