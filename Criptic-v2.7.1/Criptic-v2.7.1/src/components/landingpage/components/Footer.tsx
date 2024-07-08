import React from 'react';

const Footer: React.FC = () => {
    const boxStyle: React.CSSProperties = {
        padding: '1rem', // Adding padding
        marginTop: '10%',

        color: '#ffffff', // Tailwind: text-white
        borderRadius: '0.5rem', // Tailwind: rounded-lg
        maxWidth: '28rem', // Tailwind: max-w-md

    };

    const gridContainerStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', // Tailwind: grid-cols-2
        gap: '1rem', // Tailwind: gap-4

    };

    const columnStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',

        gap: '0.25rem', // Tailwind: space-y-1
    };

    const pStyle: React.CSSProperties = {
        marginBottom: '0.3rem', // Adding margin bottom for separation
        padding: '0.1rem', // Adding padding
        borderRadius: '0.25rem', // Adding border radius
    };

    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-start mb-30">
                    <div className="flex flex-col space-y-2">
                        <img src="logo.png" alt="Forsage Logo" className="w-32 mb-2" />
                        <p className="text-sm">The world's first 100% decentralized matrix platform</p>
                    </div>
                    <div className="grid grid-cols-2  text-sm">
                        <div className="flex flex-col text-left">
                            <p style={pStyle}>x3 / x4 eth</p>
                            <p style={pStyle}>0x5acc...FB97</p>
                            <p style={pStyle}>xGold eth</p>
                            <p style={pStyle}>0x488e...b6C2</p>
                            <p style={pStyle}>x3 / x4 tron</p>
                            <p style={pStyle}>TREbha...</p>
                            <p style={pStyle}>xGold tron</p>
                            <p style={pStyle}>TA6p1B...</p>
                        </div>
                        <div className="flex flex-col text-left">
                            <p style={pStyle}>x3 / x4 busd</p>
                            <p style={pStyle}>0x5acc...FB97</p>
                            <p style={pStyle}>xXx busd</p>
                            <p style={pStyle}>0x2CAa...ae52</p>
                            <p style={pStyle}>xGold busd</p>
                            <p style={pStyle}>0x9887...f7C5</p>
                            <p style={pStyle}>xQore busd</p>
                            <p style={pStyle}>0x1ee4...Ba78</p>
                        </div>
                    </div>
                    <div style={boxStyle}>
                        <div className="px-0" style={gridContainerStyle}>
                            <div style={columnStyle}>
                                <p style={{ ...pStyle, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#1a202c' }}>Forsage BUSD</p>
                                <p style={{ ...pStyle, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#1a202c' }}>Forsage TRX</p>
                            </div>
                            <div style={columnStyle}>
                                <p style={{ ...pStyle, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#1a202c' }}>Forsage ETH</p>
                                <p style={{ ...pStyle, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#1a202c' }}>Forsage Support</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: '#1a202c', borderRadius: '8px', padding: '20px' }} className='mt-10'>
                    
                    <div className="flex items-center " >
                    <div className="text-left text-sm " style={{width:'100%'}}>
                            <p>© 2024 All Rights Reserved</p>
                            <a href="#" className="hover:text-gray-400">Disclaimer</a>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gray-400"><i className="fab fa-telegram-plane"></i></a>
                            <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="hover:text-gray-400"><i className="fab fa-youtube"></i></a>
                            <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
                        </div>
                      
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
