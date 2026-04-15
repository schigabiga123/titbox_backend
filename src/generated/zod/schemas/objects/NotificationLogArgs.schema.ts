import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationLogSelectObjectSchema as NotificationLogSelectObjectSchema } from './NotificationLogSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => NotificationLogSelectObjectSchema).optional()
}).strict();
export const NotificationLogArgsObjectSchema = makeSchema();
export const NotificationLogArgsObjectZodSchema = makeSchema();
