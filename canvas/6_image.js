window.addEventListener("load", doFirst);
//window物件，load事件

function doFirst(){
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d"); //告訴他 canvas是2D的繪圖環境
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
    let pic = new Image();
    pic.src = '../images/mewmew.jpg'
    pic.addEventListener('load', function(){ //要幫圖片建立監聽事件 load進來
        context.drawImage(pic, 0, 0);
    })
    
    
}
