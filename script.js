$(document).ready(function() {
    console.log("hello class");

    $("#weatherSubmit").click(function(e) {

    e.preventDefault();
    var value = $("#weatherInput").val();
    console.log(value);

    var myurl= "https://trackapi.nutritionix.com/v2/search/instant?query=" + value;
    $.ajax({
    	url : myurl,
      headers: {
        "x-app-id" : "fcd17848",
        "x-app-key" : "2891c57fdc5bc418390fb132fa44d625",
        "x-remote-user-id" : "0"
      },
    	dataType : "json",
    	success : function(json) {
    	    console.log(json);

	    //json=json;
	   /* var result = "";
	    result += "<h2>Weather in " + json.name + "</h2>";
	    for(var i=0; i < json.weather.length; i++){
		result += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
	    }
	    result += "<h2>" + json.main.temp + "&deg;F <i id='humidity'>(" + json.main.humidity + "% humidity)</i></h2><h3>High: " + json.main.temp_max + "&deg;F, Low: " + json.main.temp_min + "&deg;F</h3>";
	    result += "<p>";
	    for(var i=0; i < json.weather.length; i++){

		result += json.weather[i].description;
		if(i!==json.weather.length-1){

		    result += ", ";
		}
	    }
	    result += "</p>";
	    $("#weatherResults").html(result);*/
	}
    });

    });

$("#stackSubmit").click(function(e) {

    e.preventDefault();
    var value = $("#stackInput").val();
    console.log(value);

    var myurl= "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&site=stackoverflow&intitle=" + value;
     $.ajax({
	url : myurl,
	dataType : "json",
	success : function(json) {
	    console.log(json);

	    var result = "";
	    result += "<h2>Results</h2>";
	    result += "<ul>"
	    for(var i=0; i < json.items.length; i++){

		result += "<li><a href='" + json.items[i].link + "'>" + json.items[i].title + "</a></li><br>";
	    }
	    result += "</ul>";

	    $("#stackResults").html(result);
	}
     });
});
});
