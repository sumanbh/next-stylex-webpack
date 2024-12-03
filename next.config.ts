import type { NextConfig } from 'next';
import { withStyleX } from 'stylex-webpack/next';
import path from 'node:path';

const nextConfig: NextConfig = {
  transpilePackages: ['@stylexjs/open-props'],
};

export default withStyleX({
  stylexOption: {
    runtimeInjection: false,
    genConditionalClasses: true,
    treeshakeCompensation: true,
    unstable_moduleResolution: {
      type: 'commonJS',
      rootDir: path.join(__dirname),
    },
  },
})(nextConfig);
