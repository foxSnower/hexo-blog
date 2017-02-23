---
title: Node.js 6.9.5文档
---

# 关于本文档

本文档的目的是全面地讲解`Node.js`的`API`，既从参考角度也从概念角度。每个章节介绍一个内置模块或高级概念。必要时，属性类型、方法参数、以及传给事件句柄的参数会在主题 标题下的列表中详细说明。每个`.html`文档都有一个对应的`.json`文档，以结构化的方式呈现相同的内容。这个特性 是试验的，用于帮助那些需要为编程提供文档的IDE或其他开发工具。

## 稳定性指数

贯穿整个文档，你会看到每个章节的稳定性标志。在`Node.js`的`API`仍会有少量变化，但随着发展，部分`API`会更稳定可靠。有些`API`历经考验、且被大量依赖，它们几乎不会再改变。也有些API是新增的、或试验的、或被认定为有风险且正在重新设计中的。

稳定性指标如下：

	稳定性：0 - 废弃的
	这个特性被认定为存在问题，且正计划修改。
	不要依赖该特性。
	使用该特性可能会产生警告信息。
	不要指望该特性会向后兼容。

	稳定性：1 - 试验的
	这个特性可能会变化，在命令行中会有标记提示。
	在将来的版本中该特性可能会变化或移除。

	稳定性：2 - 稳定的
	这个特性已被证明是符合要求的。
	与npm生态系统的兼容性是一个高级优先级，除非绝对必要否则不会变化。

	稳定性：3 - 锁定的
	这个特性只接受与安全性、性能、或BUG修复有关的修改。
	请不要在该特性提出修改API的建议，这些建议会被拒绝。

## JSON输出

	稳定性：1 - 试验的

每个通过`Markdown`生成的`HTML`文件都有一个对应的具有相同数据的`JSON`文件。
这个特性是Node.js v0.6.12 新增的。该特性是试验的

## 系统调用与帮助文档

系统调用定义了用户程序和底层操作系统之间的接口，例如`open(2)`、`read(2)`。`Node`函数只是简单地包装了系统调用，例如`fs.open()`。与之对应的帮助文档描述了系统调用的工作方式。

**警告：**有些系统调用是`BSD`系统特有的。例如`lchown(2)`。这意味着`fs.chown()`只适用于`Mac OS X`和其他的`BSD`衍生系统，在`Linus`上不行

大部分`Unix`的系统调用都有对应的`Windows`版本，但`Windows`版本运行起来可能与`Linus`和`OS X`的有些差异。有些`Unix`系统调用无法在`Windows`中找到对应的操作语义，祥见[议题4760](#议题4760)

# 用法

`node [options] [v8 options] [script.js | -e "script"] [arguments]`
使用`Node.js`运行脚本的各种参数与方法，请查看[命令行参数](#命令行参数)文档。

## 例子

例子，使用`Node.js`编写的`Web`服务器，响应返回`'Hello World'`：

```js
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req,res) =>{
	res.statusCode =200;
	res.setHeader('Content-Type','text/plain');
	res.end('Hello World!\n');
});
server.listen(port,hostname,() =>{
	console.log(`Server running at http://${hostname}:${port}/`);
});
```

要运行这个服务器，需要将代码保存到名为`example.js`的文件，并使用`Node.js`来执行：

	$ node example.js
	Server running at http://127.0.0.1:3000/

文档中所有的例子都可以用相同的方式运行。

# assert（断言）

	稳定性：3 - 锁定的

`assert`模块提供了一组简单的断言测试集合，用于测试不变量。该模块是供`Node.js`内部使用，但可以通过`require('assert')`在代码中使用。`assert`不是一个测试框架，也无意成为通用的断言库。
`assert`模块的`API`是[锁定的](#稳定性指数)。这意味着将不会新增或更改任何由该模块实现与公开的方法。

## assert(value[,message])

新增于：v0.5.9 

[assert.ok()](#assert-ok-value-message) 的别名。

```js
const assert = require('assert');
assert(true);
//通过
assert(1);
//通过
assert(false);
//抛出 "AssertionError: false == true"
assert(0);
//抛出 "AssertionError: 0 == true"
assert(false,'it\'s false');
//抛出 "AssertionError: it's false"
```

## assert.deepEqual(actual,expected[,message])

新增于：v0.1.21

测试`actual`和`expected`参数是否深度相等。原始值会使用相等运算符（`==`）进行比较。

只比较可枚举的自身属性。`deepEqual()`不测试对象的原型、连接符、或不可枚举的属性。这会引起一些潜在的意料之外的结果。例如，下面的例子不会抛出`AssertionError`，因为`Error`对象的属性是不可枚举的：

```js
//注意：这不会抛出AssertionError!
assert.deepEqual(Error('a'),Error('b'));
```

深度相等意味着子对象的可枚举的自身属性也会被比较：

```js
const assert = require('assert');
const obj1 = {
	a:{
		b:1
	}
};
const obj2 = {
	a:{
		b:2
	}
};
const obj3 = {
	a:{
		b:1
	}
};
const obj4 =Object.create(obj1);
assert.deepEqual(obj1,obj1);
// 通过，对象与自身相等
assert.deepEqual(obj1,obj2);
// 抛出 AssertionError: { a:{b:1} } deepEqual { a:{b:2} }
// b 的值不同
assert.deepEqual(obj1,obj3);
// 通过，两个对象相等
assert.deepEqual(obj1,obj4);
// 抛出 AssertionError: { a:{b:1} } deepEqual {}
// 原型会被忽略
```

如果两个值不相等，则抛出一个带有`message`属性的`AssertionError`，其中`message`参数为`undefined`，则输出默认的错误信息

## assert.deepStrictEqual(actual,expected[,message])

新增于：v1.2.0

大多数情况下等同于`assert.deepEqual()`，但有两个例外。首先，原始值使用严格相等运算符（`===`）进行比较。其次，对象对比包括严格比较它们的原型。

```js
const assert = require('assert');
assert.deepEqual({a:1},{a:'1'});
// 通过，因为 1=='1'
assert.deepStrictEqual({a:1},{a:'1'});
// 抛出 AssertionError: {a:1} deepStrictEqual {a:'1'}
// 因为 1 !== '1' 使用严格相等运算符
```

如果两个值不相等，则抛出一个带有`message`属性的 `AssertionError`，其中`message`属性的值等于传入的`message`参数的值。如果`message`参数为`undefined`，则输出默认的错误信息。

## assert.doesNotThrow(block[,error][,message])

新增于：v0.1.21

断言`block`函数不会抛出错误。查看[assert.throws()](#assert-throws-block-error-message) 了解更多。

当调用`assert.doesNotThrow()`时，它会立即调用`block`函数。

如果`block`函数抛出错误，并且错误类型与`error`参数指定的相同，则抛出`AssertionError`。如果错误类型不相同，或`error`参数是`undefined`，则错误回传给调用者。

以下例子会抛出 `TypeError`，因为在断言中没有匹配的错误类型：

```js
assert.doesNotThrow( ()=> {
  throw new TypeError('Wrong Value');
  },
  SyntaxError
);
```

以下例子会抛出一个带有'Got unwanted exception(TypeError)..'信息的`AssertionError`：

```js
assert.doesNotThrow( ()=> {
  throw new TypeError('Wrong Value');
  },
  TypeError
);
```
如果抛出了`AssertionError`，并且有为`message`参数传值，则`message`的值会被追加到`AssertionError`的消息中：

```js
assert.doesNotThrow( ()=> {
  throw new TypeError('Wrong Value');
  },
  TypeError,
  'Whoops'
);
// 抛出 AssertionError: Got unwanted exception(TypeError). Whoops
```

## assert.equal(actual,expected[,message])

新增于：v0.1.21

使用相等运算符（`==`）来测试`actual`和`expected`参数是否相等。

```js
const assert = require('assert');
assert.equal(1,1);
// 通过，1==1
assert.equal(1,'1');
// 通过，1=='1'
assert.equal(1,2);
// 抛出 AssertionError: 1==2
assert.equal({a:{b:1}},{a:{b:1}});
// 抛出 AssertionError: {a:{b:1}} == {a:{b:1}}
```

如果两个值不相等，则抛出一个带有`message`属性的`AssertionError`，其中`message`属性的值等于传入的`message`参数的值。如果`message`参数为`undefined`，则输出默认的错误信息。

## assert.fail(actual,expected,message,operator)

新增于：v0.1.21

抛出`AssertionError`。如果`message`的值不为真，则错误信息为`actual`和`expected`的值，并且`operator`分隔。否则，错误信息为`message`的值。

```js
const assert = require('assert');
assert.fail(1,2,undefined,'>');
// 抛出 AssertionError:1>2
assert.fail(1,2,'whoops','2');
// 抛出 AssertionError: whoops
```

## assert.ifError(value)

新增于：v0.1.97

如果`value`的值为真，抛出`value`。当测试回调函数的`error`参数时非常有用。

```js
const assert = require('assert');
assert.ifError(0);
// 通过
assert.ifError(1);
// 抛出 1 
assert.ifError('error');
// 抛出 'error'
assert.ifError(new Error());
// 抛出 Error
```

## assert.notDeepEqual(actual,expected[,message])

新增于：v0.1.21

测试`actual`和`expected`参数是否深度相等。与[assert.deepEqual()](#assert-deepEqual-actual-expected-message)相反。

```js
const assert = require('assert');
const obj1 = { a:{
	b:1 
}};
const obj2 = { a:{
	b:2
}};
const obj3 = { a:{
	b:1
}};
const obj4 = Object.create(obj1);
assert.notDeepEqual(obj1,obj1);
// 抛出 AssertionError: {a:{b:1}} notDeepEqual {a:{b:1}}
assert.notDeepEqual(obj1,obj2);
// 通过，obj1 与 obj2 不深度相等
assert.notDeepEqual(obj1,obj3);
// 抛出 AssertionError: {a:{b:1} notDeepEqual {a:{b:1}}}
assert.notDeepEqual(obj1,obj4);
// 通过，obj1 与 obj4 不深度相等
```
如果两个值深度相等，则抛出一个带有`message`属性的`AssertionError`，其中`message`属性的值等于传入的`message`参数的值。如果`message`参数为`undefined`，则输出默认的错误信息。

## assert.notDeepStrictEqual(actual,expected[,message])

新增于：v1.2.0

测试`actual` 和`expected`参数是否不深度严格相等。与[assert.deepStrictEqual()](#assert-deepStrictEqual-actual-expected-message)相反。

```js
const assert = require('assert');
assert.notDeepEqual({a:1},{a:'1'});
// 抛出 AssertionError: {a:1} notDeepEqual {a:'1'}
assert.notDeepStrictEqual({a:1},{a:'1'});
// 通过
```

如果两个值深度严格相等，则抛出一个带有`message`属性的`AssertionError`，其中`message`属性的值等于传入的`message`参数的值。如果`message`参数为`undefined`，则输出默认的错误信息。

## assert.notEqual(actual,expected[,message])

新增于：v0.1.21

使用不等运算符（`!=`）来测试`actual`和`expected`参数是否相等。

```js
const assert = require('assert');
assert.notEqual(1,2);
// 通过 
assert.notEuqal(1,1);
// 抛出 AssertionError: 1 != 1
assert.notEqual(1,'1');
// 抛出 AssertionError: 1 != '1'
```

如果两个值相等，则抛出一个带有`message`属性的`AssertionError`，其中`message`属性的值等于传入的`message`参数的值。如果`message`参数为`undefined`，则输出默认的错误信息。

## assert.notStrictEqual(actual,expected[,message])

新增于：v0.1.21

使用严格不等运算符（`!==`）来测试`actual`和`expected`参数是否不严格相等。

```js
const assert = require('assert');
assert.notStrictEqual(1,2);
// 通过 
assert.notStrictEqual(1,1);
// 抛出 AssertionError: 1 !== 1 
assert.notStrictEqual(1,'1');
// 通过
```

如果两个值严格相等，则抛出一个带有`message`属性的`AssertionError`，其中`message`属性的值等于传入的`message`参数的值。如果`message`参数为`undefined`，则输出默认的错误信息。

## assert.ok(value[,message])

新增于：v0.1.21

测试`value`是否为真值。相当于`assert.equal(!!value,true,message)`。 

如果`value`不为真值，则抛出一个带有`message`属性的`AssertionError`，其中`message`属性的值等于传入的`message`参数的值。如果`message`参数为`undefined`，则输出默认的错误信息。

```js
const assert = require('assert');
assert.ok(true);
// 通过 
assert.ok(1);
// 通过 
assert.ok(false);
// 抛出 "AssertionError: false == true"
assert.ok(0);
// 抛出 "AssertionError: 0 == true"
assert.ok(false,'it\'s false');
// 抛出 "AssertionError: it's false"
```

## assert.strictEqual(actual,expected[,message])

新增于：v0.1.21

使用严格相等运算符（`===`）测试是否严格相等。

```js
const assert =require('assert');
assert.strictEqual(1,2);
// 抛出 AssertionError: 1===2
assert.strictEqual(1,1);
// 通过 
assert.strictEqual(1,'1');
// 抛出 AssertionError: 1==='1'
```

如果两个值不严格相等，则抛出一个带有`message`属性的`AssertionError`，其中`message`属性的值等于传入的`message`参数的值。如果`message`参数为`undefined`，则输出默认的错误信息。

## assert.throws(block[,error][,message])

新增于：v0.1.21

期望`block`函数抛出错误。 

如果指定`error`，它可以是一个构造函数、正则表达式、或校验函数。

如果指定`message`，当`block`函数抛出错误时，`message`会作为错误信息传给`AssertionError`。

使用构造函数的例子：

```js
assert.throws( ()=> {
	throw new Error('Wrong value');
	},
	Error 
);
```

使用正则表达式的例子：

```js
assert.throws( ()=>{
	throw new Error('Wrong value');
	},
 	/value/
);
```

使用自定义校验函数的例子：

```js
assert.throws( ()=> {
  throw new Error('Wrong value');
  },
  function(err){
    if( (err instanceof Error) && (/value/.test(err)) ){
      return true;
    }

  },
  'unexpected error'
)
```

注意，`error`参数不能是字符串。如果第二个参数是字符串，则视为不传`error`参数，传入的字符串会被当作是`message`的值。这可能会引起误解：

```js
// 这是错误的！不要这么做
assert.throws(myFunction,'missing foo','did not throw with expected message');
// 应该这么做
assert.throws(myFunction,/missing foo/,'did not throw with expected message');
```
# Buffer

	稳定性：2 - 稳定的

在 `ECMAScript 2015 (ES6)` 引入 `TypedArray` 之前，`JavaScript` 语言没有读取或操作二进制数据流的机制。 `Buffer` 类被引入作为 `Node.js` `API` 的一部分，使其可以在 `TCP`流和文件系统操作等场景中处理二进制数据流。

现在 `TypedArray` 已经被添加进 `ES6` 中，`Buffer`类以一种更优与更适合 `Node.js` 用例的方式实现了 `Uint8Array API`。

`Buffer` 类的实例类似于整数数组，除了其是大小固定的、且在 `V8` 堆外分配物理内存。 `Buffer` 的大小在其创建时就已确定，且不能调整大小。

`Buffer` 类在 `Node.js` 中是一个全局变量，因此无需 `require('buffer').Buffer`。

例子：

```js
// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10);
// 创建一个长度为 10、且用 0x1 填充的 Buffer。 
const buf2 = Buffer.alloc(10, 1);
// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);
// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);
// 创建一个包含 ASCII 字节数组 [0x74, 0x65, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('test');
// 创建一个包含 UTF-8 字节数组 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'utf8');
```


