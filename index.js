//passwortgen von gestern
console.log("Aufgabe 5");
const passwordGenerator = (num) => {
  let charList =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let str = "";
  let random;
  for (let i = 0; i < num; i++) {
    random = Math.floor(Math.random() * charList.length);
    str += charList[random];
  }
  return console.log(str);
};
passwordGenerator(10);
