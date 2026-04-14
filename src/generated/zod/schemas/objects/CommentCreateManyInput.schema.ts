import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  taskId: z.string(),
  text: z.string(),
  submittedUserId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional().nullable()
}).strict();
export const CommentCreateManyInputObjectSchema: z.ZodType<Prisma.CommentCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentCreateManyInput>;
export const CommentCreateManyInputObjectZodSchema = makeSchema();
