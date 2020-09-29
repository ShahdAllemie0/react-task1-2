const items = [
  {
    id: 1,
    name: "Magic bird",
    price: 1500000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUnnYrC0iAKUrF0TdhJwkp43zUybQDhSo9eA&usqp=CAU",
  },
  {
    id: 2,
    name: "Elph bird",
    price: 600000,
    image:
      "data:image/jpeg;base64,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",
  },
];
export default items;
