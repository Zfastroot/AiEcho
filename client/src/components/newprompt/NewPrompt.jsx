import React from 'react'
import "./newprompt.css"
import { useEffect, useRef } from "react";
import Upload from './../upload/Upload'


function NewPrompt() {
    const endRef = useRef(null);

    useEffect(() => {
        endRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);

  return (
    <>
        <div className="endChat" ref={endRef}></div>
        <form className="newForm" >
            <Upload/>
            <input id="file" type="file" multiple={false} hidden />
            <input type="text" name="text" placeholder="Ask anything..." />
            <button>
                <img src="/arrow.png" alt="" />
            </button>
        </form>
    </>
  );
}

export default NewPrompt