
 $(document).ready(function() {

  // click for random photo filter
  $(document).click(function(){
    var randomcolors = '#' + Math.floor(Math.random() * 16777215).toString(16); 
    $('#polaroid-overlay').css("background-color", randomcolors);
  });
 
  // import images from json file to film strip
  $("#owl-demo").owlCarousel({
    jsonPath : '/assets/json/customData.json',
    jsonSuccess : customDataSuccess
  });
 
  function customDataSuccess(data){
    var content = "";
    for(var i in data["items"]){
       
       var img = data["items"][i].img;
       var alt = data["items"][i].alt;
 
       content += "<img src=\"" +img+ "\" alt=\"" +alt+ "\">"
    }
    $("#owl-demo").html(content);
  }

});

