// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
    mouseOnTop: function (event) {
        title.innerText = "Hi, mouseOnTop";
        title.style.color=colors[0];
    },

    mouseLeave: function () {
        title.innerHTML = "Hi, mouseLeave";
        title.style.color=colors[1];

    },

    windowResized: function () {
        title.innerHTML = "Hi, windowResized";
        title.style.color=colors[2];
    },

    onRightClick: function () {
        title.innerHTML = "Hi, onRightClick";
        title.style.color=colors[3];
    }
};

const title = document.querySelector("h2");

title.addEventListener("mouseover", function(event){
    superEventHandler.mouseOnTop()
  });

title.addEventListener("mouseout", function(event){
superEventHandler.mouseLeave()
});

window.addEventListener("resize", function(event){
superEventHandler.windowResized()
});

title.addEventListener("contextmenu", function(event){
superEventHandler.onRightClick()
});
