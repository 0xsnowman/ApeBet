import React from "react";

interface ISelectProps {
    getter: Function
};

const Select:React.FC<ISelectProps> = ({
    getter
}) => {
  return (
    <select
      onChange={(evt) => {
        getter(Number(evt.target.value));
      }}
      defaultValue={10}
    >
      <option value={5}>5</option>
      <option value={10}>
        10
      </option>
      <option value={20}>20</option>
      <option value={50}>50</option>
      <option value={100}>100</option>
    </select>
  );
};

export default Select;
