/*
前言
    算法是指用来操作数据、解决程序问题的一组方法。对于同一个问题，使用不同的算法，也许最终得到的结果是一样的，但在过程中消耗的紫竹院和时间却会有很大的差别。那么我们应该怎样去衡量
不同算法之间的优劣呢？
    主要还是从算法占用的事件和空间两个维度去考量。
        1.时间维度:是指执行当前算法所消耗的时间，我们通常用时间复杂度来描述。
        2.空间维度:只指执行当前算法所需要占用多少内存空间，我们通常用空间复杂度来描述。
    因此，评价一个算法的效率主要是看它的时间复杂度和空间复杂度的情况。然而，有的时候时间和空间却又是鱼和熊掌那样，不可兼得。那么就需要我们从中取得一个平衡点。

算法介绍
    排序也称排序算法，排序是将一组数据，依指定的顺序进行排列的过程。

排序的分类
    1.内部排序
        指将需要处理的所有数据都加载到内部存储器(内存)中进行排序
    2.外部排序
        数据量过大，无法全局加载到内存中，需要借助外部存储（文件等）进行排序。

常见的排序算法分类
    排序{
        内部排序: {
            插入排序:{
                直接插入排序: '',
                希尔插入排序: ''
            },
            选择排序: {
                简单选择排序: '',
                堆排序: ''
            },
            交换排序: {
                冒泡排序: '',
                快速排序: ''
            },
            归并排序: '',
            基数排序: ''
        }
        外部排序：使用内存和外存结合
    }

算法的时间复杂度
    1.度量程序(算法)执行时间方法
        1.事后统计的方法
            这种方法可行，但是有两个问题：
                1.是要想对设计的算法的运行性能进行评测，需要实际运行该程序。
                2.是所得时间的统计量依赖于计算机的硬件，软件等环境因素，这种方式，要在同一台计算机上相同状态下运行，才能比较哪个算法更快。
        2.事前估算的方法
            因事后统计方法更多依赖于计算机的硬件，软件等环境因素，有时容易掩盖算法本身的优劣。因此人们通常采用事前分析估算的方法，在编写程序前
        依据统计方法对算法进行估算。一个用高级语言编写的程序在计算机上运行时所消耗的时间取决于下列因素：
                1.算法采用的策略、方法
                2.编译产生的代码质量
                3.问题的输入规模
                4.及其执行指令的速度
        通过分析某个算法的时间复杂度拉力判断哪个算法更优。

    2.时间频度
        1.时间频度：一个算法花费的时间与算法中语句的执行次数成正比。哪个算法中语句执行次数多，它花费的时间就多。
    一个算法中的语句执行次数称为语句频度或时间频度。记为T(n)。

    3.时间复杂度
        1.一般情况下，算法中的基本操作语句的重复执行次数是问题规模n的某个函数，用T(n)表示，若有某个辅助函数f(n)，使得n趋近于无穷大时，
    T(n)/f(n)的极限值为不等于零的常数，则称f(n)是T(n)的同数量级函数。记作T(n) = O(f(n)),成O(f(n))为算法的渐进时间复杂度，简称时间复杂度。
        2.T(n)不同，但时间复杂度可能相同。
        3.计算时间复杂度的方法：
                1.用常数1代替运行时间中所有加法常数T(n) = n^2 + 7n + 6 => T(n) = n^2+7n+1
                2.修改后的运行次数函数中，值保留最高阶项T(n) = n^2 + 7n + 1 => T(n) = n^2
                3.去除最高阶项的系数T(n) = n^2 => T(n) = n^2 => O(n^2)

    4.常见的时间复杂度
        1.常数阶O(1),
        2.对数阶O(log2n)
        3.线性阶O(n)
        4.线性对数阶O(nlog2n)
        5.平方阶O(n^2)
        6.立方阶O(n^2)
        7.K次方阶O(n^k)
        8.指数阶O(2^n)
    常见的时间复杂度由小到大排序也跟上面的一样。上述时间复杂度不断增大，算法执行效率就越低。


    1.常数阶
        无论代码执行了多少行，只要是没有循环等复杂结构，那这个代码的时间复杂度就是O(1)。
    2.对数阶O(log2n)
        在循环中，每次都乘以2，成晚之后，i距离n就月来月接近。假设循环x次之后，i就大于n了。此时这个循环就退出了，也就是说2的x次方等于n
*/