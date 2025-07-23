import React from 'react';
import './Styles/rightController.css';
import DeleteElementButton from '../Elements/DeleteElementButton';
import GetCodeButton from '../Elements/GetCodeButton';

const semanticTags = ['p', 'ul', 'ol', 'li', 'span', 'b', 'i'];
const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
export default function RightController({ selectedNode, deleteDiv, selectedId, updateDiv, addDiv, onGetCodeClick }) {
  const selectStyle = {
    padding: '4px 8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '12px',
    width: '180px',
  };

  const inputStyle = {
    width: '80px',
    padding: '4px 6px',
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


  if (!selectedNode) return (
    <div className='right_container'></div>
  );


  return (
    <div className='right_container'>

      {/* Delete Button */}
      {selectedId && (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '4px' }}>
          <DeleteElementButton deleteDiv={deleteDiv} selectedId={selectedId} />
          <GetCodeButton onGetCodeClick={onGetCodeClick} />
        </div>
      )}

      {/* Text */}
      <div style={{ marginTop: '5px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <label
            style={{
              color: 'white',
              fontSize: '13px',
              marginBottom: '5px',
              fontWeight: 'bold',
            }}
          >
            Text:
          </label>
          <button
            style={{
              margin: '2px',
              fontSize: '12px',
              backgroundColor: '#e74c3c',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={() => updateDiv(selectedId, 'text', '')}
          >
            Clear
          </button>
        </div>
        <textarea
          style={{
            maxWidth: '210px',
            minWidth: '210px',
            fontSize: '13px',
            display: 'block',
            marginBottom: '5px',
          }}
          value={selectedNode.text || ''}
          onChange={(e) => updateDiv(selectedId, 'text', e.target.value)}
          rows={4}
          cols={50}
        />
      </div>

      {/* Add Elements Buttons */}
      <div>
        <hr />
        <h4 style={{ fontSize: '13px', color: 'white', margin: '0px' }}>Elements</h4>
        <button onClick={() => addDiv(selectedId)}>➕ Nested Div</button>
        {semanticTags.map(tag => (
          <button key={tag} onClick={() => addDiv(selectedId, tag)}>➕ {tag}</button>
        ))}
        <select style={{ height: '25px', backgroundColor: '#efefef', borderRadius: '2px' }} onChange={e => e.target.value && addDiv(selectedId, e.target.value)}>
          <option value="">➕ Headings</option>
          {headingTags.map(tag => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
        <button onClick={() => addDiv(selectedId, 'input')}>➕ Input</button>
      </div>


      {/* Display & Flex Controls */}
      {selectedNode && isDiv && (
        <>
          <hr />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ color: 'white', fontSize: '13px', marginBottom: '5px', fontWeight: 'bold' }}>Display:</label>
            <select
              style={{
                padding: '4px 8px',
                borderRadius: '0px',
                border: '1px solid #ccc',
                fontSize: '14px',
                width: '210px'
              }}
              value={selectedNode.display}
              onChange={e => updateDiv(selectedId, 'display', e.target.value)}
            >
              <option value="block">block</option>
              <option value="inline">inline</option>
              <option value="flex">flex</option>
              <option value="grid">grid</option>
            </select>
          </div>


          {selectedNode.display === 'flex' && (
            <div style={{ width: '100%', marginBottom: '5px', display: 'flex', flexDirection: 'column', gap: '3px', justifyContent: 'flex-start' }}>
              <label style={{ fontWeight: 'bold', color: 'white', fontSize: '10px' }}>Flex Direction:</label>
              <select
                style={selectStyle}
                value={selectedNode.flexDirection}
                onChange={e => updateDiv(selectedId, 'flexDirection', e.target.value)}
              >
                <option value="row">row</option>
                <option value="row-reverse">row-reverse</option>
                <option value="column">column</option>
                <option value="column-reverse">column-reverse</option>
              </select>

              <label style={{ fontWeight: 'bold', color: 'white', fontSize: '10px' }}>Justify Content:</label>
              <select
                style={selectStyle}
                value={selectedNode.justifyContent}
                onChange={e => updateDiv(selectedId, 'justifyContent', e.target.value)}
              >
                <option value="flex-start">flex-start</option>
                <option value="flex-end">flex-end</option>
                <option value="center">center</option>
                <option value="space-between">space-between</option>
                <option value="space-around">space-around</option>
                <option value="space-evenly">space-evenly</option>
              </select>

              <label style={{ fontWeight: 'bold', color: 'white', fontSize: '10px' }}>Align Items:</label>
              <select
                style={selectStyle}
                value={selectedNode.alignItems}
                onChange={e => updateDiv(selectedId, 'alignItems', e.target.value)}
              >
                <option value="stretch">stretch</option>
                <option value="flex-start">flex-start</option>
                <option value="flex-end">flex-end</option>
                <option value="center">center</option>
                <option value="baseline">baseline</option>
              </select>

              <label style={{ fontWeight: 'bold', color: 'white', fontSize: '10px' }}>Flex Wrap:</label>
              <select
                style={selectStyle}
                value={selectedNode.flexWrap}
                onChange={e => updateDiv(selectedId, 'flexWrap', e.target.value)}
              >
                <option value="nowrap">nowrap</option>
                <option value="wrap">wrap</option>
                <option value="wrap-reverse">wrap-reverse</option>
              </select>

              <label style={{ fontWeight: 'bold', color: 'white', fontSize: '10px' }}>Gap:</label>
              <input
                type="number"
                min="0"
                style={{
                  padding: '6px 10px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  fontSize: '14px',
                  width: '100px'
                }}
                value={selectedNode.gap}
                onChange={e =>
                  updateDiv(selectedId, 'gap', Math.max(0, +e.target.value))
                }
              />
            </div>
          )}
        </>
      )}




      {/* Input control section */}
      {isInput && (
        <>
          <hr style={{ width: '210px' }} />
          <h4 style={{ fontSize: '13px', color: 'white', margin: '5px', textAlign: 'start', width: '210px' }}>Input Section</h4>
          {/* Input Type */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{ width: '70px', fontSize: '13px', color: 'white' }}>Input Type:</label>
            <select
              value={selectedNode.type || 'text'}
              onChange={(e) => updateDiv(selectedId, 'type', e.target.value)}
              style={{ width: '142px', fontSize: '13px' }}
            >
              <option value="text">Text</option>
              <option value="password">Password</option>
              <option value="email">Email</option>
              <option value="number">Number</option>
              <option value="tel">Telephone</option>
              <option value="url">URL</option>
              <option value="search">Search</option>
              <option value="date">Date</option>
              <option value="month">Month</option>
              <option value="week">Week</option>
              <option value="time">Time</option>
              <option value="datetime-local">Datetime-Local</option>
              <option value="color">Color</option>
              <option value="checkbox">Checkbox</option>
              <option value="radio">Radio</option>
              <option value="range">Range</option>
              <option value="file">File</option>
            </select>
          </div>

          {/* Input Placeholder */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <label style={{ width: '70px', fontSize: '13px', color: 'white' }}>Placeholder:</label>
            <input
              type="text"
              value={selectedNode.placeholder || ''}
              onChange={(e) => updateDiv(selectedId, 'placeholder', e.target.value)}
              style={{ width: '135px', fontSize: '13px' }}
            />
          </div>
        </>
      )}


      {isInput && (
        <div
          style={{
            width: '210px',
            backgroundColor: '#f9f9f9',
            borderRadius: '5px',
            padding: '5px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}
        >
          <label style={{ display: 'flex', fontSize: '15px' }}>
            <input
              type="checkbox"
              checked={selectedNode.hasLabel}
              onChange={(e) => updateDiv(selectedId, 'hasLabel', e.target.checked)}
              style={{ marginRight: '10px' }}
            />
            <h4 style={{ margin: '0px' }}> Show Label</h4>
          </label>

          {selectedNode.hasLabel && (
            <>
              {/* Existing label controls */}
              <div style={{ marginTop: '5px', marginBottom: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', fontSize: '15px' }}>
                <label style={{ display: 'block' }}>Label Text:</label>
                <input
                  value={selectedNode.labelText || ''}
                  onChange={(e) => updateDiv(selectedId, 'labelText', e.target.value)}
                  style={{ width: '100px', padding: '3px 10px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </div>

              <div style={{ marginTop: '5px', marginBottom: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', fontSize: '15px' }}>
                <label style={{ display: 'block' }}>Position:</label>
                <select
                  value={selectedNode.labelPosition || 'right'}
                  onChange={(e) => updateDiv(selectedId, 'labelPosition', e.target.value)}
                  style={{ width: '122px', padding: '3px 10px', borderRadius: '4px', border: '1px solid #ccc' }}
                >
                  {['top', 'right', 'bottom', 'left'].map(pos => (
                    <option key={pos} value={pos}>{pos}</option>
                  ))}
                </select>
              </div>

              <div style={{ marginTop: '5px', marginBottom: '5px', display: 'flex', flexDirection: 'column', fontSize: '10px' }}>
                <label style={{ display: 'block' }}>Font Size:</label>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                  <input
                    type="number"
                    min="8"
                    max="32"
                    value={parseInt(selectedNode.labelFontSize) || 14}
                    onChange={(e) => updateDiv(selectedId, 'labelFontSize', `${e.target.value}px`)}
                    style={{ width: '40px', padding: '3px 10px', borderRadius: '4px', border: '1px solid #ccc' }}
                  />
                  <input
                    type="range"
                    min="8"
                    max="32"
                    value={parseInt(selectedNode.labelFontSize) || 14}
                    onChange={(e) => updateDiv(selectedId, 'labelFontSize', `${e.target.value}px`)}
                    style={rangeStyle}
                  />
                </div>
              </div>

              <div style={{ marginTop: '5px', marginBottom: '5px', display: 'flex', flexDirection: 'column', fontSize: '10px' }}>
                <label style={{ display: 'block' }}>Spacing:</label>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                  <input
                    type="number"
                    min="0"
                    max="20"
                    value={parseInt(selectedNode.labelSpacing) || 4}
                    onChange={(e) => updateDiv(selectedId, 'labelSpacing', `${e.target.value}px`)}
                    style={{ width: '40px', padding: '3px 10px', borderRadius: '4px', border: '1px solid #ccc' }}
                  />
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={parseInt(selectedNode.labelSpacing) || 4}
                    onChange={(e) => updateDiv(selectedId, 'labelSpacing', `${e.target.value}px`)}
                    style={rangeStyle}
                  />
                </div>
              </div>

              {/* NEW: Additional label styling controls */}
              <div style={{ marginTop: '5px', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px' }}>
                <label style={{ display: 'block' }}>Font Family:</label>
                <select
                  value={selectedNode.labelFontFamily || 'Arial'}
                  onChange={(e) => updateDiv(selectedId, 'labelFontFamily', e.target.value)}
                  style={{
                    fontFamily: selectedNode.labelFontFamily || 'Arial',
                    width: '122px',
                    padding: '3px 10px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
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

              <div style={{ marginTop: '5px', marginBottom: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', fontSize: '15px' }}>
                <label style={{ display: 'block' }}>Font Weight:</label>
                <select
                  value={selectedNode.labelFontWeight || 'normal'}
                  onChange={(e) => updateDiv(selectedId, 'labelFontWeight', e.target.value)}
                  style={{ width: '122px', padding: '3px 10px', borderRadius: '4px', border: '1px solid #ccc' }}
                >
                  <option value="normal">Normal</option>
                  <option value="bold">Bold</option>
                  <option value="lighter">Lighter</option>
                  <option value="bolder">Bolder</option>
                </select>
              </div>

              <div style={{ marginTop: '5px', marginBottom: '5px', display: 'flex', flexDirection: 'column', fontSize: '10px' }}>
                <label style={{ display: 'block' }}>Letter Spacing:</label>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    step="0.1"
                    value={parseFloat(selectedNode.labelLetterSpacing) || 0}
                    onChange={(e) => updateDiv(selectedId, 'labelLetterSpacing', `${e.target.value}px`)}
                    style={{ width: '40px', padding: '3px 10px', borderRadius: '4px', border: '1px solid #ccc' }}
                  />
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.1"
                    value={parseFloat(selectedNode.labelLetterSpacing) || 0}
                    onChange={(e) => updateDiv(selectedId, 'labelLetterSpacing', `${e.target.value}px`)}
                    style={rangeStyle}
                  />
                </div>
              </div>

              <div style={{ marginTop: '5px', marginBottom: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', fontSize: '15px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <input
                    type="checkbox"
                    checked={selectedNode.labelTextShadow || false}
                    onChange={(e) => updateDiv(selectedId, 'labelTextShadow', e.target.checked)}
                    style={{ margin: 0 }}
                  />
                  Text Shadow
                </label>
              </div>

              {selectedNode.labelTextShadow && (
                <>
                  <div style={{ marginTop: '5px', marginBottom: '5px', display: 'flex', flexDirection: 'column', fontSize: '10px' }}>
                    <label style={{ display: 'block' }}>Shadow X:</label>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                      <input
                        type="number"
                        min="-10"
                        max="10"
                        value={selectedNode.labelTextShadowX || 0}
                        onChange={(e) => updateDiv(selectedId, 'labelTextShadowX', parseInt(e.target.value))}
                        style={{ width: '40px', padding: '3px 10px', borderRadius: '4px', border: '1px solid #ccc' }}
                      />
                      <input
                        type="range"
                        min="-10"
                        max="10"
                        value={selectedNode.labelTextShadowX || 0}
                        onChange={(e) => updateDiv(selectedId, 'labelTextShadowX', parseInt(e.target.value))}
                        style={rangeStyle}
                      />
                    </div>
                  </div>

                  <div style={{ marginTop: '5px', marginBottom: '5px', display: 'flex', flexDirection: 'column', fontSize: '10px' }}>
                    <label style={{ display: 'block' }}>Shadow Y:</label>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                      <input
                        type="number"
                        min="-10"
                        max="10"
                        value={selectedNode.labelTextShadowY || 0}
                        onChange={(e) => updateDiv(selectedId, 'labelTextShadowY', parseInt(e.target.value))}
                        style={{ width: '40px', padding: '3px 10px', borderRadius: '4px', border: '1px solid #ccc' }}
                      />
                      <input
                        type="range"
                        min="-10"
                        max="10"
                        value={selectedNode.labelTextShadowY || 0}
                        onChange={(e) => updateDiv(selectedId, 'labelTextShadowY', parseInt(e.target.value))}
                        style={rangeStyle}
                      />
                    </div>
                  </div>

                  <div style={{ marginTop: '5px', marginBottom: '5px', display: 'flex', flexDirection: 'column', fontSize: '10px' }}>
                    <label style={{ display: 'block' }}>Shadow Blur:</label>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                      <input
                        type="number"
                        min="0"
                        max="20"
                        value={selectedNode.labelTextShadowBlur || 0}
                        onChange={(e) => updateDiv(selectedId, 'labelTextShadowBlur', parseInt(e.target.value))}
                        style={{ width: '40px', padding: '3px 10px', borderRadius: '4px', border: '1px solid #ccc' }}
                      />
                      <input
                        type="range"
                        min="0"
                        max="20"
                        value={selectedNode.labelTextShadowBlur || 0}
                        onChange={(e) => updateDiv(selectedId, 'labelTextShadowBlur', parseInt(e.target.value))}
                        style={rangeStyle}
                      />
                    </div>
                  </div>

                  <div style={{ marginTop: '5px', marginBottom: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', fontSize: '15px' }}>
                    <label style={{ display: 'block' }}>Shadow Color:</label>
                    <input
                      type="color"
                      value={selectedNode.labelTextShadowColor || '#000000'}
                      onChange={(e) => updateDiv(selectedId, 'labelTextShadowColor', e.target.value)}
                      style={{ width: '50px', height: '25px', padding: '0px' }}
                    />
                  </div>
                </>
              )}

              <div style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between', fontSize: '10px', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', fontSize: '10px' }}>
                  <label style={{ display: 'block' }}>Color:</label>
                  <input
                    type="color"
                    value={selectedNode.labelColor || '#000000'}
                    onChange={(e) => updateDiv(selectedId, 'labelColor', e.target.value)}
                    style={{ width: '50px', height: '25px', padding: '0px' }}
                  />
                </div>

                {['left', 'right'].includes(selectedNode.labelPosition || 'right') ? (
                  <div style={{ display: 'flex', flexDirection: 'column', fontSize: '10px' }}>
                    <label style={{ display: 'block' }}>Horizontal Align:</label>
                    <select
                      value={selectedNode.justifyContent || 'flex-start'}
                      onChange={(e) => updateDiv(selectedId, 'justifyContent', e.target.value)}
                      style={{ width: '122px', padding: '3px 10px', borderRadius: '4px', border: '1px solid #ccc' }}
                    >
                      <option value="flex-start">Start</option>
                      <option value="flex-end">End</option>
                      <option value="center">Center</option>
                      <option value="space-between">Space Between</option>
                      <option value="space-around">Space Around</option>
                    </select>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', fontSize: '10px' }}>
                    <label style={{ display: 'block' }}>Vertical Align:</label>
                    <select
                      value={selectedNode.alignItems || 'center'}
                      onChange={(e) => updateDiv(selectedId, 'alignItems', e.target.value)}
                      style={{ width: '122px', padding: '3px 10px', borderRadius: '4px', border: '1px solid #ccc' }}
                    >
                      <option value="flex-start">Start</option>
                      <option value="flex-end">End</option>
                      <option value="center">Center</option>
                      <option value="stretch">Stretch</option>
                      <option value="baseline">Baseline</option>
                    </select>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      )}


      {isCheckboxOrRadio && (
        <div>
          <label>Accent Color:</label>
          <input
            type="color"
            value={selectedNode.accentColor || '#000000'}
            onChange={(e) => updateDiv(selectedId, 'accentColor', e.target.value)}
          />
        </div>
      )}

      {isInput && selectedNode?.hasLabel && (
        <>

        </>
      )}



    </div>
  );
}
