import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LibraCreateWithoutTaskInputObjectSchema as LibraCreateWithoutTaskInputObjectSchema } from './LibraCreateWithoutTaskInput.schema';
import { LibraUncheckedCreateWithoutTaskInputObjectSchema as LibraUncheckedCreateWithoutTaskInputObjectSchema } from './LibraUncheckedCreateWithoutTaskInput.schema';
import { LibraCreateOrConnectWithoutTaskInputObjectSchema as LibraCreateOrConnectWithoutTaskInputObjectSchema } from './LibraCreateOrConnectWithoutTaskInput.schema';
import { LibraWhereUniqueInputObjectSchema as LibraWhereUniqueInputObjectSchema } from './LibraWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LibraCreateWithoutTaskInputObjectSchema), z.lazy(() => LibraUncheckedCreateWithoutTaskInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LibraCreateOrConnectWithoutTaskInputObjectSchema).optional(),
  connect: z.lazy(() => LibraWhereUniqueInputObjectSchema).optional()
}).strict();
export const LibraCreateNestedOneWithoutTaskInputObjectSchema: z.ZodType<Prisma.LibraCreateNestedOneWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.LibraCreateNestedOneWithoutTaskInput>;
export const LibraCreateNestedOneWithoutTaskInputObjectZodSchema = makeSchema();
