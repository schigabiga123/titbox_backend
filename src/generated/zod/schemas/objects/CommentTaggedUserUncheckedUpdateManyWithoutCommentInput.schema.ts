import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CommentTaggedUserUncheckedUpdateManyWithoutCommentInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserUncheckedUpdateManyWithoutCommentInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserUncheckedUpdateManyWithoutCommentInput>;
export const CommentTaggedUserUncheckedUpdateManyWithoutCommentInputObjectZodSchema = makeSchema();
