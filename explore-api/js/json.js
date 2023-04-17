const user = { id: 1, name: 'Hasibul Hossain', job: 'Web Developer' };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop ={
    owner: 'Hasib',
    address: {
        street:'Bus styand road, Rajinath pur',
        city:'Kushtia',
        Country:'Bangladesh'
    },
    product: ['laptop', 'mobile', 'watch', 'bike', 'mic'],
    revenue: 50000,
    isOpen:true,
    isNew: false
};
console.log(shop);
const strShop = JSON.stringify(shop);
console.log(strShop);
const objShop = JSON.parse(strShop);
console.log(objShop);