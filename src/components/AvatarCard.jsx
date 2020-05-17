import React, { Component } from 'react';
import {Link} from "react-router-dom";

class AvatarCard extends Component {
    render() {
      const { avatar_url, login, node_id } = this.props.avatar;
      return (
        <div className="avatar">
          <span className="del" onClick={() => this.props.delAvatar(node_id)}>
            x
          </span>
          <Link to={`/${login}`}>
            <img src={avatar_url} alt="Avatar" />
            <h4 className="avatar-name">{login}</h4>
          </Link>
        </div>
      );
    }
}

export default AvatarCard;