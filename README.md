### 自定义记住密码按钮效果

https://sunguangqing.github.io/remember-password/remember.html

#### `HTML结构：`
```HTML
<div class="wrap">
    <label for="remember">
        <input id="remember" class="check" type="checkbox" />
        <span class="btn"></span>
    </label>
</div>
```

#### `CSS代码：`
```CSS
.wrap{
    position: relative;
    width: 40px;
    height: 20px;
    text-align: center;
    margin: 100px auto;
}
.wrap .check{
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
}
.wrap .btn{
    display: inline-block;
    width: 40px;
    height: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    background-color: #999;
    transition: .3s;
    -moz-transition: .3s;
    -o-transition: .3s;
    -webkit-transition: .3s;
    cursor: pointer;
}
.wrap .btn:after{
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    transition: .3s;
    -moz-transition: .3s;
    -o-transition: .3s;
    -webkit-transition: .3s;
    background-color: #fff;
    margin-top: 1px;
    margin-left: 1px;
}
.wrap .btn.on{
    background-color: #0b97b0;
}
.wrap .btn.on:after{
    transform: translateX(20px);
}
```

#### `JS代码：`
```Javascript
(function(){
    $(".check").on("click", function(e){    //要绑定在该input控件
        var _checked = $(this).prop("checked");
        if(_checked){
            $(this).siblings(".btn").addClass("on");
        }else {
            $(this).siblings(".btn").removeClass("on");
        }
    });
})();
```
