var recipes = newObject({});

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { key: value})
}