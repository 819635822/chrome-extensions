chrome.contextMenus.create({
	"title": "维基搜索",
	"type": "normal",
	"documentUrlPatterns": ["http://*/*" ,"https://*/*" ],
	"targetUrlPatterns": ["https://*/*" , "https://*/*"],
	"contexts": ["selection"],
	"onclick": function(info, tab) {
		var text = info.selectionText;
		console.info(text);
		if (text != null) {
			var wkurl = "https://zh.wikipedia.org/w/index.php?search=\%s&title=Special%3A搜索&profile=default&fulltext=1";
			
			chrome.tabs.create({
				url: wkurl.replace("%s", text)
			},
			function() {})
		}
	}
},
function() {});