/*let deliLine = [];

const takeANumber = (line, name) => {
  return (`Welcome, ${name}. You are number ${line.push(name)} in line.`);
};

const nowServing = (line) => {
  if (line.length > 0) {
    return (`Currently serving ${line.shift()}.`);
  }
  return ("There is nobody waiting to be served!");
};

const currentLine = (line) => {
  if (line.length > 0) {
    const [head, body] = [
      `1. ${line[0]}`,
      line.slice(1).map((v,i) => `, ${i+2}. ${v}`)
    ];
    return (`The line is currently: ${head}${body.join("")}`);
  }
  return ("The line is currently empty.");
};

*/

// Take A number
let lineNumbers = [];
let nextNumber = 1;

function takeANumber() {
  lineNumbers.push(nextNumber);
  nextNumber += 1;
  return (`Welcome! You are number ${nextNumber - 1}.`);
}

function nowServing() {
  return (`Now serving ${lineNumbers.shift()}.`);
}

takeANumber(lineNumbers);
takeANumber(lineNumbers);
takeANumber(lineNumbers);

console.log(nowServing(lineNumbers));
