const products = [
{
name:"Laptop",
price:"₹45,000",
image:"https://via.placeholder.com/300x200?text=Laptop"
},
{
name:"Smartphone",
price:"₹20,000",
image:"https://via.placeholder.com/300x200?text=Phone"
},
{
name:"Headphones",
price:"₹2,000",
image:"https://via.placeholder.com/300x200?text=Headphones"
},
{
name:"Smart Watch",
price:"₹5,000",
image:"https://via.placeholder.com/300x200?text=Watch"
}
];

const container = document.getElementById("productContainer");

function displayProducts(items){
container.innerHTML = "";

items.forEach(product => {
container.innerHTML += `
<div class="card">
<img src="${product.image}">
<div class="card-content">
<h3>${product.name}</h3>
<p class="price">${product.price}</p>
<button>Add to Cart</button>
</div>
</div>
`;
});
}

displayProducts(products);

document.getElementById("search").addEventListener("keyup", function(){
let value = this.value.toLowerCase();

let filtered = products.filter(product =>
product.name.toLowerCase().includes(value)
);

displayProducts(filtered);
});
