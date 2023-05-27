btn101.addEventListener("click", (e) => {
    const w1 = document.getElementById("w1").value;
    const w2 = document.getElementById("w2").value;
    const w3 = document.getElementById("w3").value;
    const w4 = document.getElementById("w4").value;
    const w5 = document.getElementById("w5").value;
    const w6 = document.getElementById("w6").value;
    const w7 = document.getElementById("w7").value;
    const w8 = document.getElementById("w8").value;
    const w9 = document.getElementById("w9").value;
    const w10 = document.getElementById("w10").value;
    const w11 = document.getElementById("w11").value;
    const w12 = document.getElementById("w12").value;
    const w13 = document.getElementById("w13").value;
    const w14 = document.getElementById("w14").value;
    const w15 = document.getElementById("w15").value;
    const w16 = document.getElementById("w16").value;
    const w17 = document.getElementById("w17").value;
  
    const n1 = document.getElementById("n1").value;
    const n2 = document.getElementById("n2").value;
    const n3 = document.getElementById("n3").value;
    const n4 = document.getElementById("n4").value;
    const n5 = document.getElementById("n5").value;
    const n6 = document.getElementById("n6").value;
    const n7 = document.getElementById("n7").value;
    const n8 = document.getElementById("n8").value;
    const n9 = document.getElementById("n9").value;
    const n10 = document.getElementById("n10").value;
    const n11 = document.getElementById("n11").value;
    const n12 = document.getElementById("n12").value;
    const n13 = document.getElementById("n13").value;
    const n14 = document.getElementById("n14").value;
    const n15 = document.getElementById("n15").value;
    const n16 = document.getElementById("n16").value;
    const n17 = document.getElementById("n17").value;
  
    const h1 = document.getElementById("h1").value;
    const h2 = document.getElementById("h2").value;
    const h3 = document.getElementById("h3").value;
    const h4 = document.getElementById("h4").value;
    const h5 = document.getElementById("h5").value;
    const h6 = document.getElementById("h6").value;
    const h7 = document.getElementById("h7").value;
    const h8 = document.getElementById("h8").value;
    const h9 = document.getElementById("h9").value;
    const h10 = document.getElementById("h10").value;
    const h11 = document.getElementById("h11").value;
    const h12 = document.getElementById("h12").value;
    const h13 = document.getElementById("h13").value;
    const h14 = document.getElementById("h14").value;
    const h15 = document.getElementById("h15").value;
    const h16 = document.getElementById("h16").value;
    const h17 = document.getElementById("h17").value;
  
    const screen1 = document.getElementById("screen1")
    const screen2 = document.getElementById("screen2")
  
    const watt = ((w1*n1) + (w2*n2) + (w3*n3) + (w4*n4) + (w5*n5) + (w6*n6) + (w7*n7) + (w8*n8) + (w9*n9) + (w10*n10) + (w11*n11) + (w12*n12) + (w13*n13) + (w14*n14) + (w15*n15) + (w16*n16) + (w17*n17))
  
    const watth = ((w1*n1*h1) + (w2*n2*h2) + (w3*n3*h3) + (w4*n4*h4) + (w5*n5*h5) + (w6*n6*h6) + (w7*n7*h7) + (w8*n8*h8) + (w9*n9*h9) + (w10*n10*h10) + (w11*n11*h11) + (w12*n12*h12) + (w13*n13*h13) + (w14*n14*h14) + (w15*n15*h15) + (w16*n16*h16) + (w17*n17*h17))
  
    screen1.textContent = "Your Total Load is " + watt + "watt"
    screen2.textContent = "Your Total watt hour is " + watth + "wh"
    e.preventDefault()
  });
  