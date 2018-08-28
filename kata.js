const numerals = [
    {value: 10, numeral: 'X'},
    {value: 9, numeral: 'IX'},
    {value: 5, numeral: 'V'},
    {value: 4, numeral: 'IV'},
    {value: 1, numeral: 'I'}
]

const kata = {
    translate: (num) => {
    let result = "" 
    numerals.forEach(function(item) {
      while (num >= item.value) {
      result += item.numeral;
      num -= item.value; 
      }
    })
    
    return result 
  }
}

module.exports = kata;