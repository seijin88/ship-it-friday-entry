// Ship It Friday entry: writes the commit line to $MAKEFUN_OUTPUT_DIR/entry.txt
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), 'deployed to prod at 4:59pm on a friday after the agent said "looks good to me"\n');
