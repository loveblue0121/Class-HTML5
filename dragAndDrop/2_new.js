function doFirst(){
    //先跟畫面產生關連，在建立聆聽事件
    image = document.getElementById('image');
    image.addEventListener('dragstart', startDrag);
    image.addEventListener('dragend', endDrag);
 
    rightbox = document.getElementById('rightbox'); 
    // rightbox.addEventListener('dragenter', function(e){e.preventDefault();});  
    rightbox.addEventListener('dragenter', e => e.preventDefault());  
    rightbox.addEventListener('dragover', e => e.preventDefault());  
    rightbox.addEventListener('drop', dropped);    
 
 }
 function startDrag(e){
     //dataTransfer物件被用來保存使用者於拖放操作過程中的資料，其中可能包含了一至多項資料以及多種資料類型
     let data = '<img src="../images/dino.gif">';
     e.dataTransfer.setData('image/gif',data);
 }
 function endDrag(){
     image.style.visibility = 'hidden'
 }
 function dropped(e){
     e.preventDefault();
     rightbox.innerHTML = e.dataTransfer.getData('image/gif');
 }
 window.addEventListener('load',doFirst);