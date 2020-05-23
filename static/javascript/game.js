const allFields = document.getElementsByClassName("field");

let sHead_index; // sneak head where
let sIId = 0;
let speed = 1000;
initGame();

function initGame() {
    let appleWhere = placeApple();
    // Your game can start here, but define separate functions, don't write everything in here :)

    for (let i = 0; i < allFields.length; i++) { // where is the head
        if (allFields.item(i).className === "field snake_place") {
            sHead_index = i;
        }
    }
    // whereTo() => get_next_col_right(sHead_index);
    // var t = setInterval(moveHead, 200, appleWhere);
    moveHead(appleWhere);
    sIId = setInterval(moveHead, speed, 12);

}

function moveItMoveIt(whereTo) {

    for (let i = 0; i < allFields.length; i++) { // where is the head
        if (allFields.item(i).className === "field snake_place") {
            sHead_index = i;
        }
    }
    new_pos = whereTo(sHead_index);
    if (new_pos !== sHead_index) { // border control: if new position then re-draw
        allFields[new_pos].className = "field snake_place";
        allFields[sHead_index].className = "field";
        sHead_index = new_pos;
    } else {
        console.log("Elertel a falig");
    }
    return new_pos;
}


function moveHead(appleWhere) {// add event listener
    const bodySnatcher = document.querySelector('body'); // event listener on this
    bodySnatcher.addEventListener('keydown', function (e) {
        // e = e || window.e;
        if (e.keyCode === 38) { // up arrow
            console.log("up!");
            moveItMoveIt(get_next_row_above);
            if (new_pos === appleWhere) { // eat apple
                appleWhere = placeApple(); // make new apple
            }

        } else if (e.keyCode === 40) {// down arrow
            console.log("down!");
            moveItMoveIt(get_next_row_below);
            if (new_pos === appleWhere) {
                appleWhere = placeApple();
            }


        } else if (e.keyCode === 37) {// left arrow
            console.log("left!");
            moveItMoveIt(get_next_col_left)
            if (new_pos === appleWhere) {
                appleWhere = placeApple();
            }

        } else if (e.keyCode === 39) {// right arrow
            console.log("right!");
            moveItMoveIt(get_next_col_right)
            if (new_pos === appleWhere) {
                appleWhere = placeApple();
            }
        }
    });
}

function get_next_row_above(current) {
    let new_index = current - 20;
    if (new_index < 0) {
        new_index = current;
    }
    return new_index;
}

function get_next_row_below(current) {
    let new_index = current + 20;
    if (new_index > 300) {
        new_index = current;
    }
    return new_index;
}

function get_next_col_left(current) {
    let new_index = current - 1;
    if (new_index % 20 === 19) {
        new_index = current;
    }
    return new_index;
}

function get_next_col_right(current) {
    let new_index = current + 1;
    if (new_index % 20 === 0) {
        new_index = current;
    }
    return new_index;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function placeApple() {
    let sHead_index, apple, randomInt;
    let fields = document.getElementsByClassName("field");

    for (let i = 0; i < fields.length; i++) {
        if (fields.item(i).className === "field snake_place") {
            console.log("fuckit:", i);
            sHead_index = i;
        }
    }
    do { // check if apple on snake head
        randomInt = getRndInteger(0, 299);
        apple = fields[randomInt]; // a lista random eleme
    } while (randomInt === sHead_index);

    apple.className = "field apple"; // add 'apple' to class
    return randomInt;
}

