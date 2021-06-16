window.addEventListener("load", doFirst);
//window物件，load事件

function doFirst(){
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d"); //告訴他 canvas是2D的繪圖環境
    
    context.font='bold 50px sans-serif';//調整文字大小 字型
    //輸出文字前務必注意先調整格式才輸出
    context.fillText('Max', 100, 100);//實心文字
    context.moveTo(100, 100); //移到某個位置
    context.lineTo(200, 100);
    context.stroke();

    //第二個字 陰影
    context.shadowColor='blue';
    context.shadowOffsetX=6;
    context.shadowOffsetY=0;
    context.shadowBlur=15;
    context.fillStyle='#FFF';
    
    context.fillText('Love', 100, 250);//實心文字

    //第三個字
    context.shadowOffsetX=0;
    context.shadowOffsetY=0;
    context.shadowBlur=10;
    context.shadowColor='red';
    context.fillText('Me', 100, 400);//實心文字

    //第四個字
    context.fillText('YA', 100, 550);//實心文字

    context.shadowColor='blue';

    context.fillText('YA', 100, 550);//實心文字
      
}
