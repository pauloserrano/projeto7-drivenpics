import React from 'react'

const SideBar = () => {
  return (
    <aside>
        <div class="user-profile">
            <img src="/images/profiles/catanacomics.jpg" alt="catanacomics" />
            <div class="user-info">
                <h3>catanacomics</h3>
                <p>Catana</p>
            </div>
        </div>
        <div class="user-suggestions-titles">
            <div>Sugestões para você</div>
            <div>Ver tudo</div>
        </div>
        <div class="user-suggestions">
            <div>
                <img src="/images/profiles/badvibesmemes.jpg" alt="badvibesmemes" />
                <div class="user-info">
                    <h3>bad.vibes.memes</h3>
                    <p>Segue você</p>
                </div>
                <button class="follow">Seguir</button>
            </div>
            <div>
                <img src="/images/profiles/chibirdart.jpg" alt="chibirdart" />
                <div class="user-info">
                    <h3>chibirdart</h3>
                    <p>Segue você</p>
                </div>
                <button class="follow">Seguir</button>
            </div>
            <div>
                <img src="/images/profiles/razoesparaacreditar.jpg" alt="razoesparaacreditar" />
                <div class="user-info">
                    <h3>razoesparaacreditar</h3>
                    <p>Novo no Instagram</p>
                </div>
                <button class="follow">Seguir</button>
            </div>
            <div>
                <img src="/images/profiles/adorableanimals.jpg" alt="adorableanimals" />
                <div class="user-info">
                    <h3>adorableanimals</h3>
                    <p>Segue você</p>
                </div>
                <button class="follow">Seguir</button>
            </div>
            <div>
                <img src="/images/profiles/smallcutecats.jpg" alt="smallcutecats" />
                <div class="user-info">
                    <h3>smallcutecats</h3>
                    <p>Segue você</p>
                </div>
                <button class="follow">Seguir</button>
            </div>
        </div>
        <div class="copyrights">
            <span>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                Termos • Localizações • Contas mais relevantes • Hashtags • 
                Idioma</span>
            <span>© 2021 INSTAGRAM DO FACEBOOK</span>
        </div>
    </aside>
  )
}

export default SideBar