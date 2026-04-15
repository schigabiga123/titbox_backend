import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const NotificationLogWhereUniqueInputObjectSchema: z.ZodType<Prisma.NotificationLogWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationLogWhereUniqueInput>;
export const NotificationLogWhereUniqueInputObjectZodSchema = makeSchema();
