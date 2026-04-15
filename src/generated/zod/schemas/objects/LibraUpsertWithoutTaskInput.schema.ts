import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LibraUpdateWithoutTaskInputObjectSchema as LibraUpdateWithoutTaskInputObjectSchema } from './LibraUpdateWithoutTaskInput.schema';
import { LibraUncheckedUpdateWithoutTaskInputObjectSchema as LibraUncheckedUpdateWithoutTaskInputObjectSchema } from './LibraUncheckedUpdateWithoutTaskInput.schema';
import { LibraCreateWithoutTaskInputObjectSchema as LibraCreateWithoutTaskInputObjectSchema } from './LibraCreateWithoutTaskInput.schema';
import { LibraUncheckedCreateWithoutTaskInputObjectSchema as LibraUncheckedCreateWithoutTaskInputObjectSchema } from './LibraUncheckedCreateWithoutTaskInput.schema';
import { LibraWhereInputObjectSchema as LibraWhereInputObjectSchema } from './LibraWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => LibraUpdateWithoutTaskInputObjectSchema), z.lazy(() => LibraUncheckedUpdateWithoutTaskInputObjectSchema)]),
  create: z.union([z.lazy(() => LibraCreateWithoutTaskInputObjectSchema), z.lazy(() => LibraUncheckedCreateWithoutTaskInputObjectSchema)]),
  where: z.lazy(() => LibraWhereInputObjectSchema).optional()
}).strict();
export const LibraUpsertWithoutTaskInputObjectSchema: z.ZodType<Prisma.LibraUpsertWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.LibraUpsertWithoutTaskInput>;
export const LibraUpsertWithoutTaskInputObjectZodSchema = makeSchema();
