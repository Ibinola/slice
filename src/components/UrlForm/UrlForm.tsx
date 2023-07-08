import React, { useState } from "react";
import { child, getDatabase, ref, set } from "firebase/database";
import { nanoid } from "nanoid";
import QRCode from "qrcode.react";
import "./UrlForm.css";

const validateCustomUrl = (url: string): boolean => {
  return url.trim() !== "";
};

const UrlForm = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [qrCodeData, setQrCodeData] = useState("");
  const [customUrl, setCustomUrl] = useState("");

  const handleCustomUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputCustomUrl = event.target.value;

    // Validate the custom URL
    const isValid = validateCustomUrl(inputCustomUrl);

    // Set the custom URL if it's valid, otherwise clear it
    setCustomUrl(isValid ? inputCustomUrl : "");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const shortUrlKey = nanoid(8);

    try {
      const database = getDatabase();
      const urlRef = ref(database, "urls");
      const shortUrlRef = child(urlRef, shortUrlKey);
      await set(shortUrlRef, { longUrl });
      const shortUrl = `${window.location.origin}/${shortUrlKey}`;
      setShortUrl(shortUrl);
      setQrCodeData(shortUrl);
    } catch (error) {
      console.log("Error saving URL: ", error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLongUrl(event.target.value);
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 bg-white rounded-lg shadow">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex">
          <input
            type="text"
            value={longUrl}
            onChange={handleChange}
            placeholder="Enter a long URL"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-r focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Shorten
          </button>
        </div>
        {shortUrl && (
          <div className="space-y-4">
            <p className="text-gray-700">
              Your shortened URL:
              <a
                href={shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                {shortUrl}
              </a>
            </p>
            {qrCodeData && (
              <div className="flex justify-center">
                <QRCode value={qrCodeData} />
              </div>
            )}
          </div>
        )}
        <input
          type="text"
          value={customUrl}
          onChange={handleCustomUrlChange}
          placeholder="Enter a custom URL"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </form>
    </div>
  );
};

export default UrlForm;
