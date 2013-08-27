  var config = {
		  host: "https://hpcs.feedhenry.com",
		  appid: "eFmNH-c8b1_VfXwakxdLUM19",
		  appkey: "74fc07636817525113d6600c72958ef32cff9e0a",
		  mode: "dev"
    };

    $fh.init(config, function(res) {
        alert('initialised');
    }, function(err) {
        alert('error while initialisation');

    });