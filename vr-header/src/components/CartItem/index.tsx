import { IProduct } from "../../@types/product"

interface ICartItemProps {
  product: IProduct
}

export function CartItem({ product }: ICartItemProps) {
  function formatPrice(price: number) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)
  }

  return (
    <div className="w-full py-2 px-4 border border-brand rounded-lg flex justify-between items-center gap-4">
      <div className="flex items-center gap-10">
        <img src={product.images[0]} alt={product.title} className="w-14 h-14" />

        <p className="text-sm text-neutral-900">{product.title}</p>
      </div>

      <span className="text-sm text-neutral-900 font-semibold">
        {formatPrice(product.price)}
      </span>
    </div>
  )
}
