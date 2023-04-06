const whiteKeys = document.querySelectorAll(".white-key");
const blackKeys = document.querySelectorAll(".black-key");

blackKeys.forEach((black, index) => {
  black.addEventListener("mouseenter", () => {
    let sound = new Audio(`sounds_black-keys_${index}.mp3`);
    playSound(sound);
  });
});

whiteKeys.forEach((white, index) => {
  white.addEventListener("mouseenter", () => {
    let sound = new Audio(`sounds_white-keys_${index}.mp3`);
    playSound(sound);
  });
});

function playSound(sound) {
  sound.pause();
  sound.currentTime = 0;
  sound.play();
}

// Add keys

// Use Keys !

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const ten = document.getElementById("ten");
const eleven = document.getElementById("eleven");
const twelve = document.getElementById("twelve");
const thirteen = document.getElementById("thirteen");
const fourteen = document.getElementById("fourteen");
const fifteen = document.getElementById("fifteen");
const sixteen = document.getElementById("sixteen");
const seventeen = document.getElementById("seventeen");
const eighteen = document.getElementById("eighteen");
const nineteen = document.getElementById("nineteen");
const twenty = document.getElementById("twenty");
const twentyone = document.getElementById("twentyone");
const twentytwo = document.getElementById("twentytwo");
const twentythree = document.getElementById("twentythree");
const twentyfour = document.getElementById("twentyfour");
const twentyfive = document.getElementById("twentyfive");
const twentysix = document.getElementById("twentysix");
const twentyseven = document.getElementById("twentyseven");
const twentyeight = document.getElementById("twentyeight");
const twentynine = document.getElementById("twentynine");
const thirty = document.getElementById("thirty");
const thirtyone = document.getElementById("thirtyone");
const thirtytwo = document.getElementById("thirtytwo");
const thirtythree = document.getElementById("thirtythree");
const thirtyfour = document.getElementById("thirtyfour");
const thirtyfive = document.getElementById("thirtyfive");
const thirtysix = document.getElementById("thirtysix");

addEventListener("keyup", (e) => {
  if (e.key === "a") {
    one.classList.remove("white-active");
  }
  if (e.key === "s") {
    two.classList.remove("white-active");
  }
  if (e.key === "d") {
    three.classList.remove("white-active");
  }
  if (e.key === "f") {
    four.classList.remove("white-active");
  }
  if (e.key === "g") {
    five.classList.remove("white-active");
  }
  if (e.key === "h") {
    six.classList.remove("white-active");
  }
  if (e.key === "j") {
    seven.classList.remove("white-active");
  }
  if (e.key === "k") {
    eight.classList.remove("white-active");
  }
  if (e.key === "l") {
    nine.classList.remove("white-active");
  }
  if (e.key === ";") {
    ten.classList.remove("white-active");
  }
  if (e.key === "'") {
    eleven.classList.remove("white-active");
  }
  if (e.key === "z") {
    twelve.classList.remove("white-active");
  }
  if (e.key === "x") {
    thirteen.classList.remove("white-active");
  }
  if (e.key === "c") {
    fourteen.classList.remove("white-active");
  }
  if (e.key === "v") {
    fifteen.classList.remove("white-active");
  }
  if (e.key === "b") {
    sixteen.classList.remove("white-active");
  }
  if (e.key === "n") {
    seventeen.classList.remove("white-active");
  }
  if (e.key === "m") {
    eighteen.classList.remove("white-active");
  }
  if (e.key === ",") {
    nineteen.classList.remove("white-active");
  }
  if (e.key === ".") {
    twenty.classList.remove("white-active");
  }
  
  if (e.key === "/") {
    twentyone.classList.remove("white-active");
  }

  if (e.key === "A") {
    twentytwo.classList.remove("white-active");
  }


  if (e.key === "S") {
    twentythree.classList.remove("white-active");
  }

  if (e.key === "D") {
    twentyfour.classList.remove("white-active");
  }

  if (e.key === "F") {
    twentyfive.classList.remove("white-active");
  }

  if (e.key === "G") {
    twentysix.classList.remove("white-active");
  }

  if (e.key === "H") {
    twentyseven.classList.remove("white-active");
  }

  if (e.key === "J") {
    twentyeight.classList.remove("white-active");
  }

  if (e.key === "K") {
    twentynine.classList.remove("white-active");
  }

  if (e.key === "L") {
    thirty.classList.remove("white-active");
  }

  if (e.key === ":") {
    thirtyone.classList.remove("white-active");
  }

  if (e.key === "Z") {
    thirtytwo.classList.remove("white-active");
  }

  if (e.key === "X") {
    thirtythree.classList.remove("white-active");
  }

  if (e.key === "C") {
    thirtyfour.classList.remove("white-active");
  }

  if (e.key === "B") {
    thirtyfive.classList.remove("white-active");
  }
  if (e.key === "N") {
    thirtysix.classList.remove("white-active");
  }

});

addEventListener("keydown", (e) => {
  if (e.key === "a") {
    one.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_0.mp3"));
  }

  if (e.key === "s") {
    two.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_1.mp3"));
  }
  if (e.key === "d") {
    three.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_2.mp3"));
  }
  if (e.key === "f") {
    four.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_3.mp3"));
  }
  if (e.key === "g") {
    five.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_4.mp3"));
  }
  if (e.key === "h") {
    six.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_5.mp3"));
  }
  if (e.key === "j") {
    seven.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_6.mp3"));
  }
  if (e.key === "k") {
    eight.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_7.mp3"));
  }
  if (e.key === "l") {
    nine.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_8.mp3"));
  }

  if (e.key === ";") {
    ten.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_9.mp3"));
  }
  if (e.key === "'") {
    eleven.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_10.mp3"));
  }
  if (e.key === "z") {
    twelve.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_11.mp3"));
  }
  if (e.key === "x") {
    thirteen.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_12.mp3"));
  }
  if (e.key === "c") {
    fourteen.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_13.mp3"));
  }
  if (e.key === "v") {
    fifteen.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_14.mp3"));
  }
  if (e.key === "b") {
    sixteen.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_15.mp3"));
  }
  if (e.key === "n") {
    seventeen.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_16.mp3"));
  }
  if (e.key === "m") {
    eighteen.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_17.mp3"));
  }
  if (e.key === ",") {
    nineteen.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_18.mp3"));
  }
  if (e.key === ".") {
    twenty.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_19.mp3"));
  }
  if (e.key === "/") {
    twentyone.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_19.mp3"));
  }
  if (e.key === "A") {
    twentytwo.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_19.mp3"));
  }
  
  if (e.key === "S") {
    twentythree.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_20.mp3"));
  }

  if (e.key === "D") {
    twentyfour.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_20.mp3"));
  }

  if (e.key === "F") {
    twentyfive.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_20.mp3"));
  }

  if (e.key === "G") {
    twentysix.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_20.mp3"));
  }

  if (e.key === "H") {
    twentyseven.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_20.mp3"));
  }

  if (e.key === "J") {
    twentyeight.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_20.mp3"));
  }

  if (e.key === "K") {
    twentynine.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_20.mp3"));
  }

  if (e.key === "L") {
    thirty.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_20.mp3"));
  }

  if (e.key === ":") {
    thirtyone.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_20.mp3"));
  }

  if (e.key === "Z") {
    thirtytwo.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_20.mp3"));
  }

  if (e.key === "X") {
    thirtythree.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_20.mp3"));
  }

  if (e.key === "C") {
    thirtyfour.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_20.mp3"));
  }

  if (e.key === "B") {
    thirtyfive.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_20.mp3"));
  }

  if (e.key === "N") {
    thirtysix.classList.add("white-active");
    playSound(new Audio("sounds_white-keys_20.mp3"));
  }
});


const b0 = document.getElementById("b0");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");
const b10 = document.getElementById("b10");
const b11 = document.getElementById("b11");
const b12 = document.getElementById("b12");
const b13 = document.getElementById("b13");
const b14 = document.getElementById("b14");
const b15 = document.getElementById("b15");
const b16 = document.getElementById("b16");
const b17 = document.getElementById("b17");
const b18 = document.getElementById("b18");
const b19 = document.getElementById("b19");
const b20 = document.getElementById("b20");
const b21 = document.getElementById("b21");
const b22 = document.getElementById("b22");
const b23 = document.getElementById("b23");
const b24 = document.getElementById("b24");


addEventListener("keyup", (e) => {
  if (e.key === "w") {
    b0.classList.remove("black-active");
  }

  if (e.key === "e") {
    b1.classList.remove("black-active");
  }

  if (e.key === "t") {
    b2.classList.remove("black-active");
  }

  if (e.key === "y") {
    b3.classList.remove("black-active");
  }

  if (e.key === "u") {
    b4.classList.remove("black-active");
  }

  if (e.key === "o") {
    b5.classList.remove("black-active");
  }

  if (e.key === "p") {
    b6.classList.remove("black-active");
  }

  if (e.key === "]") {
    b7.classList.remove("black-active");
  }

  if (e.key === "`") {
    b8.classList.remove("black-active");
  }

  if (e.key === "1") {
    b9.classList.remove("black-active");
  }
  
  if (e.key === "2") {
    b10.classList.remove("black-active");
  }

  if (e.key === "3") {
    b11.classList.remove("black-active");
  }

  if (e.key === "4") {
    b12.classList.remove("black-active");
  }

  if (e.key === "5") {
    b13.classList.remove("black-active");
  }

  if (e.key === "6") {
    b14.classList.remove("black-active");
  }

  if (e.key === "7") {
    b15.classList.remove("black-active");
  }

  if (e.key === "8") {
    b16.classList.remove("black-active");
  }

  if (e.key === "9") {
    b17.classList.remove("black-active");
  }

  if (e.key === "0") {
    b18.classList.remove("black-active");
  }

  if (e.key === "-") {
    b19.classList.remove("black-active");
  }

  if (e.key === "=") {
    b20.classList.remove("black-active");
  }

  if (e.key === "~") {
    b21.classList.remove("black-active");
  }

  if (e.key === "!") {
    b22.classList.remove("black-active");
  }


  if (e.key === "@") {
    b23.classList.remove("black-active");
  }

  if (e.key === "#") {
    b24.classList.remove("black-active");
  }

});


addEventListener("keydown", (e) => {
  if (e.key === "w") {
    b0.classList.add("black-active");
    playSound(new Audio("sounds_black-keys_0.mp3"));
  }

  if (e.key === "e") {
    b1.classList.add("black-active");
    playSound(new Audio("sounds_black-keys_1.mp3"));
  }

  if (e.key === "t") {
    b2.classList.add("black-active");
    playSound(new Audio("sounds_black-keys_2.mp3"));
  }

  if (e.key === "y") {
    b3.classList.add("black-active");
    playSound(new Audio("sounds_black-keys_3.mp3"));
  }

  if (e.key === "u") {
    b4.classList.add("black-active");
    playSound(new Audio("sounds_black-keys_4.mp3"));
  }

  if (e.key === "o") {
    b5.classList.add("black-active");
    playSound(new Audio("sounds_black-keys_5.mp3"));
  }

  if (e.key === "p") {
    b6.classList.add("black-active");
    playSound(new Audio("sounds_black-keys_6.mp3"));
  }

  if (e.key === "]") {
    b7.classList.add("black-active");
    playSound(new Audio("sounds_black-keys_7.mp3"));
  }

  if (e.key === "`") {
    b8.classList.add("black-active");
    playSound(new Audio("sounds_black-keys_8.mp3"));
  }

  if (e.key === "1") {
    b9.classList.add("black-active");
    playSound(new Audio("sounds_black-keys_9.mp3"));
  }

  if (e.key === "2") {
    b10.classList.add("black-active");
    playSound(new Audio("sounds_black-keys_10.mp3"));
  }

  if (e.key === "3") {
    b11.classList.add("black-active");
    playSound(new Audio("sounds_black-keys_11.mp3"));
  }

  if (e.key === "4") {
    b12.classList.add("black-active");
    playSound(new Audio("sounds_black-keys_12.mp3"));
  }

  if (e.key === "5") {
    b13.classList.add("black-active");
    playSound(new Audio("sounds_black-keys_13.mp3"));
  }

  if (e.key === "6") {
    b14.classList.add("black-active");
    playSound(new Audio("sounds_black-keys_14.mp3"));
  }

  if (e.key === "7") {
    b15.classList.add("black-active");
    playSound(new Audio("sounds_black-keys_12.mp3"));
  }

  if (e.key === "8") {
    b16.classList.add("black-active");
    playSound(new Audio("sounds_black-keys_9.mp3"));
  }

  if (e.key === "9") {
    b17.classList.add("black-active");
    playSound(new Audio("sounds_black-keys_3.mp3"));
  }

  if (e.key === "0") {
    b18.classList.add("black-active");
    playSound(new Audio("sounds_black-keys_5.mp3"));
  }

  if (e.key === "-") {
    b19.classList.add("black-active");
    playSound(new Audio("sounds_black-keys_13.mp3"));
  }

  if (e.key === "=") {
    b20.classList.add("black-active");
    playSound(new Audio("sounds_black-keys_4.mp3"));
  }

  if (e.key === "~") {
    b21.classList.add("black-active");
    playSound(new Audio("sounds_black-keys_0.mp3"));
  }

  if (e.key === "!") {
    b22.classList.add("black-active");
    playSound(new Audio("sounds_black-keys_11.mp3"));
  }

  if (e.key === "@") {
    b23.classList.add("black-active");
    playSound(new Audio("sounds_black-keys_10.mp3"));
  }

  if (e.key === "#") {
    b24.classList.add("black-active");
    playSound(new Audio("sounds_black-keys_1.mp3"));
  }
});










//addEventListener("keyup", (e) => {
  //if (e.key === "q") {
    //b0.classList.remove("black-active");
  //}
//});


//addEventListener("keydown", (e) => {
  //if (e.key === "q") {
    //b0.classList.add("black-active");
    //playSound(new Audio("sounds_black-keys_0.mp3"));
  //}
//});