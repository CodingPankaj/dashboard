export const SelectBoxOptions = ({ label, value }) => {
  return (
    <option value={value} className="option">
      {label}
    </option>
  );
};
