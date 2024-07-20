function orderNow() {
  let restaurant = {
      name: 'gourmet delight',
      Afterdish: {
          swallow: ['eba', 'fufu', 'akpu'],
          soup: ['egusi', 'okro', 'fida'],
          meat: ['beef', 'chicken', 'fish']
      },
      chinesedish: {
          meat: ['frog', 'crab'],
          rice: ['chinese rice', 'ofada']
      },
      drink: ['origin', 'coke', 'fanta'],
      amount: '₦4000',
  };

  let message = `
      A plate of ${restaurant.chinesedish.rice[1]} 
      with one lap of ${restaurant.Afterdish.meat[1]} 
      and a bottle of ${restaurant.drink[0]} drink 
      everything should be ${restaurant.amount}
  `;

  document.getElementById('output').innerHTML = message;
}