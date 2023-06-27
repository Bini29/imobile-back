import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession();
  if (session) {
    const { name } = await req.json();
    const category = await prisma.model.create({
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
  const categories = await prisma.model.findMany({
    include: {
      items: true,
    },
  });

  return NextResponse.json(categories);
}

export async function DELETE(req: any) {
  const head = req.headers;

  const head_token = head.get("x-id");
  const deleteUsers = await prisma.model.deleteMany({
    where: {
      id: Number(head_token),
    },
  });
  const categories = await prisma.model.findMany();

  return NextResponse.json(categories);
}
