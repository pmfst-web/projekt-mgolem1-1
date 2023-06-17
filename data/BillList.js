import uuid from 'react-native-uuid';
export const BillList: Racun[] = [
  {
    id: uuid.v4(),
    date: new Date(),
    type: 'Uplata',
    category: 'Plaća',
    amount: 200,
  },
  {
    id: uuid.v4(),
    date: new Date(),
    type: 'Isplata',
    category: 'Zabava',
    amount: 200,
  },
  {
    id: uuid.v4(),
    date: new Date(),
    type: 'Uplata',
    category: 'Poklon',
    amount: 200,
  },
  {
    id: uuid.v4(),
    date: new Date(),
    type: 'Isplata',
    category: 'Namirnice',
    amount: 200,
  },
];