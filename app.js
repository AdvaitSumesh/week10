var cartValue = document.getElementById("cart-value");
var cartButton=document.getElementById("cart");


var book1add=document.getElementById("book1");
var book2add=document.getElementById("book2");
var book3add=document.getElementById("book3");
var book4add=document.getElementById("book4");
var book5add=document.getElementById("book5");
var book6add=document.getElementById("book6");

var game1add=document.getElementById("game1");
var game2add=document.getElementById("game2");
var game3add=document.getElementById("game3");
var game4add=document.getElementById("game4");

var craft1add=document.getElementById("craft1");
var craft2add=document.getElementById("craft2");
var craft3add=document.getElementById("craft3");
var craft4add=document.getElementById("craft4");

console.log(book1add)

var book1 = {
    name:"This was our pact",
    quantity:0,
    dollars: 7,
    cents:49 ,
}

// console.log(book1.name)

var book2 = {
    name:"The famous five" ,
    quantity:0 ,
    dollars:4 ,
    cents:59 ,
}

var book3 = {
    name:"Matlida",
    quantity:0 ,
    dollars:6 ,
    cents:80 ,
}

var book4 = {
    name:"Harry Potter",
    quantity:0 ,
    dollars:10 ,
    cents:0 ,
}

var book5 = {
    name:"For Young Readers",
    quantity:0 ,
    dollars:7 ,
    cents:29 ,
}

var book6 = {
   name:"Wimpy Kid - DIY",
    quantity:0 ,
    dollars:4 ,
    cents:99 ,
}

var game1 = {
    name:"Dart Board" ,
    quantity:0 ,
    dollars:17 ,
    cents:49 ,
}

var game2 = {
    name:"Connect 4",
    quantity:0 ,
    dollars:19 ,
    cents:99 ,
}

var game3 = {
    name:"Jenga",
    quantity:0 ,
    dollars:20 ,
    cents:99 ,
}

var game4 = {
    name:"Monopoly",
    quantity:0 ,
    dollars:19 ,
    cents:49 ,
}

var craft1 = {
    name:"Bookmarks" ,
    quantity:0 ,
    dollars:12 ,
    cents:49 ,
}
var craft2 = {
    name:"Birthday card" ,
    quantity:0 ,
    dollars:19 ,
    cents:99 ,
}
var craft3 = {
    name:"Stuffed toys" ,
    quantity:0 ,
    dollars:15 ,
    cents:99 ,
}
var craft4 = {
    name:"Dream catcher drawing" ,
    quantity:0 ,
    dollars:18 ,
    cents:49 ,
}

function updatecart(){
    cart=
    book1.quantity +
    book2.quantity +
    book3.quantity +
    book4.quantity +
    book5.quantity +
    book6.quantity +
    game1.quantity +
    game2.quantity +
    game3.quantity +
    game4.quantity +
    craft1.quantity +
    craft2.quantity +
    craft3.quantity +
    craft4.quantity +
    cartValue.innerHTML=cart;
}


book1add.oneclick= (e)=> {
    book1.quantity++;
    updatecart();
};
book2add.oneclick= (e)=> {
    book2.quantity++;
    updatecart();
};
book3add.oneclick= (e)=> {
    book3.quantity++;
    updatecart();
};
book4add.oneclick= (e)=> {
    book4.quantity++;
    updatecart();
};
book5add.oneclick= (e)=> {
    book5.quantity++;
    updatecart();
};
book6add.oneclick= (e)=> {
    book6.quantity++;
    updatecart();
};

game1add.oneclick= (e)=> {
    game1.quantity++;
    updatecart();
};
game2add.oneclick= (e)=> {
    game2.quantity++;
    updatecart();
};
game3add.oneclick= (e)=> {
    game3.quantity++;
    updatecart();
};
game4add.oneclick= (e)=> {
    game4.quantity++;
    updatecart();

    craft1add.oneclick= (e)=> {
        craft1.quantity++;
        updatecart();
    };
    craft2add.oneclick= (e)=> {
        craft2.quantity++;
        updatecart();
    };
    craft3add.oneclick= (e)=> {
        craft3.quantity++;
        updatecart();
    };
    craft4add.oneclick= (e)=> {
        craft4.quantity++;
        updatecart();
    };
var finalDollars = 0;
var finalCents = 0;
function updatePrice() {

    var book1CostInCents =
     book1.quantity*book1.dollars*100+book1.quantity*book1.cents;
    var book2CostInCents =
     book2.quantity*book2.dollars*100+book2.quantity*book2.cents;
    var book3CostInCents =
     book3.quantity*book3.dollars*100+book3.quantity*book3.cents;
    var book4CostInCents =
     book4.quantity*book4.dollars*100+book4.quantity*book4.cents;
     var book5CostInCents =
     book5.quantity*book5.dollars*100+book5.quantity*book1.cents;
    var book6CostInCents =
     book6.quantity*book6.dollars*100+book6.quantity*book2.cents;

     var game1CostInCents =
     game1.quantity*game1.dollars*100+game1.quantity*game1.cents;
    var game2CostInCents =
     game2.quantity*game2.dollars*100+game2.quantity*game2.cents;
    var game3CostInCents =
     game3.quantity*game3.dollars*100+game3.quantity*game3.cents;
    var game4CostInCents =
     game4.quantity*game4.dollars*100+game4.quantity*game4.cents;

     var craft1CostInCents =
     craft1.quantity*craft1.dollars*100+craft1.quantity*craft1.cents;
    var craft2CostInCents =
     craft2.quantity*craft2.dollars*100+craft2.quantity*craft2.cents;
    var craft3CostInCents =
     craft3.quantity*craft3.dollars*100+craft3.quantity*craft3.cents;
    var craft4CostInCents =
     craft4.quantity*craft4.dollars*100+craft4.quantity*craft4.cents;

     totalPriceInCents =
     book1CostInCents +
     book2CostInCents +
     book3CostInCents +
     book4CostInCents +
     book5CostInCents +
     book6CostInCents +
     game1CostInCents +
     game2CostInCents +
     game3CostInCents +
     game4CostInCents +
     craft1CostInCents +
     craft2CostInCents +
     craft3CostInCents +
     craft4CostInCents ;
      
finalDollars = Math.floor(totalPriceInCents  / 100);
finalCents =totalPriceInCents % 100;
}

var whatsappLink = 
"https://api.whatsapp.com/send?phone=919000000000text=Order%20details";

function updateWhatsappLink(){
    if (book1.quantity != 0){
        whatsappLink+="%0A" + book1.name + "420" + book1.quantity
    }
    if (book2.quantity != 0){
        whatsappLink+="%0A" + book2.name + "420" + book2.quantity
    }
    if (book3.quantity != 0){
        whatsappLink+="%0A" + book3.name + "420" + book3.quantity
    }
    if (book4.quantity != 0){
        whatsappLink+="%0A" + book4.name + "420" + book4.quantity
    }
    if (book5.quantity != 0){
        whatsappLink+="%0A" + book5.name + "420" + book5.quantity
    }
    if (book6.quantity != 0){
        whatsappLink+="%0A" + book6.name + "420" + book6.quantity
    }

    if (game1.quantity != 0){
        whatsappLink+="%0A" + game1.name + "420" + game1.quantity
    }
    if (game2.quantity != 0){
        whatsappLink+="%0A" + game2.name + "420" + game2.quantity
    }
    if (game3.quantity != 0){
        whatsappLink+="%0A" + game3.name + "420" + game3.quantity
    }
    if (game4.quantity != 0){
        whatsappLink+="%0A" + game4.name + "420" + game4.quantity

     if (craft1.quantity != 0){
        whatsappLink+="%0A" + craft1.name + "420" + craft1.quantity
    }
    if (craft2.quantity != 0){
        whatsappLink+="%0A" + craft2.name + "420" + craft2.quantity
    }
    if (craft3.quantity != 0){
        whatsappLink+="%0A" + craft3.name + "420" + craft3.quantity
    }
    if (craft4.quantity != 0){
        whatsappLink+="%0A" + craft4.name + "420" + craft4.quantity
        whatsappLink+="%0A"+"Total%20Price:%20$"+finalDollars+"%20"+finalCents+"C";
}

cartButton.oneclick = () => {
updatePrice();
updateWhatsappLink();
window.open(whatsappLink, "_blank");
    };