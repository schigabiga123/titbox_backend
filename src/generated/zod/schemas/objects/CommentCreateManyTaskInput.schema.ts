import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  text: z.string(),
  submittedUserId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional().nullable()
}).strict();
export const CommentCreateManyTaskInputObjectSchema: z.ZodType<Prisma.CommentCreateManyTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentCreateManyTaskInput>;
export const CommentCreateManyTaskInputObjectZodSchema = makeSchema();
