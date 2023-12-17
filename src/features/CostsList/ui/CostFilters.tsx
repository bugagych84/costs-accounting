import { BaseSyntheticEvent } from 'react';

import styles from './CostsList.module.scss';

interface CostFiltersProps {
  onYearHandler: (event: BaseSyntheticEvent) => void;
}

const CostFilters = ({ onYearHandler }: CostFiltersProps) => {
  return (
    <div className={styles['costs-filter']}>
      <div className={styles['costs-filter__control']}>
        <label>Выбор по году</label>
        <select onChange={onYearHandler} defaultValue={'2023'}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
};

export default CostFilters;
