import '../../Styles/creaetDivDisgain.css';
import '../../Styles/color.css'
import { useState } from 'react';
import A from '../../Images/A.png';
import B from '../../Images/B.png';
import C from '../../Images/C.png';
import D from '../../Images/D.png'
import ContaintContainer from './ContaintContainer';


function App() {
  const [seeCode, setSeecode] = useState("none")
  const [radius, setRadius] = useState(0);

  const [radiusA, setRadiusA] = useState(0);
  const [radiusB, setRadiusB] = useState(0);
  const [radiusC, setRadiusC] = useState(0);
  const [radiusD, setRadiusD] = useState(0);
  const [radiusType, setRadiusType] = useState('px')

  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  const [shedowX, setShedowX] = useState(0);
  const [shedowY, setShedowY] = useState(0);
  const [shedowBlur, setShedowBlur] = useState(5);
  const [shedowRadius, setShedowRadius] = useState(0);
  const [shedowColor, setShedowColor] = useState('#000000');
  const [shedowColor_morden, setShedowColor_morden] = useState('#000000');
  const [insideShedow, setInsideShedow] = useState('');
  const [bgContaint, setBgContaint] = useState('')
  const [shadowIntensity, setShadowIntensity] = useState(1)

  const [bgMiddileContainer, setBgMiddileContainer] = useState('#ffffff')
  const [containtType, setContaintType] = useState('simple');
  const [distance, setDistance] = useState(0)

  // const [showSideButt, setShowSideButt] = useState("none")
  const [activeShowSideButtA, setActiveShowSideButtA] = useState('#0C2D57')
  const [activeShowSideButtB, setActiveShowSideButtB] = useState('rgb(237, 233, 233)')
  const [activeShowSideButtC, setActiveShowSideButtC] = useState('rgb(237, 233, 233)')
  const [activeShowSideButtD, setActiveShowSideButtD] = useState('rgb(237, 233, 233)')

  const [shep, setShep] = useState('A')
  const [activeShowSideButt, setActiveShowSideButt] = useState('A')

  const [copiedCss, setCopiedCss] = useState(false);
  const [copiedHtml, setCopiedHtml] = useState(false);

  const [bgColor1, setBgColor1] = useState("#FF0000");
  const [bgColor2, setBgColor2] = useState("#ffffff");
  const [bgColor3, setBgColor3] = useState("");
  const [bgColor4, setBgColor4] = useState("");


  const [visibilityColor3_inputs, setVisibilityColor3_inputs] = useState("none");
  const [visibilityColor4_inputs, setVisibilityColor4_inputs] = useState("none");

  const [visibilityColor3_addButt, setVisibilityColor3_addButt] = useState("flex");
  const [visibilityColor4_addButt, setVisibilityColor4_addButt] = useState("flex");

  const [color1Percent, setColor1Percent] = useState(0);
  const [color2Percent, setColor2Percent] = useState(100);
  const [color3Percent, setColor3Percent] = useState(0);
  const [color4Percent, setColor4Percent] = useState(0);

  const [but, setBut] = useState(0);
  const [colorSide, setColorSide] = useState("to top");

  const [gradient, setGradient] = useState('linear-gradient');
  const [borderWidthAShap, setBorderWidthAShap] = useState(5);



  const seeCodeOfcontaint = () => {
    setSeecode("block");
  }

  const setAllradius = (e) => {
    setRadius(e.target.value)
    setRadiusA(e.target.value);
    setRadiusB(e.target.value);
    setRadiusC(e.target.value);
    setRadiusD(e.target.value);
  }

  const enableMordenContaint = () => {
    setBgMiddileContainer('#e0e0e0')
    setBgContaint('#e0e0e0');
    setContaintType('morden')
    setShedowColor('#ffffff')
    setShedowColor_morden('#5a5a5a')
    setShedowX(5);
    setShedowY(5);
    setShedowBlur(10);
  }
  const enableSimpalContaint = () => {
    setBgMiddileContainer('#ffffff')
    setBgContaint('');
    setContaintType('simple')
    setShedowColor('#000000')
    setShedowColor_morden('#000000')
    setShedowX(0);
    setShedowY(0);
    setShedowBlur(5);
  }

  const enableBackgroundConraint = () => {
    setContaintType('background');
    setBgMiddileContainer('#ffffff');
    setShedowColor('#000000')
    setBgColor1('#FF0000')
    setBgColor2('#ffffff')
    setBgContaint('background');
    setShedowX(0);
    setShedowY(0);
    setShedowBlur(5);
  }

  const enableAShapConraint = () => {
    setBgMiddileContainer('#D0E1DB')
    setBgContaint('#D0E1DB');
    setContaintType('AShap')
    setShedowColor('#ffffff')
    setShedowColor_morden('#5a5a5a')
    setShedowX(5);
    setShedowY(5);
    setShedowBlur(10);
  }

  const setDistance_morden = (e) => {
    setDistance(e.target.value)
    setShedowX(e.target.value);
    setShedowY(e.target.value);
    setShedowBlur(e.target.value * 2);
  }


  const addColor3 = () => {
    setBgColor3("#66ff33");
    setVisibilityColor3_inputs("flex");
    setVisibilityColor3_addButt("none");
    if (visibilityColor4_inputs === "flex") {
      setColor1Percent(0);
      setColor2Percent(33);
      setColor3Percent(66);
      setColor4Percent(100);
    } else {
      setColor1Percent(0);
      setColor2Percent(50);
      setColor3Percent(100);
    }
  };
  const removeColor3 = () => {
    setBgColor3("");
    setVisibilityColor3_inputs("none");
    setVisibilityColor3_addButt("block");
    if (visibilityColor4_inputs === "flex") {
      setColor1Percent(0);
      setColor2Percent(50);
      setColor4Percent(100);
    } else {
      setColor1Percent(0);
      setColor2Percent(100);
    }
  };

  const addColor4 = () => {
    setBgColor4("#ff9999");
    setVisibilityColor4_inputs("flex");
    setVisibilityColor4_addButt("none");
    if (visibilityColor3_inputs === "flex") {
      setColor1Percent(0);
      setColor2Percent(33);
      setColor3Percent(66);
      setColor4Percent(100);
    } else {
      setColor1Percent(0);
      setColor2Percent(50);
      setColor4Percent(100);
    }
  };
  const removeColor4 = () => {
    setBgColor4("");
    setVisibilityColor4_inputs("none");
    setVisibilityColor4_addButt("block");
    if (visibilityColor3_inputs === "flex") {
      setColor1Percent(0);
      setColor2Percent(50);
      setColor3Percent(100);
    } else {
      setColor1Percent(0);
      setColor2Percent(100);
    }
  };

  const colorToRGBA = (color, alpha) => {
    if (color.startsWith('#')) {
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      return `rgba(${r},${g},${b},${alpha})`;
    }
    return color;
  };

  function ColorLuminance(hex, lum) {
    if (hex === '000000' || hex === '#000000') {
      return '#ffffff';
    }

    hex = String(hex).replace(/[^0-9a-f]/gi, '');

    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    lum = lum || 0;

    var rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i * 2, 2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ("00" + c).substr(c.length);
    }

    return rgb;
  }

  const boxStyle = {
    width: `${width}px`,
    height: `${height}px`,
    borderRadius: `${radiusA}${radiusType} ${radiusB}${radiusType} ${radiusC}${radiusType} ${radiusD}${radiusType}`,
    background:
      containtType === 'morden' && shep === 'B'
        ? `linear-gradient(${activeShowSideButt === 'A' ? '145deg' : activeShowSideButt === 'B' ? '225deg' : activeShowSideButt === 'C' ? '45deg' : '315deg'}, ${ColorLuminance(bgContaint, -0.2)}, ${ColorLuminance(bgContaint, 0.6)})`
        : containtType === 'morden' && shep === 'C'
          ? `linear-gradient(${activeShowSideButt === 'A' ? '145deg' : activeShowSideButt === 'B' ? '225deg' : activeShowSideButt === 'C' ? '45deg' : '315deg'}, ${ColorLuminance(bgContaint, 0.6)}, ${ColorLuminance(bgContaint, -0.2)})`
          : containtType === 'background' ? `${gradient}(${colorSide}, ${bgColor1} ${color1Percent}%, ${bgColor2} ${color2Percent}% ${visibilityColor3_inputs === "flex" ? "," + `${bgColor3} ${color3Percent}%` : ""} ${visibilityColor4_inputs === "flex" ? "," + `${bgColor4} ${color4Percent}%` : ""})` : `${bgContaint}`,
    boxShadow:
      containtType === 'morden'
        ? `${shep === 'D' ? insideShedow : ''} ${activeShowSideButt === 'A' || activeShowSideButt === 'C' ? shedowX : -shedowX}px ${activeShowSideButt === 'A' || activeShowSideButt === 'B' ? shedowY : -shedowY}px ${shedowBlur}px  ${colorToRGBA(shedowColor_morden, shadowIntensity)},${shep === 'D' ? insideShedow : ''} ${activeShowSideButt === 'B' || activeShowSideButt === 'D' ? shedowX : -shedowX}px ${activeShowSideButt === 'C' || activeShowSideButt === 'D' ? shedowX : -shedowX}px ${shedowBlur}px ${colorToRGBA(ColorLuminance(bgContaint, 0.6), shadowIntensity)}`
        : `${insideShedow} ${shedowX}px ${shedowY}px ${shedowBlur}px ${shedowRadius}px ${shedowColor}`,
  }




  const boxStyleAShap = {
    width: `${width - 20}px`,
    height: `${height - 20}px`,
    borderRadius: `${radiusA}${radiusType} ${radiusB}${radiusType} ${radiusC}${radiusType} ${radiusD}${radiusType}`,
    background: `${bgContaint}`,
    boxShadow: `${activeShowSideButt === 'A' ?
      `${shedowX}px ${shedowY}px ${shedowBlur}px ${colorToRGBA(shedowColor_morden, shadowIntensity)}, ${-shedowX}px ${-shedowY}px ${shedowBlur}px ${colorToRGBA(ColorLuminance(toString(bgContaint), 0.6), shadowIntensity)}, inset ${shedowX}px ${shedowY}px ${shedowBlur}px ${colorToRGBA(shedowColor_morden, shadowIntensity)}, inset ${-shedowX}px ${-shedowY}px ${shedowBlur}px ${colorToRGBA(ColorLuminance(toString(bgContaint), 0.6), shadowIntensity)}`
      : activeShowSideButt === 'B' ?
        `${-shedowX}px ${shedowY}px ${shedowBlur}px ${colorToRGBA(shedowColor_morden, shadowIntensity)}, ${shedowX}px ${-shedowY}px ${shedowBlur}px ${colorToRGBA(ColorLuminance(toString(bgContaint), 0.6), shadowIntensity)}, inset ${-shedowX}px ${shedowY}px ${shedowBlur}px ${colorToRGBA(shedowColor_morden, shadowIntensity)}, inset ${shedowX}px ${-shedowY}px ${shedowBlur}px ${colorToRGBA(ColorLuminance(toString(bgContaint), 0.6), shadowIntensity)}`
        : activeShowSideButt === 'C' ?
          `${shedowX}px ${-shedowY}px ${shedowBlur}px ${colorToRGBA(shedowColor_morden, shadowIntensity)}, ${-shedowX}px ${shedowY}px ${shedowBlur}px ${colorToRGBA(ColorLuminance(toString(bgContaint), 0.6), shadowIntensity)}, inset ${shedowX}px ${-shedowY}px ${shedowBlur}px ${colorToRGBA(shedowColor_morden, shadowIntensity)}, inset ${-shedowX}px ${shedowY}px ${shedowBlur}px ${colorToRGBA(ColorLuminance(toString(bgContaint), 0.6), shadowIntensity)}`
          : `${-shedowX}px ${-shedowY}px ${shedowBlur}px ${colorToRGBA(shedowColor_morden, shadowIntensity)}, ${shedowX}px ${shedowY}px ${shedowBlur}px ${colorToRGBA(ColorLuminance(toString(bgContaint), 0.6), shadowIntensity)}, inset ${-shedowX}px ${-shedowY}px ${shedowBlur}px ${colorToRGBA(shedowColor_morden, shadowIntensity)}, inset ${shedowX}px ${shedowY}px ${shedowBlur}px ${colorToRGBA(ColorLuminance(toString(bgContaint), 0.6), shadowIntensity)}`
      }`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    border: `${borderWidthAShap}px solid ${bgContaint}`,
  }


  const css = `.container{
    width: ${width}px;
    height: ${height}px;
    ${radiusA === 0 && radiusB === 0 && radiusC === 0 && radiusD === 0 ? '' : `border-radius: ${radiusA}${radiusType} ${radiusB}${radiusType} ${radiusC}${radiusType} ${radiusD}${radiusType};`}
    ${bgContaint !== "" ?
      `background:${containtType === 'morden' && shep === 'B'
        ? `linear-gradient(${activeShowSideButt === 'A' ? '145deg' : activeShowSideButt === 'B' ? '225deg' : activeShowSideButt === 'C' ? '45deg' : '315deg'}, ${ColorLuminance(bgContaint, -0.2)}, ${ColorLuminance(bgContaint, 0.6)})`
        : containtType === 'morden' && shep === 'C'
          ? `linear-gradient(${activeShowSideButt === 'A' ? '145deg' : activeShowSideButt === 'B' ? '225deg' : activeShowSideButt === 'C' ? '45deg' : '315deg'}, ${ColorLuminance(bgContaint, 0.6)}, ${ColorLuminance(bgContaint, -0.2)})`
          : containtType === 'background' ? `${gradient}(${colorSide}, ${bgColor1} ${color1Percent}%, ${bgColor2} ${color2Percent}% ${visibilityColor3_inputs === "flex" ? "," + `${bgColor3} ${color3Percent}%` : ""} ${visibilityColor4_inputs === "flex" ? "," + `${bgColor4} ${color4Percent}%` : ""})` : `${bgContaint}`};`
      : ""
    }
    box-shadow:${containtType === 'morden'
      ? `${shep === 'D' ? insideShedow : ''} ${activeShowSideButt === 'A' || activeShowSideButt === 'C' ? shedowX : -shedowX}px ${activeShowSideButt === 'A' || activeShowSideButt === 'B' ? shedowY : -shedowY}px ${shedowBlur}px  ${colorToRGBA(shedowColor_morden, shadowIntensity)},${shep === 'D' ? insideShedow : ''} ${activeShowSideButt === 'B' || activeShowSideButt === 'D' ? shedowX : -shedowX}px ${activeShowSideButt === 'C' || activeShowSideButt === 'D' ? shedowX : -shedowX}px ${shedowBlur}px ${colorToRGBA(ColorLuminance(bgContaint, 0.6), shadowIntensity)}`
      : `${insideShedow} ${shedowX}px ${shedowY}px ${shedowBlur}px ${shedowRadius}px ${shedowColor}`};
  }`;


  const css2 =
    `.container{
    width: ${width - 20}px;
    height: ${height - 20}px;
    ${radiusA === 0 && radiusB === 0 && radiusC === 0 && radiusD === 0 ? '' : `border-radius: ${radiusA}${radiusType} ${radiusB}${radiusType} ${radiusC}${radiusType} ${radiusD}${radiusType};`}
    background: ${bgContaint};
    box-shadow: ${activeShowSideButt === 'A' ?
      `${shedowX}px ${shedowY}px ${shedowBlur}px ${colorToRGBA(shedowColor_morden, shadowIntensity)}, ${-shedowX}px ${-shedowY}px ${shedowBlur}px ${colorToRGBA(ColorLuminance(toString(bgContaint), 0.6), shadowIntensity)}, inset ${shedowX}px ${shedowY}px ${shedowBlur}px ${colorToRGBA(shedowColor_morden, shadowIntensity)}, inset ${-shedowX}px ${-shedowY}px ${shedowBlur}px ${colorToRGBA(ColorLuminance(toString(bgContaint), 0.6), shadowIntensity)}`
      : activeShowSideButt === 'B' ?
        `${-shedowX}px ${shedowY}px ${shedowBlur}px ${colorToRGBA(shedowColor_morden, shadowIntensity)}, ${shedowX}px ${-shedowY}px ${shedowBlur}px ${colorToRGBA(ColorLuminance(toString(bgContaint), 0.6), shadowIntensity)}, inset ${-shedowX}px ${shedowY}px ${shedowBlur}px ${colorToRGBA(shedowColor_morden, shadowIntensity)}, inset ${shedowX}px ${-shedowY}px ${shedowBlur}px ${colorToRGBA(ColorLuminance(toString(bgContaint), 0.6), shadowIntensity)}`
        : activeShowSideButt === 'C' ?
          `${shedowX}px ${-shedowY}px ${shedowBlur}px ${colorToRGBA(shedowColor_morden, shadowIntensity)}, ${-shedowX}px ${shedowY}px ${shedowBlur}px ${colorToRGBA(ColorLuminance(toString(bgContaint), 0.6), shadowIntensity)}, inset ${shedowX}px ${-shedowY}px ${shedowBlur}px ${colorToRGBA(shedowColor_morden, shadowIntensity)}, inset ${shedowX}px ${-shedowY}px ${shedowBlur}px ${colorToRGBA(ColorLuminance(toString(bgContaint), 0.6), shadowIntensity)}`
          : `${-shedowX}px ${-shedowY}px ${shedowBlur}px ${colorToRGBA(shedowColor_morden, shadowIntensity)}, ${shedowX}px ${shedowY}px ${shedowBlur}px ${colorToRGBA(ColorLuminance(toString(bgContaint), 0.6), shadowIntensity)}, inset ${-shedowX}px ${-shedowY}px ${shedowBlur}px ${colorToRGBA(shedowColor_morden, shadowIntensity)}, inset ${shedowX}px ${shedowY}px ${shedowBlur}px ${colorToRGBA(ColorLuminance(toString(bgContaint), 0.6), shadowIntensity)}`
    };
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${borderWidthAShap}px solid ${bgContaint};
}`


  const html = `<div class="container"></div>`;

  const handleCopyCSS = () => {
    navigator.clipboard.writeText(containtType === 'AShap' ? css2 : css)
      .then(() => {
        setCopiedCss(true);
        setTimeout(() => setCopiedCss(false), 2000); // Reset copiedCss state after 2 seconds
      })
      .catch(err => {
        console.error('Error copying text: ', err);
      });
  };

  const handleCopyHtml = () => {
    navigator.clipboard.writeText(html)
      .then(() => {
        setCopiedHtml(true);
        setTimeout(() => setCopiedHtml(false), 2000); // Reset copiedCss state after 2 seconds
      })
      .catch(err => {
        console.error('Error copying text: ', err);
      });
  };

  return (
    <div className="App">
      <div className='left_container'>
        <div>
          <div>
            <button style={{ border: radiusType === 'px' ? '5px double #0C2D57' : '0px solid white' }} onClick={() => setRadiusType('px')}>PX</button>
            <button style={{ border: radiusType === '%' ? '5px double #0C2D57' : '0px solid white' }} onClick={() => setRadiusType('%')}>%</button>
          </div>

          <label>All radius:</label>
          <div className='input_div'>
            <input className='input' type='range' min="0" max={radiusType === 'px' ? 600 : 100} value={radius} onChange={setAllradius} />
            <p>{radius}{radiusType}</p>
          </div>
          <label>Radius top left:</label>
          <div className='input_div'>
            <input className='input' type='range' min="0" max={radiusType === 'px' ? 600 : 100} value={radiusA} onChange={(e) => setRadiusA(e.target.value)} />
            <p>{radiusA}{radiusType}</p>
          </div>
          <label>Radius top right:</label>
          <div className='input_div'>
            <input className='input' type='range' min="0" max={radiusType === 'px' ? 600 : 100} value={radiusB} onChange={(e) => setRadiusB(e.target.value)} />
            <p>{radiusB}{radiusType}</p>
          </div>
          <label>Radius bottem left :</label>
          <div className='input_div'>
            <input className='input' type='range' min="0" max={radiusType === 'px' ? 600 : 100} value={radiusC} onChange={(e) => setRadiusC(e.target.value)} />
            <p>{radiusC}{radiusType}</p>
          </div>
          <label>Radius bottem right:</label>
          <div className='input_div'>
            <input className='input' type='range' min="0" max={radiusType === 'px' ? 600 : 100} value={radiusD} onChange={(e) => setRadiusD(e.target.value)} />
            <p>{radiusD}{radiusType}</p>
          </div>
          <label>Width:</label>
          <div className='input_div'>
            <input className='input' type='range' min="0" max="600" value={width} onChange={(e) => setWidth(e.target.value)} />
            <p>{width}px</p>
          </div>
          <label>Height:</label>
          <div className='input_div'>
            <input className='input' type='range' min="0" max="600" value={height} onChange={(e) => setHeight(e.target.value)} />
            <p>{height}px</p>
          </div>
          <hr />
        </div>

        <div style={{ display: containtType === 'simple' || containtType === 'background' ? 'flex' : 'none' }}>
          <div className='buttonDiv_insideOutside'>
            <button style={{ border: insideShedow === '' ? '5px double #0C2D57' : '0px solid white' }} onClick={() => setInsideShedow('')}>OutSide</button>
            <button style={{ border: insideShedow === 'inset' ? '5px double #0C2D57' : '0px solid white' }} onClick={() => setInsideShedow('inset')}>In Side</button>
          </div>
          <label>Shedow X:</label>
          <div className='input_div'>
            <input className='input' type='range' min="0" max="600" value={shedowX} onChange={(e) => setShedowX(e.target.value)} />
            <p>{shedowX}px</p>
          </div>
          <label>Shedow Y:</label>
          <div className='input_div'>
            <input className='input' type='range' min="0" max="600" value={shedowY} onChange={(e) => setShedowY(e.target.value)} />
            <p>{shedowY}px</p>
          </div>
          <label>Shedow Blur:</label>
          <div className='input_div'>
            <input className='input' type='range' min="0" max="600" value={shedowBlur} onChange={(e) => setShedowBlur(e.target.value)} />
            <p>{shedowBlur}px</p>
          </div>
          <label>Shedow Radius:</label>
          <div className='input_div'>
            <input className='input' type='range' min="0" max="600" value={shedowRadius} onChange={(e) => setShedowRadius(e.target.value)} />
            <p>{shedowRadius}px</p>
          </div>
          <label>Shedow Color:</label>
          <div className='input_div'>
            <input type='color' value={shedowColor} onChange={(e) => setShedowColor(e.target.value)} />
            <p>{shedowColor}px</p>
          </div>
          <hr />
        </div>


        <div style={{ display: containtType === 'morden' || containtType === 'AShap' ? 'flex' : 'none' }}>
          <label>Distance:</label>
          <input className='input' type='range' min="0" max="250" value={distance} onChange={setDistance_morden} />
          <label>Blur:</label>
          <input className='input' type='range' min="0" max="500" value={shedowBlur} onChange={(e) => setShedowBlur(e.target.value)} />
          <label>Intensity :</label>
          <input className='input' type='range' min="0" max="1" step="0.01" value={shadowIntensity} onChange={(e) => setShadowIntensity(e.target.value)} />
          <div className='borderDiv' style={{ display: containtType === 'AShap' ? 'flex' : 'none' }}>
            <label>Border Thickness :</label>
            <input className='input' type='range' min="0" max="100" value={borderWidthAShap} onChange={(e) => setBorderWidthAShap(e.target.value)} />
          </div>
          <label>Backgorund Color :</label>
          <input type='color' value={bgMiddileContainer} onChange={(e) => { setBgMiddileContainer(e.target.value); setBgContaint(e.target.value) }} />
        </div>
      </div>

      <div className='middile_container' style={{ background: bgMiddileContainer }}>

        <div className='middile_cotainer_topSection'>
          <button onClick={enableSimpalContaint} style={containtType === 'simple' ? { backgroundColor: '#12145E', color: 'white' } : {}}>Simple</button>
          <button onClick={enableMordenContaint} style={containtType === 'morden' ? { backgroundColor: '#12145E', color: 'white' } : {}}>Morden</button>
          <button onClick={enableAShapConraint} style={containtType === 'AShap' ? { backgroundColor: '#12145E', color: 'white' } : {}}>A Shap</button>
          <button onClick={enableBackgroundConraint} style={containtType === 'background' ? { backgroundColor: '#12145E', color: 'white' } : {}}>Background</button>
          <button>Shap</button>
        </div>

        <div className='containt_Container'>
          <ContaintContainer style={containtType === 'AShap' ? boxStyleAShap : boxStyle} />
        </div>
        <div className='codediv' style={{ display: seeCode }}>
          <button onClick={() => setSeecode("none")}>close</button>

          <div className='codeInnreDiv'>
            <h6>CSS</h6>
            <div>
              {!copiedCss && <button onClick={handleCopyCSS}>Copy</button>}
              {copiedCss && <button style={{ color: 'green' }}>Copied!</button>}
            </div>
            <code>
              {containtType === 'AShap' ? css2 : css}
            </code>
          </div>

          <div className='codeInnreDiv'>
            <h6>HTML</h6>
            <div>
              {!copiedHtml && <button onClick={handleCopyHtml}>Copy</button>}
              {copiedHtml && <button style={{ color: 'green' }}>Copied!</button>}
            </div>
            <code>
              {html}
            </code>
          </div>
        </div>
      </div>

      <div className='right_container'>
        <div className='shep_morden' style={{ display: containtType === 'morden' ? 'flex' : 'none' }}>
          <button style={{ border: shep === 'A' ? '2px solid #0C2D57' : 'white' }} onClick={() => setShep('A')}><img src={A} alt='not found' /></button>
          <button style={{ border: shep === 'B' ? '2px solid #0C2D57' : 'white' }} onClick={() => setShep('B')}><img src={B} alt='not found' /></button>
          <button style={{ border: shep === 'C' ? '2px solid #0C2D57' : 'white' }} onClick={() => setShep('C')}><img src={C} alt='not found' /></button>
          <button style={{ border: shep === 'D' ? '2px solid #0C2D57' : 'white' }} onClick={() => { setShep('D'); setInsideShedow('inset') }}><img src={D} alt='not found' /></button>
        </div>
        <div className='mordenContain_sidebutton' style={{ display: containtType === 'morden' || containtType === 'AShap' ? 'flex' : 'none' }}>
          <div onClick={() => { setActiveShowSideButt('A'); setActiveShowSideButtA('#0C2D57'); setActiveShowSideButtB('rgb(237, 233, 233)'); setActiveShowSideButtC('rgb(237, 233, 233)'); setActiveShowSideButtD('rgb(237, 233, 233)') }} style={{ border: `5px double ${activeShowSideButtA}` }}><svg xmlns="http://www.w3.org/2000/svg" fill='gray' height="24" viewBox="0 -960 960 960" width="24"><path d="M360-200v-80h264L160-744l56-56 464 464v-264h80v400H360Z" /></svg></div>
          <div onClick={() => { setActiveShowSideButt('B'); setActiveShowSideButtA('rgb(237, 233, 233)'); setActiveShowSideButtB('#0C2D57'); setActiveShowSideButtC('rgb(237, 233, 233)'); setActiveShowSideButtD('rgb(237, 233, 233)') }} style={{ border: `5px double ${activeShowSideButtB}` }}><svg xmlns="http://www.w3.org/2000/svg" fill='gray' height="24" viewBox="0 -960 960 960" width="24"><path d="M200-200v-400h80v264l464-464 56 56-464 464h264v80H200Z" /></svg></div>
          <div onClick={() => { setActiveShowSideButt('C'); setActiveShowSideButtA('rgb(237, 233, 233)'); setActiveShowSideButtB('rgb(237, 233, 233)'); setActiveShowSideButtC('#0C2D57'); setActiveShowSideButtD('rgb(237, 233, 233)') }} style={{ border: `5px double ${activeShowSideButtC}` }}><svg xmlns="http://www.w3.org/2000/svg" fill='gray' height="24" viewBox="0 -960 960 960" width="24"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" /></svg></div>
          <div onClick={() => { setActiveShowSideButt('D'); setActiveShowSideButtA('rgb(237, 233, 233)'); setActiveShowSideButtB('rgb(237, 233, 233)'); setActiveShowSideButtC('rgb(237, 233, 233)'); setActiveShowSideButtD('#0C2D57') }} style={{ border: `5px double ${activeShowSideButtD}` }}><svg xmlns="http://www.w3.org/2000/svg" fill='gray' height="24" viewBox="0 -960 960 960" width="24"><path d="M744-160 280-624v264h-80v-400h400v80H336l464 464-56 56Z" /></svg></div>
        </div>
        {/* </div> */}

        <div className='color_containerDiv' style={{ display: containtType === 'background' ? 'flex' : 'none' }}>
          <div>
            <div className="colorInput_div">
              <input type="color" value={bgColor1} onChange={(e) => setBgColor1(e.target.value)} />
              <input type="text" maxLength="10" style={{ background: bgColor1 }} value={bgColor1} onChange={(e) => setBgColor1(e.target.value)} />
            </div>
          </div>
          <div>
            <div className="colorInput_div">
              <input type="color" value={bgColor2} onChange={(e) => setBgColor2(e.target.value)} />
              <input type="text" maxLength="7" style={{ background: bgColor2 }} value={bgColor2} onChange={(e) => setBgColor2(e.target.value)} />
            </div>
          </div>
          <div>
            <div className="colorInput_div" style={{ display: visibilityColor3_inputs }}>
              <input type="color" value={bgColor3} onChange={(e) => setBgColor3(e.target.value)} />
              <input type="text" maxLength="7" style={{ background: bgColor3 }} value={bgColor3} onChange={(e) => setBgColor3(e.target.value)} />
              <button onClick={removeColor3}>R</button>
            </div>
            <div
              className="colorButton_div"
              style={{ display: visibilityColor3_addButt }}>
              <button onClick={addColor3}>Add color 3</button>
            </div>
          </div>
          <div>
            <div className="colorInput_div" style={{ display: bgColor4 === "" ? "none" : visibilityColor4_inputs, }}>
              <input type="color" value={bgColor4} onChange={(e) => setBgColor4(e.target.value)} />
              <input type="text" maxLength="7" style={{ background: bgColor4 }} value={bgColor4} onChange={(e) => setBgColor4(e.target.value)} />
              <button onClick={removeColor4}>R</button>
            </div>
            <div className="colorButton_div" style={{ display: visibilityColor4_addButt }}>
              <button onClick={addColor4}>Add color 4</button>
            </div>
          </div>

          <div className="colorPercent_input">
            <div>
              <label htmlFor="">Color A</label>
              <div>
                <input type="range" min="-100" max="100" value={color1Percent} onChange={(e) => setColor1Percent(e.target.value)} />
                <p>{`${color1Percent}%`}</p>
              </div>
            </div>

            <div>
              <label htmlFor="">Color B</label>
              <div>
                <input type="range" min="-100" max="100" value={color2Percent} onChange={(e) => setColor2Percent(e.target.value)} />
                <p>{`${color2Percent}%`}</p>
              </div>
            </div>

            <div style={{ display: visibilityColor3_inputs === "flex" ? "flex" : "none", }} >
              <label htmlFor="">Color C</label>
              <div>
                <input type="range" min="-100" max="100" value={color3Percent} onChange={(e) => setColor3Percent(e.target.value)} />
                <p>{`${color3Percent}%`}</p>
              </div>
            </div>

            <div style={{ display: visibilityColor4_inputs === "flex" ? "flex" : "none", }}>
              <label htmlFor="">Color D</label>
              <div>
                <input type="range" min="-100" max="100" value={color4Percent} onChange={(e) => setColor4Percent(e.target.value)} />
                <p>{`${color4Percent}%`}</p>
              </div>
            </div>
          </div>

          <div className="colorSideButton_div">
            <div style={{ border: but === 1 ? `2px solid orange` : `2px solid rgb(222, 216, 216)`, }} onClick={() => { setColorSide("to left"); setBut(1); setGradient('linear-gradient'); }}>
              <svg fill="gray" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z" />
              </svg>
            </div>
            <div style={{ border: but === 2 ? `2px solid orange` : `2px solid rgb(222, 216, 216)`, }} onClick={() => { setColorSide("to right"); setBut(2); setGradient('linear-gradient'); }} >
              <svg fill="gray" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
              </svg>
            </div>
            <div style={{ border: but === 3 ? `2px solid orange` : `2px solid rgb(222, 216, 216)`, }} onClick={() => { setColorSide("to top"); setBut(3); setGradient('linear-gradient'); }}>
              <svg fill="gray" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M440-80v-647L256-544l-56-56 280-280 280 280-56 57-184-184v647h-80Z" />
              </svg>
            </div>
            <div style={{ border: but === 4 ? `2px solid orange` : `2px solid rgb(222, 216, 216)`, }} onClick={() => { setColorSide("to bottom"); setBut(4); setGradient('linear-gradient'); }}>
              <svg fill="gray" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M480-80 200-360l56-56 184 183v-647h80v647l184-184 56 57L480-80Z" />
              </svg>
            </div>
            <div style={{ border: but === 5 ? `2px solid orange` : `2px solid rgb(222, 216, 216)`, }} onClick={() => { setColorSide("to top right"); setBut(5); setGradient('linear-gradient'); }}>
              <svg fill="gray" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" >
                <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" />
              </svg>
            </div>
            <div style={{ border: but === 6 ? `2px solid orange` : `2px solid rgb(222, 216, 216)`, }} onClick={() => { setColorSide("to top left"); setBut(6); setGradient('linear-gradient'); }} >
              <svg fill="gray" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M744-160 280-624v264h-80v-400h400v80H336l464 464-56 56Z" />
              </svg>
            </div>
            <div style={{ border: but === 7 ? `2px solid orange` : `2px solid rgb(222, 216, 216)`, }} onClick={() => { setColorSide("to bottom right"); setBut(7); setGradient('linear-gradient'); }} >
              <svg fill="gray" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M360-200v-80h264L160-744l56-56 464 464v-264h80v400H360Z" />
              </svg>
            </div>
            <div style={{ border: but === 8 ? `2px solid orange` : `2px solid rgb(222, 216, 216)`, }} onClick={() => { setColorSide("to bottom left"); setBut(8); setGradient('linear-gradient'); }}>
              <svg fill="gray" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M200-200v-400h80v264l464-464 56 56-464 464h264v80H200Z" />
              </svg>
            </div>
            <div style={{ border: but === 9 ? `2px solid orange` : `2px solid rgb(222, 216, 216)`, }} onClick={() => { setColorSide("circle"); setBut(9); setGradient('radial-gradient'); }}>
              <svg fill='gray' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
            </div>
          </div>
        </div>
        <button onClick={seeCodeOfcontaint} className='getCodeButt'>{"Get Code </>"}</button>
      </div>
    </div>
  );
}

export default App;
