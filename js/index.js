(function () {
    function obtenerFecha(){
        const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

        const fecha = document.querySelector('.fecha'); 
        const hora = document.querySelector('.hora'); 

        const fechaActual = new Date();
        let horas = fechaActual.getHours();
        let minutos = fechaActual.getMinutes();
        let segundos = fechaActual.getSeconds();
        let amPm = horas >= 12 ? 'PM' : 'AM';
    
        if (horas > 12) {
            horas = horas - 12;
        }
    
        if (horas == 0) {
            horas = 12;
        }

        if (horas < 10) {
            horas = "0" + horas;
        }
    
        if (minutos < 10) {
            minutos = "0" + minutos;
        }
    
        if (segundos < 10) {
            segundos = "0" + segundos;
        }
        
        fecha.innerHTML = `${daysOfWeek[fechaActual.getDay()]} ${fechaActual.getDate()} de ${months[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`
        hora.innerHTML =`
            <div class="hora-minutos">
            ${horas}:${minutos}
            </div>
            <div class="segundos-ampm">
                <span class="am-pm">${amPm}</span>
                <span class="segundos">${segundos}</span>
            </div>`;
    }

setInterval(obtenerFecha, 1000);
})();