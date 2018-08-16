$(document).ready(function(){
cities = JSON.parse(cities, function(key, value) {
  return value;
});

photos = JSON.parse(imgs, function(key, value) {
  return value;
});

  for(var i=0; i< cities.places.length; i++){
  	$('<area shape="circle" id="' + i +'fc" title=' + cities.places[i].title + ' class="areaC">').appendTo($('#map0'));
  $('#' + i +'fc').css({
  	left:cities.places[i].left,
  	top:cities.places[i].top
  	
  });
  $('.areaC').fadeIn(2000);
  }

function initImgs(id, region){
	for(var i=0; i< region.length; i++){

		$('<img src='+ region[i].title +' id="' + i + id +'">').appendTo($('#ask'));
		$('#' + i + id).css({
		position:"absolute",
		top:region[i].top,
		left: region[i].left,
		display: "none",
		border: "5px solid white",
		cursor: "pointer"
});
}
}

initImgs('fimg', photos.askold);
initImgs('simg', photos.armalit);
initImgs('timg', photos.burevestnik);
initImgs('foimg', photos.skbk);


function showImgs(id, lenght, i) {
	
setInterval(function(){
			i++;

			$('#' + i + id ).fadeIn(2000);
			setInterval(function(){
				$('#' + i + id).fadeOut(3000);
		
	}, 3000);
}, lenght);
}

showImgs('fimg', 5000, -1 );
showImgs('simg', 8000, -1);
showImgs('timg', 15000, -1);
showImgs('foimg', 21000, -1);


});
