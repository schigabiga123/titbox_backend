import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LibraUpdateWithoutTaskFieldInputObjectSchema as LibraUpdateWithoutTaskFieldInputObjectSchema } from './LibraUpdateWithoutTaskFieldInput.schema';
import { LibraUncheckedUpdateWithoutTaskFieldInputObjectSchema as LibraUncheckedUpdateWithoutTaskFieldInputObjectSchema } from './LibraUncheckedUpdateWithoutTaskFieldInput.schema';
import { LibraCreateWithoutTaskFieldInputObjectSchema as LibraCreateWithoutTaskFieldInputObjectSchema } from './LibraCreateWithoutTaskFieldInput.schema';
import { LibraUncheckedCreateWithoutTaskFieldInputObjectSchema as LibraUncheckedCreateWithoutTaskFieldInputObjectSchema } from './LibraUncheckedCreateWithoutTaskFieldInput.schema';
import { LibraWhereInputObjectSchema as LibraWhereInputObjectSchema } from './LibraWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => LibraUpdateWithoutTaskFieldInputObjectSchema), z.lazy(() => LibraUncheckedUpdateWithoutTaskFieldInputObjectSchema)]),
  create: z.union([z.lazy(() => LibraCreateWithoutTaskFieldInputObjectSchema), z.lazy(() => LibraUncheckedCreateWithoutTaskFieldInputObjectSchema)]),
  where: z.lazy(() => LibraWhereInputObjectSchema).optional()
}).strict();
export const LibraUpsertWithoutTaskFieldInputObjectSchema: z.ZodType<Prisma.LibraUpsertWithoutTaskFieldInput> = makeSchema() as unknown as z.ZodType<Prisma.LibraUpsertWithoutTaskFieldInput>;
export const LibraUpsertWithoutTaskFieldInputObjectZodSchema = makeSchema();
