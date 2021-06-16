window.addEventListener("load", doFirst);
//window物件，load事件

function doFirst(){
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d"); //告訴他 canvas是2D的繪圖環境 


    //正八角星
    context.width=2;
    createStar(context,8,100,300,400,400);

        function createStar(context,n,r,R,x,y) {
            /*
            n 星行邊數
            r 內圓半徑
            R 外圓半徑
            x 星型中心點x座標
            y 星型中心點y座標
            */
            context.save();
            context.lineWidth=2;
            context.strokeStyle='rgba(0,0,0,0.8)';
            context.beginPath();
            context.translate(x,y);
            for(var i=0;i<n;i++){
                context.lineTo(Math.cos(((2/4 + i)*2*Math.PI/n))*R,-Math.sin(((2/4 + i)*2*Math.PI/n))*R);
                context.lineTo(Math.cos(((4/4 + i)*2*Math.PI/n))*r,-Math.sin(((4/4 + i)*2*Math.PI/n))*r);
            } 
            context.closePath(); 
            context.stroke();
            context.restore();
        }       

}