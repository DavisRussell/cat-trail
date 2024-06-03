const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const divEl = document.createElement("div");
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random() * 100;
    spanEl.style.width = size + "px"
    spanEl.style.height = size + "px"
    divEl.appendChild(spanEl);

    const sid = Math.floor(Math.random() * 2) + 1;
    var sound = document.getElementById("sound-" + sid);
    divEl.appendChild(sound);
    sound.play();

    bodyEl.appendChild(divEl);
    setTimeout(()=>{
        divEl.remove();
    }, 3000);
})