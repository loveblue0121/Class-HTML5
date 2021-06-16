window.addEventListener("load", doFirst);
//window物件，load事件

function doFirst(){
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d"); //告訴他 canvas是2D的繪圖環境 


    //正八角星
    Star(context,8,100,300,400,400);

        function Star(context,n,r,R,x,y) {
            context.lineWidth=2;
            context.strokeStyle='rgba(0,0,0,0.8)';
            context.beginPath();
            context.translate(x,y);
            for(let i=0;i<n;i++){
                context.lineTo(Math.cos(((0.5 + i)*2*Math.PI/n))*R,-Math.sin(((0.5 + i)*2*Math.PI/n))*R);
                context.lineTo(Math.cos(((1 + i)*2*Math.PI/n))*r,-Math.sin(((1 + i)*2*Math.PI/n))*r);
            } 
            context.closePath(); 
            context.stroke();
            context.restore();
        }       

}