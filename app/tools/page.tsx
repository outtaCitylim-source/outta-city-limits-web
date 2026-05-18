import React from 'react';

export default function ToolsPage() {
  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Seller & Marketing Tools</h1>
      <p className="mb-4">
        This page will house tools to help sellers manage their inventory and create marketing materials.
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Show board: Display upcoming stream boards and items up for sale.</li>
        <li>Giveaway odds calculator: Calculate and display odds for spin boards and giveaways.</li>
        <li>Generate Whatnot item descriptions with keywords and categories.</li>
        <li>Review request generator for Whatnot and other platforms.</li>
      </ul>
    </div>
  );
}
