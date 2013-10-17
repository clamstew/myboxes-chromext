var urlsArray = [];

$(document).ready(function() {
  chrome.tabs.query({}, function(tabs) {
    // subtract by one so it doesn't look into the chrome ext url
    for (var i = 0; i <= tabs.length - 1; i++ ) {
      var url = tabs[i]['url'];
      $('.urls ul').append('<li><a href="'+ url +'" target="_blank">' + url + '</a></li>');

      url = url.replace(/\++/g, '%2B').toLowerCase();
      url = url.replace(/\&+/g, '%26').toLowerCase();
      // url = "{ \"address\": \"" + url + "\"}";
      url = {"address": url };
      urlsArray.push(url);
    }
    
    // $('.urls-array').html(urlsArray);


      window.boxObject = {"box" : {
                          "user_id": 1,
                          "links_attributes": urlsArray
                        }
                    };
      // var boxObject = boxObject.toJSON();
      console.log('var boxObject = ', JSON.stringify(boxObject) );
      // console.log('var boxObject = ', boxObject );
      console.log('var urlsArray = ', urlsArray);

      // window.jsonstr = JSON.stringify(boxObject);
      // jsonstr = jsonstr.replace(/\//g, '').toLowerCase();
  
      $.ajax({
        type: 'POST',
        // contentType: "application/json",
        url: 'http://localhost:4000/tester.json',
        data: "new_box=" + JSON.stringify(boxObject),
        
        cache: false,
        timeout: 7000, // seven seconds
        dataType: 'json',
        success: function(data) {
            // console.log('data back from server', data);
            console.log('success function fired', data);
        },
        complete: function() {
            console.log('complete function fired');
        }
      });
  });// END OF CHROME.TABS.QUERY()
});







