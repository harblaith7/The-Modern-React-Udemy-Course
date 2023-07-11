import { useState } from "react";
import "./App.css";

function App() {
  const [statements, setStatements] = useState([]);
  const [input, setInput] = useState({
    statement: "",
    amount: "",
    statementType: "income",
  });
  const [showError, setShowError] = useState({
    statement: false,
    amount: false,
  });

  const handleUpdateInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddNewStatement = () => {
    const { statement, amount, statementType } = input;

    if (!statement) {
      return setShowError({
        statement: true,
        amount: false,
      });
    } else if (!amount) {
      return setShowError({
        statement: false,
        amount: true,
      });
    } else {
      setShowError({
        statement: false,
        amount: false,
      });
      // ADD LOGIC TO ADD STATMENT
      setStatements([
        ...statements,
        {
          name: statement,
          amount: parseFloat(amount).toFixed(2),
          type: statementType,
          date: new Date().toDateString(),
        },
      ]);
      setInput({
        statement: "",
        amount: "",
        statementType: "income",
      });
    }
  };

  return (
    <main>
      <div>
        <h1 className="total-text">0</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Income or expense"
            onChange={handleUpdateInput}
            value={input.statement}
            name="statement"
            style={
              showError.statement ? { borderColor: "rgb(206, 76, 76)" } : null
            }
          />
          <input
            type="number"
            placeholder="$5000"
            onChange={handleUpdateInput}
            value={input.amount}
            name="amount"
            style={
              showError.amount ? { borderColor: "rgb(206, 76, 76)" } : null
            }
          />
          <select
            onChange={handleUpdateInput}
            value={input.statementType}
            name="statementType"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button onClick={handleAddNewStatement}>+</button>
        </div>
        <div>
          {statements.map(({ name, type, amount, date }) => (
            <div className="card">
              <div className="card-info">
                <h4>{name}</h4>
                <p>{date}</p>
              </div>
              <p
                className={`amount-text ${
                  type === "income" ? "success" : "danger"
                }`}
              >
                {type === "income" ? "+" : "-"}${amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
