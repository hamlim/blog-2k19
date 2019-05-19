# Matt Hamlin's Blog

This is a simple blog setup using Gatsby and MDX.

### Getting Started

- Development:

```sh
yarn develop
```

### Creating a Blog Post

- Create a file within `src/pages/posts` in the appropriate current year and
  month
- This file should have an MDX extension
- The file must have a frontmatter section with the following fields:

  - `title`
  - `publishDate`

- Import the `Footer` component, and render it at the bottom of the page
- Add the MDX content for the blog post

### Drafts

All mdx files with the `.draft.mdx` extension will be skipped over for building
the website.
