import React from 'react';

type MySelectProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  loading: boolean;
};

const methods = ['GET', 'POST', 'UPDATE', 'DELETE'];

const MySelect: React.FC<MySelectProps> = ({ value, onChange, loading }) => {
  return (
    <div className=" grid">
      <label className="">HTTP Method:</label>
      <select
        value={value}
        onChange={onChange}
        className="border rounded p-2 border-gray-600"
        disabled={loading}
      >
        {methods.map((method) => (
          <option key={method} value={method}>
            {method}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MySelect;
