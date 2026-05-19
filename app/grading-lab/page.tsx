import { demoSignals, suggestGrades } from '@/lib/grade-engine';

export default function GradingLab(){
const results=suggestGrades(demoSignals);
return (
<div className='space-y-8'>
<div className='rounded-xl bg-gradient-to-r from-black to-gray-700 text-white p-8'>
<h1 className='text-4xl font-bold'>OCL Grading Lab</h1>
<p className='mt-3'>Upload a coin image, compare wear markers, estimate grades, and save directly into registry sets.</p>
</div>

<div className='grid md:grid-cols-2 gap-6'>
<div className='border rounded-xl p-6'>
<h2 className='text-2xl font-bold'>AI Signal Analysis</h2>
<ul>
<li>Luster: {demoSignals.luster}/100</li>
<li>Strike: {demoSignals.strike}/100</li>
<li>Surface: {demoSignals.surface}/100</li>
<li>Eye Appeal: {demoSignals.eyeAppeal}/100</li>
<li>Wear: {demoSignals.wear}/100</li>
<li>Marks: {demoSignals.marks}/100</li>
</ul>
</div>
<div className='border rounded-xl p-6'>
<h2 className='text-2xl font-bold'>Suggested Grades</h2>
{results.map((result)=>(
<div key={result.grade} className='mb-4 border-b pb-2'>
<div className='font-bold'>{result.grade}</div>
<div>{result.label}</div>
<div>{result.confidence}% confidence</div>
<div>{result.reason}</div>
</div>
))}
</div>
</div>
</div>
)
}