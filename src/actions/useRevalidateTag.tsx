"use server";
import { revalidateTag } from "next/cache";

export default async function useRevalidateTag(tag: string) {
  revalidateTag(tag);
}
