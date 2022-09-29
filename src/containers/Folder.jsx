import { Component } from "react";
//constants
import { availableDiskTypes } from "../constants/Helpers";
//components
import File from "../Components/File";
//icons
import FolderIcon from "../Components/icons/FolderIcon";

class Folder extends Component {
  state = { isVisible: false };

  expand = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }));
  };

  render = () => {
    const { isVisible } = this.state,
      { folderData } = this.props;

    return (
      <div style={{ paddingLeft: 10 }} className="folder-container">
        {folderData?.name && (
          <>
            <div className="folder item">
              <FolderIcon />
              <span className="name">{folderData.name}</span>
              <span className="expand" onClick={this.expand}>
                {isVisible ? "-" : "+"}
              </span>
            </div>
            {isVisible &&
              folderData?.children?.map((child, i) => (
                <div key={i} style={{ paddingLeft: 10 }}>
                  {child.type === availableDiskTypes.folder ? (
                    <Folder folderData={child} />
                  ) : (
                    <File name={child.name} />
                  )}
                </div>
              ))}
          </>
        )}
      </div>
    );
  };
}

export default Folder;
