const Header = () => {
    return (
        <header>
            <div className="header-wrapper">
                <div className="logo-container">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <h1>DrivenPics</h1>
                </div>
                <form action="/">
                    <input id="search" type="text" placeholder="Pesquisar" />
                </form>
                <nav className="nav-icons">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </nav>
            </div>
        </header>
    )
}

export default Header