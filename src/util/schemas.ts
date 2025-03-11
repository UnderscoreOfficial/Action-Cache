import { z } from "zod";

export const location_schema = z.object({
  location: z.string(),
  order: z.number(),
});

export const status_schema = z.object({
  status: z.object({
    success: z.boolean(),
    message: z.string(),
  }),
});

export const action_schema = z.object({
  type: z.string(),
  name: z.string().min(1, { message: "Shortcut must be at least 1 character." }),
  location: z.string(),
  description: z.string().min(1, { message: "Description must be at least 1 character." }),
  category_id: z.preprocess((num) => Number(num), z.number().min(1, { message: "You must select a category." })),
});

export const category_schema = z.object({
  name: z.string().min(1, { message: "Category name must be at least 1 character." }),
});
