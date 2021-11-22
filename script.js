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
// ---------------------------------------------------- //
// ---------------------------------------------------- //
// ---------------------------------------------------- //

// ---------------------------------------------------- //
// ---------------------------------------------------- //


