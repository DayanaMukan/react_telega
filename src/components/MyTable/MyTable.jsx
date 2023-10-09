import './MyTable.css'
import React from 'react';

export const MyTable = () => {
const columns = [
  { field: 'id', header: 'ID' },
  { field: 'name', header: 'Имя' },
  { field: 'pain', header: 'Боль' },
  { field: 'difficulty', header: 'Сложность' },
  { field: 'chaos', header: 'хаос' },
  { field: 'beauty', header: 'красота' },
];

const data = [
  {
    id: 1,
    name: 'Vue',
    pain: 0.3,
    difficulty: 0.6,
    chaos: 0.3,
    beaty: 0.7,
  },
  {
    id: 2,
    name: 'React',
    pain: 0.7,
    difficulty: 0.3,
    chaos: 1.0,
    beaty: 0.3,
  },
  {
    id: 3,
    name: 'Angular',
    pain: 1.0,
    difficulty: 0.5,
    chaos: 0.1,
    beaty: 0.05,
  },
  {
    id: 4,
    name: 'Django',
    pain: 0.4,
    difficulty: 0.5,
    chaos: 0.6,
    beaty: 0.2,
  },
  {
    id: 4,
    name: 'Node.js',
    pain: 1.0,
    difficulty: 1.0,
    chaos: 1.0,
    beaty: 0.1,
  },
  {
    id: 5,
    name: 'FastAPI',
    pain: 0.1,
    difficulty: 0.2,
    chaos: 0.2,
    beaty: 0.5,
  }
];

const dataRemake = data.map(item => ({
    id: item.id,
    name: item.name,
    pain: item.pain * 100,
    difficulty: item.difficulty * 100,
    chaos: item.chaos * 100,
    beauty: item.beaty * 100,
  }));
  

  

  return (
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.field}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataRemake.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={column.field}>{row[column.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
  );
}

