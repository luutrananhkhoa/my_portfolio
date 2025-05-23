"use client"
import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { Button } from '../ui/button';

const HackerBtn = ({ label }: { label: string }) => {
  const [displayText, setDisplayText] = useState(label);
  const charset = "abcdefghijklmnopqrstuvwxyz";

  const randomChars = (length: number) => {
    return Array.from(
      { length },
      () => charset[Math.floor(Math.random() * charset.length)]
    ).join("");
  };

  const scramble = async (input: string) => {
    let prefix = "";
    for (let index = 0; index < input.length; index++) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      prefix += input.charAt(index);
      setDisplayText(prefix + randomChars(input.length - prefix.length));
    }
  };

  const handleDownload = () => {
    try {
      const link = document.createElement('a');
      link.href = '/my-cv.pdf';
      
      link.download = 'Luu Tran Anh Khoa - CV - Frontend Developer.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('Download failed:', err);
    }
  };

  const startScrambling = () => {
    scramble(label);
    setTimeout(() => console.log("Submitted"), label.length * 50);
  };

  useEffect(() => {
    setDisplayText(label);
  }, [label]);

  return (
    <Button size={'lg'} className='text-base px-5 py-6 text-primary-text border border-primary hover:border hover:border-primary-text' onMouseEnter={startScrambling} onClick={handleDownload}>   
      <Download className="mx-1" />
      {displayText}
    </Button>
  );
};

export default HackerBtn;
