/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

module.exports = {
    async rewrites() {
      return [
        {
          source: '/:clienteId/:logradouroId',
          destination: '/logradouros/editarLogradouro',
        },
      ];
    },
  };


// const path = require('path');

// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = {
//   async redirects() {
//     return [
//       {
//         // source: '/enfermeiros/:id', // Rota de origem, onde :id é o parâmetro dinâmico para o ID da tarefa
//         // destination: '/enfermeiros/:id',    // Rota de destino, onde :id será substituído pelo valor do parâmetro da rota de origem
//         // permanent: false,            // Defina como true se essa redireção for permanente (301), ou false se for temporária (307)
//       },
//     ];
//   },
// };
