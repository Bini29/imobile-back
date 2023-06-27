import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { v4 } from "uuid";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const uuid = v4();
  const file: File | null = data.get("file") as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  file.type;
  console.log(file.type);

  // filename: function (req, file, cb) {
  //   cb(null, file.fieldname + "-" + Date.now()+".jpg")
  // }
  // With the file data in the buffer, you can do whatever you want with it.
  // For this, we'll just write it to the filesystem in a new location
  const path = `./public/uploads/${uuid + file.name}`;
  await writeFile(path, buffer);
  console.log(`open ${path} to see the uploaded file`);

  return NextResponse.json({ success: true, name: uuid + file.name });
}
