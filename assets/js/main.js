const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14,
      image: './assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24,
      image: './assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24,
      image: './assets/images/featured3.png',
      category: 'shirts',
      quantity: 20
    }
  ]

const btnTheme = document.getElementById( "theme-btn" )
const body = document.body
const cartBtnOpen = document.getElementById( "cart-btn")
const cartBtnClose = document.getElementById( "close-cart")
const cartContainer = document.getElementById( "cart-container")
const menuBtnOpen = document.getElementById( "menu-btn")
const menuBtnClose = document.getElementById( "menu-close")
const menuContainer = document.getElementById( "menu-container")
const darkThemeChange = () =>{
   /*if( body.classList.contains("dark") ){
    body.classList.remove("dark")
    btnTheme.classList.remove("bx-sun")
    btnTheme.classList.add("bx-moon")
  }else{
    body.classList.add("dark")
    btnTheme.classList.remove("bx-moon")
    btnTheme.classList.add("bx-sun")
  }*/
  
  if(btnTheme.classList.contains("bx-moon")){
    btnTheme.classList.replace("bx-moon","bx-sun")
  }else{
    btnTheme.classList.replace("bx-sun","bx-moon")
  }
  body.classList.toggle("dark")
}


btnTheme.addEventListener( "click", e => darkThemeChange())

cartBtnOpen.addEventListener( "click", e => cartContainer.classList.remove("hide"))

cartBtnClose.addEventListener( "click", e => cartContainer.classList.add("hide"))

menuBtnOpen.addEventListener( "click", e => menuContainer.classList.remove("hide"))

menuBtnClose.addEventListener( "click", e => menuContainer.classList.add("hide"))

const headerContainer = document.createElement("header")
headerContainer.classList.add("header-container")

let productFrontIndex = 2

const productFrontDetails = document.createElement("article")
productFrontDetails.classList.add("product-front-details")

const productFrontContainerImg = document.createElement("div")
productFrontContainerImg.classList.add("product-front-container-img")

const productFrontTitle = document.createElement("h1")
productFrontTitle.classList.add("product-front-title")
productFrontTitle.textContent = `New Sweatshirt COLLECTIONS 2022`

const productFrontDescription = document.createElement("p")
productFrontDescription.classList.add("product-front-description")
productFrontDescription.textContent = "Latest arrival of the new Hanes Midweight Crewneck sweatshirt imported from 2022 series, with a modern design."

const productFrontPrice = document.createElement("p")
productFrontPrice.classList.add("product-front-price")
productFrontPrice.textContent = `$14.00`

const productAddContainer = document.createElement("div")
productAddContainer.classList.add("product-Add-Container")

const productFrontImg = document.createElement("img")
productFrontImg.src = "./assets/images/home.png"
productFrontImg.classList.add("product-front-img")

const productButton1 = document.createElement("button")
productButton1.classList.add("product-button1")
productButton1.textContent = "Discover"

const productButton2 = document.createElement("button")
productButton2.classList.add("product-button2")
productButton2.textContent = "ADD TO CART"

productAddContainer.appendChild(productButton1)
productAddContainer.appendChild(productButton2)

productFrontDetails.appendChild(productFrontTitle)
productFrontDetails.appendChild(productFrontDescription)
productFrontDetails.appendChild(productFrontPrice)
productFrontDetails.appendChild(productAddContainer)
productFrontContainerImg.appendChild(productFrontImg)

headerContainer.appendChild(productFrontContainerImg)
headerContainer.appendChild(productFrontDetails)

body.appendChild(headerContainer)

const nav = document.querySelector("nav")

window.addEventListener( "scroll", () => {
  if(scrollY > 58 ){
    nav.classList.add("scroll-bg")
  }else{
    nav.classList.remove("scroll-bg")
  }
})

const sectionProductContainer = document.createElement("div")
sectionProductContainer.classList.add("section-product-container")
body.appendChild(sectionProductContainer)

let cart = []
const cartCounter = document.getElementById("cart-counter")
const cartUnits = document.getElementById("cart-units")
const cartTotal = document.getElementById("cart-total")


function itemProduct (item){

  const productContainer = document.createElement("div")
  productContainer.classList.add("product-container")

const productContainerImg = document.createElement("div")
productContainerImg.classList.add("product-container-img")

const productContainerData = document.createElement("div")
productContainerData.classList.add("product-container-data")

const imgProduct = document.createElement("img")
imgProduct.classList.add("img-product")
imgProduct.src = item.image

const productPrice = document.createElement("h2")
productPrice.textContent = `$${item.price}.00 `
productPrice.classList.add("product-price")

const productStock = document.createElement("span")
productStock.textContent = `Stock: ${item.quantity}`
productStock.classList.add("product-stock")

const productName = document.createElement("h3")
productName.textContent = item.name
productName.classList.add("product-name")

const addItem = document.createElement("buttom")
addItem.classList.add("add-item")

const plus = document.createElement("i")
plus.classList.add("bx" , "bx-plus")

const productId = item.id

addItem.addEventListener( "click", e => {
  addProduct(productId)
  
})


addItem.appendChild(plus)
productContainerData.appendChild(addItem) 
productPrice.appendChild(productStock)
productContainerData.appendChild(productPrice)
productContainerData.appendChild(productName)
productContainerImg.appendChild(imgProduct)
productContainer.appendChild(productContainerImg)
productContainer.appendChild(productContainerData)
sectionProductContainer.appendChild(productContainer)
}

for ( let item of items){
  itemProduct (item)
}



function addProduct( itemId ){
  let productSelected = cart.find(product => product.id === itemId)


  if(productSelected){
    let index = cart.indexOf(productSelected)
    if(productSelected.quantitySelected < cart[index].quantity){
    cart[index].quantitySelected++
    }else{
      "Has alcanzado el numero maximo de unidades disponibles"
    }
  }else{
    const item = items.find( item => item.id === itemId)
    item.quantitySelected = 1
    cart.push(item)
  }


  const cartItemsContainer = document.getElementById("cart-items-container")

  cartItemsContainer.innerHTML = ""

  for ( let item of cart){
    showProducts(item)
  }
  
  for (let item of cart){
  cartShoping(cart)
  }
  
  
}

  

function cartShoping(cart){
  const cartItemsContainer = document.getElementById("cart-items-container")
  const totalCart = document.getElementById("total-cart")

  let counter = 0
  let counterTotal = 0
  let counterSubTotal = 0

  
  function counterFunction (cart){
    let counterFinal = 0
    for (let item of cart){
    counterFinal += item.quantitySelected 
    }
    return counterFinal
    }

    let counterFinal = counterFunction(cart)

    for( let item of cart){
      counterSubTotal = item.quantitySelected*item.price
      counter += item.quantitySelected  
      counterTotal += counterSubTotal 
      cartCounter.textContent = counter  
      cartUnits.textContent = `Unidades: ${counter}`
      cartTotal.textContent = `Total: $${counterTotal}.00`
    
      if(counterFinal < 1){
        cartItemsContainer.innerHTML = 
        `<div id="cart-items-container">
        <img src="./assets/images/empty-cart.png" alt="" class="empty-cart">
        <h2 class="empty-title">Your cart is empty</h2>
        <p class="empty-p">
        You can add items to your cart by clicking on the "+" button on the product page.
        </p> `
        cartUnits.textContent = ""
        cartTotal.textContent = ""
      
        }
    }
}

const cartItemsContainer = document.getElementById("cart-items-container")

function showProducts (item){

  const cardCart = document.createElement("article")
  cardCart.classList.add("card-cart")

  const cardCartImgBox =document.createElement("div")
  cardCartImgBox.classList.add("card-cart-img-box")

  const cardCartImg = document.createElement("img")
  cardCartImg.classList.add("card-cart-img")
  cardCartImg.src = item.image

  const cardDetails = document.createElement("div")
  cardDetails.classList.add("card-details")

  const cardTitle = document.createElement("h3")
  cardTitle.classList.add("card-title")
  cardTitle.textContent = item.name

  const cardStock = document.createElement("span")
  cardStock.classList.add("card-stock")
  cardStock.textContent = `Stock: ${item.quantity}`

  const cardStockPrice = document.createElement("span")
  cardStockPrice.classList.add("card-stock-price")
  cardStockPrice.textContent = `$${item.price}.00 `

  const cardSubtotal = document.createElement("span")
  cardSubtotal.classList.add("card-subtotal")
  cardSubtotal.textContent = `Subtotal: $${(item.price*item.quantitySelected)}.00 `

  const cardTotal = document.createElement("div")
  cardTotal.classList.add("card-total")

  const cardTotalItems = document.createElement("div")
  cardTotalItems.classList.add("card-total-items")

  const cardTotalUnits = document.createElement("span")
  cardTotalUnits.classList.add("card-total-units")
  cardTotalUnits.textContent = ` ${item.quantitySelected} units `
  const minusUnitBox =document.createElement("div")
  minusUnitBox.classList.add("unit-box")

  const minusUnit = document.createElement("i")
  minusUnit.classList.add("bx","bx-minus")

  const plusUnitBox =document.createElement("div")
  plusUnitBox.classList.add("unit-box")

  const plusUnit = document.createElement("i")
  plusUnit.classList.add("bx","bx-plus")

  const trashUnit = document.createElement("i")
  trashUnit.classList.add("bx","bx-trash-alt")

  minusUnitBox.appendChild(minusUnit)
  plusUnitBox.appendChild(plusUnit)
  
  cardTotalItems.appendChild(minusUnitBox)
  cardTotalItems.appendChild(cardTotalUnits)
  cardTotalItems.appendChild(plusUnitBox)
  
  cardTotal.appendChild(cardTotalItems)
  cardTotal.appendChild(trashUnit)

  cardStock.appendChild(cardStockPrice)

  cardDetails.appendChild(cardTitle)
  cardDetails.appendChild(cardStock)
  cardDetails.appendChild(cardSubtotal)
  cardDetails.appendChild(cardTotal)

  cardCartImgBox.appendChild(cardCartImg)

  cardCart.appendChild(cardCartImgBox)
  cardCart.appendChild(cardDetails)

  if(item.quantitySelected > 0){
  cartItemsContainer.appendChild(cardCart)
  }

  plusUnit.addEventListener("click", e =>{
    if(item.quantitySelected < item.quantity){
    item.quantitySelected++
    cardTotalUnits.textContent = ` ${item.quantitySelected} units `
    }else{
      "Has alcanzado el numero maximo de unidades disponibles"
    }

    cartShoping(cart)
    cardSubtotal.textContent = `Subtotal: $${(item.price*item.quantitySelected)}.00 `
    window.localStorage.setItem( "cart", JSON.stringify(cart))

    
  })

  minusUnit.addEventListener("click", e =>{
    if(item.quantitySelected > 1 ){
      item.quantitySelected--
    cardTotalUnits.textContent = ` ${item.quantitySelected} units `
    }else{
      item.quantitySelected = 0
      cartItemsContainer.removeChild(cardCart) 
    }

    cartShoping(cart)
    cardSubtotal.textContent = `Subtotal: $${(item.price*item.quantitySelected)}.00 `
    window.localStorage.setItem( "cart", JSON.stringify(cart))

  })

  trashUnit.addEventListener("click", e =>{
    cartItemsContainer.removeChild(cardCart) 
    item.quantitySelected = 0
    
  cartShoping(cart)
  window.localStorage.setItem( "cart", JSON.stringify(cart))

  })

  window.localStorage.setItem( "cart", JSON.stringify(cart))
}

cart = JSON.parse(window.localStorage.getItem("cart"))

function counterDataStorage (cart){
  let finalDataStorage = 0
  for (let item of cart){
  finalDataStorage += item.quantitySelected 
  }
  return finalDataStorage
}
let counterSubTotal = 0
let counterTotal = 0
let abcd = counterDataStorage(cart)
  cartCounter.textContent = abcd
if(abcd > 0){
  cartItemsContainer.innerHTML = ""
for (let item of cart){
  showProducts(item)
  counterSubTotal = item.quantitySelected*item.price
  console.log(counterSubTotal)
  counterTotal += counterSubTotal
  console.log(counterTotal)
  }
  cartUnits.textContent = `Unidades: ${abcd}`
  cartTotal.textContent = `Total: $${counterTotal}.00`
}




























