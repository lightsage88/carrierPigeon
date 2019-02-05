//This JS file deals with getting calls from the weather
//API so as to make sure the driver can get tips on
//how to be safe!

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    getWeatherFromService(lat, long);
  }

  function getWeatherFromService(lat, long) {
      console.log('getWeatherFromService running..');
        console.log(lat);
        console.log(long);
    }

    getLocation();