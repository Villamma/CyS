// counter.js
document.addEventListener('DOMContentLoaded', function() {
    const startDate = new Date('2024-06-08');
    const currentDate = new Date();
    
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    document.getElementById('counter').textContent = `${years} años y ${months} meses juntos`;
});