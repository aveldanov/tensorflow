
const shape = [4, 2];
// const data = tf.tensor([[4, 6], [5, 9], [13, 25]]);
const data = tf.tensor([4, 6, 5, 9, 13, 25, 1, 5], shape);


// set variables

const data2 = tf.variable(tf.zeros([8]));



//print data
// data2.print();


data2.assign(tf.tensor1d([4, 12, 5, 6, 56, 3, 45, 3]));

// data2.print();


const data3 = tf.tensor1d([4, 5, 6, 9]);
const data4 = tf.tensor1d([5, 4, 23, 45])


data3.print();
data4.print();

data3.add(data4).print();