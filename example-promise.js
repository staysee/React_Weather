// function getTempCallback (location, callback) {
//   callback(undefined, 78);                  //success case
//   callback('City not found');              //error case
// }

// getTempCallback('Los Angeles', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp)
//   }
// });

// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }

// getTempPromise('Los Angeles').then(function (temp) {
//   console.log('promise sucess', temp);
// }, function (err) {
//   console.log('promise error', err);
// });


//Challenge Area

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('a & b need to be numbers');
      }
  });
}

addPromise(2, 3).then(function (sum) {
  console.log('success', sum);
}, function (err) {
  console.log('error', err)
});

addPromise('stacey', 9).then(function (sum) {
  console.log('this should not show up')
}, function (err) {
  console.log('error', err)
  console.log('this should appear', err);
})
