import React, { useEffect } from 'react';

function useFormBlur(innerRef, setIsEdit, omitSelectors) {
  function handleBlur(e) {
    if (document.querySelectorAll(omitSelectors).length) return;
    if (innerRef.current && !innerRef.current.contains(e.target)) {
      setIsEdit(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleBlur);
    return () => {
      document.removeEventListener('mousedown', handleBlur);
    };
  });
}

export default useFormBlur;
