import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LibraWhereInputObjectSchema as LibraWhereInputObjectSchema } from './LibraWhereInput.schema';
import { LibraUpdateWithoutTaskInputObjectSchema as LibraUpdateWithoutTaskInputObjectSchema } from './LibraUpdateWithoutTaskInput.schema';
import { LibraUncheckedUpdateWithoutTaskInputObjectSchema as LibraUncheckedUpdateWithoutTaskInputObjectSchema } from './LibraUncheckedUpdateWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LibraWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => LibraUpdateWithoutTaskInputObjectSchema), z.lazy(() => LibraUncheckedUpdateWithoutTaskInputObjectSchema)])
}).strict();
export const LibraUpdateToOneWithWhereWithoutTaskInputObjectSchema: z.ZodType<Prisma.LibraUpdateToOneWithWhereWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.LibraUpdateToOneWithWhereWithoutTaskInput>;
export const LibraUpdateToOneWithWhereWithoutTaskInputObjectZodSchema = makeSchema();
