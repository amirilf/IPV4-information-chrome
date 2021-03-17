function get_data() {
    fetch("http://ip-api.com/json?fields=continent,country,regionName,city,query")
        .then(res => res.json())
        .then(data => {
            document.getElementById("ip").innerHTML = data.query;
            document.getElementById("continent").innerHTML = data.continent;
            document.getElementById("country").innerHTML = data.country;
            document.getElementById("region").innerHTML = data.regionName;
            document.getElementById("city").innerHTML = data.city;
        })
        .catch(function () {
            document.getElementById("ip").innerHTML = 'Connection Failed';
            document.getElementById("continent").innerHTML = 'Connection Failed';
            document.getElementById("country").innerHTML = 'Connection Failed';
            document.getElementById("region").innerHTML = 'Connection Failed';
            document.getElementById("city").innerHTML = 'Connection Failed';
        })
}

get_data()