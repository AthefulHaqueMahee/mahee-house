import "./House.css";

import Sky from "./Sky";
import Sun from "./Sun";
import Grass from "./Grass";
import Path from "./Path";

function House() {
  return (
    <div className="scene">

      <Sky />
      <Sun />
      <Path />
      <div className="house">

        <div className="roof"></div>

        <div className="body">

          <div className="window"></div>

          <div className="door">
            <div className="nameplate">
              <h3>MD Atheful Haque Mahee</h3>
              <p>Software Engineer</p>
            </div>
          </div>

          <div className="window"></div>

        </div>

      </div>

      

      <Grass />

    </div>
  );
}

export default House;