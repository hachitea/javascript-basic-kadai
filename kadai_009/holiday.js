//配列の宣言と値の代入
const holidays = ["正月", "成人の日", "建国記念日", "天皇誕生日", "春分の日", "昭和の日", "憲法記念日", "みどりの日", "こどもの日", "海の日", "山の日", "敬老の日", "秋分の日", "スポーツの日", "文化の日", "勤労感謝の日"]

//配列の値を出力（確認用）
console.log(holidays);

//for文 コンソールへの出力
for (let i = 0; i <= 15; i += 1) {
  console.log(holidays[i]);
}

//while文　コンソールへの出力
let i = 0;
while (i < 16) {
  console.log(holidays[i]);
  i++;
}

// https://dev-k.hatenablog.com/entry/js-loop-while-tutorial-dev-k#google_vignette