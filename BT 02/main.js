// function numberOneTriangle() {
//     let a = Number(prompt("Nhập số bạn muốn: "))
//     for (let i = 1; i <= a; i++) {
//         let result = "";
//         for (let j = 1; j <= i; j++) {
//             if (j <= i) {
//                 result += "*"
//             }
//         }
//         result += "\n";
//     }
// }
// numberOneTriangle()



function numberOneTriangle() {
    const n = Number(prompt("Nhập n", 1))

    for (let i = 1; i <= n; i++) {
      let s = ''
      for (let j = 1; j <= i; j++) {
        s += '*'
      }
      console.log(s)
    }
  }
  numberOneTriangle()