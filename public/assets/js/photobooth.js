
   //LAYOUT STUFF
   $(document).ready(function() {
    // Webcam Setup
    Webcam.set({
      width: 640,
      height: 480,
      dest_width: 640,
      dest_height: 480,
      crop_width: 480,
      crop_height: 480,
      image_format: 'jpeg',
      jpeg_quality: 90,
      flip_horiz: true
    });
    // Initialize Webcam
    Webcam.attach('#my_camera');
    // Randomize Filter On Click 
    $(document).click(function(){
      var randomcolors = '#' + Math.floor(Math.random() * 16777215).toString(16); 
      $('#polaroid-overlay').css("background-color", randomcolors);
    });
  });

  //GALLERY SHUFFLE FUNCTION
  function shuffle_Pics(){
    $('.items').each(function (index, element) {
    var items = $(this).find('li img');
    items.each( function (index, element) {
      var item = $(this);
      var TopBottom = Math.random() < 0.5 ? 'top' : 'bottom';
      var LeftRight = Math.random() < 0.5 ? 'left' : 'right';
      var PosNeg = Math.random() < 0.5 ? '-' : '+';
      var min = 0;
      var VertMax = item.height()/2;
      var HorMax = item.width()/2;
      var VertPos = Math.floor(Math.random() * (VertMax - min + 1)) + min;
      var HorPos = Math.floor(Math.random() * (HorMax - min + 1)) + min;
      var CSS = {};
      CSS[TopBottom] = PosNeg+VertPos+'px';
      CSS[LeftRight] = PosNeg+HorPos+'px';
      item.css(CSS);
      });
    });
  };

  // SCREENCAP FUNCTION
  function take_snapshot() {
    Webcam.snap( function(data_uri) {
      //Add snapshot to list
      var newPic = '<img src="'+data_uri+'"/ class="captured">';
      $("ul").append("<li>"+newPic+"</li>");
      window.scrollTo(0,document.body.scrollHeight);
      shuffle_Pics();
    });                    
  };


    // Garbage~~~~~~~
    // import images from json file to film strip
    // $("#owl-demo").owlCarousel({
    //   jsonPath : '/assets/json/customData.json',
    //   jsonSuccess : customDataSuccess
    // });
   
    // function customDataSuccess(data){
    //   var content = "";
    //   for(var i in data["items"]){
         
    //      var img = data["items"][i].img;
    //      var alt = data["items"][i].alt;
   
    //      content += "<img src=\"" +img+ "\" alt=\"" +alt+ "\">"
    //   }
    //   $("#owl-demo").html(content);
    // }


    // Read from json stuff

        // //Read from json
        // var request = new XMLHttpRequest();
        // request.open("GET", "/assets/json/customData.json", false);
        // request.send(null)
        // var my_JSON_object = JSON.parse(request.responseText);
        // var picture = my_JSON_object["items"][1].img;
        // alert (picture);
        // $("ul").append("<li><img src="+picture+"></li>");
        // $.getJSON('/assets/json/customData.json', function(data) {         
        //     alert(data);
        // });
        // var words = data_uri;
        // alert(words);
        // document.getElementById('my_result').innerHTML = '<img src="'+data_uri+'"/ class="captured">';



