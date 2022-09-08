import './App.css';
import { VectorMap } from '@south-paw/react-vector-maps';
import styled from 'styled-components';
import france from './france.json'

function App() {

  const Map = styled.div`
  margin: 1rem auto;
  width: 300px;

  svg {
    stroke: #fff;

    // All layers are just path elements
    path {
      fill: #a82b2b;
      cursor: pointer;
      outline: none;

      // When a layer is hovered
      &:hover {
        fill: rgba(168,43,43,0.83);
      }

      // When a layer is focused.
      &:focus {
        fill: rgba(168,43,43,0.6);
      }

      // When a layer is 'checked' (via checkedLayers prop).
      &[aria-checked='true'] {
        fill: rgba(56,43,168,1);
      }

      // When a layer is 'selected' (via currentLayers prop).
      &[aria-current='true'] {
        fill: rgba(56,43,168,0.83);
      }

      // You can also highlight a specific layer via it's id
      &[id="nz-can"] {
        fill: rgba(56,43,168,0.6);
      }
    }
  }
`;


  const onClick = ({ target }) => {
    console.log(target)
    target.setFocus({scale: 1, x: 0.5, y: 0.5, animate: false});
    const name = target.attributes.name.value;
    console.log(name)
    // window.open(`https://www.google.com/search?q=${name}%20nz`)
  }


  return (
    <Map>
      <VectorMap {...france} checkedLayers={['fr-c']} currentLayers={['nz-wgn']} layerProps={{ onClick }} />
    </Map>
    // <div className="App">
    //   <div id="wrapper">
    //     Zoom vers: <select id="regions"></select>
    //     Modificateur de zoom: 0.2
    //     <input id="factor" type="range" min="20" max="100" value="50" />1.0
    //     <div id="map">
    //       <button id="btn-reset-zoom">
    //         Réinitialiser le zoom
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
