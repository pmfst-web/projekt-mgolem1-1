import uuid from 'react-native-uuid';
export const BillList: Racun[] = [
  {
    id: uuid.v4(),
    date: new Date(),
    type: 'Uplata',
    category: 'Namirnice',
    amount: 200,
  },
  {
    id: uuid.v4(),
    date: new Date(),
    type: 'Isplata',
    category: 'Namirnice',
    amount: 200,
  },
  {
    id: uuid.v4(),
    date: new Date(),
    type: 'Uplata',
    category: 'Namirnice',
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