import prisma from "@/utils/db";

const prismaHandlers = async () => {
  await prisma.task.create({
    data: {
      content: "wake up",
    },
  });

  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return allTasks;
};

export default async function PrismaExamplePage() {
  const tasks = await prismaHandlers();

  return (
    <div>
      <h1 className="text-7xl">Prisma Example</h1>
      {tasks.map(({ id, content }) => (
        <h2 key={id}>▶️{content}</h2>
      ))}
    </div>
  );
}
