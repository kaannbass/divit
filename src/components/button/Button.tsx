import React from 'react';

type ButtonProps = {
    onClick: () => void;
    disabled: boolean;
    className: string;
    children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ onClick, disabled, className, children }) => {
    return (
        <div>
            <button
                onClick={onClick}
                disabled={disabled}
                className={className}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;
