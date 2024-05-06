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
var cart = [];
var totalCartQuantity = 0;

const listaCompra = document.getElementById('cart_list');
const total_price = document.getElementById('total_price');
const count_product = document.getElementById('count_product');

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    let found = products.find(product => product.id === id);
    
    // 2. Add found product to the cart array
    let indice = cart.findIndex((producto) => producto.id == id);
    if(indice == -1){
        found = Object.assign({quantity: 1}, found);
        cart.push(found);
    }else{        
        cart[indice].quantity++;
    }  
    applyPromotionsCart(cart);
    count_product.innerText = `${cart.length}`;
}

// Exercise 2
function cleanCart() {
    cart.length = 0;
    listaCompra.innerHTML = ``;
    total_price.innerText = `0`;
    count_product.innerText = `0`;
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let total = 0;
    applyPromotionsCart(cart);
    cart.forEach(productInCart => {        
        total += productInCart.quantity * productInCart.price;
    });

    return total; 
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (let i = 0; i < cart.length; i++){
        let product = products.find(product => product.id == cart[i].id);
        if(product.offer && cart[i].quantity >= product.offer.number){
            let discountedPrice = product.price - (product.price * (product.offer.percent / 100));
            cart[i].price = discountedPrice;
        }else{
            cart[i].price = cart[i].price;
        }
    }    
}
//applyPromotionsCart();

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    listaCompra.innerHTML= '';
    total_price.innerText= '';

    let cartList = document.getElementById("cart_list");
    cartList.innerHTML = ''; 

    cart.forEach(product => {
        let subtotal = product.price * product.quantity;
        let row = cartList.insertRow();

        let cellName = row.insertCell(0);
        cellName.textContent = product.name;

        let cellPrice = row.insertCell(1);
        cellPrice.textContent = product.price;

        let cellQuantity = row.insertCell(2);
        cellQuantity.textContent = product.quantity;

        let cellTotal = row.insertCell(3);
        cellTotal.textContent = `${subtotal.toFixed(2)}`;
    });

    let totalCart = calculateTotal();
    document.getElementById("total_price").innerHTML = totalCart.toFixed(2);
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    let indiceProd = cart.findIndex((prod) => prod.id === id);

    if(indiceProd != -1){
        if(cart[indiceProd].quantity > 1){
            cart[indiceProd].quantity--;
        }
        else if(cart[indiceProd].offer && cart[indiceProd].offer.number > cart[indiceProd].quantity){
            count_product--;
        }
        else{
            cart.splice(indiceProd, 1);
        }
    }
}

function open_modal() {
    printCart();
}


/*Custom functions

function updateCountProduct() {
    document.getElementById('count_product').textContent = totalCartQuantity;
  }*/




