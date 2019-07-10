# Taro
> This is a practical project developed by Taro

## conclusion

```
-1. 组件中当方法名与引入的包名相同的时候，子组件调用其父组件的方法，其传入的参数，父组件相应监听方法拿到其参数会出现移位现象。

-2. Taro中setState方法一定是异步的，在回调中才能准确拿到设置后的属性。

-3. 绑定事件传参，使用bind处理。定义监听函数，事件e会排在所传递参数的后面。

-4. 向子组件传递函数，都以on开头。em:  onCreatDom={this.creatDom.bind(this)}.

-5. JSX支持缺陷，不能在包含JSX元素的map循环中使用if; 不能使用Array.map之外的方法操作JSX数组; 不能再JSX参数中，使用匿名函数; 最好不要在rander()之外定义JSX; 不能再JSX参数（props）中传入JSX元素; 不支持无状态组件; 不能在JSX中使用展开符;
    em:   <View onClick={() => {this.handleClick()}} ></View>  错误
    em:   <View onClick={function (e) {this.handleClick()}} ></View>  错误
    em:   const Test = function () {return <View />}  无状态组件

-6. getStorageSync不是每次都能成功,如果存放重要数据，建议加try catch，或用异步方法在success中操作。

-7. 引入组件时，保持组件名与文件名相同，否则报错。

-8. 引入图片。要么写绝对路径， 要么先用import引入，要么require(相对路劲)引入
```