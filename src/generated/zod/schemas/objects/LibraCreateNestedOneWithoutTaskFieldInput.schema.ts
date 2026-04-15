import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LibraCreateWithoutTaskFieldInputObjectSchema as LibraCreateWithoutTaskFieldInputObjectSchema } from './LibraCreateWithoutTaskFieldInput.schema';
import { LibraUncheckedCreateWithoutTaskFieldInputObjectSchema as LibraUncheckedCreateWithoutTaskFieldInputObjectSchema } from './LibraUncheckedCreateWithoutTaskFieldInput.schema';
import { LibraCreateOrConnectWithoutTaskFieldInputObjectSchema as LibraCreateOrConnectWithoutTaskFieldInputObjectSchema } from './LibraCreateOrConnectWithoutTaskFieldInput.schema';
import { LibraWhereUniqueInputObjectSchema as LibraWhereUniqueInputObjectSchema } from './LibraWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LibraCreateWithoutTaskFieldInputObjectSchema), z.lazy(() => LibraUncheckedCreateWithoutTaskFieldInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LibraCreateOrConnectWithoutTaskFieldInputObjectSchema).optional(),
  connect: z.lazy(() => LibraWhereUniqueInputObjectSchema).optional()
}).strict();
export const LibraCreateNestedOneWithoutTaskFieldInputObjectSchema: z.ZodType<Prisma.LibraCreateNestedOneWithoutTaskFieldInput> = makeSchema() as unknown as z.ZodType<Prisma.LibraCreateNestedOneWithoutTaskFieldInput>;
export const LibraCreateNestedOneWithoutTaskFieldInputObjectZodSchema = makeSchema();
