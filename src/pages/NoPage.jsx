import { useNavigate } from "react-router-dom";

const NoPage = () => {
  const nav = useNavigate();
  return (
    <div className="container mt-32 flex justify-center items-center">
      <div>
<p>Error 404! <br />You are requesting an invalid URL.</p>
      <button
        onClick={() => nav(-1)}
        className="px-4 py-2 mt-4 rounded-lg border border-slate-200 bg-gray-100 hover:bg-gray-300 transition shadow-sm text-slate-700"
      >
        ← Go back
      </button>
      </div>
      
    </div>
  );
};

export default NoPage;
