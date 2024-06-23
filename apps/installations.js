const installationsBtn=document.querySelector("#installations");
const showPDF= ()=>{
    let pdfContainer= document.createElement("section");
        let pdfObject = document.createElement("object");
        
        pdfObject.data="./assets/test.pdf";
        pdfObject.type="application/pdf";
        pdfObject.width="500px";

        _main.appendChild(pdfContainer);
        pdfContainer.appendChild(pdfObject);
}
installationsBtn.addEventListener("click",()=>{
    _main.innerHTML="";
    showPDF();
});