import { useEffect } from 'react';
import './ScrollToTop.css'

export default function ScrollToTop() {
  useEffect(() => {
    const button = document.getElementById('scrollTop');
    button.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return <button id="scrollTop">↑</button>;
}
