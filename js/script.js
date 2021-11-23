const cards = document.querySelectorAll(".card-body");
const boton = document.querySelector(".modoBW").children[0];
const main = document.querySelector(".todo").children;

let modoOscuro = false;
boton.addEventListener("click", (e) => {
    if (!modoOscuro) {
        e.target.textContent = "Modo claro";
        modoOscuro = true;
    } else {
        e.target.textContent = "Modo oscuro";
        modoOscuro = false;
    }

    cards.forEach(card => {
        card.classList.toggle("modoOscuro");
    });
    
    main[0].classList.toggle("modoOscuro");
    main[1].classList.toggle("modoOscuro");
    main[1].querySelectorAll("a").forEach(element => {
        element.classList.toggle("modoOscuro")
    });
})

datosCreador = () => {
    alert(
        "Creador: Marcelo Taborda\n" +
        "Edad: 20 años\n" +
        "Pais: Argentina\n"
    );
}