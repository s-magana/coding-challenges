// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// My solutions:
function bmi(weight, height) {
    let value = (weight) / (height**2)
    
    if (value <= 18.5) {
      return 'Underweight'
    } else if (value <= 25.0) {
      return 'Normal'
    } else if (value <= 30.0) {
      return 'Overweight'
    } else {
      return 'Obese'
    }
}

function bmi(weight, height) {
    let result = weight / Math.pow(height,2) 
    
    if (result <= 18.5) {
      return "Underweight";
    } else if (result <= 25) {
      return "Normal";
    } else if (result <= 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
}

function bmi(weight, height) {
  
    var bmi  = weight / (height * height);
    
     return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
}