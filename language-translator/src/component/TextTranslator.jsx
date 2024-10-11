import { useState, useEffect } from "react";
import style from "./TextTranslator.module.css";
import axios from 'axios';

const TextTranslator = () => {
    const [languages, setLanguages] = useState([]);
    const [sourceLanguage, setSourceLanguage] = useState('en'); // Default source language
    const [targetLanguage, setTargetLanguage] = useState('es'); // Default target language
    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState('');

    // Fetch languages from API
    useEffect(() => {
        const fetchLanguages = async () => {
            const options = {
                method: 'GET',
                url: 'https://text-translator2.p.rapidapi.com/getLanguages',
                headers: {
                    'x-rapidapi-key': 'c1acb988d6mshd82093c2c937a3dp1b460djsnf094e4ae2809', // Replace with your actual API key
                    'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setLanguages(response.data.data.languages); // Assuming the API response contains a `languages` array
            } catch (error) {
                console.error('Error fetching languages:', error);
            }
        };

        fetchLanguages();
    }, []);

    // Handle translation
    const handleTranslate = async () => {
        const data = new FormData();
        data.append('source_language', sourceLanguage);
        data.append('target_language', targetLanguage);
        data.append('text', text);

        const options = {
            method: 'POST',
            url: 'https://text-translator2.p.rapidapi.com/translate',
            headers: {
                'x-rapidapi-key': 'c1acb988d6mshd82093c2c937a3dp1b460djsnf094e4ae2809', // Replace with your actual API key
                'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
            },
            data: data
        };

        try {
            const response = await axios.request(options);
            console.log(response);
            setTranslatedText(response.data.data.translatedText);
             // Reset both input fields after translation
            // setText('');
            // setTranslatedText('');
        } catch (error) {
            console.error('Translation error:', error);
        }
    };

    return (
        <div className={style.container}>
            <h1>Translator</h1>
            <div className={style.wrapper}>
                <div className={style.inputContainer}>
                    <select className={style.selectClass} value={sourceLanguage} onChange={(e) => setSourceLanguage(e.target.value)}>
                        {languages.map(language => (
                            <option key={language.code} value={language.code}>{language.name}</option>
                        ))}
                    </select>
                    <input
                        className={style.inputText}
                        type="text"
                        placeholder="Write something..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>

                <div className={style.outputContainer}>
                    <select className={style.selectClass} value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)}>
                        {languages.map(language => (
                            <option key={language.code} value={language.code}>{language.name}</option>
                        ))}
                    </select>
                    <input
                        className={style.inputText}
                        type="text"
                        placeholder="Translated..."
                        value={translatedText}
                        readOnly
                    />
                </div>
            </div>
            <div className={style.btnContainer}>
                <button onClick={handleTranslate} className={style.translateBtn}>Translate-Me</button>
            </div>
        </div>
    );
};

export default TextTranslator;
