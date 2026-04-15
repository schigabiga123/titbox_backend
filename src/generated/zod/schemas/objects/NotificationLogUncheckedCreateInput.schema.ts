import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  userId: z.string(),
  notification: z.union([JsonNullValueInputSchema, jsonSchema]),
  taskId: z.string(),
  subTaskId: z.string().optional().nullable(),
  commentId: z.string().optional().nullable(),
  finished: z.boolean().optional(),
  deadline: z.boolean().optional()
}).strict();
export const NotificationLogUncheckedCreateInputObjectSchema: z.ZodType<Prisma.NotificationLogUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationLogUncheckedCreateInput>;
export const NotificationLogUncheckedCreateInputObjectZodSchema = makeSchema();
