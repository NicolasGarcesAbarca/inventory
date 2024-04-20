import { InferSelectModel } from "drizzle-orm";
import { Brands, Categories } from "./schema";

export type CategorySelect = InferSelectModel<typeof Categories>;

export type BrandSelect = InferSelectModel<typeof Brands>;
