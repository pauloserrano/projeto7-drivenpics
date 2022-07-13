const Header = () => {
    return (
        <div className="header-wrapper">
            <div class="logo-container">
                <ion-icon name="logo-instagram"></ion-icon>
                <img src="/images/logo.png" alt="instagram" />
            </div>
            <form action="/">
                <input id="search" type="text" placeholder="Pesquisar" />
            </form>
            <nav class="nav-icons">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </nav>
        </div>
    )
}

export default Header