/* render.js — Construcción del DOM, navegación y pestañas */

document.addEventListener('DOMContentLoaded', () => {
  buildSidebar();
  buildContent();
  initMobileMenu();
  navigateFromHash();
  window.addEventListener('hashchange', navigateFromHash);
});

/* ─── Sidebar ─── */
function buildSidebar() {
  const nav = document.getElementById('nav-menu');
  APP_DATA.sessions.forEach(session => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#/' + session.id;
    a.setAttribute('data-session', session.id);

    if (session.numLabel) {
      const span = document.createElement('span');
      span.className = 'nav-session-num';
      span.textContent = session.numLabel;
      a.appendChild(span);
    }
    a.appendChild(document.createTextNode(session.menuTitle));
    li.appendChild(a);
    nav.appendChild(li);
  });
}

/* ─── Área de contenido (shells vacíos) ─── */
function buildContent() {
  // Tab nav wrapper
  const tabNavWrap = document.getElementById('tab-nav-wrapper');
  const tabNav = document.createElement('div');
  tabNav.id = 'tab-nav';
  tabNav.setAttribute('role', 'tablist');
  tabNavWrap.appendChild(tabNav);

  // Tab panels container
  const panels = document.getElementById('tab-panels');
  panels.innerHTML = '';
}

/* ─── Navegación ─── */
function navigateFromHash() {
  const hash = window.location.hash || '#/inicio';
  const parts = hash.replace('#/', '').split('/');
  const sessionId = parts[0] || 'inicio';
  const tabId = parts[1] || null;

  // Buscar sesión
  const session = APP_DATA.sessions.find(s => s.id === sessionId)
    || APP_DATA.sessions[0];

  renderSession(session, tabId);
  updateSidebarActive(session.id);
  closeMobileMenu();
}

function navigateTo(sessionId, tabId) {
  const hash = tabId ? `#/${sessionId}/${tabId}` : `#/${sessionId}`;
  window.location.hash = hash;
}

/* ─── Renderizar sesión ─── */
function renderSession(session, requestedTabId) {
  renderTabNav(session);
  renderTabPanels(session, requestedTabId);
  updateTopbarTitle(session.menuTitle);
}

function renderTabNav(session) {
  const tabNav = document.getElementById('tab-nav');
  tabNav.innerHTML = '';
  const tabNavWrap = document.getElementById('tab-nav-wrapper');

  // Ocultar tab nav si solo hay un tab o es especial sin tabs
  if (session.tabs.length <= 1) {
    tabNavWrap.style.display = 'none';
    return;
  }
  tabNavWrap.style.display = '';

  session.tabs.forEach(tab => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn';
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-controls', 'panel-' + tab.id);
    btn.setAttribute('data-tab', tab.id);
    btn.setAttribute('data-session', session.id);
    btn.setAttribute('aria-selected', 'false');

    const titleSpan = document.createElement('span');
    titleSpan.textContent = tab.title;
    btn.appendChild(titleSpan);

    if (tab.badge) {
      const badge = document.createElement('span');
      badge.className = 'tab-badge';
      badge.textContent = tab.badge;
      btn.appendChild(badge);
    }

    btn.addEventListener('click', () => {
      navigateTo(session.id, tab.id);
    });

    tabNav.appendChild(btn);
  });
}

function renderTabPanels(session, requestedTabId) {
  const panels = document.getElementById('tab-panels');
  panels.innerHTML = '';

  const firstTabId = session.tabs[0]?.id;
  const activeTabId = requestedTabId
    ? (session.tabs.find(t => t.id === requestedTabId) ? requestedTabId : firstTabId)
    : firstTabId;

  session.tabs.forEach(tab => {
    const panel = document.createElement('div');
    panel.className = 'tab-panel' + (tab.id === activeTabId ? ' active' : '');
    panel.id = 'panel-' + tab.id;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', 'tab-' + tab.id);
    panel.innerHTML = tab.content;
    panels.appendChild(panel);
  });

  // Marcar tab activo
  setTimeout(() => {
    document.querySelectorAll('.tab-btn').forEach(btn => {
      const isActive = btn.dataset.tab === activeTabId;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
      if (isActive) {
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }, 0);

  // Tab buttons switch between panels
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.tab;
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      const targetPanel = document.getElementById('panel-' + targetId);
      if (targetPanel) targetPanel.classList.add('active');
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      afterPanelActivated();
    });
  });

  afterPanelActivated();
}

function afterPanelActivated() {
  initCopyButtons();
  initChecklists();
  if (typeof Prism !== 'undefined') Prism.highlightAll();
}

/* ─── Sidebar activo ─── */
function updateSidebarActive(sessionId) {
  document.querySelectorAll('#nav-menu a').forEach(a => {
    a.classList.toggle('active', a.dataset.session === sessionId);
  });
}

/* ─── Topbar title ─── */
function updateTopbarTitle(title) {
  const el = document.querySelector('.topbar-title');
  if (el) el.textContent = title;
}

/* ─── Menú móvil ─── */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');

  hamburger?.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('visible');
  });

  overlay?.addEventListener('click', closeMobileMenu);
}

function closeMobileMenu() {
  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('sidebar-overlay')?.classList.remove('visible');
}
