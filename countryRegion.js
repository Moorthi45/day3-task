function printData(){
    const countries=JSON.parse(this.responseText);
    countries.forEach(count => {
        console.log(count.region,count.subregion)
    });
}
let dataRequest= new XMLHttpRequest();
dataRequest.addEventListener("load",printData);
dataRequest.open("GET","https://restcountries.com/v3.1/all");
dataRequest.send();