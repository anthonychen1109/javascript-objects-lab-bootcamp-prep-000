var recipes = new Object({ water: '3 cups'});

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { key: value})
}