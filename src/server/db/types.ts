import { InferSelectModel } from "drizzle-orm";
import { Brands, Categories, Suppliers } from "./schema";

export type CategorySelect = InferSelectModel<typeof Categories>;

export type BrandSelect = InferSelectModel<typeof Brands>;

export type SupplierSelect = InferSelectModel<typeof Suppliers>;
