import { useState, useCallback } from 'react';

const useApi = () => {
  const [apiUrl, setApiUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [responseData, setResponseData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUrlChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const inputUrl = event.target.value;
    setApiUrl(inputUrl);
    if (inputUrl.trim() === '' || !inputUrl.startsWith('https://swapi.dev/api/')) {
      setError('URL, "https://swapi.dev/api/" ile başlamalıdır.');
    } else {
      setError(null);
    }
  }, []);

  const handleMethodChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setMethod(event.target.value);
  }, []);

  const handleSendRequest = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      if (method === 'GET') {
        const response = await fetch(apiUrl, {
          method: method,
        });
        const data = await response.json();
        setResponseData(data);
      } else {
        setError('Sadece GET metoduna izin verilmiştir.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Veri alınamadı. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  }, [apiUrl, method]);

  return {
    apiUrl,
    setApiUrl,
    method,
    setMethod,
    responseData,
    loading,
    error,
    handleUrlChange,
    handleMethodChange,
    handleSendRequest,
  };
};

export default useApi;
