import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentCreateNestedOneWithoutTaggedUsersInputObjectSchema as CommentCreateNestedOneWithoutTaggedUsersInputObjectSchema } from './CommentCreateNestedOneWithoutTaggedUsersInput.schema'

const makeSchema = () => z.object({
  userId: z.string(),
  comment: z.lazy(() => CommentCreateNestedOneWithoutTaggedUsersInputObjectSchema)
}).strict();
export const CommentTaggedUserCreateInputObjectSchema: z.ZodType<Prisma.CommentTaggedUserCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserCreateInput>;
export const CommentTaggedUserCreateInputObjectZodSchema = makeSchema();
