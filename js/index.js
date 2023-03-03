document.getElementById("item-img").innerHTML = `<img class="item" onclick="clickChangeImgMyLove()" src="./img/0.jpg" alt="">`;
var array = [];
var numberRandom;

function clickChangeImgMyLove() {
    if(array.length == 25) {
        array = [];
    }
    // check
    // console.log("length array: ", array.length);

    numberRandom = Math.floor(Math.random() * 25);
    // check
    // console.log("numberRandom: ", numberRandom);
    

    while(true) {
        if(array.find(e => e == numberRandom) || array.find(e => e == numberRandom) == 0) {
            numberRandom = Math.floor(Math.random() * 6);
            // check
            // console.log("numberRandom: ", numberRandom);
            // console.log("length array: ", array.length);
        } else {
            array.push(numberRandom);
            break;
        }
    }
    console.log(numberRandom);
    document.getElementById("item-img").innerHTML = `<img class="item" onclick="clickChangeImgMyLove()" src="./img/${numberRandom}.jpg" alt="">`;
    console.log(document.getElementById("item-img"));
}


