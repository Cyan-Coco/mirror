module.exports = {
    hasMore: false,
    begincourse: {
        list: [
            {
                id: 1,
                title: 'HTML教程',
                content: 'HTML指超文本标签语言。HTML是通向WEB技术世界的钥匙，在W3CSchool的HTML教程中，您将学习如何使用HTML来创建站点。HTML非常容易学习！你会喜欢它的！',
                cover: '../../../resource/images/course/cover_html.png',
                coursetype: 'htmltags'
            },
            {
                id: 2,
                title: 'HTML5教程',
                content: '通过这本教程的学习，你可以了解HTML基础知识、HTML代码规范、HTML标签列表。如果你之前学习过 HTML教程，想必会对于HTML5的特性更加了解。看完HTML5之后，你还可以辅助以一些CSS样式的教程来进行学习。学好HTML5的话，相信制作一个精美的网站对于你而言不再是难题。',
                cover: '../../../resource/images/course/cover_html5.png',
                coursetype: 'html5tags'
            },
            {
                id: 3,
                title: 'CSS教程',
                content: '本教程主要描述如何通过CSS来大大提升网页开发的工作效率！在我们的 CSS 教程中，您会学到如何使用 CSS 同时控制多重网页的样式和布局。',
                cover: '../../../resource/images/course/cover_css.png',
                coursetype: 'cssref'
            },
            {
                id: 4,
                title: 'CSS3教程',
                content: 'CSS3使用了层叠样式表技术，可以对网页布局、字体、颜色、背景灯效果做出控制。css3作为css的进阶版，拆分和增加了盒子模型、列表模块、语言模块 、背景边框 、文字特效 、多栏布局等等。CSS3的改变有很多，增加了文字特效，丰富了下划线样式，加入了圈重点的功能。在边框方面，有了更多的灵活性，可以更加轻松地操控渐变效果和动态效果等等。在文字效果方面，特意增加了投影。',
                cover: '../../../resource/images/course/cover_css3.jpg',
                coursetype: 'css3ref'
            },
            {
                id: 5,
                title: 'javascript教程',
                content: 'Javascript，从“最被误解的语言”，最后神奇地转变成为“最流行的语言”，证明它经受得起时间的考验。虽然单独来看，它的交互设计有些失败，但是加上Ajax的完美配合，javascript就成了一款轻便并且又实用的好语法。接下来让我们静下心来，翻开这本关于Javascript的教程，你可以学习到JavaScript 代码规范、JavaScript 函数撰写、javascript 正则表达式、JavaScript 逻辑运算等基础内容，除此之外，本书还有进阶的Javascript高级教程，最好在熟读前面的基础知识之后，再考虑继续之后的教程。',
                cover: '../../../resource/images/course/cover_javascript.jpg',
                coursetype: 'jsguide'
            },
            {
                id: 6,
                title: '正则表达式',
                content: '正则表达式，又称规则表达式，是一种文本模式，通常用来检索、替换和控制文本。主要包括a 到 z 的字母以及一些特殊的元字符。正则表达式的应用范围非常之广泛，最初是由Unix普及开来的，后来在广泛运用于Scala 、PHP、C# 、Java、C++ 、Objective-c、Perl 、Swift、VBScript 、Javascript、Ruby 以及Python等等。学习正则表达式，实际上是在学习一种十分灵活的逻辑思维，联系通过简单快速的方法达到对于字符串的控制。也许跟如此多的程序语言挂钩看起来有些生涩难懂，但是它也能够很轻松地在Microsoft Word上实现。',
                cover: '../../../resource/images/course/cover_78.png',
                coursetype: 'reg'
            }

        ]
    },
    frontendcourse:{
        list:[
            {
                id: 1,
                title: 'jQuery教程',
                content: 'jQuery的字面意思其实就是JavaScript和查询（Query），即用于辅助开发JavaScript的库。jQuery是继prototype之后的又一个优质的Javascript库，属于开源编程语言。',
                cover: '../../../resource/images/course/cover_jquery.png',
                coursetype: 'jqguide'
            },
            {
                id: 2,
                title: 'bootstrap教程',
                content: 'Bootstrap，来自 Twitter，是目前最受欢迎的前端框架。Bootstrap 是基于 HTML、CSS、JavaScript的，它在jQuery的基础上进行了更为个性化和人性化的完善，形成一套自己独有的网站风格，并兼容大部分jQuery插件。Bootstrap简洁灵活，使得 Web 开发更加快捷。其最大的优势是响应式布局，使得开发者可以方便的让网页无论在台式机、平板设备、手机上都获得最佳的体验。',
                cover: '../../../resource/images/course/cover_bootstrap.png',
                coursetype: 'bs'
            },
            {
                id: 3,
                title: 'JSON教程',
                content: 'JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。它基于ECMAScript的一个子集。 JSON采用完全独立于语言的文本格式，但是也使用了类似于C语言家族的习惯（包括C、C++、C#、Java、JavaScript、Perl、Python等）。这些特性使JSON成为理想的数据交换语言。 易于人阅读和编写，同时也易于机器解析和生成(一般用于提升网络传输速率)。',
                cover: '../../../resource/images/course/cover_json.png',
                coursetype: 'json'
            },
            {
                id: 4,
                title: 'AJAX教程',
                content: 'JAX即“Asynchronous Javascript And XML”（异步JavaScript和XML），是指一种创建交互式网页应用的网页开发技术。AJAX = 异步 JavaScript和XML（标准通用标记语言的子集）。AJAX 是一种用于创建快速动态网页的技术。通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。传统的网页（不使用 AJAX）如果需要更新内容，必须重载整个网页页面。',
                cover: '../../../resource/images/course/cover_ajax.png',
                coursetype: 'ajax'
            },
            {
                id: 5,
                title: 'HTML DOM教程',
                content: 'DOM是Document Object Model文档对象模型的缩写，是W3C组织推荐的处理可扩展标志语言的标准编程接口。根据W3C DOM规范，DOM是一种与浏览器，平台，语言无关的接口，使得你可以访问页面中其他的标准组件。简单理解，DOM解决了Netscape的JavaScript和 Microsoft的JavaScript之间的冲突，给予web设计师和开发者一个标准的方法，让他们来访问他们站点中的数据、脚本和表现层对象。',
                cover: '../../../resource/images/course/cover_htmldom.png',
                coursetype: 'htmldom'
            },
            {
                id: 6,
                title: 'jQuery EasyUI教程',
                content: 'jQuery EasyUI是一组基于jQuery的UI插件集合体，而jQuery EasyUI的目标就是帮助web开发者更轻松的打造出功能丰富并且美观的UI界面。开发者不需要编写复杂的javascript，也不需要对css样式有深入的了解，开发者需要了解的只有一些简单的html标签。',
                cover: '../../../resource/images/course/cover_59.png',
                coursetype: 'jqui'
            }
        ]
    },
    mobcourse:{
        list:[
            {
                id: 1,
                title: 'Swift 教程',
                content: 'SWIFT是第一套具有与脚本语言同样的表现力和趣味性的系统编程语言，由苹果于2014年全新发布，用于搭建基于苹果平台的应用程序，编写 iOS 和 OSX 应用。2015年，苹果公司开放SWIFT源代码。Swift 是一种全新的编程语言，结合了 C 和 Objective-C 的优点，并且不受C兼容性的限制。Swift 采用的安全编程模式添加了很多新特性，这使得编程更简单，更灵活，也更有趣。Swift 在 Foundation 和 Cocoa的基础上构建框架，并且采用了很多 Objective-C 的命名参数以及动态对象模型，并且支持过程式编程和面向对象编程。Swift 将现代编程语言的精华和苹果工程师文化的智慧结合了起来，既能够开发简单的小程序，也能够构建出一套完整的操作系统。',
                cover: '../../../resource/images/course/cover_swift.jpeg',
                coursetype: 'swift'
            },
            {
                id: 2,
                title: 'iOS开发手册',
                content: '开发一个优秀的IOS应用，需要学会很多知识。在本教程当中，就给诸位介绍了很多实用的理念，让想要的效果最终呈现在苹果手机的屏幕上，当然也可以在Mac电脑上实用模拟器来运行。在动手写代码之前需要作出决策，对于具体的功能有着周全的考虑，并且选择好会运用到的数据模型，以及用户个性界面。ios系统是封闭性的，扩展相对不足，但是移植性不错，iOS提供最广泛的基于标准的物理和逻辑协议接口从双绞线到光纤，从局域网到园区网到广域网，Novell NetWare，UNIX，SNA等等等等。要让应用出彩，就有必要在开发进程中将运用放到实在设备上进行测验，而不是仅在模拟器中运转一下。要在iOS设备中运转运用，你需求对测验用的设备进行注册，创立证书以便开发者对应用进行签名，并创立用于辨认该应用的身份编码。',
                cover: '../../../resource/images/course/cover_ios.png',
                coursetype: 'iosref'
            },
            {
                id: 3,
                title: 'jQuery Mobile教程',
                content: 'jQuery Mobile 是针对触屏智能手机与平板电脑的网页开发框架。jQuery Mobile 工作与所有主流的智能手机和平板电脑。jQuery Mobile 构建于 jQuery 以及 jQuery UI类库之上，如果您了解 jQuery，您可以很容易的学习 jQuery Mobile。jQuery Mobile 使用了极少的 HTML5、CSS3、JavaScript 和 AJAX 脚本代码来完成页面的布局渲染。',
                cover: '../../../resource/images/course/cover_jquerymobile.jpeg',
                coursetype: 'jqmobile'
            }
        ]
    },
    webcourse:{
        list:[
            {
                id: 1,
                title: 'HTTP教程',
                content: '超文本传输协议(HTTP，HyperText Transfer Protocol)是互联网上应用最为广泛的一种网络协议。所有的www文件都必须遵守这个标准。设计HTTP最初的目的是为了提供一种发布和接收HTML页面的方法。',
                cover: '../../../resource/images/course/cover_42.png',
                coursetype: 'http'
            },
            {
                id: 2,
                title: '浏览器信息',
                content: '对于网站开发人员来说，浏览器信息和统计数据都是非常重要的。',
                cover: '../../../resource/images/course/cover_44.png',
                coursetype: 'browser'
            },
            {
                id: 3,
                title: '网站建设指南',
                content: '网站建设即指使用标识语言（markup language)，是一个广义的术语，涵盖了许多不同的技能和学科中所使用的生产和维护的网站，通过网站一系列设计、建模、和执行的过程将电子格式的信息通过互联网传输，最终以图形用户界面（GUI）的形式被用户所浏览。简单来说，网页设计的目的就是产生网站。简单的信息如文字，图片（GIF， JPEG，PNG）和表格，都可以通过使超文件标示语言、可扩展超文本标记语言等标示语言放置到网站页面上。而更复杂的信息如矢量图形、动画、视频、声频等多媒体档案则需要插件程序来运行，同样地它们亦需要标示语言移植在网站内。',
                cover: '../../../resource/images/course/cover_43.png',
                coursetype: 'webbuild'
            },
            {
                id: 4,
                title: '网站品质',
                content: '在这里您将学会如何将您的网站质量提升至最高，您将学习使用最新的WEB标准。您还将学习如何使网站的易用性更强、更易读。',
                cover: '../../../resource/images/course/cover_wzpz.jpeg',
                coursetype: 'webqt'
            },
        ]
    }
};
