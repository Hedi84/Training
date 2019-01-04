// function loop() {
//   for (let i = 0; i < Number.MAX_VALUE - 1; i++) {
//     console.log(i)
//     i = i^100000
//   }
// }
//
// function loop() {
//   for (let i = 0; i < Number.MAX_VALUE - 1; i++) {
//     console.log(i)
//     i = i * 10
//   }
// }

function loop() {
  for (let i = 0; i < Number.MAX_SAFE_INTEGER - 1; i = (i + 100000000000000)) {
    console.log(i)
  }
}


loop()
