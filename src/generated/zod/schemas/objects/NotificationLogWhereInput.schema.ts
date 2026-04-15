import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema'

const notificationlogwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => NotificationLogWhereInputObjectSchema), z.lazy(() => NotificationLogWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => NotificationLogWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => NotificationLogWhereInputObjectSchema), z.lazy(() => NotificationLogWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  notification: z.lazy(() => JsonFilterObjectSchema).optional(),
  taskId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  subTaskId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  commentId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  finished: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  deadline: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const NotificationLogWhereInputObjectSchema: z.ZodType<Prisma.NotificationLogWhereInput> = notificationlogwhereinputSchema as unknown as z.ZodType<Prisma.NotificationLogWhereInput>;
export const NotificationLogWhereInputObjectZodSchema = notificationlogwhereinputSchema;
