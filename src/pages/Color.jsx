import { CardTop } from "../components/CardTop";
import { LinkBtnOne } from "../components/LinkBtnOne";
import { MainCardContainer } from "../components/MainCardCointainer";
import { MainSection } from "../components/MainSection";
import { SearchInput } from "../components/SearchInput";
import { Table } from "../components/table/Table";
import { TableHead } from "../components/table/TableHead";
import { TableTh } from "../components/table/TableTh";
import { CheckBox } from "../components/CheckBox";
import { TableTr } from "../components/table/TableTr";
import { TableTd } from "../components/table/TableTd";
import { TableTextSpan } from "../components/table/TableSpan";
import productColors from "../api/productColors.json";
import { ActionButtons } from "../components/ActionsButtons";

export const Color = () => {
  return (
    <MainSection>
      <MainCardContainer>
        <CardTop heading="Color">
          <div className="flex items-center justify-center gap-5">
            <SearchInput />
          </div>
        </CardTop>
      </MainCardContainer>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <MainCardContainer>
          <CardTop heading="Add Color" headingStyle="text-sm" />
          <form>
            <div className="pb-3 pt-2">
              <div className="product-input-container">
                <label htmlFor="color-name" className="add-product-label">
                  Color Name
                </label>
                <input
                  type="text"
                  id="color-name"
                  placeholder="Enter Color Name"
                  className="product-input"
                />
              </div>
              <div className="mb-4 mt-4 flex items-center justify-center gap-4">
                <LinkBtnOne>Add Color</LinkBtnOne>
              </div>
            </div>
          </form>
        </MainCardContainer>
        <MainCardContainer>
          <CardTop heading="All Color" headingStyle="text-sm" />
          <Table>
            <TableHead>
              <TableTh>
                <CheckBox name="color-box" />
              </TableTh>
              <TableTh>ID</TableTh>
              <TableTh>Size</TableTh>
              <TableTh>Action</TableTh>
            </TableHead>
            <tbody>
              {productColors.map((item, index) => (
                <SizeList key={index} item={item} />
              ))}
            </tbody>
          </Table>
        </MainCardContainer>
      </div>
    </MainSection>
  );
};

const SizeList = ({ item: { id, value } }) => {
  return (
    <TableTr>
      <TableTd>
        <CheckBox name="category-box" />
      </TableTd>
      <TableTd>
        <TableTextSpan>{id}</TableTextSpan>
      </TableTd>
      <TableTd>
        <TableTextSpan>{value}</TableTextSpan>
      </TableTd>
      <TableTd>
        <ActionButtons />
      </TableTd>
    </TableTr>
  );
};
