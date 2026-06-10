import { z } from "zod";

export const dispatchRunSchema = z.object({
  taskId: z.string().uuid(),
  projectId: z.string().uuid(),
  handoffVersion: z.number().int().positive(),
  title: z.string().trim().min(1).max(200),
  instructions: z.string().trim().min(1).max(12_000),
  handoff: z.string().trim().min(1).max(50_000),
  metadata: z.record(z.string(), z.string()).default({}),
});

export type DispatchRunInput = z.infer<typeof dispatchRunSchema>;

export const hermesRunResponseSchema = z.object({
  run_id: z.string().min(1),
  status: z.string().min(1),
});

export const hermesRunStatusSchema = z.object({
  object: z.string().optional(),
  run_id: z.string().min(1),
  status: z.string().min(1),
  session_id: z.string().optional().nullable(),
  model: z.string().optional(),
  output: z.string().optional().nullable(),
  usage: z
    .object({
      input_tokens: z.number().int().nonnegative().optional(),
      output_tokens: z.number().int().nonnegative().optional(),
      total_tokens: z.number().int().nonnegative().optional(),
    })
    .optional(),
});

export type HermesRunStatus = z.infer<typeof hermesRunStatusSchema>;

export const notificationEventSchema = z.object({
  eventId: z.string().uuid(),
  eventType: z.enum([
    "TASK_READY",
    "APPROVAL_REQUIRED",
    "TASK_COMPLETED",
    "TASK_FAILED",
  ]),
  occurredAt: z.string().datetime(),
  taskId: z.string().uuid().optional(),
  projectId: z.string().uuid().optional(),
  message: z.string().trim().min(1).max(4_000),
  channels: z
    .array(z.enum(["telegram", "whatsapp", "email"]))
    .min(1)
    .max(3),
  data: z.record(z.string(), z.unknown()).default({}),
});

export type NotificationEvent = z.infer<typeof notificationEventSchema>;
