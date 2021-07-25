


var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }];

var Netvalue=[];
var itemcount = 0;



function Totalvalue(ItemName) {
    var check = false;
    var TotalAmount=0;
    for (var i = 0; i < itemsArray.length; i++) {
        TotalAmount += itemsArray[i].price * itemsArray[i].quantity;
        if (itemsArray[i].name === ItemName) {
            var Amount = itemsArray[i].price * itemsArray[i].quantity;
            Netvalue[itemcount] = Amount;
            itemcount++;
            check = true;
            
        }
    }

    if (check) {
        console.log("The Value of " + ItemName + " is " + Amount);

    }
    else {
        console.log("Item Not Available");    
    }
    console.log("The Total Value of All item is " + TotalAmount);

}
Totalvalue("juice");