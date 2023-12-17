import { useState } from 'react';

import CostAddForm from './CostAddForm';
import { ICost } from '@/entities/CostItem/model/types';
import styles from './CostsList.module.scss';

interface CostAddProps {
  addCostHandler: (data: ICost) => void;
}

const CostAdd = ({ addCostHandler }: CostAddProps) => {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const onSaveCostData = (data: ICost) => {
    addCostHandler(data);
  };

  return (
    <div className={styles['new-cost']}>
      {isOpenForm ? (
        <CostAddForm {...{ onSaveCostData, setIsOpenForm }} />
      ) : (
        <button onClick={() => setIsOpenForm(true)}>Добавить расход</button>
      )}
    </div>
  );
};

export default CostAdd;
