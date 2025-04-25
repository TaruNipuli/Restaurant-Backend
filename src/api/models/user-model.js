import promisePool from "../../utils/database.js";

/* mock data
const userList = [
    {
      user_id: 3609,
      name: 'John Doe',
      email: 'john@metropolia.fi',
      phone_number: '0405783535',
      password: 'password',
      role: 'user'
     },
     {
      user_id: 3608,
      name: 'Vin Diesel',
      email: 'vin@metropolia.fi',
      phone_number: '0404672323',
      password: 'password',
      role: 'user'
     }
  ];*/
  
  const listAllUsers = async () => {
    const [rows] = await promisePool.execute(
      'SELECT * FROM User');
    console.log('rows', rows);
    return rows;
  };
  
  const findUserById = async (id) => {
  try {
      console.log('Finding user with ID:', id); // Log the ID being searched
    const [rows] = await promisePool.execute(
      'SELECT * FROM User WHERE id = ?',
    [id]
  );
    console.log('Query result:', rows); // Log the query result
     if (rows.length === 0) {
        return false; // No user found
     }
     return rows[0]; // Return the user data
    } catch (error) {
      console.error('Error in findUserById:', error.message); // Log any errors
      throw error; // Rethrow the error to be handled by the caller
    }
  };
  
  const addUser = async (user) => { // provide only these in the body: name, email, phone_number, password
    const {name, email, phone_number, password, role = 'customer'} = user;
    const sql = `INSERT INTO User (name, email, phone_number, password, role)
                VALUES (?, ?, ?, ?, ?)`;
    const params = [name, email, phone_number, password, role];
    const rows = await promisePool.execute(sql, params);
    console.log('rows', rows);
    if (rows[0].affectedRows === 0) {
      return false;
    }
    return {user_id: rows[0].insertId};
  };
  
  const putUserById = async (user, id) => {
    const sql = promisePool.format(`UPDATE User SET ? WHERE id = ?`, 
      [user, id,]);
      const rows = await promisePool.execute(sql);
      console.log('rows', rows);
       if (rows.affectedRows === 0) {
          return false;
       }
       return {message: 'success'};
    };
  
  const deleteUserById = async (id) => {
    const [rows] = await promisePool.execute('DELETE FROM User WHERE id = ?', [id]);
    console.log('rows', rows);
     if (rows.affectedRows === 0) {
        return false;
     }
     return {message: 'success'};
    };
  
  export { listAllUsers, findUserById, addUser, putUserById, deleteUserById};