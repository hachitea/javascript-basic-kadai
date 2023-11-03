//変数numに0～20までのランダムな整数を代入する
let num = Math.floor(Math.random() * 21);

//変数numの値を出力する
console.log(num);

if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
}

else if (num % 3 === 0) {
  console.log('3の倍数です');
}

else if (num % 5 === 0) {
  console.log('5の倍数です');
}

else {
  //変数numの値を出力する
  console.log(num);
}

// ネットメモ（https://www.saka-en.com/java/java-fizz-buz）
// 記述のポイントは if 文の一番最初に、3 と 5 の倍数の判定を記述すること。
// これが else if で一番下に書いてあると、「3と5の倍数です」という文字列は表示されない。
// つまり、最初に厳しい条件で判定すれば以降の処理はおこなわれないという、
// if 文の特性を生かしてコーディングする