import db from './config/database';

async function exemplo() {
  try {
    const [rows] = await db.execute('SELECT * FROM sua_tabela');
    console.log(rows);
  } catch (error) {
    console.error('Erro:', error);
  }
} 