export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Outta City Limits</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We’re all eating at the same table – whether you’re buying, selling or tracking your
          collection, this platform brings together coins, vintage treasures, motorcycles and more
          under one roof.
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Inventory Dashboard</h2>
          <p className="text-gray-600">
            Add, edit and organize your inventory. Track cost, asking price, sold price and profit
            across categories like coins, vintage toys and collectibles.
          </p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Coin Reference</h2>
          <p className="text-gray-600">
            Explore detailed information on Morgan dollars, Peace dollars, Lincoln cents, large cents,
            bullion and world coins. Mintage data, variety notes and certification tips.
          </p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Collection Portal</h2>
          <p className="text-gray-600">
            Sign up to catalogue your own coins and collectibles. Manage your wishlist and estimate
            collection value while connecting with OCL inventory to fill the gaps.
          </p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Seller & Marketing Tools</h2>
          <p className="text-gray-600">
            Generate show boards, spin board odds, item descriptions, social posts and follow‑up
            messages – everything you need to run sales on Whatnot and beyond.
          </p>
        </div>
      </section>
    </div>
  );
}
