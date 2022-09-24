const products = [
    {tittle: 'Pizza', price: 121, id: '🍕'},
    {tittle: 'Burguer', price: 121, id: '🍔'},
    {title: 'Hot cakes', price: 121, id: '🥞' }
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productIndex = products.findIndex(item => item.id === '🍔');
if(productIndex !== -1) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//***************************************************************************************/
//UPDATE
const productsV2 = [
    {tittle: 'Pizza', price: 121, id: '🍕'},
    {tittle: 'Burguer', price: 121, id: '🍔'},
    {title: 'Hot cakes', price: 121, id: '🥞' }
];

const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'delicioso'
    } 
}

const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...update.changes
};
console.log(productsV2);