window.addEventListener("load", doFirst);
//window物件，load事件

function doFirst(){
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d"); //告訴他 canvas是2D的繪圖環境
    //context.fillStyle='color | gradient | pattern'; 顏色
    context.strokeStyle='blue';
    context.lineWidth=5;
    

    context.moveTo(100, 100); //起點
    context.lineTo(250, 250);
    context.lineTo(400, 50);
    context.lineTo(50, 200);
    context.closePath(); //將結束點跟起點連在一起
    
    


    context.stroke(); //輸出線條
    
    
    

   
    
    
    
}
/* 
事件聆聽功能
devtools
事件(event-driven language)
    1. 建立事件聆聽功能
        一個物件 + 一個事件 + 一個處理函數
        (1). 寫在.html <<盡量少用
            <body onload="doFirst()"></body>
            物件   事件    處理函數
            <button onclick="doNothing()"></button>
        (2). 寫在.js
            window.onload = doFirst; 不要+小括號
            window.onload = function(){};
            物件    事件     處理函數
            物件 的 屬性   =
            按鈕物件.onclick = doNothing;
        (3). 寫在.js (W3C的推薦方式)
            window.addEventListener("load", doFirst);
            load, click      | event   較新的寫法(不用加on)
            onload, onclick  |event handler 較舊的寫法(用在Dom 0)
    2. 事件分類
        (1). 輸入裝置(滑鼠)
             click | mousedown | mouseup | dblclick | contextmenu(右鍵)
             mousemove(使用要小心)
             mouseover | mouseout(支援冒泡事件)
             mouseenter | mouseleave(沒有支援冒泡事件)

        (2). 鍵盤
             keypress | keydown | keyup

        (3). 瀏覽器
             load | unload | beforeunload
             paste | copy | cut
             scroll | resize(window)
        (4). 表單
             submit | reset
             focus | blur
             change | select | input
             確認是否reset
             theForm.onreset = function(){
                 return confirm("Are you sure you want to reset the form?")
             }
    3. 事件物件的屬性和方法
    4. 引用事件物件
屬性和方法          | camelCase [ex. addEventListener()]   
內建物建(class)     | PascalCase [ex. new Date() | new RegExp()]
事件                | 全部小寫 [ex. readystatechange]
常數                | 全部大寫 [ex. Math.PI]
*/