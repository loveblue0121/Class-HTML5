window.addEventListener("load", doFirst);
//window物件，load事件

function doFirst(){
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d"); //告訴他 canvas是2D的繪圖環境

//格線結束
    
//四分之一線

    context.beginPath();
    context.moveTo(0, canvas.height / 2);
    context.lineTo(canvas.width, canvas.height / 2);

    context.moveTo(canvas.width / 2, 0);
    context.lineTo(canvas.width / 2, canvas.height);
    
    context.strokeStyle='rgba(0,0,0,0.8)';
    context.stroke();

    context.lineWidth=3;  //調粗細
    //----------左上角(喜) ----------------
    context.beginPath();
    context.arc(250, 200, 150, 0, 2* Math.PI, true);
    //左眼
    context.moveTo(120, 150);
    context.lineTo(170, 100);
    context.lineTo(220, 150);
    //右眼
    context.moveTo(270, 150);
    context.lineTo(320, 100);
    context.lineTo(370, 150);
    //嘴巴
    context.moveTo(350, 230);
    context.arc(250,230,100, 0 , 1*Math.PI, false)
    // context.clearRect(350, 150, 50, 100);
    context.stroke();   
    //-----------右上角(怒)------------------
    context.beginPath();
    context.arc(750, 200, 150, 0, 2* Math.PI, true);
    context.moveTo(550, 50);
    context.lineTo(550, 80);
    context.lineTo(520, 80);

    context.moveTo(520, 90);
    context.lineTo(550, 90);
    context.lineTo(550, 120);

    context.moveTo(560, 50);
    context.lineTo(560, 80);
    context.lineTo(590, 80);

    context.moveTo(590, 90);
    context.lineTo(560, 90);    
    context.lineTo(560, 120);    

    //左眼
    context.moveTo(650, 100);
    context.lineTo(720, 170);
    
    //右眼
    context.moveTo(850, 100);
    context.lineTo(770, 170);
    //嘴巴
    context.moveTo(850, 280);
    context.arc(750,290,100, 0 , 1*Math.PI, true);
    context.stroke();
    //-----------左下角(哀)------------------
    context.beginPath();
    context.arc(250, 600, 150, 0, 2* Math.PI, true);
    //左眼
    context.moveTo(130, 530);
    context.lineTo(220, 530);
    context.moveTo(150, 530);
    context.lineTo(150, 630);
    context.moveTo(200, 530);
    context.lineTo(200, 630);
    
    //右眼
    context.moveTo(270, 530);
    context.lineTo(370, 530);
    context.moveTo(290, 530);
    context.lineTo(290, 630);
    context.moveTo(340, 530);
    context.lineTo(340, 630);
    //嘴巴
    context.moveTo(150, 690);
    //context.arc(250,730,100, 0 , 1.4*Math.PI, true);
    context.quadraticCurveTo(250, 600, 350, 690);
    context.stroke();
    //-----------右下角(樂)------------------
    context.beginPath();
    context.arc(750, 600, 150, 0, 2* Math.PI, true);
    
    //左眼
    context.moveTo(620, 550);
    context.quadraticCurveTo(670, 500, 720, 550);
    //右眼
    context.moveTo(770, 550);
    context.quadraticCurveTo(820, 500, 870, 550);
    //嘴巴
    context.moveTo(630, 620);
    context.lineTo(870, 620);
    context.arc(750,620,120, 0 , 1*Math.PI, false)
    
    context.stroke();
}