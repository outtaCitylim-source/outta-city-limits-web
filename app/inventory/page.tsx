export default function InventoryPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Inventory Dashboard</h1>
      <p className="text-gray-600">
        This is where you’ll manage your inventory items.  Build out a table and forms to view,
        add and edit coins, collectibles, motorcycles and more.  Track purchase cost, asking price,
        sold price and profit.  Mark items as available, pending, sold or archived.
      </p>
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="text-sm text-yellow-700">
          Placeholder: Implement an inventory table component that lists your items with sorting
          and filtering, plus a form to add new items.  Connect to a backend (e.g. Supabase) to
          store data.
        </p>
      </div>
    </div>
  );
}
