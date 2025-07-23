// eslint-disable-next-line react/prop-types
const ContaintContainer = ({style, children}) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(id);
    e.target.appendChild(draggedElement);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div onDrop={handleDrop} onDragOver={handleDragOver} style={style}>
      {children}
    </div>
  );
};

export default ContaintContainer;
