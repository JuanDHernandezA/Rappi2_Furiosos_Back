import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TipoUnidadModule } from './tipo_unidad/tipo_unidad.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from './config/configuration';
import { IngredienteModule } from './ingrediente/ingrediente.module';
import { CategoriaProductoModule } from './categoria_producto/categoria_producto.module';
import { ProductoModule } from './producto/producto.module';
import { ClienteModule } from './cliente/cliente.module';
import { RestauranteModule } from './restaurante/restaurante.module';
import { MenuModule } from './menu/menu.module';
import { PedidoModule } from './pedido/pedido.module';
import { DetallePedidoModule } from './detalle_pedido/detalle_pedido.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: env.DB_HOST,
      port: env.DB_PORT,
      username: env.DB_USER,
      password: env.DB_PASS,
      database: env.DB_NAME,
      autoLoadEntities: true,
      synchronize: !!env.DB_SYNC,
    }),
    TipoUnidadModule,
    IngredienteModule,
    CategoriaProductoModule,
    ProductoModule,
    ClienteModule,
    RestauranteModule,
    MenuModule,
    PedidoModule,
    DetallePedidoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
