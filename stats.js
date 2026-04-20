const entries = getEntries();

const totalHours = entries.reduce((sum, e) => sum + e.hours, 0);
const avgFocus = entries.length
    ? (entries.reduce((sum, e) => sum + e.focus, 0) / entries.length).toFixed(1)
    : 0;

document.getElementById("totalHours").textContent = totalHours;
document.getElementById("avgFocus").textContent = avgFocus;

// Grafikon
const ctx = document.getElementById("chart");

new Chart(ctx, {
    type: "line",
    data: {
        labels: entries.map(e => e.date),
        datasets: [{
            label: "Fókusz",
            data: entries.map(e => e.focus)
          function generateAnalysis(entries) {
    if (entries.length === 0) return "Nincs adat.";

    let text = "";

    const totalHours = entries.reduce((s, e) => s + e.hours, 0);
    const avgFocus = entries.reduce((s, e) => s + e.focus, 0) / entries.length;

    if (avgFocus < 5) {
        text += "A fókuszod alacsony. Valószínűleg sok a figyelemelterelés. ";
    } else {
        text += "A fókuszod rendben van. ";
    }

    if (totalHours < entries.length) {
        text += "Kevés időt fordítasz tanulásra. ";
    } else {
        text += "Időráfordítás megfelelő. ";
    }

    const doneRate = entries.filter(e => e.done).length / entries.length;

    if (doneRate < 0.5) {
        text += "Gyakran nem fejezed be amit elkezdesz.";
    } else {
        text += "Jól végigviszed a feladataidat.";
    }

    return text;
}

const analysis = generateAnalysis(entries);

const p = document.createElement("p");
p.textContent = analysis;
document.body.appendChild(p);
        }]
    }
});
