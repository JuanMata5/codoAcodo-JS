const inputName = document.getElementById('input-name')
const inputLastName = document.getElementById('input-lastname')
const inputEmail = document.getElementById('input-email')
const inputCantidad = document.getElementById('input-cantidad')

const select = document.getElementById('select')
const borrar = document.getElementById('borrar')
const resumen = document.getElementById('resumen')
const totalPriceElement = document.getElementById('total-price');



//FUNCION INICIALIZADORA
  const init = () => {
    resumen.addEventListener('click', showResumen);
    borrar.addEventListener('click', deleteResumen  )
    inputName.addEventListener('input', validationRealTime)
    inputLastName.addEventListener('input', validationRealTime)
    inputEmail.addEventListener('input', validationRealTime)
    inputCantidad.addEventListener('input', validationRealTime)

  }

  const showResumen = (e) => {
    e.preventDefault();
    let hasError = false;
    
  
    // Validar NAME al enviar el formulario
    const nameValue = inputName.value.trim();
    const maxCharacters = 20;

    if (nameValue === '' || nameValue.length > maxCharacters) {
      inputName.value = nameValue.substring(0, maxCharacters);
      inputName.setAttribute('placeholder', 'Por favor, ingrese su nombre.');
      inputName.classList.add('error-border');
      inputName.classList.remove('accept-border');
      inputName.focus();
      hasError = true; // Marcar error
    } else {
      inputName.setAttribute('placeholder', 'Nombre');
      inputName.classList.remove('error-border');
      inputName.classList.add('accept-border');
    }
  
    


    // Validar LAST NAME
    const lastNameValue = inputLastName.value.trim();
    const maxCharactersLastName = 20;
    
    if (lastNameValue === '' || lastNameValue.length > maxCharactersLastName) {
      inputLastName.value = lastNameValue.substring(0, maxCharactersLastName);
      inputLastName.setAttribute('placeholder', 'Por favor, ingrese su apellido.');
      inputLastName.classList.add('error-border');
      inputLastName.classList.remove('accept-border');
      inputLastName.focus();
      hasError = true;
    } else {
      inputLastName.setAttribute('placeholder', 'Apellido');
      inputLastName.classList.remove('error-border');
      inputLastName.classList.add('accept-border');
    }
    



    // Validar EMAIL
    const emailValue = inputEmail.value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if (!emailRegex.test(emailValue)) {
      inputEmail.setAttribute('placeholder', 'Por favor, ingrese su email.');
      inputEmail.classList.add('error-border');
      inputEmail.classList.remove('accept-border');
      inputEmail.focus();
      hasError = true; 
    } else {
      inputEmail.setAttribute('placeholder', 'Email');
      inputEmail.classList.remove('error-border');
      inputEmail.classList.add('accept-border');
    }
    
 
  // Validar CANTIDAD
  const cantidadValue = inputCantidad.value.trim();
  const maxTickets = 20; // Cantidad máxima de tickets permitida
  let ticketPrice = 200; // Precio base por ticket

  // Validar que la cantidad sea un número válido y esté dentro del rango
  if (!cantidadValue.match(/^\d+$/) || parseInt(cantidadValue) < 1 || parseInt(cantidadValue) > maxTickets) {
    inputCantidad.setAttribute('placeholder', `Por favor, ingrese una cantidad válida (1-${maxTickets}).`);
    inputCantidad.classList.add('error-border');
    inputCantidad.focus();
    hasError = true;
  } else {
    inputCantidad.setAttribute('placeholder', 'Cantidad');
    inputCantidad.classList.remove('error-border');
    inputCantidad.classList.add('accept-border');
  }

 // Calcular el precio total 


if (!hasError) {
  let total = parseInt(cantidadValue) * ticketPrice;

  // Obtener la opción seleccionada en el campo select
  const selectedOption = select.value;

  // Aplicar descuentos 
  if (selectedOption === 'estudiante') {
    total *= 0.2; // 80% de descuento
  } else if (selectedOption === 'trainee') {
    total *= 0.5; // 50% de descuento
  } else if (selectedOption === 'junior') {
    total *= 0.85; // 15% de descuento
  }

  totalPriceElement.textContent = total.toFixed(2);
} else {
  // Si hay errores, no muestres el precio
  totalPriceElement.textContent = '';
}
      if (hasError) {
        return;
      }
    
  }

  const validationRealTime = () =>  {

        const inputName = document.getElementById('input-name');
        const maxCharacters = 20;
      
        inputName.addEventListener('input', function() {
          const nameValue = inputName.value.trim();
      
          if (nameValue === '' || nameValue.length > maxCharacters) {
            inputName.classList.add('error-border');
            inputName.classList.remove('accept-border');
          } else {
            inputName.classList.remove('error-border');
            inputName.classList.add('accept-border');
          }
        });




        const inputLastName = document.getElementById('input-lastname');
        const maxCharactersLastName = 20;

        inputLastName.addEventListener('input', function() {
          const lastnameValue = inputLastName.value.trim();
      
          if (lastnameValue === '' || lastnameValue.length > maxCharactersLastName) {
            inputLastName.classList.add('error-border');
            inputLastName.classList.remove('accept-border');
          } else {
            inputLastName.classList.remove('error-border');
            inputLastName.classList.add('accept-border');
          }
        });



        const inputEmail = document.getElementById('input-email');
        inputEmail.addEventListener('input', function() {
          const emailValue = inputEmail.value.trim();
          const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      
          if (!emailRegex.test(emailValue)) {
            inputEmail.classList.add('error-border');
            inputEmail.classList.remove('accept-border');
          } else {
            inputEmail.classList.remove('error-border');
            inputEmail.classList.add('accept-border');
          }
        });




        const inputCantidad = document.getElementById('input-cantidad');
        inputCantidad.addEventListener('input', function() {
          const cantidadValue = inputCantidad.value.trim();
      
          if (cantidadValue === '') {
            inputCantidad.classList.add('error-border');
            inputCantidad.classList.remove('accept-border');
          } else {
            inputCantidad.classList.remove('error-border');
            inputCantidad.classList.add('accept-border');
          }
        });

      
    }

  const deleteResumen = (e) => {
    e.preventDefault();
  
    // Restablecer el valor y el estilo del campo de nombre
    inputName.value = ''; // Borrar el valor
    inputName.setAttribute('placeholder', 'Nombre'); // Restablecer el placeholder
    inputName.classList.remove('error-border'); // Eliminar el estilo de borde rojo
    inputName.classList.remove('accept-border');
   
   
    // Restablecer el valor y el estilo del campo de apellido
    inputLastName.value = ''; // Borrar el valor
    inputLastName.setAttribute('placeholder', 'Apellido'); // Restablecer el placeholder
    inputLastName.classList.remove('error-border'); // Eliminar el estilo de borde rojo
    inputLastName.classList.remove('accept-border'); // Eliminar el estilo de borde rojo
  
    // Restablecer el valor y el estilo del campo de email
    inputEmail.value = ''; // Borrar el valor
    inputEmail.setAttribute('placeholder', 'Email'); // Restablecer el placeholder
    inputEmail.classList.remove('error-border'); // Eliminar el estilo de borde rojo
    inputEmail.classList.remove('accept-border');

    // Restablecer el valor y el estilo del campo de cantidad
    inputCantidad.value = ''; // Borrar el valor
    inputCantidad.setAttribute('placeholder', 'Cantidad'); // Restablecer el placeholder
    inputCantidad.classList.remove('error-border'); // Eliminar el estilo de borde rojo
    inputCantidad.classList.remove('accept-border');

    totalPriceElement.textContent = '';
  }


  
  init();



