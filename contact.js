let gName, fName, pCode;
let contactDb = [];
class Contact{
    constructor(givenName, familyName, postal){
        this.givenName = givenName;
        this.familyName = familyName;
        this.postal = postal;

    }

}


    
let c1 =new Contact('Shoukie', 'MB', 1111);
let c2 = new Contact('Hajar', 'FR', 1144);
contactDb.push(c1);
contactDb.push(c2);
for (let i = 0; i < contactDb.length ; i++){
document.body.innerHTML += `<div>Given Name: ${contactDb[i].givenName} --------- Family Name: ${contactDb[i].familyName}----------------  Postal Code: ${contactDb[i].postal}</div>`;
}


function addContact(){
    gName =document.querySelector('#Given').value;
    alert(gName);
}

document.querySelector('#addInfo').addEventListener('click', function(evt){
    addContact();
});






//----------------------------------------------------------------------------------------//





/* class Hero{
    constructor(name, side){
        this.name = name;
        this.side = side;
        Hero.numberHeroes ++;
    }
    speak(){
            return `<p>My name is ${this.name} and I am a ${this.side}. </p>`;
        }
    
}

Hero.numberHeroes = 0;


let vedar = new Hero("Dark Vedar", "Empire");
let shoukie = new Hero("SHoukie", "Emperor"); 





document.body.innerHTML += `<p>${vedar.speak()}</p>`;
document.body.innerHTML += `<p>${ shoukie.speak()}</p>`;
document.body.innerHTML += `<p>${Hero.numberHeroes}</p>`;

let det = document.querySelector('.details');
function updateContent(hero) {
    det.innerHTML = `My name is ${hero.name} and I am the ${hero.side}`;
}

det.addEventListener('click', function(evt){
    updateContent(shoukie);
});


//-----------------------------------------------------------------------------//

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        Point.nbPoints++;
    }

    static distance(a, b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt(dx*dx + dy*dy);
    }

}
Point.nbPoints = 0;

let p1 = new Point(5, 3);
let p2 = new Point(7, 6);
let p3 = new Point(-2, 5);

let dist = Point.distance(p1, p2);

document.body.innerHTML += `<p>The distance between (${p1.x}, ${p2.y}) and (${p2.x}, ${p2.y}) = ${dist} metres ${Point.nbPoints}</p>`;
 */




