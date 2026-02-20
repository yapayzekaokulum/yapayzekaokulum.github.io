import os

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Tailwind colors
    content = content.replace("purple: '#8b5cf6'", "purple: '#6366f1'") # indigo-500
    content = content.replace("neon: '#00f2ff'", "neon: '#38bdf8'")     # sky-400
    content = content.replace("dark: '#0a0f1c'", "dark: '#0f172a'")     # slate-900

    # CSS overrides
    glass_css = '''        .glass {
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .glass-card {
            background: rgba(15, 23, 42, 0.4);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: all 0.3s ease;
        }

        .glass-card:hover {
            border-color: rgba(255, 255, 255, 0.15);
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }'''

    # We need to replace the old glass CSS block.
    import re
    content = re.sub(r'\.glass\s*\{[^}]+\}\s*\.glass-card\s*\{[^}]+\}\s*\.glass-card:hover\s*\{[^}]+\}', glass_css, content)

    # Gradients and shadows
    content = content.replace('bg-gradient-to-br from-purple-900/50 to-brand-dark', 'bg-slate-900')
    content = content.replace('bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-brand-neon/10', 'bg-slate-800/50')
    content = content.replace('bg-gradient-to-r from-purple-600/20 to-blue-600/20', 'bg-slate-800/50')
    content = content.replace('bg-gradient-to-r from-purple-600 to-blue-600', 'bg-blue-600')
    content = content.replace('hover:from-purple-500 hover:to-blue-500', 'hover:bg-blue-500')
    content = content.replace('hover:shadow-[0_0_30px_rgba(0,242,255,0.3)]', 'hover:shadow-lg')
    content = content.replace('shadow-[0_0_30px_rgba(139,92,246,0.3)]', 'shadow-xl')
    content = content.replace('text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-brand-neon', 'text-white font-bold tracking-tight')
    content = content.replace('shadow-[0_0_30px_rgba(255,255,255,0.2)]', 'shadow-md')
    content = content.replace('shadow-[0_0_20px_rgba(37,211,102,0.5)]', 'shadow-xl')
    content = content.replace('from-[#0f172a] via-[#1e1b4b] to-[#0f172a]', 'from-slate-900 via-slate-800 to-slate-900')
    content = content.replace('opacity-20 mix-blend-soft-light', 'opacity-10 mix-blend-soft-light')
    
    # Text gradient overrides (for anything not exactly matching the above long string)
    content = content.replace('gradient-text', 'text-white font-semibold')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

for fn in ['index.html', 'blog/index.html', 'araclar/index.html', 'egitimler/index.html']:
    process_file(fn)
    print(f'Processed {fn}')
