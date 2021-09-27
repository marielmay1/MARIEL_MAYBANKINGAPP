const UserContext = React.createContext(null);
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;

function Spa() {
    const abel = {
        name: 'abel',
        email: 'abel@mit.edu',
        password: 'secret',
        balance: 100
    };
    return (
        <>
            <HashRouter>
                <NavBar/>
                <UserContext.Provider value={{users: [abel], index: 0}}>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about/" component={About}/>
                    <Route path="/products/" component={Products}/>
                    <Route path="/CreateAccount/" component={CreateAccount}/>
                    <Route path="/alldata/" component={AllData}/>
                    <Route path="/deposit/" component={Deposit}/>
                    <Route path="/withdraw/" component={Withdraw}/>
                </UserContext.Provider>
            </HashRouter>
            <Toast
                title="Congratulations!"
                message="Account Created Successfully"
            />
        </>
    );
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
);
$('[data-bs-toggle="tooltip"]').tooltip()

