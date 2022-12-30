function add(...str) {
  let newStringWithSymbol = "";
  for (let i = 0; i < str.length; i++) {
    newStringWithSymbol += `$${str[i]}`;
  }
  return newStringWithSymbol + "$";
}

let n = add("hi", "bye", "tschuss");
document.write(n);
