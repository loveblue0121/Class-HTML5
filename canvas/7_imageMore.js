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
    context.strokeStyle='rgba,0,0,0,0.3';
    context.stroke();
//格線結束
    pic1 = new Image();
    pic1.src = '../images/mewmew.jpg'
    pic1.addEventListener('load',loadImage);
    
    pic2 = new Image();
    pic2.src = '../images/Shinnosuke9.png'
    pic2.addEventListener('load',loadImage);
}
function loadImage(){
    context.globalAlpha=0.5; //類似opacity效果
    
    context.drawImage(pic1, 0, 0);
    context.globalAlpha=1;
    context.drawImage(pic2, 400, 400, canvas.width-400, canvas.height-400);
}
//