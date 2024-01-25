import React from 'react';
import Button from './Button';

type MyButtonProps = {
    apiUrl: string;
    method: string;
    loading: boolean;
    error: string | null;
    handleSendRequest: () => void;
};

const MyButton: React.FC<MyButtonProps> = React.memo(({ apiUrl, method, loading, error, handleSendRequest }) => {
    const buttonClassName = `w-full btn btn btn-primary ${loading || !!error || apiUrl.trim() === '' || !apiUrl.startsWith('https://swapi.dev/api/') || method !== 'GET' ? 'cursor-not-allowed' : 'cursor-pointer'}`;
    return (
        <Button
            onClick={handleSendRequest}
            disabled={loading || !!error || apiUrl.trim() === '' || !apiUrl.startsWith('https://swapi.dev/api/') || method !== 'GET'}
            className={buttonClassName}
        >
            Gönder
        </Button>
    );
});

export default MyButton;
