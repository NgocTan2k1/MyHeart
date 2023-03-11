var elementImg = document.getElementById("item-img");
elementImg.innerHTML = `
    <img class="item" onclick="clickStart()" src="./img/0.jpg" alt="">
    <p class="text">Click vô ảnh mà xem cái bạn xinh xinh này tiếp nè ^^</p>
`;

var elementClick = document.getElementById("btn-click");
var elementAudio = document.getElementById("audioMusic");

var array = [];
var numberRandom;

function clickStart() {
    if(!elementAudio.isPlaying) {
        clickOnAudio();
    }
    clickChangeImgMyLove();
}

function clickToReset() {
    elementImg.innerHTML = `<img class="item" onclick="clickStart()" src="./img/0.jpg" alt="">`;
    elementClick.innerHTML = ``;
    array = [];
}

function clickOnAudio() {
    elementAudio.play();
}

function clickChangeImgMyLove() {
    if(array.length == 27) {
        elementImg.innerHTML = `
            <img class="item" src="./img/28.jpg" onclick="clickChangeImgMyLove()" alt="">
            <p class="text">Hết rồi bé ơi, còn đâu nữa mà coi!!!</p>
        `;
        if(array.length >= 27) {
            array.push(numberRandom);
        }

    } else {
        if (array.length == 28) {
            elementImg.innerHTML = `
            <img class="item" onclick="clickChangeImgMyLove()" src="./img/26.jpg" alt="">
            <p class="text">Đã bảo với bé là hết rồi mà :v</p>
            
            `;
            setTimeout(() => {
                elementClick.innerHTML = `
                    <button onclick="clickToReset()" class="click">
                        <i class="fa-regular fa-heart"></i>
                    </button>
                    <p class="text">Click zô trái tym tui mà xem típ nè</p>
                `;
            }, 3000);
            
        } else {
            // check
            // console.log("length array: ", array.length);
    
            numberRandom = Math.floor(Math.random() * 24) + 1;
            
            // check
            // console.log("numberRandom: ", numberRandom);
            
    
            while(true) {
                if(array.find(e => e == numberRandom)) {
                    numberRandom = Math.floor(Math.random() * 24) + 1;
                    // check
                    // console.log("numberRandom: ", numberRandom);
                    // console.log("length array: ", array.length);
                } else {
                    array.push(numberRandom);
                    break;
                }
            }
            // console.log(numberRandom);
            // console.log(array)
            elementImg.innerHTML = `<img class="item" onclick="clickChangeImgMyLove()" src="./img/${numberRandom}.jpg" alt="">`;
            
            // console.log(document.getElementById("item-img"));
        }
    }
}


