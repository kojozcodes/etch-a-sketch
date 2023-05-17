const container = document.querySelector(".container");
const sizeButton = document.querySelector(".size-btn");

for (let i = 0; i < 256; i++) {
    const boxes = document.createElement('div')
    boxes.classList.add("box");
    container.appendChild(boxes);
    boxes.addEventListener("mouseover", () => {
    boxes.style.backgroundColor = "black";
    boxes.style.borderColor = "grey";
    })
}


sizeButton.addEventListener("click", () => {
    const numBoxes = parseInt(prompt('input the number of squares per side'))
    if (numBoxes <= 100) {

            while (container.firstChild) {
                container.firstChild.remove();
            }

            for (let i = 0; i < numBoxes * numBoxes; i++) {
                const boxes = document.createElement('div')
                boxes.classList.add("box");
                boxes.style.height = `${(800/numBoxes) - 2}px`;
                boxes.style.width = `${(800/numBoxes) - 2}px`;
                container.appendChild(boxes);
                boxes.addEventListener("mouseover", () => {
                boxes.style.backgroundColor = "black";
                boxes.style.borderColor = "grey";
                })}
    } else {
            const inputNumError = document.createElement('p');
            inputNumError.classList.add('input-num-error')
            inputNumError.textContent = "Please input a valid number!!!";
            document.body.insertBefore(inputNumError, container);
    }
})
    