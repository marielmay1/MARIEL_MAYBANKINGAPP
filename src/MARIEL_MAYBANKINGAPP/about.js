function About(){
    const ctx = React.useContext(UserContext);
    return (
        <div>
            <h3>About</h3>
            {JSON.stringify(ctx.users)}
        </div>
    )
}