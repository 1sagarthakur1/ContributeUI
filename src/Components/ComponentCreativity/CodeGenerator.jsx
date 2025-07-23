import React, { useState } from 'react';

const formatSpacing = (val) =>
  typeof val === 'object'
    ? `${val.top}px ${val.right}px ${val.bottom}px ${val.left}px`
    : `${val}px`;

const formatFontSize = (value) => {
  if (!value) return '16px';
  if (typeof value === 'number') return `${value}px`;
  if (value.match(/^\d+$/)) return `${value}px`;
  return value;
};

const generateJSX = (tree, indent = 0) =>
  tree
    .map((node) => {
      const space = ' '.repeat(indent);
      const tag = node.tag || 'div';

      if (tag === 'input') {
        if (node.hasLabel) {
          return `${space}<div className="input-container-${node.id}">
${space}  <label htmlFor="input-${node.id}" className="input-label-${node.id}">
${space}    ${node.labelText || 'Label'}
${space}  </label>
${space}  <input
${space}    id="input-${node.id}"
${space}    type="${node.type || 'text'}"
${space}    placeholder="${node.placeholder || ''}"
${space}    className="input-${node.id}"
${space}    ${node.disabled ? 'disabled' : ''}
${space}  />
${space}</div>`;
        }
        return `${space}<input 
${space}  type="${node.type || 'text'}" 
${space}  placeholder="${node.placeholder || ''}"
${space}  className="input-${node.id}"
${space}  ${node.disabled ? 'disabled' : ''}
${space}/>`;
      }

      const className =
        tag === 'div'
          ? `className="box-${node.id}"`
          : `className="text-${node.id}"`;

      const children = generateJSX(node.children, indent + 2);

      return `${space}<${tag} ${className}>
${node.text ? `${space}  ${node.text}` : ''}
${children}
${space}</${tag}>`;
    })
    .join('\n');

const generateCSS = (tree) =>
  tree
    .map((node) => {
      const borderRadius = typeof node.borderRadius === 'string'
        ? node.borderRadius.split(' ')
          .map(v => `${v}${node.borderRadiusUnit || 'px'}`)
          .join(' ')
        : '0';

      if (node.tag === 'input') {
        let css = `.input-${node.id} {\n`;
        css += `  width: ${node.width || (node.type === 'checkbox' || node.type === 'radio' ? 'auto' : 150)}px;\n`;
        css += `  height: ${node.height || (node.type === 'checkbox' || node.type === 'radio' ? 'auto' : 30)}px;\n`;
        css += `  padding: ${formatSpacing(node.padding || 0)};\n`;
        css += `  background-color: ${node.color || '#fff'};\n`;

        if (node.type === 'checkbox' || node.type === 'radio') {
          css += `  border: none;\n`;
          css += `  accent-color: ${node.accentColor || 'initial'};\n`;
        } else {
          css += `  border: ${node.borderWidth ?? 1}px ${node.borderStyle || 'solid'} ${node.borderColor || '#ccc'};\n`;
          css += `  border-radius: ${borderRadius};\n`;
          css += `  box-shadow: ${node.shadowInset ? 'inset ' : ''}${node.shadowX || 0}px ${node.shadowY || 0}px ${node.shadowBlur || 0}px ${node.shadowSpread || 0}px ${node.shadowColor || 'black'};\n`;
        }

        css += `}\n\n`;

        if (node.hasLabel) {
          const flexDirection = node.labelPosition === 'top' ? 'column' :
            node.labelPosition === 'bottom' ? 'column-reverse' :
              node.labelPosition === 'left' ? 'row' : 'row-reverse';

          css += `.input-container-${node.id} {\n`;
          css += `  display: flex;\n`;
          css += `  flex-direction: ${flexDirection};\n`;
          if (flexDirection.includes('row')) {
            css += `  justify-content: ${node.justifyContent || 'flex-start'};\n`;
            css += `  align-items: center;\n`;
          } else {
            css += `  align-items: ${node.alignItems || 'center'};\n`;
            css += `  justify-content: flex-start;\n`;
          }
          css += `  gap: ${typeof node.labelSpacing === 'number' ? node.labelSpacing : node.labelSpacing || '4px'};\n`;
          css += `  margin: ${formatSpacing(node.margin || 0)};\n`;
          css += `}\n\n`;

          css += `.input-label-${node.id} {\n`;
          css += `  color: ${node.labelColor || node.textColor || '#000'};\n`;
          css += `  font-size: ${formatFontSize(node.labelFontSize || node.fontSize)};\n`;
          css += `  font-family: ${node.labelFontFamily || node.fontFamily || 'inherit'};\n`;
          css += `  font-weight: ${node.labelFontWeight || node.fontWeight || 'normal'};\n`;
          css += `  letter-spacing: ${node.labelLetterSpacing || node.letterSpacing || 'normal'};\n`;
          css += `  line-height: ${node.labelLineHeight || node.lineHeight || 'normal'};\n`;
          if (node.labelTextShadowX || node.labelTextShadowY || node.labelTextShadowBlur || node.labelTextShadowColor) {
            css += `  text-shadow: ${node.labelTextShadowX || 0}px ${node.labelTextShadowY || 0}px ${node.labelTextShadowBlur || 0}px ${node.labelTextShadowColor || '#000'};\n`;
          }
          css += `  cursor: pointer;\n`;
          css += `}\n\n`;
        } else {
          css += `div > .input-${node.id} {\n`;
          css += `  margin: ${formatSpacing(node.margin || 0)};\n`;
          css += `}\n\n`;
        }

        return css + generateCSS(node.children);
      }

      const isDiv = node.tag === 'div';
      const selector = isDiv ? `.box-${node.id}` : `.text-${node.id}`;

      let css = `${selector} {\n`;
      css += `  margin: ${formatSpacing(node.margin || 0)};\n`;
      css += `  padding: ${formatSpacing(node.padding || 0)};\n`;

      if (isDiv) {
        css += `  width: ${node.width}px;\n`;
        css += `  height: ${node.height}px;\n`;
        css += `  display: ${node.display || 'block'};\n`;
        css += `  flex-direction: ${node.flexDirection || 'row'};\n`;
        css += `  flex-wrap: ${node.flexWrap || 'nowrap'};\n`;
        css += `  justify-content: ${node.justifyContent || 'flex-start'};\n`;
        css += `  align-items: ${node.alignItems || 'stretch'};\n`;
        css += `  gap: ${node.gap || 0}px;\n`;
        css += `  background-color: ${node.color || 'transparent'};\n`;
        css += `  border: ${node.borderWidth || 0}px ${node.borderStyle || 'solid'} ${node.borderColor || 'transparent'};\n`;
        css += `  border-radius: ${borderRadius};\n`;
        css += `  box-shadow: ${node.shadowX
          ? `${node.shadowInset ? 'inset ' : ''}${node.shadowX || 0}px ${node.shadowY || 0}px ${node.shadowBlur || 0}px ${node.shadowSpread || 0}px ${node.shadowColor || 'black'}`
          : 'none'};\n`;
      } else {
        css += `  font-size: ${formatFontSize(node.fontSize)};\n`;
        css += `  font-family: ${node.fontFamily || 'inherit'};\n`;
        css += `  font-weight: ${node.fontWeight || 'normal'};\n`;
        css += `  color: ${node.textColor || '#000'};\n`;
        css += `  text-align: ${node.textAlign || 'left'};\n`;
        css += `  text-shadow: ${node.textShadowX || 0}px ${node.textShadowY || 0}px ${node.textShadowBlur || 0}px ${node.textShadowColor || 'transparent'};\n`;
        css += `  line-height: ${node.lineHeight || 'normal'};\n`;
        css += `  letter-spacing: ${node.letterSpacing || 'normal'};\n`;
      }

      css += `}\n\n`;
      return css + generateCSS(node.children);
    })
    .join('\n');

export default function CodeGenerator({ tree, onClose }) {
  const [copied, setCopied] = useState({ jsx: false, css: false });

  const handleCopy = (type) => {
    const text = type === 'jsx' ? generateJSX(tree) : generateCSS(tree);
    navigator.clipboard.writeText(text).then(() => {
      setCopied({ ...copied, [type]: true });
      setTimeout(() => setCopied({ ...copied, [type]: false }), 2000);
    });
  };

  return (
    <>
      <div style={{
        marginTop: 40,
        padding: 20,
        background: '#f5f5f5',
        height: '90vh',
        width: '100vw',
        borderRadius: 8,
        overflow: 'scroll'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <h2 style={{ margin: 0 }}>Generated Code</h2>
          <button
            style={{
              padding: '8px 16px',
              background: '#ff4444',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '4px',
              fontWeight: 'bold'
            }}
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ marginBottom: 16 }}>Generated JSX</h3>
          <button
            onClick={() => handleCopy('jsx')}
            style={{
              padding: '6px 12px',
              background: copied.jsx ? '#4CAF50' : '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px'
            }}
          >
            {copied.jsx ? 'Copied!' : 'Copy JSX'}
          </button>
        </div>
        <pre style={{
          background: '#282c34',
          color: '#abb2bf',
          padding: 16,
          borderRadius: 4,
          overflow: 'auto',
          maxHeight: '400px',
          fontFamily: '"Fira Code", monospace',
          fontSize: '14px',
          lineHeight: '1.5',
          position: 'relative'
        }}>
          <code>{generateJSX(tree)}</code>
        </pre>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '24px 0 16px' }}>
          <h3>Generated CSS</h3>
          <button
            onClick={() => handleCopy('css')}
            style={{
              padding: '6px 12px',
              background: copied.css ? '#4CAF50' : '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px'
            }}
          >
            {copied.css ? 'Copied!' : 'Copy CSS'}
          </button>
        </div>
        <pre style={{
          background: '#282c34',
          color: '#abb2bf',
          padding: 16,
          borderRadius: 4,
          overflow: 'auto',
          maxHeight: '400px',
          fontFamily: '"Fira Code", monospace',
          fontSize: '14px',
          lineHeight: '1.5'
        }}>
          <code>{generateCSS(tree)}</code>
        </pre>
      </div>
    </>
  );
}