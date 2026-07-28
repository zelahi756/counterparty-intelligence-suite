export interface Transaction {
  id: string;
  date: string;

  accountNumber: string;
  accountTitle: string;

  counterpartyAccount?: string;
  counterpartyName: string;

  debit: number;
  credit: number;

  currency: string;

  narration: string;
  reference?: string;
}