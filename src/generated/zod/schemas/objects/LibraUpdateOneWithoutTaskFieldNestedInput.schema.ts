import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LibraCreateWithoutTaskFieldInputObjectSchema as LibraCreateWithoutTaskFieldInputObjectSchema } from './LibraCreateWithoutTaskFieldInput.schema';
import { LibraUncheckedCreateWithoutTaskFieldInputObjectSchema as LibraUncheckedCreateWithoutTaskFieldInputObjectSchema } from './LibraUncheckedCreateWithoutTaskFieldInput.schema';
import { LibraCreateOrConnectWithoutTaskFieldInputObjectSchema as LibraCreateOrConnectWithoutTaskFieldInputObjectSchema } from './LibraCreateOrConnectWithoutTaskFieldInput.schema';
import { LibraUpsertWithoutTaskFieldInputObjectSchema as LibraUpsertWithoutTaskFieldInputObjectSchema } from './LibraUpsertWithoutTaskFieldInput.schema';
import { LibraWhereInputObjectSchema as LibraWhereInputObjectSchema } from './LibraWhereInput.schema';
import { LibraWhereUniqueInputObjectSchema as LibraWhereUniqueInputObjectSchema } from './LibraWhereUniqueInput.schema';
import { LibraUpdateToOneWithWhereWithoutTaskFieldInputObjectSchema as LibraUpdateToOneWithWhereWithoutTaskFieldInputObjectSchema } from './LibraUpdateToOneWithWhereWithoutTaskFieldInput.schema';
import { LibraUpdateWithoutTaskFieldInputObjectSchema as LibraUpdateWithoutTaskFieldInputObjectSchema } from './LibraUpdateWithoutTaskFieldInput.schema';
import { LibraUncheckedUpdateWithoutTaskFieldInputObjectSchema as LibraUncheckedUpdateWithoutTaskFieldInputObjectSchema } from './LibraUncheckedUpdateWithoutTaskFieldInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LibraCreateWithoutTaskFieldInputObjectSchema), z.lazy(() => LibraUncheckedCreateWithoutTaskFieldInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LibraCreateOrConnectWithoutTaskFieldInputObjectSchema).optional(),
  upsert: z.lazy(() => LibraUpsertWithoutTaskFieldInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => LibraWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => LibraWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => LibraWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => LibraUpdateToOneWithWhereWithoutTaskFieldInputObjectSchema), z.lazy(() => LibraUpdateWithoutTaskFieldInputObjectSchema), z.lazy(() => LibraUncheckedUpdateWithoutTaskFieldInputObjectSchema)]).optional()
}).strict();
export const LibraUpdateOneWithoutTaskFieldNestedInputObjectSchema: z.ZodType<Prisma.LibraUpdateOneWithoutTaskFieldNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.LibraUpdateOneWithoutTaskFieldNestedInput>;
export const LibraUpdateOneWithoutTaskFieldNestedInputObjectZodSchema = makeSchema();
