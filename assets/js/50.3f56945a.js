(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{414:function(t,e,a){"use strict";a.r(e);var _=a(46),v=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"deepin-初上手攻略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deepin-初上手攻略"}},[t._v("#")]),t._v(" Deepin 初上手攻略")]),t._v(" "),a("p",[a("strong",[t._v("深度操作系统（Deepin）")]),t._v(" 是目前国内最流行和活跃的 Linux 发行版，一直以“免除新手痛苦、节约老手时间”为口号。")]),t._v(" "),a("p",[t._v("我从2020年 10月的 CSDN 程序员节开源大会上了解到这样一款优秀的国产 Linux 发行版，于是颇有兴致地在自己的笔记本电脑上进行了部署。原本我是很抗拒 Linux 系统的，借此机会抱着学习的心态，试试将 Linux 系统作为我的主力系统究竟如何，其结果超出了我的预料。他们确实做到了自己的口号！有一说一，这是我至今用到过的用户界面最美观的Linux 发行版，没有了有 Ubuntu 使用时那种界面操作一顿一顿的卡壳感，操作十分顺滑舒适 。经过几个月的磨合，我感觉和 Deepin 配合得已经比较默契了，真香！")]),t._v(" "),a("p",[t._v("Deepin 毕竟是基于 Linux 内核，对于普通用户肯定上手比较困难。因此写了这样一篇初上手攻略，希望以我浅薄的知识给初入 Deepin 大门的小伙伴们一些参考。相信读完此文后，小伙伴们能对 Deepin 以及 Linux 会有更深刻的认识，能融会贯通驾驭住 Deepin 系统！")]),t._v(" "),a("p",[t._v("第一次在 Deepin 社区文档里写文章，不知道该如何添加图片，大家先凑合着看吧～")]),t._v(" "),a("br"),t._v(" "),a("p",[a("font",{attrs:{color:"#6ba5fc",size:"4"}},[t._v("文章目录")])],1),t._v(" "),a("ul",[a("li",[t._v("[Deepin 初上手攻略](#Deepin 初上手攻略)\n"),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%AE%89%E8%A3%85-deepin-%E7%B3%BB%E7%BB%9F"}},[t._v("安装 Deepin 系统")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%88%9D%E6%AD%A5%E6%8C%87%E5%8C%97"}},[t._v("命令行初步指北")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85%E5%92%8C%E5%8D%B8%E8%BD%BD%E8%BD%AF%E4%BB%B6"}},[t._v("如何安装和卸载软件")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%B8%B8%E7%94%A8%E8%BD%AF%E4%BB%B6%E4%B8%80%E8%A7%88"}},[t._v("常用软件一览")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%90%8E%E7%BB%AD"}},[t._v("后续")])])])])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"安装-deepin-系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-deepin-系统"}},[t._v("#")]),t._v(" 安装 Deepin 系统")]),t._v(" "),a("p",[t._v("我们可以在"),a("RouterLink",{attrs:{to:"/02.经验分享/www.deepin.org/zh/download/"}},[t._v("Deepin 官网")]),t._v("上下载官方的系统镜像和深度启动盘制作工具。笔者最初使用的是比较流行的考录软件"),a("RouterLink",{attrs:{to:"/02.经验分享/cn.ultraiso.net/"}},[t._v("UltraIOS")]),t._v("来将镜像考录到 U 盘上，但是在安装系统时，遇到了没有图形引导界面的问题。因此推荐使用官方提供的启动盘制作工具进行考录，且该工具简洁易用，非常适合安装系统的新手。")],1),t._v(" "),a("p",[t._v("从官网上下载好 iso 镜像后（笔者下载的为"),a("code",[t._v("deepin-desktop-community-1002-amd64.iso")]),t._v("），用考录软件将镜像考录到格式化后的 U 盘。打开电脑的 BIOS 面板，在启动选项（Startup）栏中调整启动顺序，将 U 盘（USB Hard Disk）一项调整到最前面。关机，插入考录好的 U 盘，重新开机。根据系统安装引导，一步步完成系统的安装。")]),t._v(" "),a("p",[t._v("唯一需要注意的是，Deepin 系统安装在某一步会提示是否安装 "),a("code",[t._v("nvidia 闭源驱动")]),t._v("，推荐选否，然后系统会自动为你安装开源驱动。开源驱动更为稳定。")]),t._v(" "),a("p",[t._v("安装的详细流程可以参见 Deepin 官方的 "),a("a",{attrs:{href:"https://www.deepin.org/zh/installation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装引导"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"命令行初步指北"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令行初步指北"}},[t._v("#")]),t._v(" 命令行初步指北")]),t._v(" "),a("p",[t._v("作为一个系统桌面用户，私以为 Windows 和 Linux 最大的不同，就是 Linux 桌面系统具有十分好用且完善的命令行终端——Bash。用户通过键盘向 Bash 输入指令，计算机接收到指令后，予以执行。Bash 是 Linux 系统心灵的窗户，只有透过 Bash 这个窗口，用户才能真正与 Linux 相通，感受其独有的那一份魅力。")]),t._v(" "),a("p",[t._v("为什么需要掌握 Bash 呢？我平常用鼠标在桌面上这里点点，那里点点，不也可以完成日常的上网、办公等事项了吗，干嘛还要花时间学习命令行操作？诚然，Deepin 系统已经基于 Linux 做了很多优化，使得普通用户不用接触命令行也能正常使用系统；但一旦系统某一天突然出现了故障，例如某个软件安装出错了，亦或是电脑突然连不上网了，如果不能熟练使用 Bash，就很难找到病根，更不可能解决故障了。通过鼠标在图形化界面上的操作，犹如隔靴搔痒，难以直指病根。因此，如果你想长期使用 Deepin 系统，那么学习和使用 Bash 是无法绕开的一步。")]),t._v(" "),a("p",[t._v("不可否认的是，Bash 的上手难度非常高，常常被认为是一项难以掌握的技能，一串串不知所谓的复杂命令就让初学者望而却步。学习 Bash 就像是学习一门外语，我们已经能够与 Windows 系统顺畅沟通了，但想要与 Linux 推心置腹，就还得学习 Bash 这门“外语”，改变思维模式，熟悉一种新的交流方式，Linux 才能听懂我们在说什么，才愿意和我们交朋友。只要我们不畏惧这门“语言”，不断尝试与 Linux 进行交流，慢慢就会掌握 Bash 了。")]),t._v(" "),a("p",[t._v("当然，这里不会展开详细讲解命令行，只是给大家引个路，要是展开那妥妥的足够出一本书了。如果读者有兴趣深入了解 Linux 系统，鼎力推荐"),a("a",{attrs:{href:"linux.vbird.org"}},[t._v("《鸟哥的Linux私房菜》")]),t._v("，适合各类对 Linux 感兴趣的读者。")]),t._v(" "),a("p",[t._v("Deepin 中有两种方式打开命令行 Bash：一种是使用快捷键 "),a("code",[t._v("CTRL + ALT + T")]),t._v(" 呼出 Bash，这是最常用的方式；第二种是在文件夹中鼠标点击右键，选择“在终端中打开”，此时 Bash 打开后的目录就和文件夹所在的目录相同。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"img/右键.png",alt:"右键"}}),t._v(" "),a("p",[t._v("打开 Bash 后，可以在其设置界面调整窗体的透明度。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"img/bash设置.png",alt:"bash设置"}}),t._v(" "),a("p",[t._v("Deepin 的这个终端透明效果深得吾之喜爱。传统的黑底白字终端总觉得太死板了，年轻人就喜欢整点花哨的东西～"),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"img/屏幕.png",alt:"屏幕"}})]),t._v(" "),a("center",[a("font",{attrs:{color:"gray",size:"2"}},[t._v("谁会拒绝拥有磨砂玻璃效果的控制台呢？")])],1),t._v(" "),a("p",[t._v("下面列举一些 Bash 中常用的命令：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("命令")]),t._v(" "),a("th",[t._v("功能")]),t._v(" "),a("th",[t._v("英文全拼")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("poweroff")]),t._v(" "),a("td",[t._v("关机")]),t._v(" "),a("td",[t._v("power off")])]),t._v(" "),a("tr",[a("td",[t._v("reboot")]),t._v(" "),a("td",[t._v("重启")]),t._v(" "),a("td",[t._v("reboot")])]),t._v(" "),a("tr",[a("td",[t._v("sudo")]),t._v(" "),a("td",[t._v("以超级用户执行命令")]),t._v(" "),a("td",[t._v("super user do")])]),t._v(" "),a("tr",[a("td",[t._v("su")]),t._v(" "),a("td",[t._v("切换到超级用户模式")]),t._v(" "),a("td",[t._v("super user")])]),t._v(" "),a("tr",[a("td",[t._v("cd")]),t._v(" "),a("td",[t._v("切换工作目录")]),t._v(" "),a("td",[t._v("change directory")])]),t._v(" "),a("tr",[a("td",[t._v("ls")]),t._v(" "),a("td",[t._v("列出文件夹中所有文件")]),t._v(" "),a("td",[t._v("list")])]),t._v(" "),a("tr",[a("td",[t._v("mv")]),t._v(" "),a("td",[t._v("移动/重命名文件")]),t._v(" "),a("td",[t._v("move")])]),t._v(" "),a("tr",[a("td",[t._v("rm")]),t._v(" "),a("td",[t._v("删除文件")]),t._v(" "),a("td",[t._v("remove")])]),t._v(" "),a("tr",[a("td",[t._v("mkdir")]),t._v(" "),a("td",[t._v("新建一个文件夹")]),t._v(" "),a("td",[t._v("make directory")])]),t._v(" "),a("tr",[a("td",[t._v("touch")]),t._v(" "),a("td",[t._v("新建一个文件")]),t._v(" "),a("td",[t._v("touch")])]),t._v(" "),a("tr",[a("td",[t._v("pwd")]),t._v(" "),a("td",[t._v("显示当前工作目录")]),t._v(" "),a("td",[t._v("print working directory")])])])]),t._v(" "),a("p",[t._v("Linux 中所有命令都可以加上 "),a("code",[t._v("--help")]),t._v(" 参数来输出该命令的说明。以 "),a("code",[t._v("poweroff")]),t._v(" 命令为例。执行 "),a("code",[t._v("poweroff --help")]),t._v(" 指令后，便会得到关于"),a("code",[t._v("poweroff")]),t._v(" 命令的说明，包括该命令的功能以及用法。")]),t._v(" "),a("div",{staticClass:"language-(bash) extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$> poweroff --help\npoweroff [OPTIONS...]\n\nPower off the system.\n\n     --help      Show this help\n     --halt      Halt the machine\n  -p --poweroff  Switch off the machine\n     --reboot    Reboot the machine\n  -f --force     Force immediate halt/power-off/reboot\n  -w --wtmp-only Don't halt/power-off/reboot, just write wtmp record\n  -d --no-wtmp   Don't write wtmp record\n     --no-wall   Don't send wall message before halt/power-off/reboot\n\nSee the halt(8) man page for details.\n")])])]),a("p",[t._v("如果想知道更多关于该命令的细节，可以使用 "),a("code",[t._v("man")]),t._v(" 命令。")]),t._v(" "),a("div",{staticClass:"language-(bash) extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$> man poweroff\n")])])]),a("p",[t._v("如上指令便会得到 "),a("code",[t._v("poweroff")]),t._v(" 命令的说明页（Manual Page）。按 Q 键便能退出说明页。")]),t._v(" "),a("h2",{attrs:{id:"如何安装和卸载软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何安装和卸载软件"}},[t._v("#")]),t._v(" 如何安装和卸载软件")]),t._v(" "),a("p",[t._v("使用系统的第一件事就应该是给自己电脑上安装各种各样的软件吧！这里一共列举了 Deepin 上三种最常用的安装和卸载软件的方法。三种方法需要灵活变通，每款软件都有最适合它的安装方法。")]),t._v(" "),a("h3",{attrs:{id:"方法一-使用深度商店"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法一-使用深度商店"}},[t._v("#")]),t._v(" 方法一：使用深度商店")]),t._v(" "),a("p",[t._v("Deepin 内置的深度商店非常好用，一些常用的软件都可以直接在商店里下载。包括 TIM，Visual Studio Code，网易云音乐，搜狗拼音，Chrome，WPS，百度网盘等。目前深度商店里的应用还不多，但尚能满足普通电脑用户的日常所需。从深度商店下载安装和卸载软件流程简单，只需要点击一个按钮便可以完成，但缺点是应用较少，且部分软件版本相对落后。"),a("strong",[t._v("这个方法适合大部分普通用户。")])]),t._v(" "),a("h3",{attrs:{id:"方法二-从官网下载软件包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法二-从官网下载软件包"}},[t._v("#")]),t._v(" 方法二：从官网下载软件包")]),t._v(" "),a("p",[t._v("如果想要最新版的软件，直接从软件官网下载软件包来进行安装是更好的选择。以搜狗输入法的安装过程为例。首先，打开浏览器，去到"),a("a",{attrs:{href:"https://pinyin.sogou.com/linux/",target:"_blank",rel:"noopener noreferrer"}},[t._v("搜狗输入法官网"),a("OutboundLink")],1),t._v("，下载输入法安装包。（注意，Deepin 需要后缀名为 "),a("code",[t._v(".deb")]),t._v(" 的安装包）我下载的安装包是"),a("a",{attrs:{href:"https://ime.sogoucdn.com/dl/index/1608303807/sogoupinyin_2.4.0.2905_amd64.deb?st=Q-qb114fnDGIp8iziwYu-A&e=1608520415&fn=sogoupinyin_2.4.0.2905_amd64.deb",target:"_blank",rel:"noopener noreferrer"}},[t._v("sogoupinyin_2.4.0.2905_amd64.deb"),a("OutboundLink")],1),t._v("。浏览器下载的文件会默认放在 "),a("code",[t._v("下载")]),t._v(" 文件夹中。进入到 "),a("code",[t._v("下载")]),t._v(" 目录，打开控制台，使用 "),a("code",[t._v("apt")]),t._v(" 指令进行安装。")]),t._v(" "),a("div",{staticClass:"language-(bash) extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$> sudo apt install sogoupinyin_2.4.0.2905_amd64.deb\n")])])]),a("p",[t._v("指令执行后，apt 会计算并给出软件占用空间的大小，需要确认是否继续安装，有时还会确认是否安装依赖的软件包。我们只需要按下 Y 键（意为 yes，如果否就按下 N 键），然后敲击回车，安装便会继续。如果没有出现错误提示，安装就完成了。")]),t._v(" "),a("ul",[a("li",[t._v("注：传统的方法是使用 "),a("code",[t._v("dpkg")]),t._v(" 指令进行软件包的安装，但 "),a("code",[t._v("dpkg")]),t._v(" 安装过程中经常需要解决依赖问题，"),a("code",[t._v("apt")]),t._v(" 相比更加智能，因此更推荐使用 "),a("code",[t._v("apt")]),t._v(" 指令进行安装。")])]),t._v(" "),a("p",[t._v("如果想要卸载软件，则流程稍微复杂一些。假设我们要卸载搜狗输入法，那么首先需要使用 "),a("code",[t._v("apt")]),t._v(" 指令列出所有安装过的软件包。")]),t._v(" "),a("div",{staticClass:"language-(bash) extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$> apt list\n")])])]),a("p",[t._v("我们得从列出的软件包中找到我们安装的软件包的名字，才能对它进行卸载。但是通常列出的软件包有成百上千个，一个一个找并不合适。这时我们就需要借助"),a("a",{attrs:{href:"https://www.jianshu.com/p/9c0c2b57cb73",target:"_blank",rel:"noopener noreferrer"}},[t._v("管道"),a("OutboundLink")],1),t._v("和 "),a("code",[t._v("grep")]),t._v(" 指令。")]),t._v(" "),a("div",{staticClass:"language-（bash) extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$> apt list | grep --color sogou\n")])])]),a("p",[a("code",[t._v("grep")]),t._v(" 指令的用处是帮我们查找文本中匹配的字符串。上面这个命令是检索 "),a("code",[t._v("apt list")]),t._v(" 输出的列表中带有“sogou”字符串的行，"),a("code",[t._v("--color")]),t._v(" 参数能够将匹配的“sogou“字符以醒目的红色标出。笔者的电脑上该命令的输出如下。")]),t._v(" "),a("div",{staticClass:"language-(bash) extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("com.sougou.sogoupinyin/stable,now 2.2.0.0108-2 amd64 [已安装]\nfcitx-sogoupinyin-uk/未知,未知 0.1.0 all\nsogoupinyin/stable 2.3.1.0112 amd64\nsogoupinyin/未知 2.2.0.0108 i386\n")])])]),a("p",[t._v("可以看到，第一行的末尾有个 "),a("code",[t._v("[已安装]")]),t._v(" 的字样，因此第一行的 "),a("code",[t._v("com.sougou.sogoupinyin")]),t._v(" 就是我们要找的软件包的名字。然后我们就可以使用 "),a("code",[t._v("apt")]),t._v(" 指令卸载该软件包了。")]),t._v(" "),a("div",{staticClass:"language-(bash) extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$> sudo apt remove com.sougou.sogoupinyin\n")])])]),a("ul",[a("li",[t._v("注：实际上，软件包安装时就会给出软件包的名称 "),a("code",[t._v("com.sougou.sogoupinyin")]),t._v(" ，如果你记住了其名称，就不需要再使用 "),a("code",[t._v("apt list")]),t._v(" 指令去找了。")])]),t._v(" "),a("p",[a("strong",[t._v("这种方法比方法一麻烦许多，但熟悉后还是不难掌握。推荐大家可以尽量学习这种方法，下载自己想要的软件！")])]),t._v(" "),a("h3",{attrs:{id:"方法三-使用软件包管理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法三-使用软件包管理器"}},[t._v("#")]),t._v(" 方法三：使用软件包管理器")]),t._v(" "),a("p",[a("code",[t._v("apt")]),t._v(" 是 Deepin 自带的一个软件包管理器，主要用于自动从互联网的软件仓库中搜索、安装、升级、卸载软件或操作系统。一般从命令行使用该工具，也可以从深度商店下载 "),a("code",[t._v("新立得软件包管理器")]),t._v(" 来可视化地管理软件包。"),a("code",[t._v("apt")]),t._v(" 命令一般需要"),a("a",{attrs:{href:"https://baike.baidu.com/item/root%E6%9D%83%E9%99%90",target:"_blank",rel:"noopener noreferrer"}},[t._v("root权限"),a("OutboundLink")],1),t._v("执行，所以一般跟着 "),a("code",[t._v("sudo")]),t._v(" 命令。以下列举了"),a("code",[t._v("apt")]),t._v(" 命令的一些常用操作。")]),t._v(" "),a("div",{staticClass:"language-(bash) extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$> sudo apt install <package>   #安装软件包\n$> sudo apt remove <package>\t#移除软件包\n$> sudo apt update\t\t\t\t#更新可用软件包列表\n$> sudo apt upgrade \t\t\t#通过 安装/升级 软件来更新系统\n")])])]),a("p",[t._v("推荐第一次使用 "),a("code",[t._v("apt")]),t._v(" 时，先执行 "),a("code",[t._v("sudo apt update")]),t._v(" 和 "),a("code",[t._v("sudo apt upgrade")]),t._v(" 指令来更新系统软件包，然后再安装自己需要的软件。")]),t._v(" "),a("p",[t._v("以 "),a("code",[t._v("GNU图像处理程序(GIMP)")]),t._v(" 为例，可以通入如下指令下载安装 GIMP。")]),t._v(" "),a("div",{staticClass:"language-(bash) extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$> sudo apt install gimp\n")])])]),a("p",[t._v("该指令会自动在软件仓库中寻找匹配的软件包，然后安装下载。")]),t._v(" "),a("p",[t._v("这种方式下载的软件包，卸载方法和方法二中的相同，就不再赘述了。")]),t._v(" "),a("p",[t._v("尽管这种方法只用了一条指令就完成了软件的下载安装，看似非常简单好用，但实际上有很多局限性——许多软件并没有预装在 "),a("code",[t._v("apt")]),t._v(" 的软件仓库中，而且有些软件在仓库中的版本也较低，无法正常使用，因而需要用户自行甄别软件是否适合直接用 "),a("code",[t._v("apt")]),t._v(" 进行下载安装；安装过程中也时常会遇到各种依赖性的问题需要解决。"),a("strong",[t._v("因此，方法三仅推荐熟悉 Linux 的用户使用。")])]),t._v(" "),a("h2",{attrs:{id:"常用软件一览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用软件一览"}},[t._v("#")]),t._v(" 常用软件一览")]),t._v(" "),a("p",[t._v("上一章介绍了在 Deepin 上安装和卸载软件的方法，这一章就来谈一谈 Deepin 上目前十分实用的一些软件。以下软件如果没有特别说明，均可以在深度商店里直接进行下载。")]),t._v(" "),a("h3",{attrs:{id:"办公"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#办公"}},[t._v("#")]),t._v(" 办公")]),t._v(" "),a("p",[t._v("日常办公极力推荐 WPS 办公套件。在 Windows 系统上，笔者一贯使用的都是微软的 Office 办公套件，因为 WPS 上的各类广告实在太多了，让人心生厌恶，所以一直没有使用。让我非常惊讶的是 Linux 版本的 WPS 竟然没有广告，而且和 Linux 系统适配得十分完美，因此非常推荐在 Deepin 上使用。永中Office 也可以作为办公备选，WPS 的 UI 设计比较时尚，永中Office 的 UI 比较老旧，看个人喜好了。")]),t._v(" "),a("p",[t._v("Linux 版本的百度云也没有广告，界面十分简洁，也很推荐。")]),t._v(" "),a("p",[t._v("邮件软件推荐使用系统自带的 "),a("code",[t._v("雷鸟邮件")]),t._v("，功能齐全，十分好用。")]),t._v(" "),a("p",[t._v("编辑 "),a("code",[t._v("Markdown")]),t._v(" 文档推荐使用 "),a("code",[t._v("Typora")]),t._v("，编程推荐使用 "),a("code",[t._v("Visual Studio Code")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"上网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上网"}},[t._v("#")]),t._v(" 上网")]),t._v(" "),a("p",[t._v("推荐使用谷歌的 "),a("code",[t._v("Chrome")]),t._v(" 浏览器。建议不使用系统自带的火狐浏览器 "),a("code",[t._v("Firefox")]),t._v("，其兼容性较差，国内的网页经常加载不出来。")]),t._v(" "),a("h3",{attrs:{id:"输入法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入法"}},[t._v("#")]),t._v(" 输入法")]),t._v(" "),a("p",[t._v("可以使用系统自带的中文输入法。但如果想要输入法更加智能，还是推荐下载搜狗输入法。如果想要向搜狗输入法导入需要的词库，可以参考我的另一篇博文 "),a("a",{attrs:{href:"https://blog.csdn.net/Teri_Tor/article/details/111461984",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux 下如何使用搜狗词库"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"社交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#社交"}},[t._v("#")]),t._v(" 社交")]),t._v(" "),a("p",[t._v("因为腾讯的软件都没有支持 Linux，所以在深度商店里只能下载到QQ、TIM、微信的 wine 移植版本。移植版本的软件版本落后，问题较多，功能不全。例如 wine TIM 的截图功能无法使用（不过可以用 Deepin 的截图快捷键"),a("code",[t._v("CTRL + ALT + A")]),t._v(" 来代替）；wine 微信频繁闪退。这方面还是等 Deepin 官方后续的优化吧。")]),t._v(" "),a("h3",{attrs:{id:"娱乐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#娱乐"}},[t._v("#")]),t._v(" 娱乐")]),t._v(" "),a("p",[t._v("听音乐推荐下载网易云音乐。")]),t._v(" "),a("p",[t._v("玩游戏可以使用 steam，从 "),a("a",{attrs:{href:"https://store.steampowered.com/about/",target:"_blank",rel:"noopener noreferrer"}},[t._v("steam 官网"),a("OutboundLink")],1),t._v(" 下载 steam 安装包进行安装。steam 上很多游戏有 Linux 版本，不过不推荐在 Linux 系统上玩游戏，因为卡顿非常严重。Linux 上的游戏都是基于 OpenGL，比起Windows的 DirectX 优化差远了，显卡厂商也不会为 Linux 专门做驱动优化。因此，想玩游戏还是乖乖用 Windows吧。")]),t._v(" "),a("h3",{attrs:{id:"绘图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘图"}},[t._v("#")]),t._v(" 绘图")]),t._v(" "),a("p",[t._v("Adobe 套件没有 Linux 版本，所以在 Deepin 上就没法使用到 Adobe Photoshop (PS) 啦。不过我们可以使用 Photoshop 的代替品 "),a("code",[t._v("GNU图像处理程序(GIMP)")]),t._v(" 来帮助我们进行图像处理。使用 "),a("code",[t._v("apt")]),t._v(" 安装GIMP。")]),t._v(" "),a("div",{staticClass:"language-(bash) extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$> sudo apt install gimp\n")])])]),a("p",[t._v("GIMP 是一个免费的开源图像编辑器，十分小巧，只有 100M 左右的大小。用法和 PS 类似，不过 UI 界面以及功能快捷键和 PS 不太一样，习惯使用 PS 的小伙伴可能不习惯。")]),t._v(" "),a("p",[t._v("为了帮助从 PS 切换到 GIMP 的人，"),a("a",{attrs:{href:"https://diolinux.com.br/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Diolinux"),a("OutboundLink")],1),t._v(" 推出了一个在 GIMP 中模仿 PS 的工具——"),a("a",{attrs:{href:"https://github.com/Diolinux/PhotoGIMP",target:"_blank",rel:"noopener noreferrer"}},[t._v("PhotoGIMP"),a("OutboundLink")],1),t._v("。PhotoGIMP 是 GIMP 的一个插件。下载下来后，将其替换原本 GIMP 的配置文件就能生效了。PhotoGIMP的效果图如下：")]),t._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"img/GIMP.jpg",alt:"GIMP"}}),t._v(" "),a("p",[t._v("不过笔者在 Deepin 上使用该插件时遇到了一些兼容性的问题，有兴趣的小伙伴可以自己试试。")]),t._v(" "),a("h2",{attrs:{id:"后续"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后续"}},[t._v("#")]),t._v(" 后续")]),t._v(" "),a("p",[t._v("这次博文先写到这儿，感觉要说的内容还是挺多的，希望这篇文章能够帮助大家。如果反响好的话，后续会持续更新。如果文章中有错误，或是没说清楚的地方，亦或是抱有疑问想与我交流，欢迎邮件联系 aaronxyliu@qq.com。不吝赐教！")])],1)}),[],!1,null,null,null);e.default=v.exports}}]);