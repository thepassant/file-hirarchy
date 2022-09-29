import { Fragment, Component } from "react";
//data
import diskHierarchy from "./Assets/data.json";
//components
import Folder from "./containers/Folder";
import File from "./Components/File";
//constants
import { availableDiskTypes } from "./constants/Helpers";

class App extends Component {
  render() {
    return (
      <div className="App">
        {diskHierarchy.map((el, i) => (
          <Fragment key={i}>
            {el.type === availableDiskTypes.folder ? (
              <Folder folderData={el} />
            ) : (
              <File name={el.name} />
            )}
          </Fragment>
        ))}
      </div>
    );
  }
}

export default App;
