//Crear una constante para el searchBar

const searchInput= document.querySelector('#searchConge1'),
serviceMenuBoxes=document.querySelectorAll('.service-box');

//crear un EventListener con el input

searchInput.addEventListener('input',()=>{
    const inputSearch= searchInput.value.toLowerCase();

    serviceMenuBoxes.forEach((boxes)=>{

        const menuBoxes= boxes.textContent.toLocaleLowerCase();

        menuBoxes.includes(inputSearch) ? boxes.style.display='block': boxes.style.display='none'
    });
});

//Crear una funcionalidad que al hacer click en el botón agregar se añada al lado del carrito un contador

const btnShop= document.querySelectorAll('#agregar');

btnShop.forEach((btnAdd)=>{
    btnAdd.addEventListener('click',function(){

    let countCarrito=parseInt(document.getElementById('btnShop').getAttribute('data-count'))|| 1;
    document.querySelector('#btnShop').setAttribute('data-count', countCarrito+1);
    document.querySelector('#btnShop').innerHTML= '(' + (countCarrito)+ ')';
    })
});

//Crar constantes para convocar a las funciones de filtro de los check buttons

const priceFilter=document.querySelector('#precioFilter'),
unitsFilter=document.querySelector('#unitFilter'),
categoryFilter=document.querySelector('#categoFilter'),
nameFilter=document.querySelector('#nameFilter');

precioFilter.addEventListener('change',()=>{
filtrarCongelados('precio')
});

unitsFilter.addEventListener('change',()=>{
    filtrarCongelados('unidades')
});
categoryFilter.addEventListener('change',()=>{
    filtrarCongelados('categoria')
});
nameFilter.addEventListener('change',()=>{
    filtrarCongelados('nombre')
})

//Crear la función de filtrar congelados

function filtrarCongelados(filterMenu){
    serviceMenuBoxes.forEach((boxes)=>{

const congeladosMenu=boxes.querySelector(`#${filterMenu}`).textContent.toLocaleLowerCase();
const menuInput=searchInput.value.toLocaleLowerCase();

const checkFilter=filterMenu==='precio'? menuInput !==''&&parseFloat(congeladosMenu.replace('$', '')) >= parseFloat(menuInput)
: menuContent === filterMenu;

serviceBox.style.display = checkFilter ? 'block' : 'none';
})
}

//Crear una constante que almacene nuevos congelados

const congeladosNuevos=[
    {
        nombre:'Arepas de zanahoria',
        categoria:'Vegano',
        unidades:2,
        precio:'200$'
    },
    {
        nombre:'Arepa de remolacha',
        categoria:'Vegano',
        unidades:2,
        precio:'200$',
    },

    {
        nombre:'Arepa de espinaca',
        categoria:'Vegano',
        unidades:2,
        precio:'180$'
    },

    {
        nombre:'Pastelitos de queso',
        categoria:'Vegetariano',
        unidades:6,
        precio:'350$'
    }
]

// Crear un local storage para los congelados que se añadirán

localStorage.setItem('congeladosNuevos', JSON.stringify(congeladosNuevos));

const congeladosData=JSON.parse(localStorage.getItem('congeladosNuevos'))