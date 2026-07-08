import { defineConfig } from 'mdxlint';

export default defineConfig({
  plugins: [['remark-frontmatter', ['yaml']], 'unified-consistency'],
  settings: {
    bullet: '-',
    emphasis: '_',
    strong: '*',
    rule: '-',
  },
});
