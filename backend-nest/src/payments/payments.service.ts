import { Injectable } from '@nestjs/common';
import { OrdersService } from '../orders/orders.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PaymentsService {
  constructor(private ordersService: OrdersService) {}

  // Mock card payment
  async payWithCard(orderId: string, cardInfo: any) {
    // In production, call payment gateway (Stripe/PayPal)
    const txId = uuidv4();
    await this.ordersService.markPaid(orderId);
    return { success: true, txId };
  }

  // Mock fingerprint payment: simulate validating fingerprint payload then pay
  async payWithFingerprint(orderId: string, fpPayload: any) {
    // Simulate fingerprint service check
    if (fpPayload && fpPayload.scan === 'valid-demo-scan') {
      const txId = uuidv4();
      await this.ordersService.markPaid(orderId);
      return { success: true, txId, method: 'fingerprint' };
    }
    return { success: false, error: 'Fingerprint validation failed' };
  }
}
