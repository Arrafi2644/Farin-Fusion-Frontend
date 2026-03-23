export interface IIngredient {
  name: string;
  price: number;
}

export type GetQueryParams = {
  searchTerm?: string;
  sort?: string;
  category?: string;
  page?: number;
  limit?: number;
  status?: string;
};

export interface IPaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
  paymentMethod?: string;
  status?: string;
}

export type { ILogin, IRegister } from "./auth.type"

export interface IResponse<T> {
  statusCode: number
  success: boolean
  message: string
  data: T
}

export interface ISidebarItem {
  title: string,
  items: {
    title: string,
    url: string,
    component: ComponentType
  }[]

}
export interface IUser {
  _id: string
  name: string
  email: string
  role: "ADMIN" | "MANAGER" | "MODERATOR" | "CUSTOMER"
  password: string
  picture: string
  phone?: string
  address?: string
  createdAt: string
  updatedAt: string
}

export interface IUserApiResponse {
  data: IUser;
}
