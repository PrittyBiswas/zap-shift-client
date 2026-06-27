import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router';

const LoaderErrorPage = () => {
    const error = useRouteError();

    let title = 'We could not load this page';
    let description = 'Please check your connection and try again.';

    if (isRouteErrorResponse(error)) {
        title = error.status === 404 ? 'Data not found' : 'Data loading failed';
        description = error.statusText || description;
    } else if (error instanceof Error) {
        description = error.message || description;
    }

    return (
        <div className="min-h-[60vh] flex items-center justify-center p-6">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow p-8">
                <h1 className="text-2xl font-bold mb-3">{title}</h1>
                <p className="text-gray-700 mb-6">{description}</p>

                <div className="flex flex-wrap gap-3">
                    <button className="btn btn-primary" onClick={() => window.location.reload()} type="button">
                        Retry
                    </button>
                    <button className="btn" onClick={() => (window.location.href = '/')} type="button">
                        Go Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoaderErrorPage;

