
var bottone = document.getElementById('esegui');

bottone.addEventListener('click', function(){
   
    let città = document.getElementById("inputcittà").value; 
    
    var apikey = '604d8be6924bbce2de7c34a2125a21e1';

    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + città + "&appid=" + apikey +"&lang=it";

    var nome_città = document.getElementById('nome_città');
    var temperatura = document.getElementById('temperatura_città');
    var umidità = document.getElementById('umidità_città');
    var temp_perc = document.getElementById('temperatura_percepita');
    var temp_max = document.getElementById('temperatura_max');
    var temp_min = document.getElementById('temperatura_min');
    var vento_vel = document.getElementById('vento_città');
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        var Dnome = data['name'];
        var Dnaz = data['sys']['country'];
        var Dtemp = data['main']['temp'] ;
        var Ddescr = data['weather']['0']['description'];
        var Dumidità = data['main']['humidity'];
        var Dtemp_perc = data['main']['feels_like'] ;
        var Dtemp_max = data['main']['temp_max'] ;
        var Dtemp_min = data['main']['temp_min'] ;
        var Dvento_vel = data['wind']['speed'];
        
        console.log(data);
       
        Dtemp = parseInt(Dtemp) - 273;
        Dtemp_perc = parseInt(Dtemp_perc) - 273;
        Dtemp_max = parseInt(Dtemp_max) - 273;
        Dtemp_min = parseInt(Dtemp_min) - 273;
     
        nome_città.innerHTML = Dnome + " , " + Dnaz ;
        temperatura.innerHTML = Dtemp + "°C" + "  "+ Ddescr;
        umidità.innerHTML = "Umidità  " + Dumidità + "%"; 
        temp_perc.innerHTML = "Temperatura percepita  " + Dtemp_perc + "°C";
        temp_max.innerHTML = "Temperatura max  " + Dtemp_max + "°C"; 
        temp_min.innerHTML = "Temperatura min  " + Dtemp_min + "°C"; 
        vento_vel.innerHTML = "Velocità vento  " + Dvento_vel  + "Km/h";   
       
        if(Ddescr == "cielo sereno")
        {
            var icona = document.getElementById('icona').src="icone/sereno.png";
        }
        if(Ddescr == "cielo coperto")
        {
            var icona = document.getElementById('icona').src="icone/coperto.png";
        }
        if(Ddescr == "nubi sparse")
        {
            var icona = document.getElementById('icona').src="icone/coperto.png";
        }
        if(Ddescr == "pioggerella")
        {
            var icona = document.getElementById('icona').src="icone/pioggia.png";
        }
        if(Ddescr == "pioggia moderata")
        {
            var icona = document.getElementById('icona').src="icone/pioggia.png";
        }
        if(Ddescr == "pioggia intensa")
        {
            var icona = document.getElementById('icona').src="icone/pioggia.png";
        }
        if(Ddescr == "tempesta")
        {
            var icona = document.getElementById('icona').src="icone/tempesta.png";
        }
        if(Ddescr == "poche nuvole")
        {
            var icona = document.getElementById('icona').src="icone/coperto.png";
        }
        if(Ddescr == "nevicata")
        {
            var icona = document.getElementById('icona').src="icone/neve.png";
        }
        if(Ddescr == "foschia")
        {
            var icona = document.getElementById('icona').src="icone/nebbia.png";
        }
        if(Ddescr == "nebbia")
        {
            var icona = document.getElementById('icona').src="icone/nebbia.png";
        }
        if(Ddescr == "nebbia intensa")
        {
            var icona = document.getElementById('icona').src="icone/nebbia.png";
        }
        
    }) // fine fatch0

}) // fine funzione click
