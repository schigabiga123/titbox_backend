import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PortaChecklistWhereInputObjectSchema as PortaChecklistWhereInputObjectSchema } from './PortaChecklistWhereInput.schema';
import { PortaChecklistUpdateWithoutTaskInputObjectSchema as PortaChecklistUpdateWithoutTaskInputObjectSchema } from './PortaChecklistUpdateWithoutTaskInput.schema';
import { PortaChecklistUncheckedUpdateWithoutTaskInputObjectSchema as PortaChecklistUncheckedUpdateWithoutTaskInputObjectSchema } from './PortaChecklistUncheckedUpdateWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PortaChecklistWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PortaChecklistUpdateWithoutTaskInputObjectSchema), z.lazy(() => PortaChecklistUncheckedUpdateWithoutTaskInputObjectSchema)])
}).strict();
export const PortaChecklistUpdateToOneWithWhereWithoutTaskInputObjectSchema: z.ZodType<Prisma.PortaChecklistUpdateToOneWithWhereWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.PortaChecklistUpdateToOneWithWhereWithoutTaskInput>;
export const PortaChecklistUpdateToOneWithWhereWithoutTaskInputObjectZodSchema = makeSchema();
