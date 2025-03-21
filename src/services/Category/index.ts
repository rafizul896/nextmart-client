"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createCategory = async (data: FormData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: data,
    });

    revalidateTag("Category");
    return res.json();
  } catch (err: any) {
    return Error(err);
  }
};

export const getAllCategories = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/category?page=1&limit=10`,
      {
        method: "GET",
        next: {
          tags: ["Category"],
        },
      }
    );

    return res.json();
  } catch (err: any) {
    return Error(err);
  }
};

export const deleteCategory = async (categoryId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/category/${categoryId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    
    revalidateTag("Category");
    return res.json();
  } catch (err: any) {
    return Error(err);
  }
};
