const fs = require('fs');
const path = 'd:\\YZO-Web-2026\\yapayzekaokulum.github.io\\araclar\\tools.js';

try {
    let content = fs.readFileSync(path, 'utf8');

    // Extract the array part roughly to parse it, or better, just use regex to wrap strings in arrays
    // Since it's a JS file, not pure JSON, parsing might be tricky if I don't use eval or similar.
    // However, the file structure determines efficient regex usage: "category": "Value" -> "category": ["Value"]

    // Regex strategy:
    // Look for "category": "Something"
    // Replace with "category": ["Something"]
    // But be careful not to double wrap if run twice (though I'll run it once).

    // Let's use a safer regex that checking for already array
    // match: "category":\s*"([^"]+)"
    // replace: "category": ["$1"]

    const newContent = content.replace(/"category":\s*"([^"]+)"/g, '"category": ["$1"]');

    // Also update the categories logic at the bottom
    // Original: const categories = [...new Set(tools.map(tool => tool.category))];
    // New: const categories = [...new Set(tools.flatMap(tool => tool.category))];

    const finalContent = newContent.replace(
        'const categories = [...new Set(tools.map(tool => tool.category))];',
        'const categories = [...new Set(tools.flatMap(tool => tool.category))];'
    );

    fs.writeFileSync(path, finalContent, 'utf8');
    console.log('Migration successful!');

} catch (e) {
    console.error('Error:', e);
}
