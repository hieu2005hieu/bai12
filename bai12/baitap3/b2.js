let number = +prompt("nhap so luong so nguyen to ");
let Count = 0;
let count = 0;
if (number > 0) {
  for (let numbers = 2; numbers < 100; numbers++) {
    for (let i = 2; i <= numbers; i++) {
      if (numbers % i == 0) {
        count++;
      }
    }
    if (count == 1) {
      Count++;
      console.log(`${numbers} la so nguyen to`);
    }
    count = 0;
    if (Count >= number) {
      break;
    }
  }
} else {
  console.log("moi nhap lai");
}

