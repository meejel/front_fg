export const getUserAssessments = userToken => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(assessments)
    }, 2000)
  })
}

const assessments = [{
  'instrument': 'Solarbreeze',
  'owner': 'Dara Scrase',
  'principles': [
    {
      'id': 1,
      'principle': 'Transformador',
      'grade': 'Alto',
      'justification': 'quisque arcu libero rutrum ac lobortis vel'
    },
    {
      'id': 2,
      'principle': 'Transformador',
      'grade': 'Muy Alto',
      'justification': 'pretium iaculis justo in hac habitasse platea dictumst'
    },
    {
      'id': 3,
      'principle': 'Orientación',
      'grade': 'Muy Alto',
      'justification': 'non sodales sed'
    },
    {
      'id': 4,
      'principle': 'Transformador',
      'grade': 'Muy Alto',
      'justification': 'sociis natoque penatibus et magnis'
    },
    {
      'id': 5,
      'principle': 'Transformador',
      'grade': 'Alto',
      'justification': 'tortor quis turpis sed'
    },
    {
      'id': 6,
      'principle': 'Elementos persuasivos',
      'grade': 'Medio',
      'justification': 'dui vel sem sed sagittis nam congue risus'
    },
    {
      'id': 7,
      'principle': 'Elementos persuasivos',
      'grade': 'Alto',
      'justification': 'in purus eu magna vulputate luctus cum sociis natoque penatibus'
    }
  ]
}, {
  'instrument': 'Bitwolf',
  'owner': 'Tiffanie Mongan',
  'principles': [
    {
      'id': 1,
      'principle': 'Transformador',
      'grade': 'Alto',
      'justification': 'est lacinia nisi venenatis tristique fusce congue diam'
    },
    {
      'id': 2,
      'principle': 'Transformador',
      'grade': 'Muy Alto',
      'justification': 'tincidunt lacus at velit vivamus vel nulla eget eros elementum'
    },
    {
      'id': 3,
      'principle': 'Elementos persuasivos',
      'grade': 'Muy Alto',
      'justification': 'orci luctus et ultrices posuere cubilia curae nulla dapibus dolor'
    },
    {
      'id': 4,
      'principle': 'Elementos persuasivos',
      'grade': 'Muy Alto',
      'justification': 'a odio in'
    },
    {
      'id': 5,
      'principle': 'Orientación',
      'grade': 'Muy Alto',
      'justification': 'in faucibus orci luctus et ultrices posuere cubilia curae nulla'
    }
  ]
}, {
  'instrument': 'Y-find',
  'owner': 'Joane Lydster',
  'principles': [
    {
      'id': 1,
      'principle': 'Orientación',
      'grade': 'Muy Alto',
      'justification': 'sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis'
    },
    {
      'id': 2,
      'principle': 'Elementos persuasivos',
      'grade': 'Alto',
      'justification': 'arcu adipiscing molestie'
    }
  ]
}, {
  'instrument': 'Otcom',
  'owner': 'Luisa Livingstone',
  'principles': [
    {
      'id': 1,
      'principle': 'Elementos persuasivos',
      'grade': 'Muy Alto',
      'justification': 'dapibus duis at velit eu est congue elementum'
    },
    {
      'id': 2,
      'principle': 'Elementos persuasivos',
      'grade': 'Alto',
      'justification': 'sociis natoque penatibus et magnis'
    },
    {
      'id': 3,
      'principle': 'Orientación',
      'grade': 'Alto',
      'justification': 'vulputate luctus cum sociis natoque penatibus'
    },
    {
      'id': 4,
      'principle': 'Transformador',
      'grade': 'Muy Alto',
      'justification': 'posuere cubilia curae donec'
    },
    {
      'id': 5,
      'principle': 'Transformador',
      'grade': 'Muy Alto',
      'justification': 'quam nec dui luctus rutrum nulla tellus in sagittis'
    },
    {
      'id': 6,
      'principle': 'Orientación',
      'grade': 'Muy Alto',
      'justification': 'velit donec diam neque vestibulum eget vulputate'
    },
    {
      'id': 7,
      'principle': 'Transformador',
      'grade': 'Alto',
      'justification': 'ullamcorper augue a suscipit'
    }
  ]
}, {
  'instrument': 'Sonair',
  'owner': 'Francine Haselgrove',
  'principles': [
    {
      'id': 1,
      'principle': 'Transformador',
      'grade': 'Muy Alto',
      'justification': 'vestibulum eget vulputate'
    },
    {
      'id': 2,
      'principle': 'Transformador',
      'grade': 'Alto',
      'justification': 'dictumst maecenas ut massa quis augue luctus tincidunt'
    },
    {
      'id': 3,
      'principle': 'Transformador',
      'grade': 'Muy Alto',
      'justification': 'et magnis dis parturient montes nascetur'
    },
    {
      'id': 4,
      'principle': 'Transformador',
      'grade': 'Muy Alto',
      'justification': 'justo in blandit ultrices enim lorem'
    }
  ]
}]
