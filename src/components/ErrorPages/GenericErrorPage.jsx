import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const GenericErrorPage = () => {
    const error = useRouteError();

    let title = 'Something went wrong';
    let description = 'Please try again later.';
    let status = null;

    if (isRouteErrorResponse(error)) {
        status = error.status;
        title = error.status === 404 ? 'Page not found' : `Request failed${error.status ? ` ( ${error.status} )` : ''}`;
        description = error.statusText || description;
    } else if (error instanceof Error) {
        description = error.message || description;
    } else if (typeof error === 'string') {
        description = error;
    }

    return (
        <div className="min-h-[60vh] flex items-center justify-center p-6">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow p-8">
                <h1 className="text-3xl font-bold mb-3">{title}</h1>
                {status ? <p className="text-gray-600 mb-4">Status: {status}</p> : null}
                <p className="text-gray-700 mb-6">{description}</p>

                <div className="flex flex-wrap gap-3">
                    <button
                        className="btn btn-primary"
                        onClick={() => window.location.reload()}
                        type="button"
                    >
                        Retry
                    </button>
                    <button
                        className="btn"
                        onClick={() => (window.location.href = '/')}
                        type="button"
                    >
                        Go Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GenericErrorPage;

