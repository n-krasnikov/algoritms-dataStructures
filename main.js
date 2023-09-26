import './style.css'

import { bubbleSort, quickSort, mergeSort, binarySearch } from './src';
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
const sorted = quickSort([...arr])

console.log(mergeSort([...arr]))
console.log(quickSort([...arr]))
console.log(bubbleSort([...arr]))

console.log('Find! ', binarySearch(sorted, 6))


const root = new TreeNode(5)
root.insert(3)
root.insert(7)
root.insert(4)
root.insert(8)
root.insert(6)
root.insert(2)
root.insert(3)
root.insert(1)
root.insert(9)
root.insert(7)


console.log('------------')
root.travelD()
console.log('------------')
root.travelB()
console.log('------------')

console.log(root)
console.log(root.find(10))
console.log(root.find(4))