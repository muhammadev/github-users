import React from "react";
import {Link} from "react-router-dom";

class ThisAvatar extends React.Component {
  render() {
    const aStyle = "btn btn-secondary btn-sm";
    const { login, avatar_url, name, html_url, location, company, public_repos, public_gists } = this.props.avatar;
    return (
      <div id="avatar-data" className="container text-center">
        <h1 className="header mt-5">{name}</h1>
        <div className="data-container row">
          <div className="col-lg-4">
            <img src={avatar_url} alt="avatar img"/>
          </div>
          <div className="col-lg-8">
            <ul>
              <li>User Name: <strong>{login}</strong></li>
              {
                location? (<li>Location: <strong>{location}</strong></li>) : ("")
              }
              {
                company? (<li>Company: <strong>{company}</strong></li>) : ("")
              }
              <li>Public Repos: <strong>{public_repos}</strong></li>          
              <li>Public Gists: <strong>{public_gists}</strong></li>          
              <li><a href={html_url} target="_blanc" className={aStyle}>Github Page</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

class Avatar extends React.Component {
  state = {}
  async componentDidMount() {
    const {match: {params}} = this.props;
    fetch(`https://api.github.com/users/${params.login}`)
      .then(res => res.json())
      .then(avatar => this.setState({avatar}))
      .then(() => {
        let current = this.props.usernames.indexOf(params.login);
        let next = this.props.usernames[current + 1];
        let previous = current === 0? "" : this.props.usernames[current - 1];
        this.setState({next, previous})
      })
  }
  
  render() {
    return (
      <React.Fragment>
        <Link to="/" className="nav-btn">
          <svg className="bi bi-arrow-left-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M7.854 4.646a.5.5 0 010 .708L5.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clipRule="evenodd"/>
            <path fillRule="evenodd" d="M4.5 8a.5.5 0 01.5-.5h6.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5z" clipRule="evenodd"/>
          </svg>
        </Link>
        {/* {this.state.previous? (
          <Link to={"/" + this.state.previous} className="nav-btn left-btn">
            <svg className="bi bi-arrow-left-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M7.854 4.646a.5.5 0 010 .708L5.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clipRule="evenodd"/>
              <path fillRule="evenodd" d="M4.5 8a.5.5 0 01.5-.5h6.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5z" clipRule="evenodd"/>
            </svg>
          </Link>
        ) : (
          <Link to="/" className="nav-btn left-btn">
            <svg className="bi bi-arrow-left-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M7.854 4.646a.5.5 0 010 .708L5.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clipRule="evenodd"/>
              <path fillRule="evenodd" d="M4.5 8a.5.5 0 01.5-.5h6.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5z" clipRule="evenodd"/>
            </svg>
          </Link>
        )}
        {this.state.next? (
        <Link to={"/" + this.state.next} className="nav-btn right-btn">
          <svg className="bi bi-arrow-right-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z" clipRule="evenodd"/>
            <path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z" clipRule="evenodd"/>
          </svg>
        </Link>
        ) : (
          <Link to="/" className="nav-btn right-btn">
            <svg className="bi bi-arrow-right-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z" clipRule="evenodd"/>
              <path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z" clipRule="evenodd"/>
            </svg>
          </Link>
        )} */}
        {this.state.avatar? (
            <React.Fragment>
              <ThisAvatar avatar={this.state.avatar}/>
            </React.Fragment>
          ) : (
            <div className="loadMsg">loading...</div>
        )}
      </React.Fragment>
    );
  }

}

export default Avatar;