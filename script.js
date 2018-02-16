$(document).ready(function() {

    var first_id;

    $("#foodSubmit").click(function(e) {

      e.preventDefault();
      var value = $("#foodInput").val();
      console.log(value);
      var result = "";

      var myurl= "https://trackapi.nutritionix.com/v2/search/instant?query=" + value;
      var itemId = "";
      $.ajax({
      	url : myurl,
        headers: {
          "x-app-id" : "fcd17848",
          "x-app-key" : "2891c57fdc5bc418390fb132fa44d625",
          "x-remote-user-id" : "0"
        },
      	dataType : "json",
      	success : function(json) {
            itemId = json.branded[0].nix_item_id;
      	    console.log(json);
              result += "<p>" + json.branded[0].brand_name_item_name + "</p>"
            $("#foodResults").html(result);

            var secondurl = "https://trackapi.nutritionix.com/v2/search/item?nix_item_id=" + itemId;
            $.ajax({
              url : secondurl,
              headers: {
                "x-app-id" : "fcd17848",
                "x-app-key" : "2891c57fdc5bc418390fb132fa44d625"
              },
              dataType : "json",
              success : function(json) {
                  console.log(json);
                  //result +=
                  //for(var i=0; i < json.)
              }

            });
        }
      });


    });

  /*$("#expand0").click(function(a) {

    a.preventDefault();
    console.log("im in");
    var result = "";

    itemId = first_id;
    var secondurl = "https://trackapi.nutritionix.com/v2/search/item?nix_item_id=" + itemId;
    $.ajax({
      url : secondurl,
      headers: {
        "x-app-id" : "fcd17848",
        "x-app-key" : "2891c57fdc5bc418390fb132fa44d625"
      },
      dataType : "json",
      success : function(json) {
          console.log(json);
          //result +=
          //for(var i=0; i < json.)
      }

    });


  });


    /*$("#exerciseSubmit").click(function(e) {

    e.preventDefault();
    var value = $("#exerciseInput").val();
    console.log(value);

    var myurl= "https://trackapi.nutritionix.com/v2/natural/exercise";
    $.ajax({
      type: 'post',
    	url : myurl,
      headers: {
        "x-app-id" : "fcd17848",
        "x-app-key" : "2891c57fdc5bc418390fb132fa44d625",
        "x-remote-user-id" : "0",
        "Content-Type" : "application/json"
      },
      data: value,
      /*body: {

      },
    	dataType : "json",
    	success : function(json) {
    	    console.log(json);


	    //json=json;
	    var result = "";
	    result += "<p>Calories: " + json.branded[0].nf_calories + "</p>";
      itemId = json.branded[0].nix_item_id;

      var secondurl = "https://trackapi.nutritionix.com/v2/search/item?nix_item_id=" + itemId;
      $.ajax({
      	url : secondurl,
        headers: {
          "x-app-id" : "fcd17848",
          "x-app-key" : "2891c57fdc5bc418390fb132fa44d625"
        },
      	dataType : "json",
      	success : function(json) {
      	    console.log(json);
  	    }
      });

	    $("#foodResults").html(result);
	}
    });

  });*/
});
