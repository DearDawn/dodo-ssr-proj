import { useEffect, useRef } from 'react';

function useDraggable(show = false) {
  const ref = useRef<HTMLDivElement>(null);
  const position = useRef({ x: 0, y: 0 });
  const lastPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current || !show) return;

    const node = ref.current;
    let isDragging = false;
    let basePos = { x: 0, y: 0 };
    let offset = { x: 0, y: 0 };

    function handleMouseDown(event: MouseEvent) {
      event.preventDefault();

      isDragging = true;
      basePos = { x: event.clientX, y: event.clientY };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    function handleMouseMove(event: MouseEvent) {
      if (isDragging) {
        offset.x = event.clientX - basePos.x;
        offset.y = event.clientY - basePos.y;
        position.current.x = offset.x + lastPosition.current.x;
        position.current.y = offset.y + lastPosition.current.y;

        node.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
      }
    }

    function handleMouseUp(event: MouseEvent) {
      isDragging = false;
      lastPosition.current.x += offset.x;
      lastPosition.current.y += offset.y;

      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    node.addEventListener('mousedown', handleMouseDown);

    return () => {
      node.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [show]);

  return { ref };
}

export default useDraggable;
