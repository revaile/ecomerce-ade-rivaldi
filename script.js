//deklarasi elmen
const checkbox = document.querySelectorAll('input[name=checkbox]');
// ngeget element
checkbox.forEach(element => {
    // check kondisi
    element.addEventListener("change", function () {
        if (this.checked) {
            document.querySelector('body').style.color = "#fff";
            document.querySelector('body').style.backgroundColor = "#000";
            const el1 = document.querySelectorAll('h4');
            el1.forEach(e=>{
                e.style.color = "#fff";
            })
        } else {
            document.querySelector('body').style.backgroundColor = "#fff";
            document.querySelector('body').style.color = "#000";
            document.querySelector('h4').style.color = "#000";
            const el2 = document.querySelectorAll('h4');
            el2.forEach(e=>{
                e.style.color = "#000";
            })
        }
    })
});