import { IProduct } from "../@types/product"
import { api } from "../lib/axios"

interface GetProductsResponse {
  products: IProduct[]
}

export async function getProducts() {
  const response = await api.get<GetProductsResponse>('/products')

  return response.data
}
