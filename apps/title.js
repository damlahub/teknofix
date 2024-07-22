document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.fixedBtn');
    console.log(buttons);
    buttons.forEach((button)=> {
        button.addEventListener('click', function() {
            let buttonID = this.id;
            console.log(buttonID);
            let title = document.querySelector(".title");
            title.innerHTML =buttonID;
        });
    });
});
