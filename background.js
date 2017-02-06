chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
   chrome.tabs.get(tabId, function(tab) {	   
    if (tab.pinned) {		
      chrome.tabs.executeScript({
		code: "var currentTabUrl = '" + JSON.stringify(tab.url) + "';"
      }, function(){
		  chrome.tabs.executeScript({file: "tab_content.js"});
	  });
    }
  }); 
});