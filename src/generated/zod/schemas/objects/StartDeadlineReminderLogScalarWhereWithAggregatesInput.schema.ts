import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const startdeadlinereminderlogscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => StartDeadlineReminderLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StartDeadlineReminderLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StartDeadlineReminderLogScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StartDeadlineReminderLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StartDeadlineReminderLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  sentAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  taskId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  projectId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  recipientRole: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const StartDeadlineReminderLogScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogScalarWhereWithAggregatesInput> = startdeadlinereminderlogscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.StartDeadlineReminderLogScalarWhereWithAggregatesInput>;
export const StartDeadlineReminderLogScalarWhereWithAggregatesInputObjectZodSchema = startdeadlinereminderlogscalarwherewithaggregatesinputSchema;
