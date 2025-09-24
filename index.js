const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    // debugger;
  }

  return gifts;
}

wrapGifts(gifts);



const names = ["Alo","Ali","Lili"]
let message = [ ]
function writeCards(names) {
    
    for (let i=0; i<names.length; i++) {
      let response =  `Thank you, ${names[i]}, for the wonderful surprise gift!` ;
      // debugger;
      message.push(response);
    }
    // console.log(message);
    return message;
}