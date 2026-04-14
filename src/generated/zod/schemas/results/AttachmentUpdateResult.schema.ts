import * as z from 'zod';
export const AttachmentUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  url: z.string(),
  type: z.unknown(),
  commentId: z.string().optional(),
  taskFieldId: z.string().optional(),
  taskEventFieldId: z.string().optional(),
  createdAt: z.date().optional(),
  comment: z.unknown().optional(),
  taskField: z.unknown().optional(),
  taskEventField: z.unknown().optional()
}));