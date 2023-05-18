
const btn = document.getElementById("submit")

btn.addEventListener("click", (e) => {

    const inpt1 = document.getElementById("inpt1").value
    const inpt2 = document.getElementById("inpt2").value

    const feel = inpt1 / 0.8
    const beal = inpt2 / 1200
    const ceal = inpt2 / 2400
    const deal = inpt2 / 2640
    
    console.log(feel + " " + "watt Inverter")
    console.log("For a 12v 100ah batteries,"+" " + Math.ceil(beal) + " " + "Batteries")
    console.log("For a 12v 200ah batteries,"+" " + Math.ceil(ceal) + " " + "Batteries")
    console.log("For a 12v 220ah batteries,"+" " + Math.ceil(deal) + " " + "Batteries")
    e.preventDefault()
});

