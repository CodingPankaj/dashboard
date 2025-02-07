import { TableTd } from "../table/TableTd";
import { TableTr } from "../table/TableTr";
import { TableTextSpan } from "../table/TableSpan";
import { ActionButtons } from "../ActionsButtons";
import { Table } from "../table/Table";
import { TableTh } from "../table/TableTh";
import { CheckBox } from "../CheckBox";
import { TableHead } from "../table/TableHead";
import { MainCardContainer } from "../MainCardCointainer";
import { CardTop } from "../CardTop";

export const CategoryTable = ({ data }) => {
  return (
    <MainCardContainer className="lg:col-span-2">
      <CardTop heading="Categories" headingStyle="text-sm" />
      <Table>
        <TableHead>
          <TableTh>
            <CheckBox name="category-box" />
          </TableTh>
          <TableTh>ID</TableTh>
          <TableTh>Image</TableTh>
          <TableTh>Categoy</TableTh>
          <TableTh>Type</TableTh>
          <TableTh>Slug</TableTh>
          <TableTh>Actions</TableTh>
        </TableHead>
        <tbody>
          {data &&
            data.map((item, index) => <CategoryList key={index} item={item} />)}
        </tbody>
      </Table>
    </MainCardContainer>
  );
};

const CategoryList = ({ item: { category_id, label, image, type, slug } }) => {
  return (
    <TableTr>
      <TableTd>
        <CheckBox name="category-box" />
      </TableTd>
      <TableTd>
        <TableTextSpan>{category_id}</TableTextSpan>
      </TableTd>
      <TableTd>
        <div className="size-10 overflow-hidden rounded">
          <img src={image} alt="thumbnail" />
        </div>
      </TableTd>
      <TableTd>
        <TableTextSpan>{label}</TableTextSpan>
      </TableTd>
      <TableTd>
        <TableTextSpan>{type}</TableTextSpan>
      </TableTd>
      <TableTd>
        <TableTextSpan>{slug}</TableTextSpan>
      </TableTd>

      <TableTd>
        <ActionButtons />
      </TableTd>
    </TableTr>
  );
};
