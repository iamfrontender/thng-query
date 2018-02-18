'use strict';

const examples = [
  'thngs with name Advanced* where identifiers.ser^673',
  'products tagged WIFI where properties.sw_update = true',
  'thng where identifiers.production_id $ c62'
];

module.exports = () => rand(examples);

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}