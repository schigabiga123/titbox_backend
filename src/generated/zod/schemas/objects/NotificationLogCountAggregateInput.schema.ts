import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  notification: z.literal(true).optional(),
  taskId: z.literal(true).optional(),
  subTaskId: z.literal(true).optional(),
  commentId: z.literal(true).optional(),
  finished: z.literal(true).optional(),
  deadline: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const NotificationLogCountAggregateInputObjectSchema: z.ZodType<Prisma.NotificationLogCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.NotificationLogCountAggregateInputType>;
export const NotificationLogCountAggregateInputObjectZodSchema = makeSchema();
