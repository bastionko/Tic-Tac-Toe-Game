let container = document.querySelector('.container');

let sign = "O";
let counter = 0;


// make grid
makeGrid();
let boxes = document.querySelectorAll('.box');
boxes.forEach(box => box.addEventListener("click", insertSign));

let lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function insertSign(){
    this.removeEventListener("click", insertSign);
    (sign === "X") ? sign = "O" : sign = "X";
    this.innerHTML = sign;
    checkWinner();
}

function checkWinner(){
    // if (boxes[0].innerHTML === boxes[1].innerHTML && boxes[0].innerHTML === boxes[2].innerHTML){
    //     boxes[0].style.background = "tomato";
    //     boxes[1].style.background = "tomato";
    //     boxes[2].style.background = "tomato";
    // }

    lines.forEach(line => {
        let box1 = boxes[line[0]];
        let box2 = boxes[line[1]];
        let box3 = boxes[line[2]];

        if (box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML && box1.innerHTML !== ""){
                box1.style.background = "tomato";
                box2.style.background = "tomato";
                box3.style.background = "tomato";
                stopGame();
        }
    })
}

function stopGame(){
    boxes.forEach(box => box.removeEventListener("click", insertSign));
}

function makeGrid(){
    let text = ``;
    for (let i = 0; i < 9 ; i++) {
        text += `<div class="box"></div>`;
    }
    container.innerHTML = text;
}

// let boxes = ['0-Marko', '1-Milos', '2-Zeljko', '3-Ivan', '4-Dejan', '5-Tamara', '6-Jovana', '7-Jelena', '8-Dragana'];
//
// let lines = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ];
//
// lines.forEach(line =>{
//     let box1 = boxes[line[0]];
//     let box2 = boxes[line[1]];
//     let box3 = boxes[line[2]];
//     console.log('-----------------------------')
//     console.log(box1);
//     console.log(box2);
//     console.log(box3);
// })

// for (let i = 0; i < lines.length; i++) {
//             console.log('-----------------------------')
//             console.log(boxes[lines[i][0]]);
//             console.log(boxes[lines[i][1]]);
//             console.log(boxes[lines[i][2]]);
// }
//
// console.log('------------------------------')
//
//
//
// let boxes2 = ['0-Marko', '1-Milos', '2-Zeljko', '3-Ivan', '4-Dejan', '5-Tamara', '6-Jovana', '7-Jelena', '8-Dragana'];
//
// let lines2 = [8, 1, 2, 3, 4, 5, 6, 7, 0];
//
// for (let i = 0; i < lines2.length; i++) {
//     console.log(boxes2[lines2[i]]);
// }




