// Ship It Friday entry: writes the one commit line to /output/entry.txt
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), 'I reviewed the diff. I chose not to understand it.\n');
