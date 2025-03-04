"use server"

import {prisma} from "@/lib/prisma" 
import { revalidatePath } from "next/cache"
import { z } from "zod";
import { 
  shortcut_schema, 
  category_schema,
  status_schema,
} from "@/util/schemas";

//type path_type = z.infer<typeof path_schema>["path"]

// internal helper functions
function createStatus(success: boolean, message: string): z.infer<typeof status_schema> {
    return {
      status: {
        success: success,
        message: message,
      },
    };
}

// creating

export async function createCategory(params: z.infer<typeof category_schema>, path: string) {
  try {
    const category = await prisma.shortcutManagerCategories.create({
      data: {
        name: params.name,
      },
    });
    revalidatePath(path);
    return {
      ...createStatus(true, "Category Created."),
      data: category 
    };
  } catch (error: unknown) {
    return {...createStatus(false, (error instanceof Error) ? error.message : ""), data: undefined};
  }
}

export async function createShortcut(params: z.infer<typeof shortcut_schema>, path: string) {
  try {
    await prisma.shortcutManagerShortcuts.create({
      data: {
        shortcut: params.shortcut,
        location: params.location,
        description: params.description,
        category_id: params.category_id,
      },
    });
    revalidatePath(path);
    return createStatus(true, "Shortcut Created.");
  } catch (error: unknown) {
    return createStatus(false, (error instanceof Error) ? error.message : "");
  }
}

// deleting

export async function deleteShortcut(id: number, path: string) {
  try {
    await prisma.shortcutManagerShortcuts.delete({
      where: {
        id: id
      },
    });
    revalidatePath(path);
    return createStatus(true, "Shortcut Deleted.");
  } catch (error: unknown) {
    return createStatus(false, (error instanceof Error) ? error.message : "");
  }
}

// user must delete (all of many) in the one to many relation before category can be deleted
export async function deleteCategory(id: number, path: string) {
  try {
    await prisma.shortcutManagerCategories.delete({
      where: {
        id: id
      },
    });
    revalidatePath(path);
    return createStatus(true, "Category Deleted.");
  } catch (error: unknown) {
    return createStatus(false, (error instanceof Error) ? error.message : "");
  }
}

// updating

export async function updateShortcut(params: z.infer<typeof shortcut_schema>, shortcut_id: number, path: string) {
  try {
    await prisma.shortcutManagerShortcuts.update({
      where: {
        id: shortcut_id
      },
      data: {
        shortcut: params.shortcut,
        location: params.location,
        description: params.description,
        category_id: params.category_id,
      },
    });
    revalidatePath(path);
    return createStatus(true, "Shortcut Updated.");
  } catch (error: unknown) {
    return createStatus(false, (error instanceof Error) ? error.message : "");
  }
}

export async function updateCategory(params: z.infer<typeof category_schema>, category_id: number, path: string) {
  try {
    await prisma.shortcutManagerCategories.update({
      where: {
        id: category_id
      },
      data: {
        name: params.name,
      },
    });
    revalidatePath(path);
    return createStatus(true, "Category Updated.");
  } catch (error: unknown) {
    return createStatus(false, (error instanceof Error) ? error.message : "");
  }
}

// retrieving data reting

export async function getCategories() {
  try {
    const categories = await prisma.shortcutManagerCategories.findMany({});
    return {...createStatus(true, "Retrieved Categories."), data: categories};
  } catch (error: unknown) {
    return {...createStatus(false, (error instanceof Error) ? error.message : ""), data: []}
  }
}

export async function getShortcuts() {
  try {
    const shortcuts = await prisma.shortcutManagerShortcuts.findMany({});
    return {...createStatus(true, "Retrieved Shortcuts."), data: shortcuts};
  } catch (error: unknown) {
    return {...createStatus(false, (error instanceof Error) ? error.message : ""), data: []};
  }
}

export async function getShortcut(shortcut_id: number) {
  try {
    const shortcut = await prisma.shortcutManagerShortcuts.findUnique({
      where: {
        id: shortcut_id,
      }
    });
    return {
      ...createStatus(true, "Retrieved Shortcut."),
      data: shortcut 
    };
  } catch (error: unknown) {
    return {...createStatus(false, (error instanceof Error) ? error.message : ""), data: undefined};
  }
}
