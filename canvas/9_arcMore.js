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
    context.strokeStyle= "red";
    context.lineWidth=5;
    
    //左上角
    context.translate(250, 200);
    //從此之後 250,200 --->0,0 
    context.beginPath();
    context.arc(0, 0, 150, 0, 2 * Math.PI, false);
    context.stroke();
    
    context.moveTo(0, 0); //移到圓中心
    context.lineTo(0, -120);
    context.stroke();
    context.translate(-250, -200);   //回到原來的 0, 0
    //右上角
    context.translate(750, 200);
    context.beginPath();    
    context.arc(0, 0, 150, 0, 2 * Math.PI);
    context.stroke();
    context.translate(-750, -200);

    //左下角
    context.translate(250, 600);
    context.lineWidth=15;
    let gradient = context.createRadialGradient(0, 0, 150-(15/2), 0, 0, 150+(15/2));
    gradient.addColorStop(0, '#555');
    gradient.addColorStop(0.5, '#FFF');
    gradient.addColorStop(1, '#555');
    
    
    context.beginPath();    
    context.arc(0, 0, 150, 0, 2 * Math.PI);
    context.strokeStyle = gradient;
    context.stroke();
        
    //右下角
        
}

//