import * as XLSX from "xlsx";
import type { Transaction } from "../types/Transaction";

export function importTransactions(file: File): Promise<Transaction[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const data = event.target?.result;

        if (!data) {
          reject("File is empty");
          return;
        }

        const workbook = XLSX.read(data, {
          type: "binary",
        });

        const sheetName = workbook.SheetNames[0];

        const sheet = workbook.Sheets[sheetName];

        const rows = XLSX.utils.sheet_to_json<any>(sheet);

        const transactions: Transaction[] = rows.map((row, index) => ({
          id: `TXN-${index + 1}`,

          date: row.Date || "",

          accountNumber: row.AccountNumber || "",
          accountTitle: row.AccountTitle || "",

          counterpartyAccount:
            row.CounterpartyAccount || "",

          counterpartyName:
            row.Counterparty || "",

          debit: Number(row.Debit || 0),

          credit: Number(row.Credit || 0),

          currency: row.Currency || "USD",

          narration:
            row.Narration || "",

          reference:
            row.Reference || "",
        }));

        resolve(transactions);

      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = () => {
      reject("Unable to read file");
    };

    reader.readAsBinaryString(file);
  });
}