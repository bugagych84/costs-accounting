import DiagramBar from './DiagramBar';
import { IMonthAmount } from '../model/types';
import styles from './Diagram.module.scss';

import Card from '@/shared/ui/Card';

interface DiagramProps {
  dataSets: IMonthAmount[];
}

const Diagram = ({ dataSets }: DiagramProps) => {
  const maxValue = dataSets.reduce((acc, item) => acc + item.value, 0);

  return (
    <Card className={styles['diagram']}>
      {dataSets.map((item) => (
        <DiagramBar key={item.label} label={item.label} value={item.value} maxValue={maxValue} />
      ))}
    </Card>
  );
};

export default Diagram;
