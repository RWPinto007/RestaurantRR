import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class DeliveryGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log('Client connected:', client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('Client disconnected:', client.id);
  }

  // client sends { orderId, lat, lng }
  @SubscribeMessage('location:update')
  handleLocationUpdate(@MessageBody() payload: { orderId: string; lat: number; lng: number }) {
    // Broadcast to clients listening to this order
    this.server.to(payload.orderId).emit('location:changed', payload);
    return { ok: true };
  }

  // join order room
  @SubscribeMessage('order:join')
  handleJoin(client: Socket, payload: { orderId: string }) {
    client.join(payload.orderId);
    client.emit('joined', { orderId: payload.orderId });
  }
}
