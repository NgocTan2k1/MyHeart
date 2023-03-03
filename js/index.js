var elementImg = document.getElementById("item-img")
elementImg.innerHTML = `<img class="item" onclick="clickChangeImgMyLove()" src="./img/0.jpg" alt="">`;

var elementClick = document.getElementById("btn-click");


var array = [];
var numberRandom;

function clickToReset() {
    elementImg.innerHTML = `<img class="item" onclick="clickChangeImgMyLove()" src="./img/0.jpg" alt="">`;
    elementClick.innerHTML = ``;
    array = [];
}

function clickChangeImgMyLove() {
    if(array.length == 23) {
        elementImg.innerHTML = `
            <img class="item" src="./img/24.jpg" onclick="clickChangeImgMyLove()" alt="">
            <p class="text">Hết rồi bé ơi, còn đâu nữa mà coi!!!</p>
        `;
        if(array.length >= 23) {
            array.push(numberRandom);
        }

    } else {
        if (array.length == 24) {
            elementImg.innerHTML = `
            <img class="item" onclick="clickChangeImgMyLove()" src="./img/25.jpg" alt="">
            <p class="text">Đã bảo với bé là hết rồi mà :v</p>
            
            `;

            elementClick.innerHTML = `
            <button onclick="clickToReset()" class="click">
                <i class="fa-regular fa-heart"></i>
            </button>
            <p class="text">Click zô trái tym tui mà xem típ nè</p>
            `;
        } else {
            // check
            // console.log("length array: ", array.length);
    
            numberRandom = Math.floor(Math.random() * 23) + 1;
            // check
            // console.log("numberRandom: ", numberRandom);
            
    
            while(true) {
                if(array.find(e => e == numberRandom)) {
                    numberRandom = Math.floor(Math.random() * 23) + 1;
                    // check
                    // console.log("numberRandom: ", numberRandom);
                    // console.log("length array: ", array.length);
                } else {
                    array.push(numberRandom);
                    break;
                }
            }
            console.log(numberRandom);
            console.log(array)
            elementImg.innerHTML = `<img class="item" onclick="clickChangeImgMyLove()" src="./img/${numberRandom}.jpg" alt="">`;
            
            // console.log(document.getElementById("item-img"));
        }
    }
}


