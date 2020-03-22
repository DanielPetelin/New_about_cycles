document.getElementById('push').onclick = function() {
    var r = document.getElementsByName('r');
    // var r = document.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < r.length; i++) {
        // console.log(i);
        if (r[i].checked) {
            console.log(r[i].value);
        };
    };
};

var out = '';

for (var i = 0; i < 10; i++) {
    if (i == 6) {
        continue;
    };
    // if (i == 6) continue;
    out += i + ' ';
    // if (i == 6) {
    //     break;
    // };
    // if (i == 6) break;
};

document.getElementById('out').innerHTML = out;