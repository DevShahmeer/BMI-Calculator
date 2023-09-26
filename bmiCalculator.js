// Define a function to calculate BMI
function calculateBMI(height, weight) {
    var heightInMeters = height / 100; // Convert height to meters
    var bmi = weight / (heightInMeters * heightInMeters);
    return parseFloat(bmi.toFixed(2));
}
// Function to categorize BMI
function getBMICategory(bmi) {
    // Categorize based on BMI value
    if (bmi < 18.5) {
        return 'Underweight';
    }
    else if (bmi < 24.9) {
        return 'Normal Weight';
    }
    else if (bmi < 29.9) {
        return 'Overweight';
    }
    else {
        return 'Obese';
    }
}
// Function to get user input
function getUserInput() {
    // Prompt the user for height and weight
    var height = parseFloat(prompt('Enter your height in cm: '));
    var weight = parseFloat(prompt('Enter your weight in kg: '));
    return { height: height, weight: weight };
}
// Main function to calculate BMI and display the results
function calculateAndDisplayBMI() {
    var _a = getUserInput(), height = _a.height, weight = _a.weight; // Get user input
    var bmi = calculateBMI(height, weight); // Calculate BMI
    var category = getBMICategory(bmi); // Determine BMI category
    // Display BMI and category
    console.log('BMI:', bmi);
    console.log('Category:', category);
}
// Run the calculation and display
calculateAndDisplayBMI();
