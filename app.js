
const btn = document.getElementById("submit")
const modal  = document.getElementById("modal");
const closeModal = document.querySelector("span")

const w1 = document.getElementById("w1")
const w2 = document.getElementById("w2")
const w3 = document.getElementById("w3")
const w4 = document.getElementById("w4")
const w5 = document.getElementById("w5")
const w6 = document.getElementById("w6")
const w7 = document.getElementById("w7")
const w8 = document.getElementById("w8")
const w9 = document.getElementById("w9")
const w10 = document.getElementById("w10")
const w11 = document.getElementById("w11")
const w12 = document.getElementById("w12")
const w13 = document.getElementById("w13")
const w14 = document.getElementById("w14")
const w15 = document.getElementById("w15")
const w16 = document.getElementById("w16")
const w17 = document.getElementById("w17")

const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")
const n3 = document.getElementById("n3")
const n4 = document.getElementById("n4")
const n5 = document.getElementById("n5")
const n6 = document.getElementById("n6")
const n7 = document.getElementById("n7")
const n8 = document.getElementById("n8")
const n9 = document.getElementById("n9")
const n10 = document.getElementById("n10")
const n11 = document.getElementById("n11")
const n12 = document.getElementById("n12")
const n13 = document.getElementById("n13")
const n14 = document.getElementById("n14")
const n15 = document.getElementById("n15")
const n16 = document.getElementById("n16")
const n17 = document.getElementById("n17")


btn.addEventListener("click", (e) => {
    const inpt1 = document.getElementById("inpt1").value
    const inpt2 = document.getElementById("inpt2").value
    const words = document.getElementById("words")
    const words1 = document.getElementById("words1")
    const words2 = document.getElementById("words2")
    const words3 = document.getElementById("words3")
    modal.style.display = "flex"

    const feel = inpt1 / 0.8
    const beal = inpt2 / 1200
    const ceal = inpt2 / 2400
    const deal = inpt2 / 2640
    
    words.textContent = feel + " " + "watt Inverter" 
    words1.textContent = "For a 12v 100ah batteries, " + Math.ceil(beal) + " " + "Batteries"
    words2.textContent = "For a 12v 200ah batteries, " + Math.ceil(ceal) + " " + "Batteries" 
    words3.textContent = "For a 12v 220ah batteries, " + Math.ceil(deal) + " " + "Batteries"
    e.preventDefault()
});


closeModal.addEventListener("click", () => {
    modal.style.display = "none"
    err.textContent = ""
})

window.onclick = (e) =>{
    if (e.target.className === "myModal"){
        modal.style.display = "none"
        err.textContent = ""
    }
}

