import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession();
  if (session) {
    const { name } = await req.json();
    const category = await prisma.category.create({
      data: {
        name: name,
      },
    });

    return NextResponse.json(category);
  } else {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
export async function GET(req: Request) {
  const categories = await prisma.category.findMany({
    include: {
      items: true,
    },
  });

  return NextResponse.json(categories);
}

export async function DELETE(req: any) {
  const head = req.headers;

  const head_token = head.get("x-id");
  const deleteBrand = await prisma.brand.deleteMany({
    where: {
      categoryId: Number(head_token),
    },
  });
  const deleteUsers = await prisma.category.delete({
    where: {
      id: Number(head_token),
    },
  });
  const categories = await prisma.category.findMany();

  return NextResponse.json(categories);
}
