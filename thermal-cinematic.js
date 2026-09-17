/* Isolated, file-openable thermal journey. No router or energy-story ownership. */
window.thermalCinematic = (() => {
  const section = document.querySelector('#plant-schematic-section')
  if (!section) return { update: () => {} }
  const frame = section.querySelector('.cine-sequence')
  const chapters = [...section.querySelectorAll('.cine-chapter')]
  const copy = [
    [
      'Coal Handling',
      'कोयला प्रबंधन',
      'From the wagon tippler to the stockyard. Conveyors carry prepared coal to the boiler bunkers, beginning the journey from fuel to electricity.',
      'वैगन टिपलर से स्टॉकयार्ड तक। कन्वेयर तैयार कोयले को बॉयलर बंकरों तक पहुँचाते हैं — ईंधन से बिजली बनने की यात्रा का आरंभ।',
      'FEED ~180 T/HR',
      'आपूर्ति ~180 टन/घंटा',
      'SOURCE: LALPANIA YARD',
      'स्रोत: ललपनिया यार्ड',
    ],
    [
      'Milling & Combustion',
      'पिसाई एवं दहन',
      'Pulverizers turn coal into fine dust. Inside the furnace, a fireball at approximately 1400°C releases the heat that drives the entire cycle.',
      'पल्वराइज़र कोयले को महीन चूर्ण बनाते हैं। भट्टी में लगभग 1400°C का अग्निकेंद्र पूरे चक्र को चलाने वाली ऊष्मा उत्पन्न करता है।',
      'FLAME CORE: 1400°C',
      'अग्निकेंद्र: 1400°C',
      'MILLS: 5 OPERATIONAL',
      'मिलें: 5 परिचालन में',
    ],
    [
      'Steam Generation',
      'वाष्प उत्पादन',
      'Water absorbs the furnace heat. The steam drum and superheater deliver high-pressure steam at approximately 540°C to the turbine.',
      'पानी भट्टी की ऊष्मा अवशोषित करता है। स्टीम ड्रम और सुपरहीटर लगभग 540°C पर उच्च-दबाव वाष्प टरबाइन तक पहुँचाते हैं।',
      'STEAM: 540°C @ HP',
      'वाष्प: 540°C उच्च दबाव पर',
      'PRESSURE: 170 KG/CM²',
      'दबाव: 170 किग्रा/सेमी²',
    ],
    [
      'Steam Turbine',
      'वाष्प टरबाइन',
      'Steam expands through high-, intermediate- and low-pressure stages. Thermal energy becomes the motion of a shaft turning at 3000 RPM.',
      'वाष्प उच्च, मध्यवर्ती और निम्न-दबाव चरणों में फैलती है। तापीय ऊर्जा 3000 आरपीएम पर घूमते शाफ्ट की गति में बदलती है।',
      'ROTOR: 3000 RPM',
      'रोटर: 3000 आरपीएम',
      'TURBINES: HP / IP / LP',
      'टरबाइन: एचपी / आईपी / एलपी',
    ],
    [
      'Generator',
      'जनरेटर',
      'The turbine shaft turns the generator rotor inside its stator. Electromagnetic induction converts that motion into 210 MW of electrical output per unit.',
      'टरबाइन शाफ्ट स्टेटर के भीतर जनरेटर रोटर को घुमाता है। विद्युतचुंबकीय प्रेरण उस गति को प्रति इकाई 210 मेगावाट विद्युत उत्पादन में बदलता है।',
      'OUTPUT: 210 MW',
      'उत्पादन: 210 मेगावाट',
      'VOLTAGE: 15.75 KV → 220 KV',
      'वोल्टेज: 15.75 केवी → 220 केवी',
    ],
    [
      'Condensate & Cooling',
      'संघनन एवं शीतलन',
      'Exhaust steam returns to water in the condenser. The circulating-water system, supported by Tenughat reservoir, carries away heat so the cycle can begin again.',
      'कंडेनसर में निकास वाष्प फिर पानी बनती है। तेनुघाट जलाशय से समर्थित परिसंचारी जल प्रणाली ऊष्मा हटाती है, ताकि चक्र फिर शुरू हो सके।',
      'CYCLE: CLOSED LOOP',
      'चक्र: बंद लूप',
      'COOLING: TENUGHAT RESERVOIR',
      'शीतलन: तेनुघाट जलाशय',
    ],
    [
      'Emissions & Stack',
      'उत्सर्जन एवं चिमनी',
      'Electrostatic precipitators capture particulate fly ash from the flue gas. The chimney disperses the remaining gases, with emissions monitoring alongside the process.',
      'इलेक्ट्रोस्टैटिक प्रेसिपिटेटर फ्लू गैस से फ्लाई ऐश कण पकड़ते हैं। चिमनी शेष गैसों का प्रसार करती है और प्रक्रिया के साथ उत्सर्जन की निगरानी होती है।',
      'ESP: PARTICULATE CONTROL',
      'ईएसपी: कण नियंत्रण',
      'STACK HEIGHT: 220 M',
      'चिमनी की ऊँचाई: 220 मीटर',
    ],
    [
      'Switchyard & Grid',
      'स्विचयार्ड एवं ग्रिड',
      'Step-up transformers raise the voltage to 220 kV. The switchyard connects generation to Jharkhand’s grid and JUSNL offtake — the final link from coal to community.',
      'स्टेप-अप ट्रांसफॉर्मर वोल्टेज को 220 केवी तक बढ़ाते हैं। स्विचयार्ड उत्पादन को झारखंड ग्रिड और जेयूएसएनएल विद्युत निकासी से जोड़ता है — कोयले से समुदाय तक की अंतिम कड़ी।',
      'EVACUATION: 220 KV',
      'विद्युत निकासी: 220 केवी',
      'GRID: JHARKHAND / JUSNL',
      'ग्रिड: झारखंड / जेयूएसएनएल',
    ],
  ]
  const colors = [
    '#f5cd79',
    '#e77442',
    '#74c9ef',
    '#75c6e6',
    '#65dfac',
    '#5ccecf',
    '#aebbd0',
    '#8feaaf',
  ]
  const escape = (s) =>
    String(s).replace(
      /[&<>"']/g,
      (c) =>
        ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;',
        })[c],
    )
  const bilingual = (tag, en, hi, attributes = '') =>
    `<${tag} data-en="${escape(en)}" data-hi="${escape(hi)}" ${attributes}>${escape(en)}</${tag}>`
  // Eight composed silhouettes also serve as independent static reduced-motion scenes.
  const silhouettes = [
    '<path d="M110 310 240 170 370 310ZM290 310 380 220 470 310"/><path d="m150 260 430-100 12 24-430 100Z"/><path d="M360 230v80m90-100v100m100-125v125"/><path d="M560 130h100v180H560Zm110 30h75v150h-75"/>',
    '<path d="M330 100h230v220H330Zm-90 140h70v80h-70m340-140h110v140H580"/><path d="M380 280q-20-45 25-100-3 45 22 55 2-65 39-110 60 104 27 155Z" fill="currentColor"/><path d="M320 90h250M350 65v255m190-255v255M335 140h220m-220 50h220"/>',
    '<rect x="270" y="95" width="330" height="70" rx="35"/><path d="M310 165v125h40V165m45 0v125h40V165m45 0v125h40V165m45 0v125h40V165M600 130h85v145h50"/><path d="M240 315h410"/>',
    '<path d="M240 190h370v90H240Z"/><ellipse cx="285" cy="235" rx="45" ry="80"/><ellipse cx="390" cy="235" rx="55" ry="95"/><ellipse cx="520" cy="235" rx="65" ry="110"/><path d="M180 235h500M310 145v180m110-185v190m125-195v200"/>',
    '<rect x="280" y="145" width="310" height="160" rx="65"/><ellipse cx="335" cy="225" rx="55" ry="80"/><ellipse cx="335" cy="225" rx="30" ry="48"/><path d="M210 225h150m235 0h100M400 150v150m35-150v150m35-150v150m35-150v150m35-150v150"/>',
    '<path d="M270 315q65-115 25-225h140q-40 110 25 225Zm245 0q55-90 20-175h115q-35 85 20 175Z"/><ellipse cx="365" cy="88" rx="70" ry="14"/><path d="M330 70q-45-30 5-55m40 55q40-30 0-60m35 60q40-25 25-45M220 345q90-30 180 0t190 0 155 0"/>',
    '<path d="m530 315 15-265h48l17 265ZM225 215h245v100H225Zm15-25h215v25H240Z"/><path d="M265 215v100m40-100v100m40-100v100m40-100v100m40-100v100M470 250h65M550 90h46m-47 15h49"/>',
    '<path d="m240 320 55-240 55 240m-95-70h80m-65-80h50M230 140h130m-145 35h160M490 320l55-240 55 240m-95-70h80m-65-80h50M480 140h130m-145 35h160"/><path d="M230 140q125 140 250 0m-265 35q125 140 250 0m-105-35q125 140 250 0m-235 35q125 140 250 0"/><path d="M630 270h100v50H630Zm15-30v30m25-30v30m25-30v30"/>',
  ]
  const svg = (index) =>
    `<svg class="cine-fallback-scene" viewBox="0 0 900 420" aria-hidden="true" style="color:${colors[index]}"><path d="m0 360 450-100 450 100-450 60Z" fill="#13242b"/><g fill="#172932" stroke="currentColor" stroke-width="2" stroke-linejoin="round">${silhouettes[index]}</g><path d="M80 355h740" stroke="currentColor" opacity=".3"/></svg>`
  const visual = frame.querySelector('.cine-visual')
  visual.insertAdjacentHTML(
    'beforeend',
    `<div class="cine-fallback">${copy.map((_, i) => svg(i)).join('')}</div>`,
  )
  chapters.forEach((chapter, i) => {
    const detail = chapter.querySelector('p')
    const oldEn = detail.dataset.en
    const oldHi = detail.dataset.hi
    chapter.id = `cine-chapter-${i}`
    chapter.style.setProperty('--cine-accent', colors[i])
    const [en, hi, bodyEn, bodyHi, m1, m1Hi, m2, m2Hi] = copy[i]
    chapter.innerHTML = `${svg(i)}${bilingual('span', `[00-${i + 1}]`, `[00-${i + 1}]`, 'class="cine-index"')}${bilingual('h3', en, hi)}${bilingual('p', bodyEn, bodyHi, 'class="cine-intro"')}<button type="button" class="cine-info" aria-expanded="false" aria-controls="cine-detail-${i}">${bilingual('span', 'Show Info', 'जानकारी दिखाएँ')}<span aria-hidden="true">＋</span></button><div id="cine-detail-${i}" class="cine-detail" hidden>${bilingual('p', i === 2 ? 'The drum separates water and steam; superheater tube banks raise the steam temperature before turbine admission.' : oldEn, i === 2 ? 'ड्रम पानी और वाष्प को अलग करता है; सुपरहीटर की नलियाँ टरबाइन में प्रवेश से पहले वाष्प का तापमान बढ़ाती हैं।' : oldHi)}${bilingual('span', m1, m1Hi)}${bilingual('span', m2, m2Hi)}</div>`
  })
  frame.insertAdjacentHTML(
    'beforeend',
    `<div class="cine-topline">${bilingual('span', 'TENUGHAT / COAL → GRID', 'तेनुघाट / कोयला → ग्रिड')}${bilingual('span', 'A CONTINUOUS ENERGY CYCLE', 'एक सतत ऊर्जा चक्र')}</div><nav class="cine-rail" aria-label="Thermal process chapters">${copy.map((c, i) => `<button type="button" data-cine-go="${i}">${bilingual('span', String(i + 1).padStart(2, '0'), String(i + 1).padStart(2, '0'), 'class="cine-rail-number"')}${bilingual('span', c[0], c[1])}<i aria-hidden="true"></i></button>`).join('')}</nav><aside class="cine-readout" aria-live="off"><span id="schematic-stage-tag"></span><strong id="schematic-stage-title"></strong><span id="schematic-metric-1"></span><span id="schematic-metric-2"></span></aside><div class="cine-bottom">${bilingual('span', 'Scroll to follow the energy ↓', 'ऊर्जा की यात्रा देखने के लिए स्क्रॉल करें ↓', 'class="cine-hint"')}<span class="cine-count" data-en="01 / 08" data-hi="01 / 08">01 / 08</span></div><div class="cine-progress" aria-hidden="true"><i></i></div>`,
  )
  const style = document.createElement('style')
  style.textContent = `
    #plant-schematic-section .cine-sequence{--cine-accent:#f5cd79;position:relative;background:#0e141b;color:#f1f3ed;isolation:isolate}
    .cine-visual{position:sticky;top:0;height:100svh;overflow:hidden;pointer-events:none;margin-bottom:-100svh;z-index:-1}
    .cine-visual canvas{width:100%;height:100%;display:block}.cine-sequence:not(.cine-webgl) .cine-canvas{visibility:hidden}
    .cine-visual:after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(8,15,21,.95),rgba(8,15,21,.72) 30%,transparent 75%),linear-gradient(0deg,#0e141b 0%,transparent 24%,transparent 80%,#0e141b 100%)}
    .cine-fallback{position:absolute;inset:0;display:grid;place-items:center;padding-left:25%}.cine-fallback-scene{width:100%;height:auto;filter:drop-shadow(0 0 26px color-mix(in srgb,currentColor 18%,transparent))}
    .cine-fallback>.cine-fallback-scene{grid-area:1/1;opacity:0;transition:opacity .7s}.cine-fallback>.cine-fallback-scene.is-active{opacity:1}.cine-webgl .cine-fallback{display:none}
    .cine-chapters{position:relative;z-index:2}.cine-chapter{min-height:90svh;max-width:620px;padding:18vh 36px 12vh;margin-left:19%;box-sizing:border-box}.cine-chapter>.cine-fallback-scene{display:none}
    .cine-index{font:12px/1.5 monospace;letter-spacing:.22em;color:var(--cine-accent);display:block;margin-bottom:22px}.cine-chapter h3{font-size:clamp(38px,4.8vw,76px);line-height:1.04;letter-spacing:-.055em;font-weight:500;margin:0 0 26px!important;color:#f1f3ed!important;max-width:650px}.cine-intro{font-size:clamp(15px,1.16vw,18px);line-height:1.7;color:#c0ccd0;max-width:450px;margin:0 0 22px}
    .cine-info{display:flex;gap:38px;align-items:center;border:0;border-bottom:1px solid #687778;background:transparent;color:#edf2eb;padding:10px 0;font:11px/1.5 monospace;letter-spacing:.08em;cursor:pointer}.cine-info:focus-visible,.cine-rail button:focus-visible{outline:2px solid var(--cine-accent);outline-offset:5px}.cine-info:hover{color:var(--cine-accent)}.cine-detail{border-left:1px solid var(--cine-accent);padding:2px 18px;margin-top:18px;background:#0e141be8;max-width:460px}.cine-detail p{font-size:13px;line-height:1.6;color:#c3ced0;margin:0 0 12px}.cine-detail>span{display:block;font:10px/1.8 monospace;color:var(--cine-accent)}
    .cine-topline{position:absolute;top:32px;left:4%;right:4%;display:flex;justify-content:space-between;color:#91a1a8;font:10px/1.5 monospace;letter-spacing:.18em;z-index:3;pointer-events:none}
    .cine-rail{position:absolute;left:4%;top:32%;width:145px;z-index:4}.cine-rail button{position:relative;display:flex;gap:10px;align-items:center;width:100%;min-height:42px;text-align:left;border:0;background:none;color:#819197;padding:9px 0;font:10px/1.4 monospace;cursor:pointer}.cine-rail-number{opacity:.5}.cine-rail button.is-active{color:var(--cine-accent)}.cine-rail i{position:absolute;bottom:2px;left:0;height:1px;background:var(--cine-accent);width:100%;transform:scaleX(0);transform-origin:left}.cine-rail button.is-active i{transform:scaleX(var(--cine-chapter-progress,0))}
    .cine-readout{position:absolute;right:4%;bottom:12%;z-index:3;width:240px;border-top:1px solid var(--cine-accent);padding-top:18px;display:grid;gap:8px;font:10px/1.5 monospace;letter-spacing:.06em;color:#8caaac;text-shadow:0 2px 12px #000}.cine-readout strong{font:18px/1.3 inherit;color:#e1ede7;margin:4px 0 9px;letter-spacing:-.02em}.cine-readout>span:first-child{color:var(--cine-accent)}.cine-readout.is-changing{animation:cine-readout-in .5s ease both}@keyframes cine-readout-in{from{opacity:.15;transform:translateY(8px)}to{opacity:1;transform:none}}
    .cine-bottom{position:absolute;bottom:35px;left:4%;right:4%;display:flex;justify-content:center;z-index:3;color:#a9b8b9;font:10px/1.5 monospace;letter-spacing:.12em;pointer-events:none}.cine-count{position:absolute;right:0}.cine-hint{transition:opacity .5s}.cine-interacted .cine-hint{opacity:0}.cine-progress{position:absolute;bottom:0;height:2px;left:0;right:0;background:#ffffff12;z-index:4}.cine-progress i{display:block;height:100%;background:var(--cine-accent);transform:scaleX(var(--cine-progress,0));transform-origin:left}
    .cine-pinned{height:100svh!important;min-height:600px}.cine-pinned .cine-visual{position:absolute;inset:0;margin:0;height:100%}.cine-pinned .cine-chapters{height:100%}.cine-pinned .cine-chapter{position:absolute;inset:0;max-width:680px;min-height:0;margin:0 0 0 19%;padding:0 35px;display:flex;flex-direction:column;justify-content:center;opacity:0;visibility:hidden;pointer-events:none}.cine-pinned .cine-chapter.is-active{visibility:visible;pointer-events:auto;opacity:var(--cine-text-opacity,1);transform:translateY(var(--cine-text-y,0px))}.cine-pinned .cine-detail{max-height:25vh;overflow:auto;flex-shrink:1}.cine-pinned .cine-index{margin-top:20px}
    .cine-stacked .cine-rail,.cine-stacked .cine-readout,.cine-stacked .cine-topline,.cine-stacked .cine-bottom,.cine-stacked .cine-progress{display:none}.cine-stacked .cine-chapter{opacity:1!important;visibility:visible!important;transform:none!important}
    @media(max-width:767px){.cine-visual{height:60svh;top:65px;margin-bottom:-60svh}.cine-visual:after{background:linear-gradient(0deg,#0e141b 0%,#0e141b88 28%,transparent 80%)}.cine-fallback{padding-left:0}.cine-chapter{margin:0;padding:54svh 24px 64px;min-height:105svh;max-width:none}.cine-chapter h3{font-size:42px;max-width:350px}.cine-intro{max-width:440px;background:#0e141bd9}.cine-detail{max-width:none}.cine-index{margin-bottom:16px}}
    .cine-info{align-self:flex-start}.cine-topline{top:150px}.cine-readout strong{font-family:inherit;font-size:18px;line-height:1.3;font-weight:500}.cine-readout{font-size:11px}
    @media(min-width:768px) and (max-width:1050px){.cine-rail{width:125px;left:3%}.cine-chapter h3{font-size:46px}.cine-pinned .cine-chapter{max-width:55%;margin-left:19%;padding:0 20px}.cine-readout{width:185px;font-size:9px;bottom:8%}.cine-topline{font-size:9px}}
    .cine-reduced .cine-visual{display:none}.cine-reduced .cine-chapter{padding:40px 24px 65px;margin:auto;min-height:0;max-width:900px}.cine-reduced .cine-chapter>.cine-fallback-scene{display:block;max-height:320px}.cine-reduced *{animation:none!important;transition:none!important;scroll-behavior:auto!important}
    @media(prefers-reduced-motion:reduce){.cine-readout{animation:none!important}.cine-fallback-scene{transition:none!important}}
  `
  section.append(style)
  const canvas = frame.querySelector('canvas')
  const rail = [...frame.querySelectorAll('[data-cine-go]')]
  const readout = frame.querySelector('.cine-readout')
  let world = null
  let trigger = null
  let media = null
  let active = -1
  let progress = 0
  let lang = document.documentElement.lang === 'hi' ? 'hi' : 'en'
  let visible = false
  let inHome = !document.querySelector('#home-view').hidden
  let reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const setText = (element, en, hi) => {
    element.dataset.en = en
    element.dataset.hi = hi
    element.textContent = lang === 'hi' ? hi : en
  }
  const refreshText = () => {
    const i = Math.max(0, active)
    const c = copy[i]
    const stage = String(i + 1).padStart(2, '0')
    setText(readout.children[0], `STAGE ${stage} / 08`, `चरण ${stage} / 08`)
    setText(readout.children[1], c[0], c[1])
    setText(readout.children[2], c[4], c[5])
    setText(readout.children[3], c[6], c[7])
    setText(
      frame.querySelector('.cine-count'),
      `${stage} / 08`,
      `${stage} / 08`,
    )
    frame
      .querySelector('.cine-rail')
      .setAttribute(
        'aria-label',
        lang === 'hi'
          ? 'ताप विद्युत प्रक्रिया के चरण'
          : 'Thermal process chapters',
      )
  }
  const render = (value, instant = false) => {
    progress = Math.max(0, Math.min(1, value))
    if (progress > 0) frame.classList.add('cine-interacted')
    const scaled = Math.min(7.999999, progress * 8)
    const chapter = Math.floor(scaled)
    const intra = progress === 1 ? 1 : scaled - chapter
    frame.style.setProperty('--cine-progress', progress)
    frame.style.setProperty('--cine-chapter-progress', intra)
    frame.style.setProperty(
      '--cine-text-opacity',
      0.15 + 0.85 * Math.min(1, intra / 0.2),
    )
    frame.style.setProperty(
      '--cine-text-y',
      `${(1 - Math.min(1, intra / 0.2)) * 22}px`,
    )
    if (chapter !== active) {
      active = chapter
      frame.dataset.chapter = String(chapter)
      frame.style.setProperty('--cine-accent', colors[chapter])
      chapters.forEach((el, i) => {
        el.classList.toggle('is-active', i === chapter)
        el.inert = Boolean(trigger) && i !== chapter
        if (trigger) el.setAttribute('aria-hidden', String(i !== chapter))
        else el.removeAttribute('aria-hidden')
      })
      rail.forEach((el, i) => {
        el.classList.toggle('is-active', i === chapter)
        if (i === chapter) el.setAttribute('aria-current', 'step')
        else el.removeAttribute('aria-current')
      })
      frame
        .querySelectorAll('.cine-fallback>.cine-fallback-scene')
        .forEach((el, i) => el.classList.toggle('is-active', i === chapter))
      readout.classList.remove('is-changing')
      void readout.offsetWidth
      readout.classList.add('is-changing')
      refreshText()
    }
    world?.setProgress(progress, instant)
  }
  const syncActivity = () =>
    world?.setActive(visible && inHome && !document.hidden && !reduced)
  const stackedScroll = () => {
    if (trigger || !inHome || !visible) return
    const line = innerHeight * 0.55
    const nearest = chapters.reduce(
      (best, el, i) => (el.getBoundingClientRect().top <= line ? i : best),
      0,
    )
    const box = chapters[nearest].getBoundingClientRect()
    render(
      (nearest +
        Math.max(
          0,
          Math.min(0.999, (line - box.top) / Math.max(1, box.height)),
        )) /
        8,
      reduced,
    )
  }
  const build = () => {
    reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    frame.classList.toggle('cine-reduced', reduced)
    frame.classList.add('cine-stacked')
    if (!reduced && inHome && !world) {
      world = window.createThermalWorld?.(canvas) || null
      frame.classList.toggle('cine-webgl', Boolean(world))
    }
    if (window.gsap && window.ScrollTrigger && inHome) {
      window.gsap.registerPlugin(window.ScrollTrigger)
      media = window.gsap.matchMedia()
      media.add(
        '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
        () => {
          frame.classList.remove('cine-stacked')
          frame.classList.add('cine-pinned')
          trigger = window.ScrollTrigger.create({
            id: 'tvnl-thermal-cinematic',
            trigger: frame,
            pin: frame,
            start: 'top top',
            end: () => `+=${innerHeight * 8}`,
            scrub: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => render(self.progress),
            onToggle: (self) => {
              visible = self.isActive
              syncActivity()
            },
            onRefresh: () => world?.resize(),
          })
          active = -1
          render(trigger.progress, true)
          return () => {
            trigger = null
            frame.classList.remove('cine-pinned')
            frame.classList.add('cine-stacked')
            chapters.forEach((el) => {
              el.inert = false
              el.removeAttribute('aria-hidden')
            })
            active = -1
            stackedScroll()
            world?.resize()
          }
        },
      )
    }
    render(progress, true)
    syncActivity()
  }
  const teardown = () => {
    media?.revert()
    media = null
    trigger = null
    world?.dispose()
    world = null
    frame.classList.remove('cine-webgl')
  }
  const update = (nextLanguage = lang, home = inHome) => {
    const languageChanged = nextLanguage !== lang
    const retainedProgress = progress
    lang = nextLanguage
    if (inHome !== home) {
      inHome = home
      teardown()
      if (inHome) build()
    }
    refreshText()
    stackedScroll()
    syncActivity()
    if (languageChanged && trigger && home)
      requestAnimationFrame(() => {
        if (!trigger) return
        trigger.refresh()
        window.scrollTo({
          top: trigger.start + retainedProgress * (trigger.end - trigger.start),
          behavior: 'instant',
        })
        render(retainedProgress, true)
      })
  }
  const interact = () => frame.classList.add('cine-interacted')
  section.addEventListener('wheel', interact, { passive: true })
  section.addEventListener('touchstart', interact, { passive: true })
  section.addEventListener('keydown', interact)
  frame.addEventListener('click', (event) => {
    const info = event.target.closest('.cine-info')
    if (info) {
      const open = info.getAttribute('aria-expanded') !== 'true'
      info.setAttribute('aria-expanded', String(open))
      document.getElementById(info.getAttribute('aria-controls')).hidden = !open
      setText(
        info.firstElementChild,
        open ? 'Hide Info' : 'Show Info',
        open ? 'जानकारी छिपाएँ' : 'जानकारी दिखाएँ',
      )
      info.lastElementChild.textContent = open ? '−' : '＋'
    }
    const target = event.target.closest('[data-cine-go]')
    if (target) {
      interact()
      const i = Number(target.dataset.cineGo)
      if (trigger)
        window.scrollTo({
          top: trigger.start + ((i + 0.22) / 8) * (trigger.end - trigger.start),
          behavior: 'instant',
        })
      else chapters[i].scrollIntoView({ behavior: 'instant', block: 'start' })
    }
  })
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    syncActivity()
  })
  observer.observe(frame)
  const homeObserver = new MutationObserver(() =>
    update(
      document.documentElement.lang,
      !document.querySelector('#home-view').hidden,
    ),
  )
  homeObserver.observe(document.querySelector('#home-view'), {
    attributes: true,
    attributeFilter: ['hidden'],
  })
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  const motionChange = () => {
    teardown()
    build()
    stackedScroll()
  }
  motionQuery.addEventListener('change', motionChange)
  document.addEventListener('visibilitychange', syncActivity)
  window.addEventListener(
    'resize',
    () => {
      world?.resize()
      stackedScroll()
    },
    { passive: true },
  )
  build()
  return {
    update,
    dispose: () => {
      teardown()
      observer.disconnect()
      homeObserver.disconnect()
      motionQuery.removeEventListener('change', motionChange)
      document.removeEventListener('visibilitychange', syncActivity)
    },
  }
})()
