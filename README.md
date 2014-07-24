# 来源去向图设计

## 需求

- 目前展示的节点较少

- 流量流动的表现不够形象

- 流量的变化趋势无法获知

- 不支持drill down

- 能把500个节点都有方式展现或是使用到

- 后继会有的看单来源的去向或是单去向的来源交互

- 考虑一下多种粒度的数据切换

- 该页造成的转化率显示

- 点击来源，标识他的去向

- 不同的指标数据切换

- 特殊标识跳出的流量

- 展示页面跳失率

## 借鉴

- [Map of the Market](http://www.marketwatch.com/tools/stockresearch/marketmap)

- [D3 Treemap](http://bl.ocks.org/mbostock/4063582)

- [D3 Treemap II](http://mbostock.github.io/d3/talk/20111018/treemap.html)

- [Obama’s 2012 Budget Proposal: How $3.7 Trillion is Spent](http://www.nytimes.com/packages/html/newsgraphics/2011/0119-budget/)

- [Zoomable Treemaps](http://bost.ocks.org/mike/treemap/)

- [FoamTree](http://get.carrotsearch.com/foamtree/demo/demos/large.html)

## 聚类

普通的 URL 信息对用户没有任何意义。
鉴于我们拥有500个节点的数据，
如果不分类，那数据可读性是极差的。
这个工作也不能下发给用户，
作为上游，应该由我们来完成。

能不能获取来源的spm信息？
然后按照spm的1，2，3，4位去分类？
类的name就是spm的定义名

## API 定义

后端提供简单处理过的原始数据data.json，
给的数据流应该是 **无交集** 的
注意 from 和 to 都应该尽可能是子节点到子节点，不得已的话，
也允许父节点到子节点，子节点到父节点这样的流量。

然后后端提供的数据里请不要出现其他，
请包含完整的原始归类数据，其他由前端排版时自行判断生成。

然后提供 nodes.json，表示节点树。

nodename 是可重名的，但是 ID 在整个树里都是不可重名的。
每个节点都应该有　id, nodeName, childNodes 三个字段，
若无子节点，则 childNodes 设为 []。

前端按照节点树处理数据呈现相关的图表。
