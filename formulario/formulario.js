        // Evento para el envío del formulario
        document.getElementById('form').addEventListener('submit', function(e) {
            e.preventDefault(); // Prevenir el envío del formulario para realizar la validación primero

            let nombre = document.getElementById('name').value.trim();
            let apellidos = document.getElementById('apellidos').value.trim();
            let correo = document.getElementById('correo').value.trim();
            let contraseña = document.getElementById('contraseña').value.trim();
            let mensajeError = document.getElementById('peligrosid');
            let mensajeExito = document.getElementById('exitosid');
            mensajeError.innerHTML = ''; // Limpiar mensajes previos
            mensajeExito.innerHTML = ''; // Limpiar mensaje de éxito previo

            // Validar campos vacíos
            if (nombre === '' || apellidos === '' || correo === '' || contraseña === '') {
                mensajeError.innerHTML = 'Todos los campos son obligatorios.';
                return;
            }

            // Validar formato de correo
            const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regexCorreo.test(correo)) {
                mensajeError.innerHTML = 'Por favor, ingrese un correo válido.';
                return;
            }

            // Validar que el captcha ha sido completado
            let captchaResponse = grecaptcha.getResponse();
            if (captchaResponse.length === 0) {
                mensajeError.innerHTML = 'Por favor, completa el reCAPTCHA.';
                return;
            }

            // Si todo es correcto, mostrar mensaje de éxito y limpiar el formulario
            mensajeExito.innerHTML = '¡Registro completado con éxito!';
            document.getElementById('form').reset(); // Limpiar formulario
            grecaptcha.reset(); // Limpiar el captcha
        });

        // Funcionalidad de mostrar/ocultar contraseña
        document.getElementById('visibilidad').addEventListener('click', function() {
            let inputContrasena = document.getElementById('contraseña');
            if (inputContrasena.type === 'password') {
                inputContrasena.type = 'text';
                this.textContent = 'Ocultar';
            } else {
                inputContrasena.type = 'password';
                this.textContent = 'Mostrar';
            }
        });