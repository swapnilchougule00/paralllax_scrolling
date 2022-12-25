import "./App.css";
import { Parallax } from "react-parallax";

import space1 from "./images/space1.jpg";
import space2 from "./images/space2.jpg";
import space3 from "./images/space3.jpg";
import space4 from "./images/space4.jpg";

function App() {
  return (
    <div className="App">
      <Parallax className="img" bgImage={space1} strength={400}>
        <div className="content">
          <div className="txt-content">Normal Parallax</div>
        </div>
      </Parallax>
      <div className="info">
        <h3>MilkyWay</h3>
        <p>
          The Milky Way Galaxy is our home galaxy in the universe. It is a
          fairly typical barred spiral with four major arms in its disk, at
          least one spur, and a newly discovered outer arm. The galactic centre,
          which is located about 26,000 light-years from Earth, contains at
          least one supermassive black hole (called Sagittarius A*), and is
          crossed by a bar. The Milky Way began forming around 12 billion years
          ago and is part of a group of about 50 galaxies called the Local
          Group. The Andromeda Galaxy is part of this group as are numerous
          smaller galaxies, including the Magellanic Clouds. The Local Group
          itself is part of a larger gathering of galaxies called the Virgo
          Supercluster of galaxies.
        </p>
      </div>
      <Parallax
        className="img"
        bgImage={space2}
        blur={{ min: -5, max: 5 }}
        strength={400}
      >
        <div className="content">
          <div className="txt-content">Blur Parallax</div>
        </div>
      </Parallax>

      <div className="info">
        <h3>MilkyWay</h3>
        <p>
          The Milky Way Galaxy is our home galaxy in the universe. It is a
          fairly typical barred spiral with four major arms in its disk, at
          least one spur, and a newly discovered outer arm. The galactic centre,
          which is located about 26,000 light-years from Earth, contains at
          least one supermassive black hole (called Sagittarius A*), and is
          crossed by a bar. The Milky Way began forming around 12 billion years
          ago and is part of a group of about 50 galaxies called the Local
          Group. The Andromeda Galaxy is part of this group as are numerous
          smaller galaxies, including the Magellanic Clouds. The Local Group
          itself is part of a larger gathering of galaxies called the Virgo
          Supercluster of galaxies.
        </p>
      </div>

      <Parallax className="img" bgImage={space4} strength={-400}>
        <div className="content">
          <div className="txt-content">Reverse Parallax</div>
        </div>
      </Parallax>

      <div className="info">
        <h3>MilkyWay</h3>
        <p>
          The Milky Way Galaxy is our home galaxy in the universe. It is a
          fairly typical barred spiral with four major arms in its disk, at
          least one spur, and a newly discovered outer arm. The galactic centre,
          which is located about 26,000 light-years from Earth, contains at
          least one supermassive black hole (called Sagittarius A*), and is
          crossed by a bar. The Milky Way began forming around 12 billion years
          ago and is part of a group of about 50 galaxies called the Local
          Group. The Andromeda Galaxy is part of this group as are numerous
          smaller galaxies, including the Magellanic Clouds. The Local Group
          itself is part of a larger gathering of galaxies called the Virgo
          Supercluster of galaxies.
        </p>
      </div>
      <Parallax className="img" bgImage={space3} strength={400}>
        <div className="content">
          <div className="txt-content">Parallax</div>
        </div>
      </Parallax>

          </div>
  );
}

export default App;
