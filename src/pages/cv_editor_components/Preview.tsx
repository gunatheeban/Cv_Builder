import React from 'react';

interface PreviewProps {
  previewImage: string;
}

export default function Preview({ previewImage }: PreviewProps) {
  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Preview</h3>
      {previewImage ? (
        <img 
          src={previewImage} 
          alt="CV Preview" 
          className="w-full border rounded shadow-sm"
        />
      ) : (
        <div className="w-full h-96 bg-gray-200 rounded flex items-center justify-center">
          <p className="text-gray-500">Generating preview...</p>
        </div>
      )}
    </div>
  );
}