let budget = prompt('Ваш бюджет?');

let nameShop = prompt('Название вашего магазина?');

let mainList = {
    budget,
    nameShop,
    shopGoods: [],
    employers: {},
    open: false
}

mainList.shopGoods[0] = prompt('Какой тип товаров будем продавать?'); 
mainList.shopGoods[1] = prompt('Какой тип товаров будем продавать?'); 
mainList.shopGoods[2] = prompt('Какой тип товаров будем продавать?'); 

alert(mainList.budget / 30);

console.log(mainList);
