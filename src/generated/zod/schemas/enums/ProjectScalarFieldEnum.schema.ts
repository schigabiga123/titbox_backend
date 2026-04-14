import * as z from 'zod';

export const ProjectScalarFieldEnumSchema = z.enum(['id', 'partnerName', 'pocketId', 'title', 'updatedAt'])

export type ProjectScalarFieldEnum = z.infer<typeof ProjectScalarFieldEnumSchema>;