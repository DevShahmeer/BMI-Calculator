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

$ git config --global user.name "shahmeer"
$ git config --global user.email theshahmeerfsd@gmail.com