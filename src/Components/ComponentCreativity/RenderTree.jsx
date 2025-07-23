import React from 'react';

export default function RenderTree({ tree, selectedId, setSelectedId }) {
  const renderInputWithLabel = (node) => {
    const inputId = `input-${node.id}`;

    // Handle margin/padding exactly like previous code
    const margin = typeof node.margin === 'object'
      ? `${node.margin.top || 0}px ${node.margin.right || 0}px ${node.margin.bottom || 0}px ${node.margin.left || 0}px`
      : `${node.margin || 0}px`;

    const padding = typeof node.padding === 'object'
      ? `${node.padding.top || 0}px ${node.padding.right || 0}px ${node.padding.bottom || 0}px ${node.padding.left || 0}px`
      : `${node.padding || 0}px`;

    // Input styles
    const inputStyles = {
      width: `${node.width || (node.type === 'checkbox' || node.type === 'radio' ? 'auto' : 150)}px`,
      height: `${node.height || (node.type === 'checkbox' || node.type === 'radio' ? 'auto' : 30)}px`,
      backgroundColor: node.color || '#fff',
      padding, // Using exact padding logic from previous code
      outline: node.id === selectedId ? '2px solid #2684FF' : 'none',
      outlineOffset: '1px',


      fontSize: `${node.fontSize || 16}px`,
      fontFamily: node.fontFamily || 'inherit',
      fontWeight: node.fontWeight || 'normal',
      color: node.textColor || '#000',
      textAlign: node.textAlign || 'left',
      textShadow: `${node.textShadowX || 0}px ${node.textShadowY || 0}px ${node.textShadowBlur || 0}px ${node.textShadowColor || 'transparent'}`,
      letterSpacing: node.letterSpacing || 'normal',
      
      ...(node.type === 'checkbox' || node.type === 'radio' ? {
        accentColor: node.accentColor || 'initial',
        border: 'none',
      } : {
        border: `${node.borderWidth ?? 1}px ${node.borderStyle || 'solid'} ${node.borderColor || '#ccc'}`,
        borderRadius: `${(node.borderRadius || '0 0 0 0').split(' ')
          .map(v => `${v}${node.borderRadiusUnit || 'px'}`)
          .join(' ')}`,
        boxShadow: `${node.shadowInset ? 'inset ' : ''}${node.shadowX || 0}px ${node.shadowY || 0}px ${node.shadowBlur || 0}px ${node.shadowSpread || 0}px ${node.shadowColor || 'black'}`
      })
    };

    // Label styles
    const labelStyles = {
      display: 'inline-block',
      color: node.labelColor || '#000',
      fontSize: node.labelFontSize || '14px',
      cursor: 'pointer',
      fontFamily: node.labelFontFamily || node.fontFamily || 'inherit',
      fontWeight: node.labelFontWeight || node.fontWeight || 'normal',
      textShadow: node.labelTextShadow
        ? `${node.labelTextShadowX || 0}px ${node.labelTextShadowY || 0}px ${node.labelTextShadowBlur || 0}px ${node.labelTextShadowColor || 'transparent'}`
        : node.textShadow
          ? `${node.textShadowX || 0}px ${node.textShadowY || 0}px ${node.textShadowBlur || 0}px ${node.textShadowColor || 'transparent'}`
          : 'none',
      letterSpacing: node.labelLetterSpacing || node.letterSpacing || 'normal',
    };

    // Container styles using exact margin logic from previous code
    const flexDirection = node.labelPosition === 'top' ? 'column' :
      node.labelPosition === 'bottom' ? 'column-reverse' :
        node.labelPosition === 'left' ? 'row' : 'row-reverse';

    const containerStyles = {
      display: 'flex',
      flexDirection,
      ...(flexDirection.includes('row')
        ? {
          justifyContent: node.justifyContent || 'flex-start',
          alignItems: 'center' // Default vertical alignment for row
        }
        : {
          alignItems: node.alignItems || 'center',
          justifyContent: 'flex-start' // Default horizontal alignment for column
        }),

      gap: node.labelSpacing || '4px',
      margin // Using exact margin logic from previous code
    };

    return (
      <div
        style={node.hasLabel ? containerStyles : {
          display: 'inline-block',
          margin // For non-labeled inputs
        }}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedId(node.id);
        }}
      >
        {node.hasLabel && (
          <label htmlFor={inputId} style={labelStyles}>
            {node.labelText || 'Label'}
          </label>
        )}
        <input
          id={inputId}
          type={node.type || 'text'}
          placeholder={node.placeholder || ''}
          style={inputStyles}
          disabled={node.disabled}
        />
      </div>
    );
  };

  return tree.map((node) => {
    const Tag = node.tag;
    const isDiv = node.tag === 'div';
    const isInput = node.tag === 'input';

    if (isInput) {
      return renderInputWithLabel(node);
    }

    // Handle margin/padding exactly like previous code
    const margin = typeof node.margin === 'object'
      ? `${node.margin.top || 0}px ${node.margin.right || 0}px ${node.margin.bottom || 0}px ${node.margin.left || 0}px`
      : `${node.margin || 0}px`;

    const padding = typeof node.padding === 'object'
      ? `${node.padding.top || 0}px ${node.padding.right || 0}px ${node.padding.bottom || 0}px ${node.padding.left || 0}px`
      : `${node.padding || 0}px`;

    // Base text styles (all elements) - exactly like previous code
    const textStyles = {
      fontSize: `${node.fontSize || 16}px`,
      fontFamily: node.fontFamily || 'inherit',
      fontWeight: node.fontWeight || 'normal',
      color: node.textColor || '#000',
      textAlign: node.textAlign || 'left',
      textShadow: `${node.textShadowX || 0}px ${node.textShadowY || 0}px ${node.textShadowBlur || 0}px ${node.textShadowColor || 'transparent'}`,
      lineHeight: node.lineHeight || 'normal',
      letterSpacing: node.letterSpacing || 'normal',
      margin,
      padding,
      border: node.id === selectedId ? '1px dashed #2684FF' : 'none',
      borderRadius: 0,
    };

    // Div-specific styles - exactly like previous code
    const divStyles = isDiv ? {
      display: node.display || 'block',
      flexDirection: node.flexDirection,
      flexWrap: node.flexWrap,
      justifyContent: node.justifyContent,
      alignItems: node.alignItems,
      gap: node.gap ? `${node.gap}px` : undefined,
      width: node.width,
      height: node.height,
      backgroundColor: node.color || 'transparent',
      border: `${node.borderWidth || 0}px ${node.borderStyle || 'solid'} ${node.borderColor || '#ccc'}`,
      borderRadius: `${(node.borderRadius || '0 0 0 0').split(' ')
        .map(v => `${v}${node.borderRadiusUnit || 'px'}`)
        .join(' ')}`,
      boxShadow: `${node.shadowInset ? 'inset ' : ''}${node.shadowX || 0}px ${node.shadowY || 0}px ${node.shadowBlur || 0}px ${node.shadowSpread || 0}px ${node.shadowColor || 'black'}`,
      // Div selection indicator (preserves existing border)
      outline: node.id === selectedId ? '2px solid blue' : 'none',
      outlineOffset: '1px'
    } : {};

    // Merge styles - exactly like previous code
    const style = { ...textStyles, ...divStyles };

    return (
      <Tag
        key={node.id}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedId(node.id);
        }}
        style={style}
      >
        {node.text}
        {node.children?.length > 0 && (
          <RenderTree
            tree={node.children}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        )}
      </Tag>
    );
  });
}