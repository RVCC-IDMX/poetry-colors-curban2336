# Poetry Interpretation Page

Welcome to your Poetry Interpretation project! This project will teach you professional web development workflows using GitHub Issues as specifications.

## Project Overview

You'll create a beautiful webpage displaying a poem of your choice, using modern web development tools and practices. This project uses GitHub Issues to track requirements - each issue represents a specification you must complete.

## Getting Started

### Step 1: Initialize Your Specifications

1. Go to the **Issues** tab in your repository
2. Click "New Issue"
3. Select "Initialize Specifications" template
4. Submit the issue (don't change the title!)
5. GitHub Actions will automatically create 4 specification issues for you
6. The original issue will close automatically

### Step 2: Complete Each Specification

You'll have 4 specifications to complete:

1. **Professional Tooling Setup** - Set up npm and Prettier (see `docs/prettier-guide.md` for what Prettier does)
2. **Semantic HTML Structure** - Create accessible, semantic HTML
3. **CSS Typography & Layout** - Design a beautiful, responsive layout
4. **Documentation & Deployment** - Document your work and deploy to Netlify

### Step 3: Track Your Progress

- Each specification starts with the label `status:todo`
- When you complete ALL requirements in a specification, change the label to `status:ready-for-review`
- Check every box in every issue - this is pass/fail with no partial credit

## Project Requirements

### Choosing Your Poem

Use the Poem from the Poetry Planning assignment

### Documentation Structure

Your project should follow this structure:

```
your-project/
├── project-goals.md                    # Your vision from the discussion assignment
├── index.html                          # Your poem page
├── css/                                # Styles folder
│   └── styles.css                      # Your styles
├── package.json                        # NPM configuration
├── .prettierrc                         # Prettier config
├── .gitignore                          # Git ignore file
├── README.md                           # This file (update it!)
├── copilot-collaboration.md            # Your AI collaboration log
└── docs/                               # Documentation folder
    ├── copilot-prompts.md              # Helpful prompts for each specification
    ├── copilot-collaboration-template.md # Template for documenting AI work
    ├── prettier-guide.md               # What Prettier does and why it helps
    └── evidence/                       # Only 2 screenshots required:
        ├── w3c-validation.png
        └── netlify-live.png
```

## Using GitHub Copilot

You're encouraged to use GitHub Copilot's three modes to help you learn and build:

- **Ask Mode** - For understanding concepts and planning (uses fewer tokens)
- **Agent Mode** - For building features and generating code (uses more tokens)
- **Edit Mode** - For modifying existing code across files

📚 **Need help with prompts?** Check out `docs/copilot-prompts.md` for specific prompts and examples for each specification!

Document your experience in `copilot-collaboration.md` using the template provided in `docs/copilot-collaboration-template.md`. Keep it simple - just 3-5 key interactions showing which mode you used and what you learned.

Reference your files using `#file:` syntax (e.g., `#file:project-goals.md`) to give Copilot context about your specific project.

## Deployment Instructions

### Setting Up Netlify

1. Create a free account at [netlify.com](https://www.netlify.com)
2. Connect your GitHub repository
3. Deploy your site
4. Customize your site name (no random strings!)
5. Add the live URL to this README

### Your Live Site

**Netlify URL:** [[Snowy-Evening by Robert Frost](https://snowyevening-robertfrost.netlify.app/)]

## Technologies Used

[Update this section as you work]

- HTML5
- CSS3
- JS
- npm
- Prettier (see `docs/prettier-guide.md` for details)
- GitHub Copilot (Ask, Agent, and Edit modes)

## Design Decisions

[Update this section with your choices]

Explain at least 2 design decisions you made:

1. Why did you choose your fonts?
   The fonts selected were easy to read at any of the adjusted sizes they would grow or shrink to. This was done to ensure that the content of the webpage would be accessible to all readers regardless of screen size. The title font was selected for the aesthetic synergy with the base font, present a sort of united front from the webpage as a whole.

2. Why did you choose your color scheme?
   It reflected the wintery astmosphere of the poem, as well as catering to accessibility. The whites and greys also allow for amazing contrast. Having friends of mine with color blindness check the sight confirmed this choice as the best.

## Completion Checklist

This project is PASS/FAIL. To pass, you must:

- [ ] Complete ALL requirements in ALL 4 specification issues
- [ ] Check every box in every specification
- [ ] Provide exactly 2 screenshots in docs/evidence/
- [ ] Deploy successfully to Netlify with a custom name
- [ ] Complete copilot-collaboration.md using the template (3-5 interactions)

### Evidence Requirements

Your repository and live site are your primary evidence. Only 2 screenshots required in `docs/evidence/`:

1. **w3c-validation.png** - W3C validator showing 0 errors (Spec 2)
2. **netlify-live.png** - Your deployed site (Spec 4)

## Need Help?

- Review the specification issues carefully
- Use GitHub Copilot (try Ask mode for understanding, Agent mode for building)
- Reach out to your team or instructor
- Remember: Your repository and live site are your main evidence

---

Good luck with your project! Remember: every checkbox must be completed to pass. Take your time, use the tools available, and create something you're proud of!
