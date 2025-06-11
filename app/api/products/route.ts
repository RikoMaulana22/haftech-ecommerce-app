import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { name, description, price, image, userId } = await req.json();

  if (
    !name || !description || !price || !image || !userId ||
    typeof userId !== "string"
  ) {
    return new Response(JSON.stringify({ message: "Invalid input" }), { status: 400 });
  }

  const product = await prisma.product.create({
    data: {
      name,
      description,
      price: Number(price),
      image,
      userId, 
     
    },
  });

  return new Response(JSON.stringify(product), { status: 201 });
}
