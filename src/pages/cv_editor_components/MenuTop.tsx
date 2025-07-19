import React from 'react';

interface MenuTopProps {
  previewRef: React.RefObject<HTMLDivElement>;
}

export default function MenuTop({ previewRef }: MenuTopProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b">
      <h2 className="text-lg font-semibold">CV Preview</h2>
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Download PDF
        </button>
      </div>
    </div>
  );
}