import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { TaskScalarRelationFilterObjectSchema as TaskScalarRelationFilterObjectSchema } from './TaskScalarRelationFilter.schema';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema'

const portachecklistwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PortaChecklistWhereInputObjectSchema), z.lazy(() => PortaChecklistWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PortaChecklistWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PortaChecklistWhereInputObjectSchema), z.lazy(() => PortaChecklistWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  taskId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isUserChecked: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  isTruckChecked: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  isTrailerChecked: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  isTraktorChecked: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  isBioChecked: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  isSzondaChecked: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  isStarted: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  startedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  task: z.union([z.lazy(() => TaskScalarRelationFilterObjectSchema), z.lazy(() => TaskWhereInputObjectSchema)]).optional()
}).strict();
export const PortaChecklistWhereInputObjectSchema: z.ZodType<Prisma.PortaChecklistWhereInput> = portachecklistwhereinputSchema as unknown as z.ZodType<Prisma.PortaChecklistWhereInput>;
export const PortaChecklistWhereInputObjectZodSchema = portachecklistwhereinputSchema;
