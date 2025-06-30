import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-extrabold text-red-500 mb-4">404 Page Not Found</h1>
                <p className="text-2xl text-gray-700 mb-2">Page Not Found</p>
                <p className="text-gray-500 mb-6">
                    Sorry, the page you are looking for does not exist or has been moved.
                </p>
                <Link href="/" className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
