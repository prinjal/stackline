interface ProductProp {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  tags: string[];
}

const Product = ({ title, image, subtitle, tags }: ProductProp) => {
  return (
    <div className="flex flex-col p-4 bg-white shadow rounded-lg m-5 min-h-screen">
      <img src={image} alt="Product" className="w-full h-auto mb-4" />
      <h2 className="text-2xl font-bold mb-2 text-center">{title}</h2>
      <p className="mb-4 text-center">{subtitle}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm">
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Product;
