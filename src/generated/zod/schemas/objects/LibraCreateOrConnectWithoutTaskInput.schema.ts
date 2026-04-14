import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LibraWhereUniqueInputObjectSchema as LibraWhereUniqueInputObjectSchema } from './LibraWhereUniqueInput.schema';
import { LibraCreateWithoutTaskInputObjectSchema as LibraCreateWithoutTaskInputObjectSchema } from './LibraCreateWithoutTaskInput.schema';
import { LibraUncheckedCreateWithoutTaskInputObjectSchema as LibraUncheckedCreateWithoutTaskInputObjectSchema } from './LibraUncheckedCreateWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LibraWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LibraCreateWithoutTaskInputObjectSchema), z.lazy(() => LibraUncheckedCreateWithoutTaskInputObjectSchema)])
}).strict();
export const LibraCreateOrConnectWithoutTaskInputObjectSchema: z.ZodType<Prisma.LibraCreateOrConnectWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.LibraCreateOrConnectWithoutTaskInput>;
export const LibraCreateOrConnectWithoutTaskInputObjectZodSchema = makeSchema();
