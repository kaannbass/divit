import React, { useState } from 'react';
import { IoCopy } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";

type JsonResponseProps = {
    data: any;
};

const JsonResponse: React.FC<JsonResponseProps> = ({ data }) => {
    const jsonString = typeof data === 'object' ? JSON.stringify(data, null, 2) : data;
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(jsonString).then(() => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        });
    };

    return (
        <div className="card p-3">
            <div className="card-title justify-between bg-gray-200 rounded p-2">
                <h2 className="text-xl font-bold">API Yanıtı:</h2>
                <div className="tooltip-container">
                    <div className={`tooltip ${isCopied ? 'tooltip-open' : ''}`} data-tip={isCopied ? 'Copied!' : 'Copy!'}>
                        <button className="btn" onClick={handleCopy}>
                            {isCopied ? <IoCopy /> : <IoCopyOutline />}
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-body text-start overflow-auto bg-gray-100 rounded p-2">
                <div className="card-actions">
                    <pre dangerouslySetInnerHTML={{ __html: jsonString }}></pre>
                </div>
            </div>
        </div >
    );
};

export default JsonResponse;
