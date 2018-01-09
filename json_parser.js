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
    return (['true',  input.slice(4)]);
  }
  
  else if (input.startsWith('false')) {
    return (['false',  input.slice(4)]);
  }

  else {
    return (null);
  }
}

function colonParser (input ) {
  if (input.startsWith('null')) {
    return (['null',  input.slice(4)]);
  }
  else {
    return (null);
  }
}