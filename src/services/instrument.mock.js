export const getUserInstruments = (userToken, pagination) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(instruments)
    }, 2000)
  })
}

const instruments = [{
  'id': 1,
  'name': 'Bytecard',
  'owner': 'Rene Mulvin',
  'components': [
    {
      'id': 1,
      'description': 'rutrum rutrum neque aenean',
      'component_type': 'Metas'
    },
    {
      'id': 2,
      'description': 'vestibulum quam sapien',
      'component_type': 'Metas'
    },
    {
      'id': 3,
      'description': 'porttitor lacus at turpis donec posuere metus vitae ipsum',
      'component_type': 'Metas'
    },
    {
      'id': 4,
      'description': 'ipsum dolor sit amet consectetuer adipiscing elit',
      'component_type': 'Reglas'
    }
  ]
}, {
  'id': 2,
  'name': 'Stringtough',
  'owner': 'Alta Ingledew',
  'components': [
    {
      'id': 1,
      'description': 'penatibus et magnis dis parturient montes nascetur ridiculus mus',
      'component_type': 'Metas'
    },
    {
      'id': 2,
      'description': 'lectus pellentesque at nulla',
      'component_type': 'Reglas'
    },
    {
      'id': 3,
      'description': 'ultrices vel augue vestibulum',
      'component_type': 'Metas'
    }
  ]
}, {
  'id': 3,
  'name': 'Quo Lux',
  'owner': 'Kinnie Hurring',
  'components': [
    {
      'id': 1,
      'description': 'elementum eu interdum eu',
      'component_type': 'Pasos'
    },
    {
      'id': 2,
      'description': 'nunc commodo placerat praesent blandit nam nulla',
      'component_type': 'Metas'
    },
    {
      'id': 3,
      'description': 'magnis dis parturient montes nascetur ridiculus mus etiam',
      'component_type': 'Metas'
    }
  ]
}, {
  'id': 4,
  'name': 'Otcom',
  'owner': 'Cindy Massenhove',
  'components': [
    {
      'id': 1,
      'description': 'amet nulla quisque arcu libero rutrum ac lobortis',
      'component_type': 'Reglas'
    },
    {
      'id': 2,
      'description': 'dictumst etiam faucibus cursus urna ut tellus nulla ut erat',
      'component_type': 'Metas'
    },
    {
      'id': 3,
      'description': 'ultrices vel augue vestibulum ante ipsum primis',
      'component_type': 'Materiales'
    },
    {
      'id': 4,
      'description': 'massa donec dapibus duis',
      'component_type': 'Pasos'
    },
    {
      'id': 5,
      'description': 'luctus et ultrices',
      'component_type': 'Pasos'
    }
  ]
}, {
  'id': 5,
  'name': 'Opela',
  'owner': 'Dud Casiero',
  'components': [
    {
      'id': 1,
      'description': 'amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur',
      'component_type': 'Metas'
    },
    {
      'id': 2,
      'description': 'non sodales sed tincidunt eu felis',
      'component_type': 'Metas'
    },
    {
      'id': 3,
      'description': 'porttitor lorem id ligula suspendisse ornare consequat',
      'component_type': 'Pasos'
    },
    {
      'id': 4,
      'description': 'convallis duis consequat dui nec nisi volutpat eleifend donec ut',
      'component_type': 'Reglas'
    }
  ]
}, {
  'id': 6,
  'name': 'Stringtough',
  'owner': 'Ludwig Walding',
  'components': [

  ]
}, {
  'id': 7,
  'name': 'Alpha',
  'owner': 'Kimbra McMurty',
  'components': [

  ]
}, {
  'id': 8,
  'name': 'Holdlamis',
  'owner': 'Griffith Lavrick',
  'components': [

  ]
}, {
  'id': 9,
  'name': 'Vagram',
  'owner': 'Benoite Hub',
  'components': [
    {
      'id': 1,
      'description': 'turpis a pede',
      'component_type': 'Metas'
    },
    {
      'id': 2,
      'description': 'volutpat dui maecenas tristique est et tempus',
      'component_type': 'Metas'
    },
    {
      'id': 3,
      'description': 'sapien varius ut blandit',
      'component_type': 'Metas'
    },
    {
      'id': 4,
      'description': 'ante ipsum primis in faucibus orci luctus et ultrices posuere',
      'component_type': 'Metas'
    }
  ]
}, {
  'id': 10,
  'name': 'Domainer',
  'owner': 'Patty Seymark',
  'components': [

  ]
}]
