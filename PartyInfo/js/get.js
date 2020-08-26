database.ref().once('value').then(function (snapshot) {
    var username = snapshot.val();
    var maa = Object.keys(username);

    for (var a = 0; a < maa.length; a++) {
        var k = maa[a];
        var title = username[k].title;
        var address = username[k].address;
        var city = username[k].city;
        var state = username[k].state;
        var zip = username[k].zip;
        console.log(title);

        var para = document.createElement('p');
        para.innerHTML = title;
        document.getElementById("title").appendChild(para);
        var para = document.createElement('p');
        para.innerHTML = address;
        document.getElementById("address").appendChild(para);
        var para = document.createElement('p');
        para.innerHTML = city;
        document.getElementById("city").appendChild(para);
        var para = document.createElement('p');
        para.innerHTML = state;
        document.getElementById("state").appendChild(para);
        var para = document.createElement('p');
        para.innerHTML = zip;
        document.getElementById("zip").appendChild(para);
    }

});