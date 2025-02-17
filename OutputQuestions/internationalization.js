function getFine(speed, amount) {
    const formattedSpeed = new Intl.NumberFormat('en-US', {
      style: 'unit',
      unit: 'mile-per-hour'
    }).format(speed);
  
    const formattedAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  
    return `The driver drove ${formattedSpeed} and has to pay ${formattedAmount}`;
  }
  
  console.log(getFine(130, 300))
  
//   A: The driver drove 130 and has to pay 300
//   B: The driver drove 130 mph and has to pay $300.00
//   C: The driver drove undefined and has to pay undefined
//   D: The driver drove 130.00 and has to pay 300.00
//   Answer
  
//   Answer: B
//   With the Intl.NumberFormat method, we can format numeric values to any locale. We format the numeric value 130 to the en-US locale as a unit in mile-per-hour, which results in 130 mph. The numeric value 300 to the en-US locale as a currency in USD results in $300.00.
  
  