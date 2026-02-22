import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST() {
  // revalidateTag("restaurant");
  revalidatePath("/restaurant");

  return NextResponse.json({
    message: "post api is hit",
    time: new Date().toLocaleTimeString("bn-BD"),
  });
}
