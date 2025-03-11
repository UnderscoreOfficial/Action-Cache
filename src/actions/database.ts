"use server"

import { prisma } from "@/util/prisma";
import { z } from "zod";
import {
  category_schema,
  status_schema,
  action_schema,
} from "@/util/schemas";
import { Categories, Actions } from "@prisma/client";
import { createStatus } from "@/util/util";

export type ActionsReturn = {
  data: Actions[],
} & z.infer<typeof status_schema>;

export type CategoriesReturn = {
  data: Categories[],
} & z.infer<typeof status_schema>;

// creating
export async function createCategory(params: z.infer<typeof category_schema>) {
  try {
    const category = await prisma.categories.create({
      data: {
        name: params.name,
      },
    });
    return {
      ...createStatus(true, "Category Created."),
      data: category
    };
  } catch (error: unknown) {
    return { ...createStatus(false, (error instanceof Error) ? error.message : ""), data: undefined };
  }
}

export async function createAction(params: z.infer<typeof action_schema>) {
  try {
    const action = await prisma.actions.create({
      data: {
        type: params.type,
        name: params.name,
        location: params.location,
        description: params.description,
        category_id: params.category_id,
      },
    });
    return {
      ...createStatus(true, "Action Created."),
      data: action
    }
  } catch (error: unknown) {
    return { ...createStatus(false, (error instanceof Error) ? error.message : ""), data: undefined };
  }
}

// deleting
export async function deleteAction(action_id: number) {
  try {
    await prisma.actions.delete({
      where: {
        id: action_id
      },
    });
    return createStatus(true, "Action Deleted.");
  } catch (error: unknown) {
    return createStatus(false, (error instanceof Error) ? error.message : "");
  }
}

// user must delete (all of many) in the one to many relation before category can be deleted
export async function deleteCategory(category_id: number) {
  try {
    await prisma.categories.delete({
      where: {
        id: category_id
      },
    });
    return createStatus(true, "Category Deleted.");
  } catch (error: unknown) {
    return createStatus(false, (error instanceof Error) ? error.message : "");
  }
}

// updating
export async function updateAction(params: z.infer<typeof action_schema>, action_id: number) {
  try {
    await prisma.actions.update({
      where: {
        id: action_id
      },
      data: {
        type: params.type,
        name: params.name,
        description: params.description,
        category_id: params.category_id,
        location: params.location,
      },
    });
    return createStatus(true, "Action Updated.");
  } catch (error: unknown) {
    return createStatus(false, (error instanceof Error) ? error.message : "");
  }
}

export async function updateCategory(params: z.infer<typeof category_schema>, category_id: number) {
  try {
    await prisma.categories.update({
      where: {
        id: category_id
      },
      data: {
        name: params.name,
      },
    });
    return createStatus(true, "Category Updated.");
  } catch (error: unknown) {
    return createStatus(false, (error instanceof Error) ? error.message : "");
  }
}

// fetching data
export async function getCategories() {
  try {
    const categories = await prisma.categories.findMany({});
    return { ...createStatus(true, "Retrieved Categories."), data: categories };
  } catch (error: unknown) {
    return { ...createStatus(false, (error instanceof Error) ? error.message : ""), data: [] }
  }
}

export async function getCategory(category_id: number) {
  try {
    const category = await prisma.categories.findUnique({
      where: {
        id: category_id,
      }
    });
    return { ...createStatus(true, "Retrieved Category."), data: category };
  } catch (error: unknown) {
    return { ...createStatus(false, (error instanceof Error) ? error.message : ""), data: undefined }
  }
}

export async function getActions(category_id: number) {
  try {
    const actions = await prisma.actions.findMany({
      orderBy: {
        id: "desc",
      },
      where: {
        category_id: category_id,
      }
    });
    return { ...createStatus(true, "Retrieved Actions."), data: actions };
  } catch (error: unknown) {
    return { ...createStatus(false, (error instanceof Error) ? error.message : ""), data: [] };
  }
}

export async function getAction(action_id: number) {
  try {
    const action = await prisma.actions.findUnique({
      where: {
        id: action_id,
      }
    });
    return { ...createStatus(true, "Retrieved Action."), data: action };
  } catch (error: unknown) {
    return { ...createStatus(false, (error instanceof Error) ? error.message : ""), data: undefined };
  }
}
