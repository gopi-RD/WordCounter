import {useState,useEffect} from "react"
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [uniqueWordCount, setUniqueWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [searchString, setSearchString] = useState('');
  const [replaceString, setReplaceString] = useState('');

  const onAddText = (event)=>{
    const newText = event.target.value;
    setText(newText);
  }

  useEffect(()=>{
    const words = text.toLowerCase().match(/\b\w+\b/g);
    const uniqueWords = new Set(words);
    setUniqueWordCount(uniqueWords ? uniqueWords.size : 0);

    const cleanedText = text.replace(/[^\w]|_/g, ''); 
    setCharacterCount(cleanedText.length);

  },[text])

 const onReplaceText=()=>{
  if (text===""){
    alert('Text area is Empty.So we can not replace');
    return 
  }
   const updatedText = text.replaceAll(new RegExp(searchString, 'gi'),replaceString);
   setText(updatedText);
   setSearchString('');
   setReplaceString('');
 }



  return (
    <div className='bg-container'>
      <h1 className="heading">Real Time Statistics of User Typing</h1>
      <div className='count-container'>
        <span className='word-count'>Word Count: <span className="count-style">{`${uniqueWordCount}`} </span></span>
        <span className='char-count'>Character Count: <span className="count-style"> {`${characterCount}`}</span> </span>
      </div>
      <textarea id='textarea' className='textarea' value={text}  rows='15' cols='60' placeholder='Enter Whatever you want' onChange={onAddText}></textarea>
      <div className='search-container'>
        <input type='text' className='input-text' placeholder='Search...' value={searchString} onChange={(e)=>setSearchString(e.target.value)}/>
        <input type='text' className='input-text' placeholder='Replace...' value={replaceString} onChange={(e)=>setReplaceString(e.target.value)}/> 
      </div>
      <button className="text-replace-button" type="button" onClick={onReplaceText}>Replace</button>
    </div>
  );
}

export default App;
