import { api } from "../lib/axios"

export interface IProduct {
  id: number
  title: string
  description: string
  price: number
  images: string[]
}

interface GetProductsResponse {
  products: IProduct[]
}

export async function getProducts() {
  const response = await api.get<GetProductsResponse>('/products')

  return response.data
}
