/* progress.js — Checklists marcables con persistencia en localStorage */

function initChecklists() {
  document.querySelectorAll('.checklist-container:not([data-cl-init])').forEach(container => {
    container.setAttribute('data-cl-init', '1');
    const key = container.dataset.key;
    if (!key) return;

    const items = container.querySelectorAll('.checklist-item');
    const progressEl = container.querySelector('.checklist-progress');
    const progressBar = container.querySelector('.progress-bar');
    const resetBtn = container.querySelector('.btn-reset-checklist');

    // Cargar estado desde localStorage
    const saved = JSON.parse(localStorage.getItem('checklist-' + key) || '{}');

    items.forEach((item, i) => {
      const cb = item.querySelector('input[type="checkbox"]');
      if (!cb) return;
      const id = key + '-' + i;
      cb.id = id;
      const lbl = item.querySelector('label');
      if (lbl) lbl.setAttribute('for', id);

      // Restaurar estado guardado
      if (saved[i]) {
        cb.checked = true;
        item.classList.add('done');
      }

      cb.addEventListener('change', () => {
        if (cb.checked) item.classList.add('done');
        else item.classList.remove('done');
        saveState(key, items);
        updateProgress(items, progressEl, progressBar);
      });

      // Click en el item completo también activa el checkbox
      item.addEventListener('click', e => {
        if (e.target !== cb && e.target.tagName !== 'LABEL') {
          cb.checked = !cb.checked;
          cb.dispatchEvent(new Event('change'));
        }
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        items.forEach(item => {
          const cb = item.querySelector('input[type="checkbox"]');
          if (cb) cb.checked = false;
          item.classList.remove('done');
        });
        localStorage.removeItem('checklist-' + key);
        updateProgress(items, progressEl, progressBar);
      });
    }

    updateProgress(items, progressEl, progressBar);
  });
}

function saveState(key, items) {
  const state = {};
  items.forEach((item, i) => {
    const cb = item.querySelector('input[type="checkbox"]');
    if (cb && cb.checked) state[i] = true;
  });
  localStorage.setItem('checklist-' + key, JSON.stringify(state));
}

function updateProgress(items, progressEl, progressBar) {
  const total = items.length;
  const done = Array.from(items).filter(item => {
    const cb = item.querySelector('input[type="checkbox"]');
    return cb && cb.checked;
  }).length;

  if (progressEl) progressEl.textContent = `${done} / ${total} completados`;
  if (progressBar) {
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    progressBar.style.width = pct + '%';
  }
}
