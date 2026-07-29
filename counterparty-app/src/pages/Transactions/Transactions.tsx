import { useState } from "react";

function Transactions() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Transactions</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="file"
          accept=".xlsx,.xls,.csv"
          onChange={handleFileChange}
        />
      </div>

      <p>
        Selected File:{" "}
        <strong>
          {selectedFile ? selectedFile.name : "None"}
        </strong>
      </p>

      <input
        type="text"
        placeholder="Search transactions..."
        style={{
          width: "300px",
          padding: "8px",
          marginTop: "20px",
        }}
      />

      <hr />

      <table style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Account</th>
            <th>Counterparty</th>
            <th>Debit</th>
            <th>Credit</th>
            <th>Narration</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td colSpan={6}>
              No transactions imported.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;