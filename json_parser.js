const fs = require('fs')

fs.readFile('example.json', 'utf8', function(err, input) {
  if (err) throw err;
  let arr = spaceParser(input)
  console.log(arr);
});

function commaParser (input) {
  if (input.startsWith(',')){
    return ([',',  input.slice(1)]);
  }
  else {
    return null;
  }
}

function colonParser (input ) {
  if (input.startsWith(':')) {
    return ([':',  input.slice(1)]);
  }
  else {
    return null;
  }
}

function boolParser (input ) {
  if (input.startsWith('true')) {
    return ([true,  input.slice(4)]);
  }
  
  else if (input.startsWith('false')) {
    return ([false,  input.slice(5)]);
  }

  else {
    return null;
  }
}

function nullParser (input ) {
  if (input.startsWith('null')) {
    return ([null,  input.slice(4)]);
  }
  else {
    return null;
  }
}


function spaceParser (input) {
  if (input.match(/^[\s]/)) {
    return ([input.slice(0, input.match(/\S/).index) , input.slice(input.match(/\S/).index)]);
  }
  else {
    return null;
  }
}

/*function numberParser (input) {
  const regex =  /^[-+]?\d*\.?\d+([eE][-+]?\d+)?/
    if (input.match(regex)){
      return input.slice(0, )
    }
}

function stringParser (input) {
  if (input.indexOf('"') !== 0){ return null;}
  if (input.indexOf('"') === 0){
  new_input = input.substring(1, input.length)
  var x  = new_input.search('"')
    return ([input.slice(0, x+2), input.slice(x+2, input.length)])
  }
  else {
    return null;
  }
}
*/
