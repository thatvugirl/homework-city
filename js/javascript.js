//Command that allows DOM elements to fully load before initiating functions in javascript.js
$(document).ready(function() {
  
  //Command prevents the page refreshing after every user click
  $('#submit-btn').click(function(){
    event.preventDefault();
    

    var city = $('#city-type').val();
    $('#city-type').val('');
    city = city.toLowerCase().trim();
    

    // if user submits "los angeles", "lax", or "la", 
    // the class for the CSS background changes to "la" to show la.jpg
    if (city == 'los angeles' || city == 'lax' || city == 'la') {
      $('body').attr('class','la');
    }
    

    // if user submits "sydney" or "syd", 
    // the class for the CSS background changes to "sydney" to show sydney.jpg
    else if (city == 'sydney' || city == 'syd') {
      $('body').attr('class','sydney');
    }


    // if user submits "san francisco", "sf", or "bay area", 
    // the class for the CSS background changes to "sf" to show sf.jpg
    else if (city == 'san francisco' || city == 'sf' || city == 'bay area') {
      $('body').attr('class','sf');
    }
    

    // if user submits "austin" or "atx", 
    // the class for the CSS background changes to "austin" to show austin.jpg
    else if (city == 'austin' || city == 'atx') {
      $('body').attr('class','austin');
    }
     

    // if user submits "new york city", "new york", or "ny", 
    // the class for the CSS background changes to "nyc" to show nyc.jpg
    else if(city == 'new york city' || city == 'new york' || city == 'nyc') {
      $('body').attr('class','nyc');
    }



  });

});