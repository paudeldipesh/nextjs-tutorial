import prisma from "@/utils/db";

const prismaHandlers = async () => {
  await prisma.task.create({
    data: {
      content: "wake up",
    },
  });
};

export default function PrismaExamplePage() {
  return <div>PrismaExamplePage</div>;
}
