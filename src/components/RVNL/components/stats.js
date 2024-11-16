import React from 'react';

function Stats() {
    const stats = [
        { number: '626', label: 'Projects' },
        { number: '2,125', label: 'Railway Lines' },
        { number: '5,843', label: 'Track Km' },
        { number: '7,001', label: 'Electrified Km' },
    ];

    return (
        <section className="stats">
            {stats.map((stat, index) => (
                <div className="stat-item" key={index}>
                    <h3>{stat.number}</h3>
                    <p>{stat.label}</p>
                </div>
            ))}
        </section>
    );
}

export default Stats;
