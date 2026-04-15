import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentScalarWhereInputObjectSchema as CommentScalarWhereInputObjectSchema } from './CommentScalarWhereInput.schema';
import { CommentUpdateManyMutationInputObjectSchema as CommentUpdateManyMutationInputObjectSchema } from './CommentUpdateManyMutationInput.schema';
import { CommentUncheckedUpdateManyWithoutTaskInputObjectSchema as CommentUncheckedUpdateManyWithoutTaskInputObjectSchema } from './CommentUncheckedUpdateManyWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CommentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CommentUpdateManyMutationInputObjectSchema), z.lazy(() => CommentUncheckedUpdateManyWithoutTaskInputObjectSchema)])
}).strict();
export const CommentUpdateManyWithWhereWithoutTaskInputObjectSchema: z.ZodType<Prisma.CommentUpdateManyWithWhereWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUpdateManyWithWhereWithoutTaskInput>;
export const CommentUpdateManyWithWhereWithoutTaskInputObjectZodSchema = makeSchema();
