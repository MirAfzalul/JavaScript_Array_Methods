//Filter Method//
const items =[
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000},
    {name: 'Keyboard', price:25},
]
const filteredItems=items.filter((item)=>{
    return item.price<=100;
})
console.log(items);
//console.log(filteredItems);
//Map Method//
const itemNames=items.map((item)=>{
    return item.price;
})
//console.log(itemNames);

//Find Method//
const itemFind=items.find((item)=>{
    return item.name==='Book';
})
//console.log(itemFind);

// Foreach method//
items.forEach((item)=>{
  //  console.log(item.name);
})
const hasInexpensiveItems=items.some((item)=>{
    return item.price<=100;
})
//console.log(hasInexpensiveItems); 
//Every method
const everyItems=items.every((item)=>{
    return item.price<=1000;
})
//console.log(everyItems);

const total=items.reduce((currentTotal, item)=>{
    return item.price + currentTotal;
},0)
console.log(total);