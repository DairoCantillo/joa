"use client";

import { useState } from "react";
import PricingCard from "./pricing-card";

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const plans = {
    monthly: [
      {
        name: "Free",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
            <path d="M16 16v-3a2 2 0 0 0-4 0"></path>
            <path d="M12 16v-3"></path>
            <path d="M12 9.01l.01-.011"></path>
          </svg>
        ),
        price: "$0",
        period: "mes",
        description: "Perfecto para probar nuestro servicio.",
        features: [
          { included: true, text: "Hasta 50 enlaces" },
          { included: true, text: "Basic analytics" },
          { included: true, text: "Análisis básico" },
          { included: false, text: "Dominios personalizados" },
        ],
      },
      {
        name: "Pro",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-purple-500"
          >
            <path d="M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-3.2 1.2"></path>
            <path d="m2 19 1.6-1.6"></path>
            <path d="M4 16.6 7.3 14"></path>
            <path d="M7.3 14c.7-1.3 1.7-2.4 3-3.1"></path>
            <path d="M20.1 6.5 16 8.9"></path>
            <path d="m12 12 2.1 1.7"></path>
            <path d="M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-8 3v7c0 6 8 10 8 10a20.3 20.3 0 0 0 5.7-4.2"></path>
          </svg>
        ),
        price: "$12",
        period: "mes",
        description: "Para profesionales y equipos pequeños",
        features: [
          { included: true, text: "Enlaces ilimitados" },
          { included: true, text: "Análisis avanzado" },
          { included: true, text: "Códigos QR personalizados" },
          { included: true, text: "1 dominio personalizado" },
          { included: true, text: "Protección con contraseña" },
        ],
        popular: true,
      },
      {
        name: "Business",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path>
            <rect x="3" y="14" width="7" height="7" rx="1"></rect>
            <circle cx="17.5" cy="17.5" r="3.5"></circle>
          </svg>
        ),
        price: "$29",
        period: "mes",
        description: "Para empresas con necesidades avanzadas",
        features: [
          { included: true, text: "Todo en Pro" },
          { included: true, text: "Hasta 5 dominios personalizados" },
          { included: true, text: "Colaboración en equipo" },
          { included: true, text: "Acceso a la API" },
          { included: true, text: "Soporte prioritario" },
        ],
      },
    ],
    annually: [
      {
        name: "Gratis",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
            <path d="M16 16v-3a2 2 0 0 0-4 0"></path>
            <path d="M12 16v-3"></path>
            <path d="M12 9.01l.01-.011"></path>
          </svg>
        ),
        price: "$0",
        period: "year",
        description: "Perfect for trying out our service",
        features: [
          { included: true, text: "Up to 50 links" },
          { included: true, text: "Basic analytics" },
          { included: true, text: "Standard QR codes" },
          { included: false, text: "Custom domains" },
        ],
      },
      {
        name: "Pro",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-purple-500"
          >
            <path d="M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-3.2 1.2"></path>
            <path d="m2 19 1.6-1.6"></path>
            <path d="M4 16.6 7.3 14"></path>
            <path d="M7.3 14c.7-1.3 1.7-2.4 3-3.1"></path>
            <path d="M20.1 6.5 16 8.9"></path>
            <path d="m12 12 2.1 1.7"></path>
            <path d="M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-8 3v7c0 6 8 10 8 10a20.3 20.3 0 0 0 5.7-4.2"></path>
          </svg>
        ),
        price: "$115",
        period: "year",
        description: "For professionals and small teams",
        features: [
          { included: true, text: "Unlimited links" },
          { included: true, text: "Advanced analytics" },
          { included: true, text: "Custom QR codes" },
          { included: true, text: "1 custom domain" },
          { included: true, text: "Password protection" },
        ],
        popular: true,
      },
      {
        name: "Negocios",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path>
            <rect x="3" y="14" width="7" height="7" rx="1"></rect>
            <circle cx="17.5" cy="17.5" r="3.5"></circle>
          </svg>
        ),
        price: "$279",
        period: "year",
        description: "For businesses with advanced needs",
        features: [
          { included: true, text: "Everything in Pro" },
          { included: true, text: "Up to 5 custom domains" },
          { included: true, text: "Team collaboration" },
          { included: true, text: "API access" },
          { included: true, text: "Priority support" },
        ],
      },
    ],
  };

  return (
    <section
      id="pricing"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-purple-300 blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-purple-300 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-purple-300 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <div className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800">
            Precios
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Elige tu plan perfecto
          </h2>
          <p className="max-w-[85%] text-gray-500 md:text-xl">
            Opciones flexibles para particulares y empresas de todos los
            tamaños.
          </p>
        </div>

        <div className="mt-8">
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 rounded-lg bg-gray-100">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-6 py-2 text-sm rounded-md ${
                  billingPeriod === "monthly"
                    ? "bg-white text-purple-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Mensual
              </button>
              <button
                onClick={() => setBillingPeriod("annually")}
                className={`px-6 py-2 text-sm rounded-md ${
                  billingPeriod === "annually"
                    ? "bg-white text-purple-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Anualmente (Ahorra un 20%)
              </button>
            </div>
          </div>

          <div className="mx-auto grid max-w-screen-lg gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {plans[billingPeriod as keyof typeof plans].map((plan, index) => (
              <PricingCard
                key={index}
                name={plan.name}
                icon={plan.icon}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                popular={plan.popular}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center space-y-4 text-center">
          <h3 className="text-xl font-bold">
            ¿Necesita un plan personalizado?
          </h3>
          <p className="text-gray-500">
            Contacte con nuestro equipo comercial para obtener soluciones
            empresariales adaptadas a sus necesidades
          </p>
          <button className="rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
            Contactar con Ventas
          </button>
        </div>
      </div>
    </section>
  );
}
