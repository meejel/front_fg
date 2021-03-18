export const functions = (petitionType, newI) => {
  if (petitionType === 'get') {
    return returnList()
  } else if (petitionType === 'post') {
    return addUserInstruments(newI)
  }
}
const addUserInstruments = (newI) => {
  instruments1.push(newI)
  console.log(newI)
  console.log(instruments1)
  return true
}

const returnList = () => {
  return instruments1
}

let instruments1 = [{
  'id': 1,
  'name': 'primer instrumento',
  'Reglas': ['regla', 'regla', 'regla'],
  'Objetivos': ['obj1', 'obj2', 'obj3', 'obj4'],
  'Roles': ['rol1', 'rol2', 'rol3', 'rol4', 'rol5'],
  'Pasos': ['paso1', 'paso2']
}, {
  'id': 2,
  'name': 'segundo instrumento',
  'Reglas': ['regla1', 'regla2', 'regla3'],
  'Objetivos': ['obj1', 'obj2', 'obj3', 'obj4'],
  'Roles': ['rol1', 'rol2', 'rol3', 'rol4', 'rol5'],
  'Pasos': ['paso1', 'paso2']
}
]
