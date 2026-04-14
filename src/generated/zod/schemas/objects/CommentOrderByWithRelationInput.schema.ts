import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TaskOrderByWithRelationInputObjectSchema as TaskOrderByWithRelationInputObjectSchema } from './TaskOrderByWithRelationInput.schema';
import { CommentTaggedUserOrderByRelationAggregateInputObjectSchema as CommentTaggedUserOrderByRelationAggregateInputObjectSchema } from './CommentTaggedUserOrderByRelationAggregateInput.schema';
import { AttachmentOrderByRelationAggregateInputObjectSchema as AttachmentOrderByRelationAggregateInputObjectSchema } from './AttachmentOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  taskId: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  submittedUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  task: z.lazy(() => TaskOrderByWithRelationInputObjectSchema).optional(),
  taggedUsers: z.lazy(() => CommentTaggedUserOrderByRelationAggregateInputObjectSchema).optional(),
  attachments: z.lazy(() => AttachmentOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CommentOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CommentOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentOrderByWithRelationInput>;
export const CommentOrderByWithRelationInputObjectZodSchema = makeSchema();
