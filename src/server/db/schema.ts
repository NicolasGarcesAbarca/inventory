import {
  pgTable,
  serial,
  text,
  uniqueIndex,
  integer,
} from "drizzle-orm/pg-core";

export const Products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  code: text("code").notNull(),
  price: integer("price").notNull(),
  categoryId: integer("category_id").references(() => Categories.id),
  brandId: integer("brand_id").references(() => Brands.id),
  supplierId: integer("supplier_id").references(() => Suppliers.id),
});

export const ProductWarehouse = pgTable("product_warehouse", {
  productId: integer("product_id").references(() => Products.id),
  warehouseId: integer("warehouse_id").references(() => Warehouses.id),
  quantity: integer("quantity").notNull(),
});

export const Categories = pgTable(
  "categories",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
  },
  (category) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(category.name),
    };
  }
);

export const Brands = pgTable(
  "brands",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
  },
  (brand) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(brand.name),
    };
  }
);

export const Suppliers = pgTable(
  "suppliers",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
  },
  (supplier) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(supplier.name),
    };
  }
);

export const Warehouses = pgTable(
  "warehouses",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    address: text("address").notNull(),
  },
  (warehouse) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(warehouse.name),
    };
  }
);
