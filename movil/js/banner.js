$(document).ready(function(){
	var banner = document.getElementById("bigBanner");
	var R = document.getElementById("arrowR");
	var L = document.getElementById("arrowL");

	//$(banner).css("background-image","url('../resources/desk/banner1.png')");
	var links = ["../resources/banners/bannerwebnuevo.png","../resources/banners/UCSLP_bannerweb_ceneval.png","../resources/banners/UCSLP_CAFD_Digital_banner.png","../resources/banners/UCSLP_Campan.png","../resources/desk/banner1.jpg"]
	
	var aux = 0;
	//alert($aux);

	$(L).click(function(){
		aux--;
		if (aux<=0) {
			aux = 4;
		}
		$(banner).css("background-image","url('"+links[aux]+"')");
	});
	$(R).click(function(){
		aux++;
		if (aux>=5) {
			aux = 0;
		}
		$(banner).css("background-image","url('"+links[aux]+"')");
	});
	setInterval(function(){
		if (aux>=5) {
			aux = 0;
		}
		$(banner).css("background-image","url('"+links[aux]+"')");
		aux++;
	}, 5000);

		
});