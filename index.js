// function scuberGreetingForFeet(someValue){
//   // Write your code here!
//   if (someValue <=400) {
//     return 'This one is on me!'
//   } else if (someValue > 2500) {
//     return 'No can do.'
//   } else if (someValue > 2000) {
//     return 'I will gladly take your thirty bucks.'
//   }
//   }


// function ternaryCheckCity(someCity){
//   // Write your code here!
//   return someCity === 'NYC' ? 'Ok, sounds good.' : 'No go.'
// }


// function switchOnCharmFromTip(someTip){
//   // Write your code here!
//   if (someTip === 'generous') {
//     return 'Thank you so much.'
//   } else if (someTip === 'not as generous') {
//     return 'Thank you.'
//   } else {
//     return 'Bye.'
//   }

// }


function scuberGreetingForFeet(feetValue) {
  if (feetValue <= 400){
    return 'This one is on me!'
  } else if (feetValue > 2000 && feetValue < 2500){
    return 'I will gladly take your thirty bucks.'
  } else {
    return "No can do."
  }
}

function ternaryCheckCity(city) {
  return city==="NYC"?'Ok, sounds good.': 'No go.'
}

function switchOnCharmFromTip(tip) {
  switch(tip){
    case "generous":
      return "Thank you so much."
      case "not as generous":
        return "Thank you."
        break
        default:
          return "Bye."
  }
}