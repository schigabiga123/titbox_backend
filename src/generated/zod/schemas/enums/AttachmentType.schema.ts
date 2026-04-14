import * as z from 'zod';

export const AttachmentTypeSchema = z.enum(['photo', 'file'])

export type AttachmentType = z.infer<typeof AttachmentTypeSchema>;