import { MdClose } from "react-icons/md";
import { CardTop } from "../CardTop";
import { MainCardContainer } from "../MainCardCointainer";

export const AddProductPics = () => {
  return (
    <MainCardContainer>
      <CardTop heading="Pictures" headingStyle="text-sm"></CardTop>

      <div className="flex flex-col gap-4 p-4">
        <label
          htmlFor="product-image-upload"
          className="w-full cursor-pointer rounded border border-dashed border-accent-color/60 bg-accent-color/10 px-4 py-8 text-center text-[13px] text-text-color-3"
        >
          <span className="mr-1 text-2xl">📷</span>
          Drag & Drop your images or <span className="underline">Browse</span>
          <input
            type="file"
            id="product-image-upload"
            accept="image/*"
            className="hidden"
          />
        </label>
        <div className="grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          <DisplayUploadedPic />
          <DisplayUploadedPic />
          <DisplayUploadedPic />
          <DisplayUploadedPic />
        </div>
      </div>
    </MainCardContainer>
  );
};

const DisplayUploadedPic = ({ src = "/images/1.jpg" }) => {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded">
      <img src={src} alt="thumbnail" />
      <button className="absolute right-1 top-1 flex items-center justify-center rounded-full bg-red-500 text-sm text-white lg:size-4 xl:size-5">
        <MdClose />
      </button>
    </div>
  );
};
