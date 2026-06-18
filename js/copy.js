/* copy.js — Botones "Copiar" para prompts y bloques de código */

function initCopyButtons() {
  // Prompts
  document.querySelectorAll('.prompt-block:not([data-copy-init])').forEach(block => {
    block.setAttribute('data-copy-init', '1');
    const textEl = block.querySelector('.prompt-text');
    if (!textEl) return;
    const btn = document.createElement('button');
    btn.className = 'btn-copy';
    btn.innerHTML = '<svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor"><path d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6z"/><path d="M2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h-1v1H2V6h1V5H2z"/></svg> Copiar';
    btn.addEventListener('click', () => copyText(btn, textEl.innerText || textEl.textContent));
    const header = block.querySelector('.prompt-label');
    if (header) header.appendChild(btn);
    else block.insertBefore(btn, block.firstChild);
  });

  // Código Python / código genérico
  document.querySelectorAll('.code-block:not([data-copy-init])').forEach(block => {
    block.setAttribute('data-copy-init', '1');
    const pre = block.querySelector('pre');
    if (!pre) return;
    const btn = document.createElement('button');
    btn.className = 'btn-copy';
    btn.innerHTML = '<svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor"><path d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6z"/><path d="M2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h-1v1H2V6h1V5H2z"/></svg> Copiar';
    btn.addEventListener('click', () => copyText(btn, pre.innerText || pre.textContent));
    const codeHeader = block.querySelector('.code-header');
    if (codeHeader) codeHeader.appendChild(btn);
    else block.insertBefore(btn, block.firstChild);
  });
}

function copyText(btn, text) {
  navigator.clipboard.writeText(text.trim()).then(() => {
    const orig = btn.innerHTML;
    btn.innerHTML = '✓ ¡Copiado!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.classList.remove('copied');
    }, 1800);
  }).catch(() => {
    // Fallback para navegadores sin clipboard API
    const ta = document.createElement('textarea');
    ta.value = text.trim();
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    const orig = btn.innerHTML;
    btn.innerHTML = '✓ ¡Copiado!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.classList.remove('copied');
    }, 1800);
  });
}
