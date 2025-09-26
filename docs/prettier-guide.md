# What is Prettier?

A quick guide to understanding code formatting with Prettier.

## The Problem Prettier Solves

Have you ever argued with teammates about:

- Tabs vs spaces?
- Where to put curly braces?
- How many characters per line?
- Single quotes vs double quotes?

**Prettier ends these debates forever** by automatically formatting your code to consistent standards.

## What Prettier Does

Prettier is an **opinionated code formatter** that:

- 🎨 **Reformats your code** automatically when you save
- 🧹 **Cleans up messy spacing** and inconsistent indentation
- 📏 **Enforces consistent style** across your entire project
- ⚡ **Saves time** by eliminating manual formatting

## Before and After Example

### Your HTML Before Prettier

```html
<div>
  <h1>My Poem</h1>
  <p class="author">By Jane Doe</p>
  <section>
    <p>First line of the poem</p>
    <p>Second line here</p>
  </section>
</div>
```

### After Running Prettier

```html
<div>
  <h1>My Poem</h1>
  <p class="author">By Jane Doe</p>
  <section>
    <p>First line of the poem</p>
    <p>Second line here</p>
  </section>
</div>
```

## How to Use Prettier in This Project

### Option 1: Command Line (Required for Assignment)

```bash
# First, install dependencies
npm install

# Then format your files
npm run format
```

This will format all your HTML and CSS files at once.

### Option 2: VS Code Extension (Highly Recommended!)

1. **Install the Prettier extension** in VS Code:
   - Open Extensions panel (`Cmd+Shift+X` on Mac, `Ctrl+Shift+X` on Windows)
   - Search for "Prettier - Code formatter"
   - Install the one by Prettier (it has millions of downloads)

2. **Enable format on save** (optional but amazing):
   - Open VS Code settings (`Cmd+,` on Mac, `Ctrl+,` on Windows)
   - Search for "format on save"
   - Check the box for "Editor: Format On Save"
   - Now Prettier runs automatically every time you save!

3. **Format manually** if needed:
   - Right-click in any file and choose "Format Document"
   - Or use `Shift+Alt+F` (Windows) or `Shift+Option+F` (Mac)

💡 **Pro Tip:** With the extension installed and format-on-save enabled, you'll never have to think about formatting again!

## Your .prettierrc Configuration

Your project includes a `.prettierrc` file that controls how Prettier formats your code. Here's a simple example:

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": false
}
```

This tells Prettier:

- Keep lines under 80 characters
- Use 2 spaces for indentation
- Use spaces, not tabs
- Include semicolons in CSS
- Use double quotes in HTML attributes

## Why This Matters for Your Poetry Project

1. **Focus on content, not formatting** - Spend time choosing the perfect poem, not fixing indentation
2. **Clean, professional code** - Your HTML will look consistently formatted
3. **Better collaboration** - If working with others, everyone's code looks the same
4. **Learning best practices** - Prettier teaches you standard formatting patterns

## Pro Tips

- 🚀 Run `npm run format` before every git commit
- 📝 Don't fight Prettier - let it do its job
- 👀 Review the changes Prettier makes to learn formatting patterns
- 💡 Ask Copilot: "What did Prettier change in my file and why?"

## Common Questions

## Customization

You can customize Prettier's formatting rules by editing your `.prettierrc` file. For example:

```json
{
  "printWidth": 100,
  "singleQuote": true,
  "semi": false
}
```

- `printWidth`: Set maximum line length (default is 80)
- `singleQuote`: Use single quotes instead of double quotes
- `semi`: Add or remove semicolons

See the [Prettier documentation](https://prettier.io/docs/en/options.html) for all available options.

## Troubleshooting

**Prettier isn't working? Try these steps:**

1. Make sure you've run `npm install` to install dependencies.
2. Check that the Prettier extension is installed and enabled in VS Code.
3. Verify that "Format On Save" is enabled in VS Code settings.
4. If `npm run format` doesn't work, check your `package.json` for the correct script.
5. Reload VS Code or restart your computer if changes don't take effect.

If you still have issues, ask for help or check the [Prettier troubleshooting guide](https://prettier.io/docs/en/troubleshooting.html).

## Frequently Asked Questions

**Q: Can I change Prettier's rules?**
A: Yes, by modifying `.prettierrc`. See the Customization section above.

**Q: What if I don't like how Prettier formatted something?**
A: Trust the tool - consistency is more important than personal preference.

**Q: Do professional developers use Prettier?**
A: Yes! It's used by Facebook, PayPal, Discord, and thousands of other companies.

## The Bottom Line

Prettier is like having a helpful assistant that instantly cleans up your code. You write it, Prettier makes it beautiful. This lets you focus on what really matters - building your poetry website!

---

_Remember: Good code isn't just code that works - it's code that's easy to read and maintain. Prettier helps you achieve both._
