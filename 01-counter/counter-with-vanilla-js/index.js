let count = 0;

const countHeader = document.getElementById("count");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("subtract");

countHeader.innerText = count;

addBtn.addEventListener("click", () => {
  if (count < 10) {
    count++;
    countHeader.innerText = count;
  }
});

subBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    countHeader.innerText = count;
  }
});
