const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  const pointer = arr[0];
  const [left, right] = [[],[]];

  for (let i = 1; i < arr.length; i++) {
    (pointer > arr[i])
      ? left.push(arr[i])
      : right.push(arr[i]);
  };

  return [...quickSort(left), pointer, ...quickSort(right)];
};

export default quickSort;