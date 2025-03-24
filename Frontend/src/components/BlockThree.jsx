import React from 'react';

const ThreeBlocks = () => {
  return (
    <div className="flex justify-center gap-4 p-4">
      {/* Block 1 */}
      <div className="w-1/3 bg-blue-500 text-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">Block 1</h2>
        <p className="text-base">
          This is the first block with some sample content.
        </p>
      </div>

      {/* Block 2 */}
      <div className="w-1/3 bg-green-500 text-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">Block 2</h2>
        <p className="text-base">
          This is the second block with some sample content.
        </p>
      </div>

      {/* Block 3 */}
      <div className="w-1/3 bg-red-500 text-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">Block 3</h2>
        <p className="text-base">
          This is the third block with some sample content.
        </p>
      <ThreeBlocks/>
      </div>
      <div>
       
      </div>
    </div>
  );
};

export default ThreeBlocks;