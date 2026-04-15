import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectArgsObjectSchema as ProjectArgsObjectSchema } from './ProjectArgs.schema';
import { CommentFindManySchema as CommentFindManySchema } from '../findManyComment.schema';
import { TaskFieldFindManySchema as TaskFieldFindManySchema } from '../findManyTaskField.schema';
import { InspectionFindManySchema as InspectionFindManySchema } from '../findManyInspection.schema';
import { PortaChecklistArgsObjectSchema as PortaChecklistArgsObjectSchema } from './PortaChecklistArgs.schema';
import { LibraArgsObjectSchema as LibraArgsObjectSchema } from './LibraArgs.schema';
import { TaskEventFindManySchema as TaskEventFindManySchema } from '../findManyTaskEvent.schema';
import { TaskCountOutputTypeArgsObjectSchema as TaskCountOutputTypeArgsObjectSchema } from './TaskCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  project: z.union([z.boolean(), z.lazy(() => ProjectArgsObjectSchema)]).optional(),
  comments: z.union([z.boolean(), z.lazy(() => CommentFindManySchema)]).optional(),
  fields: z.union([z.boolean(), z.lazy(() => TaskFieldFindManySchema)]).optional(),
  inspections: z.union([z.boolean(), z.lazy(() => InspectionFindManySchema)]).optional(),
  portaChecklist: z.union([z.boolean(), z.lazy(() => PortaChecklistArgsObjectSchema)]).optional(),
  libra: z.union([z.boolean(), z.lazy(() => LibraArgsObjectSchema)]).optional(),
  events: z.union([z.boolean(), z.lazy(() => TaskEventFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TaskCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TaskIncludeObjectSchema: z.ZodType<Prisma.TaskInclude> = makeSchema() as unknown as z.ZodType<Prisma.TaskInclude>;
export const TaskIncludeObjectZodSchema = makeSchema();
