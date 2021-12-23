// -------------- FOR TIP CALCULATOR ---------------- //

const bill__amount = document.getElementById("bill__amount");
const ocl__tip__box = document.querySelectorAll(".ocl__tip__box");
const no__people = document.getElementById("no__people");

bill__amount.addEventListener("focus", () => {
    if (bill__amount.value === '0')
        bill__amount.value = '';
})

bill__amount.addEventListener("blur", () => {
    if (bill__amount.value === '')
        bill__amount.value = '0';
})

ocl__tip__box.forEach((item) => {
    item.addEventListener('click', () => {
        const x = document.querySelectorAll(".ocl__tip__box");
        x.forEach((a) => {
            if (a.classList.contains("tip__ocl"))
                a.classList.remove("tip__ocl");
        })
        item.classList.toggle("tip__ocl");
        document.getElementById('custom__value').value = "";
    })
})

document.getElementById('custom__value').addEventListener("blur", () => {
    if (document.getElementById('custom__value').value != "") {
        const x = document.querySelectorAll(".ocl__tip__box");
        x.forEach((a) => {
            if (a.classList.contains("tip__ocl"))
                a.classList.remove("tip__ocl");
        })
    }
})

no__people.addEventListener("blur", () => {
    if (no__people.value === '' || no__people.value === "0") {
        document.getElementById("error__display").style.display = "block";
        no__people.style.outline = "1px solid #ff0000";
    }
})

no__people.addEventListener("focus", () => {
    document.getElementById("error__display").style.display = "none";
    no__people.style.outline = "#3DA538";
})



// ---------------------------------------------------- //
// ---------------------------------------------------- //
// CALCULATING DAYS BETWEEN TWO DATES
document.getElementById("calc__for__days").addEventListener("click", () => {
    const start = document.getElementById("start__date_input").value;
    const end = document.getElementById("end__date_input").value;
    // console.log(start + "\n" + end);
    const d1 = new Date(end);
    const d2 = new Date(start);
    if ((d1 instanceof Date && !isNaN(d1.valueOf())) && (d2 instanceof Date && !isNaN(d2.valueOf()))) {
        document.getElementById("age__er__msg").style.visibility = "hidden";
        const diffTime = Math.abs(d1 - d2);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        document.getElementById("date__dislay").innerHTML = diffDays;
    } else
        document.getElementById("age__er__msg").style.visibility = "visible";
})
// ---------------------------------------------------- //
// ---------------------------------------------------- //
// CALCULATING THE GST PRICE
document.getElementById("calc__for__gst").addEventListener("click", () => {
    
})
// ---------------------------------------------------- //

// ---------------------------------------------------- //
// ---------------------------------------------------- //


