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

        function formatearTiempo(tiempo) {
            return (tiempo < 10) ? '0' + tiempo : tiempo;
        }
        
        fecha.innerHTML = `${daysOfWeek[fechaActual.getDay()]} ${fechaActual.getDate()} de ${months[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`
        hora.innerHTML =`
            <div class="hora-minutos">
            ${formatearTiempo(horas)}:${formatearTiempo(minutos)}:
            </div>
            <div class="segundos-ampm">
                <span class="am-pm">${amPm}</span>
                <span class="segundos">${formatearTiempo(segundos)}</span>
            </div>`;
    }

setInterval(obtenerFecha, 1000);
})();