import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PortaChecklistCreateWithoutTaskInputObjectSchema as PortaChecklistCreateWithoutTaskInputObjectSchema } from './PortaChecklistCreateWithoutTaskInput.schema';
import { PortaChecklistUncheckedCreateWithoutTaskInputObjectSchema as PortaChecklistUncheckedCreateWithoutTaskInputObjectSchema } from './PortaChecklistUncheckedCreateWithoutTaskInput.schema';
import { PortaChecklistCreateOrConnectWithoutTaskInputObjectSchema as PortaChecklistCreateOrConnectWithoutTaskInputObjectSchema } from './PortaChecklistCreateOrConnectWithoutTaskInput.schema';
import { PortaChecklistWhereUniqueInputObjectSchema as PortaChecklistWhereUniqueInputObjectSchema } from './PortaChecklistWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PortaChecklistCreateWithoutTaskInputObjectSchema), z.lazy(() => PortaChecklistUncheckedCreateWithoutTaskInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PortaChecklistCreateOrConnectWithoutTaskInputObjectSchema).optional(),
  connect: z.lazy(() => PortaChecklistWhereUniqueInputObjectSchema).optional()
}).strict();
export const PortaChecklistCreateNestedOneWithoutTaskInputObjectSchema: z.ZodType<Prisma.PortaChecklistCreateNestedOneWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.PortaChecklistCreateNestedOneWithoutTaskInput>;
export const PortaChecklistCreateNestedOneWithoutTaskInputObjectZodSchema = makeSchema();
