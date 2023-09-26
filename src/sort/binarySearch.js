const binarySearch = (arr, target) => {
  if (arr[arr.length - 1] < target || arr[0] > target) return null;

  const pointer = Math.floor(arr.length / 2);

  if (arr[pointer] === target) return arr[pointer];

  if (arr[pointer] > target) return binarySearch(arr.slice(0,pointer), target);
  if (arr[pointer] < target) return binarySearch(arr.slice(pointer, arr.length), target);
}

export default binarySearch;