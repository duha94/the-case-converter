import React, { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react"
import "./App.css";
import Home from "./pages/Home/home";

export default function CaseConverter() {


  return (
    <div className="App">
      <Home />
    </div>
    // <div
    //   className={`min-h-screen flex flex-col items-center justify-center p-4 transition-all "bg-gray-800 text-white"}`}
    // >
    //   <div className="flex w-full max-w-7xl">
    //     {/* Left Sidebar for Ads */}
    //     <div className="hidden lg:block w-1/6 px-2">
    //       <ins className="adsbygoogle"
    //         style={{display:"block", height:"400px", width: "200px"}}
    //         data-ad-client="ca-pub-7570456293625857"
    //         data-ad-slot="3388266038"
    //         data-ad-format="auto"
    //         data-full-width-responsive="true">
    //       </ins>
    //       <script>
    //         (adsbygoogle = window.adsbygoogle || []).push({});
    //       </script>
    //       <ins className="adsbygoogle"
    //         style={{display:"block", height:"400px", width: "200px"}}
    //         data-ad-client="ca-pub-7570456293625857"
    //         data-ad-slot="5336375165"
    //         data-ad-format="auto"
    //         data-full-width-responsive="true"></ins>
    //       <script>
    //         (adsbygoogle = window.adsbygoogle || []).push({});
    //       </script>
    //     </div>      
    //     {/* Main Content */}
    //     <div className="flex-1 mx-4">
    //       <h1 className="text-2xl font-bold mb-4">Case Converter</h1>
    //       <textarea
    //         className="w-full max-w-xl p-3 border rounded-lg mb-2"
    //         rows="5"
    //         placeholder="Enter your text here..."
    //         value={inputText}
    //         onChange={(e) => setInputText(e.target.value)}
    //       ></textarea>
    //       <p className="text-sm mb-4">Character count: {inputText.length} | Word count: {inputText.trim().split(/\s+/).filter(Boolean).length}</p>

    //       <div
    //         className="flex flex-wrap gap-2 mb-4"
    //         style={{ maxWidth: "700px" }}
    //       >
    //         <button
    //           className="px-4 py-2 bg-blue-500 text-white rounded-lg"
    //           onClick={() => handleConversion(toUpperCase)}
    //         >
    //           UPPERCASE
    //         </button>
    //         <button
    //           className="px-4 py-2 bg-green-500 text-white rounded-lg"
    //           onClick={() => handleConversion(toLowerCase)}
    //         >
    //           lowercase
    //         </button>
    //         <button
    //           className="px-4 py-2 bg-purple-500 text-white rounded-lg"
    //           onClick={() => handleConversion(toTitleCase)}
    //         >
    //           Title Case
    //         </button>
    //         <button
    //           className="px-4 py-2 bg-pink-500 text-white rounded-lg"
    //           onClick={() => handleConversion(toToggleCase)}
    //         >
    //           Toggle Case
    //         </button>
    //         <button
    //           className="px-4 py-2 bg-orange-500 text-white rounded-lg"
    //           onClick={() => handleConversion(toAlternateCase)}
    //         >
    //           Alternate Case
    //         </button>
    //         <button
    //           className="px-4 py-2 bg-teal-500 text-white rounded-lg"
    //           onClick={() => handleConversion(toSentenceCase)}
    //         >
    //           Sentence Case
    //         </button>
    //         <button
    //           className="px-4 py-2 bg-red-500 text-white rounded-lg"
    //           onClick={() => handleConversion(removeExtraSpaces)}
    //         >
    //           Remove Extra Spaces
    //         </button>
    //         <button
    //           className="px-4 py-2 bg-gray-500 text-white rounded-lg"
    //           onClick={() => handleConversion(reverseText)}
    //         >
    //           Reverse Text
    //         </button>
    //       </div>

    //       <div className="w-full max-w-xl flex flex-col gap-2 mb-4">
    //         <input
    //           type="text"
    //           className="p-2 border rounded-lg"
    //           placeholder="Find text..."
    //           value={findText}
    //           onChange={(e) => setFindText(e.target.value)}
    //         />
    //         <input
    //           type="text"
    //           className="p-2 border rounded-lg"
    //           placeholder="Replace with..."
    //           value={replaceText}
    //           onChange={(e) => setReplaceText(e.target.value)}
    //         />
    //         <button
    //           className="px-4 py-2 bg-indigo-500 text-white rounded-lg"
    //           onClick={handleFindAndReplace}
    //         >
    //           Find and Replace
    //         </button>
    //       </div>

    //       <textarea
    //         className="w-full max-w-xl p-3 border rounded-lg mb-4 bg-gray-400"
    //         rows="5"
    //         placeholder="Converted text will appear here..."
    //         value={outputText}
    //         readOnly
    //       ></textarea>

    //       <button
    //         className="px-4 py-2 bg-yellow-500 text-white rounded-lg mb-4"
    //         onClick={copyToClipboard}
    //       >
    //         Copy to Clipboard
    //       </button>
    //       {/* Footer  */}
    //       <ins className="adsbygoogle"
    //         style={{display:"block", height:"400px", width: "700px"}}
    //         data-ad-client="ca-pub-7570456293625857"
    //         data-ad-slot="7672724466"
    //         data-ad-format="auto"
    //         data-full-width-responsive="true">
    //       </ins>
    //       <script>
    //         (adsbygoogle = window.adsbygoogle || []).push({});
    //       </script>
    //     </div>
    //     {/* Right Sidebar for Ads */}
    //     <div className="hidden lg:block w-1/6 px-2">
    //       <ins className="adsbygoogle"
    //         style={{display:"block", height:"400px", width: "200px"}}
    //         data-ad-client="ca-pub-7570456293625857"
    //         data-ad-slot="6929115288"></ins>
    //       <script>
    //         (adsbygoogle = window.adsbygoogle || []).push({});
    //       </script>
    //       {/* Right Side2 */}
    //       <ins className="adsbygoogle"
    //           style={{display:"block", height:"400px", width: "200px"}}
    //           data-ad-client="ca-pub-7570456293625857"
    //           data-ad-slot="3200294271"
    //           data-ad-format="auto"
    //           data-full-width-responsive="true"></ins>
    //       <script>
    //           (adsbygoogle = window.adsbygoogle || []).push({});
    //       </script>
    //     </div>
    //   </div>
    //   <Analytics />
    // </div>
  );
}
