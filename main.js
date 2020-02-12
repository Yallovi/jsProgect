let budget = prompt('Ваш бюджет?');
let nameShop = prompt('Название вашего магазина?');
let time = 13;

let mainList = {
    budget,
    nameShop,
    shopGoods: [],
    employers: {},
    open: false
};

for (let i = 0; i < 5; i++) {

    let a = prompt('Какой тип товаров будем продавать?');
    mainList.shopGoods[i] = a;
    if ((typeof(a)) === 'string' && (typeof(a)) === null && a != '' && a.length < 50) {
        console.log('Все верно!');
     }  else{
            i = i - 1;
     }
    
};

if (time < 0) {
    console.log('Такого не может быть!');
}
    else if (time > 8 && time < 20 ){
        console.log('Время работать!');
    } 
    else if (time < 24 ) {
        console.log('Уже слишком поздно!');
    }
    else {
        console.log('В сутках только 24 часа');
        
    };



alert(mainList.budget / 30);

console.log(mainList);
