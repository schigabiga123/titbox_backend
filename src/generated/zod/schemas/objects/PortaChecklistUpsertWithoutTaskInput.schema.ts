import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PortaChecklistUpdateWithoutTaskInputObjectSchema as PortaChecklistUpdateWithoutTaskInputObjectSchema } from './PortaChecklistUpdateWithoutTaskInput.schema';
import { PortaChecklistUncheckedUpdateWithoutTaskInputObjectSchema as PortaChecklistUncheckedUpdateWithoutTaskInputObjectSchema } from './PortaChecklistUncheckedUpdateWithoutTaskInput.schema';
import { PortaChecklistCreateWithoutTaskInputObjectSchema as PortaChecklistCreateWithoutTaskInputObjectSchema } from './PortaChecklistCreateWithoutTaskInput.schema';
import { PortaChecklistUncheckedCreateWithoutTaskInputObjectSchema as PortaChecklistUncheckedCreateWithoutTaskInputObjectSchema } from './PortaChecklistUncheckedCreateWithoutTaskInput.schema';
import { PortaChecklistWhereInputObjectSchema as PortaChecklistWhereInputObjectSchema } from './PortaChecklistWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PortaChecklistUpdateWithoutTaskInputObjectSchema), z.lazy(() => PortaChecklistUncheckedUpdateWithoutTaskInputObjectSchema)]),
  create: z.union([z.lazy(() => PortaChecklistCreateWithoutTaskInputObjectSchema), z.lazy(() => PortaChecklistUncheckedCreateWithoutTaskInputObjectSchema)]),
  where: z.lazy(() => PortaChecklistWhereInputObjectSchema).optional()
}).strict();
export const PortaChecklistUpsertWithoutTaskInputObjectSchema: z.ZodType<Prisma.PortaChecklistUpsertWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.PortaChecklistUpsertWithoutTaskInput>;
export const PortaChecklistUpsertWithoutTaskInputObjectZodSchema = makeSchema();
