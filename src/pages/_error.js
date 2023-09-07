import ErrorImage from "@/assets/404.json";
import Lottie from "lottie-react";

function Error({ statusCode }) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-tr from-pink-800 via-pink-900 to-rose-600 text-white">
      <Lottie animationData={ErrorImage} />
      <h2 className="text-5xl font-bold mb-8 text-slate-300">Oops ...</h2>
      <p>{statusCode ? `An error ${statusCode} occurred on server` : "An error occurred on client"}</p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
