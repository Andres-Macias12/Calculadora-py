// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        const num1 = document.querySelector('input[name="num1"]').value;
        const num2 = document.querySelector('input[name="num2"]').value;
        const operation = document.querySelector('select[name="operation"]').value;

        // Validar números
        if (isNaN(num1) || isNaN(num2)) {
            alert('Por favor, ingrese números válidos.');
            event.preventDefault(); // Evita el envío del formulario
            return;
        }

        // Validar operación seleccionada
        if (!operation) {
            alert('Por favor, seleccione una operación.');
            event.preventDefault(); // Evita el envío del formulario
            return;
        }
    });
});
