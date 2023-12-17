import { BaseSyntheticEvent, useState } from 'react';
import { uid } from 'uid';

import { ICost } from '@/entities/CostItem/model/types';
import styles from './CostsList.module.scss';

interface CostAddFormProps {
  onSaveCostData: (data: ICost) => void;
  setIsOpenForm: (value: boolean) => void;
}

const CostAddForm = ({ onSaveCostData, setIsOpenForm }: CostAddFormProps) => {
  const [data, setData] = useState({
    name: '',
    amount: '',
    date: '',
  });

  const onchangeForm = (event: BaseSyntheticEvent) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitForm = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    onSaveCostData({
      ...data,
      date: new Date(data.date),
      id: uid(),
      amount: Number(data.amount),
    });
    setIsOpenForm(false);
    setData({
      name: '',
      amount: '',
      date: '',
    });
  };

  const cencelForm = () => {
    setIsOpenForm(false);
    setData({
      name: '',
      amount: '',
      date: '',
    });
  };

  return (
    <form onSubmit={onSubmitForm}>
      <div className={styles['new-cost__controls']}>
        <div className={styles['new-cost__control']}>
          <label htmlFor="name">Название</label>
          <input id="name" type="text" name="name" onChange={onchangeForm} value={data.name} />
        </div>
        <div className={styles['new-cost__control']}>
          <label htmlFor="amount">Сумма</label>
          <input
            id="amount"
            type="number"
            name="amount"
            onChange={onchangeForm}
            value={data.amount}
            min={0.01}
            step={0.01}
          />
        </div>
        <div className={styles['new-cost__control']}>
          <label htmlFor="date">Дата</label>
          <input id="date" type="date" name="date" onChange={onchangeForm} value={data.date} />
        </div>
        <div className={styles['new-cost__actions']}>
          <button type="submit">Добавить</button>
          <button type="button" onClick={cencelForm}>
            Отменить
          </button>
        </div>
      </div>
    </form>
  );
};

export default CostAddForm;
