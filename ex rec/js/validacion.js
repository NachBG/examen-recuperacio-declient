let btn = document.getElementById('boton');
let dni = document.getElementById('dni');
btn.addEventListener('click',esValidoDni,false);
dni.addEventListener('keyup',verificar,false);

function esValidoDni() {
    
    if(expresion_regular_dni.test (dni) == true){
        //para que se ponga verde el cuadro
        intro.className = 'verde'

    }
}

function verificar() {
    const expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
    if (expresion_regular_dni.test(dni.value)==true){
      btn.disabled = false;
      btn.classList.remove("disabled");
    } else {
        btn.disabled = true;
    }
}
btn.addEventListener('click', persona,false);
btn.addEventListener('click',conjunto,false);
function persona(){
    pers.addEventListener(dni, nombre);
    console.log(persona);
}

function conjunto(){
    const frutas = new Set();
    mySet.add(peras);
    mySet.add(manzanas);
    mySet.add(platanos);
}