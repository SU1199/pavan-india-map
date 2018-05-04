var  getCoords = function(x) {
  x = x.toString();
  x = x.substr(1).slice(0, -1);
  x = x.replace(/ /g,'')
  var fcoords = x;
var uri ='https://api.openaq.org/v1/measurements?coordinates='+fcoords+'&nearest=1';

xmlhttp.open("GET", uri, true);
xmlhttp.send();
}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);

         var len = Object.keys(data.results).length ;
          var so2=0; var a=0;
          var no2=0; var b=0;
          var co=0;  var c=0;
          var pm10=0; var d=0;
          var pm25=0; var e=0;
          var o3=0; var f=0;


    var i;
    for (i = 0; i <= len/2; i++) {
    if(data.results[i].parameter == "so2"){
      so2 = so2+data.results[i].value;
      a++;
    }
     else if(data.results[i].parameter == "no2"){
      no2 = no2+data.results[i].value;
      b++;
    }

     else if(data.results[i].parameter == "co"){
      co = co+data.results[i].value;
      c++;
    }

     else if(data.results[i].parameter == "pm10"){
      pm10 = pm10+data.results[i].value;
    d++;
    }

     else if(data.results[i].parameter == "pm25"){
      pm25 = pm25+data.results[i].value;
      e++;
    }
     else if(data.results[i].parameter == "o3"){
      o3 = o3+data.results[i].value;
      f++;
    }
    }

    var message ="Nearest Station- " + data.results[0].location + '\n' +  "SO2       " + so2/a + "µg/m" + "\n" +  "N02       " + no2/b + "µg/m" + "\n" +  "C0       " + co/c + "µg/m" + "\n" +  "pm10       " + pm10/d + "µg/m" + "\n" + "pm25       " + pm25/e + "µg/m" + "\n" + "o3       " + o3/f + "µg/m" 
    alert("Nearest Station- " + data.results[0].location);
    document.getElementById("so2").innerHTML = so2/a;
    document.getElementById("co").innerHTML = co/c;
    document.getElementById("ozone").innerHTML = o3/f;
    document.getElementById("pm25").innerHTML = pm25/e;
    document.getElementById("pm10").innerHTML = pm10/d;
    document.getElementById("no2").innerHTML = no2/b;
  }
}


   