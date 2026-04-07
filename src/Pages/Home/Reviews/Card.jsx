import React from 'react';
import Quote from '../../../assets/reviewQuote.png';


const Card = ({ reviews }) => {
    const { userName, review, user_photoURL } = reviews
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm w-full max-w-sm">

            <div>
                <img src={Quote} alt="" />

            
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    A posture corrector works by providing support and gentle alignment
                    to your shoulders, back, and spine, encouraging you to maintain proper
                    posture throughout the day.
                </p>

            </div>

            <div className="flex items-center gap-3 border-t border-dashed border-gray-300">
                <div className="w-10 h-10 mt-5 rounded-full ">
                    <img src={user_photoURL} alt="" />
                </div>
                <div>
                    <h4 className="font-semibold text-gray-900">{userName}</h4>
                    <p className="text-gray-500 text-xs">{review}</p>
                </div>
            </div>

        </div>

    );
};

export default Card;