// http://stackoverflow.com/questions/19491336/get-url-parameter-jquery
var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};

$(document).ready(function() {
  soundManager.setup({
    url: 'swf/',
    flashVersion: 9,
    preferFlash: true,
    onready: function() {
      var url = getUrlParameter('url');
      var streamName = getUrlParameter('stream_name');
      if(url && streamName) {
        soundManager.createSound({
          id: 'url',
          serverURL: url,
          url: streamName,
          autoLoad: true,
          autoPlay: true,
          bufferTime: 0,
          bufferTimeMax: 0,
          volume: 100
        });
      }
    }
  });
});

