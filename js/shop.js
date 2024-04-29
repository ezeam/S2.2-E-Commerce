// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [{quantity: 2, id: 9, name: 'Toddler Frock', price: 9.99, type: 'clothes'}, {quantity: 1, id: 7, name: 'Lawn Dress', price: 15, 
type: 'clothes'}, {quantity: 4, id: 6, name: 'Lip Tints', price: 12.75, type: 'beauty'}, {quantity: 3, id: 1, name: 'cooking oil', price: 10.5,
type: 'grocery', offer: {number: 3, percent: 20}}, {quantity: 11, id: 3, name: 'Instant cupcake mixture', price: 5, type: 'grocery',offer: {
number: 10, percent: 30}}];
/*Datos de prueba {quantity: 2, id: 9, name: 'Toddler Frock', price: 9.99, type: 'clothes'}, {quantity: 1, id: 7, name: 'Lawn Dress', price: 15, 
type: 'clothes'}, {quantity: 4, id: 6, name: 'Lip Tints', price: 12.75, type: 'beauty'}, {quantity: 3, id: 1, name: 'cooking oil', price: 10.5,
type: 'grocery', offer: {number: 3, percent: 20}}, {quantity: 11, id: 3, name: 'Instant cupcake mixture', price: 5, type: 'grocery',offer: {
number: 10, percent: 30}} 
*/
var total = 0;
var totalCartQuantity = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    let found = products.find(product => product.id === id);
    //console.log("Objeto que queremos añadir al carrito: ", found);
    // 2. Add found product to the cart array
    let indice = cart.findIndex((producto) => producto.id == id);
    if(indice == -1){
        //console.log("NO he encontrado un objeto con el mismo id en cart");
        found = Object.assign({quantity: 1}, found);
        //console.log("Objeto con la quantity añadida", found);
        cart.push(found);
        console.log("Array cart con quantity", cart);
    }else{        
        cart[indice].quantity++;
        //console.log("He encontrado un objeto con el mismo id en cart", cart);
    }  
}

// Exercise 2
function cleanCart() {
    cart.length = 0;
    total = 0;
    document.getElementById("cart_list").innerHTML = '';
    document.getElementById('total_price').textContent = 0;
    document.getElementById('count_product').textContent = totalCartQuantity;
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let total = cart.reduce((acumulador, producto) => acumulador + producto.price, 0);
    return total; 
}
//console.log(calculateTotal());

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    let subtotalWithDiscount = 0;
    for (let i = 0; i < cart.length; i++){
        //console.log(cart[i]);
        if(cart[i].id == 1 && cart[i].quantity >= 3){
            subtotalWithDiscount = (cart[i].price) * cart[i].quantity * 0.20;
            console.log("Primer if", subtotalWithDiscount);
        }
        if(cart[i].id == 3 && cart[i].quantity >= 10){
            subtotalWithDiscount = (cart[i].price) * cart[i].quantity * 0.30;
            console.log("Segundo if",subtotalWithDiscount);
        }
    }    
}
applyPromotionsCart();

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}


//Custom functions

function updateCountProduct() {
    document.getElementById('count_product').textContent = totalCartQuantity;
  }