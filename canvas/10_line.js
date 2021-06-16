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
    context.strokeStyle="red";
    context.lineWidth=20;
//lineCap
    context.beginPath();
    context.lineCap='butt';  //線的末端形狀
    context.moveTo(100, 100);
    context.lineTo(300, 100);
    context.stroke();

    context.beginPath();
    context.lineCap='round';
    context.moveTo(100, 150);
    context.lineTo(300, 150);
    context.stroke();

    context.beginPath();
    context.lineCap='square';
    context.moveTo(100, 200);
    context.lineTo(300, 200);
    context.stroke();
//lineJoin
    context.lineJoin='miter';
    context.strokeRect(100, 300, 100, 200);
    context.lineJoin='bevel';
    context.strokeRect(250, 300, 100, 200);
    context.lineJoin='round';
    context.strokeRect(400, 300, 100, 200);
    
    
    
    

}

//