/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  output: 'export', // Para exportar como estático
  distDir: 'out',   // Define o diretório de saída como 'out'
}

module.exports = nextConfig;
