import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MenuService } from './menu/menu.service';
import { UsersService } from './users/users.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const menu = app.get(MenuService);
  const users = app.get(UsersService);

  console.log('Seeding demo data...');
  try {
    await users.createUser({ name: 'Demo User', email: 'demo@burger.com', password: 'password123' });
  } catch(e){}
  await menu.create({ title: 'Classic Burger', description: 'Beef patty, lettuce, tomato, cheese', price: 8.5 });
  await menu.create({ title: 'Double Cheese', description: 'Two patties, double cheese', price: 11.0 });
  console.log('Done.');
  await app.close();
}
bootstrap();
