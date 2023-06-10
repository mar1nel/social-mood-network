import React, { useEffect } from 'react';
import './panels.css';

const Panel = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const cards = document.getElementsByClassName('card');
            for (const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            }
        };

        document.getElementById('cards').addEventListener('mousemove', handleMouseMove);

        return () => {
            document.getElementById('cards').removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>

            <div id="cards">
                <div className="card">
                    <div className="card-content">
                        <div className="card-image">
                            <i className="fa-duotone fa-apartment"></i>
                        </div>
                        <div className="card-info-wrapper">
                            <div className="card-info">
                                <i className="fa-duotone fa-apartment"></i>
                                <div className="card-info-title">
                                    <h3>@username</h3>
                                    <h4>Places to be apart. Wait, what?</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="card-image">
                            <i className="fa-duotone fa-unicorn"></i>
                        </div>
                        <div className="card-info-wrapper">
                            <div className="card-info">
                                <i className="fa-duotone fa-unicorn"></i>
                                <div className="card-info-title">
                                    <h3>@username</h3>
                                    <h4>A single corn. Er, I mean horn.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-content">
                        <div className="card-image">
                            <i className="fa-duotone fa-blender-phone"></i>
                        </div>
                        <div className="card-info-wrapper">
                            <div className="card-info">
                                <i className="fa-duotone fa-blender-phone"></i>
                                <div className="card-info-title">
                                    <h3>@username</h3>
                                    <h4>These absolutely deserve to exist.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-content">
                        <div className="card-image">
                            <i className="fa-duotone fa-blender-phone"></i>
                        </div>
                        <div className="card-info-wrapper">
                            <div className="card-info">
                                <i className="fa-duotone fa-blender-phone"></i>
                                <div className="card-info-title">
                                    <h3>@username</h3>
                                    <h4>These absolutely deserve to exist.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Panel;
