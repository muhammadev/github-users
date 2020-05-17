import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Avatars from "./Avatars";
import Avatar from "./Avatar";
import "bootstrap/dist/css/bootstrap.css";
import "../style.css"

class App extends React.Component {
    state = {
    };
    async componentDidMount() {
        fetch("https://api.github.com/users")
            .then(res => res.json())
            .then(users => {
                this.setState({users})
                let usernames = [];
                users.map(user => {
                    usernames.push(user.login)
                    return
                })
                this.setState({usernames})
            })
    }

    delAvatar = id => {
        const { users } = this.state;
        this.setState({
        users: [
            ...users.filter(user => {
            return user.node_id !== id;
            })
        ]
        });
}

    render() {
        return this.state.users? (
            <Router basename="/github-users">
                <Route path="/" exact>
                    <Avatars avatars={this.state.users} delAvatar={this.delAvatar} />
                </Route>
                <Route path="/:login" render={(props) => <Avatar {...props} usernames={this.state.usernames}/>}></Route>
            </Router>
        ) : (
            <div className="loadMsg">loading....</div>
        )
    }
}

export default App