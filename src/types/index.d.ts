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

export enum Role {
    ADMIN = "ADMIN",
    MANAGER = "MANAGER",
    MODERATOR = "MODERATOR",
    CUSTOMER = "CUSTOMER"
}
export enum IsActive {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    BLOCKED = "BLOCKED"
}

export interface IUser {
    _id?: Types.ObjectId;
    name: string;
    email: string;
    password?: string;
    phone?: string;
    address: string;
    picture?: string;
    isActive?: IsActive;
    isVerified?: boolean;
    isDeleted?: boolean;
    salary?: number;
    role?: Role;
    createdAt?: string
    updatedAt?: string
}

export interface IUserApiResponse {
  data: IUser;
}

export enum CategoryStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export interface ICategory {
  _id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  status: CategoryStatus;
}

export enum BrandStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
}

export interface IBrand {
  _id: string
    title: string;
    slug: string;
    description: string;
    image: string;
    status: BrandStatus;
}