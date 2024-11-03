document.addEventListener('DOMContentLoaded', () => {
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';

        document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('date').textContent = now.toLocaleDateString(undefined, dateOptions);
    }

    setInterval(updateClock, 1000);
    updateClock();
});
