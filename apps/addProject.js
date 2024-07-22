const addProjectBtn= document.querySelector("#addProject");

let addProjectPanel = document.createElement("section");
addProjectPanel.classList.add("addProjectPanel");
addProjectPanel.style.display = "none";
addProjectPanel.innerHTML=`
                    <h2>Add New Project</h2>
                    <form id="newProjectForm">
                        <label for="projectName">Project Name:</label>
                        <input type="text" id="projectName" name="projectName" >
                        <label for="pieces">Pieces:</label>
                        <input type="number" id="pieces" name="pieces" >
                        <div style="display:flex">
                        <button id="addProjectBtn">Add Project</button>
                        <button id="cancelProjectBtn">Cancel</button>
                        </div>
                    </form>`;
_main.appendChild(addProjectPanel);

addProjectBtn.addEventListener("click", () => {
    if(addProjectPanel.style.display=="none"){
        addProjectPanel.style.display="flex";
    }else{
        addProjectPanel.style.display="none";
    }
});