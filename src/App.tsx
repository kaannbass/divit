import './App.css';
import useApi from './hooks';

// components
import MyInput from './components/MyInput';
import MyButton from './components/button/MyButton';
import Loading from './components/Loading';
import JsonResponse from './components/JsonResponse';
import MySelect from './components/MySelect';

function App() {
  const {
    apiUrl,
    method,
    responseData,
    loading,
    error,
    handleUrlChange,
    handleMethodChange,
    handleSendRequest,
  } = useApi();

  return (
    <div className="App p-4">
      <div className="flex flex-col md:flex-row mx-auto justify-center gap-5">
        <div className="w-full md:w-2/3 lg:w-1/3 align-bottom my-auto mt-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">API URL:</label>
          <MyInput handleUrlChange={handleUrlChange} apiUrl={apiUrl} error={error} />
        </div>
        <div className="my-auto mt-2">
          <MySelect value={method} onChange={handleMethodChange} loading={loading} />
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className='my-auto mt-6'>
            <MyButton
              apiUrl={apiUrl}
              method={method}
              loading={loading}
              error={error}
              handleSendRequest={handleSendRequest}
            />
          </div>
        )}
      </div>
      {responseData && (
        <div className="mt-4">
          <JsonResponse data={responseData} />
        </div>
      )}
    </div>
  );
}

export default App;