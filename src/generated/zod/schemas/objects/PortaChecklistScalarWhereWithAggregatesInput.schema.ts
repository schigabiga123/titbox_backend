import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolNullableWithAggregatesFilterObjectSchema as BoolNullableWithAggregatesFilterObjectSchema } from './BoolNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const portachecklistscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => PortaChecklistScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PortaChecklistScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PortaChecklistScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PortaChecklistScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PortaChecklistScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  taskId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  isUserChecked: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable(),
  isTruckChecked: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable(),
  isTrailerChecked: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable(),
  isTraktorChecked: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable(),
  isBioChecked: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable(),
  isSzondaChecked: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable(),
  isStarted: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable(),
  startedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const PortaChecklistScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.PortaChecklistScalarWhereWithAggregatesInput> = portachecklistscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.PortaChecklistScalarWhereWithAggregatesInput>;
export const PortaChecklistScalarWhereWithAggregatesInputObjectZodSchema = portachecklistscalarwherewithaggregatesinputSchema;
