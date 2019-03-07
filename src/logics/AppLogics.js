
class AppLogics {
  static getApiUrl (username, type) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''

    return `https://api.github.com/users${internalUser}${internalType}`
  }

  static handleSearch (ev, resetUserInfo, populateUserInfo, finishFetch) {
    const value = ev.target.value
    const key = (ev.which || ev.keyCode)
    const enter = 13

    if (key === enter) {
      resetUserInfo()

      fetch(this.getApiUrl(value))
      .then(res => {
        if (res.ok) return res.json()
      })
      .then(user => {
        if (user) {
          populateUserInfo(user)
        }
      })
      .catch(err => {
        console.error(err)
      })
      .then(() => {
        finishFetch()
      })
    }
  }

  static getRepos (type, login, populateUserRepos) {
    fetch(this.getApiUrl(login, type))
    .then(res => {
      if (res.ok) return res.json()
    })
    .then(repos => {
      const userRepos = repos.map(repo => (
        {
          name: repo.name,
          link: repo.html_url
        }
				))

      populateUserRepos(userRepos)
    })
			.catch(err => {
  throw new Error(err)
})
  }
  }

export default AppLogics
