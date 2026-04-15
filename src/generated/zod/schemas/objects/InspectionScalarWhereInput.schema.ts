import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const inspectionscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => InspectionScalarWhereInputObjectSchema), z.lazy(() => InspectionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => InspectionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => InspectionScalarWhereInputObjectSchema), z.lazy(() => InspectionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  taskId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  key: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  checked: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  note: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  data: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const InspectionScalarWhereInputObjectSchema: z.ZodType<Prisma.InspectionScalarWhereInput> = inspectionscalarwhereinputSchema as unknown as z.ZodType<Prisma.InspectionScalarWhereInput>;
export const InspectionScalarWhereInputObjectZodSchema = inspectionscalarwhereinputSchema;
