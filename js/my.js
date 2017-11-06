$(document).ready(function(){
  var images=["https://data.whicdn.com/images/257310286/superthumb.jpg","https://static.tumblr.com/a33ae9bd93e1ff9bf65d30d25588227b/ho5dlgg/4dent0q3t/tumblr_static_tumblr_static__640.jpg", "https://i.pinimg.com/736x/c5/76/c2/c576c27368b635b84168683fbf5df0a9--baby-elephant-nursery-elephant-art.jpg","http://data.whicdn.com/images/224786930/large.jpg","https://s14.favim.com/orig/160717/aesthetic-blue-flowers-green-Favim.com-4534594.jpeg","https://vignette.wikia.nocookie.net/superted/images/a/a7/Skeleton.jpg/revision/latest?cb=20110228204008"]
var i= 0;
var b= images.length;

$("#next").click(function(){
  i=(i+1)%b;
  $("#images img").attr("src", images[i])
});

$("#before").click(function(){
  i=(i+b-1)%b;
  $("#images img").attr("src", images[i])
});
});
