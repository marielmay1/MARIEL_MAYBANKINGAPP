function Deposit() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const ctx = React.useContext(UserContext);
  const user = ctx.users[ctx.index]

  function validate(field, label) {
    if(isNaN(field)) {
      setStatus('Error: Amount must be a number.');
      setTimeout(() => setStatus(''), 3000);
      return false;
    } else if(field <= 0) {
      setStatus('Error: Amount must be positive.');

      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function createDisabled() {
    return !amount;
  }

  function handleDeposit() {
    const validAmount = validate(amount, '"Amount" is required');
    if (!validAmount) return;
    setShow(false);
    user.balance = parseFloat(user.balance) + parseFloat(amount);
  }

  function clearForm() {
    setAmount('');
    setShow(true);
  }

  return (
      <Card
          bgcolor="info"
          header="Deposit Form"
          status={status}
          body={show ? (
              <>
                Mariel's Bank Savings Account
                <p className="card-text"><small className="text">(available balance ${user.balance})</small></p>
                Amount<br/>
                <input
                    type="input"
                    className="form-control"
                    id="deposit-amount"
                    placeholder="$100"
                    value={amount}
                    onChange={e => {setAmount(e.currentTarget.value)}}
                />

                <button
                    type="submit"
                    className="btn btn-light"
                    disabled={createDisabled()}
                    onClick={handleDeposit}>Deposit
                </button>
              </>
          ) : (
              <>
                <h5>Deposit Successful!</h5>
                <p>New Balance: ${user.balance}</p>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Make another Deposit</button>
              </>
          )}
      />
  )
}

