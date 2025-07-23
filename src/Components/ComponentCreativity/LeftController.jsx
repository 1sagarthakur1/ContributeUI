import React, { useState } from 'react';

import './Styles/leftController.css'
export default function LeftController({ addDiv, selectedNode, selectedId, updateDiv }) {
  const inputStyle = {
    width: '50px',
    padding: '0px 4px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px'
  };

  const rangeStyle = {
    flex: 1,
    width: '120px',
    height: '5px'
  };

  const isDiv = selectedNode?.tag === 'div';
  const isTextTag = ['p', 'span', 'ul', 'li', 'ol', 'i', 'b', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(selectedNode?.tag);
  const isInput = selectedNode?.tag === 'input';
  const isCheckboxOrRadio = selectedNode?.type === 'checkbox' || selectedNode?.type === 'radio';


  const [linkedMargin, setLinkedMargin] = useState(true);
  const [linkedPadding, setLinkedPadding] = useState(true);
  const [linkedRadius, setLinkedRadius] = useState(true);
  const [unit, setUnit] = useState(() => selectedNode?.borderRadiusUnit || 'px');
  const [tl, tr, br, bl] = (selectedNode?.borderRadius || '0 0 0 0').split(' ');



  const getSpacing = (type, side) => {
    if (!selectedNode || !selectedNode[type]) return 0;
    const val = selectedNode[type];
    return typeof val === 'number' ? val : val?.[side] || 0;
  };

  const setAllSpacing = (type, v) => {
    const newVal = typeof v === 'object' ? v : { top: v, right: v, bottom: v, left: v };
    updateDiv(selectedId, type, newVal);
  };

  const setSpacing = (type, side, v) => {
    const prev = selectedNode[type];
    const newVal = typeof prev === 'number'
      ? { top: v, right: v, bottom: v, left: v }
      : { ...prev, [side]: v };
    updateDiv(selectedId, type, newVal);
  };

  // Update all radius-related functions:
  const toggleUnit = () => {
    const newUnit = unit === 'px' ? '%' : 'px';
    setUnit(newUnit);
    updateDiv(selectedId, 'borderRadiusUnit', newUnit);
  };

  const handleAllRadius = (value) => {
    const v = `${value}`;
    updateDiv(selectedId, 'borderRadius', [v, v, v, v].join(' '));
  };

  const handleCornerChange = (idx, value) => {
    const arr = [tl, tr, br, bl];
    arr[idx] = `${value}`;
    updateCorners(arr);
  };

  const updateCorners = (corners) => {
    const val = corners.join(' ');
    updateDiv(selectedId, 'borderRadius', val);
  };

  return (
    <div className='left_container'>
      {/* ✅ Always show this button */}
      <button onClick={() => addDiv()} className='addTopDivButton'>
        <span className="text">➕ Add Top Div</span>
      </button>

      {/* 🧯 If no node is selected, skip controls */}
      {(isDiv || isInput) && (
        <div style={{ margin: '5px 0px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          {/* Width */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ width: '20px', fontSize: '13px', color: 'white' }}>W:</label>
            <input
              type="number"
              min="0"
              value={selectedNode.width}
              onChange={e => updateDiv(selectedId, 'width', Math.max(0, +e.target.value))}
              style={inputStyle}
            />
            <input
              type="range"
              min="0"
              max="1000"
              value={selectedNode.width}
              onChange={e => updateDiv(selectedId, 'width', Math.max(0, +e.target.value))}
              style={rangeStyle}
            />
          </div>

          {/* Height */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <label style={{ width: '20px', fontSize: '13px', color: 'white' }}>H:</label>
            <input
              type="number"
              min="0"
              value={selectedNode.height}
              onChange={e => updateDiv(selectedId, 'height', Math.max(0, +e.target.value))}
              style={inputStyle}
            />
            <input
              type="range"
              min="0"
              max="1000"
              value={selectedNode.height}
              onChange={e => updateDiv(selectedId, 'height', Math.max(0, +e.target.value))}
              style={rangeStyle}
            />
          </div>

          {/* Background */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <label style={{ width: '15px', fontSize: '13px', color: 'white' }}>BG:</label>
            <input
              type="color"
              value={selectedNode.color}
              onChange={e => updateDiv(selectedId, 'color', e.target.value)}
              style={{ width: '50px', height: '25px' }}
            />
          </div>
        </div>
      )}


      {/* Margin */}
      {selectedNode && (isDiv || isTextTag || isInput) && (
        <div>
          <hr />
          <h4 style={{ fontSize: '13px', color: 'white', margin: '0px' }}>Margin</h4>
          <label style={{ fontSize: '13px', color: 'white' }}>
            <input
              type="checkbox"
              checked={linkedMargin}
              onChange={() => setLinkedMargin(!linkedMargin)}
            /> Link All
          </label>
          {linkedMargin ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <input
                type="number"
                min="0"
                value={getSpacing('margin', 'top')}
                onChange={e => setAllSpacing('margin', Math.max(0, +e.target.value))}
                style={inputStyle}
              />
              <input
                type="range"
                min="0"
                max="100"
                value={getSpacing('margin', 'top')}
                onChange={e => setAllSpacing('margin', Math.max(0, +e.target.value))}
                style={rangeStyle}
              />
            </div>
          ) : (

            ['top', 'right', 'bottom', 'left'].map(side => (
              <div key={side} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <label style={{ width: '20px', fontSize: '13px', color: 'white' }}>
                  {side === 'top' && '↑'}
                  {side === 'right' && '→'}
                  {side === 'bottom' && '↓'}
                  {side === 'left' && '←'}
                </label>
                <input
                  type="number"
                  min="0"
                  value={getSpacing('margin', side)}
                  onChange={e => setSpacing('margin', side, Math.max(0, +e.target.value))}
                  style={inputStyle}
                />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={getSpacing('margin', side)}
                  onChange={e => setSpacing('margin', side, Math.max(0, +e.target.value))}
                  style={rangeStyle}
                />
              </div>
            ))
          )}
        </div>
      )}

      {/* Padding */}
      {selectedNode && (isDiv || isTextTag || isInput) && (
        <div style={{ marginTop: '5px' }}>
          <h4 style={{ fontSize: '13px', color: 'white', margin: '0px' }}>Padding</h4>
          <label style={{ fontSize: '13px', color: 'white' }}>
            <input
              type="checkbox"
              checked={linkedPadding}
              onChange={() => setLinkedPadding(!linkedPadding)}
            /> Link All
          </label>
          {linkedPadding ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <input
                type="number"
                min="0"
                value={getSpacing('padding', 'top')}
                onChange={e => setAllSpacing('padding', Math.max(0, +e.target.value))}
                style={inputStyle}
              />
              <input
                type="range"
                min="0"
                max="100"
                value={getSpacing('padding', 'top')}
                onChange={e => setAllSpacing('padding', Math.max(0, +e.target.value))}
                style={rangeStyle}
              />
            </div>
          ) : (
            ['top', 'right', 'bottom', 'left'].map(side => (
              <div key={side} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <label style={{ width: '20px', fontSize: '13px', color: 'white' }}>
                  {side === 'top' && '↑'}
                  {side === 'right' && '→'}
                  {side === 'bottom' && '↓'}
                  {side === 'left' && '←'}
                </label>
                <input
                  type="number"
                  min="0"
                  value={getSpacing('padding', side)}
                  onChange={e => setSpacing('padding', side, Math.max(0, +e.target.value))}
                  style={inputStyle}
                />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={getSpacing('padding', side)}
                  onChange={e => setSpacing('padding', side, Math.max(0, +e.target.value))}
                  style={rangeStyle}
                />
              </div>
            ))
          )}
        </div>
      )}

      {/* For Text  */}
      {selectedNode && (isTextTag || (isInput && !isCheckboxOrRadio)) && (
        <div style={{ marginTop: '10px' }}>
          {/* Font Size */}
          <h4 style={{ fontSize: '13px', color: 'white', margin: '0px' }}>Font Tools</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '5px' }}>
            <label style={{ width: '30px', fontSize: '13px', color: 'white' }}>Size:</label>
            {/* Number input */}
            <input
              type="number"
              min="0"
              value={selectedNode.fontSize}
              onChange={e => updateDiv(selectedId, 'fontSize', e.target.value)}
              style={{ ...inputStyle, width: '40px' }}
            />
            {/* Range input */}
            <input
              type="range"
              min="0"
              max="100"
              value={selectedNode.fontSize}
              onChange={e => updateDiv(selectedId, 'fontSize', e.target.value)}
              style={rangeStyle}
            />
          </div>


          {/* Font Family */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '5px' }}>
            <label style={{ width: '70px', fontSize: '13px', color: 'white' }}>Font Family:</label>
            <select
              value={selectedNode.fontFamily || 'Arial'}
              onChange={e => updateDiv(selectedId, 'fontFamily', e.target.value)}
              style={{
                fontFamily: selectedNode.fontFamily || 'Arial',
                width: '135px',
                fontSize: '13px'
              }}
            >
              <optgroup label="System Sans-Serif">
                {['Arial', 'Helvetica', 'Verdana', 'Tahoma', 'Trebuchet MS', 'Segoe UI', 'system-ui'].map(font => (
                  <option key={font} value={font} style={{ fontFamily: font }}>{font}</option>
                ))}
              </optgroup>
              <optgroup label="Web Sans-Serif">
                {['Roboto', 'Open Sans', 'Poppins', 'Montserrat', 'Raleway', 'Ubuntu', 'Nunito', 'Fira Sans', 'Lato', 'Comfortaa'].map(font => (
                  <option key={font} value={`'${font}', sans-serif`} style={{ fontFamily: `'${font}', sans-serif` }}>{font}</option>
                ))}
              </optgroup>
              <optgroup label="Serif">
                {['Georgia', 'Times New Roman', 'Palatino', 'Garamond', 'Book Antiqua', 'Playfair Display', 'Merriweather', 'Lora', 'Cormorant', 'Alegreya'].map(font => (
                  <option key={font} value={font.includes(' ') ? `'${font}', serif` : font} style={{ fontFamily: font }}>{font}</option>
                ))}
              </optgroup>
              <optgroup label="Monospace">
                {['Courier New', 'Menlo', 'Monaco', 'Consolas', 'Source Code Pro', 'Ubuntu Mono', 'Fira Code', 'Roboto Mono', 'PT Mono', 'Space Mono'].map(font => (
                  <option key={font} value={font.includes(' ') ? `'${font}', monospace` : font} style={{ fontFamily: font }}>{font}</option>
                ))}
              </optgroup>
              <optgroup label="Display">
                {['Impact', 'Comic Sans MS', 'Dancing Script', 'Pacifico', 'Press Start 2P', 'Fredoka One', 'Bangers', 'Lobster', 'Rubik Glitch', 'Creepster'].map(font => (
                  <option key={font} value={font.includes(' ') ? `'${font}', cursive` : font} style={{ fontFamily: font }}>{font}</option>
                ))}
              </optgroup>
            </select>
          </div>

          {/* Font Weight */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '5px' }}>
            <label style={{ width: '70px', fontSize: '13px', color: 'white' }}>Font Weight:</label>
            <select
              value={selectedNode.fontWeight || 'normal'}
              onChange={e => updateDiv(selectedId, 'fontWeight', e.target.value)}
              style={{ width: '135px', fontSize: '13px' }}
            >
              <option value="normal">Normal (400)</option>
              <option value="bold">Bold (700)</option>
              <option value="lighter">Lighter</option>
              <option value="bolder">Bolder</option>
              <option value="100">100 (Thin)</option>
              <option value="200">200 (Extra Light)</option>
              <option value="300">300 (Light)</option>
              <option value="400">400 (Normal)</option>
              <option value="500">500 (Medium)</option>
              <option value="600">600 (Semi Bold)</option>
              <option value="700">700 (Bold)</option>
              <option value="800">800 (Extra Bold)</option>
              <option value="900">900 (Black)</option>
            </select>
          </div>

          {/* Text Align */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '5px' }}>
            <label style={{ width: '70px', fontSize: '13px', color: 'white' }}>Text Align:</label>
            <select
              value={selectedNode.textAlign}
              onChange={e => updateDiv(selectedId, 'textAlign', e.target.value)}
              style={{ width: '135px', fontSize: '13px' }}
            >
              <option value="left">left</option>
              <option value="center">center</option>
              <option value="right">right</option>
              <option value="justify">justify</option>
            </select>
          </div>

          {/* Line Height & Letter Spacing */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <label style={{ width: '70px', fontSize: '13px', color: 'white' }}>Line Height:</label>
              <select
                value={selectedNode.lineHeight || 'normal'}
                onChange={e => updateDiv(selectedId, 'lineHeight', e.target.value)}
                style={{
                  width: '135px',
                  fontSize: '13px'
                }}
              >
                <option value="normal">Normal (default)</option>
                <option value="1">Tight (1)</option>
                <option value="1.2">Compact (1.2)</option>
                <option value="1.5">Standard (1.5)</option>
                <option value="1.8">Loose (1.8)</option>
                <option value="2">Double (2)</option>
                <option value="20px">20px (fixed)</option>
                <option value="120%">120% (relative)</option>
              </select>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <label style={{ width: '70px', fontSize: '10px', color: 'white' }}>Letter Spacing:</label>
              <select
                value={selectedNode.letterSpacing || 'normal'}
                onChange={e => updateDiv(selectedId, 'letterSpacing', e.target.value)}
                style={{
                  width: '135px',
                  fontSize: '13px'
                }}
              >
                <option value="normal">Normal</option>
                <option value="0.1rem">Tight (0.1rem)</option>
                <option value="0.2rem">Standard (0.2rem)</option>
                <option value="0.3rem">Wide (0.3rem)</option>
                <option value="1px">1px</option>
                <option value="2px">2px</option>
                <option value="-1px">-1px (Tighter)</option>
              </select>
            </div>
          </div>

          {/* Text Color */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <label style={{ width: '70px', fontSize: '13px', color: 'white' }}>Text Color:</label>
            <input
              type="color"
              value={selectedNode.textColor}
              onChange={e => updateDiv(selectedId, 'textColor', e.target.value)}
              style={{ width: '40px', height: '20px' }}
            />
          </div>
        </div>
      )}

      {/* Text Shadow Controls */}
      {selectedNode && (isTextTag || (isInput && !isCheckboxOrRadio)) && (
        <div style={{ marginTop: '10px' }}>
          <h4 style={{ fontSize: '13px', color: 'white', margin: '0px' }}>Text Shadow</h4>

          {/* X-offset */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <label style={{ width: '30px', fontSize: '10px', color: 'white' }}>X-offset:</label>
            <input
              type="number"
              value={selectedNode.textShadowX || 0}
              onChange={e => updateDiv(selectedId, 'textShadowX', parseInt(e.target.value) || 0)}
              style={{ ...inputStyle, width: '40px' }}
            />
            <input
              type="range"
              min="-100"
              max="100"
              value={selectedNode.textShadowX || 0}
              onChange={e => updateDiv(selectedId, 'textShadowX', parseInt(e.target.value))}
              style={rangeStyle}
            />
          </div>

          {/* Y-offset */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <label style={{ width: '30px', fontSize: '10px', color: 'white' }}>Y-offset:</label>
            <input
              type="number"
              value={selectedNode.textShadowY || 0}
              onChange={e => updateDiv(selectedId, 'textShadowY', parseInt(e.target.value) || 0)}
              style={{ ...inputStyle, width: '40px' }}
            />
            <input
              type="range"
              min="-100"
              max="100"
              value={selectedNode.textShadowY || 0}
              onChange={e => updateDiv(selectedId, 'textShadowY', parseInt(e.target.value))}
              style={rangeStyle}
            />
          </div>

          {/* Blur */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <label style={{ width: '30px', fontSize: '13px', color: 'white' }}>Blur:</label>
            <input
              type="number"
              min="0"
              value={selectedNode.textShadowBlur || 0}
              onChange={e => updateDiv(selectedId, 'textShadowBlur', Math.max(0, parseInt(e.target.value) || 0))}
              style={{ ...inputStyle, width: '40px' }}
            />
            <input
              type="range"
              min="0"
              max="100"
              value={selectedNode.textShadowBlur || 0}
              onChange={e => updateDiv(selectedId, 'textShadowBlur', parseInt(e.target.value))}
              style={rangeStyle}
            />
          </div>

          {/* Color */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '5px' }}>
            <label style={{ width: '70px', fontSize: '13px', color: 'white' }}>Color:</label>
            <input
              type="color"
              value={selectedNode.textShadowColor || '#000000'}
              onChange={e => updateDiv(selectedId, 'textShadowColor', e.target.value)}
              style={{ width: '40px', height: '20px' }}
            />
          </div>
        </div>
      )}



      {/* Border */}
      {selectedNode && (isDiv || isInput) && !isCheckboxOrRadio  && (
        <>
          <hr />
          <div style={{ marginTop: '5px' }}>
            <h4 style={{ fontSize: '13px', color: 'white', margin: '0px' }}>Border</h4>
            {/* Border Width */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px' }}>
              <label style={{ width: '20px', fontSize: '13px', color: 'white' }}>W:</label>
              <input
                type="number"
                min="0"
                value={selectedNode.borderWidth}
                onChange={e => updateDiv(selectedId, 'borderWidth', Math.max(0, +e.target.value))}
                style={inputStyle}
              />
              <input
                type="range"
                min="0"
                max="20"
                value={selectedNode.borderWidth}
                onChange={e => updateDiv(selectedId, 'borderWidth', Math.max(0, +e.target.value))}
                style={rangeStyle}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-arround', gap: '35px' }}>
              {/* Border Style */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px' }}>
                <label style={{ width: '30px', fontSize: '13px', color: 'white' }}>Style:</label>
                <select
                  value={selectedNode.borderStyle}
                  onChange={e => updateDiv(selectedId, 'borderStyle', e.target.value)}
                  style={{
                    flex: 1,
                    // padding: '4px',
                    fontSize: '13px',
                    borderRadius: '4px',
                    border: '1px solid #ccc'
                  }}
                >
                  <option>solid</option>
                  <option>dashed</option>
                  <option>dotted</option>
                  <option>double</option>
                  <option>none</option>
                </select>
              </div>

              {/* Border Color */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px' }}>
                <label style={{ width: '30px', fontSize: '13px', color: 'white' }}>Color:</label>
                <input
                  type="color"
                  value={selectedNode.borderColor}
                  onChange={e => updateDiv(selectedId, 'borderColor', e.target.value)}
                  style={{
                    width: '40px',
                    height: '20px',
                    padding: 0
                  }}
                />
              </div>
            </div>

            {/* Border Radius */}
            <div style={{ marginTop: '10px' }}>
              <h4 style={{ fontSize: '13px', color: 'white', margin: '0px' }}>
                Border Radius
                <button onClick={toggleUnit} style={{ height: '20px', marginLeft: '60px' }}>
                  Unit: {unit}
                </button>
              </h4>
              <label style={{ fontSize: '13px', color: 'white' }}>
                <input
                  type="checkbox"
                  checked={linkedRadius}
                  onChange={() => setLinkedRadius(!linkedRadius)}
                /> Link All
              </label>

              {linkedRadius ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <input
                    type="number"
                    min="0"
                    value={parseInt(tl) || 0}
                    onChange={(e) => handleAllRadius(Math.max(0, +e.target.value))}
                    style={inputStyle}
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={parseInt(tl) || 0}
                    onChange={(e) => handleAllRadius(Math.max(0, +e.target.value))}
                    style={rangeStyle}
                  />
                </div>
              ) : (
                ['↖', '↗', '↘', '↙'].map((arrow, i) => (
                  <div key={arrow} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <label style={{ width: '20px', fontSize: '13px', color: 'white' }}>{arrow}</label>
                    <input
                      type="number"
                      min="0"
                      value={parseInt([tl, tr, br, bl][i]) || 0}
                      onChange={(e) => handleCornerChange(i, Math.max(0, +e.target.value))}
                      style={inputStyle}
                    />
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={parseInt([tl, tr, br, bl][i]) || 0}
                      onChange={(e) => handleCornerChange(i, Math.max(0, +e.target.value))}
                      style={rangeStyle}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </>
      )}

      {/* Box Shadow */}
      {selectedNode && (isDiv || isInput) && (
        <div style={{ marginTop: '5px' }}>
          <hr />
          <h4 style={{ fontSize: '13px', color: 'white', margin: '0px' }}>Box Shadow</h4>

          {/* Shadow X */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px' }}>
            <label style={{ width: '20px', fontSize: '13px', color: 'white' }}>X:</label>
            <input
              type="number"
              value={selectedNode.shadowX}
              onChange={e => updateDiv(selectedId, 'shadowX', +e.target.value)}
              style={inputStyle}
            />
            <input
              type="range"
              min="-100"
              max="100"
              value={selectedNode.shadowX}
              onChange={e => updateDiv(selectedId, 'shadowX', +e.target.value)}
              style={rangeStyle}
            />
          </div>

          {/* Shadow Y */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px' }}>
            <label style={{ width: '20px', fontSize: '13px', color: 'white' }}>Y:</label>
            <input
              type="number"
              value={selectedNode.shadowY}
              onChange={e => updateDiv(selectedId, 'shadowY', +e.target.value)}
              style={inputStyle}
            />
            <input
              type="range"
              min="-100"
              max="100"
              value={selectedNode.shadowY}
              onChange={e => updateDiv(selectedId, 'shadowY', +e.target.value)}
              style={rangeStyle}
            />
          </div>

          {/* Shadow Blur */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px' }}>
            <label style={{ width: '20px', fontSize: '10px', color: 'white' }}>Blur:</label>
            <input
              type="number"
              min="0"
              value={selectedNode.shadowBlur}
              onChange={e => updateDiv(selectedId, 'shadowBlur', Math.max(0, +e.target.value))}
              style={inputStyle}
            />
            <input
              type="range"
              min="0"
              max="100"
              value={selectedNode.shadowBlur}
              onChange={e => updateDiv(selectedId, 'shadowBlur', Math.max(0, +e.target.value))}
              style={rangeStyle}
            />
          </div>

          {/* Shadow Spread */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px' }}>
            <label style={{ width: '30px', fontSize: '10px', color: 'white' }}>Spread:</label>
            <input
              type="number"
              value={selectedNode.shadowSpread}
              onChange={e => updateDiv(selectedId, 'shadowSpread', +e.target.value)}
              style={{ ...inputStyle, width: '40px' }}
            />
            <input
              type="range"
              min="-100"
              max="100"
              value={selectedNode.shadowSpread}
              onChange={e => updateDiv(selectedId, 'shadowSpread', +e.target.value)}
              style={rangeStyle}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-arround', gap: '35px' }}>
            {/* Shadow Inset/Outset */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px' }}>
              <label style={{ width: '30px', fontSize: '13px', color: 'white' }}>Type:</label>
              <select
                value={selectedNode.shadowInset ? 'inset' : 'outset'}
                onChange={e => updateDiv(selectedId, 'shadowInset', e.target.value === 'inset')}
                style={{
                  flex: 1,
                  // padding: '4px',
                  fontSize: '13px',
                  borderRadius: '4px',
                  // border: '1px solid #ccc'
                }}
              >
                <option value="outset">outset</option>
                <option value="inset">inset</option>
              </select>
            </div>

            {/* Shadow Color */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px' }}>
              <label style={{ width: '30px', fontSize: '13px', color: 'white' }}>Color:</label>
              <input
                type="color"
                value={selectedNode.shadowColor}
                onChange={e => updateDiv(selectedId, 'shadowColor', e.target.value)}
                style={{
                  width: '40px',
                  height: '20px',
                  // border: 'none',
                  padding: 0
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
