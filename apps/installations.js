const installationsBtn = document.querySelector("#installations");
const createPDF = (pdf) => {
    const { id, projectName, path } = pdf;

    let pdfContainer = document.createElement("section");
    pdfContainer.id = id;
    let pdfHeading = document.createElement("h2");
    pdfHeading.innerText = projectName;

    let pdfObject = document.createElement("object");
    pdfObject.data = `./assets/documents/${path}.pdf`;
    pdfObject.type = "application/pdf";
    pdfObject.width = "500px";
    pdfObject.height = "600px";

    pdfContainer.appendChild(pdfHeading);
    pdfContainer.appendChild(pdfObject);
    _main.appendChild(pdfContainer);
    return pdfObject;
}
installationsBtn.addEventListener("click", () => {
    _main.innerHTML = "";
    _main.className = "";
    _main.classList.add("pdfLayout");
    pdfDATA.forEach((pdf) => {
        createPDF(pdf);
    });
});