import { Component } from "react";
//icons
import FileIcon from "./icons/FileIcon";

class File extends Component {
  render = () => {
    const { name } = this.props;

    return (
      <div className="item" style={{ paddingLeft: 10 }}>
        <FileIcon />
        <span>{name}</span>
      </div>
    );
  };
}

export default File;
