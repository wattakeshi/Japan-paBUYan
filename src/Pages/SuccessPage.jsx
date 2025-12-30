import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SuccessPage() {
  const navigate = useNavigate();
  const wishlistId = localStorage.getItem("wishlistId")
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`Hi! I just sent a wish list. My ID is: ${wishlistId}`);
    setCopied(true);
  };

  return (
    <div className="min-h-screen bg-cor1 flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-cor2 p-8 rounded-3xl border border-cor5 max-w-md shadow-2xl">
        <h1 className="text-3xl font-black text-cor5 mb-4">DONE! </h1>
        <p className="text-cor4 mb-6">
          Your wish list was sent successfully! Now, please send us a message so we can get in touch with you.
        </p>

        <div className="bg-cor1 p-4 rounded-xl border border-white/10 mb-6">
          <p className="text-xs text-cor4 uppercase mb-2">Copy this message:</p>
          <div className="flex items-center gap-2 justify-between bg-black/20 p-2 rounded">
            <div className="hidden">
             <code className="text-cor5 text-sm truncate">Hi! My Order ID is {wishlistId}...</code>
            </div>
            <button onClick={copyToClipboard} className="text-white rounded-2xl font-bold bg-cor5 p-2 mx-auto hover:scale-110 transition">
              {copied? ("Message copied!"):("Click here to copy")}
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-white font-bold">Send it to us via:</p>
          <div className="flex gap-4 justify-center">
            <a href="https://www.instagram.com/japanpabuyan" target="_blank" className="flex items-center gap-2 bg-gradient-to-tr from-yellow-500 to-purple-600 text-white px-6 py-2 rounded-full font-bold">
               Instagram
            </a>
            <a href="https://www.facebook.com/japanpabuyan" target="_blank" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full font-bold">
               Facebook
            </a>
          </div>
        </div>

        <button onClick={() => navigate("/")} className="mt-8 text-cor4 underline text-sm">
          Back to Home
        </button>
      </div>
    </div>
  );
}