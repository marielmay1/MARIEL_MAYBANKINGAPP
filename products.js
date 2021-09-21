function Products(){
    const ctx = React.useContext(UserContext);
    return (
        <div>
            <h3>Products Component</h3>
            {JSON.stringify(ctx.users)}
        </div>
    );
}