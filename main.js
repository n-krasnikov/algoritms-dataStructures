import './style.css'

import { bubbleSort, quickSort } from './src';
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

const tree = new TreeNode(8)
tree.insert(3);
tree.insert(10);
tree.insert(14);
tree.insert(1);
tree.insert(6);
tree.insert(4);
tree.insert(7);
tree.insert(13);


tree.travel()
