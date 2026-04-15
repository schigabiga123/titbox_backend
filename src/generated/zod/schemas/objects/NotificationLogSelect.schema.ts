import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  notification: z.boolean().optional(),
  taskId: z.boolean().optional(),
  subTaskId: z.boolean().optional(),
  commentId: z.boolean().optional(),
  finished: z.boolean().optional(),
  deadline: z.boolean().optional()
}).strict();
export const NotificationLogSelectObjectSchema: z.ZodType<Prisma.NotificationLogSelect> = makeSchema() as unknown as z.ZodType<Prisma.NotificationLogSelect>;
export const NotificationLogSelectObjectZodSchema = makeSchema();
