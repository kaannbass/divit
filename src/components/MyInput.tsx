import React from 'react';

type Props = {
    handleUrlChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    apiUrl: string;
    error: string | null;
}

const MyInput: React.FC<Props> = React.memo(({ handleUrlChange, apiUrl, error }) => {
    return (
        <div className="">
            <input
                type="text"
                value={apiUrl}
                onChange={handleUrlChange}
                className="border border-gray-600 rounded p-2 w-full"
            />
            {error && <p className="text-red-500 mt-1">{error}</p>}
        </div>
    );
});

export default MyInput;
