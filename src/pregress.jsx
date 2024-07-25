import React, { useEffect, useState } from 'react';
import './index.css';

const Progress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowScroll = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const percentage = (windowScroll / windowHeight) * 100;
      setScrollPercentage(percentage);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }, []);

  return (
    <div className='progress' style={{ width: `${scrollPercentage}%` }}></div>
  );
};
export default Progress;
