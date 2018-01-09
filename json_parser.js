function commaParser (input) {
  if (input.startsWith(',')){
    return ([',',  input.slice(1)]);
  }
  else {
    return (null);
  }
}

function colonParser (input ) {
  if (input.startsWith(':')) {
    return ([':',  input.slice(1)]);
  }
  else {
    return (null);
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
    return (null);
  }
}

function nullParser (input ) {
  if (input.startsWith('null')) {
    return (['null',  input.slice(4)]);
  }
  else {
    return (null);
  }
}


function spaceParser (input) {
  if (input.match(/^[\s]/)) {
    return ([input.slice(0, input.match(/\S/).index)) , input.slice(input.match(/\S/).index)]);
  }
  else {
    return (null);
  }
}
