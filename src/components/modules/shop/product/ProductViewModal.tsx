import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

export default function ProductViewModal({ product, isOpen, onClose }) {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[500px] p-4">
          <div className="flex flex-col gap-4">
            {product.imageUrls?.length > 0 && (
              <div className="w-full flex justify-center">
                <Image
                  src={product.imageUrls[0]}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="rounded-lg shadow"
                />
              </div>
            )}
            <p className="text-gray-700">{product.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Stock:</strong> {product.stock}</p>
              <p><strong>Weight:</strong> {product.weight}kg</p>
              <p><strong>Category ID:</strong> {product.category?.$oid}</p>
              <p><strong>Brand ID:</strong> {product.brand?.$oid}</p>
              <p><strong>Shop ID:</strong> {product.shop?.$oid}</p>
              <p><strong>Average Rating:</strong> {product.averageRating} ({product.ratingCount} ratings)</p>
              <p><strong>Active:</strong> {product.isActive ? "Yes" : "No"}</p>
            </div>
            <div>
              <h4 className="font-semibold">Available Colors:</h4>
              <p>{product.availableColors?.join(", ")}</p>
            </div>
            <div>
              <h4 className="font-semibold">Key Features:</h4>
              <ul className="list-disc pl-5">
                {product.keyFeatures?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Specifications:</h4>
              <ul className="list-disc pl-5">
                {product.specification &&
                  Object.entries(product.specification).map(([key, value], index) => (
                    <li key={index}><strong>{key}:</strong> {value}</li>
                  ))}
              </ul>
            </div>
            <p className="text-sm text-gray-500">Created At: {new Date(product.createdAt.$date).toLocaleString()}</p>
            <p className="text-sm text-gray-500">Updated At: {new Date(product.updatedAt.$date).toLocaleString()}</p>
          </div>
        </ScrollArea>
        <Button onClick={onClose} className="w-full">Close</Button>
      </DialogContent>
    </Dialog>
  );
}
