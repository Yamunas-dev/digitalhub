import { useEffect } from 'react';
import { FiCheckCircle, FiInfo } from 'react-icons/fi';
import { useShop } from '../context/ShopContext';

export default function Toast() {
  const { toast, hideToast } = useShop();

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(hideToast, 2200);
    return () => clearTimeout(timer);
  }, [toast, hideToast]);

  if (!toast) return null;

  return (
    <div className={`toast toast-${toast.type}`} role="status">
      {toast.type === 'success' ? <FiCheckCircle /> : <FiInfo />}
      <span>{toast.message}</span>
    </div>
  );
}
