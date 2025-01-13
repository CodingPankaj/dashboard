import { CardTop } from "../CardTop";
import { LinkBtnOne } from "../LinkBtnOne";
import { LinkBtnTwo } from "../LinkBtnTwo";
import { MainCardContainer } from "../MainCardCointainer";
import { SelectBox } from "../SelectBox";
import { SelectBoxOptions } from "../SelectBoxOptions";

export const AddCategoryForm = () => {
  return (
    <MainCardContainer>
      <CardTop heading="Add Category" headingStyle="text-sm" />
      <form className="pb-10">
        <div className="pb-3 pt-2">
          <div className="product-input-container">
            <label htmlFor="category-name" className="add-product-label">
              Category Name
            </label>
            <input
              type="text"
              id="category-name"
              placeholder="Enter Category Name"
              className="product-input"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <span className="add-product-label">Category Image</span>
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
        </div>
        <div className="product-input-container">
          <label htmlFor="category-type" className="add-product-label">
            Type
          </label>
          <SelectBox id="category-type" className="product-select-box">
            <SelectBoxOptions value="parent-category" label="Parent Category" />
            <SelectBoxOptions value="mens-clothing" label="Mens Clothing" />
            <SelectBoxOptions value="womens-clothing" label="Womens Clothing" />
            <SelectBoxOptions value="footwear" label="Footwear" />
          </SelectBox>
        </div>
        <div className="product-input-container">
          <label htmlFor="category-description" className="add-product-label">
            Category Description
          </label>

          <textarea
            id="category-description"
            placeholder="Enter Category Description"
            className="product-input scrollbar h-[150px] overflow-y-auto"
          ></textarea>
        </div>
        <div className="product-input-container">
          <span htmlFor="category-status" className="add-product-label">
            Discount Type
          </span>
          <div className="radio-container">
            <span className="add-product-label">Active</span>
            <input
              type="radio"
              name="category-status"
              id="category-status-active"
              className="input-radio"
            />
          </div>
          <div className="radio-container">
            <span className="add-product-label">In Active</span>
            <input
              type="radio"
              name="category-status"
              id="category-status-inactive"
              className="input-radio"
            />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center gap-4">
          <LinkBtnTwo>Save Draft</LinkBtnTwo>
          <LinkBtnOne>Publish</LinkBtnOne>
        </div>
      </form>
    </MainCardContainer>
  );
};
