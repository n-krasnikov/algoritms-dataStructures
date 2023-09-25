import './style.css'

import { bubbleSort, quickSort, mergeSort } from './src';
import { Queue } from './src';
import { LinkedList } from './src';
import { Stack } from './src';
import { TreeNode } from './src';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>JS - Algoritms</h1>
    <h2>and</h2>
    <h1>Data Structures</h1>
  </div>
`
const arr = [55,3,999,-7,6,1,9,2,8,3,7,4,6,5,0,0]
console.log(mergeSort(arr))
console.log(quickSort(arr))
console.log(bubbleSort(arr))
