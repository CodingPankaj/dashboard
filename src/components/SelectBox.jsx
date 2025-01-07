import { IoChevronDownSharp } from "react-icons/io5";

export const SelectBox = ({ children, onChange, name = "" }) => {
  return (
    <div className="relative">
      <IoChevronDownSharp className="absolute right-2 top-[6.5px] text-sm" />
      <select name={name} onChange={onChange} className="select">
        {children}
      </select>
    </div>
  );
};
