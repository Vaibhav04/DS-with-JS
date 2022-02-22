const nemo = ['nemo']

function findNemo(arr) {
  let t0 = performance.now();
  for(let i = 0; i< arr.length; i++) {
    if(arr[i] === 'nemo') {
      console.log("Found NEMO")
    }
  }
  let t1 = performance.now();
  console.log("Total time taken", (t1-t0))
}

findNemo(nemo)