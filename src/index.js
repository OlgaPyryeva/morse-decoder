const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let newExpr = "";
  let partExpr = "";
  let letter = "";
  let start = 0;
  let end = 10;
  let number = expr.length / 10;

  for (j = 0; j < number; j++) {
    partExpr = expr.substr(start, end);

    for (i = 0; i <= 10; ) {
      if (partExpr.substr(i, 2) == 10) {
        letter += ".";
        i += 2;
      } else if (partExpr.substr(i, 2) == 11) {
        letter += "-";
        i += 2;
      } else {
        i += 2;
      }
    }
    newExpr += MORSE_TABLE[letter];
    start += 10;
    letter = "";
  }

  return newExpr;
}

module.exports = {
  decode,
};
