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
}
window.addEventListener('load',doFirst);
