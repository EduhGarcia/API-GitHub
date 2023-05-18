const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do Usuario" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrado 😥'}</p>
                                            <ul>
                                                <li class="social">👥 Seguidores ${user.followers}</li>
                                                <li class="social">👥 Seguindo ${user.following}</li>
                                            </ul>
                                        </div>
                                      </div>`
    
        let repositoriesItens = ''
        user.repositories.forEach(repos => {
            console.log(repos)
            repositoriesItens += `<li>
                                    <a href="${repos.html_url}" target="_blank">${repos.name}
                                    <div class="info-repositories">
                                        <div class="item-repositorie">🍴 ${repos.forks}</div>
                                        <div class="item-repositorie">⭐ ${repos.stargazers_count}</div>
                                        <div class="item-repositorie">👀 ${repos.watchers}</div>
                                        <div class="item-repositorie">👩‍💻 ${repos.language}</div>
                                    </div></a>
                                  </li>`})

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                           </div>`
        }

        let eventItens = ''
        user.events.forEach((even) => {
            if(even.payload.commits === undefined){
                eventItens += `<li><span>${even.repo.name}</span> - Esse repositório não possui mensagem</li>`
                return
            }
            eventItens += `<li><span>${even.repo.name}</span> - ${even.payload.commits[0].message}</li>`
            
            
        })

        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class="eventTitle">
                                            <h2>Eventos</h2>
                                            <ul>${eventItens}</ul>
                                           </div>`
        }

        
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }