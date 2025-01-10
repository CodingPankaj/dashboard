import { BiEditAlt } from "react-icons/bi";
import { IoEye } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export const ActionButtons = () => {
  return (
    <div className="flex gap-[10px]">
      <Link
        to={"/orders/order-details"}
        className="rounded bg-cyan-500/10 p-1 text-sm text-cyan-500 hover:bg-cyan-500 hover:text-white"
      >
        <IoEye />
      </Link>
      <button className="rounded bg-accent-color/10 p-1 text-sm text-accent-color hover:bg-accent-color hover:text-white">
        <BiEditAlt />
      </button>
      <button className="rounded bg-red-500/10 p-1 text-sm text-red-500 hover:bg-red-500 hover:text-white">
        <RiDeleteBin6Line />
      </button>
    </div>
  );
};
