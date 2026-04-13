export default function SnackList() {
  let snacks = [
    { name: 'chips', rank: 3 },
    { name: 'pretzels', rank: 2 },
    { name: 'chocolate', rank: 1 },
  ];
  return snacks
    .toSorted((a, b) => {
      return a.rank - b.rank;
    })
    .map((snack) => (
      <ol key={snack.name}>
        {snack.rank}) {snack.name}
      </ol>
    ));
}
