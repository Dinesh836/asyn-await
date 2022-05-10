console.log('p1:shows ticket');
console.log('p2:shows ticket');
const preMovie=async () => {
    const WBtickets=new Promise((resolve , reject ) =>{
        setTimeout(() => {
           resolve('tickets');
        } ,3000)
    });
    const getPopCorn=new Promise((resolve , reject )=> resolve('popcorn'));
    const getButter=new Promise((resolve , reject )=> resolve('butter'));
    const getColDrink=new Promise((resolve , reject )=> resolve('coldriink'));



    let ticket=await WBtickets;

    console.log('husband: lets go in ');
    console.log('sife: no i am hungry');

    let popcorn =await getPopCorn;

    console.log('husband: we have popcorn now')
    console.log('husband: lets go in now ');
    console.log('sife: no i need butter on popcorn');

    let butter=await getButter;
    console.log('husband: we have Buutter now')
    console.log('husband: lets go in now ');
    console.log('wife: no i need colddrink ');

    let coldrink=await getColDrink;
    
    return ticket;
};
preMovie().then((m) => console.log(m)); 
console.log('p4:shows ticket');
console.log('p5:shows ticket');