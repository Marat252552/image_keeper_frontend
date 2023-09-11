

const ReturnOnDragHandler = (toDrag: boolean, setDrag: React.Dispatch<React.SetStateAction<boolean>>) => {
  return (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(toDrag);
  };
};

export default ReturnOnDragHandler;
