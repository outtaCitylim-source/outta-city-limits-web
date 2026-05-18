export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white border-t mt-10">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
        © {year} Outta City Limits. All rights reserved.
      </div>
    </footer>
  );
}
