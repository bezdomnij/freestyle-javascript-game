initGame();

function initGame() {
    let appleWhere = placeApple();
    // Your game can start here, but define separate functions, don't write everything in here :)
    moveHead(appleWhere);

}

function borderControl() {
    //prevent illegal emigration
    let sHead = document.getElementsByClassName("snake_place");
    if (sHead[0].offsetTop > 780) {
        alert("Illegal border crossing!")
    }
    if (sHead[0].offsetTop < 20) {
        alert("Illegal border crossing!")
    }
    ;
    if (sHead[0].offsetLeft < 18) {
        alert("Illegal border crossing!")
    }
    ;
    if (sHead[0].offsetLeft > 1258) {
        alert("Illegal border crossing!")
    }
    ;

    // sHead[0].offsetLeft

}

function moveHead(appleWhere) {// add event listener
    console.log(appleWhere)
    let sHead_index;
    let bodySnatcher = document.querySelector('body');
    let sHead = document.getElementsByClassName("snake_place");

    allFields = document.getElementsByClassName("field");
    console.log(allFields.length);
    console.log(sHead[0].className);
    for (let i = 0; i < allFields.length; i++) {
        if (allFields.item(i).className === "field snake_place") {
            console.log("fuckit:", i);
            sHead_index = i;
        }
        ;
    }

    let rowCoordinate = sHead.item(0).getAttribute("data-row")
    let columnCoordinate = sHead.item(0).getAttribute("data-col");
    console.log(rowCoordinate, columnCoordinate);

    bodySnatcher.addEventListener('keydown', function (e) {
        // e = e || window.e;

        if (e.keyCode === 38) { // up arrow
            console.log("up!");
            let new_pos = get_next_row_above(sHead_index);
            if (new_pos !== sHead_index) {
                allFields[new_pos].className = "field snake_place";
                allFields[sHead_index].className = "field";
                sHead_index = new_pos;
            }
            if (new_pos === appleWhere) {
                appleWhere = placeApple();
            }

        } else if (e.keyCode === 40) {// down arrow
            console.log("down!");
            let new_pos = get_next_row_below(sHead_index);
            if (new_pos !== sHead_index) {
                allFields[new_pos].className = "field snake_place";
                allFields[sHead_index].className = "field";
                sHead_index = new_pos;
            }
            if (new_pos === appleWhere) {
                appleWhere = placeApple();
            }


        } else if (e.keyCode === 37) {// left arrow
            console.log("left!");
            let new_pos = get_next_col_left(sHead_index);
            if (new_pos !== sHead_index) {
                allFields[new_pos].className = "field snake_place";
                allFields[sHead_index].className = "field";
                sHead_index = new_pos;
            }
            if (new_pos === appleWhere) {
                appleWhere = placeApple();
            }

        } else if (e.keyCode === 39) {// right arrow
            console.log("right!");
            let new_pos = get_next_col_right(sHead_index);
            if (new_pos !== sHead_index) {
                allFields[new_pos].className = "field snake_place";
                allFields[sHead_index].className = "field";
                sHead_index = new_pos;
            }
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

function placeApple() { // apple placement really
    let sHead_index, apple, randomInt;
    let fields = document.getElementsByClassName("field");
    for (let i = 0; i < fields.length; i++) {
        if (fields.item(i).className === "field snake_place") {
            console.log("fuckit:", i);
            sHead_index = i;
        }
    }
    do {
        randomInt = getRndInteger(0, 299);  //TODO: exclude snake coordinates
        apple = fields[randomInt]; // a lista random eleme
    } while (randomInt === sHead_index);

    apple.className = "field apple"; // add 'apple' to class
    return randomInt;
}

