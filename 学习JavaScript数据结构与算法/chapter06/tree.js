/*
* 和链表一样，将通过指针来表示节点之间的关系（术语称其为边）。在双向链表中，每个节点包含两个指针，一个指向下一个节点，另一个指向上一个节点。
* 对于树，使用同样的方式（也是使用两个指针）但是，一个指向左侧子节点，另一个指向右侧子节点。因此，将声明一个Node类来表示书中的每个节点。
* 在书中我们需要实现下面方法：
* insert(key): 向树中插入一个新的键
* search(key): 在树中查找一个键，如果节点存在，则返回true,如果不存在，则返回false
* inOrderTraverse: 通过中序遍历方式遍历所有节点
* preOrderTraverse: 通过先序遍历方式遍历所有节点
* postOrderTraverse: 通过后序遍历方式遍历所有节点
* min: 返回树中最小的值/键
* max: 返回树中最大的值/键
* remove(key): 从树中移除某个键
* */
function BinarySearchTree() {


  let Node = function (key) {
    this.key = key
    this.left = null
    this.right = null
  }

  let root = null

  let insertNode = function (node, newNode) {
    if(newNode.key < node.key) {
      if(node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if(node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }

  let inOrderTraverseNode = function (node, callback) {
    if(node !== null) {
      inOrderTraverseNode(node.left, callback)
      callback(node.key)
      inOrderTraverseNode(node.right, callback)
    }
  }

  let preOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      callback(node.key)
      preOrderTraverseNode(node.left, callback)
      preOrderTraverseNode(node.right, callback)
    }
  }

  let postOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback)
      postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  /*
  * 要向树中插入一个新节点，有三个步骤：
  * 第一步： 创建用来表示新节点的Node类实例。只需要向构造函数传递我们想用来插入树的节点值。它的左指针和右指针都会由构造函数自动设置为null
  * 第二步： 要验证这个插入操作是否为一种特殊情况。这个特殊情况就是我们要插入的节点和树的第一个节点。如果是，就将根节点指向新节点。
  * 第三步：将节点加在非根节点的其他位置。
  * */
  this.insert = function (key) {
    let newNode = new Node(key)
    if(root === null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }

  /*
  * 中序遍历
  * 中序遍历是一种以上行顺序访问BST所有节点的遍历方式，也就是以从最小到最大的顺序访问所有节点。中序遍历的一种应用就是对树进行排序操作。
  * */
  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback)
  }

  /*
  * 先序遍历
  * 先序遍历是以优于后代节点的顺序访问每个节点的。先序遍历的一种应用是打印一个结构化的文档。
  * */
  this.preOrderTraverse = function (callback) {
    preOrderTraverseNode(root, callback)
  }

  /*
  * 后序遍历
  * 后序遍历则是先访问节点的后代节点，在访问节点本身。后序遍历的一种应用是计算一个目录和它子目录中所有文件所占空间的大小。
  * */
  this.postOrderTraverse = function (callback) {
    postOrderTraverseNode(root, callback)
  }

  /*
  * 搜索最小值
  * */
  let minNode = function (node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left
      }
      return node.key
    }
    return null
  }
  this.min = function () {
    return minNode(root)
  }

  /*
  * 搜索最大值
  * */
  let maxNode = function (node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right
      }
      return node.key
    }
    return null
  }
  this.max = function () {
    return maxNode(root)
  }
  /*
  * 搜索特定值
  * */
  let searchNode = function (node, key) {
    if (node === null) {
      return false
    }
    if(key < node.key) {
      return searchNode(node.left, key)
    } else if(key > node.key) {
      return searchNode(node.right, key)
    } else {
      return true
    }
  }

  this.search = function (key) {
    return searchNode(root, key)
  }

}































































































