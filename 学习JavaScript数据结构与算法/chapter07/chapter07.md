图的相关术语
  图是网络结构的抽象模型。图是一组边连接的节点（或顶点）。
  一个图等于一组顶点跟一组边（连接顶点）

相邻顶点
  由一条边连接在一起的顶点称为相邻顶点。

度
  一个顶点的度是其相邻顶点的数量。

路径
  是各个顶点的一个个连续序列。

简单路径
  要求不包含重复的顶点。（去除最后一个顶点）

环
  也是简单的路径(ADCA)(最后一个顶点重回A)

无环
  如果图中不存在环，则该图称为无环。如果图中每个顶点都存在路径，则该图是连通的。

有向图和无向图

  图可以是无向的（边没有方向）或者是有向的
  如果图中每两个顶点间在双向上都存在路径，则该图是强连通的。

  图还可以是未加权的或者是加权的。


图的表示
  从数据结构的角度来说，我们有多种方式来表示图。在所有的表示法中，不存在绝对正确的方式。图的正确表示法取决于解决的问题和图的类型


邻接矩阵
  图最常见的实现是邻接矩阵。每个节点都和一个整数相关联，该整数将作为数组的索引。我们用一个二维数组来表示顶点之间的连接。
  如果索引为i的节点和索引为j的节点相邻，则array[i][j] === 1,否则array[i][j] === 0
  不是强连通的图（稀疏图）如果用邻接矩阵来表示，则矩阵中会有很多0，这意味着我们浪费了计算机存储空间来表示根本不存在的边。


邻接表
  我们也可以使用一种叫做邻接表的动态数据结构来表示图。邻接表由图中每个顶点的相邻顶点列表所组成。存在号几种方式来表示这种数据结构。我们可以用列表
  （数组）、链表、甚至是散列表或者字典来表示相邻顶点列表。下面的示意图展示了邻接表数据结构。
  尽管邻接表可能对大多数问题来说都是更好的选择，但以上两种表示法都很有用，而且它们有不同的性质。

关联矩阵
  我们还可以用关联矩阵来表示图。在关联矩阵中，矩阵的行表示顶点，列表示边。

图的遍历
  和数据结构类似，我们也可以访问图的所有节点。有两种算法可以对图进行遍历：广度优先搜索（BFS）和深度优先搜索(DFS)。
  图的遍历可以用来寻找特定的顶点或寻找两个顶点之间的路径，检查图是否连通，检查图是否含有环等等。

  图遍历算法的思想是必须追踪每个第一次访问的节点，并且追踪有哪些节点还没有被完全探索。对于两种遍历算法，都需要明确指出第一个被访问的顶点。

  为了保证算法的效率，务必访问每个顶点至多两次。连通途中每条边和顶点都会被访问到。

  广度优先搜索算法和深度优先搜索算法基本上是相同的，只有一点不同，那就是待访问顶点列表的数据结构。

广度优先搜索
  广度优先搜索算法会从指定的第一个顶点开始遍历图，先访问其所有的相邻点，就想访问图的一层。换句话说，就是先宽后深地访问顶点。













































































