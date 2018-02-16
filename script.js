$(document).ready(function() {

    var first_id;

    $("#foodSubmit").click(function(e) {

      e.preventDefault();
      var value = $("#foodInput").val();
      var result = "";

      var myurl= "https://trackapi.nutritionix.com/v2/search/instant?query=" + value;
      var itemId = "";
      $.ajax({
      	url : myurl,
        headers: {
          "x-app-id" : "8e3591dd",
          "x-app-key" : "b4d66e404234e82577f8d318b9dd10fe",
          "x-remote-user-id" : "0"
        },
      	dataType : "json",
      	success : function(json) {
            itemId = json.branded[0].nix_item_id;
      	    console.log(json);
            result += "<p>" + json.branded[0].brand_name_item_name + "</p>";

            var secondurl = "https://trackapi.nutritionix.com/v2/search/item?nix_item_id=" + itemId;
            $.ajax({
              url : secondurl,
              headers: {
                "x-app-id" : "8e3591dd",
                "x-app-key" : "b4d66e404234e82577f8d318b9dd10fe"
              },
              dataType : "json",
              success : function(json) {
                  console.log(json);

                  console.log(json.foods[0].photo.thumb);

                  if(json.foods[0].photo.thumb != "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png"){result += "<img src=\"" + json.foods[0].photo.thumb + "\">"}
                  if(json.foods[0].nf_calories != null){result += "<p> Calories: " + json.foods[0].nf_calories + "</p>";}
                  if(json.foods[0].nf_cholesterol != null){result += "<p> Cholesterol: " + json.foods[0].nf_cholesterol + " mg</p>";}
                  if(json.foods[0].nf_dietary_fiber != null){result += "<p> Dietary Fiber: " + json.foods[0].nf_dietary_fiber + " g</p>";}
                  if(json.foods[0].nf_protein != null){result += "<p> Protein: " + json.foods[0].nf_protein + " g</p>";}
                  if(json.foods[0].nf_potassium != null){result += "<p> Potassium: " + json.foods[0].nf_potassium + " mg</p>";}
                  if(json.foods[0].nf_saturated_fat != null){result += "<p> Saturated Fat: " + json.foods[0].nf_saturated_fat + " g</p>";}
                  if(json.foods[0].nf_sodium != null){result += "<p> Sodium: " + json.foods[0].nf_sodium + " mg</p>";}
                  if(json.foods[0].nf_sugars != null){result += "<p> Sugars: " + json.foods[0].nf_sugars + " g</p>";}
                  if(json.foods[0].nf_total_carbohydrate != null){result += "<p> Total Carbohydrate: " + json.foods[0].nf_total_carbohydrate + " g</p>";}
                  if(json.foods[0].nf_total_fat != null){result += "<p> Total Fat: " + json.foods[0].nf_total_fat + " g</p>";}
                  $("#foodResults").html(result);
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
