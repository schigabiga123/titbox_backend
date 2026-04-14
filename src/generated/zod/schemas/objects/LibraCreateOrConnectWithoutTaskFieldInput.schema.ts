import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LibraWhereUniqueInputObjectSchema as LibraWhereUniqueInputObjectSchema } from './LibraWhereUniqueInput.schema';
import { LibraCreateWithoutTaskFieldInputObjectSchema as LibraCreateWithoutTaskFieldInputObjectSchema } from './LibraCreateWithoutTaskFieldInput.schema';
import { LibraUncheckedCreateWithoutTaskFieldInputObjectSchema as LibraUncheckedCreateWithoutTaskFieldInputObjectSchema } from './LibraUncheckedCreateWithoutTaskFieldInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LibraWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LibraCreateWithoutTaskFieldInputObjectSchema), z.lazy(() => LibraUncheckedCreateWithoutTaskFieldInputObjectSchema)])
}).strict();
export const LibraCreateOrConnectWithoutTaskFieldInputObjectSchema: z.ZodType<Prisma.LibraCreateOrConnectWithoutTaskFieldInput> = makeSchema() as unknown as z.ZodType<Prisma.LibraCreateOrConnectWithoutTaskFieldInput>;
export const LibraCreateOrConnectWithoutTaskFieldInputObjectZodSchema = makeSchema();
