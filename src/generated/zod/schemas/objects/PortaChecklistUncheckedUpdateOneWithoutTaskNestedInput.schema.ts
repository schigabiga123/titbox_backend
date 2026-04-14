import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PortaChecklistCreateWithoutTaskInputObjectSchema as PortaChecklistCreateWithoutTaskInputObjectSchema } from './PortaChecklistCreateWithoutTaskInput.schema';
import { PortaChecklistUncheckedCreateWithoutTaskInputObjectSchema as PortaChecklistUncheckedCreateWithoutTaskInputObjectSchema } from './PortaChecklistUncheckedCreateWithoutTaskInput.schema';
import { PortaChecklistCreateOrConnectWithoutTaskInputObjectSchema as PortaChecklistCreateOrConnectWithoutTaskInputObjectSchema } from './PortaChecklistCreateOrConnectWithoutTaskInput.schema';
import { PortaChecklistUpsertWithoutTaskInputObjectSchema as PortaChecklistUpsertWithoutTaskInputObjectSchema } from './PortaChecklistUpsertWithoutTaskInput.schema';
import { PortaChecklistWhereInputObjectSchema as PortaChecklistWhereInputObjectSchema } from './PortaChecklistWhereInput.schema';
import { PortaChecklistWhereUniqueInputObjectSchema as PortaChecklistWhereUniqueInputObjectSchema } from './PortaChecklistWhereUniqueInput.schema';
import { PortaChecklistUpdateToOneWithWhereWithoutTaskInputObjectSchema as PortaChecklistUpdateToOneWithWhereWithoutTaskInputObjectSchema } from './PortaChecklistUpdateToOneWithWhereWithoutTaskInput.schema';
import { PortaChecklistUpdateWithoutTaskInputObjectSchema as PortaChecklistUpdateWithoutTaskInputObjectSchema } from './PortaChecklistUpdateWithoutTaskInput.schema';
import { PortaChecklistUncheckedUpdateWithoutTaskInputObjectSchema as PortaChecklistUncheckedUpdateWithoutTaskInputObjectSchema } from './PortaChecklistUncheckedUpdateWithoutTaskInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PortaChecklistCreateWithoutTaskInputObjectSchema), z.lazy(() => PortaChecklistUncheckedCreateWithoutTaskInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PortaChecklistCreateOrConnectWithoutTaskInputObjectSchema).optional(),
  upsert: z.lazy(() => PortaChecklistUpsertWithoutTaskInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => PortaChecklistWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => PortaChecklistWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => PortaChecklistWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PortaChecklistUpdateToOneWithWhereWithoutTaskInputObjectSchema), z.lazy(() => PortaChecklistUpdateWithoutTaskInputObjectSchema), z.lazy(() => PortaChecklistUncheckedUpdateWithoutTaskInputObjectSchema)]).optional()
}).strict();
export const PortaChecklistUncheckedUpdateOneWithoutTaskNestedInputObjectSchema: z.ZodType<Prisma.PortaChecklistUncheckedUpdateOneWithoutTaskNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PortaChecklistUncheckedUpdateOneWithoutTaskNestedInput>;
export const PortaChecklistUncheckedUpdateOneWithoutTaskNestedInputObjectZodSchema = makeSchema();
