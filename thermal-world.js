/* Decorative, dependency-free plant world. THREE r128 must already be loaded. */
window.createThermalWorld = (canvas) => {
  const T = window.THREE
  if (!T || !canvas || typeof canvas.getContext !== 'function') return null
  let renderer
  try {
    const options = {
      antialias: true,
      alpha: false,
      powerPreference: 'low-power',
    }
    const context =
      canvas.getContext('webgl2', options) ||
      canvas.getContext('webgl', options)
    if (!context) return null
    renderer = new T.WebGLRenderer({ canvas, context, ...options })
  } catch (_) {
    return null
  }

  canvas.dataset.disposed = 'false'
  const scene = new T.Scene()
  scene.background = new T.Color('#0e141b')
  scene.fog = new T.FogExp2('#0e141b', 0.019)
  const camera = new T.PerspectiveCamera(43, 1, 0.1, 220)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
  renderer.outputEncoding = T.sRGBEncoding
  renderer.toneMapping = T.ACESFilmicToneMapping
  renderer.toneMappingExposure = 0.9
  const geometries = new Set()
  const materials = new Set()
  const geometry = (value) => (geometries.add(value), value)
  const material = (color, glow = 0, opacity = 1) => {
    const value = new T.MeshStandardMaterial({
      color,
      roughness: 0.72,
      metalness: 0.45,
      flatShading: true,
      emissive: color,
      emissiveIntensity: glow,
      transparent: opacity < 1,
      opacity,
    })
    materials.add(value)
    return value
  }
  const steel = material('#263947')
  const dark = material('#131e27')
  const rim = material('#526b7c')
  const coal = material('#18212a')
  const heat = material('#f39c12', 2.5)
  const fire = material('#e74c3c', 1.8)
  const water = material('#3498db', 0.8)
  const grid = material('#2ecc71', 2)
  ;[heat, fire, water, grid].forEach((surface) => {
    surface.toneMapped = false
  })
  const mesh = (shape, surface, parent = scene, position = [0, 0, 0]) => {
    const object = new T.Mesh(geometry(shape), surface)
    object.position.set(...position)
    parent.add(object)
    return object
  }
  const box = (parent, position, size, surface = steel) =>
    mesh(new T.BoxGeometry(...size), surface, parent, position)
  const cylinder = (
    parent,
    position,
    top,
    bottom,
    height,
    surface = steel,
    sides = 12,
  ) =>
    mesh(
      new T.CylinderGeometry(top, bottom, height, sides),
      surface,
      parent,
      position,
    )
  const beam = (parent, start, end, radius = 0.055, surface = rim) => {
    const a = new T.Vector3(...start)
    const b = new T.Vector3(...end)
    const object = cylinder(
      parent,
      a.clone().add(b).multiplyScalar(0.5).toArray(),
      radius,
      radius,
      a.distanceTo(b),
      surface,
      6,
    )
    object.quaternion.setFromUnitVectors(
      new T.Vector3(0, 1, 0),
      b.sub(a).normalize(),
    )
    return object
  }
  const group = (x, z) => {
    const value = new T.Group()
    value.position.set(x, 0, z)
    scene.add(value)
    box(value, [0, -0.2, 0], [11, 0.4, 10], dark)
    return value
  }
  const frame = (parent, width, height, depth) => {
    ;[-1, 1].forEach((x) =>
      [-1, 1].forEach((z) => {
        beam(
          parent,
          [(x * width) / 2, 0, (z * depth) / 2],
          [(x * width) / 2, height, (z * depth) / 2],
          0.12,
        )
      }),
    )
    for (let y = 2; y <= height; y += 2) {
      ;[-1, 1].forEach((z) => {
        beam(
          parent,
          [-width / 2, y, (z * depth) / 2],
          [width / 2, y, (z * depth) / 2],
        )
        beam(
          parent,
          [-width / 2, y - 2, (z * depth) / 2],
          [width / 2, y, (z * depth) / 2],
        )
      })
    }
  }
  scene.add(new T.HemisphereLight('#a4c9ed', '#151913', 0.7))
  const moon = new T.DirectionalLight('#90b4d8', 1.1)
  moon.position.set(-20, 40, 25)
  scene.add(moon)
  const amber = new T.PointLight('#f39c12', 3, 35, 2)
  amber.position.set(-15, 5, 2)
  scene.add(amber)
  box(scene, [0, -0.6, 0], [155, 0.6, 85], material('#101b23'))
  // Concrete service spine and pipe rack physically connect the facilities.
  box(scene, [0, -0.24, 7], [111, 0.06, 2.8], steel)
  for (let x = -45; x < 51; x += 6) {
    beam(scene, [x, 0, -5], [x, 3.5, -5], 0.12)
    beam(scene, [x, 3.5, -5.8], [x, 3.5, -3.8], 0.1)
  }
  ;[-5.5, -4.7, -4].forEach((z) =>
    beam(scene, [-45, 3.6, z], [50, 3.6, z], 0.09, water),
  )

  const yard = group(-42, 0)
  for (let i = 0; i < 7; i++) {
    const heap = mesh(new T.DodecahedronGeometry(1.8, 0), coal, yard, [
      -3 + (i % 3) * 2.4,
      0.8,
      -1.8 + Math.floor(i / 3) * 2,
    ])
    heap.scale.set(1.3, 0.7 + (i % 2) * 0.3, 1)
  }
  beam(yard, [-5, 1, 3], [6, 5, 0], 0.38, dark)
  ;[-0.45, 0.45].forEach((z) => beam(yard, [-5, 1.2, 3 + z], [6, 5.2, z], 0.06))
  ;[0, 3, 6].forEach((x) =>
    beam(yard, [x, 0, 1.5], [x, 2.8 + x * 0.36, 1.5], 0.1),
  )
  const conveyor = Array.from({ length: 14 }, () =>
    box(yard, [0, 0, 0], [0.35, 0.12, 0.6], heat),
  )
  ;[-3, 0, 3].forEach((x) => {
    box(yard, [x, 0.75, -4], [2.6, 1.2, 1.3])
    ;[-0.8, 0.8].forEach(
      (dx) =>
        (cylinder(
          yard,
          [x + dx, 0.25, -3.3],
          0.25,
          0.25,
          0.15,
          dark,
        ).rotation.x = Math.PI / 2),
    )
  })

  const boiler = group(-27, -1)
  frame(boiler, 7, 12, 6)
  box(boiler, [0, 6.5, 0], [5.5, 9, 4.5])
  box(boiler, [0, 3.5, 2.3], [3.8, 4, 0.15], dark)
  const flames = Array.from({ length: 9 }, (_, i) => {
    const flame = mesh(
      new T.ConeGeometry(0.35, 2.5, 5),
      i % 2 ? heat : fire,
      boiler,
      [-1.5 + i * 0.37, 3.2, 2.5],
    )
    return flame
  })
  for (let y = 2; y <= 11; y += 1.5)
    box(boiler, [0, y, 2.8], [7, 0.1, 0.6], rim)
  ;[-2, 0, 2].forEach((x) => {
    cylinder(boiler, [x, 0.8, 3.7], 0.7, 0.9, 1.6)
    beam(boiler, [x, 1, 3.7], [x, 3, 1.5], 0.18, fire)
  })

  const steam = group(-12, -1)
  frame(steam, 7, 8, 5)
  const drum = cylinder(steam, [0, 7, 0], 1.2, 1.2, 7, rim)
  drum.rotation.z = Math.PI / 2
  for (let x = -3; x <= 3; x += 0.6) {
    beam(steam, [x, 6.5, 0.8], [x, 1, 0.8], 0.1, water)
    beam(steam, [x, 1, 0.8], [x, 1, -1.5], 0.1, water)
    beam(steam, [x, 1, -1.5], [x, 6.5, -1.5], 0.1, water)
  }
  beam(scene, [-12, 7, -1], [-1, 7, -1], 0.24, water)
  beam(scene, [-1, 7, -1], [-1, 2, 0], 0.24, water)

  const turbine = group(2, 0)
  box(turbine, [0, 0.5, 0], [9, 1, 5])
  const rotor = new T.Group()
  turbine.add(rotor)
  rotor.position.y = 2.6
  beam(rotor, [-5, 0, 0], [5, 0, 0], 0.2, heat)
  for (let i = 0; i < 8; i++) {
    const radius = 0.8 + i * 0.13
    const disc = cylinder(
      rotor,
      [-3 + i * 0.85, 0, 0],
      radius,
      radius,
      0.22,
      rim,
      16,
    )
    disc.rotation.z = Math.PI / 2
    for (let j = 0; j < 8; j++) {
      const angle = (j * Math.PI) / 4
      beam(
        rotor,
        [-3 + i * 0.85, Math.cos(angle) * radius, Math.sin(angle) * radius],
        [
          -2.8 + i * 0.85,
          Math.cos(angle + 0.2) * (radius + 0.22),
          Math.sin(angle + 0.2) * (radius + 0.22),
        ],
        0.065,
      )
    }
  }
  ;[-4, 4].forEach((x) => box(turbine, [x, 1.4, 0], [0.5, 2, 3]))

  const generator = group(16, 0)
  box(generator, [0, 0.5, 0], [8, 1, 5])
  const casing = cylinder(generator, [0, 2.5, 0], 2, 2, 6, steel, 16)
  casing.rotation.z = Math.PI / 2
  for (let x = -2.8; x < 3; x += 0.65) {
    const ring = mesh(
      new T.TorusGeometry(2.03, 0.065, 4, 20),
      x < 0 ? grid : rim,
      generator,
      [x, 2.5, 0],
    )
    ring.rotation.y = Math.PI / 2
  }
  beam(generator, [-5, 2.5, 0], [5, 2.5, 0], 0.2, heat)
  box(generator, [1, 5, 0], [3, 1, 1.5])

  const cooling = group(30, -1)
  const profile = [
    [2.5, 0],
    [2.1, 1],
    [1.5, 4],
    [1.6, 6],
    [2, 8],
  ].map(([x, y]) => new T.Vector2(x, y))
  mesh(new T.LatheGeometry(profile, 16), rim, cooling)
  cylinder(cooling, [0, 7.96, 0], 1.8, 1.8, 0.06, dark)
  cylinder(cooling, [0, 0.1, 0], 3.3, 3.3, 0.2, water, 24)
  box(cooling, [4, 0.1, 3], [3, 0.15, 6], water)
  for (let i = 0; i < 12; i++) {
    const a = (i * Math.PI) / 6
    beam(
      cooling,
      [Math.cos(a) * 2.4, 0, Math.sin(a) * 2.4],
      [Math.cos(a + 0.15) * 2.1, 1.5, Math.sin(a + 0.15) * 2.1],
      0.08,
    )
  }

  const emissions = group(44, -2)
  cylinder(emissions, [1, 7, -1], 0.75, 1.35, 14, rim, 16)
  ;[9, 10, 11].forEach((y) =>
    cylinder(
      emissions,
      [1, y, -1],
      0.95 - (y - 9) * 0.05,
      0.98 - (y - 9) * 0.05,
      0.35,
      fire,
      16,
    ),
  )
  box(emissions, [-2.5, 2.5, 1], [4, 4, 4])
  for (let x = -4; x < 0; x += 0.65)
    box(emissions, [x, 2.5, 3.05], [0.12, 3.8, 0.1], rim)
  beam(emissions, [-2.5, 3, 1], [1, 3, -1], 0.6)
  beam(emissions, [-4, 5, 1], [-4, 6, 1], 0.08, grid)

  const switchyard = group(59, 0)
  const paths = []
  ;[-3, 3].forEach((x) => {
    ;[-2, 3].forEach((z) => {
      ;[-1, 1].forEach((side) =>
        beam(switchyard, [x + side * 0.8, 0, z], [x + side * 0.3, 7, z], 0.1),
      )
      for (let y = 1; y < 7; y++)
        beam(
          switchyard,
          [x - 0.8 + y * 0.07, y, z],
          [x + 0.8 - (y + 1) * 0.07, y + 1, z],
          0.045,
        )
      beam(switchyard, [x - 1.8, 6, z], [x + 1.8, 6, z], 0.09)
    })
  })
  ;[-1.4, 0, 1.4].forEach((offset) => {
    const curve = new T.CatmullRomCurve3([
      new T.Vector3(-3 + offset, 6, -2),
      new T.Vector3(offset, 4.6, 0.5),
      new T.Vector3(3 + offset, 6, 3),
    ])
    mesh(new T.TubeGeometry(curve, 24, 0.035, 4, false), rim, switchyard)
    const pulse = mesh(new T.SphereGeometry(0.12, 6, 4), grid, switchyard)
    paths.push({ curve, pulse })
  })
  ;[-2, 2].forEach((x) => {
    box(switchyard, [x, 1, 0], [2, 2, 2])
    for (let z = -0.8; z <= 0.8; z += 0.4)
      box(switchyard, [x + 1.1, 1, z], [0.15, 1.9, 0.2], rim)
    ;[-0.6, 0.6].forEach((dx) =>
      cylinder(switchyard, [x + dx, 2.6, 0], 0.14, 0.25, 1.2, grid, 8),
    )
  })

  const particleCount = 160
  const particlePositions = new Float32Array(particleCount * 3)
  const particleGeometry = geometry(new T.BufferGeometry())
  const particlesMaterial = new T.PointsMaterial({
    color: '#9ac7dc',
    size: 0.18,
    transparent: true,
    opacity: 0.4,
    depthWrite: false,
  })
  materials.add(particlesMaterial)
  particleGeometry.setAttribute(
    'position',
    new T.BufferAttribute(particlePositions, 3),
  )
  scene.add(new T.Points(particleGeometry, particlesMaterial))
  const views = [
    [-42, 3, 0, -29, 12, 20],
    [-27, 6, 0, -15, 12, 20],
    [-12, 5, 0, 0, 12, 18],
    [2, 2, 0, 12, 9, 16],
    [16, 2.5, 0, 28, 9, 18],
    [30, 4, 0, 44, 12, 21],
    [44, 6, -1, 59, 13, 22],
    [59, 3, 0, 74, 12, 23],
    [59, 3, 0, 80, 17, 29],
  ]
  let active = false
  let disposed = false
  let raf = 0
  let targetProgress = 0
  let displayedProgress = 0
  let elapsed = 0
  let previousTime = 0
  const look = new T.Vector3()
  const render = () => {
    const scaled = Math.min(displayedProgress * 8, 8)
    const chapter = Math.min(7, Math.floor(scaled))
    const fraction = scaled - chapter
    // Smoothstep has a zero derivative at chapter joins, avoiding camera jolts.
    const blend = fraction * fraction * (3 - 2 * fraction)
    const a = views[chapter]
    const b = views[chapter + 1]
    look.set(...a.slice(0, 3)).lerp(new T.Vector3(...b.slice(0, 3)), blend)
    camera.position.set(...a.slice(3)).lerp(new T.Vector3(...b.slice(3)), blend)
    camera.lookAt(look)
    rotor.rotation.x = elapsed * 1.5 + scaled * 5
    flames.forEach((flame, i) => {
      flame.scale.y = 0.75 + Math.sin(elapsed * 5 + i * 1.7 + scaled) * 0.23
    })
    conveyor.forEach((dash, i) => {
      const t = (i / conveyor.length + elapsed * 0.08 + scaled * 0.04) % 1
      dash.position.set(-5 + t * 11, 1.4 + t * 4, 3 - t * 3)
    })
    paths.forEach(({ curve, pulse }, i) =>
      pulse.position.copy(
        curve.getPoint((elapsed * 0.25 + scaled * 0.15 + i / 3) % 1),
      ),
    )
    for (let i = 0; i < particleCount; i++) {
      const vapor = i < 65
      const rise =
        (i * 0.37 + elapsed * (vapor ? 0.8 : 0.12)) % (vapor ? 8 : 20)
      particlePositions[i * 3] = vapor
        ? 30 + Math.sin(i * 2.4 + rise * 0.3) * (0.4 + rise * 0.2)
        : -50 + ((i * 17.13) % 125)
      particlePositions[i * 3 + 1] = vapor ? 8 + rise : rise
      particlePositions[i * 3 + 2] = vapor
        ? -1 + Math.cos(i * 1.8) * (0.4 + rise * 0.15)
        : -20 + ((i * 7.31) % 45)
    }
    particleGeometry.attributes.position.needsUpdate = true
    canvas.dataset.chapter = String(chapter)
    canvas.dataset.progress = displayedProgress.toFixed(4)
    renderer.render(scene, camera)
  }
  const tick = (time) => {
    raf = 0
    if (!active || disposed) return
    const delta = previousTime
      ? Math.min((time - previousTime) / 1000, 0.05)
      : 0
    previousTime = time
    elapsed += delta
    displayedProgress +=
      (targetProgress - displayedProgress) * (1 - Math.exp(-delta * 12))
    render()
    raf = window.requestAnimationFrame(tick)
  }
  const setProgress = (progress, instant = false) => {
    if (disposed || !Number.isFinite(progress)) return
    targetProgress = Math.max(0, Math.min(1, progress))
    if (instant || !active) {
      displayedProgress = targetProgress
      render()
    }
  }
  const setActive = (value) => {
    if (disposed) return
    active = Boolean(value)
    canvas.dataset.active = String(active)
    if (!active) {
      window.cancelAnimationFrame(raf)
      raf = 0
      previousTime = 0
    } else if (!raf) raf = window.requestAnimationFrame(tick)
  }
  const resize = () => {
    if (disposed) return
    const bounds = canvas.getBoundingClientRect()
    const width = Math.max(1, bounds.width || canvas.clientWidth || 1)
    const height = Math.max(1, bounds.height || canvas.clientHeight || 1)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setSize(width, height, false)
    camera.aspect = width / height
    // Move the optical centre to the right; leave the left third for copy.
    camera.setViewOffset(
      width,
      height,
      -width * (width >= 768 ? 0.2 : 0.05),
      0,
      width,
      height,
    )
    camera.updateProjectionMatrix()
    render()
  }
  const dispose = () => {
    if (disposed) return
    setActive(false)
    disposed = true
    geometries.forEach((value) => value.dispose())
    materials.forEach((value) => value.dispose())
    renderer.dispose()
    scene.clear()
    canvas.dataset.disposed = 'true'
  }
  resize()
  return { setProgress, setActive, resize, dispose }
}
