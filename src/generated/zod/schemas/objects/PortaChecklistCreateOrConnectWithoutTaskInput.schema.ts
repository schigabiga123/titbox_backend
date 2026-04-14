import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PortaChecklistWhereUniqueInputObjectSchema as PortaChecklistWhereUniqueInputObjectSchema } from './PortaChecklistWhereUniqueInput.schema';
import { PortaChecklistCreateWithoutTaskInputObjectSchema as PortaChecklistCreateWithoutTaskInputObjectSchema } from './PortaChecklistCreateWithoutTaskInput.schema';
import { PortaChecklistUncheckedCreateWithoutTaskInputObjectSchema as PortaChecklistUncheckedCreateWithoutTaskInputObjectSchema } from './PortaChecklistUncheckedCreateWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PortaChecklistWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PortaChecklistCreateWithoutTaskInputObjectSchema), z.lazy(() => PortaChecklistUncheckedCreateWithoutTaskInputObjectSchema)])
}).strict();
export const PortaChecklistCreateOrConnectWithoutTaskInputObjectSchema: z.ZodType<Prisma.PortaChecklistCreateOrConnectWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.PortaChecklistCreateOrConnectWithoutTaskInput>;
export const PortaChecklistCreateOrConnectWithoutTaskInputObjectZodSchema = makeSchema();
