const recetas = [

    {
        nombre: "Classic Margherita Pizza",
        categoria: "Pizza",
        dificultad: "Easy",
        imagen: "imagenes/pizza.jpg",

        ingredientes: [
            "Pizza dough",
            "Tomato sauce",
            "Fresh mozzarella cheese",
            "Fresh basil leaves"
        ],

        instrucciones: [
            "Preheat oven to 475°F.",
            "Spread tomato sauce.",
            "Add mozzarella cheese.",
            "Bake for 12 minutes."
        ]
    },

    {
        nombre: "Tomato Basil Bruschetta",
        categoria: "Appetizer",
        dificultad: "Easy",
        imagen: "imagenes/bruschetta.jpg",

        ingredientes: [
            "Baguette",
            "Tomatoes",
            "Fresh basil",
            "Olive oil"
        ],

        instrucciones: [
            "Toast the bread.",
            "Mix tomatoes and basil.",
            "Add olive oil.",
            "Serve immediately."
        ]
    },

    {
        nombre: "Italian Tiramisu",
        categoria: "Dessert",
        dificultad: "Medium",
        imagen: "imagenes/tiramisu.jpg",

        ingredientes: [
            "Espresso",
            "Mascarpone cheese",
            "Sugar",
            "Cocoa powder"
        ],

        instrucciones: [
            "Mix ingredients.",
            "Create layers.",
            "Refrigerate.",
            "Serve cold."
        ]
    }

];

const contenedor = document.getElementById("recetas");
const categoria = document.getElementById("categoria");

function mostrarRecetas(lista){

    contenedor.innerHTML = "";

    lista.forEach(receta => {

        let ingredientes = "";
        let instrucciones = "";

        receta.ingredientes.forEach(item => {
            ingredientes += `<li>${item}</li>`;
        });

        receta.instrucciones.forEach(item => {
            instrucciones += `<li>${item}</li>`;
        });

        contenedor.innerHTML += `
            <div class="card">

                <img src="${receta.imagen}" alt="${receta.nombre}">

                <div class="difficulty">
                    Difficulty: ${receta.dificultad}
                </div>

                <div class="contenido">

                    <h2>${receta.nombre}</h2>

                    <h3>Ingredients:</h3>
                    <ul>
                        ${ingredientes}
                    </ul>

                    <h3>Instructions:</h3>
                    <ol>
                        ${instrucciones}
                    </ol>

                </div>

            </div>
        `;
    });
}

categoria.addEventListener("change", () => {

    if(categoria.value === "Todas"){
        mostrarRecetas(recetas);
    }
    else{
        const filtradas = recetas.filter(receta =>
            receta.categoria === categoria.value
        );

        mostrarRecetas(filtradas);
    }

});

mostrarRecetas(recetas);
