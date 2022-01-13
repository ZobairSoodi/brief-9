var main = $("#content");
var continent = "Africa";

async function getCountries(){
    var response = await fetch("https://restcountries.com/v3.1/region/"+continent)
    var data = response.json();
    console.log(data)
    return data;
}

function printCountries(){
    getCountries().then(data => {

        var rand = Math.floor(Math.random()*data.length-8);
        if(rand<0){
            rand = 0;
        }
        
        for(var i = rand; i < rand + 8; i++){
            
            if(data[i].flags){
                var image = data[i]["flags"]["png"];
            }
            else{
                image = "sIaRmaFSMfrw8QJIBAa8mA-article.png"
            }
            var name_c = data[i]["name"]["common"];
            if(name_c.length>16){
                name_c = name_c.substring(0,15);
                name_c+="...";
            }
            
            if(data[i]["capital"]){
                var capital = data[i]["capital"][0];
            }
            else{
                capital = "none"
            }
            var population = data[i]["population"]
            var div = document.createElement("div");
            div.setAttribute("class", "col-xs-12 col-sm-6 col-md-4 col-lg-3 thumbnail");
            div.innerHTML = `<h3>${name_c}</h3><img src="${image}"><h5 class="h5 text-success">Population: ${population}</h5><h5 class="text-light">Capital: ${capital}</h5>`;
            main.append(div);
        }
    })
}
printCountries()

$(".dropdown-menu a").click(function(){
    $("#content").html("");
    var sel = $(this).text()
    switch (sel){
        case "Asia": continent="Asia";break;
        case "Africa": continent="Africa";break;
        case "America": continent="America";break;
        case "Europe": continent="Europe";break;
    }
    
    printCountries();
})