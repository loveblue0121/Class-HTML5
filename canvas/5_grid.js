window.addEventListener("load", doFirst);
//window物件，load事件

function doFirst(){
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d"); //告訴他 canvas是2D的繪圖環境
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
    //水平線
    /*
    context.moveTo(0, 50);
    context.lineTo(1000, 50); //1000為寬  50為間隔

    context.moveTo(0, 100);
    context.lineTo(1000, 100);
    //垂直線

    */    
    
    
    
    
    
    

   
    
    
    
}
