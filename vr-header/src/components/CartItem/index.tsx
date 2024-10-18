interface ICartItemProps {
  product: {
    imgUrl: string
    name: string
    price: number
  }
}

export function CartItem({ product }: ICartItemProps) {
  return (
    <div className="w-full py-2 px-4 border border-brand rounded-lg flex justify-between items-center gap-4">
      <div className="flex items-center gap-10">
        <img src={product.imgUrl} alt={product.name} className="w-14 h-14" />

        <p className="text-sm text-neutral-900">{product.name}</p>
      </div>

      <span className="text-sm text-neutral-900 font-semibold">
        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
      </span>
    </div>
  )
}
