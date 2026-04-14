import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  groupId: z.string(),
  title: z.string(),
  desc: z.string().optional().nullable(),
  status: z.string().optional().nullable(),
  deadline: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional().nullable(),
  startReminderSentAt: z.coerce.date().optional().nullable(),
  fullAddress: z.string().optional().nullable(),
  lat: z.number().optional().nullable(),
  lng: z.number().optional().nullable(),
  isPickUp: z.boolean().optional().nullable(),
  accepted: z.boolean().optional().nullable(),
  hanging: z.boolean().optional().nullable(),
  assignedUserId: z.string().optional().nullable(),
  assignedUserId2: z.string().optional().nullable(),
  submittedUserId: z.string().optional().nullable()
}).strict();
export const TaskCreateManyProjectInputObjectSchema: z.ZodType<Prisma.TaskCreateManyProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateManyProjectInput>;
export const TaskCreateManyProjectInputObjectZodSchema = makeSchema();
