const btn = document.getElementById("submit");
const modal = document.getElementById("modal");
const closeModal = document.querySelector("span");
const btn101 = document.getElementById("btn101");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
  const inpt1 = document.getElementById("inpt1").value;
  const inpt2 = document.getElementById("inpt2").value;
  const words = document.getElementById("words");
  const words1 = document.getElementById("words1");
  const words2 = document.getElementById("words2");
  const words3 = document.getElementById("words3");

  const feel = inpt1 / 0.8;
  const beal = inpt2 / 1200;
  const ceal = inpt2 / 2400;
  const deal = inpt2 / 2640;

  words.textContent = feel + " " + "watt Inverter";
  words1.textContent =
    "For a 12v 100ah batteries, " + Math.ceil(beal) + " " + "Batteries";
  words2.textContent =
    "For a 12v 200ah batteries, " + Math.ceil(ceal) + " " + "Batteries";
  words3.textContent =
    "For a 12v 220ah batteries, " + Math.ceil(deal) + " " + "Batteries";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  err.textContent = "";
});

window.onclick = (e) => {
  if (e.target.className === "myModal") {
    modal.style.display = "none";
    err.textContent = "";
  }
};
