// Define a function to calculate BMI
function calculateBMI(height: number, weight: number): number {
  // BMI formula: weight (kg) / (height (m))^2
  const heightInMeters = height / 100; // Convert height to meters
  const bmi = weight / (heightInMeters * heightInMeters);
  return parseFloat(bmi.toFixed(2));
}

// Function to categorize BMI
function getBMICategory(bmi: number): string {
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi < 24.9) {
    return 'Normal Weight';
  } else if (bmi < 29.9) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}

// Function to get user input
function getUserInput(): { height: number; weight: number } {
  const height = parseFloat(prompt('Enter your height in cm: ')); // Prompt for height
  const weight = parseFloat(prompt('Enter your weight in kg: ')); // Prompt for weight
  return { height, weight };
}

// Main function to calculate BMI and display the results
function calculateAndDisplayBMI(): void {
  const { height, weight } = getUserInput(); // Get user input
  const bmi = calculateBMI(height, weight); // Calculate BMI
  const category = getBMICategory(bmi); // Determine BMI category

  // Display results
  console.log('BMI:', bmi);
  console.log('Category:', category);
}

// Run the calculation and display
calculateAndDisplayBMI();
