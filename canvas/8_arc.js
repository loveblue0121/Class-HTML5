window.addEventListener("load", doFirst);
//window物件，load事件

function doFirst(){
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d"); //告訴他 canvas是2D的繪圖環境
//格線開始
    for(let i = 0; i < 100; i++){
        let interval = i * 50;
        //水平線
        context.moveTo(0, interval);
        context.lineTo(canvas.width, interval);
        context.fillText(interval, 0, interval);
        
        //垂直線
        context.moveTo(interval, 0);
        context.lineTo(interval, canvas.height);
        context.fillText(interval, interval, 10);
        
    }
    context.strokeStyle='rgba(0,0,0,0.3)';
    context.stroke();
//格線結束
    
//四分之一線

    context.beginPath();
    context.moveTo(0, canvas.height / 2);
    context.lineTo(canvas.width, canvas.height / 2);

    context.moveTo(canvas.width / 2, 0);
    context.lineTo(canvas.width / 2, canvas.height);
    
    context.strokeStyle='rgba(0,0,0,0.8)';
    context.stroke();
//四分之一線結束
    strokeStyle= "red";
    context.lineWidth=5;
    
    //左上角 
    context.beginPath();
    context.arc(250, 200, 150, 0, Math.PI, false);
    context.stroke();   
    //右上角
    context.beginPath();
    context.arc(750, 200, 150, 0, Math.PI, true);
    context.stroke();
    //左下角
    context.beginPath();
    context.arc(250, 600, 150, 0, 2* Math.PI, true);
    context.stroke();    
    //右下角
    context.beginPath();
    context.arc(750, 600, 150, 0.4 * Math.PI, 1.7* Math.PI, false);
    context.stroke();    
}

//