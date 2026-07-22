```markdown
# technical_resume Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns and conventions used in the `technical_resume` TypeScript codebase. You'll learn about file naming, import/export styles, commit message conventions, and how to structure and run tests. This guide is ideal for contributors aiming for consistency and maintainability in this repository.

## Coding Conventions

### File Naming
- Use **kebab-case** for all file names.
  - Example:  
    ```
    user-profile.ts
    resume-builder.test.ts
    ```

### Import Style
- Use **relative imports** for all modules.
  - Example:
    ```typescript
    import { buildResume } from './resume-builder';
    ```

### Export Style
- Use **named exports** exclusively.
  - Example:
    ```typescript
    // In resume-builder.ts
    export function buildResume(data: ResumeData) { ... }
    ```

### Commit Messages
- Follow **Conventional Commits**.
- Use prefixes such as `docs`.
- Keep commit messages concise (average ~41 characters).
  - Example:
    ```
    docs: update README with usage instructions
    ```

## Workflows

### Documenting Changes
**Trigger:** When updating documentation or comments  
**Command:** `/document-change`

1. Make your documentation updates in the relevant `.md` or source files.
2. Use a conventional commit with the `docs` prefix.
   - Example: `docs: add API usage section to README`
3. Push your changes and open a pull request if required.

## Testing Patterns

- Test files use the pattern: `*.test.*`
  - Example: `resume-builder.test.ts`
- The testing framework is **unknown**; check project scripts or documentation for specifics.
- Place test files alongside the modules they test or in a dedicated test directory.
- Example test structure:
  ```typescript
  // resume-builder.test.ts
  import { buildResume } from './resume-builder';

  describe('buildResume', () => {
    it('should generate a resume object', () => {
      // test implementation
    });
  });
  ```

## Commands
| Command            | Purpose                                      |
|--------------------|----------------------------------------------|
| /document-change   | Document changes and commit with `docs` type |
```
