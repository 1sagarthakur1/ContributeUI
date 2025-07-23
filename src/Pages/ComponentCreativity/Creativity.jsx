import React, { useState } from 'react'
import ComponentCretivityNavbar from '../../Components/Navbar/ComponentCreativityNavbar.jsx';
import LeftController from '../../Components/ComponentCreativity/LeftController.jsx';
import RenderTree from '../../Components/ComponentCreativity/RenderTree.jsx';
import RightController from '../../Components/ComponentCreativity/RightController.jsx';
import ControlPanel from '../../Components/ComponentCreativity/ControlPanel.jsx';
import CodeGenerator from '../../Components/ComponentCreativity/CodeGenerator.jsx';
import '../../Styles/creativity.css'
import '../../Components/ComponentCreativity/Styles/renderTree.css'
import '../../Components/ComponentCreativity/Styles/codeGenerator.css'

const generateId = () =>
  Date.now().toString() + Math.random().toString(36).substring(2, 6);

const baseNode = (tag = 'div') => {
  const commonProps = {
    id: generateId(),
    children: [],
    width: tag === 'div' ? 200 : 'auto',
    height: tag === 'div' ? 100 : 'auto',
    color: tag === 'div' ? '#f0f0f0' : 'transparent',
    position: 'static',
    margin: { top: 10, right: 10, bottom: 10, left: 10 },
    padding: { top: 10, right: 10, bottom: 10, left: 10 },
    borderRadius: '0',
    borderRadiusUnit: 'px',
    borderWidth: tag === 'div' ? 1 : 0,
    borderStyle: 'solid',
    borderColor: '#000000',
  };

  if (tag === 'input') {
    return {
      ...commonProps,
      tag: 'input',
      type: 'text',
      placeholder: 'Enter Text',
      disabled: false,
      text: '',
      width: 150,
      height: 30,
      color: '#fff',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#ccc',
      borderRadius: '0',
      borderRadiusUnit: 'px',
      accentColor: '#000000',
      hasLabel: true,
      labelText: tag === 'input' ? 'Input Label' : 'Select Label',
      labelPosition: 'top',
      labelColor: '#000000',
      labelFontSize: '14px',
      labelMargin: '0 0 5px 0',
    };
  }


  if (tag === 'div') {
    return {
      ...commonProps,
      tag: 'div',
      text: 'New Div',
      display: 'block',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      gap: 0,
    };
  }

  // Default for text elements
  return {
    ...commonProps,
    tag,
    text: `New ${tag}`,
    fontSize: '16px',
    fontFamily: 'Arial',
    fontWeight: 'normal',
    textColor: '#000000',
    textShadowX: 0,
    textShadowY: 0,
    textShadowBlur: 0,
    textShadowColor: 'transparent',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
  };
};

const ComponentCretivity = () => {

  const [divTree, setDivTree] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [showCodeGenerator, setShowCodeGenerator] = useState(false);


  const addDiv = (parentId = null, tag = 'div') => {
    const newNode = { ...baseNode(tag), tag }; // Pass tag to baseNode
    if (!parentId) {
      setDivTree([...divTree, newNode]);
    } else {
      const insert = tree =>
        tree.map(node =>
          node.id === parentId
            ? { ...node, children: [...node.children, newNode] }
            : { ...node, children: insert(node.children) }
        );
      setDivTree(insert(divTree));
    }
  };

  const updateDiv = (id, key, value) => {
    const update = tree =>
      tree.map(node =>
        node.id === id
          ? { ...node, [key]: value }
          : { ...node, children: update(node.children) }
      );
    setDivTree(update(divTree));
  };

  const deleteDiv = idToDelete => {
    const remove = tree =>
      tree
        .filter(node => node.id !== idToDelete)
        .map(node => ({ ...node, children: remove(node.children) }));
    setDivTree(remove(divTree));
    if (selectedId === idToDelete) setSelectedId(null);
  };

  const findNode = (tree, id) => {
    for (let node of tree) {
      if (node.id === id) return node;
      const found = findNode(node.children, id);
      if (found) return found;
    }
    return null;
  };

  const selectedNode = selectedId ? findNode(divTree, selectedId) : null;

  return (
    <>
      <ComponentCretivityNavbar />
      <div className='creativityMain'>
        <LeftController
          addDiv={addDiv}
          selectedNode={selectedNode}
          selectedId={selectedId}
          updateDiv={updateDiv}
        />
        <div className='renderTree'>
          <RenderTree
            tree={divTree}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        </div>
        <RightController
          selectedNode={selectedNode}
          deleteDiv={deleteDiv}
          selectedId={selectedId}
          updateDiv={updateDiv}
          addDiv={addDiv}
          onGetCodeClick={() => setShowCodeGenerator(true)}
        />
      </div>
      {showCodeGenerator && (
        <div className='code-generator-wrapper' style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <CodeGenerator tree={divTree} onClose={() => setShowCodeGenerator(false)} />
        </div>
      )}
    </>
  )
};

export default ComponentCretivity;


