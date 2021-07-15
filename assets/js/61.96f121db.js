(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{419:function(t,e,a){"use strict";a.r(e);var r=a(44),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"如何基于erc20发行自己的代币"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何基于erc20发行自己的代币"}},[t._v("#")]),t._v(" 如何基于ERC20发行自己的代币")]),t._v(" "),a("blockquote",[a("p",[t._v('如今区块链的发展越来越迅速,也越来越被大众所熟知.而BTC作为区块链的一个产物,相信大家都听说过,甚至于持有过BTC.而以太坊（英文Ethereum）是一个开源的有智能合约功能的公共区块链平台，通过其专用加密货币以太币（Ether，简称"ETH"）提供去中心化的以太虚拟机（Ethereum Virtual Machine）来处理点对点合约。而正是以太坊智能合约让我们发行自己的代币成为一种不是那么难的事情')])]),t._v(" "),a("h2",{attrs:{id:"安装插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装插件"}},[t._v("#")]),t._v(" 安装插件")]),t._v(" "),a("p",[t._v("下面来讲讲在以太坊测试网络发行自己代币的一些流程\n首先,我们需要爬墙出去,安装一个叫做metamask的Chrome插件吧,"),a("a",{attrs:{href:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",target:"_blank",rel:"noopener noreferrer"}},[t._v("点我安装"),a("OutboundLink")],1),t._v("\n安装metamask插件,添加至扩展程序,然后使用metamask,创建自己的账号,记住这些助记词,相当于自己的密钥.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191214134439187.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21vZ3V6aGFsZQ==,size_16,color_FFFFFF,t_70",alt:"此处输入图片的描述"}})]),t._v(" "),a("p",[t._v("点击切换到测试网络,一个代币在发布到正式环境之前肯定是要在测试网络进行开发测试的,毕竟在正式网络上都是要钱的啊.这里我们选择的是Ropsten 测试网络,刚开始我们的测试网络上的ETH是0,所以我们要先获取一些测试网络上的ETH,以供我们做测试使用.")]),t._v(" "),a("h2",{attrs:{id:"获取测试币"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取测试币"}},[t._v("#")]),t._v(" 获取测试币")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/2019121413443473.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21vZ3V6aGFsZQ==,size_16,color_FFFFFF,t_70",alt:"此处输入图片的描述"}})]),t._v(" "),a("p",[t._v("这里我们从测试水龙头中获取一些ETH")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191214134439223.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21vZ3V6aGFsZQ==,size_16,color_FFFFFF,t_70",alt:"此处输入图片的描述"}}),t._v("\n这里的第一个是获取,第二个是捐赠,我们点击第一个获取就行了,可以看到下面会生成一个hash,\n在 "),a("a",{attrs:{href:"https://teth.bitaps.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://teth.bitaps.com/"),a("OutboundLink")],1),t._v(" 这个网站将刚刚生成的hash复制进去查询,就可以看到相对应的ETH转账记录.\n这里可以看到,我们的metamask已经刷新了,我们已经拥有了测试网络的ETH.")]),t._v(" "),a("h2",{attrs:{id:"编写合约代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写合约代码"}},[t._v("#")]),t._v(" 编写合约代码")]),t._v(" "),a("p",[t._v("接下来,我们打开 "),a("a",{attrs:{href:"https://remix.ethereum.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://remix.ethereum.org/"),a("OutboundLink")],1),t._v(" 这个网站,这是一个名叫remix的在线编辑器,专门用于编写智能合约,这个编辑器也有本地的安装版本,在其github中可以获取到,这是官方推荐的编辑器,我们可以使用solidity编写智能合约.( 这里推荐一个编程游戏,可以教你学会简单的solidity , "),a("a",{attrs:{href:"https://cryptozombies.io/zh/course",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cryptozombies.io/zh/course"),a("OutboundLink")],1),t._v("  ,这是一个打僵尸的游戏)")]),t._v(" "),a("p",[t._v("在remix中新建一个文件,命名为MyToken.sol.注意这里用solidity编写的文件后缀名都是.sol ,在这个文件中编写我们自己的智能合约.")]),t._v(" "),a("h2",{attrs:{id:"编译部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译部署"}},[t._v("#")]),t._v(" 编译部署")]),t._v(" "),a("p",[t._v("编写完智能合约以后,我们要先进行编译.之后才是deploy我们的代币.\n这里我们使用的环境选择 Injected Web3,填写好deploy的参数\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191214134439195.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21vZ3V6aGFsZQ==,size_16,color_FFFFFF,t_70",alt:"此处输入图片的描述"}})]),t._v(" "),a("p",[t._v("点击transact后 再次确认,就可以了,至此我们的智能合约就完成了.\n然后复制 Deployed Contracts 的智能合约地址, 在metamask中点击添加代币,自定义代币,将刚刚复制的智能合约的地址黏贴进去,就可以看到,我们刚刚创建时的tokenSymbol已经自动关联起来了,添加完代币以后,就可以看见我们刚刚创建的代币已经显示出来了,代币的名字其实是可以用中文的.")]),t._v(" "),a("p",[t._v("自此,一个在测试网络的代币已经生成了.\n现在你是不是觉得那些在币圈的大部分币都是空气币了,因为发行一个token是如此的简单,几乎是没有什么成本.")])])}),[],!1,null,null,null);e.default=s.exports}}]);