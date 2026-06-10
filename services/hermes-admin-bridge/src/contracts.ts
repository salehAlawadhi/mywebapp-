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
