import React from 'react'

export default function LetterFilter({ setLetter }) {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    return (
        <div className='flex flex-wrap justify-center gap-2 py-2'>
            {
                letters?.map((letra) => (
                    <button
                        className='px-2 py-1 bg-gray-600 rounded hover:bg-gray-400'
                        key={letra}
                        onClick={() => setLetter(letra)}>
                        {letra.toUpperCase()}
                    </button>
                ))
            }
        </div>
    )
}
