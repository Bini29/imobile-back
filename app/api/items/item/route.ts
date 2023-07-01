import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession();
  if (session) {
    const { name, colorName, img, memory, prise, modelId } = await req.json();
    const category = await prisma.item.create({
      data: {
        name: name,
        img: img,
        prise: prise,
        modelId: modelId,
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
  const head = req.headers;

  const head_token = head.get("x-id");

  if (head_token) {
    const item = await prisma.item.findUnique({
      where: { id: Number(head_token) },
      include: {
        items: true,
      },
    });

    return NextResponse.json(item);
  } else {
    const categories = await prisma.item.findMany({
      include: {
        items: true,
      },
    });

    return NextResponse.json(categories);
  }
}
export async function PUT(req: Request) {
  const session = await getServerSession();
  if (session) {
    const { name, colorName, img, memory, prise, modelId, id } =
      await req.json();
    const category = await prisma.item.updateMany({
      where: {
        id: id,
      },
      data: {
        name: name,
        img: img,
        prise: prise,
        modelId: modelId,
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

export async function DELETE(req: any) {
  const head = req.headers;

  const head_token = head.get("x-id");

  const deleteItemFeature = await prisma.feature.deleteMany({
    where: {
      itemId: Number(head_token),
    },
  });
  const deleteItem = await prisma.item.delete({
    where: {
      id: Number(head_token),
    },
  });
  const categories = await prisma.item.findMany();

  return NextResponse.json(categories);
}
