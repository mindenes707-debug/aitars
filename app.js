const form = document.getElementById("studyForm");
const entriesDiv = document.getElementById("entries");
const focusInput = document.getElementById("focus");
const focusValue = document.getElementById("focusValue");

focusInput.addEventListener("input", () => {
    focusValue.textContent = focusInput.value;
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const entry = {
        what: document.getElementById("what").value,
        hours: Number(document.getElementById("hours").value),
        focus: Number(document.getElementById("focus").value),
        done: document.getElementById("done").checked,
        date: new Date().toLocaleString()
    };

    saveEntry(entry);
    form.reset();
    renderEntries();
});

function renderEntries() {
    const entries = getEntries();
    entriesDiv.innerHTML = "";

    entries.reverse().forEach(e => {
        const div = document.createElement("div");
        div.className = "entry";

        div.innerHTML = `
            <strong>${e.date}</strong>
            <p>${e.what}</p>
            <p>Órák: ${e.hours}</p>
            <p>Fókusz: ${e.focus}</p>
            <p>${e.done ? "✅ Kész" : "❌ Nem kész"}</p>
        `;

        entriesDiv.appendChild(div);
    });
}

renderEntries();
