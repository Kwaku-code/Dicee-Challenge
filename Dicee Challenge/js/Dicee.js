/**create an object with images each key corresponds to a number
 * create a function to get a random number
 * Match random to object key to obtain the corresponding image
 * set image to player
 * To determine a winner keep the values of random numbers generated and compare
*/

let p1_value;
let p2_value;
let randomNumber = 0;
let p1_img = document.querySelector('.img1')
let p2_img = document.querySelector('.img2')

getImage = number => {
    images = {
        1: '../image/dice1.png',
        2: '../image/dice2.png',
        3: '../image/dice3.png',
        4: '../image/dice4.png',
        5: '../image/dice5.png',
        6: '../image/dice6.png'
    };
    return images [number];
}

getRandomNumber = () => {
    randomNumber = Math.floor(Math.random()*6) + 1;
    return randomNumber;
}

playerOne_Action = () =>{
    p1_value = getRandomNumber();
    p1_img.src = getImage(p1_value)
}

playerTwo_Action = () => {
    p2_value = getRandomNumber();
    p2_img.src = getImage(p2_value)
}

result = () => {
    let rs = document.querySelector("h1")
    if (p1_value > p2_value) {
      rs.innerHTML = "Player 1 Wins"
    } else if (p1_value < p2_value) {
      rs.innerHTML = "Player 2 Wins"
    } else {
     rs.innerHTML = "Draw"
    }

}

playerOne_Action();
playerTwo_Action();
result();