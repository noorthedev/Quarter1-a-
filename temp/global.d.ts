declare module 'your-module-name' {
    interface ProductCardProps {
      image: string;
      title: string;
      price: number;
    }
  
    const ProductCard: React.FC<ProductCardProps>;
    export { ProductCard };
  }
  