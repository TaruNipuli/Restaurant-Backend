import request from 'supertest';
import app from '../../src/app.js'; 
import promisePool from '../../src/utils/database.js'; 


jest.mock('../../src/utils/upload-config.js', () => ({
  single: jest.fn().mockImplementation(() => (req, res, next) => next()), 
}));


jest.mock('../../src/utils/database.js');

describe('Menu Router', () => {
 
  it('GET /api/v1/menus should return 200 and an array of menus', async () => {
    promisePool.execute.mockResolvedValueOnce([[{ id: 1, name: 'Menu 1' }]]); 

    const res = await request(app).get('/api/v1/menus');

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0]).toHaveProperty('name', 'Menu 1');
  });

 
  it('GET /api/v1/menus/:id should return 200 and a menu with dishes and allergens', async () => {
    promisePool.execute
      .mockResolvedValueOnce([[{ id: 1, name: 'Menu 1' }]]) 
      .mockResolvedValueOnce([[{ id: 1, menu_id: 1, name: 'Dish 1' }]]) 
      .mockResolvedValueOnce([[{ name: 'Allergen 1' }]]); 

    const res = await request(app).get('/api/v1/menus/1');

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('name', 'Menu 1');
    expect(res.body.dishes).toHaveLength(1);
    expect(res.body.dishes[0]).toHaveProperty('name', 'Dish 1');
    expect(res.body.dishes[0].allergens).toHaveLength(1);
  });

  
  it('POST /api/v1/menus should return 201 when a new menu is created', async () => {
    const menuData = {
      restaurant_id: 1,
      name: 'Menu 1',
      description: 'Delicious menu',
      image: 'menu1.jpg',
    };

    promisePool.execute.mockResolvedValueOnce([{ insertId: 1 }]); 

    const res = await request(app)
      .post('/api/v1/menus')
      .field('name', menuData.name)
      .field('description', menuData.description)
      .field('restaurant_id', menuData.restaurant_id)
      .attach('image', 'path/to/image.jpg'); 

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id', 1);
    expect(res.body.name).toBe(menuData.name);
    expect(res.body.description).toBe(menuData.description);
  });

 
  it('PUT /api/v1/menus/:id should return 200 and updated menu details', async () => {
    const menuData = {
      name: 'Updated Menu 1',
      description: 'Updated description',
      restaurant_id: 1,
    };

    promisePool.execute.mockResolvedValueOnce([{ affectedRows: 1 }]); 

    const res = await request(app)
      .put('/api/v1/menus/1')
      .field('name', menuData.name)
      .field('description', menuData.description)
      .field('restaurant_id', menuData.restaurant_id)
      .attach('image', 'path/to/image.jpg'); 

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('name', menuData.name);
    expect(res.body.description).toBe(menuData.description);
  });
