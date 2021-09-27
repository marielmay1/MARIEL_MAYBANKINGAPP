function CreateAccount() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);

    function validate(field, label) {
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }

    function createDisabled() {
        return !name && !email && !password;
    }

    function handleCreate() {
        console.log(name, email, password);
        const validName = validate(name, '"Name" is required');
        const validEmail = validate(email, '"Email" is required');
        const validPassword = validate(password, '"Password" is required');
        if (!validName) return;
        if (!validEmail) return;
        if (!validPassword) return;
        ctx.users.push({name, email, password, balance: 100});
        ctx.index = ctx.users.length - 1;
        setShow(false);
        $('.toast').toast('show')
    }

    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    return (
        <Card
            bgcolor="info"
            header="Create Account"
            status={status}
            body={show ? (
                <>
                    Name<br/>
                    <input type="input" className="form-control" id="name"
                           placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)}/><br/>
                    Email address<br/>
                    <input type="input" className="form-control" id="email"
                           placeholder="Enter email" value={email}
                           onChange={e => setEmail(e.currentTarget.value)}/><br/>
                    Password<br/>
                    <input type="password" className="form-control" id="password"
                           placeholder="Enter password" value={password}
                           onChange={e => setPassword(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-light"
                            disabled={createDisabled()}
                            onClick={handleCreate}>Create Account
                    </button>
                </>
            ) : (
                <>
                    <h5>Success!</h5>
                    <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
                </>
            )}
        />
    )
}
