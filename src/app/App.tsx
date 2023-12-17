import { useState } from 'react';

import CostAdd from '../features/CostsList/ui/CostAdd';
import CostsList from '../features/CostsList/ui/CostsList';
import { initValue } from '../model/model';
import { ICost } from '@/entities/CostItem/model/types';
import '../index.scss';

function App() {
  const [costs, setCosts] = useState<ICost[]>(initValue);

  const addCostHandler = (data: ICost) => {
    setCosts((prev) => [...prev, data]);
  };

  return (
    <div className="app">
      <CostAdd {...{ addCostHandler }} />
      <CostsList {...{ costs }} />
    </div>
  );
}

export default App;
