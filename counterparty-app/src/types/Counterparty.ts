export interface Counterparty {
  id: string;
  name: string;
  accountNumber?: string;

  totalSent: number;
  totalReceived: number;

  transactionCount: number;
}