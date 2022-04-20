/* eslint-disable no-console */
export default function destructuring(object) {
  const array = [];
  const { special } = object;
  for (const i of special) {
    if (!('description' in i)) {
      i.description = 'Описание недоступно';
    }
    array.push(i);
  }
  return array;
}
