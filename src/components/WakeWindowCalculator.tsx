interface WakeWindowCalculatorProps {
  className?: string;
}

export default function WakeWindowCalculator({ className = "" }: WakeWindowCalculatorProps) {
  return (
    <div className={`p-6 border rounded-lg bg-gray-50 ${className}`}>
      <h3 className="text-lg font-semibold mb-4">Wake Window Calculator</h3>
      <p className="text-gray-600">
        Calculator component coming soon! For now, please visit the main page to use the calculator.
      </p>
      <a 
        href="/" 
        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go to Calculator
      </a>
    </div>
  );
} 