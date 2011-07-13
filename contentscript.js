function sb_stop() {return false;};
function sb_start() {return true;};

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        if ((request.flag == false) || (request.flag == "false"))
            document.onmousewheel=sb_start;
        else
            document.onmousewheel=sb_stop;
        sb_status = request.flag;
        chrome.extension.sendRequest({sb_status: sb_status}, function(response) {

        });
});