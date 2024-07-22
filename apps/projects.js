const _main = document.querySelector("main");
const projects = document.querySelector("#projects");
const totalElement = document.querySelector("#total");
totalElement.addEventListener("click", ()=>{
    location.reload();
});
const loadText = (id) => {
    const savedText = localStorage.getItem(`project_${id}_text`);
    return savedText ? savedText : 0;
};

const saveText = (id, text) => {
    localStorage.setItem(`project_${id}_text`, text);
};

const updateTotal = () => {
    let total = 0;
    DATA.forEach(project => {
        total += parseInt(loadText(project.id)) ;
    });
    totalElement.textContent = `TOTAL : ${total}`;
};

const createProject = (project) => {
    const { id, projectName } = project;
    let text = loadText(id);

    let projectItem = document.createElement("article");
    projectItem.classList.add("project");

    projectItem.innerHTML = `
        <h1>${projectName}</h1>
        <h3><input type="text" class="projectText" value="${text}" />pcs.</h3>
    `;

    const inputElem = projectItem.querySelector(".projectText");

    inputElem.addEventListener("input", () => {
        saveText(id, inputElem.value);
        updateTotal();
    });

    return projectItem;
};

DATA.forEach((project) => {
    projects.appendChild(createProject(project));
});

updateTotal();
