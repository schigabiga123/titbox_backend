import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const errorLogRepo = (prisma as any).errorLog as {
  create(args: unknown): Promise<unknown>
}

type CreateErrorLogInput = {
  userId: string
  url: string
  statusCode?: number | null
  data?: string | null
}

export async function createErrorLog(input: CreateErrorLogInput) {
  return errorLogRepo.create({
    data: {
      userId: input.userId,
      url: input.url,
      statusCode: input.statusCode ?? null,
      data: input.data ?? null,
    },
  })
}
