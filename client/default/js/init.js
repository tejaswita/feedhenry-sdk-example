  var config = {
        host: "replace with your app host",
        appid: "replace with your app ID",
        apikey: "replace with your app key",
        mode: "should be dev or prod"
    };

    $fh.init(config, function(res) {
        alert('initialised');
    }, function(err) {
        alert('error while initialisation');

    });