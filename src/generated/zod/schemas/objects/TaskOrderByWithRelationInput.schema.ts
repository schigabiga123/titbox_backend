import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProjectOrderByWithRelationInputObjectSchema as ProjectOrderByWithRelationInputObjectSchema } from './ProjectOrderByWithRelationInput.schema';
import { CommentOrderByRelationAggregateInputObjectSchema as CommentOrderByRelationAggregateInputObjectSchema } from './CommentOrderByRelationAggregateInput.schema';
import { TaskFieldOrderByRelationAggregateInputObjectSchema as TaskFieldOrderByRelationAggregateInputObjectSchema } from './TaskFieldOrderByRelationAggregateInput.schema';
import { InspectionOrderByRelationAggregateInputObjectSchema as InspectionOrderByRelationAggregateInputObjectSchema } from './InspectionOrderByRelationAggregateInput.schema';
import { PortaChecklistOrderByWithRelationInputObjectSchema as PortaChecklistOrderByWithRelationInputObjectSchema } from './PortaChecklistOrderByWithRelationInput.schema';
import { LibraOrderByWithRelationInputObjectSchema as LibraOrderByWithRelationInputObjectSchema } from './LibraOrderByWithRelationInput.schema';
import { TaskEventOrderByRelationAggregateInputObjectSchema as TaskEventOrderByRelationAggregateInputObjectSchema } from './TaskEventOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  groupId: SortOrderSchema.optional(),
  projectId: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  desc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deadline: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  startReminderSentAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  fullAddress: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  lat: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  lng: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isPickUp: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  accepted: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  hanging: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  assignedUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  assignedUserId2: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  submittedUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputObjectSchema).optional(),
  comments: z.lazy(() => CommentOrderByRelationAggregateInputObjectSchema).optional(),
  fields: z.lazy(() => TaskFieldOrderByRelationAggregateInputObjectSchema).optional(),
  inspections: z.lazy(() => InspectionOrderByRelationAggregateInputObjectSchema).optional(),
  portaChecklist: z.lazy(() => PortaChecklistOrderByWithRelationInputObjectSchema).optional(),
  libra: z.lazy(() => LibraOrderByWithRelationInputObjectSchema).optional(),
  events: z.lazy(() => TaskEventOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const TaskOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TaskOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskOrderByWithRelationInput>;
export const TaskOrderByWithRelationInputObjectZodSchema = makeSchema();
