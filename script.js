/* ============================================================
   ACS FILMS — PREMIUM STREAMING PLATFORM
   Shared JS Logic — script.js
   ============================================================ */

'use strict';

/* ─── MOVIE / TV DATABASE ─── */
const ACS_DB = {
  movies: [
    {
      id: 1, type: 'movie', title: 'Shadow Protocol', year: 2024,
      genre: ['Action','Thriller'], language: 'English', runtime: '2h 18m',
      rating: 4.5, imdb: '8.2', tmdb: '84%', rt: '91%',
      director: 'Marcus Vance', cast: ['Ethan Cross','Maya Reeves','Jonas Black','Aria Storm'],
      synopsis: 'When a rogue intelligence operative uncovers a global conspiracy embedded deep within the corridors of power, he must race against time, betrayal, and his own fractured past to dismantle a shadow network before it triggers a catastrophic world event.',
      poster: 'https://images.pexels.com/photos/8108316/pexels-photo-8108316.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600',
      backdrop: 'https://images.pexels.com/photos/8108316/pexels-photo-8108316.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      badge: 'new', trending: true, featured: true,
      subtitles: ['English','French','Spanish','German']
    },
    {
      id: 2, type: 'movie', title: 'Neon Abyss', year: 2024,
      genre: ['Sci-Fi','Action'], language: 'English', runtime: '2h 5m',
      rating: 4, imdb: '7.8', tmdb: '79%', rt: '84%',
      director: 'Lena Vasquez', cast: ['Dex Monroe','Saya Chen','Riku Tanaka'],
      synopsis: 'In a rain-soaked cyberpunk metropolis, a disillusioned mercenary accepts one final job that pulls her into a war between mega-corporations and an underground resistance fighting for humanity\'s digital soul.',
      poster: 'https://images.pexels.com/photos/18545016/pexels-photo-18545016.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600',
      backdrop: 'https://images.pexels.com/photos/18545016/pexels-photo-18545016.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      badge: 'hot', trending: true, featured: false,
      subtitles: ['English','Japanese','Korean']
    },
    {
      id: 3, type: 'movie', title: 'The Last Horizon', year: 2023,
      genre: ['Drama','Adventure'], language: 'English', runtime: '1h 58m',
      rating: 5, imdb: '8.6', tmdb: '91%', rt: '95%',
      director: 'Sofia Adler', cast: ['Leo Hart','Nina Waters','Samuel Cross'],
      synopsis: 'A renowned explorer and a grieving scientist embark on an impossible journey across a dying continent, discovering ancient secrets that rewrite everything humanity knows about its origins.',
      poster: 'https://images.pexels.com/photos/9935713/pexels-photo-9935713.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600',
      backdrop: 'https://images.pexels.com/photos/9935713/pexels-photo-9935713.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      badge: 'hd', trending: true, featured: false,
      subtitles: ['English','French']
    },
    {
      id: 4, type: 'movie', title: 'Crimson Tide Rising', year: 2024,
      genre: ['Horror','Mystery'], language: 'English', runtime: '1h 45m',
      rating: 3.5, imdb: '7.1', tmdb: '72%', rt: '78%',
      director: 'Nathan Cole', cast: ['Vera Night','Dom Ashford','Lily Pierce'],
      synopsis: 'A remote coastal town is terrorized by an ancient force awakened by a freak tide, as a marine biologist races to uncover the terrifying truth before the ocean consumes them all.',
      poster: 'https://images.pexels.com/photos/28302225/pexels-photo-28302225.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600',
      backdrop: 'https://images.pexels.com/photos/28302225/pexels-photo-28302225.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      badge: 'new', trending: false, featured: false,
      subtitles: ['English']
    },
    {
      id: 5, type: 'movie', title: 'Stellar Divide', year: 2023,
      genre: ['Sci-Fi','Drama'], language: 'English', runtime: '2h 22m',
      rating: 4.5, imdb: '8.0', tmdb: '85%', rt: '88%',
      director: 'James Okafor', cast: ['Zara Nova','Cade Ellis','Pita Hana'],
      synopsis: 'On the edge of the known universe, a crew of interstellar explorers discovers a phenomenon that challenges the very definition of consciousness and forces them to confront what it means to be human.',
      poster: 'https://images.pexels.com/photos/7662940/pexels-photo-7662940.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600',
      backdrop: 'https://images.pexels.com/photos/7662940/pexels-photo-7662940.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      badge: 'hd', trending: true, featured: false,
      subtitles: ['English','German','Spanish']
    },
    {
      id: 6, type: 'movie', title: 'Broken Mirrors', year: 2024,
      genre: ['Thriller','Mystery'], language: 'French', runtime: '1h 52m',
      rating: 4, imdb: '7.6', tmdb: '80%', rt: '82%',
      director: 'Elise Moreau', cast: ['Pierre Dubois','Camille Noir','Antoine Blanc'],
      synopsis: 'A Parisian detective with a haunted past investigates a series of art-world murders that seem to mirror famous paintings — and realises the killer is leaving messages meant only for her.',
      poster: 'https://images.pexels.com/photos/12637466/pexels-photo-12637466.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600',
      backdrop: 'https://images.pexels.com/photos/12637466/pexels-photo-12637466.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      badge: 'new', trending: false, featured: false,
      subtitles: ['French','English','Spanish']
    },
    {
      id: 7, type: 'movie', title: 'Iron Will', year: 2022,
      genre: ['Action','Sport'], language: 'English', runtime: '2h 0m',
      rating: 4, imdb: '7.5', tmdb: '76%', rt: '80%',
      director: 'Marcus Vance', cast: ['Rex Cain','Gloria West','Omar Banks'],
      synopsis: 'From the streets of Detroit to the world championship stage, a bare-knuckle fighter must overcome injury, poverty, and a corrupt promoter to prove that the human spirit cannot be bought or broken.',
      poster: 'https://images.pexels.com/photos/37418699/pexels-photo-37418699.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600',
      backdrop: 'https://images.pexels.com/photos/37418699/pexels-photo-37418699.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      badge: 'hd', trending: false, featured: false,
      subtitles: ['English']
    },
    {
      id: 8, type: 'movie', title: 'Ghost Mountain', year: 2023,
      genre: ['Horror','Adventure'], language: 'English', runtime: '1h 40m',
      rating: 3, imdb: '6.8', tmdb: '68%', rt: '71%',
      director: 'Alicia Storm', cast: ['Jake Holt','Emma Dark','Ray Solis'],
      synopsis: 'A group of thrill-seeking climbers become stranded on a cursed peak where the mountain itself seems to be alive — and hunting them one by one through its endless white silence.',
      poster: 'https://images.pexels.com/photos/8561215/pexels-photo-8561215.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600',
      backdrop: 'https://images.pexels.com/photos/8561215/pexels-photo-8561215.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      badge: '', trending: false, featured: false,
      subtitles: ['English']
    },
    {
      id: 9, type: 'movie', title: 'The Architect', year: 2024,
      genre: ['Drama','Crime'], language: 'English', runtime: '2h 10m',
      rating: 4.5, imdb: '8.1', tmdb: '86%', rt: '90%',
      director: 'Sofia Adler', cast: ['Aaron Clay','Helen Marsh','Victor Crane'],
      synopsis: 'A brilliant architect uncovers a money laundering empire built into her life\'s greatest project — and must decide whether exposing the truth will cost her everything she has built.',
      poster: 'https://images.pexels.com/photos/4244349/pexels-photo-4244349.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600',
      backdrop: 'https://images.pexels.com/photos/4244349/pexels-photo-4244349.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      badge: 'new', trending: true, featured: false,
      subtitles: ['English','Spanish']
    },
    {
      id: 10, type: 'movie', title: 'Wild Cards', year: 2023,
      genre: ['Comedy','Crime'], language: 'English', runtime: '1h 48m',
      rating: 3.5, imdb: '7.0', tmdb: '73%', rt: '77%',
      director: 'Nathan Cole', cast: ['Frankie Ray','Bea Gold','Hiro Sato'],
      synopsis: 'Three bumbling con artists accidentally stumble into the biggest heist in Las Vegas history — and must outwit professional criminals, the FBI, and each other to walk away rich.',
      poster: 'https://images.pexels.com/photos/34598261/pexels-photo-34598261.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600',
      backdrop: 'https://images.pexels.com/photos/34598261/pexels-photo-34598261.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      badge: 'hot', trending: false, featured: false,
      subtitles: ['English','French']
    },
    {
      id: 11, type: 'movie', title: 'Pulse', year: 2022,
      genre: ['Romance','Drama'], language: 'English', runtime: '1h 55m',
      rating: 4, imdb: '7.4', tmdb: '77%', rt: '79%',
      director: 'Lena Vasquez', cast: ['Aria Storm','Marcus Cole','Dani Rivera'],
      synopsis: 'A trauma surgeon and a jazz musician meet during a city-wide blackout and must navigate their perfectly opposite worlds to discover if love can survive the return of the light.',
      poster: 'https://images.pexels.com/photos/8271461/pexels-photo-8271461.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600',
      backdrop: 'https://images.pexels.com/photos/8271461/pexels-photo-8271461.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      badge: '', trending: false, featured: false,
      subtitles: ['English']
    },
    {
      id: 12, type: 'movie', title: 'Forgotten Empire', year: 2024,
      genre: ['Adventure','History'], language: 'English', runtime: '2h 30m',
      rating: 4.5, imdb: '8.3', tmdb: '88%', rt: '92%',
      director: 'James Okafor', cast: ['Helena Grand','Cyrus Shah','Lea Moon'],
      synopsis: 'An archaeologist discovers a hidden civilization beneath the Sahara — one that rewrites human history — and must fight off mercenaries and governments desperate to keep the secret buried.',
      poster: 'https://images.pexels.com/photos/7991394/pexels-photo-7991394.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=600',
      backdrop: 'https://images.pexels.com/photos/7991394/pexels-photo-7991394.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      badge: 'new', trending: true, featured: false,
      subtitles: ['English','Arabic','French']
    }
  ],
  tvSeries: [
    {
      id: 101, type: 'series', title: 'Dark Signal', year: 2024,
      genre: ['Sci-Fi','Thriller'], language: 'English', runtime: '8 Episodes',
      rating: 5, imdb: '9.1', tmdb: '94%', rt: '97%',
      director: 'Sofia Adler', cast: ['Mara Quinn','Eli Stone','Priya Nair','Tom Hale'],
      synopsis: 'A global blackout plunges civilisation into chaos. A small team of scientists discovers that the cause is not natural — it\'s a signal, and it\'s listening. Season 2 ending shocks audiences worldwide.',
      poster: 'https://images.pexels.com/photos/30547612/pexels-photo-30547612.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      backdrop: 'https://images.pexels.com/photos/30547612/pexels-photo-30547612.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      badge: 'hot', trending: true, featured: false,
      subtitles: ['English','French','German','Spanish']
    },
    {
      id: 102, type: 'series', title: 'The Syndicate', year: 2023,
      genre: ['Crime','Drama'], language: 'English', runtime: '10 Episodes',
      rating: 4.5, imdb: '8.5', tmdb: '89%', rt: '93%',
      director: 'Marcus Vance', cast: ['Carol Vane','Derek Shaw','Isabelle Fox'],
      synopsis: 'Inside the world\'s most sophisticated criminal organisation, a young accountant becomes the most unlikely undercover agent — and the most dangerous.',
      poster: 'https://images.pexels.com/photos/7991405/pexels-photo-7991405.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      backdrop: 'https://images.pexels.com/photos/7991405/pexels-photo-7991405.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      badge: 'new', trending: true, featured: false,
      subtitles: ['English','Spanish']
    },
    {
      id: 103, type: 'series', title: 'Parallel Lives', year: 2024,
      genre: ['Drama','Fantasy'], language: 'English', runtime: '6 Episodes',
      rating: 4, imdb: '7.9', tmdb: '81%', rt: '85%',
      director: 'Elise Moreau', cast: ['Nia Cross','Evan Vale','Suki Tanaka'],
      synopsis: 'A woman discovers she can see into alternate versions of her own life — and the choices she didn\'t make. But every glimpse changes her reality in unpredictable ways.',
      poster: 'https://images.pexels.com/photos/30547584/pexels-photo-30547584.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      backdrop: 'https://images.pexels.com/photos/30547584/pexels-photo-30547584.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      badge: 'hd', trending: false, featured: false,
      subtitles: ['English']
    },
    {
      id: 104, type: 'series', title: 'City of Shadows', year: 2023,
      genre: ['Crime','Noir'], language: 'French', runtime: '12 Episodes',
      rating: 4.5, imdb: '8.4', tmdb: '87%', rt: '90%',
      director: 'Elise Moreau', cast: ['Hugo Leclerc','Manon Bleu','Rafael Torres'],
      synopsis: 'A neo-noir crime saga set in a fictional version of 1970s Paris, where a detective navigates police corruption, organised crime, and a city that doesn\'t want its shadows exposed.',
      poster: 'https://images.pexels.com/photos/7991501/pexels-photo-7991501.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      backdrop: 'https://images.pexels.com/photos/7991501/pexels-photo-7991501.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      badge: 'new', trending: true, featured: false,
      subtitles: ['French','English']
    },
    {
      id: 105, type: 'series', title: 'Apex Predator', year: 2024,
      genre: ['Action','Thriller'], language: 'English', runtime: '8 Episodes',
      rating: 4, imdb: '7.7', tmdb: '79%', rt: '82%',
      director: 'Nathan Cole', cast: ['Storm Reed','Val Osei','Dani Moon'],
      synopsis: 'The world\'s top 10 hunters are hunted. Someone has declared open season on the elite — and the only way to survive is to stop running and start thinking like the predator you are.',
      poster: 'https://images.pexels.com/photos/8263369/pexels-photo-8263369.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      backdrop: 'https://images.pexels.com/photos/8263369/pexels-photo-8263369.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      badge: 'hot', trending: false, featured: false,
      subtitles: ['English','Spanish','German']
    },
    {
      id: 106, type: 'series', title: 'Midnight Protocol', year: 2024,
      genre: ['Thriller','Espionage'], language: 'English', runtime: '10 Episodes',
      rating: 4.5, imdb: '8.2', tmdb: '85%', rt: '89%',
      director: 'James Okafor', cast: ['Reed Quinn','Iara Souza','Kai Nakamura'],
      synopsis: 'Intelligence agencies from six nations are chasing the same ghost — a whistleblower with evidence that could collapse every government on Earth. Season finale leaves viewers breathless.',
      poster: 'https://images.pexels.com/photos/13448629/pexels-photo-13448629.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      backdrop: 'https://images.pexels.com/photos/13448629/pexels-photo-13448629.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      badge: 'new', trending: true, featured: false,
      subtitles: ['English','Korean','Japanese']
    }
  ]
};

// Combined helper
ACS_DB.all = [...ACS_DB.movies, ...ACS_DB.tvSeries];
ACS_DB.getById = (id) => ACS_DB.all.find(m => m.id === parseInt(id));
ACS_DB.search = (q) => {
  if (!q || q.length < 2) return [];
  const lq = q.toLowerCase();
  return ACS_DB.all.filter(m =>
    m.title.toLowerCase().includes(lq) ||
    m.genre.some(g => g.toLowerCase().includes(lq)) ||
    m.language.toLowerCase().includes(lq)
  ).slice(0, 8);
};
ACS_DB.byGenre = (g) => ACS_DB.all.filter(m => m.genre.includes(g));
ACS_DB.trending = () => ACS_DB.all.filter(m => m.trending);

/* ─── LOCALSTORAGE HELPERS ─── */
const Store = {
  get: (k, fallback = null) => {
    try { const v = localStorage.getItem(k); return v !== null ? JSON.parse(v) : fallback; }
    catch { return fallback; }
  },
  set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  remove: (k) => { try { localStorage.removeItem(k); } catch {} },

  // Theme
  getTheme: () => Store.get('acs_theme', 'dark'),
  setTheme: (t) => Store.set('acs_theme', t),

  // Auth
  getUser: () => Store.get('acs_user', null),
  setUser: (u) => Store.set('acs_user', u),
  removeUser: () => Store.remove('acs_user'),
  isLoggedIn: () => !!Store.get('acs_user', null),

  // Watchlist
  getWatchlist: () => Store.get('acs_watchlist', []),
  addToWatchlist: (id) => {
    const wl = Store.getWatchlist();
    if (!wl.includes(id)) { wl.push(id); Store.set('acs_watchlist', wl); return true; }
    return false;
  },
  removeFromWatchlist: (id) => {
    let wl = Store.getWatchlist();
    wl = wl.filter(x => x !== id);
    Store.set('acs_watchlist', wl);
  },
  inWatchlist: (id) => Store.getWatchlist().includes(id),
  toggleWatchlist: (id) => {
    if (Store.inWatchlist(id)) { Store.removeFromWatchlist(id); return false; }
    else { Store.addToWatchlist(id); return true; }
  },

  // Watch History
  getHistory: () => Store.get('acs_history', []),
  addToHistory: (id, progress = 0) => {
    let h = Store.getHistory();
    h = h.filter(x => x.id !== id);
    h.unshift({ id, progress, watchedAt: Date.now() });
    if (h.length > 20) h = h.slice(0, 20);
    Store.set('acs_history', h);
  },
  updateProgress: (id, progress) => {
    let h = Store.getHistory();
    const idx = h.findIndex(x => x.id === id);
    if (idx > -1) h[idx].progress = progress;
    else h.unshift({ id, progress, watchedAt: Date.now() });
    Store.set('acs_history', h);
  },

  // Ratings
  getRating: (id) => Store.get(`acs_rating_${id}`, 0),
  setRating: (id, r) => Store.set(`acs_rating_${id}`, r),

  // Comments
  getComments: (id) => Store.get(`acs_comments_${id}`, []),
  addComment: (id, c) => {
    const comments = Store.getComments(id);
    comments.unshift(c);
    Store.set(`acs_comments_${id}`, comments);
  }
};

/* ─── THEME MANAGEMENT ─── */
const Theme = {
  init() {
    const saved = Store.getTheme();
    if (saved === 'light') document.body.classList.add('light-mode');
    Theme.updateToggles();
  },
  toggle() {
    const isLight = document.body.classList.toggle('light-mode');
    Store.setTheme(isLight ? 'light' : 'dark');
    Theme.updateToggles();
  },
  updateToggles() {
    const isLight = document.body.classList.contains('light-mode');
    document.querySelectorAll('.theme-checkbox').forEach(cb => cb.checked = isLight);
    document.querySelectorAll('.toggle-thumb .theme-icon').forEach(icon => {
      icon.textContent = isLight ? '☀️' : '🌙';
    });
  }
};

/* ─── TOAST NOTIFICATIONS ─── */
const Toast = {
  container: null,
  init() {
    if (!document.querySelector('.toast-container')) {
      this.container = document.createElement('div');
      this.container.className = 'toast-container';
      document.body.appendChild(this.container);
    } else {
      this.container = document.querySelector('.toast-container');
    }
  },
  show(message, type = 'info', duration = 3500) {
    if (!this.container) this.init();
    const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span class="toast-icon">${icons[type] || 'ℹ️'}</span><span>${message}</span>`;
    this.container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('out');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
};

/* ─── AUTH MANAGEMENT ─── */
const Auth = {
  overlay: null,
  init() {
    this.overlay = document.getElementById('authOverlay');
    if (!this.overlay) return;
    const backdrop = this.overlay.querySelector('.auth-backdrop');
    if (backdrop) backdrop.addEventListener('click', () => Auth.close());
    const closeBtn = this.overlay.querySelector('.auth-close');
    if (closeBtn) closeBtn.addEventListener('click', () => Auth.close());
    // Tab switching
    this.overlay.querySelectorAll('.auth-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        Auth.overlay.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
        Auth.overlay.querySelectorAll('.auth-form-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        const panel = Auth.overlay.querySelector(`[data-panel="${target}"]`);
        if (panel) panel.classList.add('active');
      });
    });
    // Sign in form
    const signinForm = document.getElementById('signinForm');
    if (signinForm) signinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = signinForm.querySelector('[name="email"]').value;
      const pass = signinForm.querySelector('[name="password"]').value;
      if (!email || !pass) { Toast.show('Please fill in all fields', 'error'); return; }
      Auth.loginUser({ email, name: email.split('@')[0] });
    });
    // Sign up form
    const signupForm = document.getElementById('signupForm');
    if (signupForm) signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = signupForm.querySelector('[name="name"]').value;
      const email = signupForm.querySelector('[name="email"]').value;
      const pass = signupForm.querySelector('[name="password"]').value;
      if (!name || !email || !pass) { Toast.show('Please fill in all fields', 'error'); return; }
      Auth.loginUser({ email, name });
    });
    // Social buttons
    document.querySelectorAll('.btn-google').forEach(b => b.addEventListener('click', () => {
      Auth.loginUser({ email: 'user@gmail.com', name: 'Google User', provider: 'google' });
    }));
    document.querySelectorAll('.btn-apple').forEach(b => b.addEventListener('click', () => {
      Auth.loginUser({ email: 'user@icloud.com', name: 'Apple User', provider: 'apple' });
    }));
  },
  open(tab = 'signin') {
    if (!this.overlay) return;
    this.overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    // switch tab
    this.overlay.querySelectorAll('.auth-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.tab === tab);
    });
    this.overlay.querySelectorAll('.auth-form-panel').forEach(p => {
      p.classList.toggle('active', p.dataset.panel === tab);
    });
  },
  close() {
    if (!this.overlay) return;
    this.overlay.classList.remove('open');
    document.body.style.overflow = '';
  },
  loginUser(user) {
    Store.setUser(user);
    Auth.close();
    NavAuth.updateUI();
    Toast.show(`Welcome back, ${user.name}! 🎬`, 'success');
  },
  logout() {
    Store.removeUser();
    NavAuth.updateUI();
    AccountPanel.close();
    Toast.show('You have been signed out.', 'info');
    // Close account panel if open
  }
};

/* ─── NAV AUTH STATE ─── */
const NavAuth = {
  updateUI() {
    const user = Store.getUser();
    const loggedIn = !!user;
    // Show/hide My Account
    document.querySelectorAll('.nav-account').forEach(el => {
      el.style.display = loggedIn ? 'flex' : 'none';
    });
    // Auth button
    document.querySelectorAll('.btn-auth-signin').forEach(el => {
      el.style.display = loggedIn ? 'none' : '';
    });
    document.querySelectorAll('.btn-auth-logout').forEach(el => {
      el.style.display = loggedIn ? '' : 'none';
    });
    // User name in logout button
    if (loggedIn) {
      document.querySelectorAll('.btn-user-name').forEach(el => {
        el.textContent = user.name.split(' ')[0];
      });
    }
  }
};

/* ─── ACCOUNT PANEL ─── */
const AccountPanel = {
  panel: null,
  init() {
    this.panel = document.getElementById('accountPanel');
    if (!this.panel) return;
    const closeBtn = this.panel.querySelector('.panel-close');
    if (closeBtn) closeBtn.addEventListener('click', () => AccountPanel.close());
    // Tab switching
    this.panel.querySelectorAll('.account-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        AccountPanel.panel.querySelectorAll('.account-tab').forEach(t => t.classList.remove('active'));
        AccountPanel.panel.querySelectorAll('.account-tab-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        const panel = AccountPanel.panel.querySelector(`[data-panel="${target}"]`);
        if (panel) panel.classList.add('active');
      });
    });
    // Overlay backdrop
    const overlay = document.getElementById('accountOverlay');
    if (overlay) overlay.addEventListener('click', () => AccountPanel.close());
  },
  open() {
    if (!this.panel) return;
    const user = Store.getUser();
    if (!user) { Auth.open(); return; }
    // Populate user info
    const nameEl = this.panel.querySelector('.user-name');
    const emailEl = this.panel.querySelector('.user-email');
    const avatarEl = this.panel.querySelector('.user-avatar');
    if (nameEl) nameEl.textContent = user.name;
    if (emailEl) emailEl.textContent = user.email;
    if (avatarEl) avatarEl.textContent = user.name.charAt(0).toUpperCase();
    // Render tabs
    AccountPanel.renderHistory();
    AccountPanel.renderWatchlist();
    this.panel.classList.add('open');
    const overlay = document.getElementById('accountOverlay');
    if (overlay) overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  },
  close() {
    if (!this.panel) return;
    this.panel.classList.remove('open');
    const overlay = document.getElementById('accountOverlay');
    if (overlay) overlay.style.display = 'none';
    document.body.style.overflow = '';
  },
  renderHistory() {
    const container = document.getElementById('historyList');
    if (!container) return;
    const history = Store.getHistory();
    if (!history.length) {
      container.innerHTML = `<div class="empty-state"><div class="empty-state-icon">📺</div><p>Your watch history will appear here once you start watching!</p></div>`;
      return;
    }
    container.innerHTML = history.map(h => {
      const movie = ACS_DB.getById(h.id);
      if (!movie) return '';
      const pct = Math.round(h.progress * 100);
      const date = new Date(h.watchedAt).toLocaleDateString();
      return `
        <div class="history-item" onclick="window.location.href='movie.html?id=${movie.id}'">
          <img class="history-thumb" src="${movie.poster}" alt="${movie.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/56x78/161616/444?text=ACS'">
          <div class="history-info">
            <h4>${movie.title}</h4>
            <p>${movie.year} • ${movie.type === 'series' ? 'TV Series' : 'Movie'}</p>
            <p style="font-size:0.72rem;color:var(--text-disabled)">Watched ${date}</p>
            <div class="progress-bar-mini"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
          </div>
        </div>`;
    }).join('');
  },
  renderWatchlist() {
    const container = document.getElementById('watchlistList');
    if (!container) return;
    const ids = Store.getWatchlist();
    if (!ids.length) {
      container.innerHTML = `<div class="empty-state"><div class="empty-state-icon">🔖</div><p>Save movies and shows to your Watchlist to find them here later!</p></div>`;
      return;
    }
    container.innerHTML = ids.map(id => {
      const movie = ACS_DB.getById(id);
      if (!movie) return '';
      return `
        <div class="watchlist-item" onclick="window.location.href='movie.html?id=${movie.id}'">
          <img class="watchlist-thumb" src="${movie.poster}" alt="${movie.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/56x78/161616/444?text=ACS'">
          <div class="watchlist-info">
            <h4>${movie.title}</h4>
            <p>${movie.year} • ${movie.genre.join(', ')}</p>
            <p style="margin-top:4px;color:var(--gold);font-size:0.75rem;font-weight:600;">⭐ ${movie.imdb}</p>
          </div>
          <button onclick="event.stopPropagation();AccountPanel.removeFromWatchlist(${id})" style="background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:1.1rem;padding:4px;margin-left:auto;" title="Remove">✕</button>
        </div>`;
    }).join('');
  },
  removeFromWatchlist(id) {
    Store.removeFromWatchlist(id);
    AccountPanel.renderWatchlist();
    Toast.show('Removed from Watchlist', 'info');
  }
};

/* ─── NAVBAR SCROLL ─── */
const NavScroll = {
  init() {
    const nav = document.querySelector('.navbar');
    if (!nav) return;
    const update = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', update, { passive: true });
    update();
  }
};

/* ─── HAMBURGER MENU ─── */
const MobileMenu = {
  init() {
    const btn = document.querySelector('.hamburger');
    const menu = document.querySelector('.mobile-menu');
    if (!btn || !menu) return;
    btn.addEventListener('click', () => {
      btn.classList.toggle('open');
      menu.classList.toggle('open');
      document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      btn.classList.remove('open');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    }));
  }
};

/* ─── SEARCH ─── */
const Search = {
  wrap: null,
  input: null,
  resultsEl: null,
  init() {
    this.wrap = document.querySelector('.search-wrap');
    this.input = document.querySelector('.search-input');
    this.resultsEl = document.getElementById('searchResults');
    const btn = document.querySelector('.search-btn');
    if (!this.wrap || !this.input) return;

    btn && btn.addEventListener('click', () => {
      this.wrap.classList.toggle('expanded');
      if (this.wrap.classList.contains('expanded')) this.input.focus();
    });

    this.input.addEventListener('input', () => Search.handleInput());
    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') Search.goToResults();
      if (e.key === 'Escape') Search.close();
    });

    document.addEventListener('click', (e) => {
      if (!this.wrap.contains(e.target) && this.resultsEl && !this.resultsEl.contains(e.target)) {
        Search.close();
      }
    });

    // Mobile search
    const mobileSearchBtn = document.querySelector('.mobile-search-btn');
    const mobileInput = document.querySelector('.mobile-search input');
    if (mobileSearchBtn && mobileInput) {
      mobileSearchBtn.addEventListener('click', () => {
        const q = mobileInput.value.trim();
        if (q) window.location.href = `all-movies.html?search=${encodeURIComponent(q)}`;
      });
      mobileInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          const q = mobileInput.value.trim();
          if (q) window.location.href = `all-movies.html?search=${encodeURIComponent(q)}`;
        }
      });
    }
  },
  handleInput() {
    const q = this.input.value.trim();
    if (!this.resultsEl) return;
    if (q.length < 2) { this.resultsEl.classList.remove('show'); return; }
    const results = ACS_DB.search(q);
    if (!results.length) {
      this.resultsEl.innerHTML = `<div style="padding:20px;text-align:center;color:var(--text-muted);font-size:0.875rem;">No results found for "<strong>${q}</strong>"</div>`;
    } else {
      this.resultsEl.innerHTML = results.map(m => `
        <div class="search-result-item" onclick="window.location.href='movie.html?id=${m.id}'">
          <img class="search-result-thumb" src="${m.poster}" alt="${m.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/50x70/161616/444?text=ACS'">
          <div class="search-result-info">
            <h4>${m.title}</h4>
            <p>${m.year} · ${m.runtime} · ${m.language}</p>
            <span class="badge">${m.type === 'series' ? 'TV Series' : 'Movie'}</span>
          </div>
        </div>`).join('');
    }
    this.resultsEl.classList.add('show');
  },
  goToResults() {
    const q = this.input.value.trim();
    if (q) window.location.href = `all-movies.html?search=${encodeURIComponent(q)}`;
  },
  close() {
    if (this.wrap) this.wrap.classList.remove('expanded');
    if (this.resultsEl) this.resultsEl.classList.remove('show');
  }
};

/* ─── SLIDERS ─── */
const Sliders = {
  init() {
    document.querySelectorAll('.slider-wrap').forEach(wrap => {
      const slider = wrap.querySelector('.slider');
      const prev = wrap.querySelector('.slider-arrow.prev');
      const next = wrap.querySelector('.slider-arrow.next');
      if (!slider) return;
      const scrollBy = () => slider.clientWidth * 0.75;
      if (prev) prev.addEventListener('click', () => slider.scrollBy({ left: -scrollBy(), behavior: 'smooth' }));
      if (next) next.addEventListener('click', () => slider.scrollBy({ left: scrollBy(), behavior: 'smooth' }));
    });
  }
};

/* ─── HERO CAROUSEL ─── */
const HeroCarousel = {
  items: [],
  current: 0,
  timer: null,
  init() {
    const heroEl = document.getElementById('heroSection');
    if (!heroEl) return;
    this.items = ACS_DB.all.filter(m => m.trending).slice(0, 5);
    if (!this.items.length) return;
    this.render(0);
    this.startTimer();
    const dots = document.querySelectorAll('.hero-dot');
    dots.forEach((d, i) => d.addEventListener('click', () => {
      this.go(i); this.resetTimer();
    }));
  },
  go(idx) {
    this.current = idx;
    this.render(idx);
  },
  render(idx) {
    const m = this.items[idx];
    const bgEl = document.getElementById('heroBg');
    const titleEl = document.getElementById('heroTitle');
    const descEl = document.getElementById('heroDesc');
    const badgeEl = document.getElementById('heroBadge');
    const metaEl = document.getElementById('heroMeta');
    const playBtn = document.getElementById('heroPlayBtn');
    const infoBtn = document.getElementById('heroInfoBtn');
    if (bgEl) {
      bgEl.style.backgroundImage = `url('${m.backdrop}')`;
      bgEl.classList.remove('loaded');
      const img = new Image();
      img.onload = () => bgEl.classList.add('loaded');
      img.src = m.backdrop;
    }
    if (titleEl) titleEl.textContent = m.title;
    if (descEl) descEl.textContent = m.synopsis;
    if (badgeEl) badgeEl.textContent = m.trending ? '🔥 Trending Now' : 'Featured';
    if (metaEl) metaEl.innerHTML = `
      <span class="hero-meta-item imdb">⭐ ${m.imdb} IMDb</span>
      <span class="hero-meta-item">📅 ${m.year}</span>
      <span class="hero-meta-item">🕐 ${m.runtime}</span>
      <span class="hero-meta-item">${m.genre.join(' · ')}</span>`;
    if (playBtn) playBtn.onclick = () => window.location.href = `movie.html?id=${m.id}`;
    if (infoBtn) infoBtn.onclick = () => window.location.href = `movie.html?id=${m.id}`;
    document.querySelectorAll('.hero-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
  },
  startTimer() { this.timer = setInterval(() => { this.go((this.current + 1) % this.items.length); }, 7000); },
  resetTimer() { clearInterval(this.timer); this.startTimer(); }
};

/* ─── RENDER SLIDERS (Home) ─── */
function renderSlider(containerId, items, wide = false) {
  const container = document.getElementById(containerId);
  if (!container) return;
  if (!items.length) { container.innerHTML = '<p style="color:var(--text-muted);padding:20px 60px">No items to display.</p>'; return; }
  container.innerHTML = items.map(m => createMovieCard(m, wide)).join('');
}

function createMovieCard(m, wide = false) {
  const badgeHtml = m.badge ? `<span class="card-badge badge-${m.badge}">${m.badge.toUpperCase()}</span>` : '';
  return `
    <div class="movie-card${wide ? ' wide' : ''}" onclick="window.location.href='movie.html?id=${m.id}'" title="${m.title}">
      ${badgeHtml}
      <img class="movie-card-img" src="${m.poster}" alt="${m.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/200x300/161616/444?text=ACS'">
      <div class="movie-card-overlay">
        <div class="movie-card-title">${m.title}</div>
        <div class="movie-card-meta">
          <span class="movie-card-rating">⭐ ${m.imdb}</span>
          <span>${m.year}</span>
          <span>${m.type === 'series' ? 'TV Series' : m.runtime}</span>
        </div>
      </div>
      <div class="movie-card-play">
        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </div>
    </div>`;
}

/* ─── VIDEO PLAYER ─── */
const Player = {
  video: null,
  container: null,
  movieId: null,
  subtitlesEnabled: false,
  subtitleIndex: 0,
  subtitleLines: [
    "He was never meant to find the truth...",
    "In a world built on lies, only one person knows what's real.",
    "Every shadow has a secret.",
    "Trust no one. Question everything.",
    "The mission was supposed to be simple.",
    "But nothing is ever that simple.",
    "They said it couldn't be done.",
    "This is just the beginning."
  ],
  subTimer: null,

  init(movieId) {
    this.movieId = movieId;
    this.video = document.getElementById('playerVideo');
    this.container = document.getElementById('playerContainer');
    if (!this.video || !this.container) return;

    // Register progress to history
    if (Store.isLoggedIn()) Store.addToHistory(parseInt(movieId), 0);

    this.video.addEventListener('timeupdate', () => Player.onTimeUpdate());
    this.video.addEventListener('loadedmetadata', () => Player.updateDuration());
    this.video.addEventListener('progress', () => Player.updateBuffered());
    this.video.addEventListener('ended', () => Player.onEnded());
    this.video.addEventListener('click', () => Player.togglePlay());

    this.bindControls();
    this.container.classList.add('paused');
  },

  bindControls() {
    const $ = (id) => document.getElementById(id);

    // Play/Pause
    const playBtn = $('playerPlayBtn');
    const bigPlay = $('playerBigPlay');
    if (playBtn) playBtn.addEventListener('click', (e) => { e.stopPropagation(); Player.togglePlay(); });
    if (bigPlay) bigPlay.addEventListener('click', () => Player.togglePlay());

    // Progress bar
    const progress = document.getElementById('playerProgressWrap');
    if (progress) {
      progress.addEventListener('click', (e) => {
        const rect = progress.getBoundingClientRect();
        const pct = (e.clientX - rect.left) / rect.width;
        Player.video.currentTime = pct * Player.video.duration;
      });
      progress.addEventListener('mousemove', (e) => {
        const rect = progress.getBoundingClientRect();
        const pct = (e.clientX - rect.left) / rect.width;
        const t = pct * (Player.video.duration || 0);
        const thumb = document.getElementById('playerProgressThumb');
        if (thumb) thumb.style.left = `${pct * 100}%`;
      });
    }

    // Volume
    const volSlider = $('playerVolume');
    const volBtn = $('playerMuteBtn');
    if (volSlider) {
      volSlider.addEventListener('input', () => {
        Player.video.volume = parseFloat(volSlider.value);
        Player.video.muted = parseFloat(volSlider.value) === 0;
        Player.updateVolumeIcon();
      });
    }
    if (volBtn) volBtn.addEventListener('click', () => {
      Player.video.muted = !Player.video.muted;
      if (volSlider) volSlider.value = Player.video.muted ? 0 : Player.video.volume;
      Player.updateVolumeIcon();
    });

    // Speed
    const speedBtn = $('playerSpeedBtn');
    const speedMenu = $('playerSpeedMenu');
    if (speedBtn && speedMenu) {
      speedBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        speedMenu.classList.toggle('show');
        const subMenu = $('playerSubMenu');
        if (subMenu) subMenu.classList.remove('show');
      });
      speedMenu.querySelectorAll('.speed-option').forEach(opt => {
        opt.addEventListener('click', () => {
          Player.video.playbackRate = parseFloat(opt.dataset.speed);
          speedMenu.querySelectorAll('.speed-option').forEach(o => o.classList.remove('active'));
          opt.classList.add('active');
          speedBtn.querySelector('span') && (speedBtn.querySelector('span').textContent = opt.dataset.speed + 'x');
          speedMenu.classList.remove('show');
        });
      });
    }

    // Subtitles
    const subBtn = $('playerSubBtn');
    const subMenu = $('playerSubMenu');
    if (subBtn && subMenu) {
      subBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        subMenu.classList.toggle('show');
        if (speedMenu) speedMenu.classList.remove('show');
      });
      subMenu.querySelectorAll('.subtitle-option').forEach(opt => {
        opt.addEventListener('click', () => {
          if (opt.dataset.sub === 'off') {
            Player.subtitlesEnabled = false;
            clearInterval(Player.subTimer);
            const display = $('playerSubDisplay');
            if (display) { display.classList.remove('show'); display.textContent = ''; }
          } else {
            Player.subtitlesEnabled = true;
            Player.startSubtitles();
          }
          subMenu.querySelectorAll('.subtitle-option').forEach(o => o.classList.remove('active'));
          opt.classList.add('active');
          subBtn.classList.toggle('active', Player.subtitlesEnabled);
          subMenu.classList.remove('show');
        });
      });
    }

    // Fullscreen
    const fsBtn = $('playerFullscreenBtn');
    if (fsBtn) fsBtn.addEventListener('click', () => Player.toggleFullscreen());
    document.addEventListener('fullscreenchange', () => Player.onFullscreenChange());

    // Skip 10s
    const skipFwd = $('playerSkipFwd');
    const skipBwd = $('playerSkipBwd');
    if (skipFwd) skipFwd.addEventListener('click', () => { Player.video.currentTime = Math.min(Player.video.currentTime + 10, Player.video.duration); });
    if (skipBwd) skipBwd.addEventListener('click', () => { Player.video.currentTime = Math.max(Player.video.currentTime - 10, 0); });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (['INPUT','TEXTAREA'].includes(e.target.tagName)) return;
      const cont = document.getElementById('playerContainer');
      if (!cont) return;
      switch(e.code) {
        case 'Space': e.preventDefault(); Player.togglePlay(); break;
        case 'ArrowRight': Player.video.currentTime += 5; break;
        case 'ArrowLeft': Player.video.currentTime -= 5; break;
        case 'ArrowUp': e.preventDefault(); Player.video.volume = Math.min(1, Player.video.volume + 0.1); break;
        case 'ArrowDown': e.preventDefault(); Player.video.volume = Math.max(0, Player.video.volume - 0.1); break;
        case 'KeyF': Player.toggleFullscreen(); break;
        case 'KeyM': Player.video.muted = !Player.video.muted; break;
      }
    });

    // Close menus on outside click
    document.addEventListener('click', () => {
      document.querySelectorAll('.player-speed-menu, .subtitle-menu').forEach(m => m.classList.remove('show'));
    });
  },

  togglePlay() {
    if (!this.video) return;
    if (this.video.paused) {
      this.video.play();
      this.container.classList.remove('paused');
    } else {
      this.video.pause();
      this.container.classList.add('paused');
    }
    this.updatePlayIcon();
  },

  updatePlayIcon() {
    const btn = document.getElementById('playerPlayBtn');
    if (!btn) return;
    const paused = this.video.paused;
    btn.innerHTML = paused
      ? `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`
      : `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
  },

  onTimeUpdate() {
    if (!this.video) return;
    const pct = this.video.currentTime / this.video.duration * 100;
    const bar = document.getElementById('playerProgressBar');
    const thumb = document.getElementById('playerProgressThumb');
    if (bar) bar.style.width = `${pct}%`;
    if (thumb) thumb.style.left = `${pct}%`;
    const cur = document.getElementById('playerCurrentTime');
    if (cur) cur.textContent = this.formatTime(this.video.currentTime);
    // Save progress every 5 secs
    if (Math.round(this.video.currentTime) % 5 === 0 && Store.isLoggedIn()) {
      Store.updateProgress(parseInt(this.movieId), pct / 100);
    }
  },

  updateDuration() {
    const dur = document.getElementById('playerDuration');
    if (dur && this.video) dur.textContent = this.formatTime(this.video.duration);
  },

  updateBuffered() {
    if (!this.video || !this.video.buffered.length) return;
    const buffered = this.video.buffered.end(this.video.buffered.length - 1) / this.video.duration * 100;
    const bar = document.getElementById('playerBuffered');
    if (bar) bar.style.width = `${buffered}%`;
  },

  updateVolumeIcon() {
    const btn = document.getElementById('playerMuteBtn');
    if (!btn) return;
    const muted = this.video.muted || this.video.volume === 0;
    btn.innerHTML = muted
      ? `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>`
      : `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>`;
  },

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      this.container.requestFullscreen && this.container.requestFullscreen();
    } else {
      document.exitFullscreen && document.exitFullscreen();
    }
  },

  onFullscreenChange() {
    const isFs = !!document.fullscreenElement;
    const btn = document.getElementById('playerFullscreenBtn');
    if (btn) btn.innerHTML = isFs
      ? `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg>`
      : `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>`;
  },

  onEnded() {
    this.container.classList.add('paused');
    this.updatePlayIcon();
    if (Store.isLoggedIn()) Store.updateProgress(parseInt(this.movieId), 1);
  },

  startSubtitles() {
    clearInterval(this.subTimer);
    const display = document.getElementById('playerSubDisplay');
    if (!display) return;
    let i = 0;
    const show = () => {
      if (!Player.subtitlesEnabled) return;
      display.textContent = Player.subtitleLines[i % Player.subtitleLines.length];
      display.classList.add('show');
      i++;
      setTimeout(() => display.classList.remove('show'), 3800);
    };
    show();
    this.subTimer = setInterval(show, 5000);
  },

  formatTime(s) {
    if (!s || isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  }
};

/* ─── STAR RATING ─── */
const StarRating = {
  init(movieId) {
    const container = document.getElementById('starRating');
    if (!container) return;
    const saved = Store.getRating(movieId);
    let current = saved;

    const stars = container.querySelectorAll('.star');
    const update = (n) => {
      stars.forEach((s, i) => s.classList.toggle('active', i < n));
    };
    update(current);

    stars.forEach((star, i) => {
      star.addEventListener('mouseenter', () => update(i + 1));
      star.addEventListener('mouseleave', () => update(current));
      star.addEventListener('click', () => {
        current = i + 1;
        Store.setRating(movieId, current);
        update(current);
        Toast.show(`You rated this ${current} star${current > 1 ? 's' : ''}! ⭐`, 'success');
        const display = document.getElementById('userRatingDisplay');
        if (display) display.textContent = `Your Rating: ${'⭐'.repeat(current)}`;
      });
    });
  }
};

/* ─── COMMENTS ─── */
const Comments = {
  init(movieId) {
    const form = document.getElementById('commentForm');
    const list = document.getElementById('commentsList');
    if (!form || !list) return;
    Comments.render(movieId);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const textarea = form.querySelector('.comment-input');
      const text = textarea.value.trim();
      if (!text) { Toast.show('Please write a comment first.', 'error'); return; }
      const user = Store.getUser();
      const comment = {
        id: Date.now(),
        author: user ? user.name : 'Anonymous Viewer',
        text,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      };
      Store.addComment(movieId, comment);
      textarea.value = '';
      Comments.render(movieId);
      Toast.show('Comment posted! 💬', 'success');
    });
  },
  render(movieId) {
    const list = document.getElementById('commentsList');
    if (!list) return;
    const comments = Store.getComments(movieId);
    if (!comments.length) {
      list.innerHTML = `<div class="empty-state"><div class="empty-state-icon">💬</div><p>Be the first to leave a comment!</p></div>`;
      return;
    }
    list.innerHTML = comments.map(c => `
      <div class="comment-item">
        <div class="comment-avatar">${c.author.charAt(0).toUpperCase()}</div>
        <div class="comment-body">
          <div class="comment-header">
            <span class="comment-author">${c.author}</span>
            <span class="comment-date">${c.date}</span>
          </div>
          <p class="comment-text">${c.text.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</p>
        </div>
      </div>`).join('');
  }
};

/* ─── WATCHLIST BUTTON ─── */
function initWatchlistBtn(movieId) {
  const btn = document.getElementById('watchlistBtn');
  if (!btn) return;
  const update = () => {
    const saved = Store.inWatchlist(parseInt(movieId));
    btn.classList.toggle('saved', saved);
    btn.innerHTML = saved
      ? `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg> Saved`
      : `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/></svg> + Watchlist`;
  };
  update();
  btn.addEventListener('click', () => {
    if (!Store.isLoggedIn()) { Auth.open(); return; }
    const added = Store.toggleWatchlist(parseInt(movieId));
    update();
    Toast.show(added ? 'Added to Watchlist! 🔖' : 'Removed from Watchlist', added ? 'success' : 'info');
  });
}

/* ─── GLOBAL INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  Theme.init();
  Toast.init();
  NavScroll.init();
  MobileMenu.init();
  Search.init();
  Auth.init();
  AccountPanel.init();
  NavAuth.updateUI();
  Sliders.init();

  // Theme toggle listeners
  document.querySelectorAll('.theme-checkbox').forEach(cb => {
    cb.addEventListener('change', () => Theme.toggle());
  });

  // Auth button listeners
  document.querySelectorAll('.btn-auth-signin').forEach(btn => {
    btn.addEventListener('click', () => Auth.open('signin'));
  });
  document.querySelectorAll('.btn-auth-logout').forEach(btn => {
    btn.addEventListener('click', () => Auth.logout());
  });
  document.querySelectorAll('.nav-account-link').forEach(btn => {
    btn.addEventListener('click', (e) => { e.preventDefault(); AccountPanel.open(); });
  });

  // Page-specific init
  const page = document.body.dataset.page;
  if (page === 'home') {
    HeroCarousel.init();
    renderSlider('trendingSlider', ACS_DB.trending().filter(m=>m.type==='movie'));
    renderSlider('tvSeriesSlider', ACS_DB.tvSeries, true);
    renderSlider('newReleasesSlider', [...ACS_DB.movies].sort((a,b)=>b.year-a.year).slice(0,8));
    renderSlider('actionSlider', ACS_DB.byGenre('Action').filter(m=>m.type==='movie'));
    renderSlider('scifiSlider', ACS_DB.byGenre('Sci-Fi'));
  }

  if (page === 'movie') {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (id) {
      MoviePage.init(id);
    }
  }

  if (page === 'all-movies') {
    AllMoviesPage.init();
  }

  if (page === 'contact') {
    ContactPage.init();
  }

  // Page fade-in
  document.body.classList.add('page-fade-in');
});

/* ─── ALL MOVIES PAGE ─── */
const AllMoviesPage = {
  currentFilter: 'All',
  searchQuery: '',
  init() {
    const params = new URLSearchParams(window.location.search);
    this.searchQuery = params.get('search') || '';
    const typeParam = params.get('type') || 'All';

    const grid = document.getElementById('moviesMainGrid');
    if (!grid) return;

    // Set search query in input if present
    if (this.searchQuery) {
      const titleEl = document.getElementById('pageMainTitle');
      if (titleEl) titleEl.textContent = `Search: "${this.searchQuery}"`;
    }

    // Set type filter
    if (typeParam === 'series') this.currentFilter = 'TV Series';
    else if (typeParam === 'movie') this.currentFilter = 'Movies';

    this.render();
    this.bindFilters();
  },
  getData() {
    let data = ACS_DB.all;
    if (this.searchQuery) {
      const lq = this.searchQuery.toLowerCase();
      data = data.filter(m => m.title.toLowerCase().includes(lq) || m.genre.some(g=>g.toLowerCase().includes(lq)));
    }
    if (this.currentFilter === 'Movies') data = data.filter(m=>m.type==='movie');
    else if (this.currentFilter === 'TV Series') data = data.filter(m=>m.type==='series');
    else if (this.currentFilter !== 'All') data = data.filter(m=>m.genre.includes(this.currentFilter));
    return data;
  },
  render() {
    const grid = document.getElementById('moviesMainGrid');
    if (!grid) return;
    const data = this.getData();
    if (!data.length) {
      grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-muted)"><div style="font-size:3rem;margin-bottom:12px">🎬</div><p>No results found.</p></div>`;
      return;
    }
    grid.innerHTML = data.map(m => createMovieCard(m)).join('');
    const countEl = document.getElementById('resultCount');
    if (countEl) countEl.textContent = `${data.length} titles`;
  },
  bindFilters() {
    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.currentFilter = chip.dataset.filter;
        this.render();
      });
      if (chip.dataset.filter === this.currentFilter) {
        chip.classList.add('active');
      }
    });
    // Sort
    const sortEl = document.getElementById('sortSelect');
    if (sortEl) sortEl.addEventListener('change', () => {
      const v = sortEl.value;
      if (v === 'rating') ACS_DB.all.sort((a,b)=>parseFloat(b.imdb)-parseFloat(a.imdb));
      else if (v === 'year') ACS_DB.all.sort((a,b)=>b.year-a.year);
      else if (v === 'title') ACS_DB.all.sort((a,b)=>a.title.localeCompare(b.title));
      this.render();
    });
  }
};

/* ─── MOVIE PAGE ─── */
const MoviePage = {
  init(id) {
    const movie = ACS_DB.getById(id);
    if (!movie) {
      document.body.innerHTML += `<div style="padding:120px 60px;text-align:center"><h2>Movie not found</h2><a href="index.html" style="color:var(--accent)">← Back to Home</a></div>`;
      return;
    }
    // Set metadata
    document.title = `${movie.title} — ACS Films`;
    const setEl = (id, v) => { const el=document.getElementById(id); if(el) el.textContent=v; };
    const setHtml = (id, v) => { const el=document.getElementById(id); if(el) el.innerHTML=v; };
    const setSrc = (id, v) => { const el=document.getElementById(id); if(el) el.src=v; };
    const setAttr = (id, a, v) => { const el=document.getElementById(id); if(el) el.setAttribute(a,v); };

    setEl('movieTitle', movie.title);
    setEl('movieTitle2', movie.title);
    setEl('movieYear', movie.year);
    setEl('movieRuntime', movie.runtime);
    setEl('movieLang', movie.language);
    setEl('movieDirector', movie.director);
    setEl('movieSynopsis', movie.synopsis);
    setSrc('moviePoster', movie.poster);
    setAttr('moviePoster','alt', movie.title);
    setHtml('movieGenres', movie.genre.map(g=>`<span class="meta-tag genre">${g}</span>`).join(''));
    setHtml('movieCast', movie.cast.map(c=>`<span class="cast-chip">${c}</span>`).join(''));
    setHtml('movieScores', `
      <div class="score-badge score-imdb">⭐ ${movie.imdb} IMDb</div>
      <div class="score-badge score-tmdb">🎬 ${movie.tmdb} TMDb</div>
      <div class="score-badge score-rt">🍅 ${movie.rt} RT</div>`);

    // Subtitles in player
    const subMenu = document.getElementById('playerSubMenu');
    if (subMenu && movie.subtitles) {
      const opts = movie.subtitles.map(s=>`<button class="subtitle-option" data-sub="${s}">${s}</button>`).join('');
      subMenu.innerHTML = `<button class="subtitle-option active" data-sub="off">Off</button>${opts}`;
    }

    // Video source
    const video = document.getElementById('playerVideo');
    if (video) video.src = movie.videoUrl;

    // Sidebar info
    setHtml('sidebarInfo', `
      <div class="sidebar-info-row"><span class="sidebar-info-label">Type</span><span class="sidebar-info-value">${movie.type === 'series' ? 'TV Series' : 'Movie'}</span></div>
      <div class="sidebar-info-row"><span class="sidebar-info-label">Runtime</span><span class="sidebar-info-value">${movie.runtime}</span></div>
      <div class="sidebar-info-row"><span class="sidebar-info-label">Year</span><span class="sidebar-info-value">${movie.year}</span></div>
      <div class="sidebar-info-row"><span class="sidebar-info-label">Language</span><span class="sidebar-info-value">${movie.language}</span></div>
      <div class="sidebar-info-row"><span class="sidebar-info-label">Director</span><span class="sidebar-info-value">${movie.director}</span></div>
      <div class="sidebar-info-row"><span class="sidebar-info-label">Genre</span><span class="sidebar-info-value">${movie.genre.join(', ')}</span></div>`);

    // Player
    Player.init(id);
    StarRating.init(id);
    Comments.init(id);
    initWatchlistBtn(id);

    // Related
    const related = ACS_DB.all.filter(m => m.id !== parseInt(id) && m.genre.some(g => movie.genre.includes(g))).slice(0, 6);
    renderSlider('relatedSlider', related);
  }
};

/* ─── CONTACT PAGE ─── */
const ContactPage = {
  init() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="cname"]').value.trim();
      const email = form.querySelector('[name="cemail"]').value.trim();
      if (!name || !email) { Toast.show('Please fill in required fields.', 'error'); return; }
      Toast.show(`Message sent! We'll get back to you shortly, ${name}. ✉️`, 'success', 5000);
      form.reset();
    });

    const reqForm = document.getElementById('requestForm');
    if (reqForm) reqForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = reqForm.querySelector('[name="rtitle"]').value.trim();
      if (!title) { Toast.show('Please enter a movie/show title.', 'error'); return; }
      Toast.show(`Request submitted for "${title}"! We'll try to add it soon. 🎬`, 'success', 5000);
      reqForm.reset();
    });
  }
};
