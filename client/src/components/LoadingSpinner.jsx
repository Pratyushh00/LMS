
import { Loader2 } from "lucide-react";

const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <Loader2 className="animate-spin text-blue-600" size={48} />
        <span className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-300">Loading...</span>
    </div>
);

export default LoadingSpinner;
