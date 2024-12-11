    // Define the options for each speciality
    const yearOptions = {
        medecine: ['Première année', 'Deuxième année', 'Troisième année', 'Quatrième année', 'Cinquième année', 'Sixième année', 'Septième année', 'Résident'],
        pharmacie: ['Première année', 'Deuxième année', 'Troisième année', 'Quatrième année', 'Cinquième année', 'Sixième année'],
        dentaire: ['Première année', 'Deuxième année', 'Troisième année', 'Quatrième année', 'Cinquième année', 'Sixième année']
    };

function updateYearOptions() {
    // Get the selected speciality
    const speciality = document.getElementById('speciality').value;

    // Get the year dropdown
    const yearSelect = document.getElementById('studyyear');

    // Clear existing options
    yearSelect.innerHTML = '';

    // Add the new options
    if (speciality in yearOptions) {
        yearOptions[speciality].forEach(year => {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            yearSelect.appendChild(option);
        });
    }
}