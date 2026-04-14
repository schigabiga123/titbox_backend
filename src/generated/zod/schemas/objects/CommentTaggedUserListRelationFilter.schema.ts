import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentTaggedUserWhereInputObjectSchema as CommentTaggedUserWhereInputObjectSchema } from './CommentTaggedUserWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CommentTaggedUserWhereInputObjectSchema).optional(),
  some: z.lazy(() => CommentTaggedUserWhereInputObjectSchema).optional(),
  none: z.lazy(() => CommentTaggedUserWhereInputObjectSchema).optional()
}).strict();
export const CommentTaggedUserListRelationFilterObjectSchema: z.ZodType<Prisma.CommentTaggedUserListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CommentTaggedUserListRelationFilter>;
export const CommentTaggedUserListRelationFilterObjectZodSchema = makeSchema();
