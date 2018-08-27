export function getCats() {
  // specific pictures usage: https://picsum.photos/200/300?image=0
  return fetch(`https://picsum.photos/list`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error('Fetch error:', err));
}