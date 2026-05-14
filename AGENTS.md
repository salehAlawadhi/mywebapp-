<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
<!-- BEGIN:loop-agent-rules -->

# Agent Execution Loop

## Prime Rule
Never say "done" until the work is implemented, tested, inspected, and verified.

## Loop

1. Understand
- Read the user's request.
- Identify the exact goal.
- Identify affected files.
- Identify possible risks.
- Do not code yet.

2. Plan
- Write a short execution plan.
- Break the work into small steps.
- Mention which files will be changed.
- Avoid large rewrites unless necessary.

3. Implement
- Make the smallest correct change.
- Preserve existing working behavior.
- Do not remove features unless required.
- Keep code readable and maintainable.

4. Run
- Run the project or the relevant command.
- Run tests if available.
- If no tests exist, run a manual verification path.

5. Inspect
- Check terminal output.
- Check browser output if UI is involved.
- Check logs.
- Check for TypeScript/Python/lint/runtime errors.
- Check if the result matches the original request.

6. Fix
- If any issue appears, fix it.
- Repeat Run → Inspect → Fix until clean.

7. Verify
Before saying done, confirm:
- The app runs.
- No visible errors.
- No console errors for UI work.
- No broken imports.
- No missing environment variables.
- No placeholder/TODO left.
- The requested feature works.

8. Report
Final response must include:
- What was changed.
- Files modified.
- How it was tested.
- Remaining risks if any.
- Next recommended step.
<!-- END: loop-agent-rules -->