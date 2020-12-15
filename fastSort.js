const ARR_LENGTH = 10
const randomArray = Array.from({ length: ARR_LENGTH }, () => Math.floor(Math.random() * 20 ));

console.log('INIT ARRAY', randomArray)

function qSort(randomArray) {
  if (randomArray.length < 2) {
    return randomArray
  }

  const pivot = randomArray[Math.floor(Math.random() * randomArray.length)]
  const lessArray = randomArray.filter(e => e < pivot)
  const biggerArray = randomArray.filter(e => e > pivot)
  const equalArray = randomArray.filter(e => e === pivot)

  return [...qSort(lessArray), ...equalArray, ...qSort(biggerArray)]
}

const sortedArray = qSort(randomArray)

console.log('SORTED ARRAY', sortedArray)