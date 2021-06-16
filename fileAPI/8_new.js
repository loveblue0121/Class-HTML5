function doFirst(){
    document.getElementById('theFile').onchange = fileChange;
}
function fileChange() {
    let file = document.getElementById('theFile').files[0];
    console.log(file);

    let message = "";
    message += `file name: ${file.name}\n`;
    message += `file type: ${file.type}\n`;
    message += `file size: ${file.size}\n`;
    message += `file modified: ${file.lastModifiedDate}\n`;
    document.getElementById("fileInfo").value = message;

    //讀取圖片並顯示
    let readFile = new FileReader();
    readFile.readAsDataURL(file);
    readFile.addEventListener('load', function() {
        let myVideo = document.getElementById('myVideo');
        myVideo.src = readFile.result;
    });
}
window.addEventListener('load',doFirst);
