/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return config;
}

export default defineNextConfig({
  experimental: {
    appDir: true,
    fontLoaders: [
      {
        loader: '@next/font/google', options: {
          subsets: ['latin']
        }
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|frag|vert)$/,
      use: ['ts-shader-loader'],
    });

    return config;
  },
});