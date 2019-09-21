





// tf.dispose(() => {

//   for (let i = 0; i < 100; i++) {
//     tf.tensor1d([1, 2, 3]);
//   }

// });





// tf.tidy(() => {

//   for (let i = 0; i < 100; i++) {
//     tf.tensor1d([4, 5, 6]);
//   }

// });







// console.log(tf.memory());










// const t3 = tf.tensor1d([25, 76, 4, 23, -5, 22]);
// const max = t3.max(); // 76
// const min = t3.min(); // -5

// const norm = t3.add(min.abs()).div(max.add(min.abs()));




// norm.print();








// function getYs(xs, m, c) {


//   return xs.mul(2).add(1);
// }

// const t1 = tf.tensor1d([1, 5, 10]);
// const t2 = getYs(t1, 2, 1)
// t2.print();







// console.log("test");



// const xs = tf.tensor1d([1, 2, 3, 4]);
// const xy = tf.tensor2d([1, 2, 3, 4], [2, 2]);

// xs.print();
// xy.print();

// const sum = xs.add(xy);
