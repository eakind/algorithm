
let arr = [2,56,687,3,34,65,87,832,45,65,2,12,56,45, 1]
console.log(bubbleSort(arr))
function bubbleSort(array) {
  let length = array.length
  for(let i = 0; i < length; i++) {
    for(let j = 0; j < length - 1; j++) {
      if(array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}

console.log(modifiedBubbleSort(arr))
function modifiedBubbleSort(array) {
  let length = array.length
  for(let i = 0; i < length; i++) {
    for(let j = 0; j < length - 1 - i; j++) {
      if(array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }
  return array
}

/*
* 选择排序
* 选择排序算法是一种原址比较排序算法。选择排序大致的思路是找到数据结构中的最小值并将其放置在第一位，
* 接着找到第二小的值并将其放到第二位，以此类推。
* */
console.log(selectionSort(arr))
function selectionSort(array) {
  let length = array.length
  let indexMin = null
  for(let i = 0; i < length - 1; i++) {
    indexMin = i
    for(let j = i; j < length; j++) {
      if(array[indexMin] > array[j]) {
        indexMin = j
      }
    }
    if( i !== indexMin) {
      [array[i], array[indexMin]] = [array[indexMin], array[i]]
    }
  }
  return array
}

/*
* 插入排序
* 插入排序每次排一个数组项，以此方式构建最后的排序少数组。假定第一项已经排序了，接着，它和第二项进行比较，第二项是应该待在原位还是插到第一项之前呢？
* 这样，头两项就已正确排序，接着和第三项比较，以此类推。
* */
console.log(insertionSort(arr))
function insertionSort(array) {
  let length = array.length
  let j = null
  let temp = null
  for(let i = 1; i < length - 1; i++) {
    j = i
    temp = array[i]
    while (j >0 && array[j - 1] > temp) {
      array[j] = array[j - 1]
      j--
    }
    array[j] = temp
  }
  return array
}


/*
* 归并排序
* 归并排序是第一个可以被实际使用的排序算法。（JS的Array类中定义了一个sort函数Array.prototype.sort）用以排序JS的数组。ES没有定义用哪个排序算法
* 所以浏览器厂商可以自行去实现算法。firefox使用的是归并排序，chrome用的是快速排序的变体。
*
* 归并排序是一种分治算法。其思想是将原始数组切分成较小的数组，直到每个小数组只有一个位置，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的
* 大数组。由于是分治法，归并排序也是递归。
* */
console.log(mergeSort(arr))
function mergeSort(array) {
  let length = array.length
  if(length === 1) {
    return array
  }
  let mid = Math.floor(length / 2)
  let left = array.slice(0, mid)
  let right = array.slice(mid, length)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let result = []
  let il = 0
  let ir = 0
  while (il < left.length && ir < right.length) {
    if(left[il] < right[ir]) {
      result.push(left[il++])
    } else {
      result.push(right[ir++])
    }
  }
  while (il < left.length) {
    result.push(left[il++])
  }
  while (ir < right.length) {
    result.push(right[ir++])
  }
  return result
}


/*
* 快速排序
* 快速排序也许是最常用的排序算法了，它的复杂度为O(nlog^n)，且它的性能通常比其它的排序算法要好。
* 跟归并排序一样，快速排序使用的也是分治的方法，将原始数组分成较小的数组。（但并没有像归并排序那样将它们分开）
* 快速排序的步骤：
*   1.首先，从数组中选择中间一项作为主元。
*   2.创建两个指针，左边一个指向数组第一项，右边一个指向数组最后一个项。移动左指针直到我们找到一个比主元大的元素，接着，移动右指针直到找到一个比主元小的元素
*   然后交换它们，重复这个过程，直到左指针超过了右指针。这个过程将使得比主元小的值都排在主元之前，而比主元大的值都排在主元之后。这一步叫作划分操作。
*   3.接着，算法对划分后的小数组（较主元小的值组成的子数组，以及较主元大的值组成的子数组）重复之前的两个步骤，直至数组已完全排序。
* */

console.log(quickSort(arr, 0, arr.length - 1))
function quickSort(array, left, right) {
  let index = null
  if(array.length > 1) {
    index = partition(array, left, right)
    if(left < index - 1) {
      quickSort(array, left, index - 1)
    }
    if(index < right) {
      quickSort(array, index, right)
    }
  }
  return array
}

function partition(array, left, right) {
  let pivot = array[Math.floor((right + left) / 2)]
  let i = left
  let j = right

  while (i <= j) {
    while (array[i] < pivot) {
      i++
    }
    while (array[j] > pivot) {
      j--
    }
    if( i <= j) {
      [array[i], array[j]] = [array[j], array[i]]
      i++
      j--
    }
  }
  return i
}

/*
* 堆排序
* 堆排序也是一种很高效的算法，因其把数组当做二叉树来排序而得名。这个算法会根据以下信息，把数组当做二叉树来管理。
* 1.索引0是树的根节点
* 2.除根节点外，任意节点N的父节点是N/2
* 3.节点L的左子节点是2*L
* 4.节点R的右子节点是2*R+1
* */
console.log(heapSort(arr))
function heapSort(array) {
  let heapSize = array.length
  buildHeap(array)
  while (heapSize > 1) {
    heapSize--
    [array[0], array[heapSize]] = [array[heapSize], array[0]]
    heapify(array, heapSize, 0)
  }
  return array
}

function buildHeap(array) {
  let heapSize = array.length
  for(let i = Math.floor(array.length / 2); i >=0; i--){
    heapify(array, heapSize, i)
  }
}

function heapify(array, heapSize, i) {
  let left = i * 2 + 1
  let right = i * 2 + 2
  let largest = i

  if(left < heapSize && array[left] > array[largest]) {
    largest = left
  }

  if(right < heapSize && array[right] > array[largest]) {
    largest = right
  }

  if(largest !== i) {
    [array[i], array[largest]] = [array[largest], array[i]]
    heapify(array, heapSize, largest)
  }
}


































