
import { dataSets } from '../model/model';
import Diagram from './Diagram';
import { ICost } from '@/entities/CostItem/model/types';

interface CostDiagramProps {
  costs: ICost[];
}

const CostDiagram = ({ costs }: CostDiagramProps) => {
  for (const cost of costs) {
    const costMonth = cost.date.getMonth();
    dataSets[costMonth].value += cost.amount;
  }
  return <Diagram dataSets={dataSets} />;
};

export default CostDiagram;
