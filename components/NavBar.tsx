export function NavBar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">Outta City Limits</div>
        <ul className="flex space-x-4 text-sm font-medium text-gray-600">
          <li><a href="/" className="hover:text-gray-900">Home</a></li>
          <li><a href="/inventory" className="hover:text-gray-900">Inventory</a></li>
          <li><a href="/reference" className="hover:text-gray-900">Reference</a></li>
          <li><a href="/collection" className="hover:text-gray-900">Collection</a></li>
          <li><a href="/tools" className="hover:text-gray-900">Tools</a></li>
        </ul>
      </div>
    </nav>
  );
}
