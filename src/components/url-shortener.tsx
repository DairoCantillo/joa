"use client";

import type React from "react";

import { useState } from "react";

export default function UrlShortener() {
  const [activeTab, setActiveTab] = useState("standard");
  const [url, setUrl] = useState("");
  const [customUrl, setCustomUrl] = useState("");
  const [customPath, setCustomPath] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would connect to your actual URL shortening service
    setShortenedUrl("https://Joa.io/a1b2c3");
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would connect to your actual URL shortening service with custom path
    setShortenedUrl(`https://Joa.io/${customPath}`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-8 md:py-12 bg-gradient-to-r from-purple-100 via-white to-purple-100">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-[64rem] flex-col items-center justify-center gap-4">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-center">
            Acortar su URL
          </h2>
          <p className="text-gray-500 text-center md:text-lg mb-2">
            Pegue su URL larga a continuación y obtenga un enlace corto al
            instante
          </p>

          <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6 border">
            <div className="flex w-full mb-4">
              <button
                onClick={() => setActiveTab("standard")}
                className={`flex-1 py-2 text-center rounded-l-md ${
                  activeTab === "standard"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Enlace estándar
              </button>
              <button
                onClick={() => setActiveTab("custom")}
                className={`flex-1 py-2 text-center rounded-r-md ${
                  activeTab === "custom"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Enlace personalizado
              </button>
            </div>

            {activeTab === "standard" ? (
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-2">
                  <input
                    type="url"
                    placeholder="https://example.com/very/long/url/that/needs/shortening"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Acortar URL
                </button>
              </form>
            ) : (
              <form onSubmit={handleCustomSubmit} className="grid gap-4">
                <div className="grid gap-4">
                  <div>
                    <label
                      htmlFor="long-url"
                      className="text-sm font-medium mb-1 block"
                    >
                      URL larga
                    </label>
                    <input
                      id="long-url"
                      type="url"
                      placeholder="https://example.com/very/long/url/that/needs/shortening"
                      value={customUrl}
                      onChange={(e) => setCustomUrl(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="custom-path"
                      className="text-sm font-medium mb-1 block"
                    >
                      Ruta personalizada
                    </label>
                    <div className="flex items-center">
                      <div className="bg-gray-100 px-3 py-2 rounded-l-md border-y border-l border-gray-300 text-gray-500">
                        Joa.io/
                      </div>
                      <input
                        id="custom-path"
                        type="text"
                        placeholder="my-custom-link"
                        value={customPath}
                        onChange={(e) => setCustomPath(e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Crear enlace personalizado
                </button>
              </form>
            )}

            {shortenedUrl && (
              <div className="mt-4 flex items-center justify-between rounded-md border p-4 bg-gray-50">
                <div className="truncate font-medium">{shortenedUrl}</div>
                <button
                  onClick={copyToClipboard}
                  className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-gray-200"
                >
                  {copied ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="9"
                        y="9"
                        width="13"
                        height="13"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  )}
                  <span className="sr-only">Copiar</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
