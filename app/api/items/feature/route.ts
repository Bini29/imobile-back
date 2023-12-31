import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession();
  if (session) {
    const { name, value, itemId } = await req.json();
    const model = await prisma.feature.create({
      data: {
        name: name,
        value: value,
        itemId: itemId,
      },
    });

    return NextResponse.json(model);
  } else {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
export async function GET(req: Request) {
  const head = req.headers;

  const head_token = head.get("x-id");

  if (head_token) {
    const item = await prisma.feature.findMany({
      where: { itemId: Number(head_token) },
    });

    return NextResponse.json(item);
  } else {
    const categories = await prisma.feature.findMany({});

    return NextResponse.json(categories);
  }
}

export async function DELETE(req: any) {
  const head = req.headers;

  const head_token = head.get("x-id");
  const head_tokenf = head.get("f-id");
  const deleteUsers = await prisma.feature.deleteMany({
    where: {
      id: Number(head_token),
    },
  });
  const categories = await prisma.feature.findMany({
    where: { itemId: Number(head_tokenf) },
  });

  return NextResponse.json(categories);
}
