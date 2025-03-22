import ManageBrands from "@/components/modules/shop/brand";
import { getAllCategories } from "@/services/Category";

const ProductCategoryPage = async () => {
  const { data } = await getAllCategories();

  return (
    <div>
      <ManageBrands categories={data} />
    </div>
  );
};

export default ProductCategoryPage;
