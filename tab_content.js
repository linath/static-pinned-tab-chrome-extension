var tmpTabUrl = JSON.parse(currentTabUrl);
var tabUrl = document.createElement('a');
tabUrl.href = tmpTabUrl;
document.querySelectorAll('a[href]').forEach(function (a) {
	if (a.host !== tabUrl.host) {
		a.setAttribute('target', '_blank')
	}
});