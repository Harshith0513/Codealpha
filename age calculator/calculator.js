function calculateAge() {
    const dobInput = document.getElementById('inputDob').value;
    const currentDateInput = document.getElementById('cdate').value;

    if (!dobInput || !currentDateInput) {
        document.getElementById('currentAge').textContent = 'Please enter both dates.';
        return;
    }

    const dob = new Date(dobInput);
    const currentDate = new Date(currentDateInput);

    if (dob > currentDate) {
        document.getElementById('currentAge').textContent = 'Date of birth cannot be in the future.';
        return;
    }

    let age = currentDate.getFullYear() - dob.getFullYear();
    const monthDifference = currentDate.getMonth() - dob.getMonth();
    
    // If the birth date hasn't occurred yet this year, subtract one year from age
    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById('currentAge').textContent = `Your age is ${age} years.`;
}
