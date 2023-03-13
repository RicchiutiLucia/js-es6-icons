/*Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.

Milestone 2
Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). 
Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

BONUS
1- modificare la struttura dati fornita e valorizzare la proprietà “color” in modo dinamico: 
generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo “#” 
seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.

2- popolare le options della select della milestone 3 dinamicamente. 
*/

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const container = document.getElementById("icons-container");


const selectorContainer = document.getElementById("selector-container");

selectorContainer.append(generaSelector());
const selector = document.getElementById("icons-selector");

generaRandomColors();

generaBoxesAll();

selector.addEventListener('change', function(){
    container.innerHTML = '';
    if(selector.value == "all"){
        generaBoxesAll();

    }else{
        filtroBoxesSelect();

    }

});


//Funzione genera section dinamicamente
function generaSelector(){
	let options = ["all"];

	//Prende i vari tipi dall'array icons e li inserisce in options
	icons.forEach((icon) => {
		const tempType = icon.type;
		if (!options.includes(tempType)) {
			options.push(tempType);
		}
	});

	//Genera il selector aggiungendo le varie options una per una
	let tempSelector = document.createElement("select");
	tempSelector.id = "icons-selector";

	options.forEach((option) => {
		let tempOption = document.createElement("option");
		tempOption.value = option;
		tempOption.innerHTML = primaLetteraMaiuscola(option);

		tempSelector.append(tempOption);
	});

	return tempSelector;
}


//Rende maiuscola la prima lettera di una stringa
function primaLetteraMaiuscola(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}


//funzione che genera una sola box
function generaBoxCode(icons){
    return `<div class="box">
    <i class="${icons.prefix}solid ${icons.prefix}${icons.name}" style="color: ${icons.color};"></i>
    <div class="name">${icons.name}</div>
    </div>`
}

//Funzione che Genera tutte le box
function generaBoxesAll() {
	icons.forEach((icons) => {
		container.innerHTML += generaBoxCode(icons);
	});
};



//Funzione che filtra le box in base alla select
function filtroBoxes(){
    return icons.filter((box)=>{
        return box.type == selector.value;

    });
}

// Funzione che filtra le box in base alla select in cui si trova
function filtroBoxesSelect(){
    let boxes = filtroBoxes();
    boxes.forEach((box)=>{
        container.innerHTML += generaBoxCode(box);
    });
}

//Da a ciascuna icon nell'array icons un colore hex casuale
function generaRandomColors() {
	icons.forEach((icon) => {
		icon.color = randomColor();
	})
}

//Genera un colore hex casuale
function randomColor() {
	const chars = "0123456789ABCDEF";
	let tempColor = "#";

	for (let i = 0; i < 6; i++) {
		tempColor += chars[randomNumero(0, 15)];
	}

	return tempColor;
}

//Genera un numero casuale 
function randomNumero(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}