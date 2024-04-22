import { InferSelectModel } from "drizzle-orm";
import { Brands, Categories, Products, Suppliers, Warehouses } from "./schema";

export type CategorySelect = InferSelectModel<typeof Categories>;

export type BrandSelect = InferSelectModel<typeof Brands>;

export type SupplierSelect = InferSelectModel<typeof Suppliers>;

export type WarehousesSelect = InferSelectModel<typeof Warehouses>;

export type ProductsSelect = InferSelectModel<typeof Products>;
