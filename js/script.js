document.getElementById('push').onclick = function() {
    var r = document.getElementsByName('r');
    for (var i = 0; i < r.length; i++) {
        // console.log(i);
        if(r[i].checked) {
            console.log(r[i].value);
        };
    };
};