import React, { Component } from 'react';
import "./css/style.css";
import AppContent from './components/app-content';
import AppLogics from './logics/AppLogics';

class App extends Component {
	state = {
		userinfo: null,
		repos: [],
		starred: [],
		isFetching: false
	};

	getApiUrl(username, type) {
		AppLogics.getApiUrl(username,	type);
	}

	handleSearch(ev) {
		AppLogics.handleSearch(ev,
			() => this.setState({ isFetching: true,	userinfo: null,	repos: [], starred: [] }),
			user => {
				this.setState({
					userinfo: {
						username: user.name,
						repos: user.public_repos,
						photo: user.avatar_url,
						login: user.login,
						followers: user.followers,
						following: user.following,
						bio: user.bio
					},
					repos: [],
					starred: []
				});
			},
			() => this.setState({ isFetching: false })
		);
	}
	
	getRepos(type) {
		const { login } = this.state.userinfo;
		AppLogics.getRepos(type, login, userRepos => this.setState({ [type]: userRepos }));
	}
	
	render() {
		return <AppContent
			{...this.state}
			handleSearch={ev => this.handleSearch(ev)}
			getRepos={type => this.getRepos(type)}
		/>
	}
};

export default App;