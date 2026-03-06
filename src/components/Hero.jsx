import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const fullText = "Project & Product Manager. Agile & SAFe Certified. Data & AI Driven.";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setTypedText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="about" className="hero-section fade-in-up">
            <div className="hero-content">
                <div className="badge glass-panel fade-in-up delay-100" style={{ fontStyle: 'italic' }}>
                    "The best way to predict the future is to invent it." — Alan Kay
                </div>

                <h1 className="hero-title fade-in-up delay-200">
                    Hi, I'm <span className="text-gradient">Tito Tamaro.</span> <br />
                    Delivering value through <br />
                    strategic management.
                </h1>

                <p className="hero-subtitle fade-in-up delay-300">
                    {typedText}
                    <span className="cursor">|</span>
                </p>

                <div className="hero-actions fade-in-up delay-400">
                    <button className="btn primary-btn glass-panel text-gradient">
                        Explore Work
                    </button>
                    <button className="btn secondary-btn">
                        View Resume
                    </button>
                </div>
            </div>

            <div className="hero-visual fade-in-up delay-500">
                <div className="abstract-shape shape-1"></div>
                <div className="abstract-shape shape-2"></div>
            </div>
        </section>
    );
};

export default Hero;
