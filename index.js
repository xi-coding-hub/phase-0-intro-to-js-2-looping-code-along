// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     // debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);



const names = ["Alo","Ali","Lili"]
let message = [ ]
function writeCards(names) {
    let count =0;
    for (let i = 0; i < names.length; i++) {
      let response =  `Thank you, ${names[i]}, for the wonderful surprise gift!` ;
      // debugger;
      message.push(response);
      count += 1;
      console.log(count); 
    }
    // console.log(message);
    return message;
}

// function countDown(num) {
//   for (let i = num; i >= 0; i--) {
//     console.log(i);
    
//   }
// }

function countDown(num) {
  let i = num;
  while (i >= 0) {
    console.log(i);
    i--;
  }
}

