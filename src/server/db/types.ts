import { InferSelectModel } from "drizzle-orm";
import { Brands, BuyActions, Categories, Clients, Products, Suppliers, Warehouses } from "./schema";

export type CategorySelect = InferSelectModel<typeof Categories>;

export type BrandSelect = InferSelectModel<typeof Brands>;

export type SupplierSelect = InferSelectModel<typeof Suppliers>;

export type WarehousesSelect = InferSelectModel<typeof Warehouses>;

export type ProductSelect = InferSelectModel<typeof Products>;

export type ClientSelect = InferSelectModel<typeof Clients>;

export type BuyActionSelect = InferSelectModel<typeof BuyActions>;

