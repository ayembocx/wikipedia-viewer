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
  
  function activate (){
    
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
  
  }
  
  $('#go').on('click', function () {   
   //CHANGE: Moved activate function inside click action
   //Removed lengthy code
    activate();
 });
  
  //CHANGE: Everything below is new code
  var search=document.getElementById('searchText');
  search.addEventListener('keydown',function (k){
    if(k.keyCode===13){
      activate();
    }
  });
  
  
}