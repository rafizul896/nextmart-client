import ManageBrands from "@/components/modules/shop/brand";
import { getAllBrands } from "@/services/Brand";

const ProductCategoryPage = async () => {
  const { data } = await getAllBrands();

  return (
    <div>
      <ManageBrands brands={data} />
    </div>
  );
};

export default ProductCategoryPage;
