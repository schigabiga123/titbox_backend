import * as z from 'zod';
import { AttachmentTypeSchema } from '../../enums/AttachmentType.schema';
// prettier-ignore
export const AttachmentInputSchema = z.object({
    id: z.string(),
    url: z.string(),
    type: AttachmentTypeSchema,
    commentId: z.string().optional().nullable(),
    taskFieldId: z.string().optional().nullable(),
    taskEventFieldId: z.string().optional().nullable(),
    createdAt: z.date().optional().nullable(),
    comment: z.unknown().optional().nullable(),
    taskField: z.unknown().optional().nullable(),
    taskEventField: z.unknown().optional().nullable()
}).strict();

export type AttachmentInputType = z.infer<typeof AttachmentInputSchema>;
