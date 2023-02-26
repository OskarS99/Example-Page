let button = document.querySelector(".js-button");
let jstable = document.querySelector(".js-table");



button.addEventListener("click", () => {
    if (button.innerText === "Dodaj tabelę do strony") {
        button.innerText = "Usuń tabelę ze strony";
    } else if (button.innerText === "Usuń tabelę ze strony") {
        button.innerText = "Dodaj tabelę do strony";
    }
    jstable.classList.toggle("table--hidden");
})


