import { uid } from 'uid';

export const initValue = [
  {
    id: uid(),
    date: new Date(2021, 7, 10),
    name: 'Холодильник',
    amount: 1000,
  },
  {
    id: uid(),
    date: new Date(2021, 11, 11),
    name: 'Микроволновка',
    amount: 100000,
  },
  {
    id: uid(),
    date: new Date(2021, 2, 10),
    name: 'Машина',
    amount: 10000,
  },
  {
    id: uid(),
    date: new Date(2023, 8, 10),
    name: 'Квартира2',
    amount: 100000,
  },
  {
    id: uid(),
    date: new Date(2023, 10, 10),
    name: 'Квартира1',
    amount: 100000,
  },
];