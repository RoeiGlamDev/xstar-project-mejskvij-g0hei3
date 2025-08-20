import React from 'react';

const README: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#000', color: '#fff', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ color: '#ff69b4' }}>HouseIL</h1>
            <h2>Luxury Dark AirBNB Website</h2>
            <p>Welcome to HouseIL, your premier destination for high-end accommodations.</p>
            <h3>Features</h3>
            <ul>
                <li>Elegant and sophisticated design</li>
                <li>Responsive layout for all devices</li>
                <li>High-quality images and listings</li>
                <li>User-friendly booking system</li>
            </ul>
            <h3>Color Palette</h3>
            <p>Primary colors: Pink (#ff69b4) and Black (#000)</p>
            <h3>Getting Started</h3>
            <p>To get started, clone the repository and install the dependencies:</p>
            <pre>
                <code>
                    git clone https://github.com/yourusername/houseil.git
                    cd houseil
                    npm install
                </code>
            </pre>
            <h3>Run the Project</h3>
            <p>To run the project, use the following command:</p>
            <pre>
                <code>
                    npm start
                </code>
            </pre>
            <h3>Contributing</h3>
            <p>We welcome contributions! Please open an issue or submit a pull request.</p>
            <h3>License</h3>
            <p>This project is licensed under the MIT License.</p>
        </div>
    );
};

export default README;