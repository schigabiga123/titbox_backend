import * as z from 'zod';
import { AttachmentTypeSchema } from '../../enums/AttachmentType.schema';
// prettier-ignore
export const AttachmentResultSchema = z.object({
    id: z.string(),
    url: z.string(),
    type: AttachmentTypeSchema,
    commentId: z.string().nullable(),
    taskFieldId: z.string().nullable(),
    taskEventFieldId: z.string().nullable(),
    createdAt: z.date().nullable(),
    comment: z.unknown().nullable(),
    taskField: z.unknown().nullable(),
    taskEventField: z.unknown().nullable()
}).strict();

export type AttachmentResultType = z.infer<typeof AttachmentResultSchema>;
