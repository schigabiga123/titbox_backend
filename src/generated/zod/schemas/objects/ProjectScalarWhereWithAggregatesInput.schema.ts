import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const projectscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ProjectScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProjectScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProjectScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProjectScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProjectScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  partnerName: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  pocketId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const ProjectScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ProjectScalarWhereWithAggregatesInput> = projectscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ProjectScalarWhereWithAggregatesInput>;
export const ProjectScalarWhereWithAggregatesInputObjectZodSchema = projectscalarwherewithaggregatesinputSchema;
