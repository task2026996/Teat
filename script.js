const displayTimeInTimeZones = () => {
    const timeZones = [
        { name: 'UTC', offset: 0 },
        { name: 'EST', offset: -5 },
        { name: 'CST', offset: -6 },
        { name: 'MST', offset: -7 },
        { name: 'PST', offset: -8 },
        { name: 'CET', offset: 1 },
        { name: 'IST', offset: 5.5 },
        { name: 'CST (China)', offset: 8 },
    ];

    const now = new Date();

    timeZones.forEach(zone => {
        const localTime = new Date(now.getTime() + zone.offset * 3600 * 1000);
        console.log(`Current time in ${zone.name}: ${localTime.toISOString().replace('T', ' ').substr(0, 19)}`);
    });
};

displayTimeInTimeZones();