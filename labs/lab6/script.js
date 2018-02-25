$("#button").click(function() {
  var enterWord;
  element = document.getElementById('insertName');
  if (element != null) {
    enterWord = element.value;
  }
  else {
    enterWord = null;
  }
  console.log(enterWord);

  $.ajax({
    url: 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?',
    dataType: 'jsonp',
    data: { "tags": enterWord, "format": "json", "api_key": "8797630bc2f403954faa909157ec770a" },
    success: function(response) {
// console.log(response);
var name = response.title;
$("#searchName").text(name);

for(var i=0; i<response.items.length; i++) {
    var img = response.items[i].media.m;
  var imgName = response.items[i].title;


if(!imgName){
  imgName="...."
}
else if(imgName.length > 25){
  imgName = imgName.substring(0,25)+"...";
}
$("#result").prepend("<figure><img src='"+img+"'><figcaption>"+imgName+"</figcaption></figure>"
  );
}
}
});
});
