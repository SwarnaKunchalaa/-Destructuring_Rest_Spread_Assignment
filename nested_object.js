

function extractNameAndStreet(person) {
    const { name, address:{street }} = person;
    return { name, street };
  }
  const person = {
    name: 'Swarna Kunchala',
    age: 21,
    address: {
      street: 'street 18',
      city: 'Warangal',
      state: 'Talangana',
    }
  };
  
  const { name, street } = extractNameAndStreet(person);
  console.log(name); 
  console.log(street); 