require.config({
	paths: {
		jquery: '../js/jquery-1.10.2',
		iscroll: "iscroll",
		load: "scroll-load-plugin",
		imgload: "imgLoad"
	}
});
require(['jquery', "load"], function($) {
	$("#goodsScroll").Loading({
		url: "data/upload.json",
		loadType: "upload",
		callback: function(result) {
			var imgList = result.data;
			var html = [];
			for(var i=0;i<imgList.length;i++){
				html.push('<li> <img src="',imgList[i].imgsrc,'"/></li>');
			}
			$("#goodsList").prepend(html.join(''));
		}
	});
});