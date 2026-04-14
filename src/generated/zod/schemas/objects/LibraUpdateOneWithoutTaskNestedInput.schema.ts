import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LibraCreateWithoutTaskInputObjectSchema as LibraCreateWithoutTaskInputObjectSchema } from './LibraCreateWithoutTaskInput.schema';
import { LibraUncheckedCreateWithoutTaskInputObjectSchema as LibraUncheckedCreateWithoutTaskInputObjectSchema } from './LibraUncheckedCreateWithoutTaskInput.schema';
import { LibraCreateOrConnectWithoutTaskInputObjectSchema as LibraCreateOrConnectWithoutTaskInputObjectSchema } from './LibraCreateOrConnectWithoutTaskInput.schema';
import { LibraUpsertWithoutTaskInputObjectSchema as LibraUpsertWithoutTaskInputObjectSchema } from './LibraUpsertWithoutTaskInput.schema';
import { LibraWhereInputObjectSchema as LibraWhereInputObjectSchema } from './LibraWhereInput.schema';
import { LibraWhereUniqueInputObjectSchema as LibraWhereUniqueInputObjectSchema } from './LibraWhereUniqueInput.schema';
import { LibraUpdateToOneWithWhereWithoutTaskInputObjectSchema as LibraUpdateToOneWithWhereWithoutTaskInputObjectSchema } from './LibraUpdateToOneWithWhereWithoutTaskInput.schema';
import { LibraUpdateWithoutTaskInputObjectSchema as LibraUpdateWithoutTaskInputObjectSchema } from './LibraUpdateWithoutTaskInput.schema';
import { LibraUncheckedUpdateWithoutTaskInputObjectSchema as LibraUncheckedUpdateWithoutTaskInputObjectSchema } from './LibraUncheckedUpdateWithoutTaskInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LibraCreateWithoutTaskInputObjectSchema), z.lazy(() => LibraUncheckedCreateWithoutTaskInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LibraCreateOrConnectWithoutTaskInputObjectSchema).optional(),
  upsert: z.lazy(() => LibraUpsertWithoutTaskInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => LibraWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => LibraWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => LibraWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => LibraUpdateToOneWithWhereWithoutTaskInputObjectSchema), z.lazy(() => LibraUpdateWithoutTaskInputObjectSchema), z.lazy(() => LibraUncheckedUpdateWithoutTaskInputObjectSchema)]).optional()
}).strict();
export const LibraUpdateOneWithoutTaskNestedInputObjectSchema: z.ZodType<Prisma.LibraUpdateOneWithoutTaskNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.LibraUpdateOneWithoutTaskNestedInput>;
export const LibraUpdateOneWithoutTaskNestedInputObjectZodSchema = makeSchema();
