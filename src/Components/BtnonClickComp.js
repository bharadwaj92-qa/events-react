import React, { useState } from 'react'

export default function BtnonClickComp() {
    const [desc, setDesc] = useState(true);
    const [review, setReview] = useState(false);

    const descHandler = () => {
        setDesc(true);
        setReview(false);

    };

    const reviewHandler = () => {
        setDesc(false);
        setReview(true);

    };

    return (
        <div>
            <button onClick={descHandler}>Description</button>
            <button onClick={reviewHandler}>Review</button>
            {desc && (
                <p>
                    This is a <b>descriptive</b> button
                    <h3>Descriptions:</h3>
                </p>
            )}
            {review && (
                <p>
                    This is a <b>Review</b> button
                    <h3>Reviews:</h3>
                </p>
            )}
        </div>
    )
}