import * as z from 'zod';

export const CommentTaggedUserScalarFieldEnumSchema = z.enum(['commentId', 'userId'])

export type CommentTaggedUserScalarFieldEnum = z.infer<typeof CommentTaggedUserScalarFieldEnumSchema>;