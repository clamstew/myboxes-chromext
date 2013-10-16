var urlsArray = [];

$(document).ready(function() {
  chrome.tabs.query({}, function(tabs) { 
    // subtract by one so it doesn't look into the chrome ext url
    for (var i = 0; i <= tabs.length - 1; i++ ) {
      var url = tabs[i]['url'];
      $('.urls ul').append('<li><a href="'+ url +'" target="_blank">' + url + '</a></li>');
      urlsArray.push(url);
    }
    console.log(urlsArray);
    $('.urls-array').html(urlsArray);

    
  });
});


