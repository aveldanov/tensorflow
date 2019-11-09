// define model

const simpleAdd = (input1, input2) => {
  //tidy used to free up GPU memory


  return tf.tidy(() => {
    const x1 = input1;
    const x2 = input2;
    const y = x1.add(x2);
    return y;
  });
}

// new one dimential tensor/arrays
const data1 = tf.tensor1d([4, 6, 5, 9]);
const data2 = tf.tensor1d([5, 4, 34, 21]);

// using the model
const result = simpleAdd(data1, data2);
result.print();


