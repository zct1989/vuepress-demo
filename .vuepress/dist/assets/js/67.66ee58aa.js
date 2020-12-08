(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{384:function(t,e,_){"use strict";_.r(e);var v=_(39),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"_002-基础概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_002-基础概念"}},[t._v("#")]),t._v(" 002 基础概念")]),t._v(" "),_("p",[t._v("之前我们已经搭建好了基础的环境，今天我们先来了解一下一些相关概念，主要知道一下机器学习的类型以及和数据的相关概念。")]),t._v(" "),_("h4",{attrs:{id:"机器学习的类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#机器学习的类型"}},[t._v("#")]),t._v(" 机器学习的类型")]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("首先我们先了解一下机器学习的主流类型，主要有**"),_("code",[t._v("监督学习")]),_("strong",[t._v(",")]),_("code",[t._v("无监督学习")]),_("strong",[t._v(",")]),_("code",[t._v("强化学习")]),_("strong",[t._v(",")]),_("code",[t._v("深度学习")]),t._v("**几种。")]),t._v(" "),_("p",[_("strong",[t._v("监督学习")])]),t._v(" "),_("p",[t._v("监督学习是指提供了带标记的数据，提供的数据包括基本的输入数据以及期望的输出数据，算法会根据标记的预期数据不断来训练模型，来生成一个与预期数据接近的模型。")]),t._v(" "),_("p",[_("strong",[t._v("无监督学习")])]),t._v(" "),_("p",[t._v("无监督学习是指提供的数据是无标记的数据，需要机器从无标记的数据中探索并推动出潜在的联系。")]),t._v(" "),_("p",[t._v("** 强化学习 **")]),t._v(" "),_("p",[t._v("强化学习是带有激励机制的学习方式，即是如果机器行动正确在产生正激励，如果机器行动错误则产生负激励。在这样的场景下来获取最大的利益，达到激励最大化。")]),t._v(" "),_("p",[t._v("** 深度学习 **")]),t._v(" "),_("p",[t._v("深度学习是基于神经网络的算法衍生的，以人工神经网络为架构，对资料进行表征学习的算法。")]),t._v(" "),_("h4",{attrs:{id:"数据与数据集"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据与数据集"}},[t._v("#")]),t._v(" 数据与数据集")]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("机器学习离不开数据集，我们先来看一下下面的表：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("序号")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("国家")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("性别")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("年龄")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("收入")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("中国")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("男")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("24")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("3500")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("中国")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("女")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("44")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("12500")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("美国")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("男")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("28")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("25000")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("日本")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("男")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("34")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("18000")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("中国")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("男")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}}),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("17500")])])])]),t._v(" "),_("p",[t._v("在上面的数据中我们把整个数据表称为"),_("strong",[t._v("数据集")]),t._v("，我们把其中的一行称为一个"),_("strong",[t._v("样例")]),t._v("，在表格中的一列我们将其成为一个"),_("strong",[t._v("特征")]),t._v(",而某一列的具体一个数值我们将其称为"),_("strong",[t._v("属性值")]),t._v("。当然数据表中可能也有空白的数据，如第5行中的年龄既是空白，我们将这样的空白称为"),_("strong",[t._v("缺失数据")]),t._v("。")]),t._v(" "),_("p",[t._v("在以上的数据表中我们经常期望根据不同国家的人的性别与年龄可以推断出其收入，那么我们可以将上面的表分为两张表：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("序号")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("国家")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("性别")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("年龄")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("中国")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("男")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("24")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("中国")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("女")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("44")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("美国")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("男")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("28")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("日本")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("男")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("34")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("中国")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("男")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")])])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("序号")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("收入")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("3500")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("12500")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("25000")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("18000")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("17500")])])])]),t._v(" "),_("p",[t._v("我们期望可以从第一张表去推断出第二张表，如上我们可以将第一张表的数据称为"),_("strong",[t._v("自变量")]),t._v("，而第二张表的数据成为"),_("strong",[t._v("因变量")]),t._v("。")]),t._v(" "),_("p",[t._v("在实践中我们还需要将数据分为两部分，一部分用来训练模型，而另一部分用来测试我们生成的模型是否准确，这样我们可以将数据分为如下两部分")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("序号")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("国家")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("性别")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("年龄")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("中国")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("男")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("24")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("中国")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("女")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("44")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("美国")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("男")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("28")])])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("序号")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("国家")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("性别")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("年龄")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("日本")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("男")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("34")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("中国")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("男")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")])])])]),t._v(" "),_("p",[t._v("第一个表格我们用来训练模型，我们将其成为"),_("strong",[t._v("训练集")]),t._v("，而第二个模型我们将其称为"),_("strong",[t._v("测试集")]),t._v("。")]),t._v(" "),_("p",[t._v("之后我们会接着说说数据预处理，数据预处理是在进行机器学习之前的另一个必要的操作。")])])}),[],!1,null,null,null);e.default=a.exports}}]);