# GitHub Copilot Prompts for Your Poetry Project

A practical guide to using GitHub Copilot's different modes for your poetry website.

## Understanding Copilot's Three Modes

Look at the dropdown menu in your Copilot panel - you'll see three options:

### Ask Mode (Default - Use This for Planning)

- **What it does**: Answers questions, explains concepts, helps you plan
- **Token usage**: Lower cost, good for learning and exploration
- **Best for**: Understanding requirements, planning your approach, getting explanations

### Edit Mode (For Changing Existing Code)

- **What it does**: Modifies your existing files directly
- **Token usage**: Moderate cost
- **Best for**: Refactoring, fixing errors, updating multiple files at once

### Agent Mode (For Building Features)

- **What it does**: Can create new code, run commands, handle complex tasks
- **Token usage**: Higher cost, but more powerful
- **Best for**: Actually building your project once you know what you want

## Pro Tip: Ask First, Then Do

Start conversations in **Ask mode** to plan, then switch to **Agent mode** to implement. This saves tokens and helps you understand what you're building.

## Using Context with

You can reference files and context using `#`:

- `#file` - to reference a specific file
- `#selection` - to reference selected code
- Type `#` to see all available options

Example: `#file:project-goals.md help me plan HTML that matches this vision`

## Spec 1: Foundation (Start in Ask Mode)

### Understanding the Requirements

```
In Ask mode: What files do I need to create for a basic npm project
with Prettier? Explain what each file does.
```

### Planning Your Setup

```
In Ask mode: I want to format HTML and CSS files with Prettier.
What should go in my package.json scripts section?
```

### Creating the Files (Switch to Agent Mode)

```
In Agent mode: Create a package.json with scripts for formatting
HTML and CSS files with Prettier
```

### Testing Your Setup

```
In Agent mode: Run npm install and test that the format script works
```

## Spec 2: HTML Structure

### Planning First (Ask Mode)

```
#file:project-goals.md Based on this vision, what semantic HTML
elements would best structure a poetry page?
```

### Understanding Semantics (Ask Mode)

```
Why is <article> better than <div> for a poem?
Explain semantic HTML for poetry.
```

### Building the Structure (Agent Mode)

```
#file:project-goals.md Create semantic HTML for my poetry page
following this vision. Use proper heading hierarchy and semantic elements.
```

### Checking Your Work (Ask Mode)

```
#file:index.html Review this HTML for semantic correctness
and accessibility. What could be improved?
```

## Spec 3: CSS Styling

### Design Planning (Ask Mode)

```
#file:project-goals.md Given this aesthetic vision, suggest
a color palette and typography approach
```

### Learning Techniques (Ask Mode)

```
How do I center a poem on the page while keeping it left-aligned?
Explain the CSS approach.
```

### Implementing Styles (Agent or Edit Mode)

```
#file:project-goals.md #file:index.html Create CSS that implements
the minimalist design from my goals
```

### Accessibility Check (Ask Mode)

```
#file:styles.css Are these color combinations WCAG AA compliant?
How can I verify contrast ratios?
```

## Spec 4: Deployment & Documentation

### Pre-Deployment Review (Ask Mode)

```
What should I check before deploying to Netlify?
Give me a pre-flight checklist.
```

### Documentation Help (Edit Mode)

```
#file:copilot-collaboration.md Update this file with reflections
on when each Copilot mode was most helpful
```

### Git Commit Messages (Ask Mode)

```
I changed my CSS typography. Suggest a good git commit message
that follows best practices.
```

## Quick Mode Selection Guide

**Use Ask Mode When:**

- You're not sure how to approach something
- You want to understand a concept
- You're planning before coding
- You need to check if something is correct

**Use Edit Mode When:**

- You have existing code that needs changes
- You want to refactor across multiple files
- You need to fix errors in current code

**Use Agent Mode When:**

- You're ready to create new features
- You need to run terminal commands
- You want Copilot to actually build something
- You're implementing what you planned in Ask mode

## Getting Help from Copilot Itself

Not sure about something? Just ask Copilot:

```
How do I use the #file context feature?
```

```
What's the difference between Edit and Agent mode?
```

```
Show me how to reference multiple files in one prompt
```

## Remember: Start Cheap, Build Smart

1. **Ask Mode**: Plan and understand (cheap)
2. **Agent/Edit Mode**: Build and modify (when you know what you want)
3. **Ask Mode**: Verify and learn from what you built

This approach saves tokens and helps you learn as you build.

## Document Your Mode Usage

In your `copilot-collaboration.md`, note:

- Which mode you used for different tasks
- Why you chose that mode
- What you learned about when each mode is most effective

This reflection helps you become a better AI collaborator!

## Sample Conversation Flow

Here's an example of how to approach a task efficiently:

### Task: Add a decorative border to your poem

1. **Start in Ask Mode:**

   ```
   What CSS techniques can create an elegant border around
   a poem without making it look boxy?
   ```

2. **Refine in Ask Mode:**

   ```
   Show me examples of subtle CSS borders using gradients
   or pseudo-elements
   ```

3. **Implement in Agent/Edit Mode:**

   ```
   #file:css/styles.css Add a subtle decorative border to
   the .poem-container using a gradient border technique
   ```

4. **Verify in Ask Mode:**

   ```
   #file:css/styles.css Does this border technique work
   across all modern browsers?
   ```

## Final Tips

- **Don't fear experimenting** - Ask mode is cheap, use it liberally
- **Build incrementally** - Small changes are easier to debug
- **Save your prompts** - Good prompts can be reused and refined
- **Learn from Copilot's responses** - It often suggests better approaches
- **Trust but verify** - Always test the code Copilot generates

Remember: The goal isn't just to complete the project, but to learn how to collaborate effectively with AI tools. This skill will serve you throughout your development career!
