const happiness = [
    { property: 'neutral', priority: 3 },
    { property: 'unhappy', priority: 1 },
    { property: 'happy', priority: 5 },
    { property: 'dissatisfied', priority: 2 },
    { property: 'satisfied', priority: 4 },
    ];
    happiness.sort(function(a, b){return b.priority-a.priority;});
    console.table(happiness);    