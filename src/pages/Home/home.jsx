import React, { useState } from 'react';
import logo from "../../assets/img/logo-with-text.svg";
import greyCopyToClipboard from "../../assets/img/grey-content-copy.svg";
import copyToClipboard from "../../assets/img/content-copy.svg";
import { Button } from "../../components/ui/Button/Button";
import {caseOptions} from './config';
import './home.css'

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");
  const [activeOption, setActiveOption] = useState("");

  const handleFindAndReplace = () => {
    const updatedText = inputText.split(findText).join(replaceText);
    setInputText(updatedText);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(inputText);
    alert("Copied to clipboard!");
  };

  // Conversion functions
  const toUpperCase = () => inputText.toUpperCase();
  const toLowerCase = () => inputText.toLowerCase();
  const toTitleCase = () =>
    inputText.replace(/\w\S*/g, (word) =>
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );

  const toToggleCase = () =>
    inputText
      .split("")
      .map((char) =>
        char === char.toUpperCase()
          ? char.toLowerCase()
          : char.toUpperCase()
      )
      .join("");

  const toAlternateCase = () =>
    inputText
      .split("")
      .map((char, index) =>
        index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
      )
      .join("");

  const toSentenceCase = () => {
    const text = inputText.toLowerCase();
    const result = text.replace(/(^\s*\w|[.!?]\s*\w)/g, (char) => char.toUpperCase());
    return result;
  };
  const removeExtraSpaces = () => inputText.replace(/\s+/g, " ").trim();
  const reverseText = () => inputText.split("").reverse().join("");

  const handleConversion = (key) => {
    let result = '';
    switch (key) {
      case 'upperCase':
        result = toUpperCase();
        break;
      case 'lowerCase':
        result = toLowerCase();
        break;
      case 'titleCase':
        result = toTitleCase();
        break;
      case 'toggleCase':
        result = toToggleCase();
        break;
      case 'alternateCase':
        result = toAlternateCase();
        break;
      case 'sentenceCase':
        result = toSentenceCase();
        break;
      case 'removeExtraSpaces':
        result = removeExtraSpaces();
        break;
      case 'reverseText':
        result = reverseText();
        break;
      default:
        return inputText;
    };
    setInputText(result);
  };

  const wordCount = inputText.trim() ? inputText.trim().split(/\s+/).length : 0;
  const charCount = inputText.length;

  return (
    <div className="container">
      <div className='header'>
        <h1 className='hidden'>the case converter</h1>
        <img className='logo' style={{width:'auto',height:'auto'}} src={logo} />
      </div>
      <div className='content-container flex'>
        <div className='sidebar'>
          <ul className="actions-container space-y-2">
          {caseOptions.map(
            (item) =>
              <li
                key={item.key}
                onClick={() => {
                  if (inputText) {
                    setActiveOption(item.key);
                    handleConversion(item.key);
                  }
                }}
                className={`case-option hover:text-blue-500 pointer ${item.key === activeOption ? "active" : ''}`}
              >
                <h2 className='hidden'>{item.label}</h2>
                {item.label}
              </li>
          )}
          </ul>
          <div className="hidden lg:block px-2">
            <ins className="adsbygoogle"
              style={{display:"block", height:"400px", width: "200px"}}
              data-ad-client="ca-pub-7570456293625857"
            data-ad-slot="3388266038"
              data-ad-format="auto"
              data-full-width-responsive="true">
            </ins>
            <script>
              (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
            <ins className="adsbygoogle"
              style={{display:"block", height:"400px", width: "200px"}}
              data-ad-client="ca-pub-7570456293625857"
              data-ad-slot="5336375165"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
            <script>
              (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content flex-1 p-6">
          <textarea
            className="w-full h-40 p-2 border rounded focus:outline-blue-500"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter your text here..."
          ></textarea>
          <div className="flex mt-2 text-sm text-gray-500 counting-section">
            <div>
              <span>Character count: {charCount}</span>
              <span className='seperater'/>
              <span>Word count: {wordCount}</span>
            </div>
            <span className='mobile-copy-to-clipboard'>
              <img src={greyCopyToClipboard} className='icon' onClick={handleCopyToClipboard}/>
            </span>
          </div>

          <div className="flex flex-wrap items-center mt-4 gap-2">
            <Button
              className='copy-to-clipboard'
              icon={copyToClipboard}
              onClick={handleCopyToClipboard}
            >
              Copy To Clipboard
            </Button>
            {caseOptions.map(
              (item) =>
                <Button
                  key={item.key}
                  onClick={() => {
                    if (inputText) {
                      setActiveOption(item.key);
                      handleConversion(item.key);
                    }
                  }}
                  className={`case-option mobile-button flex flex-wrap gap-2 mb-4 hover:text-blue-500 pointer ${item.key === activeOption ? "active" : ''}`}
                >
                  <h2 className='hidden'>{item.label}</h2>
                  {item.label}
                </Button>
            )}
          </div>

          <div className="mt-6 text-left">
            <div className="flex space-x-4 mb-4 find-and-replace">
              <h2 className='title'>Find Text</h2>
              <input
                type="text"
                className="flex-1 p-2 border rounded mb-[24px]"
                placeholder="Find Text"
                value={findText}
                onChange={(e) => setFindText(e.target.value)}
              />
              <h2 className='title'>Replace with</h2>
              <input
                type="text"
                className="flex-1 p-2 border rounded mb-[24px]"
                placeholder="Replace Text"
                value={replaceText}
                onChange={(e) => setReplaceText(e.target.value)}
              />
            </div>
            <Button onClick={handleFindAndReplace}>Find And Replace</Button>
          </div>

          {/* Footer  */}
          <ins className="adsbygoogle footer-ad-ins"
            style={{display:"block", height:"400px", width: "700px"}}
            data-ad-client="ca-pub-7570456293625857"
            data-ad-slot="7672724466"
            data-ad-format="auto"
            data-full-width-responsive="true">
          </ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        </div>

        {/* Right Sidebar (Ads or Extra Content) */}
        <div className="hidden lg:block w-1/4 bg-white p-4 border-l">
          <ins className="adsbygoogle"
            style={{display:"block", height:"400px", width: "55%"}}
            data-ad-client="ca-pub-7570456293625857"
            data-ad-slot="6929115288"></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
          {/* Right Side2 */}
          <ins className="adsbygoogle"
            style={{display:"block", height:"400px", width: "55%"}}
            data-ad-client="ca-pub-7570456293625857"
            data-ad-slot="3200294271"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        </div>
      </div>
    </div>
  );
};

export default Home;
