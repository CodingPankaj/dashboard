import { CardTop } from "../components/CardTop";
import { MainCardContainer } from "../components/MainCardCointainer";
import { MainSection } from "../components/MainSection";
import { SearchInput } from "../components/SearchInput";
import { CategoryTable } from "../components/category/CategoryTable";
import { useLocation } from "react-router-dom";
import productAllCategory from "../api/productAllCategory.json";
import { useEffect, useState } from "react";
import { AddCategoryForm } from "../components/category/AddCategoryForm";

export const Categories = () => {
  const [categoryData, setCategoryData] = useState(productAllCategory);
  const categoryPageLocation = useLocation()
    .pathname.split("/")
    .pop()
    .toLowerCase();

  useEffect(() => {
    if (categoryPageLocation === "parent-category") {
      setCategoryData(
        productAllCategory.filter(
          (item) => item.type.toLowerCase() === "parent category",
        ),
      );
    } else if (categoryPageLocation === "sub-category") {
      setCategoryData(
        productAllCategory.filter(
          (item) => item.type.toLowerCase() === "sub category",
        ),
      );
    } else {
      setCategoryData(productAllCategory);
    }
  }, [categoryPageLocation]);

  return (
    <MainSection>
      <MainCardContainer>
        <CardTop heading="Categories">
          <div className="flex items-center justify-center gap-5">
            <SearchInput />
          </div>
        </CardTop>
      </MainCardContainer>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <AddCategoryForm />
        <CategoryTable data={categoryData} />
      </div>
    </MainSection>
  );
};
