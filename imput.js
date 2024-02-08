
// *** বড় সংখ্যা বা ছোট সংখ্যা বের করার নিয়ম***** video --22.1 //


// ** যদি দুইজন থাকে যে বেশি পাইছে তার মার্ক বের করে চাই তার হিসাব ***
const Salman =85;
const Rafi =87;
if(Salman > Rafi){
    console.log('Salman This is a top boy')
}
else {
    console.log('Rafi This is a top boy')
}
// *********************************

// **যদি তিনজন থাকে যে বেশি পাইছে তার মার্ক বের করে চাই তার হিসাব ***

const Rayhan =92;
const Shihab =90;
const Najim =91;

if(Rayhan > Shihab && Rayhan > Najim){
    console.log('Rayhan is a top boy')
}
else if(Shihab > Rayhan && Shihab > Najim){
    console.log('Shihan is a top boy')
}
else {
    console.log('Najim is a top boy')
}
// **************************************

// *** শটকাট নিয়ম *****

const Rabbi = 50;
const Najim = 66;
const Rakib = 90;

const max =Math.max(Rabbi, Najim, Rakib);
console.log('This is a yop boy', max)

// -------------------------------------------------------------------------------------------;

// **যদি একটা এরের ভিতর বড় , ছোট সংখ্যা বের করতে চাই তাহলে  গুরুত নিয়েম ** video--22.2***//

// এরের ভিতর বড় সংখ্যা বের করার নিয়েম ****// 

// const heinght = [50, 60, 70, 72, 75, 78, 79, 60, 90, 95, 80, 56, 93];

function Rabbi(Nambar){
    let Najim = Nambar[0];
    for(const nam of Nambar){
        if(nam > Najim){
            Najim = nam;
        }
    }
    return Najim;
}
const Shihab =Rabbi(heinght);
console.log('this is a heinght boy', Shihab)

// ***********************************

// **এরের ভিতর ছোট সংখ্যা বের করার নিয়েম ****//

// const shot =[90, 80, 75, 56, 60, 65, 69, 89, 86, 36, 59, 68];

function Rayhan(nambar){
    let Chabbir=nambar[0];
    for(const Nam of nambar){
        if(Nam < Chabbir){
            Chabbir = Nam;
        }
    }
    return Chabbir;
}

const Rafi = Rayhan(shot)
console.log('This is a shot boy', Rafi)

// ------------------------------------------------------------------------------------------------------;

// *** গুন করে জানতে পারি তার হিসাব টেবিল বেট চিয়ার তার হিসাব **video--22.3 ****

// ** ১ম সাট পেট জুতা তার হিসাব ****

function Rabbi(Sat, pet, sou, juta){
    const satPrice =500;
    const petPrice =600;
    const souPirce =1000;
    const jutaPrice =200;

    const Rakib = Sat*satPrice;
    const Rayhan =pet*petPrice;
    const Shihab =sou*souPirce;
    const Rafi =juta*jutaPrice;
    
    const TotalPrice =Rakib + Rayhan + Shihab + Rafi;
    return TotalPrice;
}
const wood =Rabbi(3,0,0,0);
console.log('This is a Totalptice', wood)



// ২য় কাছা মাল হিসাব**** 

function Rabbi(peyaj, alu, dail){
    const peyajPrice =100;
    const aluPrice =50;
    const dailPirce =200;

    const Rakib = peyaj*peyajPrice;
    const Rayhan =alu*aluPrice;
    const Shihab =dail*dailPirce;
    
    const TotalPrice =Rakib + Rayhan + Shihab;
    return TotalPrice;
}
const wood =Rabbi(3, 2, 1);
console.log('This is a Totalptice', wood)

// --------------------------------------------------------------------------------------------------------;

// **** একটা এরের ভিতর থেকে যদি ছোট সংখ্যা বা নাম বা অনেক গুলো এরের ভিতের থেকে একটা এরে বের করার হিসাব **video--22.4***

// **এরের ভিতর ছোট সংখ্যা বের করার নিয়েম ****//

// const shot =[20000, 50000, 30000, 10000, 40000];

function Rayhan(nambar){
    let Chabbir=nambar[0];
    for(const Nam of nambar){
        if(Nam < Chabbir){
            Chabbir = Nam;
        }
    }
    return Chabbir;
}

const Rafi = Rayhan(shot)
console.log('This is a shot boy', Rafi);

// *********************************************

// *** অনেক গুলো এরের ভিতর যদি ছোট এরের দাম বের করতে চাই তার হিসাব***

const mobail =[
    {name: 'Walton', price: 20000, cemera: '12mpx', color: 'red'},
    {name: 'Vivo', price: 30000, cemerra: '10mpx', color:'black',}
]

function Rabbi (mobail){
    const min =mobail[0];
    for(const dam of mobail){
        if(dam < min ){
            min = dam;
        }
    }
 return min;
}

const Rakib =Rabbi(mobail);
console.log('This is a price', Rakib)

// -------------------------------------------------------------------------------------------------------;

// ***** এরের ভিতর থেকে দাম বের করে আবার মোট যোগ ফল বের করে তার হিসাব *** vidoe --22.5***//

const sob =[
    {name:'saban', price: 50, quantity:2 },
    {name:'chironi', price: 100, quantity: 2 },
    {name:'sempu', price: 150, quantity:4 },
    {name:'shari', price: 200, quantity:2 }
]

function Rabbi(sob){
    let total=0;
    for(const nam of sob){
        const totalDam= nam.price * nam.quantity;
        total=total+totalDam;
    }
    return total;
}

const Rayhan =Rabbi(sob)
console.log(Rayhan)

// -------------------------------------------------------------------------------------------------------;

// **** discaound বা ছাড় হিসাব  *** video--22.6***///

function discount (Rayhan){
    if(Rayhan <= 100){
        const total = Rayhan * 100;
        return total;
    }
    else if(Rayhan <=200){
        const total = Rayhan *90;
        return total;
    }
    else {
        const total = Rayhan * 70;
        return total;
    }
}

const Rabbi = discount(5);
// console.log(Rabbi)

// *************************************

function Rafi(discount){
    if(discount >= 100){
        const Total = discount*100;
        return Total;
    }
    else if(discount >= 200){
        const Total =discount*90;
        return Total;
    }
    else {
        const Total = discount*70;
        return Total;
    }
}

const Rabbi=Rafi(10);
console.log(Rabbi)

// --------------------------------------------------------------------------------------------------------;

// যোগ বিয়োগ গুন ভাগ করার হিসাব ***video--22.7***//

function jog(nam1,nam2){
    return nam1+nam2;
}

function biog(nam1,nam2){
    return nam1-nam2;
}
function gun(nam1,nam2){
    return nam1*nam2;
}
function vag(nam1,nam2){
    return nam1/nam2;
}

function Rabbi(a,b, operation){
    if(operation === 'jog'){
        const Rakib =jog(a,b);
        return Rakib;
    }
    else if(operation === 'biog'){
        const Rakib = biog(a,b);
        return Rakib;
    }
    else if(operation === 'gun'){
        const Rakib = gun(a,b);
        return Rakib;
    }
    else if(operation ==='vag'){
        return vag(a,b);
    }
    else {
        return " only 'jog', 'biog', 'gun', 'vag'."
    }
}

const Rafi= Rabbi(5, 7, 'gun', 'jog');
console.log(Rafi);

// ---------------------------------------------------------------------------------------------------------;

