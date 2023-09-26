import * as readline from 'readline';

function calculateBMI(height: number, weight: number): number {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  return parseFloat(bmi.toFixed(2));
}

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

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getUserInput(): Promise<{ height: number; weight: number }> {
  return new Promise((resolve, reject) => {
    rl.question('Enter your height in cm: ', (height) => {
      rl.question('Enter your weight in kg: ', (weight) => {
        resolve({ height: parseFloat(height), weight: parseFloat(weight) });
        rl.close();
      });
    });
  });
}

