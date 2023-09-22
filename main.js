import './style.css'

import { bubbleSort, quickSort } from './src';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>JS - Algoritms</h1>
    <h2>and</h2>
    <h1>Data Structures</h1>
  </div>
`

const arr = [1,7,2,9,4,0,3]
console.log(arr)
console.log(bubbleSort(arr))
console.log(quickSort(arr))