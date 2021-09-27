function AllData() {
    const ctx = React.useContext(UserContext);
    return (
        <div className="card">
            <div className="card-header">
                All Data
            </div>
            <ul className="list-group list-group-flush">
                {ctx.users.map((it, i) => {
                    return <li key={"user-"+i} className="list-group-item">
                        Name: {it.name}, Email: {it.email}, Password: {it.password}, Balance: {it.balance}
                    </li>
                })}
            </ul>
        </div>
    )
}
