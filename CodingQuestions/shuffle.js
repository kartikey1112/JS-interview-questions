// How would you implement a shuffle() ?

// When passed with an array, it should modify the array inline to generate a randomly picked permutation at the same probability.

// for an array like this:

const arr = [1, 2, 3, 4]


function shuffle(arr) {

    for (let i=arr.length-1;i>0;i--){
      let randomIndex = Math.floor(Math.random()*arr.length);
      let temp = arr[i];
      arr[i]=arr[randomIndex];
      arr[randomIndex]= temp;
    }
  
    return arr;
    
  }
  
  
console.log('shuffle(arr) :>> ', shuffle(arr));