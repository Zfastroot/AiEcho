import React from 'react'
import { useEffect, useRef ,useState} from "react"
import "./newprompt.css"
import Upload from './../upload/Upload'


function NewPrompt() {
    const endRef = useRef(null);

    const [img,setImg] = useState({
        isLoading:false,
        error:"",
        dbData: {}
        });

    useEffect(() => {
        endRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);

  return (
    <>
        {img.isLoading && <div className="">Loading...</div>}
        {img.dbData?.filePath && (
            <IKImage
            urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
            path={img.dbData?.filePath}
            width="380"
            transformation={[{ width: 380 }]}
            />
        )}

        <div className="endChat" ref={endRef}></div>
        <form className="newForm" >
            <Upload setImg={setImg} />
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