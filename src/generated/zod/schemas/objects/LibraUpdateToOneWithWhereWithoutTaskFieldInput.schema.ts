import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LibraWhereInputObjectSchema as LibraWhereInputObjectSchema } from './LibraWhereInput.schema';
import { LibraUpdateWithoutTaskFieldInputObjectSchema as LibraUpdateWithoutTaskFieldInputObjectSchema } from './LibraUpdateWithoutTaskFieldInput.schema';
import { LibraUncheckedUpdateWithoutTaskFieldInputObjectSchema as LibraUncheckedUpdateWithoutTaskFieldInputObjectSchema } from './LibraUncheckedUpdateWithoutTaskFieldInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LibraWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => LibraUpdateWithoutTaskFieldInputObjectSchema), z.lazy(() => LibraUncheckedUpdateWithoutTaskFieldInputObjectSchema)])
}).strict();
export const LibraUpdateToOneWithWhereWithoutTaskFieldInputObjectSchema: z.ZodType<Prisma.LibraUpdateToOneWithWhereWithoutTaskFieldInput> = makeSchema() as unknown as z.ZodType<Prisma.LibraUpdateToOneWithWhereWithoutTaskFieldInput>;
export const LibraUpdateToOneWithWhereWithoutTaskFieldInputObjectZodSchema = makeSchema();
