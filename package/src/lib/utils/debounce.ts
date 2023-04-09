export const debounce = (func: { apply: (arg0: undefined, arg1: any[]) => void; }, wait = 166) => {
    let timeout: NodeJS.Timeout;
  
    const debounced = (...args: any[]) => {
      const later = () => {
        func.apply(this, args);
      };
  
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    }
  
    debounced.clear = () => {
      clearTimeout(timeout);
    };
  
    return debounced;
  };
  