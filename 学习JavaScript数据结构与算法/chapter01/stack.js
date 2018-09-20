function Stack() {
  // 存储栈的元素
  let items = []
  /*
  * 栈的一些方法
  * push()：添加一个或几个新元素到栈顶
  * pop()：移除栈顶的元素，同时返回被移除的元素
  * peek(): 返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶元素，仅仅是返回元素）
  * isEmpty():如果栈里没有任何元素就返回true,否则返回false
  * clear(): 移除栈里的所有元素
  * size(): 返回栈里的元素个数。这个方法和数组的length属性类似。
  * */
  this.push = function (element) {
    items.push(element)
  }

  this.pop = function () {
    return items.pop()
  }

  this.peek = function () {
    return items[items.length - 1]
  }

  this.isEmpty = function () {
    return items.length === 0
  }

  this.clear = function () {
    items = []
  }

  this.size = function () {
    return items.length
  }
}
