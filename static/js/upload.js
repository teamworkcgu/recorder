// Required for Django CSRF
function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
 

// Actual Upload function using xhr
function uploadAudioFromBlob(blob) {
   // var  result={{result}};
    var csrftoken = getCookie('csrftoken');

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'upload_server', true);
    xhr.setRequestHeader("X-CSRFToken", csrftoken);
    xhr.setRequestHeader("MyCustomHeader", "Put anything you need in here, like an ID");

    xhr.upload.onloadend = function () {
       // alert(result);
        alert('上傳成功');

    };

    xhr.send(blob);
}
