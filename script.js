function calculateDate() {
    const dateInput = document.getElementById('dateInput').value;
    const daysInput = parseInt(document.getElementById('daysInput').value);
    const resultDiv = document.getElementById('result');

    // Convert the input date to a Date object
    const [day, month, year] = dateInput.split('/');
    const inputDate = new Date(`${year}-${month}-${day}`);

    if (isNaN(inputDate)) {
        resultDiv.textContent = 'Data non valida';
        return;
    }

    // Add or subtract the days
    inputDate.setDate(inputDate.getDate() + daysInput);

    // Format the result date back to dd/mm/yyyy
    const resultDay = String(inputDate.getDate()).padStart(2, '0');
    const resultMonth = String(inputDate.getMonth() + 1).padStart(2, '0');
    const resultYear = inputDate.getFullYear();

    const resultDate = `${resultDay}/${resultMonth}/${resultYear}`;
    resultDiv.textContent = `La nuova data è: ${resultDate}`;
}
