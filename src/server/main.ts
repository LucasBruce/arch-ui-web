// // src/server/main.ts
// import fastifyCors from '@fastify/cors';
// import Fastify from 'fastify';
// import  { LokiFsStructuredAdapter } from 'lokijs';

// // const LokiFsStructuredAdapter = require('lokijs/src/loki-fs-structured-adapter');

// export type IUsers = {
//   id: string;
//   name: string;
//   job: string;
//   duties: IDuty[];
// };

// export type IDuty = {
//   id: string;
//   title: string;
//   description: string;
//   owner: {
//     id: string;
//     name: string;
//     corporateEmail: string;
//     job: string;
//   };
// };

// const adapter = new LokiFsStructuredAdapter();

// // Inicializa o LokiJS com persistência opcional
// const db = new Loki('src/server/db/loki.db.json', {
//   autoload: true,
//   autoloadCallback: initDB,
//   autosave: true,
//   autosaveInterval: 5000, // salva a cada 5 segundos
// });

// let users: Collection<IUsers>;

// function initDB() {
//   users = db.getCollection<IUsers>('users');
//   if (!users) {
//     users = db.addCollection<IUsers>('users', { unique: ['id'] });
//   }
//   console.log('📦 LokiJS carregado e pronto!');
// }

// // Inicializa Fastify
// const app = Fastify({ logger: true });
// app.register(fastifyCors);

// // ➕ Adicionar usuário
// app.post('/users', async (request, reply) => {
//   const user = request.body as IUsers;
//   users.insert(user);
//   db.saveDatabase();
//   return { success: true, id: user.id };
// });

// // 🔍 Consultar usuário por ID
// app.get('/users/:id', async (request, reply) => {
//   const { id } = request.params as { id: string };
//   const user = users.findOne({ id });
//   if (!user) {
//     reply.status(404);
//     return { error: 'User not found' };
//   }
//   return user;
// });

// // 📜 Listar todos
// app.get('/users', async () => {
//   return users.find();
// });

// // 🧹 Limpar cache e excluir arquivo
// import fs from 'fs';
// app.delete('/cache/clear', async () => {
//   users.clear();
//   db.saveDatabase();
//   const file = 'src/server/db/loki.db.json';
//   if (fs.existsSync(file)) {
//     fs.unlinkSync(file);
//   }
//   return { success: true };
// });

// // Porta padrão
// const port = Number(process.env['PORT'] || 4000);
// app.listen({ port, host: '0.0.0.0' }, (err) => {
//   if (err) throw err;
//   console.log(`🚀 Fastify + LokiJS rodando na porta ${port}`);
// });
