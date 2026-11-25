// Ship It Friday entry: writes the commit line to $MAKEFUN_OUTPUT_DIR/entry.txt
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), 'hotfix: production is down, so I deployed the fix straight to production\n');
