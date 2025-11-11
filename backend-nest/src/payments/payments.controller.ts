import { Controller, Post, Body } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  @Post('card')
  payCard(@Body() body: { orderId: string; cardInfo: any }) {
    return this.paymentsService.payWithCard(body.orderId, body.cardInfo);
  }

  @Post('fingerprint')
  payFingerprint(@Body() body: { orderId: string; fpPayload: any }) {
    return this.paymentsService.payWithFingerprint(body.orderId, body.fpPayload);
  }
}
