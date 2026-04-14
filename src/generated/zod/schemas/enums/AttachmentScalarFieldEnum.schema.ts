import * as z from 'zod';

export const AttachmentScalarFieldEnumSchema = z.enum(['id', 'url', 'type', 'commentId', 'taskFieldId', 'taskEventFieldId', 'createdAt'])

export type AttachmentScalarFieldEnum = z.infer<typeof AttachmentScalarFieldEnumSchema>;