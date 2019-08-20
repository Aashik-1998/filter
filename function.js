var slider = document.getElementById('slider');
var box1 = document.getElementById("box1");
slider.onchange = function(){
    box1.value = slider.value;
}


box1.onkeyup = function(){
      slider.value = box1.value;      
}


document.getElementById("box2").onkeyup = function(){
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var table = document.getElementsByClassName("js-table");
    var table1 = document.querySelectorAll(".js-table");
    console.log("element" , table);
    console.log("query" , table1);
    var price = [];
    // price = table.getAttribute("data-price");
    // console.log(price);
    // price1 = table1.getAttribute("data-price");
    // console.log(price1);
    
    if (parseInt(box1.value) < parseInt(box2.value))
    {
        var i = 0;
        for(i = 0; i < table.length; i++) {
            price[i] = table[i].getAttribute("data-price");
            if((parseInt(price[i]) > parseInt(box2.value)) || (parseInt(price[i]) < parseInt(box1.value))){
                table[i].classList.add("none");
            }
            else{
                table[i].classList.remove("none");
            }
        } 
    }
    else{
        for(i = 0; i < table.length; i++) {
            table[i].classList.remove("none");
        }
    }

}
