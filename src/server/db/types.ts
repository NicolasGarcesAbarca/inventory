import { InferSelectModel } from "drizzle-orm";
import { Categories } from "./schema";

export type CategorySelect = InferSelectModel<typeof Categories>;
