const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(array, string){
    let result = array.filter(element => element.toLowerCase() === string.toLowerCase())
    return result
}
drivers.filter(function fuzzyMatch(driver){
  return driver.startsWith('Sa');
});

/*const fuzzyMatch = (drivers, index) => {
  return drivers.filter(driver => driver.startsWith(index))
}*/
const fuzzyMatch= (array, string) => {
  return array.filter(driver =>driver.startsWith(string))
}
function matchName(array, string) {
  return array.filter(driver => driver.name === string)
}
