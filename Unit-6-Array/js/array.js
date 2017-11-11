//Command that allows DOM elements to fully load before initiating functions in array.js
$(document).ready(function() {

  //First, define the entry terms for the city array
  var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

  
  //Grab the value of index to gauge value current selection 
  //append an option value to selection
  for(i=0;i<cities.length;i++) {
    $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
  }

  //Command to receive input from user to pic and change the array selection, changing background
  $('form').change(function(){


    //Input equals the class to change background to
    var city = $('#city-type').val();


    // if user selects "NYC", 
    // the class for the CSS background changes to "nyc" to show nyc.jpg
    if(city == 'NYC') {
      $('body').attr('class','nyc');
    }


    // if user selects "SF", 
    // the class for the CSS background changes to "sf" to show sf.jpg
    else if (city == 'SF') {
      $('body').attr('class','sf');
    }


    // if user selects "LA", 
    // the class for the CSS background changes to "la" to show la.jpg
    else if (city == 'LA') {
      $('body').attr('class','la');
    }


    // if user selects "ATX", 
    // the class for the CSS background changes to "austin" to show austin.jpg
    else if (city == 'ATX') {
      $('body').attr('class','austin');
    }


    // if user selects "SYD", 
    // the class for the CSS background changes to "sydney" to show sydney.jpg
    else if (city == 'SYD') {
      $('body').attr('class','sydney');
    }



  });

});
