import { useEffect, useRef } from 'react';

function useResizable(show = false, ref?: React.RefObject<HTMLDivElement>) {
  const handlerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const size = useRef({ w: 0, h: 0 });
  const minSize = { minW: 300, minH: 200 };
  const _targetRef = ref || targetRef;

  useEffect(() => {
    if (!handlerRef.current || !show) return;

    const handlerNode = handlerRef.current;
    let isDragging = false;
    let basePos = { x: 0, y: 0 };
    let offset = { x: 0, y: 0 };

    function handleMouseDown(event: MouseEvent) {
      if (!_targetRef.current) return;
      event.preventDefault();
      event.stopPropagation();

      isDragging = true;
      basePos = { x: event.clientX, y: event.clientY };
      const styles = window.getComputedStyle(_targetRef.current);
      size.current.w = parseInt(styles.width, 10);
      size.current.h = parseInt(styles.height, 10);

      document.addEventListener('mousemove', handleMouseMove, false);
      document.addEventListener('mouseup', handleMouseUp, false);
    }

    function handleMouseMove(event: MouseEvent) {
      if (!_targetRef.current) return;
      if (isDragging) {
        offset.x = event.clientX - basePos.x;
        offset.y = event.clientY - basePos.y;
        const calcW = size.current.w + offset.x;
        const calcH = size.current.h + offset.y;
        _targetRef.current.style.width = `${Math.max(calcW, minSize.minW)}px`;
        _targetRef.current.style.height = `${Math.max(calcH, minSize.minH)}px`;
      }
    }

    function handleMouseUp(event: MouseEvent) {
      isDragging = false;

      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    handlerNode.addEventListener('mousedown', handleMouseDown, false);

    return () => {
      handlerNode.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [_targetRef, show]);

  return { handlerRef, targetRef };
}

export default useResizable;
