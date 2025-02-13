import express from 'express';
const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retorna a lista de usuários
 *     description: Retorna todos os usuários cadastrados no sistema.
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'John Doe' }]);
});

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retorna um usuário específico
 *     description: Retorna um usuário com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário retornado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuário não encontrado.
 */
router.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  res.json({ id: userId, name: 'John Doe' });
});

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do usuário.
 *         name:
 *           type: string
 *           description: Nome do usuário.
 *       example:
 *         id: 1
 *         name: John Doe
 */
export default router;