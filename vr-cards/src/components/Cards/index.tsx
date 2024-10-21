import { useQuery } from "@tanstack/react-query"

import { IProduct } from "../../@types/product"
import { getProducts } from "../../api/get-products"

import { Skeleton } from "../Skeleton"

interface ICardsProps {
  addProductOnCart: (product: IProduct) => void
}

export default function Cards({ addProductOnCart }: ICardsProps) {
  const { data, isLoading } = useQuery({
    queryFn: () => getProducts(),
    queryKey: ['products']
  })

  function formatPrice(price: number) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)
  }

  if (isLoading) {
    return (
      <Skeleton />
    )
  }

  return (
    <div className="w-full max-w-[1440px] px-12 mx-auto my-8">
      <div className="w-full grid grid-cols-3 gap-10">
        {data?.products.map((product) => (
          <div className="border border-neutral-200 rounded-lg p-8" key={product.id}>
            <div className="w-80 h-48 mx-auto overflow-hidden flex justify-center">
              <img src={product.images[0]} alt={product.title} className="max-w-full max-h-full" />
            </div>

            <h3 className="text-center text-lg text-neutral-900 font-bold">{product.title}</h3>
            <p className="text-center text-sm text-neutral-900 mt-3">{product.description}</p>

            <div className="flex items-center justify-between mt-8">
              <span className="text-xl text-neutral-900 font-bold">
                {formatPrice(product.price)}
              </span>

              <button
                type="button"
                className="h-12 px-4 rounded-full bg-brand hover:opacity-80 duration-200 text-neutral-50 text-sm font-semibold"
                onClick={() => addProductOnCart(product)}
              >
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
