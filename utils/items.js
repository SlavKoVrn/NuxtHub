export function generateItems() {
  const items = [];
  for (let i = 1; i <= 1000000; i++) {
    items.push({ id: i, text: `Item ${i}`, order: i });
  }
  return items;
}