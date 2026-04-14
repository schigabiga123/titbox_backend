import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  commentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CommentTaggedUserUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserUncheckedUpdateInput>;
export const CommentTaggedUserUncheckedUpdateInputObjectZodSchema = makeSchema();
