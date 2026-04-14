import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function addDeliveryDescToDeliveryTasks() {
  const deliveryTasks = await prisma.task.findMany({
    where: {
      isPickUp: false,
    },
    select: {
      id: true,
      fields: {
        where: {
          name: "deliveryDesc",
        },
        select: {
          id: true,
        },
      },
    },
  })

  const taskIdsToUpdate = deliveryTasks
    .filter((task) => task.fields.length === 0)
    .map((task) => task.id)

  console.log(`Delivery tasks found: ${deliveryTasks.length}`)
  console.log(`Tasks missing deliveryDesc field: ${taskIdsToUpdate.length}`)

  if (taskIdsToUpdate.length === 0) {
    console.log("No missing deliveryDesc fields found.")
    return
  }

  const result = await prisma.taskField.createMany({
    data: taskIdsToUpdate.map((taskId) => ({
      taskId,
      pocketId: "deliveryDesc",
      name: "deliveryDesc",
      data: null,
      type: "picker",
    })),
  })

  console.log(`Created deliveryDesc fields: ${result.count}`)
}

void addDeliveryDescToDeliveryTasks()
  .catch((error) => {
    console.error("Failed to add deliveryDesc fields to delivery tasks:", error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
