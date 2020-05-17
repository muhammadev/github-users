import React from "react";
import AvatarCard from "./AvatarCard";

class Avatars extends React.Component {
  render() {
    return (
      <div className="text-center">     
      <h3 id="header">Github Users With React JS</h3>
      {this.props.avatars.map(avatar => (
          <AvatarCard
          key={avatar.id}
          avatar={avatar}
          delAvatar={this.props.delAvatar}
          />
      ))}
      </div>
    );
  }
}
export default Avatars