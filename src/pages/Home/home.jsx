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
      <div className='main-contaiiner flex'>
        <div className="hidden lg:block w-1/6 px-2">
          {/* <ins className="adsbygoogle"
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
          </script> */}
        </div>
        {/* Main Content */}
        <div className="main-content flex-1">
          <ins className="adsbygoogle"
            style={{display:"block"}}
            data-ad-client="ca-pub-7570456293625857"
            data-ad-slot="1579922979"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
          <div className="flex space-x-4 copy-to-clipboard" onClick={handleCopyToClipboard}>
            <img src={copyToClipboard} />
            {/* <Button icon={copyToClipboard} onClick={handleCopyToClipboard}>Copy To Clipboard</Button> */}
          </div>
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
                  disabled={!inputText}
                  className={`case-option cursor-pointer pointer ${item.key === activeOption ? "active" : ''}`}
                >
                  <h2 className='hidden'>{item.label}</h2>
                  {item.label}
                </li>
            )}
          </ul>
          <textarea
            className="w-full h-40 p-2 border rounded focus:outline-blue-500"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter your text here..."
          ></textarea>
          <div className="flex mt-2 text-sm text-gray-500 counting-section items-center">
            <div>
              <span>Character count: {charCount}</span>
              <span className='seperater'/>
              <span>Word count: {wordCount}</span>
            </div>
            {/* <div className="flex space-x-4 copy-to-clipboard" onClick={handleCopyToClipboard}>
              <img src={copyToClipboard} />
              <Button icon={copyToClipboard} onClick={handleCopyToClipboard}>Copy To Clipboard</Button>
            </div> */}
          </div>

          <div className="mt-6 text-left">
            <div className="flex space-x-4 mb-4 find-and-replace">
              <div>
                <h2 className='title'>Find Text</h2>
                <input
                  type="text"
                  className="flex-1 p-2 border rounded mb-[24px]"
                  placeholder="Find Text"
                  value={findText}
                  onChange={(e) => setFindText(e.target.value)}
                />
              </div>
              <div>
                <h2 className='title'>Replace with</h2>
                <input
                  type="text"
                  className="flex-1 p-2 border rounded mb-[24px]"
                  placeholder="Replace Text"
                  value={replaceText}
                  onChange={(e) => setReplaceText(e.target.value)}
                />
              </div>
            </div>
            <Button onClick={handleFindAndReplace}>Find And Replace</Button>
          </div>
          <section className='intro text-gray-500'>
            <h1>Welcome to TheCaseConvert.com – Your Ultimate Text Case Converter!</h1>
            <p>
              Need to quickly change text case? Whether you want to convert text to 
               <strong> uppercase, lowercase, sentence case, title case</strong>, or more, our tool makes it simple and instant. 
              Just enter your text, select your desired format, and copy the results with one click.
            </p>
            <ul>
              <li>✅ <strong>Fast & Free</strong> – No sign-up needed</li>
              <li>✅ <strong>Accurate formatting</strong> for text, code, and documents</li>
              <li>✅ <strong>Works on all devices</strong></li>
            </ul>
            <p><strong>Try it out now and format your text effortlessly!</strong></p>
          </section>
          {/* Footer  */}
          <ins className="adsbygoogle footer-ad-ins"
            style={{display:"block"}}
            data-ad-client="ca-pub-7570456293625857"
            data-ad-slot="7672724466"
            data-ad-format="auto"
            data-full-width-responsive="true">
          </ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
          <section className="faq text-gray-500">
            <h2>Frequently Asked Questions (FAQs)</h2>

            <h3>1. What is TheCaseConvert.com?</h3>
            <p>TheCaseConvert.com is a free online tool that helps users quickly convert text into various case formats, such as uppercase, lowercase, sentence case, title case, and more.</p>

            <h3>2. How do I use this tool?</h3>
            <p>Simply enter or paste your text into the input box, select the case format you need, and copy the converted text. It’s that simple!</p>

            <h3>3. Is this tool free to use?</h3>
            <p>Yes! Our tool is 100% free, with no hidden fees or sign-up required.</p>

            <h3>4. Can I use this tool on my mobile device?</h3>
            <p>Absolutely! TheCaseConvert.com is mobile-friendly and works on all devices, including phones, tablets, and desktops.</p>

            <h3>5. Does this tool support different languages?</h3>
            <p>Yes, you can input text in various languages, and the case formatting will work accordingly.</p>

            <h3>6. Are there any limitations on how much text I can convert?</h3>
            <p>No, you can convert as much text as you like without restrictions.</p>
          </section>
        </div>

        {/* Right Sidebar (Ads or Extra Content) */}
        <div className="hidden lg:block w-1/4 bg-white p-4 border-l">
          {/* <ins className="adsbygoogle"
            style={{display:"block", height:"400px", width: "55%"}}
            data-ad-client="ca-pub-7570456293625857"
            data-ad-slot="6929115288"></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
          <ins className="adsbygoogle"
            style={{display:"block", height:"400px", width: "55%"}}
            data-ad-client="ca-pub-7570456293625857"
            data-ad-slot="3200294271"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
