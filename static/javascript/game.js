initGame();

function initGame() {
    selectField();
    // Your game can start here, but define separate functions, don't write everything in here :)
    moveHead();

}

function borderControl(){
    //prevent illegal emigration
    let sHead = document.getElementsByClassName("snake_place");
    if(sHead[0].offsetTop > 780){alert("Illegal border crossing!")}
    if(sHead[0].offsetTop < 20){alert("Illegal border crossing!")};
    if(sHead[0].offsetLeft < 18){alert("Illegal border crossing!")};
    if(sHead[0].offsetLeft > 1258){alert("Illegal border crossing!")};

    sHead[0].offsetLeft

}

function moveHead() {
    // add event listener
    let bodySnatcher = document.querySelector('body');
    let sHead = document.getElementsByClassName("snake_place");
    console.log(sHead);

    let rowCoordinate = sHead.item(0).getAttribute("data-row")
    let columnCoordinate = sHead.item(0).getAttribute("data-col");
    console.log(rowCoordinate, columnCoordinate);

    bodySnatcher.addEventListener('keydown', function (e) {
        // e = e || window.e;


        if (e.keyCode === 38) {
            // up arrow
            console.log("up!");
            console.log(sHead);
            console.log(sHead[0].offsetTop);
            let snakeLocation = sHead[0].offsetTop;
            sHead[0].style.top = (snakeLocation - 40) + "px";
            borderControl()
        } else if (e.keyCode === 40) {
            // down arrow
            console.log("down!");
            let snakeLocation = sHead[0].offsetTop;
            sHead[0].style.top = (snakeLocation + 40) + "px";
            borderControl()

        } else if (e.keyCode === 37) {
            // left arrow
            console.log("left!");
            let snakeLocation = sHead[0].offsetLeft;
            sHead[0].style.left = (snakeLocation - 40) + "px";
            borderControl()
        } else if (e.keyCode === 39) {
            // right arrow
            console.log("right!");
            let snakeLocation = sHead[0].offsetLeft;
            sHead[0].style.left = (snakeLocation + 40) + "px";
            borderControl()
        }
    });
}

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function selectField() {
        let fields = document.getElementsByClassName("field");

        let randomInt = getRndInteger(1, 640);  //TODO: exclude snake coordinates
        let apple = fields[randomInt];
        apple.className += " apple";



    }

