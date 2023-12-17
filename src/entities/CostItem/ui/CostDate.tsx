import styles from './CostItem.module.scss';

interface CostDateProps {
  date: Date;
}

const CostDate = ({ date }: CostDateProps) => {
  const month = date.toLocaleDateString('ru-RU', { month: 'long' });
  const day = date.toLocaleDateString('ru-RU', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className={styles['cost-date']}>
      <div className={styles['cost-date__month']}>{month}</div>
      <div className={styles['cost-date__year']}>{year}</div>
      <div className={styles['cost-date__day']}>{day}</div>
    </div>
  );
};

export default CostDate;
