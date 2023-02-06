import React from 'react'

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-light w-100 position-fixed bottom-0 left-0">
            <div className="container text-center">
                <span className="text-muted">© Vicinity {new Date().getFullYear()}</span>
            </div>
        </footer>
    )
}

export default Footer