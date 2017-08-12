$(document).ready(main);
function main(){
var entry;
  var i;
  var searchItem;
  $('.results').hide();
  
  $('.random').on('click',function (){
    var win = window.open('https://en.wikipedia.org/wiki/Special:Random', '_blank');
    if(win){
      win.focus();
    } else {
      alert('Please enable pop-ups for this webpage');
    }
  });
  
  
  $('#go').on('click', function () {   
   searchItem = document.getElementById('searchText').value;
  
 $.getJSON('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch='+searchItem+'&format=json&callback=?', function(data){
    console.log(data);
   
   for(i=0;i<=10;i++){
     entry = data.query.search[i];
     
     $('#result'+i).html('<h3 class="results">'+entry.title+'</h3>');
     $('#result'+i).append('<p class="snippet">'+entry.snippet+'</p>');
    $('#link'+i).attr('href','https://en.wikipedia.org/wiki/'+entry.title);
     $('.results').show();
   }
  
});
  
 });
  
}