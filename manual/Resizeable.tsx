import React from 'react'

export const Resizeable: React.FC = ({ children }) => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '8px',
            resize: 'both',
            overflow: 'auto',
        }}
    >
        <div
            style={{
                width: '100%',
                height: '100%',
                border: 'solid blue',
            }}
        >
            {children}
        </div>
    </div>
)
