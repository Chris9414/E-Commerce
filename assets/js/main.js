const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: './assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: './assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
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


























