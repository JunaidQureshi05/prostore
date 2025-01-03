const ProductList = ({
  data,
  title,
  limit = data?.length,
}: {
  data: any;
  title?: string;
  limit: number;
}) => {
  console.log(">>>>>>>", data);
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.slice(0, limit)?.map((product: any) => (
            <div>{product.name}</div>
          ))}
        </div>
      ) : (
        <div>
          <p>No producs found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;