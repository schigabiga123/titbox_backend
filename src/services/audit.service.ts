import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient()

function toJsonValue(value: unknown): Prisma.InputJsonValue | undefined {
  if (value === undefined) {
    return undefined
  }

  if (value === null) {
    return Prisma.JsonNull as unknown as Prisma.InputJsonValue
  }

  return JSON.parse(JSON.stringify(value)) as Prisma.InputJsonValue
}

function extractResourceId(responseBody: unknown) {
  if (responseBody && typeof responseBody === "object" && "id" in responseBody) {
    const id = (responseBody as Record<string, unknown>).id
    return typeof id === "string" ? id : null
  }

  return null
}

type CreateAuditLogInput = {
  success: boolean
  method: string
  path: string
  routePath?: string
  responseStatus: number
  firebaseUid?: string | null
  firebaseEmail?: string | null
  errorMessage?: string | null
  params?: unknown
  query?: unknown
  body?: unknown
  responseBody?: unknown
}

export async function createAuditLog(input: CreateAuditLogInput) {
  await prisma.auditLog.create({
    data: {
      success: input.success,
      method: input.method,
      path: input.path,
      routePath: input.routePath ?? null,
      responseStatus: input.responseStatus,
      firebaseUid: input.firebaseUid ?? null,
      firebaseEmail: input.firebaseEmail ?? null,
      errorMessage: input.errorMessage ?? null,
      params: toJsonValue(input.params),
      query: toJsonValue(input.query),
      body: toJsonValue(input.body),
      responseBody: toJsonValue(input.responseBody),
      resourceId: extractResourceId(input.responseBody),
    } as Prisma.AuditLogUncheckedCreateInput,
  })
}
