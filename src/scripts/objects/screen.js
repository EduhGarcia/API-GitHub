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
            let starRepositorie = ''
            let forksRepositorie = ''
            let languageRepositorie = ''

            repos.fork === false || repos.fork === 0 ? forksRepositorie = 'Sem forks' : forksRepositorie = `🍴 ${repos.forks}` 

            repos.stargazers_count === null || repos.stargazers_count === 0 ? starRepositorie = 'Sem estrelas' : starRepositorie = `⭐ ${repos.stargazers_count}`

            repos.language === null || repos.language === 0 ? languageRepositorie = 'Nenhuma linguagem' : languageRepositorie = `👩‍💻 ${repos.language}`

            let informationRepos = `<div class="item-repositorie">${forksRepositorie}</div>
                                <div class="item-repositorie">${starRepositorie}</div>
                                <div class="item-repositorie">👀 ${repos.watchers}</div>
                                <div class="item-repositorie">${languageRepositorie}</div>`

            repositoriesItens += `<li>
                                    <a href="${repos.html_url}" target="_blank">${repos.name}
                                        <div class="info-repositories">
                                            ${informationRepos}
                                        </div>
                                    </a>
                                  </li>`})

                                  
        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                           </div>`
        }

        let eventItens = ''
        user.events.forEach(element => {
            
            if(element.type === "PushEvent"){
                eventItens += `<li><span>${element.repo.name}</span> 
                -- ${element.payload.commits[0].message}</li>`
            } else {
                eventItens += `<li><span>${element.repo.name}</span> 
                -- ${element.payload.ref_type}</li>`
            }
            
            
            
            
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