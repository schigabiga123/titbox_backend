import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const commentscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CommentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CommentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CommentScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CommentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CommentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  taskId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  text: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  submittedUserId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const CommentScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CommentScalarWhereWithAggregatesInput> = commentscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CommentScalarWhereWithAggregatesInput>;
export const CommentScalarWhereWithAggregatesInputObjectZodSchema = commentscalarwherewithaggregatesinputSchema;
