/* Gabriel Barrios Films — portfolio dinámico.
 * Todo el contenido de trabajos viene de catalog.json (generado por el administrador).
 * No hace falta editar este archivo para agregar proyectos.
 */
(function () {
  'use strict';

  var I18N = {
    es: {
      skip: 'Saltar al contenido', nav_work: 'Trabajos', nav_about: 'Sobre mí', nav_services: 'Servicios', nav_contact: 'Contacto', menu: 'Menú',
      hero_eyebrow: 'Soluciones audiovisuales · Estudio creativo con IA',
      hero_prefix: 'Damos vida a las marcas con contenido audiovisual de ', hero_accent: 'alto impacto.',
      hero_text: 'Desarrollamos soluciones audiovisuales para empresas y marcas. Combinamos producción cinematográfica, creatividad e inteligencia artificial para crear contenido que comunica, conecta y genera valor.',
      cta_talk: 'Conversemos ↗', cta_projects: 'Ver proyectos', showreel_label: 'Showreel · Selección de trabajos', play_showreel: 'PLAY SHOWREEL ↗',
      trust: 'Experiencia y proyectos con', index: 'Índice',
      about_eyebrow: 'Sobre mí', about_title: 'Detrás de cada<br>cuadro, una historia.',
      stat_projects: 'Proyectos publicados', stat_cats: 'Formatos', stat_clients: 'Marcas y medios',
      services_title: 'Contenido que<br>trabaja para tu marca.',
      services_text: 'Soluciones de producción para comunicar mejor, presentar productos, fortalecer equipos y mantener una presencia audiovisual consistente.',
      contact_title: 'Hagamos algo', contact_accent: 'memorable.',
      contact_text: 'Contame qué necesita tu marca o tu evento. Podemos desarrollar una pieza puntual o pensar un sistema de contenido audiovisual a largo plazo.',
      contact_wa: 'Escribir por WhatsApp', contact_ig: 'Instagram', worldwide: 'Disponible para proyectos en todo el mundo',
      rights: 'Todos los derechos reservados.', back_top: 'Volver arriba ↑', open_ext: 'Abrir en otra pestaña ↗',
      play: 'Reproducir', photos: 'fotos', view_gallery: 'Ver galería', featured: 'Destacado', projects: 'proyectos', project: 'proyecto',
      watch_reel: 'Ver showreel', more_reels: 'Otros cortes',
      sec: {
        showreel: ['Showreel', 'Una selección<br>en movimiento.', 'Lo mejor de mi trabajo en un solo corte: ritmo, imagen y narrativa al servicio de cada historia.'],
        publicidad: ['Publicidad', 'Campañas que<br>se recuerdan.', 'Spots, campañas y piezas de marca pensadas para comunicar con precisión y estética cinematográfica.'],
        promociones: ['Promociones', 'Promos con<br>ritmo propio.', 'Piezas promocionales para canales, eventos, lanzamientos y fechas especiales.'],
        podcast: ['Podcast', 'Conversaciones<br>que se ven bien.', 'Producción y edición de podcasts en video, con multicámara y versiones para redes.'],
        reels: ['Reels y contenido digital', 'Reels y<br>contenido digital.', 'Formatos verticales pensados para captar la atención en los primeros segundos.'],
        alianza: ['Alianza Lima TV', 'Alianza<br>Lima TV.', 'Contenido para el canal del club: previas, post partido, entrevistas y noches históricas.'],
        bodas: ['Bodas y fotografía', 'Bodas y<br>fotografía.', 'Historias reales contadas con sensibilidad: películas de boda, eventos y fotografía.'],
        otros: ['Otros proyectos', 'Otros<br>proyectos.', 'Más trabajos audiovisuales y colaboraciones.']
      },
      services: [
        ['BRAND FILMS', 'Publicidad & videos de marca', 'Spots, campañas, lanzamientos y piezas audiovisuales diseñadas para transmitir el valor de tu marca.'],
        ['AI PRODUCTION', 'Producción audiovisual con IA', 'Videos e imágenes generativas con dirección creativa, narrativa y adaptación a diferentes formatos.'],
        ['CONTENT SYSTEMS', 'Contenido continuo', 'Producción de piezas para redes, reels, podcasts, comunicación interna, eventos y canales digitales.'],
        ['SPORTS & MEDIA', 'Producción deportiva y de medios', 'Previas, post partido, entrevistas y cobertura para clubes, canales y programas.'],
        ['WEDDINGS & EVENTS', 'Bodas y eventos', 'Películas de boda, fotografía y cobertura de eventos con mirada cinematográfica.'],
        ['BUSINESS TRAINING', 'Capacitación empresarial', 'Videos de procedimientos, inducción, tutoriales y comunicación interna para formar equipos con claridad.']
      ]
    },
    en: {
      skip: 'Skip to content', nav_work: 'Work', nav_about: 'About', nav_services: 'Services', nav_contact: 'Contact', menu: 'Menu',
      hero_eyebrow: 'Audiovisual solutions · AI creative studio',
      hero_prefix: 'Bringing brands to life with ', hero_accent: 'impactful video content.',
      hero_text: 'We create audiovisual solutions for businesses and brands. We combine cinematic production, creative thinking and artificial intelligence to make content that communicates, connects and creates value.',
      cta_talk: "Let's talk ↗", cta_projects: 'View projects', showreel_label: 'Showreel · Selected work', play_showreel: 'PLAY SHOWREEL ↗',
      trust: 'Experience and projects with', index: 'Index',
      about_eyebrow: 'About', about_title: 'Behind every<br>frame, a story.',
      stat_projects: 'Published projects', stat_cats: 'Formats', stat_clients: 'Brands & media',
      services_title: 'Content that<br>works for your brand.',
      services_text: 'Production solutions to communicate better, present products, strengthen teams and keep a consistent audiovisual presence.',
      contact_title: "Let's make something", contact_accent: 'memorable.',
      contact_text: "Tell me what your brand or event needs. We can create a single piece or design a long-term audiovisual content system.",
      contact_wa: 'Message on WhatsApp', contact_ig: 'Instagram', worldwide: 'Available for projects worldwide',
      rights: 'All rights reserved.', back_top: 'Back to top ↑', open_ext: 'Open in a new tab ↗',
      play: 'Play', photos: 'photos', view_gallery: 'View gallery', featured: 'Featured', projects: 'projects', project: 'project',
      watch_reel: 'Watch showreel', more_reels: 'Other cuts',
      sec: {
        showreel: ['Showreel', 'A selection<br>in motion.', 'The best of my work in a single cut: rhythm, image and storytelling serving each story.'],
        publicidad: ['Advertising', 'Campaigns people<br>remember.', 'Spots, campaigns and brand pieces crafted to communicate with precision and a cinematic look.'],
        promociones: ['Promos', 'Promos with<br>their own rhythm.', 'Promotional pieces for channels, events, launches and special dates.'],
        podcast: ['Podcast', 'Conversations<br>that look great.', 'Video podcast production and editing, multicamera, with cut-downs for social.'],
        reels: ['Reels & digital content', 'Reels &<br>digital content.', 'Vertical formats built to capture attention in the first seconds.'],
        alianza: ['Alianza Lima TV', 'Alianza<br>Lima TV.', "Content for the club's channel: pre-match, post-match, interviews and historic nights."],
        bodas: ['Weddings & photography', 'Weddings &<br>photography.', 'Real stories told with sensitivity: wedding films, events and photography.'],
        otros: ['Other projects', 'Other<br>projects.', 'More audiovisual work and collaborations.']
      },
      services: [
        ['BRAND FILMS', 'Advertising & brand films', 'Spots, campaigns, launches and audiovisual pieces designed to convey the value of your brand.'],
        ['AI PRODUCTION', 'AI video production', 'Generative video and imagery with creative direction, storytelling and adaptation to every format.'],
        ['CONTENT SYSTEMS', 'Always-on content', 'Pieces for social, reels, podcasts, internal communication, events and digital channels.'],
        ['SPORTS & MEDIA', 'Sports & media production', 'Pre-match, post-match, interviews and coverage for clubs, channels and shows.'],
        ['WEDDINGS & EVENTS', 'Weddings & events', 'Wedding films, photography and event coverage with a cinematic eye.'],
        ['BUSINESS TRAINING', 'Corporate training', 'Procedure, onboarding and tutorial videos plus internal communication to train teams clearly.']
      ]
    }
  };

  var SECTIONS = [
    { id: 'showreel', cats: ['showreel'] },
    { id: 'publicidad', cats: ['publicidad'] },
    { id: 'promociones', cats: ['promociones'] },
    { id: 'podcast', cats: ['podcast'] },
    { id: 'reels', cats: ['reels'] },
    { id: 'alianza', cats: ['alianza'] },
    { id: 'bodas', cats: ['bodas', 'fotografia'] },
    { id: 'otros', cats: ['otros'] }
  ];

  var catalog = { site: {}, categories: [], projects: [] };
  var lang = 'es';
  var byId = {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function t(key) { return I18N[lang][key]; }
  function L(obj) { return obj ? (obj[lang] || obj.es || '') : ''; }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function fmtDur(s) {
    if (!s) return '';
    s = Math.round(s);
    var h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), ss = s % 60;
    return h ? h + ':' + pad(m) + ':' + pad(ss) : m + ':' + pad(ss);
  }
  function catName(key) {
    var c = catalog.categories.filter(function (x) { return x.key === key; })[0];
    return c ? (c[lang] || c.es) : key;
  }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  // ------------------------------------------------------------ carga
  function loadCatalog() {
    var el = document.getElementById('gbf-catalog');
    try {
      var data = JSON.parse(el.textContent);
      if (data && data.projects) return Promise.resolve(data);
    } catch (e) { /* plantilla sin generar */ }
    return fetch('catalog.json', { cache: 'no-cache' }).then(function (r) { return r.ok ? r.json() : null; })
      .catch(function () { return null; });
  }

  // ------------------------------------------------------------ render
  function waLink() {
    var s = catalog.site || {};
    var num = String(s.whatsapp_number || '').replace(/\D/g, '');
    var text = s['whatsapp_text_' + lang] || s.whatsapp_text_es || '';
    return num ? 'https://wa.me/' + num + '?text=' + encodeURIComponent(text) : '#contacto';
  }

  function cardHTML(p, i, opts) {
    var vertical = p.orientation === 'vertical';
    var isGallery = p.kind === 'gallery';
    var meta = [p.client, p.year].filter(Boolean).join(' · ') || catName(p.category);
    var desc = L(p.description);
    var img = '<img loading="lazy" decoding="async" src="' + esc(p.cover.sm) + '" srcset="' + esc(p.cover.sm) + ' 720w, ' + esc(p.cover.src) + ' 1600w" sizes="' +
      (opts.feature ? '(max-width:620px) 100vw, 66vw' : vertical ? '(max-width:620px) 50vw, 25vw' : '(max-width:620px) 100vw, (max-width:950px) 50vw, 33vw') +
      '" alt="' + esc(L(p.title)) + '">';
    var badges = '';
    if (isGallery) badges += '<span class="gallery-count">' + (p.photos || []).length + ' ' + t('photos') + '</span>';
    else if (p.duration) badges += '<span class="dur">' + fmtDur(p.duration) + '</span>';
    if (p.featured && !opts.feature) badges += '<span class="badge">' + esc(t('featured')) + '</span>';
    return '<article class="card reveal' + (vertical ? ' vertical' : '') + (opts.wide ? ' wide' : '') + (opts.feature ? ' feature' : '') + '" style="--i:' + (i % 6) + '">' +
      '<button class="poster" type="button" data-open="' + p.id + '" aria-label="' + esc((isGallery ? t('view_gallery') : t('play')) + ': ' + L(p.title)) + '">' +
      img + badges + '<span class="clip-play" aria-hidden="true">' + (isGallery ? '⤢' : '▶') + '</span>' +
      '<span class="clip-no">' + pad(i + 1) + ' / ' + pad(opts.total) + '</span></button>' +
      '<div class="card-body"><small>' + esc(meta) + '</small><h3>' + esc(L(p.title)) + '</h3>' + (desc ? '<p>' + esc(desc) + '</p>' : '') + '</div></article>';
  }

  function sectionHTML(sec, items, num) {
    var txt = t('sec')[sec.id];
    var intros = (catalog.site || {}).section_intros || {};
    var intro = intros[sec.id] && typeof intros[sec.id][lang] === 'string' ? intros[sec.id][lang] : txt[2];
    var head = '<div class="section-top reveal"><div><div class="eyebrow">' + pad(num) + ' / ' + esc(txt[0]) +
      '<span class="count">' + items.length + ' ' + (items.length === 1 ? t('project') : t('projects')) + '</span></div><h2>' + txt[1] + '</h2></div>' +
      (intro ? '<p>' + esc(intro) + '</p>' : '') + '</div>';

    if (sec.id === 'showreel') {
      var main = items[0];
      var rest = items.slice(1);
      var html = head + '<button class="reel-stage reveal" type="button" data-open="' + main.id + '" aria-label="' + esc(t('watch_reel')) + '">' +
        '<img loading="lazy" decoding="async" src="' + esc(main.cover.src) + '" alt="' + esc(L(main.title)) + '">' +
        '<span class="reel-play" aria-hidden="true">▶</span><span class="reel-copy"><span class="eyebrow">' + esc(t('watch_reel')) +
        (main.duration ? ' · ' + fmtDur(main.duration) : '') + '</span><h3>' + esc(L(main.title)) + '</h3>' +
        (L(main.description) ? '<p>' + esc(L(main.description)) + '</p>' : '') + '</span></button>';
      if (rest.length) {
        html += '<div class="grid cols-3" style="margin-top:14px">' + rest.map(function (p, i) { return cardHTML(p, i + 1, { total: items.length }); }).join('') + '</div>';
      }
      return html;
    }

    var verticals = items.filter(function (p) { return p.orientation === 'vertical'; }).length;
    var cols, opts = { total: items.length };
    if (verticals > items.length / 2) cols = 'cols-4';
    else if (sec.id === 'podcast' || sec.id === 'alianza') { cols = 'cols-2'; opts.wide = true; }
    else cols = 'cols-3';
    var cards = items.map(function (p, i) {
      var o = { total: items.length, wide: opts.wide };
      if (cols === 'cols-3' && i === 0 && p.featured && items.length >= 3 && p.orientation !== 'vertical') o.feature = true;
      return cardHTML(p, i, o);
    }).join('');
    return head + '<div class="grid ' + cols + '">' + cards + '</div>';
  }

  function render() {
    var projects = catalog.projects || [];
    byId = {};
    projects.forEach(function (p) { byId[p.id] = p; });
    var site = catalog.site || {};
    document.documentElement.lang = lang;

    // textos estáticos
    $$('[data-i18n]').forEach(function (el) {
      var v = I18N[lang][el.getAttribute('data-i18n')];
      if (typeof v === 'string') el.innerHTML = v;
    });
    $('#langToggle').textContent = lang === 'es' ? 'ES / EN' : 'EN / ES';

    // contacto
    $$('[data-wa]').forEach(function (a) { a.href = waLink(); });
    $$('[data-ig]').forEach(function (a) { if (site.instagram_url) a.href = site.instagram_url; else a.hidden = true; });
    $$('[data-mail]').forEach(function (a) { if (site.email) { a.href = 'mailto:' + site.email; a.hidden = false; } });
    $('#footLocation').textContent = 'Gabriel Barrios Films · ' + (site['location_' + lang] || site.location_es || 'Buenos Aires, Argentina');

    // clientes
    var trust = $('#trustRow');
    $$('.client', trust).forEach(function (n) { n.remove(); });
    (site.clients && site.clients.length ? site.clients : ['MOVISTAR', 'GLORIA', 'ALIANZA LIMA TV', 'ENFOCADOS']).forEach(function (c) {
      var s = document.createElement('span'); s.className = 'client'; s.textContent = c; trust.appendChild(s);
    });

    // secciones de trabajos
    var holder = $('#workSections');
    var catLinks = [];
    var num = 1;
    var html = '';
    SECTIONS.forEach(function (sec) {
      var items = projects.filter(function (p) { return sec.cats.indexOf(p.category) >= 0; });
      if (!items.length) return;
      html += '<section class="work" id="' + sec.id + '" data-section><div class="wrap">' + sectionHTML(sec, items, num) + '</div></section>';
      catLinks.push({ id: sec.id, label: t('sec')[sec.id][0], n: items.length });
      num++;
    });
    holder.innerHTML = html;
    $('#catLinks').innerHTML = catLinks.map(function (c) {
      return '<a href="#' + c.id + '">' + esc(c.label) + '<sup>' + c.n + '</sup></a>';
    }).join('');
    $('.cat-nav').hidden = !catLinks.length;

    // numeración de secciones fijas
    var fixed = { about: t('about_eyebrow'), services: lang === 'es' ? 'Servicios' : 'Services', contact: lang === 'es' ? 'Contacto' : 'Start a project' };
    ['about', 'services', 'contact'].forEach(function (k) {
      var el = $('[data-num="' + k + '"]');
      if (el) el.innerHTML = pad(num++) + ' / ' + esc(fixed[k]);
    });

    // hero: showreel + destacados
    var reel = projects.filter(function (p) { return p.category === 'showreel'; })[0];
    var hero = $('#heroShowreel');
    var heroImg = projects.length ? (reel || projects[0]) : null;
    $$('.bg', hero).forEach(function (n) { n.remove(); });
    if (heroImg) {
      var bg = document.createElement('img');
      bg.className = 'bg'; bg.alt = ''; bg.src = heroImg.cover.src; bg.decoding = 'async';
      hero.insertBefore(bg, hero.firstChild);
    }
    var heroTarget = reel || projects.filter(function (p) { return p.kind === 'video'; })[0];
    hero.disabled = !heroTarget;
    hero.setAttribute('data-open', heroTarget ? heroTarget.id : '');
    hero.setAttribute('aria-label', t('watch_reel'));

    var minis = projects.filter(function (p) { return p.featured && p.category !== 'showreel'; });
    if (minis.length < 3) {
      var seen = {};
      minis.forEach(function (p) { seen[p.category] = 1; });
      projects.forEach(function (p) {
        if (minis.length < 3 && p.category !== 'showreel' && !seen[p.category] && minis.indexOf(p) < 0) { minis.push(p); seen[p.category] = 1; }
      });
    }
    $('#heroMinis').innerHTML = minis.slice(0, 3).map(function (p) {
      return '<button class="mini" type="button" data-open="' + p.id + '"><img loading="lazy" decoding="async" src="' + esc(p.cover.sm) + '" alt=""><span>' + esc(catName(p.category)) + '</span></button>';
    }).join('');

    // sobre mí
    var about = site['about_' + lang] || site.about_es || '';
    $('#aboutText').innerHTML = about.split(/\n\s*\n/).map(function (para) { return '<p>' + esc(para) + '</p>'; }).join('');
    var am = $('#aboutMedia');
    $$('img', am).forEach(function (n) { n.remove(); });
    var aimg = site.about_image ? site.about_image.src : (reel ? reel.cover.src : '');
    if (aimg) { var im = document.createElement('img'); im.src = aimg; im.alt = 'Gabriel Barrios'; im.loading = 'lazy'; am.insertBefore(im, am.firstChild); }
    var cats = {};
    projects.forEach(function (p) { cats[p.category] = 1; });
    $('#aboutStats').innerHTML = projects.length ? [
      [projects.length, t('stat_projects')], [Object.keys(cats).length, t('stat_cats')], [(site.clients || []).length || '—', t('stat_clients')]
    ].map(function (s) { return '<div><dt>' + s[0] + '</dt><dd>' + esc(s[1]) + '</dd></div>'; }).join('') : '';

    // servicios
    $('#serviceGrid').innerHTML = t('services').map(function (s, i) {
      return '<article class="service reveal" style="--i:' + i + '"><div class="number">' + pad(i + 1) + ' / ' + esc(s[0]) + '</div><h3>' + esc(s[1]) + '</h3><p>' + esc(s[2]) + '</p></article>';
    }).join('');

    // menú móvil
    var menuItems = catLinks.map(function (c) { return [c.id, c.label, c.n]; })
      .concat([['sobre-mi', t('nav_about'), ''], ['servicios', t('nav_services'), ''], ['contacto', t('nav_contact'), '']]);
    $('#mobileMenuList').innerHTML = menuItems.map(function (m, i) {
      return '<li><a href="#' + m[0] + '"><span>' + esc(m[1]) + '</span><small>' + pad(i + 1) + '</small></a></li>';
    }).join('');

    observeReveal();
    observeSections();
  }

  // ------------------------------------------------------------ animaciones
  var revealObs = null;
  function observeReveal() {
    var items = $$('.reveal:not(.is-visible)');
    if (!('IntersectionObserver' in window)) { items.forEach(function (el) { el.classList.add('is-visible'); }); return; }
    if (!revealObs) {
      revealObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-visible'); revealObs.unobserve(e.target); } });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    }
    items.forEach(function (el) { revealObs.observe(el); });
  }

  var secObs = null;
  function observeSections() {
    if (!('IntersectionObserver' in window)) return;
    if (secObs) secObs.disconnect();
    secObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        $$('#catLinks a').forEach(function (a) {
          var on = a.getAttribute('href') === '#' + e.target.id;
          a.classList.toggle('active', on);
          if (on && a.scrollIntoView && window.innerWidth < 900) {
            var box = a.parentNode;
            box.scrollTo({ left: a.offsetLeft - 20, behavior: 'smooth' });
          }
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('[data-section]').forEach(function (s) { secObs.observe(s); });
  }

  // ------------------------------------------------------------ reproductor
  var modal = $('#videoModal'), player = $('#player'), lastFocus = null, prevHash = '';
  function openProject(id, fromHash) {
    var p = byId[id];
    if (!p) return;
    lastFocus = document.activeElement;
    if (!fromHash) { prevHash = location.hash; setHash('#p/' + p.slug); }
    if (p.kind === 'gallery') return openGallery(p);
    var v = p.video || {};
    player.innerHTML = '';
    if (v.provider === 'file') {
      var video = document.createElement('video');
      video.src = v.src; video.controls = true; video.autoplay = true; video.playsInline = true;
      video.setAttribute('playsinline', ''); video.poster = p.cover.src; video.preload = 'auto';
      player.appendChild(video);
    } else if (v.embed) {
      var f = document.createElement('iframe');
      f.src = v.embed; f.allow = 'autoplay; fullscreen; encrypted-media; picture-in-picture';
      f.allowFullscreen = true; f.title = L(p.title); f.referrerPolicy = 'strict-origin-when-cross-origin';
      player.appendChild(f);
    }
    modal.classList.toggle('is-vertical', p.orientation === 'vertical');
    $('#modalMeta').textContent = [catName(p.category), p.client, p.year].filter(Boolean).join(' · ');
    $('#modalTitle').textContent = L(p.title);
    $('#modalDesc').textContent = L(p.description);
    var ext = $('#modalExt');
    if (v.url && v.provider !== 'file') { ext.href = v.url; ext.hidden = false; } else ext.hidden = true;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    $('.video-close', modal).focus();
  }
  function closeVideo() {
    if (!modal.classList.contains('open')) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    player.innerHTML = '';
    document.body.style.overflow = '';
    restoreHash();
    if (lastFocus) lastFocus.focus();
  }
  function setHash(h) { try { history.replaceState(null, '', h); } catch (e) { /* file:// */ } }
  function restoreHash() { setHash(prevHash && prevHash.indexOf('#p/') !== 0 ? prevHash : location.pathname + location.search); }

  // ------------------------------------------------------------ galería
  var lb = $('#lightbox'), lbImg = $('#lbImg'), lbIndex = 0, lbPhotos = [];
  function openGallery(p) {
    lbPhotos = p.photos || [];
    if (!lbPhotos.length) return;
    $('#lbTitle').textContent = L(p.title);
    $('#lbStrip').innerHTML = lbPhotos.map(function (ph, i) {
      return '<button type="button" data-lb-go="' + i + '" aria-label="' + (i + 1) + '"><img loading="lazy" src="' + esc(ph.sm) + '" alt=""></button>';
    }).join('');
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    showPhoto(0);
    $('.lb-close').focus();
  }
  function showPhoto(i) {
    lbIndex = (i + lbPhotos.length) % lbPhotos.length;
    var ph = lbPhotos[lbIndex];
    lbImg.classList.add('loading');
    var pre = new Image();
    pre.onload = function () { lbImg.src = ph.src; lbImg.classList.remove('loading'); };
    pre.src = ph.src;
    lbImg.alt = $('#lbTitle').textContent + ' — ' + (lbIndex + 1);
    $('#lbCount').textContent = pad(lbIndex + 1) + ' / ' + pad(lbPhotos.length);
    $$('#lbStrip button').forEach(function (b, k) {
      b.classList.toggle('on', k === lbIndex);
      if (k === lbIndex) b.scrollIntoView({ block: 'nearest', inline: 'center' });
    });
    var next = lbPhotos[(lbIndex + 1) % lbPhotos.length];
    if (next) (new Image()).src = next.src;
  }
  function closeGallery() {
    if (!lb.classList.contains('open')) return;
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    restoreHash();
    if (lastFocus) lastFocus.focus();
  }

  // ------------------------------------------------------------ eventos
  document.addEventListener('click', function (e) {
    var open = e.target.closest('[data-open]');
    if (open && open.getAttribute('data-open')) { e.preventDefault(); openProject(+open.getAttribute('data-open')); return; }
    if (e.target.closest('[data-close]')) { closeVideo(); return; }
    if (e.target.closest('[data-lb-close]')) { closeGallery(); return; }
    var nav = e.target.closest('[data-lb]');
    if (nav) { showPhoto(lbIndex + (+nav.getAttribute('data-lb'))); return; }
    var go = e.target.closest('[data-lb-go]');
    if (go) { showPhoto(+go.getAttribute('data-lb-go')); return; }
    if (e.target.closest('#mobileMenu a')) toggleMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeVideo(); closeGallery(); toggleMenu(false); }
    if (lb.classList.contains('open')) {
      if (e.key === 'ArrowRight') showPhoto(lbIndex + 1);
      if (e.key === 'ArrowLeft') showPhoto(lbIndex - 1);
    }
  });
  var touchX = null;
  lb.addEventListener('touchstart', function (e) { touchX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 45) showPhoto(lbIndex + (dx < 0 ? 1 : -1));
    touchX = null;
  });

  function toggleMenu(force) {
    var btn = $('#menuToggle'), menu = $('#mobileMenu');
    var open = typeof force === 'boolean' ? force : btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menu.hidden = !open;
    document.body.style.overflow = open ? 'hidden' : '';
  }
  $('#menuToggle').addEventListener('click', function () { toggleMenu(); });

  $('#langToggle').addEventListener('click', function () {
    lang = lang === 'es' ? 'en' : 'es';
    store('gbf-lang', lang);
    render();
    $$('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  });

  var wa = $('.wa-float');
  window.addEventListener('scroll', function () {
    wa.classList.toggle('show', window.scrollY > window.innerHeight * 0.8);
  }, { passive: true });

  function openFromHash() {
    var m = /^#p\/(\d+)/.exec(location.hash);
    if (m && byId[+m[1]]) openProject(+m[1], true);
  }

  // ------------------------------------------------------------ inicio
  $('#year').textContent = new Date().getFullYear();
  var qs = /[?&]lang=(es|en)/.exec(location.search);
  lang = qs ? qs[1] : (store('gbf-lang') === 'en' ? 'en' : 'es');
  loadCatalog().then(function (data) {
    if (data) catalog = data;
    render();
    openFromHash();
  });
})();
