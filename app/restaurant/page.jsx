import React from "react";

const StaticRenderingPage = async () => {
  const res = await fetch(
    "https://fakerestaurantapi.runasp.net/api/Restaurant",
  );

  const restaurants = await res.json();

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 px-6 py-10">
      {/* ________:) header is here */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-400">
          🍽️ Cache করা Restaurant List
        </h1>
        <p className="text-gray-400 mt-2">Static Rendering • Cache enabled</p>

        <p className="mt-3 text-sm text-gray-500">
          সময়: {new Date().toLocaleTimeString("bn-BD")}
        </p>
      </div>

      {/* ________:) cards are here */}
      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.restaurantID}
            className="group bg-gray-900 rounded-xl p-5 border border-gray-800 hover:border-emerald-400 transition"
          >
            {/* Title */}
            <h2 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition">
              {restaurant.restaurantName}
            </h2>

            {/* Type badge */}
            <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-emerald-900 text-emerald-300">
              {restaurant.type}
            </span>

            {/* Address */}
            <p className="text-sm text-gray-400 mt-3">
              📍 {restaurant.address}
            </p>

            {/* Footer */}
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-gray-400">
                ID: #{restaurant.restaurantID}
              </span>

              <span
                className={`font-medium ${
                  restaurant.parkingLot ? "text-green-400" : "text-red-400"
                }`}
              >
                {restaurant.parkingLot ? "🅿️ Parking আছে" : "❌ Parking নাই"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaticRenderingPage;
