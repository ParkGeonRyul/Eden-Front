import React, { useRef } from 'react';
import { FileInputButton, HiddenFileInput } from './filesInput.style';

interface FilesInputButtonProps {
  text: string;
  onChange: (file: File) => void;
}

const FilesInputButton = ({ text, onChange }: FilesInputButtonProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      onChange(file);
      console.log(file.name);
    } else {
    }
  };

  return (
    <>
      <FileInputButton onClick={handleClick}>{text}</FileInputButton>
      <HiddenFileInput
        ref={fileInputRef}
        onChange={handleChange}></HiddenFileInput>
    </>
  );
};

export default FilesInputButton;
