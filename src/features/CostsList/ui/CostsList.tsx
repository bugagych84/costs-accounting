import { BaseSyntheticEvent, useState } from 'react';

import CostFilters from './CostFilters';
import { ICost } from '@/entities/CostItem/model/types';
import styles from './CostsList.module.scss';

import CostDiagram from '@/entities/CostDiagram/ui/CostDiagram';
import CostItem from '@/entities/CostItem/ui/CostItem';
import Card from '@/shared/ui/Card';

interface CostsListProps {
  costs: ICost[];
}

const CostsList = ({ costs }: CostsListProps) => {
  const [year, setYear] = useState('2023');

  const onYearHandler = (event: BaseSyntheticEvent) => {
    setYear(event.target.value);
  };

  const costsList = costs
    .filter((item) => item.date.getFullYear().toString() === year)
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <Card className={styles['costs']}>
      <CostFilters {...{ onYearHandler }} />
      <CostDiagram costs={costsList} />
      {costsList.length ? (
        costsList.map((item) => <CostItem key={item.id} cost={item} />)
      ) : (
        <h2>В этом году расходов нет</h2>
      )}
    </Card>
  );
};

export default CostsList;
