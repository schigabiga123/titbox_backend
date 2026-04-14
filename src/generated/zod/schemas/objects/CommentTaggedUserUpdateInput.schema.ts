import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CommentUpdateOneRequiredWithoutTaggedUsersNestedInputObjectSchema as CommentUpdateOneRequiredWithoutTaggedUsersNestedInputObjectSchema } from './CommentUpdateOneRequiredWithoutTaggedUsersNestedInput.schema'

const makeSchema = () => z.object({
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  comment: z.lazy(() => CommentUpdateOneRequiredWithoutTaggedUsersNestedInputObjectSchema).optional()
}).strict();
export const CommentTaggedUserUpdateInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserUpdateInput>;
export const CommentTaggedUserUpdateInputObjectZodSchema = makeSchema();
