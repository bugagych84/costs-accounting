import styles from './Diagram.module.scss';

interface DiagramBarProps {
  value: number;
  maxValue: number;
  label: string;
}

const DiagramBar = ({ value, maxValue, label }: DiagramBarProps) => {
  let heightBar = '0%';

  if (maxValue > 0) {
    heightBar = `${Math.round((value / maxValue) * 100)}%`;
  }

  return (
    <div className={styles['diagram-bar']}>
      <div className={styles['diagram-bar__inner']}>
        <div className={styles['diagram-bar__fill']} style={{ height: heightBar }}></div>
      </div>
      <div className={styles['diagram-bar__label']}>{label}</div>
    </div>
  );
};

export default DiagramBar;
