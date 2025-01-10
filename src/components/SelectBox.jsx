import { IoChevronDownSharp } from "react-icons/io5";

export const SelectBox = ({ children, value, onChange, name = "" }) => {
  return (
    <div className="relative">
      <IoChevronDownSharp className="absolute right-2 top-[6.5px] text-sm" />
      <select name={name} value={value} onChange={onChange} className="select">
        {children}
      </select>
    </div>
  );
};
