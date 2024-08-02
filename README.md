Aplicación Pokedex

Esta es una aplicación de Pokedex construida con React que permite a los usuarios buscar y ver detalles sobre diferentes Pokémon. La aplicación obtiene datos de una API, proporciona funcionalidad de búsqueda y muestra información detallada en una ventana emergente cuando se hace clic en una tarjeta de Pokémon.
Características

    Listar todos los Pokémon: Muestra una lista de todos los Pokémon obtenidos de una API.
    Funcionalidad de búsqueda: Permite a los usuarios buscar Pokémon por nombre.
    Filtrar Pokémon: Filtra la lista de Pokémon según la entrada de búsqueda.
    Ver detalles del Pokémon: Muestra información detallada sobre un Pokémon en una ventana emergente cuando se hace clic en una tarjeta.
    Reproducir el sonido del Pokémon: Reproduce el sonido del Pokémon cuando se hace clic en su tarjeta.
    Cerrar ventana emergente con la tecla Escape o clic fuera: Permite a los usuarios cerrar la ventana emergente presionando la tecla Escape o haciendo clic fuera de la ventana.

Tecnologías Utilizadas

    React: Una biblioteca de JavaScript para construir interfaces de usuario.
    React Router: Una biblioteca para enrutamiento en aplicaciones React.
    JavaScript (ES6+): El lenguaje de programación utilizado para construir la aplicación.
    CSS: Para el estilo de la aplicación.
    HTML: Para estructurar la aplicación.
    PokeAPI: Una API utilizada para obtener datos de Pokémon.

Descripción del Código
App.js

El componente principal de la aplicación que configura las rutas y gestiona el estado de la aplicación.
Variables de Estado

    allPokemon: Almacena la lista de todos los Pokémon obtenidos de la API.
    search: Almacena el valor actual de entrada de búsqueda.
    filteredPokemon: Almacena la lista de Pokémon filtrados según la entrada de búsqueda.
    cardIsClicked: Booleano para gestionar la visibilidad de la ventana emergente de detalles del Pokémon.
    selectedPokemon: Almacena los detalles del Pokémon seleccionado actualmente.
    popupRef: Una referencia al elemento emergente para detectar clics fuera de él.

Funciones

    Obtener Datos de Pokémon

    javascript

useEffect(() => {
  api.getAllPokemon().then((res) => {
    setAllPokemon(res);
    setFilteredPokemon(res);
  });
}, []);

Manejar Cambio en Entrada de Búsqueda

javascript

const handlerInputOnChange = (event) => {
  setSearch(event.target.value);
};

Filtrar Pokémon

javascript

useEffect(() => {
  if (search === "") {
    setFilteredPokemon(allPokemon);
  }
}, [search]);

const handlerFilter = () => {
  if (!search) {
    setFilteredPokemon(allPokemon);
  } else {
    const filtered = allPokemon.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPokemon(filtered);
  }
};

Manejar Clic en Tarjeta

javascript

function handlerCardOnClick(pokemonId, cry) {
  const audio = new Audio(cry);
  audio.volume = 0.1;
  audio.play();
  const pokemonSelected = allPokemon.find((p) => p.id === pokemonId);
  setSelectedPokemon(pokemonSelected);
  setCardIsClicked(true);
}

Cerrar Ventana Emergente

javascript

useEffect(() => {
  const handlerClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setCardIsClicked(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape" || event.keyCode === 27) {
      setCardIsClicked(false);
    }
  };

  if (cardIsClicked) {
    document.addEventListener("mousedown", handlerClickOutside);
    document.addEventListener("keydown", handleKeyDown);
  } else {
    document.removeEventListener("mousedown", handlerClickOutside);
    document.removeEventListener("keydown", handleKeyDown);
  }
  return () => {
    document.removeEventListener("mousedown", handlerClickOutside);
    document.removeEventListener("keydown", handleKeyDown);
  };
}, [cardIsClicked]);

Enviar Búsqueda con Tecla Enter

javascript

    const handlerKeyDownSubmit = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handlerFilter();
      }
    };

Uso

Para ejecutar esta aplicación localmente, sigue estos pasos:

    Clona el repositorio:

    sh

git clone <URL_DEL_REPOSITORIO>

Navega al directorio del proyecto:

sh

cd nombre-del-proyecto

Instala las dependencias:

sh

npm install

Ejecuta la aplicación:

sh

    npm start

Esto lanzará la aplicación en modo de desarrollo y estará disponible en http://localhost:3000.
Estructura del Proyecto

plaintext

.
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Main.js
│   │   ├── Welcome.js
│   │   ├── Card.js
│   │   ├── SearchBar.js
│   │   └── PopUpStats.js
│   ├── utils
│   │   └── api.js
│   ├── App.js
│   ├── index.css
│   └── index.js
└── package.json