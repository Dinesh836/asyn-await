console.log('p1:shows ticket');
console.log('p2:shows ticket');
const WBtickets=new Promise((resolve , reject ) =>{
    setTimeout(() => {
       resolve('tickets');
    } ,3000)
});
const getPopCorn=WBtickets.then((t) =>{
    console.log('husband: lets go in ');
    console.log('sife: no i am hungry');
    return new Promise((resolve , reject) => resolve(`${t} popcorn`));
});
const getButter=getPopCorn.then((t) =>{
    console.log('husband: we have popcorn now')
    console.log('husband: lets go in now ');
    console.log('sife: no i need butter on popcorn');
    return new Promise((resolve , reject) => resolve(`${t} Butter `));
});
const getColDrink=getButter.then((t)=>{
    console.log('husband: we have Buutter now')
    console.log('husband: lets go in now ');
    console.log('wife: no i need colddrink ');
    return new Promise((resolve , reject) => resolve(`${t} colddrink `));
});
getColDrink.then((t) => console.log(t) );
console.log('p4:shows ticket');
console.log('p5:shows ticket');

