var main = $("#content");

async function getCountries(){
    var response = await fetch("https://restcountries.com/v3.1/region/africa")
    var data = response.json();
    return data;
}

getCountries().then(data => {
    var rand = Math.floor(Math.random()*40);
    for(var i = rand; i < rand + 8; i++){
        var image = data[i]["flags"]["png"];
        var name_c = data[i]["name"]["common"];
        var capital = data[i]["capital"][0];
        var population = data[i]["population"]
        var div = document.createElement("div");
        div.setAttribute("class", "col-xs-12 col-sm-6 col-md-4 col-lg-3 thumbnail");
        div.innerHTML = `<img src="${image}"><h3>${name_c} <span class="h5 text-muted">(${population})</span></h3><h5 class="text-light">${capital}</h5>`;
        main.append(div);
    }
})

