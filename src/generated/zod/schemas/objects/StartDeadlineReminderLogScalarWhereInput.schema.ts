import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const startdeadlinereminderlogscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => StartDeadlineReminderLogScalarWhereInputObjectSchema), z.lazy(() => StartDeadlineReminderLogScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StartDeadlineReminderLogScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StartDeadlineReminderLogScalarWhereInputObjectSchema), z.lazy(() => StartDeadlineReminderLogScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  sentAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  taskId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  projectId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  recipientRole: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const StartDeadlineReminderLogScalarWhereInputObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogScalarWhereInput> = startdeadlinereminderlogscalarwhereinputSchema as unknown as z.ZodType<Prisma.StartDeadlineReminderLogScalarWhereInput>;
export const StartDeadlineReminderLogScalarWhereInputObjectZodSchema = startdeadlinereminderlogscalarwhereinputSchema;
