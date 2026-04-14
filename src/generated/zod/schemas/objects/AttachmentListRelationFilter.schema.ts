import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AttachmentWhereInputObjectSchema as AttachmentWhereInputObjectSchema } from './AttachmentWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => AttachmentWhereInputObjectSchema).optional(),
  some: z.lazy(() => AttachmentWhereInputObjectSchema).optional(),
  none: z.lazy(() => AttachmentWhereInputObjectSchema).optional()
}).strict();
export const AttachmentListRelationFilterObjectSchema: z.ZodType<Prisma.AttachmentListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentListRelationFilter>;
export const AttachmentListRelationFilterObjectZodSchema = makeSchema();
