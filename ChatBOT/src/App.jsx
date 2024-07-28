import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [ques, setQues] = useState('');
  const [ans, setAns] = useState('');

  const generateAnswer = async () => {
    setAns('...loading');

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${import.meta.env.VITE_apiKey}`,
        method: 'post',
        data: {
          contents: [
            { parts: [{ text: ques }] },
          ],
        },
      });
      setAns(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      setAns('Error fetching data');
      console.error('Error fetching data:', error);
    } finally {
      setQues('');
    }
  };

  return (
    <>
      <h1>Chat Ai</h1>
      <textarea
        id="text"
        value={ques}
        onChange={(e) => setQues(e.target.value)}
      ></textarea>
      <button onClick={generateAnswer}>generate answer</button><br/>
      <pre>{ans}</pre>
    </>
  );
}

export default App;
