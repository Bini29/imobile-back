import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, categoryId } = await req.json();
  const category = await prisma.categoryItem.create({
    data: {
      name: name,
      img: "",
      categoryId: categoryId,
    },
  });

  return NextResponse.json(category);
}
export async function GET(req: Request) {
  const categories = await prisma.categoryItem.findMany();

  return NextResponse.json(categories);
}

export async function DELETE(req: any) {
  const head = req.headers;

  const head_token = head.get("x-id");
  const deleteUsers = await prisma.categoryItem.deleteMany({
    where: {
      id: Number(head_token),
    },
  });

  return NextResponse.json(deleteUsers);
}
