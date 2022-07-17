import Suggestion from "./Suggestion"

const SideBar = () => {
    const users = [
        {username: 'badvibesmemes', profile_image: '/images/profiles/badvibesmemes.jpg'},
        {username: 'chibirdart', profile_image: '/images/profiles/chibirdart.jpg'},
        {username: 'razoesparaacreditar', profile_image: '/images/profiles/razoesparaacreditar.jpg'},
        {username: 'adorableanimals', profile_image: '/images/profiles/adorableanimals.jpg'},
        {username: 'smallcutecats', profile_image: '/images/profiles/smallcutecats.jpg'}
    ]

  return (
    <aside>
        <div className="user-profile">
            <img src="/images/profiles/catanacomics.jpg" alt="catanacomics" />
            <div className="user-info">
                <h3>catanacomics</h3>
                <p>Catana</p>
            </div>
        </div>
        <div className="user-suggestions-titles">
            <div>Sugestões para você</div>
            <div>Ver tudo</div>
        </div>
        <div className="user-suggestions">
            {users.length > 0
                ? users.map((user, id) => (<Suggestion key={id} user={user}/>))
                : ''
            }
        </div>
        <div className="copyrights">
            <span>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                Termos • Localizações • Contas mais relevantes • Hashtags • 
                Idioma</span>
            <span>© 2021 INSTAGRAM DO FACEBOOK</span>
        </div>
    </aside>
  )
}

export default SideBar