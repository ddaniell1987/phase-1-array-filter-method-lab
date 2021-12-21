const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, string){
    let result = drivers.filter(element => element.toLowerCase() === string.toLowerCase())
    return result
}
drivers.filter(function fuzzyMatch(driver){
  return driver.startsWith('Sa');
});
/*function fuzzyMatch(names, index, letter) {
    const drivers = names.filter(function(word){
        return word.charAt(index) === letter;
    })
    return drivers;
}*/
const fuzzyMatch = (drivers, index) => {
  return drivers.filter(driver => driver.startsWith(index))
}

