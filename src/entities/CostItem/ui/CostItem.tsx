import CostDate from './CostDate';
import { ICost } from '../model/types';
import styles from './CostItem.module.scss';

import Card from '@/shared/ui/Card';

interface CostItemProps {
  cost: ICost;
}

const CostItem = ({ cost }: CostItemProps) => {
  const { name, amount, ...other } = cost;

  return (
    <Card className={styles['cost-item']}>
      <CostDate {...other} />
      <div className={styles['cost-item__description']}>
        <h2>{name}</h2>
        <div className={styles['cost-item__price']}>Руб. {amount}</div>
      </div>
    </Card>
  );
};

export default CostItem;
