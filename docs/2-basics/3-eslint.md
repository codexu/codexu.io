### 代码规范

JavaScript 是一个动态的弱类型语言，在开发中比较容易出错。因为没有编译程序，为了寻找 JavaScript 代码错误通常需要在执行过程中不断调试。像 ESLint 这样的可以让程序员在编码的过程中发现问题而不是在执行的过程中。

> #### ⚠️ 如何解决报错

> 刚刚接触es-lint可能会引起极度不适，但在这个过程中可以慢慢规范你的代码。当程序报错时，如果是ESLint错误，复制报错的信息，在此表或.eslintrc.js中查找，了解你的代码问题，并按照规则修改它。

#### ESLint配置表

| Rules | Description |
| :- | :- |
| accessor-pairs | 设置了 setter ，必须相应设置 getter ，反之不必须 |
| array-bracket-newline | ❌ 数组方括号前后的换行符使用规则 |
| array-bracket-spacing | ❌ 数组方括号前后的空格使用规则 |
| array-callback-return | 数组的 map、filter、sort 等方法，回调函数必须有返回值 |
| array-element-newline | ❌ 每个数组项是否独占一行 |
| arrow-body-style | ❌ 箭头函数的书写规则 |
| arrow-parens | ❌ 箭头函数的圆括号使用规则 |
| arrow-spacing | ❌ 箭头函数的空格使用规则 |
| block-scoped-var | 不能在块外使用块作用域内 var 定义的变量 |
| block-spacing | ❌ 代码块花括号前后的空格规则 |
| brace-style | ❌ if else 的花括号换行规则 |
| callback-return | ❌ callback 之后必须立即 return |
| camelcase | ❌ 变量名必须使用驼峰式 |
| capitalized-comments | ❌ 注释的首字母应该大写 |
| class-methods-use-this | class 的非静态方法必须包含 this 关键字 |
| comma-dangle | ❌ 对象的最后一项后面是否写逗号 |
| comma-spacing | ❌ 逗号前后是否有空格 |
| comma-style | ❌ 逗号写在行首还是行尾 |
| complexity | 禁止函数 if ... else if ... else 的复杂度超过 20 |
| computed-property-spacing | ❌ 使用方括号访问对象属性时，方括号前后的空格规则 |
| consistent-return | ❌ 禁止函数在不同条件下返回不同类型的值 |
| consistent-this | this 的别名规则，只允许 self 或 that |
| constructor-super | ❌ 构造函数中必须调用 super |
| curly | if 后必须包含 { ，单行 if 除外 |
| default-case | switch 语句必须包含 default |
| dot-location | ❌ 链式操作时，点的位置，是在上一行结尾还是下一行开头 |
| eol-last | ❌ 文件最后必须有空行 |
| eqeqeq | 必须使用 === 和 !== ，和 null 对比时除外 |
| for-direction | for 循环不得因方向错误造成死循环 |
| func-call-spacing | 执行函数的圆括号前后的空格规则 |
| func-name-matching | 把函数赋给变量或对象属性时，函数名和变量名或对象属性名必须一致 |
| func-names | 不允许匿名函数 |
| func-style | ❌ 必须只使用函数申明或只使用函数表达式 |
| generator-star-spacing | ❌ generator 的 * 前后空格使用规则 |
| getter-return | getter 必须有返回值，允许返回 undefined |
| global-require | ❌ require 必须在全局作用域下 |
| guard-for-in | for in 时需检测 hasOwnProperty |
| handle-callback-err | callback 中的 err、error 参数和变量必须被处理 |
| id-blacklist | ❌ id 黑名单 |
| id-length | ❌ 变量名长度限制 |
| id-match | ❌ 限制变量名必须匹配指定的正则表达式 |
| indent | ❌ 缩进使用 tab 还是空格 |
| init-declarations | ❌ 变量必须在定义的时候赋值 |
| jsx-quotes | jsx 语法中，属性的值必须使用双引号 |
| key-spacing | ❌ 对象字面量冒号前后的空格使用规则 |
| keyword-spacing | 关键字前后必须有空格 |
| linebreak-style | ❌ 换行符使用规则 |
| line-comment-position | ❌ 单行注释必须写在前一行还是行尾 |
| lines-around-comment | ❌ 注释前后是否要空一行 |
| max-depth | 最大块嵌套深度为 5 层 |
| max-len | ❌ 限制单行代码的长度 |
| max-lines | ❌ 限制单个文件最大行数 |
| max-nested-callbacks | 最大回调深度为 3 层 |
| max-params | 函数的形参不能多于8个 |
| max-statements-per-line | ❌ 限制一行中的语句数量 |
| max-statements | ❌ 限制函数块中的语句数量 |
| multiline-ternary | ❌ 三元表达式的换行规则 |
| new-cap | new关键字后类名应首字母大写 |
| capIsNew | 允许大写开头的函数直接执行 |
| new-parens | new 关键字后类应包含圆括号 |
| newline-per-chained-call | ❌ 链式调用是否要换行 |
| no-alert | 禁止 alert，提醒开发者，上线时要去掉 |
| no-array-constructor | 禁止使用 Array 构造函数，使用 Array(num) 直接创建长度为 num 的数组时可以 |
| no-await-in-loop | 禁止将 await 写在循环里 |
| no-bitwise | ❌ 禁止位运算 |
| no-buffer-constructor | 禁止在 Node.js 中直接调用 Buffer 构造函数 |
| no-caller | 禁止使用 arguments.caller 和 arguments.callee |
| no-case-declarations | switch的条件中出现 var、let、const、function、class 等关键字，必须使用花括号把内容括起来 |
| no-catch-shadow | catch中不得使用已定义的变量名 |
| no-class-assign | class定义的类名不得与其它变量重名 |
| no-compare-neg-zero | 禁止与 -0 做比较 |
| no-cond-assign | 禁止在 if、for、while 中出现赋值语句，除非用圆括号括起来 |
| no-confusing-arrow | 禁止出现难以理解的箭头函数，除非用圆括号括起来 |
| no-console | 禁止使用 console，提醒开发者，上线时要去掉 |
| no-constant-condition | 禁止使用常量作为判断条件 |
| no-const-assign | 禁止对 const 定义重新赋值 |
| no-continue | ❌ 禁止 continue |
| no-control-regex | 禁止正则表达式中出现 Ctrl 键的 ASCII 表示，即/\x1f/ |
| no-debugger | 禁止 debugger 语句，提醒开发者，上线时要去掉 |
| no-delete-var | 禁止对变量使用 delete 关键字，删除对象的属性不受限制 |
| no-div-regex | ❌ 禁止在正则表达式中出现形似除法操作符的开头，如 let a = /=foo/ |
| no-dupe-args | 函数参数禁止重名 |
| no-dupe-keys | 禁止对象出现重名键值 |
| no-dupe-class-members | 类方法禁止重名 |
| no-duplicate-case | 禁止 switch 中出现相同的 case |
| no-duplicate-imports | 禁止重复 import |
| no-else-return | ❌ 禁止出现 if (cond) { return a } else { return b }，应该写为 if (cond) { return a } return b |
| no-empty-character-class | 正则表达式中禁止出现空的字符集[] |
| no-empty-function | 禁止空的 function |
| no-empty-pattern | 禁止解构中出现空 {} 或 [] |
| no-empty | 禁止出现空代码块 |
| no-eq-null | ❌ 禁止 == 和 != 与 null 做比较，必须用 === 或 !== |
| no-eval | 禁止使用 eval |
| no-ex-assign | catch 定义的参数禁止赋值 |
| no-extend-native | 禁止扩展原生对象 |
| no-extra-bind | 禁止额外的 bind |
| no-extra-boolean-cast | 禁止额外的布尔值转换 |
| no-extra-label | 禁止额外的 label |
| no-extra-parens | 禁止额外的括号，仅针对函数体 |
| no-extra-semi | 禁止额外的分号 |
| no-fallthrough | 每一个 switch 的 case 都需要有 break, return 或 throw 包含注释的情况下允许 |
| no-floating-decimal | 不允许使用 2. 或 .5 来表示数字，需要用 2、2.0、0.5 的格式 |
| no-func-assign | 禁止对函数声明重新赋值 |
| no-global-assign | 禁止对全局变量赋值 |
| no-implicit-coercion | 禁止使用隐式类型转换 |
| no-implied-eval | 禁止在 setTimeout 和 setInterval 中传入字符串，因会触发隐式 eval |
| no-implicit-globals | 禁止隐式定义全局变量 |
| no-inline-comments | ❌ 禁止行内注释 |
| no-inner-declarations | 禁止在块作用域内使用 var 或函数声明 |
| no-invalid-regexp | 禁止使用非法的正则表达式 |
| no-invalid-this | ❌ 禁止在类之外的地方使用 this |
| no-irregular-whitespace | 禁止使用不规范空格 |
| no-iterator | 禁止使用 __iterator__ |
| no-label-var | label 不得与已定义的变量重名 |
| no-labels | ❌ 禁止使用 label |
| no-lone-blocks | 禁止使用无效的块作用域 |
| no-lonely-if | ❌ 禁止 else 中只有一个单独的 if |
| no-loop-func | 禁止 for (var i) { function() { use i } }，使用 let 则可以 |
| no-magic-numbers | 禁止魔法数字 |
| no-mixed-operators | 禁止使用混合的逻辑判断，必须把不同的逻辑用圆括号括起来 |
| no-mixed-requires | ❌ 相同类型的 require 必须放在一起 |
| no-mixed-spaces-and-tabs | 禁止混用空格和 tab 来做缩进，必须统一 |
| no-multi-assign | 禁止连等赋值 |
| no-multi-spaces | 禁止使用连续的空格 |
| no-multi-str | 禁止使用 \ 来定义多行字符串，统一使用模板字符串来做 |
| no-multiple-empty-lines | 连续空行的数量限制 |
| no-negated-condition | ❌ 禁止 if 中出现否定表达式 !== |
| no-nested-ternary | ❌ 禁止嵌套的三元表达式 |
| no-new-func | ❌ 禁止 new Function |
| no-new-object | 禁止使用 new Object |
| no-new-require | 禁止使用 new require |
| no-new-symbol | 禁止使用 new Symbol |
| no-new-wrappers | 禁止 new Boolean、Number 或 String |
| no-new | 禁止 new 一个类而不存储该实例 |
| no-obj-calls | 禁止把原生对象 Math、JSON、Reflect 当函数使用 |
| no-octal-escape | 禁止使用八进制转义符 |
| no-octal | 禁止使用0开头的数字表示八进制 |
| no-path-concat | 禁止使用 __dirname + 'file' 的形式拼接路径，应该使用 path.join 或 path.resolve 来代替 |
| no-param-reassign | 禁止对函数的参数重新赋值 |
| no-plusplus | ❌ 禁止 ++ 和 -- |
| no-process-env | ❌ 禁止使用 process.env.NODE_ENV |
| no-process-exit | ❌ 禁止使用 process.exit(0) |
| no-prototype-builtins | ❌ 禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable |
| no-proto | 禁止使用 `__proto__` |
| no-redeclare | 禁止重复声明 |
| no-regex-spaces | 禁止在正则表达式中出现连续空格 |
| no-restricted-globals | ❌ 禁止特定的全局变量 |
| no-restricted-imports | ❌ 禁止 import 特定的模块 |
| no-restricted-modules | ❌ 禁止使用特定的模块 |
| no-restricted-properties | ❌ 禁止特定的对象属性 |
| no-restricted-syntax | ❌ 禁止使用特定的语法 |
| no-return-assign | 禁止在return中赋值 |
| no-return-await | 禁止在 return 中使用 await |
| no-script-url | 禁止 location.href = 'javascript:void' |
| no-self-assign | 禁止将自己赋值给自己 |
| no-self-compare | 禁止自己与自己作比较 |
| no-sequences | 禁止逗号操作符 |
| no-shadow-restricted-names | 禁止使用保留字作为变量名 |
| no-shadow | 禁止在嵌套作用域中出现重名的定义，如 let a; function b() { let a } |
| no-sparse-arrays | 禁止数组中出现连续逗号 |
| no-sync | ❌ 禁止使用 node 中的同步的方法，比如 fs.readFileSync |
| no-tabs | ❌ 禁止使用 tabs |
| no-template-curly-in-string | 禁止普通字符串中出现模板字符串语法 |
| no-ternary | ❌ 禁止三元表达式 |
| no-this-before-super | 禁止在构造函数的 super 之前使用 this |
| no-throw-literal | 禁止 throw 字面量，必须 throw 一个 Error 对象 |
| no-trailing-spaces | 禁止行尾空格 |
| no-undef-init | 禁止将 undefined 赋值给变量 |
| no-undef | 禁止访问未定义的变量或方法 |
| no-undefined | 禁止使用 undefined，如需判断一个变量是否为 undefined，请使用 typeof a === 'undefined' |
| no-underscore-dangle | ❌ 禁止变量名中使用下划线 |
| no-unexpected-multiline | 禁止出现难以理解的多行代码 |
| no-unmodified-loop-condition | 循环体内必须对循环条件进行修改 |
| no-unneeded-ternary | 禁止不必要的三元表达式 |
| no-unreachable | 禁止出现不可到达的代码，如在 return、throw 之后的代码 |
| no-unsafe-finally | 禁止在finally块中出现 return、throw、break、continue |
| no-unsafe-negation | 禁止出现不安全的否定，如 for (!key in obj} {}，应该写为 for (!(key in obj)} {} |
| no-unused-expressions | 禁止出现无用的表达式 |
| no-unused-labels | 禁止定义不使用的 label |
| no-unused-vars | 禁止定义不使用的变量 |
| no-use-before-define | 禁止在变量被定义之前使用它 |
| no-useless-call | 禁止不必要的 call 和 apply |
| no-useless-computed-key | 禁止使用不必要计算的key，如 var a = { ['0']: 0 } |
| no-useless-concat | 禁止不必要的字符串拼接 |
| no-useless-constructor | 禁止无用的构造函数 |
| no-useless-escape | 禁止无用的转义 |
| no-useless-rename | 禁止无效的重命名，如 import {a as a} from xxx |
| no-useless-return | ❌ 禁止没有必要的 return |
| no-var | 禁止使用 var，必须用 let 或 const |
| no-void | 禁止使用void |
| no-warning-comments | 禁止注释中出现 TODO 或 FIXME，用这个来提醒开发者，写了 TODO 就一定要做完 |
| no-whitespace-before-property | 禁止属性前出现空格，如 foo. bar() |
| no-with | 禁止 with |
| nonblock-statement-body-position | 禁止 if 语句在没有花括号的情况下换行 |
| object-curly-newline | ❌ 定义对象的花括号前后是否要加空行 |
| object-curly-spacing | ❌ 定义对象的花括号前后是否要加空格 |
| object-property-newline | ❌ 对象每个属性必须独占一行 |
| object-shorthand | ❌ obj = { a: a } 必须转换成 obj = { a } |
| one-var-declaration-per-line | ❌ 每个变量声明必须独占一行 |
| one-var | 是否允许使用逗号一次声明多个变量 |
| operator-assignment | ❌ 必须使用 x = x + y 而不是 x += y |
| operator-linebreak | ❌ 断行时操作符位于行首还是行尾 |
| padded-blocks | ❌ 代码块首尾必须要空行 |
| padding-line-between-statements | ❌ 限制语句之间的空行规则，比如变量定义完之后必须要空行 |
| prefer-arrow-callback | ❌ 必须使用箭头函数作为回调 |
| prefer-const | ❌ 声明后不再修改的变量必须使用 const |
| prefer-destructuring | ❌ 必须使用解构 |
| prefer-numeric-literals | ❌ 必须使用 0b11111011 而不是 parseInt('111110111', 2) |
| prefer-promise-reject-errors | promise 的 reject 中必须传入 Error 对象，而不允许使用字面量 |
| prefer-rest-params | 必须使用解构 ...args 来代替 arguments |
| prefer-spread | ❌ 必须使用 func(...args) 来代替 func.apply(args) |
| prefer-template | ❌ 必须使用模板字符串来代替字符串拼接 |
| quotes | 字符串必须使用单引号 |
| quote-props | ❌ 对象字面量的键名禁止用引号括起来 |
| radix | parseInt方法必须传进制参数 |
| require-await | ❌ async 函数中必须存在 await 语句 |
| require-jsdoc | ❌ 必须使用 jsdoc 风格的注释 |
| require-yield | generator 函数内必须有 yield |
| rest-spread-spacing | ...后面不允许有空格 |
| semi-spacing | ❌ 分号前后的空格规则 |
| semi-style | 禁止行首出现分号 |
| semi | 行尾必须使用分号结束 |
| sort-imports | ❌ imports 必须排好序 |
| sort-keys | ❌ 对象字面量的键名必须排好序 |
| sort-vars | ❌ 变量声明必须排好序 |
| space-before-blocks | ❌ function 等的花括号之前是否使用空格 |
| space-before-function-paren | ❌ function 的圆括号之前是否使用空格 |
| space-in-parens | ❌ 圆括号内的空格使用规则 |
| space-infix-ops | 操作符前后要加空格 |
| space-unary-ops | new, delete, typeof, void, yield 等表达式前后必须有空格，-, +, --, ++, !, !! 等表达式前后不许有空格 |
| spaced-comment | 注释的斜线和星号后要加空格 |
| strict | 禁用严格模式，禁止在任何地方出现 'use strict' |
| switch-colon-spacing | ❌ switch 中冒号前后的空格规则 |
| symbol-description | 创建 Symbol 的时候必须传入描述 |
| template-curly-spacing | ❌ 模板字符串 ${} 前后的空格规则 |
| template-tag-spacing | ❌ 模板字符串前后的空格规则 |
| unicode-bom | 所有文件头禁止出现 BOM |
| use-isnan | 禁止直接对 NaN 进行判断，必须使用 isNaN |
| valid-jsdoc | ❌ 注释必须符合 jsdoc 的规范 |
| valid-typeof | typeof 判断条件只能是 "undefined", "object", "boolean", "number", "string", "function" 或 "symbol" |
| vars-on-top | ❌ var 必须在作用域的最前面 |
| wrap-iife | 自执行函数必须使用圆括号括起来，如 (function(){do something...})() |
| wrap-regex | ❌ 正则表达式必须用圆括号括起来 |
| yield-star-spacing | ❌ yield 的 * 前后空格规则 |
| yoda | 禁止Yoda格式的判断条件，如 if (true === a)，应使用 if (a === true) |