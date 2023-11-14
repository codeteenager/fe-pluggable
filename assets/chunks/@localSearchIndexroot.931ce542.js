const e='{"documentCount":20,"nextId":20,"documentIds":{"0":"/fe-pluggable/guide/1.html#微内核架构","1":"/fe-pluggable/guide/1.html#微内核架构概述","2":"/fe-pluggable/guide/1.html#为什么需要微内核架构","3":"/fe-pluggable/guide/1.html#插件的实现方式","4":"/fe-pluggable/guide/1.html#管道式插件","5":"/fe-pluggable/guide/1.html#优点","6":"/fe-pluggable/guide/1.html#缺点","7":"/fe-pluggable/guide/1.html#应用","8":"/fe-pluggable/guide/1.html#洋葱式插件","9":"/fe-pluggable/guide/1.html#优点-1","10":"/fe-pluggable/guide/1.html#缺点-1","11":"/fe-pluggable/guide/1.html#应用-1","12":"/fe-pluggable/guide/1.html#事件式插件","13":"/fe-pluggable/guide/1.html#优点-2","14":"/fe-pluggable/guide/1.html#缺点-2","15":"/fe-pluggable/guide/1.html#应用-2","16":"/fe-pluggable/guide/2.html#node-js打包工具","17":"/fe-pluggable/guide/2.html#安装","18":"/fe-pluggable/guide/2.html#使用","19":"/fe-pluggable/guide/#引言"},"fieldIds":{"title":0,"titles":1,"text":2},"fieldLength":{"0":[1,1,1],"1":[1,1,42],"2":[1,1,91],"3":[1,1,53],"4":[1,2,17],"5":[1,3,14],"6":[1,3,6],"7":[1,3,29],"8":[1,2,26],"9":[1,3,22],"10":[1,3,7],"11":[1,3,32],"12":[1,2,13],"13":[1,3,37],"14":[1,3,9],"15":[1,3,188],"16":[2,1,57],"17":[1,2,8],"18":[1,2,11],"19":[1,1,5]},"averageFieldLength":[1.05,2.1500000000000004,33.4],"storedFields":{"0":{"title":"微内核架构","titles":[]},"1":{"title":"微内核架构概述","titles":["微内核架构"]},"2":{"title":"为什么需要微内核架构","titles":["微内核架构"]},"3":{"title":"插件的实现方式","titles":["微内核架构"]},"4":{"title":"管道式插件","titles":["微内核架构","插件的实现方式"]},"5":{"title":"优点","titles":["微内核架构","插件的实现方式","管道式插件"]},"6":{"title":"缺点","titles":["微内核架构","插件的实现方式","管道式插件"]},"7":{"title":"应用","titles":["微内核架构","插件的实现方式","管道式插件"]},"8":{"title":"洋葱式插件","titles":["微内核架构","插件的实现方式"]},"9":{"title":"优点","titles":["微内核架构","插件的实现方式","洋葱式插件"]},"10":{"title":"缺点","titles":["微内核架构","插件的实现方式","洋葱式插件"]},"11":{"title":"应用","titles":["微内核架构","插件的实现方式","洋葱式插件"]},"12":{"title":"事件式插件","titles":["微内核架构","插件的实现方式"]},"13":{"title":"优点","titles":["微内核架构","插件的实现方式","事件式插件"]},"14":{"title":"缺点","titles":["微内核架构","插件的实现方式","事件式插件"]},"15":{"title":"应用","titles":["微内核架构","插件的实现方式","事件式插件"]},"16":{"title":"Node.js打包工具","titles":[]},"17":{"title":"安装","titles":["Node.js打包工具"]},"18":{"title":"使用","titles":["Node.js打包工具"]},"19":{"title":"引言","titles":[]}},"dirtCount":0,"index":[["通常都会采用插件来定制或者扩展系统的能力",{"2":{"19":1}}],["通过监听激活事件",{"2":{"15":1}}],["通过extensiondescriptionregistry模块",{"2":{"15":1}}],["通过cachedextensionscanner模块扫描已经安装的插件",{"2":{"15":1}}],["通过触发事件来通知插件执行相应的操作",{"2":{"12":1}}],["通过管道架构",{"2":{"5":1}}],["通过",{"2":{"3":1}}],["通过文件",{"2":{"3":1}}],["通过插件",{"2":{"2":1}}],["通过社区贡献的2万多个插件",{"2":{"1":1}}],["引言",{"0":{"19":1}}],["打包成一个js文件",{"2":{"18":1}}],["启动速度也能变快",{"2":{"16":1}}],["导致node",{"2":{"16":1}}],["硬盘不会因为前端项目太多",{"2":{"16":1}}],["的流程",{"2":{"16":1}}],["的东西",{"2":{"16":1}}],["的能力变得所向披靡",{"2":{"1":1}}],["900kb",{"2":{"16":1}}],["现在你可能只要安装",{"2":{"16":1}}],["现在只需要安装1个",{"2":{"16":1}}],["安装",{"0":{"17":1}}],["安装的结果是变少了",{"2":{"16":1}}],["安装速度变快了",{"2":{"16":1}}],["安全性考虑",{"2":{"3":1}}],["将依赖包都固定在发包时刻的包里面的内容",{"2":{"16":1}}],["将其注册到主程序中",{"2":{"3":1}}],["里面的",{"2":{"16":1}}],["包",{"2":{"16":1}}],["包括插件的初始化方法",{"2":{"3":1}}],["然后我们发布的",{"2":{"16":1}}],["然后进行服务的初始化",{"2":{"15":1}}],["文件",{"2":{"16":1}}],["项目编译打包成单个",{"2":{"16":1}}],["工具",{"2":{"16":1}}],["​ncc​​",{"2":{"16":1}}],["会去引用a",{"2":{"16":1}}],["会对require进行拦截",{"2":{"15":1}}],["会将生命周期转为ready阶段",{"2":{"15":1}}],["最终可能安装一个包",{"2":{"16":1}}],["最终在管道的另一端输出",{"2":{"4":1}}],["最后执行插件入口暴露出的activate函数进行激活插件",{"2":{"15":1}}],["最后通过abstractexthostextensionservice模块加载插件",{"2":{"15":1}}],["加载插件",{"2":{"15":1}}],["build",{"2":{"18":2}}],["b",{"2":{"16":2}}],["boolean",{"2":{"15":2}}],["based",{"2":{"12":1}}],["防止重复执行",{"2":{"15":1}}],["激活插件",{"2":{"15":3}}],["激活对应的插件",{"2":{"15":1}}],["https",{"2":{"16":1}}],["handleeagerextensions",{"2":{"15":2}}],["host",{"2":{"15":2}}],["`eager",{"2":{"15":2}}],["`extension",{"2":{"15":2}}],["`",{"2":{"15":2}}],["npm安装的时候",{"2":{"16":1}}],["npm",{"2":{"16":1}}],["nccnpm",{"2":{"17":1}}],["ncc",{"2":{"16":1,"17":1,"18":1}}],["node",{"0":{"16":1},"1":{"17":1,"18":1},"2":{"16":2}}],["new",{"2":{"15":2}}],["name",{"2":{"15":2}}],["logservice",{"2":{"15":2}}],["lt",{"2":{"15":4}}],["lifecyclephase",{"2":{"15":2}}],["lifecycleservice",{"2":{"15":2}}],["来激活插件",{"2":{"15":1}}],["监听激活事件",{"2":{"15":3}}],["根据上诉扫描出来的配置",{"2":{"15":1}}],["根据需求动态改变管道结构",{"2":{"5":1}}],["注册插件",{"2":{"15":1}}],["modules大量占用空间了",{"2":{"16":1}}],["modules",{"2":{"16":1}}],["menus",{"2":{"15":2}}],["map",{"2":{"15":2}}],["main",{"2":{"15":2}}],["max",{"2":{"15":2}}],["disposable",{"2":{"15":2}}],["diagram",{"2":{"15":2}}],["dest",{"2":{"18":2}}],["description",{"2":{"15":2}}],["dependencies",{"2":{"16":1}}],["delay",{"2":{"15":2}}],["o",{"2":{"18":2}}],["open",{"2":{"15":4}}],["oncommand",{"2":{"15":2}}],["onion",{"2":{"8":2}}],["out",{"2":{"15":2}}],["4",{"2":{"15":2}}],["quot",{"2":{"15":116}}],["与插件主流程相关的配置",{"2":{"15":1}}],["与管道式插件相比",{"2":{"9":1}}],["入口文件",{"2":{"15":1}}],["扫描插件",{"2":{"15":1}}],["所有的service被设置之后",{"2":{"15":1}}],["50",{"2":{"15":2}}],["vercel",{"2":{"16":1,"17":2}}],["version",{"2":{"15":2}}],["void",{"2":{"15":4}}],["viewlets",{"2":{"15":2}}],["vs",{"2":{"15":6}}],["vscode在插件系统中",{"2":{"13":1}}],["vscode",{"2":{"1":4,"15":6}}],["g",{"2":{"17":2}}],["getextensiondescriptionsforactivationevent",{"2":{"15":2}}],["gt",{"2":{"15":16}}],["github",{"2":{"16":1}}],["git",{"2":{"3":1}}],["==",{"2":{"15":4}}],["=",{"2":{"15":18}}],["\\tprivate",{"2":{"15":2}}],["\\t\\treturn",{"2":{"15":2}}],["\\t\\tthis",{"2":{"15":2}}],["\\t\\tif",{"2":{"15":2}}],["\\t\\t\\t\\t",{"2":{"15":2}}],["\\t\\t\\t\\tthis",{"2":{"15":6}}],["\\t\\t\\tthrow",{"2":{"15":2}}],["\\t\\t\\trunwhenidle",{"2":{"15":2}}],["\\t\\t\\t",{"2":{"15":14}}],["\\t\\tlifecycleservice",{"2":{"15":2}}],["\\t\\t",{"2":{"15":8}}],["\\t",{"2":{"15":8}}],["i",{"2":{"17":2}}],["identifier",{"2":{"15":4}}],["id",{"2":{"15":2}}],["idisposable",{"2":{"15":2}}],["if",{"2":{"15":2}}],["index",{"2":{"18":2}}],["info",{"2":{"15":2}}],["initialize",{"2":{"15":2}}],["is",{"2":{"15":2}}],["ilifecycleservice",{"2":{"15":4}}],["iextensionservice",{"2":{"15":2}}],["implements",{"2":{"15":6}}],["a又可能引用别的包",{"2":{"16":1}}],["await",{"2":{"15":2}}],["async",{"2":{"15":2}}],["activationevent",{"2":{"15":10}}],["activationevents",{"2":{"15":2}}],["activateextensions",{"2":{"15":6}}],["activatebyevent",{"2":{"15":2}}],["activated`",{"2":{"15":2}}],["alreadyactivatedevents",{"2":{"15":4}}],["already",{"2":{"15":2}}],["api",{"2":{"15":4}}],["and",{"2":{"15":2}}],["after",{"2":{"15":2}}],["abstractexthostextensionservice",{"2":{"15":2}}],["abstractextensionservice",{"2":{"15":2}}],["abstract",{"2":{"15":4}}],["architecture",{"2":{"8":2}}],["true",{"2":{"15":4}}],["typescript",{"2":{"15":4}}],["title",{"2":{"15":2}}],["this",{"2":{"15":18}}],["then",{"2":{"15":8}}],["to",{"2":{"15":2}}],["ts2plantuml",{"2":{"15":12}}],["ts",{"2":{"15":6}}],["tapable",{"2":{"13":1}}],["wait",{"2":{"15":2}}],["when",{"2":{"15":6}}],["workbench",{"2":{"15":6}}],["web端类似",{"2":{"15":1}}],["webpack",{"2":{"1":1}}],["shellncc",{"2":{"18":1}}],["shellnpm",{"2":{"17":1}}],["startup",{"2":{"15":4}}],["started",{"2":{"15":6}}],["startextensionhost",{"2":{"15":2}}],["string",{"2":{"15":2}}],["sandbox",{"2":{"15":2}}],["services",{"2":{"15":2}}],["session",{"2":{"9":1}}],["src",{"2":{"15":6,"18":2}}],["json",{"2":{"16":1}}],["js打包工具",{"0":{"16":1},"1":{"17":1,"18":1}}],["js",{"2":{"15":6,"16":2,"18":2}}],["初始化插件系统服务",{"2":{"15":2}}],["初始化插件系统",{"2":{"15":1}}],["整体的运行流程如下",{"2":{"15":1}}],["则更建议使用管道式插件系统",{"2":{"14":1}}],["则位于外部",{"2":{"8":1}}],["浏览器支持使用事件式插件的方式来扩展其功能",{"2":{"13":1}}],["都是需要走",{"2":{"16":1}}],["都不会影响主流程的执行",{"2":{"13":1}}],["都拥有一个插件系统",{"2":{"1":1}}],["使用",{"0":{"18":1}}],["使用串行的事件模式达到管道的效果",{"2":{"14":1}}],["使插件在添加或删除的时候",{"2":{"13":1}}],["使得插件的行为可以根据用户需求进行定制化",{"2":{"3":1}}],["使得软件更加强大和适应性更强",{"2":{"2":1}}],["使得软件更易于扩展",{"2":{"2":1}}],["使得软件获得了很好的灵活性和扩展性",{"2":{"2":1}}],["应对几十个插件的应用",{"2":{"13":1}}],["应用场景广",{"2":{"13":1}}],["应用程序的核心逻辑位于内部",{"2":{"8":1}}],["应用",{"0":{"7":1,"11":1,"15":1},"2":{"3":1}}],["有利于提升整体的性能",{"2":{"13":1}}],["非阻塞式地执行代码",{"2":{"13":1}}],["非常符合服务中间件的使用场景",{"2":{"11":1}}],["因为原来xxx模块",{"2":{"16":1}}],["因为我们最终发的是ncc的产物",{"2":{"16":1}}],["因为管道式插件系统更为简单",{"2":{"14":1}}],["因为事件式插件是基于发布订阅实现的",{"2":{"13":1}}],["因此得名",{"2":{"8":1}}],["因此安全性是一个重要考虑因素",{"2":{"3":1}}],["循环钩子",{"2":{"13":1}}],["保险",{"2":{"13":1}}],["按照执行类型分为瀑布",{"2":{"13":1}}],["按依赖加载等",{"2":{"3":1}}],["串行",{"2":{"13":1}}],["异步钩子",{"2":{"13":1}}],["异步处理和并发等优化",{"2":{"5":1}}],["提升整体性能",{"2":{"13":1}}],["提供同步",{"2":{"13":1}}],["提高处理效率和系统性能",{"2":{"5":1}}],["提高了代码的可重用性",{"2":{"9":1}}],["提高了代码重用率",{"2":{"2":1}}],["提高了软件的性能",{"2":{"2":1}}],["能适应于各种场景",{"2":{"13":1}}],["能在输入输出两个环节来决定是否中断还是继续执行",{"2":{"11":1}}],["十分灵活",{"2":{"13":1}}],["运行方式多样",{"2":{"13":1}}],["e",{"2":{"15":6}}],["eagerextensionsactivated",{"2":{"15":2}}],["error",{"2":{"15":2}}],["editors",{"2":{"15":2}}],["ensure",{"2":{"15":2}}],["electronextensionservice",{"2":{"15":4}}],["electron",{"2":{"15":2}}],["exthostextensionactivator",{"2":{"15":2}}],["exthostextensionserviceshape",{"2":{"15":2}}],["exthostextensionservice",{"2":{"15":2}}],["extensionid",{"2":{"15":2}}],["extension",{"2":{"15":2}}],["extensionsactivator",{"2":{"15":2}}],["extensions",{"2":{"15":4}}],["extends",{"2":{"15":4}}],["explorer",{"2":{"15":11}}],["export",{"2":{"15":6}}],["express使用了洋葱式插件模式外",{"2":{"11":1}}],["event",{"2":{"12":1}}],["进入第二个中间件",{"2":{"11":1}}],["进而导致一定的性能损耗",{"2":{"10":1}}],["1ncc将我们的npm包",{"2":{"18":1}}],["12345678910111213141516",{"2":{"15":1}}],["12345678910111213141516171819通过触发的激活事件",{"2":{"15":1}}],["1234567891011121314151617181920212223242526272829303132",{"2":{"15":1}}],["1234567891011121314151617在客户端插件服务初始化时",{"2":{"15":1}}],["1",{"2":{"11":1,"15":2,"17":1}}],["就会触发dispatch",{"2":{"11":1}}],["就可以为软件开发新的功能",{"2":{"2":1}}],["后",{"2":{"11":1}}],["后置处理器",{"2":{"11":1}}],["第一个中间件执行next",{"2":{"11":1}}],["第三方开发者可以开发自己的插件并与软件进行集成",{"2":{"2":1}}],["0",{"2":{"11":1,"15":2}}],["触发dispatch",{"2":{"11":1}}],["koa中的任务调度由koa",{"2":{"11":1}}],["koa通过use方法进行任务注册",{"2":{"11":1}}],["核心逻辑",{"2":{"11":1}}],["任务调度",{"2":{"11":1}}],["任务编排分为前置处理",{"2":{"11":1}}],["任务编排",{"2":{"11":1}}],["任务注册",{"2":{"11":1}}],["runs",{"2":{"15":2}}],["require",{"2":{"16":1}}],["request",{"2":{"11":1}}],["reason",{"2":{"15":2}}],["readytorunextensions",{"2":{"15":2}}],["readytostartextensionhost",{"2":{"15":2}}],["ready",{"2":{"15":2}}],["registry",{"2":{"15":2}}],["return",{"2":{"15":2}}],["resourcelangid",{"2":{"15":4}}],["restoring",{"2":{"15":2}}],["reschedule",{"2":{"15":2}}],["rollup",{"2":{"1":1}}],["uni",{"2":{"11":1}}],["ui等",{"2":{"8":1}}],["一些知名nodejs框架也使用了洋葱式插件模式",{"2":{"11":1}}],["除了koa",{"2":{"11":1}}],["即处理输入流和处理输出流",{"2":{"10":1}}],["多个项目均可以引入使用",{"2":{"9":1}}],["举例",{"2":{"9":1}}],["具备良好的重用性",{"2":{"9":1}}],["具体需要结合软件系统诉求",{"2":{"1":1}}],["类似于洋葱的结构",{"2":{"8":1}}],["而宿主应用程序的核心逻辑位于内部",{"2":{"9":1}}],["而不会影响应用程序的核心逻辑",{"2":{"8":1}}],["而不需要修改核心代码",{"2":{"2":1}}],["而外部依赖",{"2":{"8":1}}],["灵活度高",{"2":{"13":1}}],["灵活且可测试的应用程序的软件架构模式",{"2":{"8":1}}],["灵活性和可扩展性",{"2":{"2":1}}],["洋葱架构中的层次嵌套可能会增加函数调用的次数和层次",{"2":{"10":1}}],["洋葱架构中的各个层次和组件都可以独立地被重复利用",{"2":{"9":1}}],["洋葱架构的层次分明",{"2":{"9":1}}],["洋葱架构通过层层包裹的方式来表示不同的关注点",{"2":{"8":1}}],["洋葱架构是一种用于构建可维护",{"2":{"8":1}}],["洋葱式插件运行阶段会经过3个环节",{"2":{"11":1}}],["洋葱式插件对数据流具备灵活和高权限的处理能力",{"2":{"11":1}}],["洋葱式插件对数据干涉的时机更加完备",{"2":{"9":1}}],["洋葱式插件模式在服务中间件中广泛应用",{"2":{"11":1}}],["洋葱式插件模式需要插件之间的协作和数据传递",{"2":{"10":1}}],["洋葱式插件允许插件在请求处理过程中先后执行",{"2":{"9":1}}],["洋葱式插件保留了洋葱架构的内部核心和外部依赖的层次结构",{"2":{"9":1}}],["洋葱式插件将洋葱架构与插件系统相结合",{"2":{"8":1}}],["洋葱式插件",{"0":{"8":1},"1":{"9":1,"10":1,"11":1},"2":{"8":1}}],["洋葱式和事件式",{"2":{"3":1}}],["演化而来的",{"2":{"8":1}}],["也就不用去安装对应的依赖了",{"2":{"16":1}}],["也不影响我们",{"2":{"16":1}}],["也不需要去加对应的依赖",{"2":{"16":1}}],["也不会有太大的性能问题",{"2":{"13":1}}],["也是得益于事件式插件带有的益处",{"2":{"13":1}}],["也是常用的一类插件设计模式",{"2":{"8":1}}],["也没有任何扩展的可能性",{"2":{"1":1}}],["综上",{"2":{"7":1}}],["合并文件等",{"2":{"7":1}}],["压缩",{"2":{"7":1}}],["前端构建工具",{"2":{"7":1}}],["前端的构建工具",{"2":{"1":1}}],["再比如云服务部署",{"2":{"7":1}}],["c",{"2":{"16":2}}],["cli",{"2":{"16":1}}],["class",{"2":{"15":8}}],["category",{"2":{"15":2}}],["const",{"2":{"15":2}}],["context",{"2":{"15":2}}],["contributes",{"2":{"15":2}}],["com",{"2":{"16":1}}],["common",{"2":{"15":4}}],["commandpalette",{"2":{"15":2}}],["command",{"2":{"15":6}}],["commands",{"2":{"15":2}}],["compose来统一负责",{"2":{"11":1}}],["cd流水线",{"2":{"7":1}}],["chrome",{"2":{"1":1}}],["自动化部署等任务的执行",{"2":{"7":1}}],["自动化构建",{"2":{"7":1}}],["自动化任务执行",{"2":{"7":1}}],["验证等任务",{"2":{"7":1}}],["过滤",{"2":{"7":1}}],["数据处理管道",{"2":{"7":1}}],["数据从管道的一端输入",{"2":{"4":1}}],["例如编译",{"2":{"7":1}}],["例如",{"2":{"7":1}}],["对vscode进行代理",{"2":{"15":1}}],["对插件进行注册",{"2":{"15":1}}],["对系统造成影响",{"2":{"6":1}}],["对软件本身现有的能力进行定制化",{"2":{"2":1}}],["缺点",{"0":{"6":1,"10":1,"14":1}}],["实际安装了几十个包或者上百个包",{"2":{"16":1}}],["实际开发过程中",{"2":{"1":1}}],["实现了一种发布订阅者模式的插件机制",{"2":{"13":1}}],["实现数据处理流程的定制化和扩展性",{"2":{"5":1}}],["测试和维护",{"2":{"5":1}}],["管道的设计需要考虑插件之间的数据密切性和执行顺序",{"2":{"6":1}}],["管道的每个环节之间相互独立",{"2":{"5":1}}],["管道式插件是一种强大的设计模式",{"2":{"7":1}}],["管道式插件被广泛用于处理和转换源代码",{"2":{"7":1}}],["管道式插件在许多领域都有应用",{"2":{"7":1}}],["管道式插件",{"0":{"4":1},"1":{"5":1,"6":1,"7":1},"2":{"4":1}}],["管道式",{"2":{"3":1}}],["解耦性强",{"2":{"5":1}}],["解耦合和维护性",{"2":{"2":1}}],["优点",{"0":{"5":1,"9":1,"13":1}}],["该插件负责执行特定的任务",{"2":{"4":1}}],["经过一系列步骤进行处理",{"2":{"4":1}}],["处理流程被表示为一条管道",{"2":{"4":1}}],["在目前流行的框架中",{"2":{"19":1}}],["在插件系统初始化的时候",{"2":{"15":1}}],["在事件式插件中",{"2":{"12":1}}],["在前端领域",{"2":{"11":1}}],["在前端构建工具中",{"2":{"7":1}}],["在处理复杂逻辑时可能导致代码变得复杂难以理解",{"2":{"10":1}}],["在数据输出环节还能对其他插件的输出进行干涉和处理",{"2":{"9":1}}],["在数据处理中",{"2":{"7":1}}],["在这种模式下",{"2":{"8":1}}],["在洋葱架构中",{"2":{"8":1}}],["在输入输出标准化的情况",{"2":{"5":1}}],["在管道式插件中",{"2":{"4":1}}],["在增强现有软件的功能或添加新功能的同时",{"2":{"2":1}}],["package",{"2":{"16":1}}],["panels",{"2":{"15":2}}],["public",{"2":{"15":2}}],["promise",{"2":{"15":4}}],["preview指令触发时",{"2":{"15":1}}],["preview",{"2":{"15":10}}],["plugin",{"2":{"4":1,"8":1,"12":1}}],["pipeline",{"2":{"4":1}}],["两个方面介绍下这三种插件模式",{"2":{"3":1}}],["特点",{"2":{"3":1}}],["其实插件系统在软件架构中有一个更专业的术语",{"2":{"19":1}}],["其实微内核架构的实现并没有统一的标准",{"2":{"2":1}}],["其他包再发包",{"2":{"16":1}}],["其通过",{"2":{"13":1}}],["其中应用最为广泛的是事件式插件",{"2":{"3":1}}],["但是如果明确一个管道式的需求",{"2":{"14":1}}],["但是相应架构设计上会比管道式和洋葱式更为复杂",{"2":{"14":1}}],["但是不会影响原有的浏览器功能的执行",{"2":{"13":1}}],["但是经过归纳总结",{"2":{"3":1}}],["但总的来说都包含下面几个步骤",{"2":{"3":1}}],["业界关于插件设计模式有很多种",{"2":{"3":1}}],["并执行",{"2":{"15":1}}],["并且可以进行灵活组合来满足webpack编译打包的所有功能扩展需求",{"2":{"13":1}}],["并且每个插件可以根据需要决定是否继续执行或终止执行",{"2":{"9":1}}],["并行钩子",{"2":{"13":1}}],["并在相应事件被触发时执行相应的功能",{"2":{"12":1}}],["并将处理后的数据传递给下一个插件",{"2":{"4":1}}],["并允许开发者通过插件来扩展或修改这些步骤",{"2":{"4":1}}],["并对插件的代码进行安全性检查",{"2":{"3":1}}],["并挂载到核心上实现功能的扩展",{"2":{"2":1}}],["确保数据在不同步骤中按照预期进行处理",{"2":{"7":1}}],["确保只加载受信任的插件",{"2":{"3":1}}],["确定插件的加载形式",{"2":{"3":1}}],["以及各操作路径可以触发的指令",{"2":{"15":1}}],["以及知名代码编辑器vscode",{"2":{"15":1}}],["以此类推",{"2":{"11":1}}],["以上是执行第一个中间件",{"2":{"11":1}}],["以koa为例",{"2":{"11":1}}],["以实现可插拔的",{"2":{"8":1}}],["以下是gulp的架构图",{"2":{"7":1}}],["以下也将分别从",{"2":{"3":1}}],["以前端工具gulp举例",{"2":{"7":1}}],["以防止潜在的恶意代码注入",{"2":{"3":1}}],["以便在需要的时候进行交互",{"2":{"3":1}}],["以满足个人喜好和工作流程",{"2":{"2":1}}],["事件类型多",{"2":{"13":1}}],["事件式插件在前端领域有着广泛的应用",{"2":{"15":1}}],["事件式插件系统完全可以覆盖管道式插件系统的职能",{"2":{"14":1}}],["事件式插件虽然在插件注册和执行上具备非常大的灵活性",{"2":{"14":1}}],["事件式插件还有一个重要的特点",{"2":{"13":1}}],["事件式插件",{"0":{"12":1},"1":{"13":1,"14":1,"15":1},"2":{"12":1}}],["事件通信机制",{"2":{"3":1}}],["事件监听等",{"2":{"3":1}}],["用于管理已加载的插件列表",{"2":{"3":1}}],["用户可以选择安装和启用特定的插件",{"2":{"2":1}}],["主要是解析出以下信息",{"2":{"15":1}}],["主要体现在两个方面",{"2":{"2":1}}],["主程序",{"2":{"12":1}}],["主程序和插件之间需要建立事件通信机制",{"2":{"3":1}}],["主程序需要提供插件注册和管理的功能",{"2":{"3":1}}],["好的加载时机把控",{"2":{"3":1}}],["好的插件的组织形式使整个系统足够灵活",{"2":{"3":1}}],["设计好插件的加载时机",{"2":{"3":1}}],["仓库等等",{"2":{"3":1}}],["比如原来",{"2":{"16":1}}],["比如原来的模式xxx依赖a",{"2":{"16":1}}],["比如构建工具webpack",{"2":{"15":1}}],["比如midway",{"2":{"11":1}}],["比如koa中很多中间件具备良好的复用性",{"2":{"9":1}}],["比如ci",{"2":{"7":1}}],["比如惰性加载",{"2":{"3":1}}],["比如通过npm包",{"2":{"3":1}}],["比如开发工具",{"2":{"1":1}}],["需要定义插件与主程序之间的接口",{"2":{"3":1}}],["首先通过commands字段对指令进行注册",{"2":{"15":1}}],["首先",{"2":{"3":1}}],["定义插件接口",{"2":{"3":1}}],["定制化和个性化",{"2":{"2":1}}],["易于维护和具有强大生态系统软件的关键要素之一",{"2":{"2":1}}],["易于适应变化的需求",{"2":{"2":1}}],["可能占用了50m",{"2":{"16":1}}],["可能会导致数据的不完整性和不准确性",{"2":{"6":1}}],["可能会增加开发难度和设计复杂度",{"2":{"6":1}}],["可插拔式的设计",{"2":{"13":2}}],["可扩展的应用程序",{"2":{"8":1}}],["可扩展性和定制化的能力",{"2":{"2":1}}],["可维护和可扩展",{"2":{"7":1}}],["可单独开发",{"2":{"5":1}}],["可以一键把一个",{"2":{"16":1}}],["可以按需添加或删除插件",{"2":{"9":1}}],["可以在不同的项目和场景中进行复用",{"2":{"9":1}}],["可以使代码更加灵活",{"2":{"7":1}}],["可以使用管道式插件来处理数据的转换",{"2":{"7":1}}],["可以使用自定义事件",{"2":{"3":1}}],["可以方便进行数据缓存",{"2":{"5":1}}],["可以方便第三方来参与软件的定制和扩展",{"2":{"2":1}}],["可以灵活组合插件",{"2":{"5":1}}],["可以让大型系统的性能得到提升",{"2":{"3":1}}],["可以根据用户需求添加",{"2":{"2":1}}],["可以独立修改",{"2":{"2":1}}],["可以独立开发并在宿主应用程序中加载和执行",{"2":{"1":1}}],["可以看一下跟微内核完全相反的另一种架构设计",{"2":{"2":1}}],["可以为插件提供一些配置选项",{"2":{"3":1}}],["可以为",{"2":{"1":1}}],["总体来说",{"2":{"2":1}}],["总结下来",{"2":{"2":1}}],["性能和资源优化",{"2":{"2":1}}],["只处理特定的问题",{"2":{"5":1}}],["只需关注相应的插件而不会影响整个系统",{"2":{"2":1}}],["只负责程序的启动销毁",{"2":{"2":1}}],["当ts2plantuml",{"2":{"15":1}}],["当插件加载完成后",{"2":{"3":1}}],["当需要修改或升级某个功能时",{"2":{"2":1}}],["当我们需要定制某个功能时",{"2":{"2":1}}],["降低了模块之间的耦合度",{"2":{"2":1}}],["降低了软件扩展的难度",{"2":{"2":1}}],["促进了软件生态系统的发展",{"2":{"2":1}}],["社区成员可以共享自己的扩展",{"2":{"2":1}}],["社区参与和共享",{"2":{"2":1}}],["减少了代码冗余",{"2":{"2":1}}],["代码重用和模块化",{"2":{"2":1}}],["移除或替换特定功能",{"2":{"2":1}}],["从而保证安全的执行环境",{"2":{"15":1}}],["从而更容易引入未知问题",{"2":{"14":1}}],["从而使得应用程序更具灵活性和可维护性",{"2":{"8":1}}],["从而使软件本身不具备有良好的扩展性",{"2":{"2":1}}],["从而实现更灵活和可维护的代码",{"2":{"4":1}}],["从而实现灵活的功能扩展和定制化",{"2":{"2":1}}],["从而节约了内存和计算资源",{"2":{"2":1}}],["插件通常被视为外部依赖",{"2":{"9":1}}],["插件可以被动态地加载和卸载",{"2":{"8":1}}],["插件可以看作是独立的模块",{"2":{"2":1}}],["插件配置",{"2":{"3":1}}],["插件注册和管理",{"2":{"3":1}}],["插件的版本",{"2":{"15":1}}],["插件的名称",{"2":{"15":1}}],["插件的加载方式",{"2":{"3":1}}],["插件的实现方式",{"0":{"3":1},"1":{"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1}}],["插件的动态加载和卸载使得软件可以根据需要来选择加载特定的功能",{"2":{"2":1}}],["插件系统涉及动态加载代码",{"2":{"3":1}}],["插件系统允许插件注册特定事件的监听器",{"2":{"12":1}}],["插件系统允许用户根据自己的需求来定制软件的功能和外观",{"2":{"2":1}}],["插件系统允许软件在运行时加载和卸载插件",{"2":{"2":1}}],["插件系统帮助将软件的功能划分为独立的部分",{"2":{"2":1}}],["插件系统鼓励社区的参与和贡献",{"2":{"2":1}}],["插件则是独立的模块",{"2":{"1":1}}],["同时将激活的事件做一个缓存",{"2":{"15":1}}],["同时声明激活插件的事件",{"2":{"15":1}}],["同时提供了一种模块化的方式来组织和处理复杂的任务",{"2":{"7":1}}],["同时只要遵循插件的接口定义",{"2":{"2":1}}],["同时也可以添加新的插件",{"2":{"2":1}}],["同时也大大提升软件扩展的难度",{"2":{"2":1}}],["相比管道式插件复杂性更高",{"2":{"10":1}}],["相比宏内核",{"2":{"2":1}}],["相较之下",{"2":{"1":1}}],["发布订阅模式或观察者模式等方式来实现事件的监听和触发",{"2":{"3":1}}],["发布",{"2":{"2":1}}],["每个处理步骤都由一个插件来实现",{"2":{"4":1}}],["每个插件需要定制",{"2":{"2":1}}],["每个功能都成为插件",{"2":{"2":1}}],["不仅仅是因为事件触发之后才会初始化插件",{"2":{"13":1}}],["不仅仅可以对自身的数据输入环节进行干涉和处理",{"2":{"9":1}}],["不仅增加了软件开发的维护难度",{"2":{"2":1}}],["不影响其他插件及内核",{"2":{"2":1}}],["不与内核耦合",{"2":{"2":1}}],["独立维护开发",{"2":{"2":1}}],["显然不符合软件设计的开闭原则",{"2":{"2":1}}],["我们认为最常用的主要是以下三种插件模式",{"2":{"3":1}}],["我们需要直接修改软件的内核逻辑",{"2":{"2":1}}],["我们实际工作生活中接触到的大型软件",{"2":{"1":1}}],["这个过程就会耗费一些时间",{"2":{"16":1}}],["这里加载插件时",{"2":{"15":1}}],["这里即是监听激活事件里面的逻辑",{"2":{"15":1}}],["这里主要研究客户端的插件系统运行流程",{"2":{"15":1}}],["这里以vscode为例来讲述一下事件式插件的运行原理",{"2":{"15":1}}],["这使得洋葱式插件非常适合承当服务拦截器的角色",{"2":{"9":1}}],["这使得软件更易于维护",{"2":{"2":1}}],["这种模块化的设计使得代码更加可维护",{"2":{"2":1}}],["这种场景下",{"2":{"2":1}}],["这样的好处",{"2":{"16":1}}],["这样的好处就在于",{"2":{"2":1}}],["这样主程序就可以调用插件的能力",{"2":{"3":1}}],["这样可以确保插件与主程序之间的交互是规范的",{"2":{"3":1}}],["这样",{"2":{"2":1}}],["这样允许软件的功能可以被动态地扩展和定制",{"2":{"2":1}}],["如上诉的配置中",{"2":{"15":1}}],["如上图所示",{"2":{"4":1}}],["如chrome",{"2":{"13":1}}],["如webpack当中",{"2":{"13":1}}],["如koa",{"2":{"9":1}}],["如数据库",{"2":{"8":1}}],["如gulp",{"2":{"7":1}}],["如果不合理的设计管道流程",{"2":{"6":1}}],["如果将宏内核的架构改为微内核架构",{"2":{"2":1}}],["如果换一个名字",{"2":{"1":1}}],["如下图",{"2":{"2":1}}],["内核功能与各个功能模块耦合在一起",{"2":{"2":1}}],["把一个软件和它的各种功能都做在一起",{"2":{"2":1}}],["无需修改核心程序代码",{"2":{"2":1}}],["软件的功能得到了大大丰富",{"2":{"2":1}}],["软件的功能叠加由不同的插件来实现",{"2":{"2":1}}],["软件的维护难度大大降低",{"2":{"2":1}}],["软件的核心部分通常被称为微内核",{"2":{"1":1}}],["卸载",{"2":{"2":1}}],["执行的时机异步化",{"2":{"13":1}}],["执行时机异步化",{"2":{"13":1}}],["执行方法",{"2":{"3":1}}],["执行",{"2":{"2":1}}],["功能模块的加载",{"2":{"2":1}}],["功能就很单一",{"2":{"1":1}}],["它基于事件驱动编程",{"2":{"12":1}}],["它是从洋葱架构",{"2":{"8":1}}],["它是构建功能丰富",{"2":{"2":1}}],["它的主要目标是将处理流程分解为一系列独立的步骤",{"2":{"4":1}}],["它的架构示意如下图所示",{"2":{"2":1}}],["它们可以在不同的应用中重复使用",{"2":{"2":1}}],["它提供了一套开放的接口",{"2":{"2":1}}],["让大型软件的能力得以灵活的扩展",{"2":{"2":1}}],["为软件提供全新的能力",{"2":{"2":1}}],["为什么需要微内核架构",{"0":{"2":1}}],["那微内核架构到底解决了什么软件问题",{"2":{"2":1}}],["那就是插件系统",{"2":{"1":1}}],["是一个简单的",{"2":{"16":1}}],["是插件设计模式中最灵活的一种",{"2":{"12":1}}],["是常用的插件设计模式之一",{"2":{"4":1}}],["是否能解决当前软件系统面临的问题",{"2":{"1":1}}],["是不是一定要引入微内核架构呢",{"2":{"1":1}}],["看是否有对自身进行定制或者扩展的需求",{"2":{"1":1}}],["答案是否定的",{"2":{"1":1}}],["允许插件以某种方式与其进行交互",{"2":{"1":1}}],["微内核提供了一些标准接口和扩展点",{"2":{"1":1}}],["微内核架构尽管实现的方式不尽相同",{"2":{"3":1}}],["微内核架构为软件提供了灵活性",{"2":{"2":1}}],["微内核架构有如下的优势",{"2":{"2":1}}],["微内核架构的核心代码保持逻辑单一",{"2":{"2":1}}],["微内核架构中",{"2":{"1":1}}],["微内核架构概述",{"0":{"1":1}}],["微内核架构",{"0":{"0":1},"1":{"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1},"2":{"19":1}}],["或宿主应用程序",{"2":{"12":1}}],["或者宿主程序",{"2":{"1":1}}],["或许大家就很熟悉了",{"2":{"1":1}}],["几乎所有大型的软件",{"2":{"1":1}}],["等",{"2":{"1":1}}],["拥有强大的插件系统还有浏览器",{"2":{"1":1}}],["拥有一个强大的插件系统",{"2":{"1":1}}],["没有插件系统的notepad之类的软件",{"2":{"1":1}}],["原本不支持的能力",{"2":{"1":1}}],["甚至添加",{"2":{"1":1}}],["新的主题",{"2":{"1":1}}],["添加新的语法支持",{"2":{"1":1}}],["大部分都拥有插件系统",{"2":{"1":1}}],["什么是微内核架构",{"2":{"1":1}}]],"serializationVersion":2}';export{e as default};
