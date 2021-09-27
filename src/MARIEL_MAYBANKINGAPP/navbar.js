function NavLink(props) {
    const clicked = () => {
        props.handler(props.link);
    }
    // <a href="#" data-bs-toggle="tooltip" title="" data-bs-original-title="Another one here too">these tooltips on links</a>
    return (
        <a
            href={props.link}
            className={props.active(props.link) ? "nav-link active" : "nav-link"}
            data-bs-toggle="tooltip"
            title=""
            data-bs-placement="bottom"
            data-bs-original-title={props.tooltip}
            onClick={clicked}
        >{props.title}</a>
    )
}

function NavBar() {
    const [active, setActive] = React.useState('');
    const isActive = (link) => link === active;
    const handler = (link) => setActive(link);
    return (
        <>
            <nav className="mx-auto navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Mariel's Bank</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink
                                link="#"
                                title="Home"
                                active={isActive}
                                handler={handler}
                                tooltip="Go back to the home page"
                            />
                            <NavLink
                                link="#/CreateAccount/"
                                title="Create Account"
                                active={isActive}
                                handler={handler}
                                tooltip="Create a new Account"
                            />
                            <NavLink
                                link="#/deposit/"
                                title="Deposit"
                                active={isActive}
                                handler={handler}
                                tooltip="Deposit funds"
                            />
                            <NavLink
                                link="#/withdraw/"
                                title="Withdraw"
                                active={isActive}
                                handler={handler}
                                tooltip="Withdraw funds"
                            />
                            <NavLink
                                link="#/alldata/"
                                title="All Data"
                                active={isActive}
                                handler={handler}
                                tooltip="View all data"
                            />

                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}