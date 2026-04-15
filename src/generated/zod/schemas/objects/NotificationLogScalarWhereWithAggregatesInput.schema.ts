import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { JsonWithAggregatesFilterObjectSchema as JsonWithAggregatesFilterObjectSchema } from './JsonWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'

const notificationlogscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => NotificationLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => NotificationLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => NotificationLogScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => NotificationLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => NotificationLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  notification: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  taskId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  subTaskId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  commentId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  finished: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  deadline: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const NotificationLogScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.NotificationLogScalarWhereWithAggregatesInput> = notificationlogscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.NotificationLogScalarWhereWithAggregatesInput>;
export const NotificationLogScalarWhereWithAggregatesInputObjectZodSchema = notificationlogscalarwherewithaggregatesinputSchema;
