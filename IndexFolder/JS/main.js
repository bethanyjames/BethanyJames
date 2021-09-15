const links = [
    {
        label: "Week 01",
        url: "haventStarted/haventStarted.html"
    },

    {
        label: "Week 02",
        url: "haventStarted/haventStarted.html"
    },

    {
        label: "Week 03",
        url: "haventStarted/haventStarted.html"
    },

    {
        label: "Week 04",
        url: "haventStarted/haventStarted.html"
    },

    {
        label: "Week 05",
        url: "haventStarted/haventStarted.html"
    },

    {
        label: "Week 06",
        url: "haventStarted/haventStarted.html"
    },

    {
        label: "Week 07",
        url: "haventStarted/haventStarted.html"
    },

    {
        label: "Week 08",
        url: "haventStarted/haventStarted.html"
    },

    {
        label: "Week 09",
        url: "haventStarted/haventStarted.html"
    },

    {
        label: "Week 10",
        url: "haventStarted/haventStarted.html"
    },
];

const list = document.getElementById("assignment");

const li = document.querySelector('#addLink');
for (i = 0; i <= links.length - 1; i++) { 
    const a = document.createElement('a');
    a.setAttribute('href', links[i].url);
    a.innerText = links[i].label

    list.appendChild(a);
}
