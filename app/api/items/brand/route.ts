import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, categoryId, img } = await req.json();
  const category = await prisma.brand.create({
    data: {
      name: name,
      img: img.file.response.name,
      categoryId: categoryId,
    },
  });

  return NextResponse.json(category);
}
export async function GET(req: Request) {
  const categories = await prisma.brand.findMany();

  return NextResponse.json(categories);
}

export async function DELETE(req: any) {
  const head = req.headers;

  const head_token = head.get("x-id");
  const deleteUsers = await prisma.brand.deleteMany({
    where: {
      id: Number(head_token),
    },
  });

  return NextResponse.json(deleteUsers);
}
