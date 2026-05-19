import { calculatePointsForPurchase, denominations, gradeScale, photoGradeCoverageCount } from '@/lib/photograde';

export default function PhotoGradePage() {
 const examplePurchase = 125;
 const points = calculatePointsForPurchase(examplePurchase);
 return (
 <div className='space-y-8'>
 <div className='rounded-xl p-6 bg-black text-white'>
 <h1 className='text-4xl font-bold'>OCL PhotoGrade + Registry Hub</h1>
 <p className='mt-4'>AI-assisted coin grading, registry tracking, customer loyalty, marketplace listing and account ecosystem.</p>
 </div>

 <div className='grid md:grid-cols-3 gap-4'>
 <div className='p-4 border rounded-lg'>
 <h2 className='font-bold'>PhotoGrade Coverage</h2>
 <p>{denominations.length} denomination groups</p>
 <p>{gradeScale.length} grading levels</p>
 <p>{photoGradeCoverageCount}+ image reference combinations</p>
 </div>
 <div className='p-4 border rounded-lg'>
 <h2 className='font-bold'>Loyalty Engine</h2>
 <p>$ {examplePurchase} purchase</p>
 <p>= {points} reward points</p>
 <p>2 points earned per $1 spent</p>
 </div>
 <div className='p-4 border rounded-lg'>
 <h2 className='font-bold'>Account Types</h2>
 <ul>
 <li>Admin Portal</li>
 <li>Customer Login</li>
 <li>Registry Set Dashboard</li>
 <li>Marketplace Seller Portal</li>
 </ul>
 </div>
 </div>

<div className='rounded-lg border p-4'>
<h2 className='text-2xl font-bold'>Two Hour Acquisition Goal</h2>
<ol>
<li>Customer creates account</li>
<li>Uploads coin image</li>
<li>AI suggests possible grades</li>
<li>Customer compares against photograde references</li>
<li>Coin saved to registry</li>
<li>Optional: list item for sale through OCL marketplace</li>
</ol>
</div>
 </div>
 )
}