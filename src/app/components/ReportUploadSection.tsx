import React, { useState, useRef } from 'react';
import { CloudUpload, FileCheck } from 'lucide-react';

export function ReportUploadSection() {
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);

  const fileInput1Ref = useRef<HTMLInputElement>(null);
  const fileInput2Ref = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFile: (file: File | null) => void) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent, setFile: (file: File | null) => void) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const isContinueEnabled = file1 !== null || file2 !== null;

  return (
    <section className="bg-[#f8f9fc] py-16 md:py-20 px-4 flex justify-center border-t border-gray-100">
      <div className="max-w-4xl w-full">
        <div className="relative md:ml-[10%]">
          {/* Vertical Line */}
          <div className="absolute left-[11.5px] top-[24px] bottom-[12px] w-[1px] bg-[#cbd5e1] z-0"></div>

          {/* Step 1 */}
          <div className="relative mb-12">
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-6 h-6 rounded-full bg-[#5c6d86] text-white flex items-center justify-center text-[11px] font-bold shrink-0">
                1
              </div>
              <h3 className="font-bold text-gray-800 text-[13px]">
                Upload CliftonStrengths® 34 Report
              </h3>
            </div>

            <div className="ml-10">
              <div className="grid md:grid-cols-2 gap-4 mb-6 max-w-3xl">
                {/* Upload Box 1 */}
                <div 
                  onClick={() => fileInput1Ref.current?.click()}
                  onDrop={(e) => handleDrop(e, setFile1)}
                  onDragOver={handleDragOver}
                  className="border border-dashed border-[#d1d5db] bg-[#f4f5f9] rounded-[4px] p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#eceef2] transition-colors min-h-[140px] relative"
                >
                  <input 
                    type="file" 
                    className="hidden" 
                    ref={fileInput1Ref} 
                    onChange={(e) => handleFileChange(e, setFile1)}
                    accept=".pdf,.doc,.docx"
                  />
                  {file1 ? (
                    <div className="flex flex-col items-center">
                      <FileCheck className="w-[24px] h-[24px] text-green-600 mb-2" />
                      <p className="text-[12px] text-gray-800 font-medium truncate max-w-[200px] px-2">{file1.name}</p>
                      <button 
                        onClick={(e) => { e.stopPropagation(); setFile1(null); }}
                        className="text-[10px] text-gray-400 hover:text-red-500 mt-2 underline"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <>
                      <p className="text-[11.5px] text-[#64748b] max-w-[200px] mb-3 leading-relaxed">
                        Drag 'n' drop your CliftonStrengths® 34 report here,
                        <br />
                        or click to select file
                      </p>
                      <CloudUpload className="w-[18px] h-[18px] text-[#94a3b8]" />
                    </>
                  )}
                </div>

                {/* Upload Box 2 */}
                <div 
                  onClick={() => fileInput2Ref.current?.click()}
                  onDrop={(e) => handleDrop(e, setFile2)}
                  onDragOver={handleDragOver}
                  className="border border-dashed border-[#d1d5db] bg-[#f4f5f9] rounded-[4px] p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#eceef2] transition-colors min-h-[140px] relative"
                >
                  <input 
                    type="file" 
                    className="hidden" 
                    ref={fileInput2Ref} 
                    onChange={(e) => handleFileChange(e, setFile2)}
                    accept=".pdf,.doc,.docx"
                  />
                  {file2 ? (
                    <div className="flex flex-col items-center">
                      <FileCheck className="w-[24px] h-[24px] text-green-600 mb-2" />
                      <p className="text-[12px] text-gray-800 font-medium truncate max-w-[200px] px-2">{file2.name}</p>
                      <button 
                        onClick={(e) => { e.stopPropagation(); setFile2(null); }}
                        className="text-[10px] text-gray-400 hover:text-red-500 mt-2 underline"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <>
                      <p className="text-[11.5px] text-[#64748b] max-w-[200px] mb-3 leading-relaxed">
                        Drag 'n' drop your partner's CliftonStrengths® 34 report here,
                        <br />
                        or click to select file
                      </p>
                      <CloudUpload className="w-[18px] h-[18px] text-[#94a3b8]" />
                    </>
                  )}
                </div>
              </div>

              <div className="flex justify-center max-w-3xl">
                <button 
                  disabled={!isContinueEnabled}
                  className={`font-semibold text-[11px] px-8 py-2 rounded shadow-sm uppercase tracking-wide transition-colors ${
                    isContinueEnabled 
                      ? 'bg-[#0f4c3a] text-white hover:bg-[#0a3629] cursor-pointer' 
                      : 'bg-[#e2e4ea] text-[#94a3b8] cursor-not-allowed'
                  }`}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative mb-10">
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-6 h-6 rounded-full bg-[#94a3b8] text-white flex items-center justify-center text-[11px] font-bold shrink-0">
                2
              </div>
              <h3 className="text-[#64748b] text-[13px]">Enter email address</h3>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative mb-10">
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-6 h-6 rounded-full bg-[#94a3b8] text-white flex items-center justify-center text-[11px] font-bold shrink-0">
                3
              </div>
              <h3 className="text-[#64748b] text-[13px]">Choose bundle</h3>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative">
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-6 h-6 rounded-full bg-[#94a3b8] text-white flex items-center justify-center text-[11px] font-bold shrink-0">
                4
              </div>
              <h3 className="text-[#64748b] text-[13px]">Check Out</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
