import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  groupId: z.literal(true).optional(),
  projectId: z.literal(true).optional(),
  title: z.literal(true).optional(),
  desc: z.literal(true).optional(),
  status: z.literal(true).optional(),
  deadline: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  startReminderSentAt: z.literal(true).optional(),
  fullAddress: z.literal(true).optional(),
  lat: z.literal(true).optional(),
  lng: z.literal(true).optional(),
  isPickUp: z.literal(true).optional(),
  accepted: z.literal(true).optional(),
  hanging: z.literal(true).optional(),
  parkingSpot: z.literal(true).optional(),
  assignedUserId: z.literal(true).optional(),
  assignedUserId2: z.literal(true).optional(),
  submittedUserId: z.literal(true).optional()
}).strict();
export const TaskMinAggregateInputObjectSchema: z.ZodType<Prisma.TaskMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TaskMinAggregateInputType>;
export const TaskMinAggregateInputObjectZodSchema = makeSchema();
