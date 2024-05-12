// DataTableComponent.tsx
import React from 'react';
import styles from './DataTableComponent.module.css';

interface DataTableProps {
  data: Array<{ [key: string]: string | number }>;
}

export const DataTableComponent: React.FC<DataTableProps> = ({ data }) => (
  <table className={styles.dataTable}>
    <thead>
      <tr>
        {Object.keys(data[0]).map((key) => (
          <th key={key}>{key}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          {Object.values(row).map((val, idx) => (
            <td key={idx}>{val}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
