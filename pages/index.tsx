import React, { useEffect } from 'react';

const Home = () => {
  const chatbotUrl = process.env.NEXT_PUBLIC_CHATBOT_URL!;

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isZalo = ua.includes('zalo');

    if (!isZalo) {
      // Redirect nếu không mở từ Zalo
      window.location.href = "https://ubndphuong.vn";
    }

    const blockRightClick = (e: MouseEvent) => e.preventDefault();
    const blockKeys = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', blockRightClick);
    document.addEventListener('keydown', blockKeys);

    return () => {
      document.removeEventListener('contextmenu', blockRightClick);
      document.removeEventListener('keydown', blockKeys);
    };
  }, []);

  return (
    <div style={{ height: '100vh', margin: 0, padding: 0 }}>
      <iframe
        src={chatbotUrl}
        style={{ width: '100%', height: '100%', border: 'none' }}
        sandbox="allow-scripts allow-same-origin"
        allow="clipboard-write"
      ></iframe>
    </div>
  );
};

export default Home;
