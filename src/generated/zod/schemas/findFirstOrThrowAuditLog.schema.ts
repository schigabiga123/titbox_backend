import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AuditLogOrderByWithRelationInputObjectSchema as AuditLogOrderByWithRelationInputObjectSchema } from './objects/AuditLogOrderByWithRelationInput.schema';
import { AuditLogWhereInputObjectSchema as AuditLogWhereInputObjectSchema } from './objects/AuditLogWhereInput.schema';
import { AuditLogWhereUniqueInputObjectSchema as AuditLogWhereUniqueInputObjectSchema } from './objects/AuditLogWhereUniqueInput.schema';
import { AuditLogScalarFieldEnumSchema } from './enums/AuditLogScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AuditLogFindFirstOrThrowSelectSchema: z.ZodType<Prisma.AuditLogSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    success: z.boolean().optional(),
    method: z.boolean().optional(),
    path: z.boolean().optional(),
    routePath: z.boolean().optional(),
    responseStatus: z.boolean().optional(),
    firebaseUid: z.boolean().optional(),
    firebaseEmail: z.boolean().optional(),
    errorMessage: z.boolean().optional(),
    params: z.boolean().optional(),
    query: z.boolean().optional(),
    body: z.boolean().optional(),
    responseBody: z.boolean().optional(),
    resourceId: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AuditLogSelect>;

export const AuditLogFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    success: z.boolean().optional(),
    method: z.boolean().optional(),
    path: z.boolean().optional(),
    routePath: z.boolean().optional(),
    responseStatus: z.boolean().optional(),
    firebaseUid: z.boolean().optional(),
    firebaseEmail: z.boolean().optional(),
    errorMessage: z.boolean().optional(),
    params: z.boolean().optional(),
    query: z.boolean().optional(),
    body: z.boolean().optional(),
    responseBody: z.boolean().optional(),
    resourceId: z.boolean().optional()
  }).strict();

export const AuditLogFindFirstOrThrowSchema: z.ZodType<Prisma.AuditLogFindFirstOrThrowArgs> = z.object({ select: AuditLogFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([AuditLogOrderByWithRelationInputObjectSchema, AuditLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: AuditLogWhereInputObjectSchema.optional(), cursor: AuditLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AuditLogScalarFieldEnumSchema, AuditLogScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AuditLogFindFirstOrThrowArgs>;

export const AuditLogFindFirstOrThrowZodSchema = z.object({ select: AuditLogFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([AuditLogOrderByWithRelationInputObjectSchema, AuditLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: AuditLogWhereInputObjectSchema.optional(), cursor: AuditLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AuditLogScalarFieldEnumSchema, AuditLogScalarFieldEnumSchema.array()]).optional() }).strict();