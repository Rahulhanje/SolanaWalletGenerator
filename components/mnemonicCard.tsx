import { Copy } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast"; 

const Mnemonicard = ({ mnemonic }: { mnemonic: string }) => {
  const [words, setWords] = useState<string[]>([]);
  const { toast } = useToast();

  // 
  useEffect(() => {
    if (mnemonic) {
      const mnemonicWords = mnemonic.split(' ');
      setWords(mnemonicWords);
    }
  }, [mnemonic]);


  const handleCopy = () => {
    const mnemonicString = words.join(' '); 
    navigator.clipboard.writeText(mnemonicString) 
      .then(() => {
        toast({
          description: "Mnemonic words copied to clipboard", 
        });
      })
      .catch((err) => {
        console.error('Failed to copy: ', err); 
      });
  };

  return (
    <div className='p-10 w-screen'>
      <div className='sm:grid grid-cols-4 gap-2 justify-center'>
        {words.map((word, index) => (
          <h1 key={index} className='bg-foreground/5 hover:bg-slate-300 p-3 w-40 text-center rounded-xl'>
            {word}
          </h1>
        ))}
      </div>
      <div onClick={handleCopy} className='flex gap-5 p-5 cursor-pointer'>
        <Copy className='hover:transition-all' />
        <span>Click to copy the mnemonic</span>
      </div>
    </div>
  );
};

export default Mnemonicard;
