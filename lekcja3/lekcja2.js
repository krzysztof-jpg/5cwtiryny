let products = ["mysz", "klawiatura", "procesor"]
let prices = [150, 200, 800]
let cart = []

let index;
let sum = 0;

function addToCart(product){
    cart.push(product)
    if(product == "mysz"){
        index = 0
    }else if(product == "klawiatura"){
        index = 1
    }else if(product == "procesor"){
        index = 2
    }else{
        alert("Błędny product");
    }
    return cart
}

function cartPrice(){
    sum += prices[index]
    return sum
}

function discountCode(code, cart){
    if(code == "Spr4wdzian26"){
        sum = sum - (sum*0.15)
    }
    prices[cart.length] = 0

    console.log("Suma po rabacie: ", sum)
    console.log("Koszyk po wyzerowaniu ceny", prices)
}

let cart1 = addToCart("procesor")
let finalPrice1 = parseInt(cartPrice(cart1))
let cart2 = addToCart("mysz")
let finalPrice2 = parseInt(cartPrice(cart2))

console.log(finalPrice2)

discountCode("Spr4wdzian26", cart2);