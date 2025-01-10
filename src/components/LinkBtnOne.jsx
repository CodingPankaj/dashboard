import { Link } from "react-router-dom";

export const LinkBtnOne = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="flex items-center gap-[5px] rounded bg-accent-color px-[10px] py-[5px] text-[13px] font-medium text-white"
    >
      {children}
    </Link>
  );
};
