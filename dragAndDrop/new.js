function doFirst(){
    //跟畫面產生關聯，再建事件聆聽功能
    document.getElementById('dropzone').ondragover = dragOver;
    document.getElementById('dropzone').ondrop = dropped;
}
function dragOver(e){
    e.preventDefault();
    
}
function dropped(e){
    e.preventDefault();

    let files = e.dataTransfer.files;
    let readFile = new FileReader();
    for(let i=0; i< files.length; i++){
        readFile.readAsDataURL(files[i]);
        readFile.addEventListener('load',function(){
            //動態新增<img>
            let image = document.createElement('img');
            image.src = readFile.result;
            
            let dropzone = document.getElementById('dropzone');
            dropzone.insertBefore(image, dropzone.firstChild);
        });
    }
    //delete
    let deleteBtn = document.getElementById("delete");
    deleteBtn.addEventListener("click", deleteImg);
    

}
//let getImg = document.getElementById("image");
//console.log(getImg);
// if(getImg == null){

// }else{
//     let deleteBtn = document.getElementById("delete");
//     deleteBtn.addEventListener("click", deleteImg);
// }

function deleteImg() {
    let img = document.getElementById("image");
    this.parentNode.previousSibling.remove(img);
    //img.remove();
    //console.log("click");
}
window.addEventListener('load',doFirst);