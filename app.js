// ============================================================================
// LIFETOWN 3D - HỆ THỐNG QUẢN LÝ CÔNG VIỆC, LỊCH, APP & TÀI CHÍNH 3D
// ============================================================================

const STORAGE_KEY = 'lifetown_3d_state_v1';

const DEFAULT_STATE = {
  activeStation: 'tasks',
  taskSubTab: 'day', // 'day' | 'week' | 'month'
  financeSubTab: 'overview', // 'overview' | 'transactions'
  tasks: {
    day: [
      { id: 't1', title: 'Hoàn thiện giao diện 3D hệ thống quản lý', priority: 'Cao', time: '09:30', done: true },
      { id: 't2', title: 'Review tiến độ các App đang vận hành', priority: 'Cao', time: '14:00', done: true },
      { id: 't3', title: 'Cập nhật bảng chi tiêu & đối soát ngân sách', priority: 'Trung bình', time: '16:30', done: false },
      { id: 't4', title: 'Lên kế hoạch công việc ngày mai', priority: 'Thấp', time: '20:00', done: false }
    ],
    week: [
      { id: 'w1', title: 'Ra mắt tính năng quản lý tài chính cá nhân', priority: 'Cao', time: 'Thứ 4', done: true },
      { id: 'w2', title: 'Tối ưu hóa hiệu suất Server & Database', priority: 'Cao', time: 'Thứ 5', done: false },
      { id: 'w3', title: 'Tổng kết tuần & dọn dẹp backlog dự án', priority: 'Trung bình', time: 'Chủ nhật', done: false }
    ],
    month: [
      { id: 'm1', title: 'Đạt mục tiêu tiết kiệm 35% thu nhập tháng', priority: 'Cao', time: 'Tháng này', done: true },
      { id: 'm2', title: 'Hoàn thành 2 sản phẩm phần mềm (Web/Desktop)', priority: 'Cao', time: 'Tháng này', done: false },
      { id: 'm3', title: 'Đọc xong 2 cuốn sách chuyên ngành Hệ thống', priority: 'Trung bình', time: 'Tháng này', done: false }
    ]
  },
  schedule: [
    { id: 's1', time: '08:00 - 09:00', title: 'Morning Coffee & Lập kế hoạch ngày', tag: 'Cá nhân', status: 'Đã xong' },
    { id: 's2', time: '09:00 - 12:00', title: 'Deep Work: Lập trình & Xử lý Task ưu tiên cao', tag: 'Công việc', status: 'Đang diễn ra' },
    { id: 's3', time: '14:00 - 16:00', title: 'Kiểm tra hệ thống App & Họp nhóm triển khai', tag: 'Dự án', status: 'Sắp tới' },
    { id: 's4', time: '17:00 - 18:00', title: 'Tập thể thao & Giải lao tái tạo năng lượng', tag: 'Sức khỏe', status: 'Sắp tới' },
    { id: 's5', time: '20:30 - 21:30', title: 'Kiểm tra thu chi & Nghiên cứu công nghệ mới', tag: 'Tài chính', status: 'Sắp tới' }
  ],
  finance: {
    baseSalary: 32000000,
    monthlyBudget: 18000000,
    transactions: [
      { id: 'f1', type: 'income', title: 'Lương chính tháng này', amount: 32000000, category: 'Lương', date: '01/10' },
      { id: 'f2', type: 'income', title: 'Thu nhập dự án Freelance App', amount: 8500000, category: 'Thưởng/Dự án', date: '15/10' },
      { id: 'f3', type: 'expense', title: 'Tiền thuê nhà & Điện nước, Internet', amount: 6500000, category: 'Nhà cửa', date: '05/10' },
      { id: 'f4', type: 'expense', title: 'Chi phí ăn uống & Siêu thị', amount: 4200000, category: 'Ăn uống', date: '20/10' },
      { id: 'f5', type: 'expense', title: 'Thuê Server Cloud, Domain & AI API', amount: 1450000, category: 'Công việc/App', date: '22/10' },
      { id: 'f6', type: 'expense', title: 'Quỹ đầu tư & Tiết kiệm định kỳ', amount: 5000000, category: 'Đầu tư', date: '25/10' }
    ]
  },
  apps: [
    { id: 'a1', name: 'LifeTown 3D Desktop/Web', category: 'Quản lý cá nhân', status: 'Đang chạy', progress: 92, tech: 'Three.js / WebGL' },
    { id: 'a2', name: 'AI Content & Research Bot', category: 'Tự động hóa', status: 'Đang chạy', progress: 85, tech: 'Python / LLM' },
    { id: 'a3', name: 'CRM & Quản lý Khách hàng', category: 'SaaS App', status: 'Đang code', progress: 64, tech: 'React / Node.js' },
    { id: 'a4', name: 'Ví Tài Chính Thông Minh', category: 'Fintech', status: 'Ý tưởng', progress: 30, tech: 'Flutter' }
  ],
  goals: [
    { id: 'g1', title: 'Duy trì Deep Work 4 tiếng/ngày', streak: 14, target: 30, doneToday: true },
    { id: 'g2', title: 'Ghi chép chi tiêu mỗi tối', streak: 21, target: 30, doneToday: true },
    { id: 'g3', title: 'Tập thể dục 30 phút mỗi ngày', streak: 9, target: 30, doneToday: false },
    { id: 'g4', title: 'Không vượt hạn mức ngân sách tháng', streak: 5, target: 12, doneToday: true }
  ]
};

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return Object.assign({}, DEFAULT_STATE, JSON.parse(raw));
    }
  } catch (e) {
    console.warn('Cannot read localStorage:', e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function saveState(syncMeta = null) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Cannot save localStorage:', e);
  }
  updateTopSummary();
  updateWorldBadges();
  if (syncMeta && typeof publishCloudState === 'function') {
    publishCloudState(syncMeta);
  }
}

function formatVND(num) {
  return Number(num || 0).toLocaleString('vi-VN') + 'đ';
}

function showToast(msg) {
  const container = document.getElementById('toast-container');
  const el = document.createElement('div');
  el.className = 'toast-msg';
  el.textContent = msg;
  container.appendChild(el);
  setTimeout(() => el.remove(), 3200);
}

// ============================================================================
// STATION METADATA (JAPANESE ARCHITECTURAL THEME - KYOTO & NEO-TOKYO)
// ============================================================================
const STATIONS = {
  hub: {
    id: 'hub',
    name: 'Thiên Thủ Các (Điều Phối)',
    shortName: 'Thiên Thủ Các',
    icon: '🏯',
    pos: { x: 2, y: 0, z: -12 },
    labelHeight: 17.5,
    camOffset: { x: 0, y: 26, z: 27 },
    quote: 'Lâu đài Thiên Thủ Các trung tâm điều phối toàn bộ Công việc, Lịch, App & Ngân khố.',
    bubble: 'Hệ thống đang vận hành 100% công suất!'
  },
  tasks: {
    id: 'tasks',
    name: 'Đền Thần Đạo & Võ Đường Task',
    shortName: 'Đền Task',
    icon: '⛩️',
    pos: { x: -4, y: 0, z: 5 },
    labelHeight: 11.2,
    camOffset: { x: -4, y: 18, z: 22 },
    quote: 'Tập trung tinh thần võ sĩ đạo để xử lý dứt điểm từng Task Ngày - Tuần - Tháng!',
    bubble: 'Đang xử lý danh sách Task trong ngày & tuần!'
  },
  schedule: {
    id: 'schedule',
    name: 'Bảo Tháp Ngũ Trùng (Lịch Trình)',
    shortName: 'Bảo Tháp Lịch',
    icon: '🗼',
    pos: { x: -16, y: 0, z: 13 },
    labelHeight: 16.0,
    camOffset: { x: -16, y: 19, z: 28 },
    quote: 'Tiếng chuông Chùa Tháp điểm giờ chuẩn xác cho từng khung lịch làm việc trong ngày.',
    bubble: 'Khung giờ Deep Work đang diễn ra!'
  },
  finance: {
    id: 'finance',
    name: 'Thương Hội Ngân Khố Maneki-Neko',
    shortName: 'Ngân Khố & Lương',
    icon: '🐱',
    pos: { x: 18, y: 0, z: 12 },
    labelHeight: 12.2,
    camOffset: { x: 18, y: 18, z: 27 },
    quote: 'Mèo Thần Tài Maneki-Neko chiêu tài lộc, quản lý Lương, Ngân sách và Chi tiêu.',
    bubble: 'Ngân sách tháng đang trong vùng an toàn!'
  },
  apps: {
    id: 'apps',
    name: 'Trạm Công Nghệ Neo-Tokyo App',
    shortName: 'Quản lý App',
    icon: '🗼',
    pos: { x: -20, y: 0, z: -12 },
    labelHeight: 13.5,
    camOffset: { x: -20, y: 18, z: 6 },
    quote: 'Trung tâm công nghệ Neo-Tokyo giám sát các ứng dụng, phần mềm và dự án số.',
    bubble: 'Các App & Bot đang hoạt động ổn định!'
  },
  goals: {
    id: 'goals',
    name: 'Vườn Thiền Zen & Hồ Cá Koi',
    shortName: 'Vườn Thiền Mục Tiêu',
    icon: '🌸',
    pos: { x: -23, y: 0, z: 18 },
    labelHeight: 10.5,
    camOffset: { x: -23, y: 17, z: 33 },
    quote: 'Rèn luyện kỷ luật tĩnh tâm mỗi ngày cùng búp bê Daruma & hồ cá Koi thịnh vượng.',
    bubble: 'Chuỗi thói quen liên tiếp đang tăng!'
  }
};

// ============================================================================
// THREE.JS 3D WORLD INITIALIZATION
// ============================================================================
const container = document.getElementById('canvas-container');
const labelsContainer = document.getElementById('labels-container');

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdcf0d5);
scene.fog = new THREE.FogExp2(0xdcf0d5, 0.0075);

const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.5, 300);
camera.position.set(-6, 34, 44);

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
container.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.maxPolarAngle = Math.PI / 2 - 0.06;
controls.minDistance = 14;
controls.maxDistance = 95;
controls.target.set(-2, 2, 2);

// Lighting
const ambientLight = new THREE.AmbientLight(0xfff6f0, 0.72);
scene.add(ambientLight);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0xc8e6c9, 0.38);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xfff5e4, 0.9);
dirLight.position.set(35, 55, 30);
dirLight.castShadow = true;
dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;
dirLight.shadow.camera.near = 5;
dirLight.shadow.camera.far = 150;
const d = 50;
dirLight.shadow.camera.left = -d;
dirLight.shadow.camera.right = d;
dirLight.shadow.camera.top = d;
dirLight.shadow.camera.bottom = -d;
dirLight.shadow.bias = -0.0005;
scene.add(dirLight);

// Materials Palette (Authentic Japanese Architecture + Pastel Sakura Harmony)
const MATS = {
  ground: new THREE.MeshStandardMaterial({ color: 0xd5ebd0, roughness: 0.95 }),
  plazaCream: new THREE.MeshStandardMaterial({ color: 0xf7f1e5, roughness: 0.75 }),
  stoneWall: new THREE.MeshStandardMaterial({ color: 0x9e9a95, roughness: 0.85 }),
  stoneDark: new THREE.MeshStandardMaterial({ color: 0x75726e, roughness: 0.9 }),
  shikkuiWhite: new THREE.MeshStandardMaterial({ color: 0xfcfaf5, roughness: 0.55 }),
  woodDark: new THREE.MeshStandardMaterial({ color: 0x3d261c, roughness: 0.7 }),
  woodWarm: new THREE.MeshStandardMaterial({ color: 0x8c583a, roughness: 0.65 }),
  kawaraRoof: new THREE.MeshStandardMaterial({ color: 0x2f3640, roughness: 0.5, metalness: 0.15 }),
  kawaraTeal: new THREE.MeshStandardMaterial({ color: 0x3b6978, roughness: 0.5, metalness: 0.15 }),
  vermilion: new THREE.MeshStandardMaterial({ color: 0xd93829, roughness: 0.45 }),
  vermilionDark: new THREE.MeshStandardMaterial({ color: 0x9e1f14, roughness: 0.55 }),
  goldTrim: new THREE.MeshStandardMaterial({ color: 0xf0c44d, roughness: 0.3, metalness: 0.45 }),
  sakuraPink: new THREE.MeshStandardMaterial({ color: 0xffb7c5, roughness: 0.6 }),
  sakuraDeep: new THREE.MeshStandardMaterial({ color: 0xf48fb1, roughness: 0.6 }),
  sakuraLight: new THREE.MeshStandardMaterial({ color: 0xffe4ec, roughness: 0.6 }),
  bambooGreen: new THREE.MeshStandardMaterial({ color: 0x55a630, roughness: 0.55 }),
  pineGreen: new THREE.MeshStandardMaterial({ color: 0x2d6a4f, roughness: 0.7 }),
  waterpond: new THREE.MeshStandardMaterial({ color: 0x4cc9f0, roughness: 0.2, metalness: 0.1, transparent: true, opacity: 0.85 }),
  shojiGlow: new THREE.MeshStandardMaterial({ color: 0xfff3d1, emissive: 0xffb74d, emissiveIntensity: 0.35, roughness: 0.4 }),
  lanternGlow: new THREE.MeshStandardMaterial({ color: 0xff6b4a, emissive: 0xff5722, emissiveIntensity: 0.65, roughness: 0.4 }),
  neonCyan: new THREE.MeshStandardMaterial({ color: 0x00f5d4, emissive: 0x00bbf9, emissiveIntensity: 0.75 }),
  neonPink: new THREE.MeshStandardMaterial({ color: 0xff4d6d, emissive: 0xf72585, emissiveIntensity: 0.75 }),
  railSteel: new THREE.MeshStandardMaterial({ color: 0x7f8c8d, roughness: 0.4, metalness: 0.6 }),
  railWood: new THREE.MeshStandardMaterial({ color: 0x8d6e63, roughness: 0.8 }),
  white: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 })
};

function enableShadow(obj) {
  obj.traverse(child => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
}

// Helper: Build Japanese Curved Pagoda/Castle Roof Tier (Irimoya-zukuri style)
function createJapaneseRoof(width, depth, height, roofMat = MATS.kawaraRoof, withGoldCorners = true) {
  const rg = new THREE.Group();

  // Main flared eaves base
  const eave = new THREE.Mesh(new THREE.BoxGeometry(width * 1.08, height * 0.24, depth * 1.08), roofMat);
  eave.position.y = height * 0.12;
  rg.add(eave);

  // Upper sloped hipped roof (4-sided pyramid frustum)
  const radiusBottom = Math.hypot(width, depth) * 0.54;
  const radiusTop = radiusBottom * 0.42;
  const slope = new THREE.Mesh(new THREE.CylinderGeometry(radiusTop, radiusBottom, height * 0.78, 4), roofMat);
  slope.rotation.y = Math.PI / 4;
  slope.scale.set(width / Math.max(width, depth), 1, depth / Math.max(width, depth));
  slope.position.y = height * 0.52;
  rg.add(slope);

  // Roof Ridge Beam (Munagi) with Gold End Caps
  const ridgeW = width * 0.46;
  const ridge = new THREE.Mesh(new THREE.BoxGeometry(ridgeW, height * 0.22, depth * 0.14), roofMat);
  ridge.position.y = height * 0.92;
  rg.add(ridge);

  if (withGoldCorners) {
    const capL = new THREE.Mesh(new THREE.BoxGeometry(0.28, height * 0.28, depth * 0.18), MATS.goldTrim);
    capL.position.set(-ridgeW * 0.5, height * 0.94, 0);
    const capR = capL.clone();
    capR.position.x = ridgeW * 0.5;
    rg.add(capL, capR);

    // Upturned corner ornaments
    const cOffsets = [
      [-width * 0.52, depth * 0.52],
      [width * 0.52, depth * 0.52],
      [-width * 0.52, -depth * 0.52],
      [width * 0.52, -depth * 0.52]
    ];
    cOffsets.forEach(([cx, cz]) => {
      const horn = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.45, 6), MATS.goldTrim);
      horn.position.set(cx, height * 0.3, cz);
      rg.add(horn);
    });
  }
  return rg;
}

// Helper: Build Detailed Japanese Torii Gate (⛩️)
function createToriiGate(scale = 1) {
  const tg = new THREE.Group();
  const pillarGeo = new THREE.CylinderGeometry(0.22 * scale, 0.26 * scale, 4.2 * scale, 16);
  const pLeft = new THREE.Mesh(pillarGeo, MATS.vermilion);
  pLeft.position.set(-1.55 * scale, 2.1 * scale, 0);
  const pRight = new THREE.Mesh(pillarGeo, MATS.vermilion);
  pRight.position.set(1.55 * scale, 2.1 * scale, 0);

  // Black stone base shoes (Kamebara)
  const shoeGeo = new THREE.CylinderGeometry(0.32 * scale, 0.36 * scale, 0.45 * scale, 16);
  const sLeft = new THREE.Mesh(shoeGeo, MATS.kawaraRoof);
  sLeft.position.set(-1.55 * scale, 0.22 * scale, 0);
  const sRight = sLeft.clone();
  sRight.position.x = 1.55 * scale;

  // Lower tie beam (Nuki)
  const nuki = new THREE.Mesh(new THREE.BoxGeometry(3.9 * scale, 0.26 * scale, 0.24 * scale), MATS.vermilion);
  nuki.position.y = 3.25 * scale;

  // Top lintel (Kasagi) with dark roof cap
  const kasagi = new THREE.Mesh(new THREE.BoxGeometry(4.6 * scale, 0.32 * scale, 0.42 * scale), MATS.vermilion);
  kasagi.position.y = 4.15 * scale;
  const kasagiCap = new THREE.Mesh(new THREE.BoxGeometry(4.8 * scale, 0.16 * scale, 0.48 * scale), MATS.kawaraRoof);
  kasagiCap.position.y = 4.35 * scale;

  // Center plaque (Gakuzuka)
  const plaque = new THREE.Mesh(new THREE.BoxGeometry(0.55 * scale, 0.85 * scale, 0.3 * scale), MATS.goldTrim);
  plaque.position.y = 3.7 * scale;

  tg.add(pLeft, pRight, sLeft, sRight, nuki, kasagi, kasagiCap, plaque);
  return tg;
}

// Helper: Build Traditional Stone Lantern (Ishidoro / Toro)
function createStoneLantern(scale = 1) {
  const lg = new THREE.Group();
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.45 * scale, 0.55 * scale, 0.3 * scale, 6), MATS.stoneWall);
  base.position.y = 0.15 * scale;
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.2 * scale, 0.25 * scale, 1.2 * scale, 8), MATS.stoneWall);
  post.position.y = 0.9 * scale;
  const lightBox = new THREE.Mesh(new THREE.CylinderGeometry(0.35 * scale, 0.35 * scale, 0.55 * scale, 6), MATS.shojiGlow);
  lightBox.position.y = 1.7 * scale;
  const roof = new THREE.Mesh(new THREE.ConeGeometry(0.75 * scale, 0.55 * scale, 6), MATS.stoneDark);
  roof.position.y = 2.2 * scale;
  lg.add(base, post, lightBox, roof);
  return lg;
}

// Ground Plane
const groundGeo = new THREE.CylinderGeometry(85, 85, 2, 64);
const groundMesh = new THREE.Mesh(groundGeo, MATS.ground);
groundMesh.position.y = -1;
groundMesh.receiveShadow = true;
scene.add(groundMesh);

// Interactive Hitboxes for Clicking Stations
const stationMeshes = [];
const animatedObjects = [];
const activeRingMeshes = {};

function registerStationHitbox(stationId, group, radius = 6, height = 10) {
  const hitGeo = new THREE.CylinderGeometry(radius, radius, height, 16);
  const hitMat = new THREE.MeshBasicMaterial({ visible: false });
  const hitMesh = new THREE.Mesh(hitGeo, hitMat);
  hitMesh.position.y = height / 2;
  hitMesh.userData.stationId = stationId;
  group.add(hitMesh);
  stationMeshes.push(hitMesh);

  // Selection Halo Ring on Ground
  const ringGeo = new THREE.RingGeometry(radius + 0.5, radius + 1.2, 48);
  ringGeo.rotateX(-Math.PI / 2);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0xd93829,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.0
  });
  const ringMesh = new THREE.Mesh(ringGeo, ringMat);
  ringMesh.position.y = 0.08;
  group.add(ringMesh);
  activeRingMeshes[stationId] = ringMesh;
}

// ============================================================================
// BUILD THE 6 DETAILED JAPANESE 3D STATIONS
// ============================================================================

// 1. CENTRAL TENSHUKAKU CASTLE HUB ('hub' - Himeji / Osaka Style Castle + Moat & Red Bridge)
function buildCastleHub() {
  const group = new THREE.Group();
  group.position.set(STATIONS.hub.pos.x, 0, STATIONS.hub.pos.z);

  // Outer Moat Rim & Water Moat
  const moatRim = new THREE.Mesh(new THREE.CylinderGeometry(14.8, 15.2, 0.45, 48), MATS.stoneWall);
  moatRim.position.y = 0.22;
  group.add(moatRim);

  const moatWater = new THREE.Mesh(new THREE.CylinderGeometry(14.2, 14.2, 0.52, 48), MATS.waterpond);
  moatWater.position.y = 0.26;
  group.add(moatWater);

  // Inner Island Courtyard
  const island = new THREE.Mesh(new THREE.CylinderGeometry(11.2, 11.8, 0.7, 36), MATS.plazaCream);
  island.position.y = 0.35;
  group.add(island);

  // Sloped Ishigaki Stone Fortress Base
  const ishigaki1 = new THREE.Mesh(new THREE.CylinderGeometry(7.8, 9.4, 3.2, 4), MATS.stoneWall);
  ishigaki1.rotation.y = Math.PI / 4;
  ishigaki1.position.y = 2.0;
  group.add(ishigaki1);

  const ishigaki2 = new THREE.Mesh(new THREE.CylinderGeometry(6.6, 7.6, 1.6, 4), MATS.stoneDark);
  ishigaki2.rotation.y = Math.PI / 4;
  ishigaki2.position.y = 4.2;
  group.add(ishigaki2);

  // 4 Tiers of Tenshukaku Castle Keep
  const tiers = [
    { w: 8.6, d: 8.6, h: 2.6, y: 5.0, rw: 10.6, rd: 10.6, rh: 1.5 },
    { w: 6.8, d: 6.8, h: 2.3, y: 7.8, rw: 8.8, rd: 8.8, rh: 1.4 },
    { w: 5.2, d: 5.2, h: 2.1, y: 10.2, rw: 7.0, rd: 7.0, rh: 1.3 },
    { w: 3.8, d: 3.8, h: 2.0, y: 12.4, rw: 5.6, rd: 5.6, rh: 1.5 }
  ];

  tiers.forEach((t, idx) => {
    const wall = new THREE.Mesh(new THREE.BoxGeometry(t.w, t.h, t.d), MATS.shikkuiWhite);
    wall.position.y = t.y + t.h / 2;
    group.add(wall);

    // Timber frame accent & glowing windows
    const band = new THREE.Mesh(new THREE.BoxGeometry(t.w + 0.12, 0.25, t.d + 0.12), MATS.woodDark);
    band.position.y = t.y + t.h * 0.25;
    group.add(band);

    const win = new THREE.Mesh(new THREE.BoxGeometry(t.w * 0.55, t.h * 0.42, t.d + 0.16), MATS.shojiGlow);
    win.position.y = t.y + t.h * 0.62;
    group.add(win);

    // Curved Japanese Roof for this tier
    const roof = createJapaneseRoof(t.rw, t.rd, t.rh, idx === 3 ? MATS.kawaraTeal : MATS.kawaraRoof, true);
    roof.position.y = t.y + t.h - 0.1;
    group.add(roof);
  });

  // Top Red Railing Balcony & Golden Shachihoko Roof Guardians
  const shachiL = new THREE.Mesh(new THREE.ConeGeometry(0.35, 1.1, 8), MATS.goldTrim);
  shachiL.position.set(-1.3, 16.0, 0);
  shachiL.rotation.z = -0.25;
  const shachiR = shachiL.clone();
  shachiR.position.x = 1.3;
  shachiR.rotation.z = 0.25;
  group.add(shachiL, shachiR);

  // Floating Golden Celestial Ring above Tenshukaku
  const crown = new THREE.Mesh(new THREE.TorusGeometry(2.4, 0.18, 12, 36), MATS.goldTrim);
  crown.rotation.x = Math.PI / 2;
  crown.position.y = 16.8;
  group.add(crown);
  animatedObjects.push({ mesh: crown, type: 'spinY', speed: 1.2, baseY: 16.8 });

  // Red Arched Taiko-bashi Bridge crossing the moat at the front
  const bridgeGroup = new THREE.Group();
  bridgeGroup.position.set(0, 0.6, 12.2);
  const deck = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.35, 5.2), MATS.vermilion);
  deck.position.y = 0.4;
  const railL = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.75, 5.2), MATS.vermilionDark);
  railL.position.set(-1.3, 0.85, 0);
  const railR = railL.clone();
  railR.position.x = 1.3;
  bridgeGroup.add(deck, railL, railR);
  group.add(bridgeGroup);

  // Corner Sakura Trees inside Castle Courtyard
  const cTree1 = createSakuraTree(1.0);
  cTree1.position.set(-7.5, 0.6, 6.2);
  const cTree2 = createSakuraTree(0.95);
  cTree2.position.set(7.5, 0.6, 6.2);
  group.add(cTree1, cTree2);

  enableShadow(group);
  registerStationHitbox('hub', group, 12.5, 16);
  scene.add(group);
}

// 2. SHINTO SHRINE & MACHIYA TASK DOJO ('tasks' - Vermilion Torii + Machiya Hall + Ema Board)
function buildTaskStation() {
  const group = new THREE.Group();
  group.position.set(STATIONS.tasks.pos.x, 0, STATIONS.tasks.pos.z);

  // Stone Courtyard Pad
  const pad = new THREE.Mesh(new THREE.BoxGeometry(11.5, 0.6, 9.5), MATS.plazaCream);
  pad.position.y = 0.3;
  group.add(pad);

  // Main Machiya Dojo Hall
  const hallWall = new THREE.Mesh(new THREE.BoxGeometry(7.8, 3.4, 5.4), MATS.shikkuiWhite);
  hallWall.position.set(0, 2.3, -0.8);
  group.add(hallWall);

  // Vermilion Pillars & Glowing Shoji Sliding Doors
  for (let x = -3.6; x <= 3.6; x += 1.8) {
    const col = new THREE.Mesh(new THREE.BoxGeometry(0.28, 3.5, 5.6), MATS.vermilion);
    col.position.set(x, 2.3, -0.8);
    group.add(col);
  }
  const shojiFront = new THREE.Mesh(new THREE.BoxGeometry(6.8, 2.4, 5.52), MATS.shojiGlow);
  shojiFront.position.set(0, 2.2, -0.8);
  group.add(shojiFront);

  // 1st Floor Curved Japanese Roof
  const roof1 = createJapaneseRoof(9.6, 7.2, 1.5, MATS.kawaraRoof, true);
  roof1.position.set(0, 3.9, -0.8);
  group.add(roof1);

  // 2nd Floor Loft & Upper Roof
  const loft = new THREE.Mesh(new THREE.BoxGeometry(5.2, 2.0, 3.6), MATS.shikkuiWhite);
  loft.position.set(0, 5.8, -0.8);
  group.add(loft);

  const roof2 = createJapaneseRoof(6.8, 5.0, 1.4, MATS.kawaraRoof, true);
  roof2.position.set(0, 6.7, -0.8);
  group.add(roof2);

  // Front Vermilion Torii Gate at the entrance
  const torii = createToriiGate(1.05);
  torii.position.set(0, 0.5, 3.3);
  group.add(torii);

  // Hanging Red Chochin Paper Lanterns along front eaves
  for (let lx = -3.0; lx <= 3.0; lx += 1.5) {
    const lantern = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 12), MATS.lanternGlow);
    lantern.scale.y = 1.35;
    lantern.position.set(lx, 3.6, 2.1);
    group.add(lantern);
  }

  // Spinning Giant Red & Gold Chochin Lantern Emblem above Dojo
  const emblemGroup = new THREE.Group();
  emblemGroup.position.set(0, 9.4, -0.8);
  const bigLantern = new THREE.Mesh(new THREE.SphereGeometry(0.95, 20, 20), MATS.lanternGlow);
  bigLantern.scale.y = 1.25;
  const goldCapTop = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.2, 16), MATS.goldTrim);
  goldCapTop.position.y = 1.1;
  const goldCapBot = goldCapTop.clone();
  goldCapBot.position.y = -1.1;
  emblemGroup.add(bigLantern, goldCapTop, goldCapBot);
  group.add(emblemGroup);
  animatedObjects.push({ mesh: emblemGroup, type: 'spinY', speed: 1.6, baseY: 9.4 });

  // Side Pavilion (Ema Wishing Plaque Rack & Tea House)
  const teaHouse = new THREE.Group();
  teaHouse.position.set(-10.5, 0, -2.5);
  const thPad = new THREE.Mesh(new THREE.BoxGeometry(8.2, 0.5, 7.2), MATS.plazaCream);
  thPad.position.y = 0.25;
  const thBody = new THREE.Mesh(new THREE.BoxGeometry(5.8, 3.0, 4.6), MATS.woodWarm);
  thBody.position.y = 2.0;
  const thRoof = createJapaneseRoof(7.2, 6.0, 1.4, MATS.kawaraTeal, true);
  thRoof.position.y = 3.4;
  teaHouse.add(thPad, thBody, thRoof);
  group.add(teaHouse);

  enableShadow(group);
  registerStationHitbox('tasks', group, 7.8, 10);
  scene.add(group);
}

// 3. GOJU-NO-TO 5-STORY PAGODA & BELL TOWER ('schedule' - Kyoto 5-Story Pagoda)
function buildScheduleTower() {
  const group = new THREE.Group();
  group.position.set(STATIONS.schedule.pos.x, 0, STATIONS.schedule.pos.z);

  // Stone Pagoda Foundation
  const pad = new THREE.Mesh(new THREE.BoxGeometry(10.5, 0.7, 10.5), MATS.plazaCream);
  pad.position.y = 0.35;
  group.add(pad);

  const stonePodium = new THREE.Mesh(new THREE.BoxGeometry(7.2, 1.0, 7.2), MATS.stoneWall);
  stonePodium.position.y = 1.1;
  group.add(stonePodium);

  // 5-Story Vermilion & Dark Tile Pagoda (Goju-no-to)
  for (let i = 0; i < 5; i++) {
    const w = 4.6 - i * 0.45;
    const h = 1.75;
    const baseY = 1.6 + i * 2.15;

    // Pagoda Core Wall
    const core = new THREE.Mesh(new THREE.BoxGeometry(w, h, w), MATS.vermilion);
    core.position.y = baseY + h / 2;
    group.add(core);

    // White Plaster Panels
    const panel = new THREE.Mesh(new THREE.BoxGeometry(w * 0.78, h * 0.7, w + 0.08), MATS.shikkuiWhite);
    panel.position.y = baseY + h / 2;
    const panel2 = new THREE.Mesh(new THREE.BoxGeometry(w + 0.08, h * 0.7, w * 0.78), MATS.shikkuiWhite);
    panel2.position.y = baseY + h / 2;
    group.add(panel, panel2);

    // Curved Pagoda Roof Tier
    const roof = createJapaneseRoof(w + 2.1, w + 2.1, 1.05, MATS.kawaraRoof, true);
    roof.position.y = baseY + h - 0.1;
    group.add(roof);
  }

  // Golden Sorin Finial Spire (9 Sacred Rings at Top of Pagoda)
  const spireGroup = new THREE.Group();
  spireGroup.position.y = 12.6;
  const spirePole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.22, 3.2, 12), MATS.goldTrim);
  spirePole.position.y = 1.6;
  spireGroup.add(spirePole);
  for (let r = 0; r < 6; r++) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.45 - r * 0.04, 0.06, 8, 16), MATS.goldTrim);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.6 + r * 0.38;
    spireGroup.add(ring);
  }
  group.add(spireGroup);
  animatedObjects.push({ mesh: spireGroup, type: 'spinY', speed: 1.0, baseY: 12.6 });

  // Adjacent Bonsho Temple Bell Pavilion (Timekeeper)
  const bellPav = new THREE.Group();
  bellPav.position.set(4.2, 0.7, 2.8);
  const bRoof = createJapaneseRoof(3.4, 3.4, 1.1, MATS.kawaraRoof, false);
  bRoof.position.y = 2.8;
  const bell = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.62, 1.2, 16), MATS.stoneDark);
  bell.position.y = 1.8;
  bellPav.add(bRoof, bell);
  group.add(bellPav);

  enableShadow(group);
  registerStationHitbox('schedule', group, 6.5, 15);
  scene.add(group);
}

// 4. EDO KURA TREASURY VAULT & GIANT MANEKI-NEKO ('finance' - Lucky Cat & Gold Koban Coins)
function buildFinanceBakery() {
  const group = new THREE.Group();
  group.position.set(STATIONS.finance.pos.x, 0, STATIONS.finance.pos.z);

  const pad = new THREE.Mesh(new THREE.BoxGeometry(10.8, 0.7, 10.8), MATS.plazaCream);
  pad.position.y = 0.35;
  group.add(pad);

  // Traditional Edo Kura Merchant Vault Building
  const kuraWall = new THREE.Mesh(new THREE.BoxGeometry(6.8, 4.6, 5.8), MATS.shikkuiWhite);
  kuraWall.position.set(-0.8, 2.9, -1.0);
  group.add(kuraWall);

  // Black Namako-kabe Lower Tile Trim
  const namako = new THREE.Mesh(new THREE.BoxGeometry(7.0, 1.5, 6.0), MATS.kawaraRoof);
  namako.position.set(-0.8, 1.35, -1.0);
  group.add(namako);

  const kuraRoof = createJapaneseRoof(8.6, 7.6, 1.7, MATS.kawaraRoof, true);
  kuraRoof.position.set(-0.8, 5.1, -1.0);
  group.add(kuraRoof);

  // Giant Maneki-Neko (Japanese Beckoning Lucky Cat) Statue in Front-Right
  const catGroup = new THREE.Group();
  catGroup.position.set(2.2, 0.7, 2.0);
  catGroup.rotation.y = -0.35;

  // Red Cushion (Zabuton)
  const cushion = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.5, 3.2), MATS.vermilion);
  cushion.position.y = 0.25;
  catGroup.add(cushion);

  // Cat Body & Head
  const catBody = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.35, 2.4, 20), MATS.white);
  catBody.position.y = 1.6;
  const catHead = new THREE.Mesh(new THREE.SphereGeometry(1.25, 24, 24), MATS.white);
  catHead.position.y = 3.3;

  // Cat Ears (White outer, Red inner)
  const earGeo = new THREE.ConeGeometry(0.45, 0.95, 12);
  const earL = new THREE.Mesh(earGeo, MATS.white);
  earL.position.set(-0.78, 4.35, 0);
  earL.rotation.z = 0.25;
  const earR = new THREE.Mesh(earGeo, MATS.white);
  earR.position.set(0.78, 4.35, 0);
  earR.rotation.z = -0.25;

  // Red Collar & Golden Bell
  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.95, 0.14, 10, 24), MATS.vermilion);
  collar.rotation.x = Math.PI / 2;
  collar.position.y = 2.45;
  const bell = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 12), MATS.goldTrim);
  bell.position.set(0, 2.38, 1.02);

  // Golden Oval Koban Coin held on right side
  const koban = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.65, 0.18, 20), MATS.goldTrim);
  koban.scale.z = 1.45;
  koban.rotation.x = Math.PI / 2;
  koban.position.set(0.7, 1.65, 1.15);

  // Animated Beckoning Left Paw (Waving up and down!)
  const wavingPaw = new THREE.Group();
  wavingPaw.position.set(-1.15, 2.4, 0.3);
  const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.35, 1.35, 12), MATS.white);
  arm.position.y = 0.55;
  const paw = new THREE.Mesh(new THREE.SphereGeometry(0.4, 12, 12), MATS.white);
  paw.position.set(0, 1.2, 0.15);
  wavingPaw.add(arm, paw);
  animatedObjects.push({ mesh: wavingPaw, type: 'waveX', speed: 4.5 });

  catGroup.add(catBody, catHead, earL, earR, collar, bell, koban, wavingPaw);
  group.add(catGroup);

  // Orbiting Golden Koban Coins above Treasury
  const coinOrbit = new THREE.Group();
  coinOrbit.position.set(-0.8, 8.2, -1.0);
  for (let i = 0; i < 5; i++) {
    const coin = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.15, 16), MATS.goldTrim);
    coin.scale.x = 1.4;
    coin.rotation.z = Math.PI / 2;
    const angle = (i / 5) * Math.PI * 2;
    coin.position.set(Math.cos(angle) * 4.2, (i % 2) * 0.6, Math.sin(angle) * 4.2);
    coinOrbit.add(coin);
  }
  group.add(coinOrbit);
  animatedObjects.push({ mesh: coinOrbit, type: 'spinY', speed: 1.5, baseY: 8.2 });

  enableShadow(group);
  registerStationHitbox('finance', group, 7.0, 11);
  scene.add(group);
}

// 5. NEO-TOKYO CYBER DOJO & MINI TOKYO TOWER ('apps' - Akihabara / Modern Japanese Tech Hub)
function buildAppsFactory() {
  const group = new THREE.Group();
  group.position.set(STATIONS.apps.pos.x, 0, STATIONS.apps.pos.z);

  const pad = new THREE.Mesh(new THREE.BoxGeometry(12.0, 0.6, 10.0), MATS.plazaCream);
  pad.position.y = 0.3;
  group.add(pad);

  // 2-Tier Modern Japanese Tech Dojo
  const baseBuilding = new THREE.Mesh(new THREE.BoxGeometry(7.8, 3.8, 6.2), MATS.woodDark);
  baseBuilding.position.set(-1.2, 2.5, 0);
  group.add(baseBuilding);

  const glassStrip = new THREE.Mesh(new THREE.BoxGeometry(8.0, 1.4, 6.4), MATS.neonCyan);
  glassStrip.position.set(-1.2, 2.6, 0);
  group.add(glassStrip);

  const roof1 = createJapaneseRoof(9.4, 7.8, 1.3, MATS.kawaraTeal, true);
  roof1.position.set(-1.2, 4.3, 0);
  group.add(roof1);

  const topBuilding = new THREE.Mesh(new THREE.BoxGeometry(5.4, 2.4, 4.4), MATS.shikkuiWhite);
  topBuilding.position.set(-1.2, 6.5, 0);
  group.add(topBuilding);

  const roof2 = createJapaneseRoof(7.0, 5.8, 1.3, MATS.kawaraTeal, true);
  roof2.position.set(-1.2, 7.6, 0);
  group.add(roof2);

  // Vertical Glowing Neon Kanban Signs on Facade
  const signPink = new THREE.Mesh(new THREE.BoxGeometry(0.55, 3.2, 0.25), MATS.neonPink);
  signPink.position.set(-3.8, 4.8, 3.3);
  const signCyan = new THREE.Mesh(new THREE.BoxGeometry(0.55, 2.8, 0.25), MATS.neonCyan);
  signCyan.position.set(1.4, 4.5, 3.3);
  group.add(signPink, signCyan);

  // Iconic Red & White Tokyo Tower Spire next to Tech Building
  const towerGroup = new THREE.Group();
  towerGroup.position.set(3.6, 0.6, 1.5);
  const tSegs = [
    { rB: 1.5, rT: 1.05, h: 2.4, y: 1.2, mat: MATS.vermilion },
    { rB: 1.05, rT: 0.75, h: 2.2, y: 3.5, mat: MATS.white },
    { rB: 0.75, rT: 0.45, h: 2.2, y: 5.7, mat: MATS.vermilion },
    { rB: 0.45, rT: 0.22, h: 2.0, y: 7.8, mat: MATS.white },
    { rB: 0.22, rT: 0.05, h: 2.2, y: 9.9, mat: MATS.vermilion }
  ];
  tSegs.forEach(s => {
    const seg = new THREE.Mesh(new THREE.CylinderGeometry(s.rT, s.rB, s.h, 4), s.mat);
    seg.rotation.y = Math.PI / 4;
    seg.position.y = s.y;
    towerGroup.add(seg);
  });
  // Observation deck
  const obsDeck = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.65, 2.1), MATS.shojiGlow);
  obsDeck.position.y = 3.2;
  towerGroup.add(obsDeck);
  group.add(towerGroup);

  // Floating Holo Core above Roof
  const holo = new THREE.Mesh(new THREE.OctahedronGeometry(1.1, 0), MATS.neonCyan);
  holo.position.set(-1.2, 10.3, 0);
  group.add(holo);
  animatedObjects.push({ mesh: holo, type: 'spinY', speed: 2.4, baseY: 10.3 });

  enableShadow(group);
  registerStationHitbox('apps', group, 7.2, 12);
  scene.add(group);
}

// 6. ZEN GARDEN, KOI POND & DARUMA PAVILION ('goals' - Japanese Zen Sanctuary)
function buildGoalsGarden() {
  const group = new THREE.Group();
  group.position.set(STATIONS.goals.pos.x, 0, STATIONS.goals.pos.z);

  // Raked Zen Sand Courtyard
  const pad = new THREE.Mesh(new THREE.BoxGeometry(10.5, 0.6, 10.5), MATS.plazaCream);
  pad.position.y = 0.3;
  group.add(pad);

  // Japanese Azumaya Wooden Pavilion
  const pavGroup = new THREE.Group();
  pavGroup.position.set(-1.8, 0.6, -1.5);
  const floor = new THREE.Mesh(new THREE.BoxGeometry(5.0, 0.35, 5.0), MATS.woodWarm);
  floor.position.y = 0.2;
  pavGroup.add(floor);

  const pCols = [[-2.1, -2.1], [2.1, -2.1], [-2.1, 2.1], [2.1, 2.1]];
  pCols.forEach(([cx, cz]) => {
    const c = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 3.0, 12), MATS.woodDark);
    c.position.set(cx, 1.7, cz);
    pavGroup.add(c);
  });

  const pavRoof = createJapaneseRoof(6.4, 6.4, 1.5, MATS.kawaraRoof, true);
  pavRoof.position.y = 3.1;
  pavGroup.add(pavRoof);

  // Giant Red Daruma Doll inside Pavilion (Japanese Goal Setting Symbol!)
  const daruma = new THREE.Group();
  daruma.position.set(0, 1.4, 0);
  const dBody = new THREE.Mesh(new THREE.SphereGeometry(1.15, 20, 20), MATS.vermilion);
  dBody.scale.y = 1.15;
  const dFace = new THREE.Mesh(new THREE.SphereGeometry(0.75, 16, 16), MATS.plazaCream);
  dFace.position.set(0, 0.25, 0.55);
  const dGold = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.1, 8, 20), MATS.goldTrim);
  dGold.position.set(0, -0.2, 0.45);
  daruma.add(dBody, dFace, dGold);
  pavGroup.add(daruma);
  group.add(pavGroup);

  // Koi Pond with Swimming Red & White Koi Fish!
  const pondGroup = new THREE.Group();
  pondGroup.position.set(2.2, 0.62, 2.2);
  const pondRim = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.8, 0.3, 24), MATS.stoneWall);
  const pondWater = new THREE.Mesh(new THREE.CylinderGeometry(2.35, 2.35, 0.34, 24), MATS.waterpond);
  pondGroup.add(pondRim, pondWater);

  // Swimming Koi Fish Orbiting inside Pond
  const koiOrbit = new THREE.Group();
  koiOrbit.position.y = 0.22;
  for (let k = 0; k < 3; k++) {
    const koi = new THREE.Mesh(
      new THREE.ConeGeometry(0.2, 0.75, 8),
      k % 2 === 0 ? MATS.vermilion : MATS.goldTrim
    );
    koi.rotation.x = Math.PI / 2;
    const angle = (k / 3) * Math.PI * 2;
    koi.position.set(Math.cos(angle) * 1.3, 0, Math.sin(angle) * 1.3);
    koi.rotation.z = -angle;
    koiOrbit.add(koi);
  }
  pondGroup.add(koiOrbit);
  animatedObjects.push({ mesh: koiOrbit, type: 'spinY', speed: -1.4 });
  group.add(pondGroup);

  // Stone Lantern & Sakura Tree in Zen Garden
  const lantern = createStoneLantern(0.95);
  lantern.position.set(3.2, 0.6, -2.8);
  const zenSakura = createSakuraTree(1.1);
  zenSakura.position.set(-3.2, 0.6, 3.0);
  group.add(lantern, zenSakura);

  enableShadow(group);
  registerStationHitbox('goals', group, 6.8, 10);
  scene.add(group);
}

// ============================================================================
// SHINKANSEN BULLET TRAIN, JAPANESE KIMONO CHIBI WORKERS & SAKURA SCENERY
// ============================================================================
const trackWaypoints = [
  new THREE.Vector3(-18, 0.25, -5),
  new THREE.Vector3(-12, 0.25, 0),
  new THREE.Vector3(-5, 0.25, 5),
  new THREE.Vector3(3, 0.25, 7),
  new THREE.Vector3(14, 0.25, 4),
  new THREE.Vector3(20, 0.25, -2),
  new THREE.Vector3(16, 0.25, -12),
  new THREE.Vector3(4, 0.25, -18),
  new THREE.Vector3(-10, 0.25, -15)
];
const trackCurve = new THREE.CatmullRomCurve3(trackWaypoints, true);

function buildRailwaySystem() {
  const railGroup = new THREE.Group();
  const points = trackCurve.getSpacedPoints(160);

  for (let i = 0; i < points.length; i++) {
    const pt = points[i];
    const tangent = trackCurve.getTangent(i / points.length);
    const sleeper = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.14, 0.42), MATS.railWood);
    sleeper.position.copy(pt);
    sleeper.lookAt(pt.clone().add(tangent));
    sleeper.receiveShadow = true;
    railGroup.add(sleeper);
  }

  const tubeGeo = new THREE.TubeGeometry(trackCurve, 160, 0.14, 8, true);
  const tubeMesh = new THREE.Mesh(tubeGeo, MATS.railSteel);
  tubeMesh.position.y = 0.08;
  railGroup.add(tubeMesh);

  scene.add(railGroup);
}

// Shinkansen High-Speed Bullet Train (2 Cars: Lead Nose Car + Passenger Car)
let trainMesh;
let carriageMesh;
let trainProgress = 0;

function buildTrain() {
  trainMesh = new THREE.Group();

  // Main Shinkansen White Aerodynamic Body
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.85, 1.35, 3.6), MATS.white);
  body.position.y = 0.95;
  trainMesh.add(body);

  // Iconic Blue/Teal Racing Stripe along Shinkansen side
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.28, 3.65), MATS.kawaraTeal);
  stripe.position.y = 0.78;
  trainMesh.add(stripe);

  // Sleek Bullet Nose Cone at front (+Z)
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.95, 2.2, 16), MATS.white);
  nose.rotation.x = Math.PI / 2;
  nose.position.set(0, 0.72, 2.8);
  trainMesh.add(nose);

  // Cockpit Windshield & Illuminated Passenger Windows
  const cockpit = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.42, 0.9), MATS.kawaraRoof);
  cockpit.position.set(0, 1.35, 1.45);
  cockpit.rotation.x = 0.35;
  const winStrip = new THREE.Mesh(new THREE.BoxGeometry(1.92, 0.38, 2.4), MATS.shojiGlow);
  winStrip.position.set(0, 1.18, -0.2);
  trainMesh.add(cockpit, winStrip);

  // 2nd Passenger Carriage following behind
  carriageMesh = new THREE.Group();
  const cBody = new THREE.Mesh(new THREE.BoxGeometry(1.85, 1.35, 3.4), MATS.white);
  cBody.position.y = 0.95;
  const cStripe = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.28, 3.45), MATS.kawaraTeal);
  cStripe.position.y = 0.78;
  const cWin = new THREE.Mesh(new THREE.BoxGeometry(1.92, 0.38, 2.6), MATS.shojiGlow);
  cWin.position.y = 1.18;
  carriageMesh.add(cBody, cStripe, cWin);

  enableShadow(trainMesh);
  enableShadow(carriageMesh);
  scene.add(trainMesh);
  scene.add(carriageMesh);
}

// Japanese Kimono / Samurai / Miko Chibi Workers
const workers = [];
const WORKER_CONFIGS = [
  { name: 'Võ sĩ Task (Samurai)', hairColor: 0x1e1e24, kimonoColor: 0x2b4c7e, obiColor: 0xf0c44d, hat: 'chonmage', from: 'hub', to: 'tasks', speed: 0.22 },
  { name: 'Vu nữ Lịch trình (Miko)', hairColor: 0x1e1e24, kimonoColor: 0xd93829, obiColor: 0xffffff, hat: 'ribbon', from: 'tasks', to: 'schedule', speed: 0.18 },
  { name: 'Thương nhân Ngân khố', hairColor: 0x3d261c, kimonoColor: 0x2d6a4f, obiColor: 0xf0c44d, hat: 'kasa', from: 'hub', to: 'finance', speed: 0.20 },
  { name: 'Kỹ sư Neo-Tokyo', hairColor: 0x1b4965, kimonoColor: 0x3b6978, obiColor: 0x00f5d4, hat: 'chonmage', from: 'apps', to: 'hub', speed: 0.19 },
  { name: 'Thiền sư Mục tiêu', hairColor: 0x4a2c2a, kimonoColor: 0xe07a5f, obiColor: 0xf7f1e5, hat: 'kasa', from: 'schedule', to: 'goals', speed: 0.24 }
];

function buildChibiWorkers() {
  WORKER_CONFIGS.forEach((cfg, idx) => {
    const wGroup = new THREE.Group();

    // Kimono Robe Body
    const kimono = new THREE.Mesh(
      new THREE.CylinderGeometry(0.38, 0.62, 1.25, 16),
      new THREE.MeshStandardMaterial({ color: cfg.kimonoColor, roughness: 0.6 })
    );
    kimono.position.y = 0.72;
    wGroup.add(kimono);

    // Obi Sash Belt around waist
    const obi = new THREE.Mesh(
      new THREE.CylinderGeometry(0.49, 0.52, 0.32, 16),
      new THREE.MeshStandardMaterial({ color: cfg.obiColor, roughness: 0.5 })
    );
    obi.position.y = 0.78;
    wGroup.add(obi);

    // Cute Oversized Head
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.66, 20, 20),
      new THREE.MeshStandardMaterial({ color: 0xffe5d9, roughness: 0.5 })
    );
    head.position.y = 1.85;
    wGroup.add(head);

    // Hair Cap
    const hair = new THREE.Mesh(
      new THREE.SphereGeometry(0.7, 20, 20, 0, Math.PI * 2, 0, Math.PI * 0.56),
      new THREE.MeshStandardMaterial({ color: cfg.hairColor, roughness: 0.7 })
    );
    hair.position.y = 1.9;
    wGroup.add(hair);

    // Japanese Topknot (Chonmage) or Straw Hat (Kasa)
    if (cfg.hat === 'kasa') {
      const kasa = new THREE.Mesh(new THREE.ConeGeometry(1.05, 0.48, 16), MATS.goldTrim);
      kasa.position.y = 2.55;
      wGroup.add(kasa);
    } else {
      const bun = new THREE.Mesh(
        new THREE.SphereGeometry(0.26, 12, 12),
        new THREE.MeshStandardMaterial({ color: cfg.hairColor })
      );
      bun.position.set(0, 2.58, -0.15);
      wGroup.add(bun);
    }

    enableShadow(wGroup);
    scene.add(wGroup);

    const labelEl = document.createElement('div');
    labelEl.className = 'worker-label';
    labelEl.textContent = cfg.name;
    labelsContainer.appendChild(labelEl);

    const startPos = STATIONS[cfg.from].pos;
    const endPos = STATIONS[cfg.to].pos;

    workers.push({
      mesh: wGroup,
      labelEl,
      start: new THREE.Vector3(startPos.x, 0, startPos.z),
      end: new THREE.Vector3(endPos.x, 0, endPos.z),
      t: idx * 0.2,
      dir: 1,
      speed: cfg.speed
    });
  });
}

// Helper: Multi-layered Blooming Japanese Sakura Tree (🌸)
function createSakuraTree(scale = 1) {
  const tg = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.22 * scale, 0.38 * scale, 2.4 * scale, 10), MATS.woodDark);
  trunk.position.y = 1.2 * scale;
  tg.add(trunk);

  const puffs = [
    { x: 0, y: 2.8, z: 0, r: 1.45, mat: MATS.sakuraPink },
    { x: -0.9, y: 2.4, z: 0.5, r: 1.05, mat: MATS.sakuraLight },
    { x: 0.95, y: 2.5, z: -0.4, r: 1.1, mat: MATS.sakuraDeep },
    { x: 0.3, y: 3.3, z: 0.7, r: 0.95, mat: MATS.sakuraPink },
    { x: -0.5, y: 3.1, z: -0.7, r: 0.95, mat: MATS.sakuraLight }
  ];
  puffs.forEach(p => {
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(p.r * scale, 14, 14), p.mat);
    mesh.scale.y = 0.78;
    mesh.position.set(p.x * scale, p.y * scale, p.z * scale);
    tg.add(mesh);
  });
  return tg;
}

// Helper: Japanese Bamboo Cluster (🎋)
function createBambooCluster(scale = 1) {
  const bg = new THREE.Group();
  const offsets = [[-0.35, -0.2, 4.2], [0.3, -0.3, 4.8], [0, 0.35, 3.8], [-0.25, 0.3, 4.5]];
  offsets.forEach(([bx, bz, bh]) => {
    const stalk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.11 * scale, 0.14 * scale, bh * scale, 8),
      MATS.bambooGreen
    );
    stalk.position.set(bx * scale, (bh * 0.5) * scale, bz * scale);
    bg.add(stalk);
  });
  return bg;
}

// Falling Sakura Petals Particle System
const sakuraPetals = [];

function buildScenery() {
  // 1. Lush Sakura Trees around the Japanese Town
  const sakuraLocations = [
    { x: -29, z: -3, s: 1.35 },
    { x: -26, z: 8, s: 1.15 },
    { x: -12, z: -22, s: 1.4 },
    { x: 18, z: -21, s: 1.3 },
    { x: 26, z: -6, s: 1.45 },
    { x: 27, z: 6, s: 1.2 },
    { x: 11, z: 19, s: 1.15 },
    { x: 3, z: 22, s: 1.25 },
    { x: -9, z: 23, s: 1.3 },
    { x: 8, z: 1, s: 0.95 }
  ];
  sakuraLocations.forEach(loc => {
    const st = createSakuraTree(loc.s);
    st.position.set(loc.x, 0, loc.z);
    enableShadow(st);
    scene.add(st);
  });

  // 2. Bamboo Groves
  const bambooLocations = [
    { x: -28, z: 14, s: 1.1 },
    { x: -27, z: 22, s: 1.2 },
    { x: -14, z: 22, s: 1.0 },
    { x: 24, z: 17, s: 1.15 },
    { x: -27, z: -16, s: 1.2 }
  ];
  bambooLocations.forEach(loc => {
    const b = createBambooCluster(loc.s);
    b.position.set(loc.x, 0, loc.z);
    enableShadow(b);
    scene.add(b);
  });

  // 3. Roadside Japanese Stone Lanterns (Ishidoro) & Mini Torii Gates along pathways
  const lanternCoords = [
    [-8, 9], [2, 10], [11, 8], [14, -4], [-11, -6], [-15, 4]
  ];
  lanternCoords.forEach(([lx, lz]) => {
    const sl = createStoneLantern(0.85);
    sl.position.set(lx, 0, lz);
    enableShadow(sl);
    scene.add(sl);
  });

  // 4. 140 Floating & Falling 3D Sakura Petals drifting across the town
  const petalGeo = new THREE.PlaneGeometry(0.28, 0.22);
  const petalMat = new THREE.MeshBasicMaterial({
    color: 0xffb7c5,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.88
  });
  for (let i = 0; i < 140; i++) {
    const petal = new THREE.Mesh(petalGeo, petalMat);
    petal.position.set(
      (Math.random() - 0.5) * 68,
      2 + Math.random() * 22,
      (Math.random() - 0.5) * 60
    );
    petal.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    scene.add(petal);
    sakuraPetals.push({
      mesh: petal,
      speedY: 0.9 + Math.random() * 1.1,
      driftX: 0.4 + Math.random() * 0.6,
      phase: Math.random() * Math.PI * 2
    });
  }
}

// Coin Burst 3D Effect when adding income/expense or completing task
const bursts = [];
function spawnCelebrationBurst(stationId, colorHex = 0xf0c44d) {
  const st = STATIONS[stationId] || STATIONS.hub;
  for (let i = 0; i < 14; i++) {
    const p = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.45, 0),
      new THREE.MeshStandardMaterial({ color: colorHex, metalness: 0.35, roughness: 0.25 })
    );
    p.position.set(st.pos.x, 4.5, st.pos.z);
    const angle = (i / 14) * Math.PI * 2;
    const vel = new THREE.Vector3(
      Math.cos(angle) * (2.5 + Math.random() * 2.2),
      6.5 + Math.random() * 4,
      Math.sin(angle) * (2.5 + Math.random() * 2.2)
    );
    scene.add(p);
    bursts.push({ mesh: p, vel, life: 1.25 });
  }
}

// Build All 3D Objects
buildCastleHub();
buildTaskStation();
buildScheduleTower();
buildFinanceBakery();
buildAppsFactory();
buildGoalsGarden();
buildRailwaySystem();
buildTrain();
buildChibiWorkers();
buildScenery();

// ============================================================================
// 3D FLOATING HTML LABELS (PROJECTED FROM 3D COORDINATES)
// ============================================================================
const stationLabelEls = {};

function createStationLabels() {
  Object.values(STATIONS).forEach(st => {
    const wrapper = document.createElement('div');
    wrapper.className = 'world-label';
    wrapper.dataset.station = st.id;
    wrapper.innerHTML = `
      <div class="speech-bubble" id="bubble-${st.id}">${st.bubble}</div>
      <div class="station-badge">
        <span class="icon">${st.icon}</span>
        <span class="name">${st.shortName}</span>
        <div class="mini-progress">
          <div class="mini-progress-bar" id="bar-${st.id}" style="width: 80%"></div>
        </div>
        <span class="pct" id="pct-${st.id}">80%</span>
      </div>
      <div class="station-pointer"></div>
    `;
    wrapper.addEventListener('click', (e) => {
      e.stopPropagation();
      selectStation(st.id, true);
    });
    labelsContainer.appendChild(wrapper);
    stationLabelEls[st.id] = wrapper;
  });
}

createStationLabels();

function getStationMetric(stationId) {
  if (stationId === 'tasks') {
    const all = [...state.tasks.day, ...state.tasks.week, ...state.tasks.month];
    const done = all.filter(t => t.done).length;
    const pct = all.length ? Math.round((done / all.length) * 100) : 100;
    const pendingDay = state.tasks.day.filter(t => !t.done);
    const bubble = pendingDay.length > 0
      ? `Đang làm: "${pendingDay[0].title}"`
      : 'Tuyệt vời! Đã xong hết task hôm nay!';
    return { pct, label: `${pct}%`, bubble };
  }
  if (stationId === 'schedule') {
    const done = state.schedule.filter(s => s.status === 'Đã xong').length;
    const pct = state.schedule.length ? Math.round((done / state.schedule.length) * 100) : 100;
    const current = state.schedule.find(s => s.status === 'Đang diễn ra') || state.schedule[0];
    return {
      pct: Math.max(pct, 40),
      label: `${ state.schedule.length } ca`,
      bubble: current ? `⏰ ${current.time}: ${current.title}` : 'Lịch trống'
    };
  }
  if (stationId === 'finance') {
    const expenses = state.finance.transactions
      .filter(t => t.type === 'expense')
      .reduce((s, t) => s + Number(t.amount), 0);
    const budget = state.finance.monthlyBudget || 1;
    const usedPct = Math.min(100, Math.round((expenses / budget) * 100));
    const safePct = Math.max(0, 100 - usedPct);
    return {
      pct: safePct,
      label: `${usedPct}% chi`,
      bubble: `Đã chi ${formatVND(expenses)} / Hạn mức ${formatVND(budget)}`
    };
  }
  if (stationId === 'apps') {
    const avg = state.apps.length
      ? Math.round(state.apps.reduce((s, a) => s + Number(a.progress), 0) / state.apps.length)
      : 100;
    return {
      pct: avg,
      label: `${state.apps.length} App`,
      bubble: `${state.apps.filter(a => a.status === 'Đang chạy').length} App đang chạy trực tuyến`
    };
  }
  if (stationId === 'goals') {
    const done = state.goals.filter(g => g.doneToday).length;
    const pct = state.goals.length ? Math.round((done / state.goals.length) * 100) : 100;
    return {
      pct,
      label: `${done}/${state.goals.length}`,
      bubble: `Duy trì kỷ luật: ${done}/${state.goals.length} thói quen hôm nay`
    };
  }
  // Hub overall score
  const allTasks = [...state.tasks.day, ...state.tasks.week, ...state.tasks.month];
  const taskPct = allTasks.length ? Math.round((allTasks.filter(t => t.done).length / allTasks.length) * 100) : 100;
  return {
    pct: taskPct,
    label: `${taskPct}%`,
    bubble: 'mô hình hoá · hệ thống vận hành 3D'
  };
}

function updateWorldBadges() {
  Object.keys(STATIONS).forEach(id => {
    const m = getStationMetric(id);
    const bar = document.getElementById(`bar-${id}`);
    const pct = document.getElementById(`pct-${id}`);
    const bubble = document.getElementById(`bubble-${id}`);
    if (bar) bar.style.width = `${m.pct}%`;
    if (pct) pct.textContent = m.label;
    if (bubble) bubble.textContent = m.bubble;

    const wrapper = stationLabelEls[id];
    if (wrapper) {
      wrapper.classList.toggle('active', state.activeStation === id);
    }
    if (activeRingMeshes[id]) {
      activeRingMeshes[id].material.opacity = state.activeStation === id ? 0.75 : 0.0;
    }
  });
}

function updateTopSummary() {
  const allTasks = [...state.tasks.day, ...state.tasks.week, ...state.tasks.month];
  const doneCount = allTasks.filter(t => t.done).length;
  document.getElementById('top-stat-tasks').textContent = `${doneCount}/${allTasks.length} task xong`;

  const income = state.finance.transactions
    .filter(t => t.type === 'income')
    .reduce((s, t) => s + Number(t.amount), 0);
  const expense = state.finance.transactions
    .filter(t => t.type === 'expense')
    .reduce((s, t) => s + Number(t.amount), 0);
  const balance = income - expense;
  document.getElementById('top-stat-budget').textContent = `Số dư: ${formatVND(balance)}`;
}

// ============================================================================
// CAMERA SMOOTH FLY-TO & INTERACTION
// ============================================================================
let cameraLerp = null;
let autoRotate = false;
let simRunning = true;
let followTrain = false;

function flyToStation(stationId) {
  const st = STATIONS[stationId];
  if (!st) return;
  followTrain = false;
  document.getElementById('btn-follow-train').classList.remove('active');

  cameraLerp = {
    targetPos: new THREE.Vector3(
      st.pos.x + st.camOffset.x * 0.4,
      st.camOffset.y,
      st.pos.z + st.camOffset.z
    ),
    targetLook: new THREE.Vector3(st.pos.x, 2.5, st.pos.z),
    alpha: 0
  };
}

function selectStation(stationId, fly = true) {
  state.activeStation = stationId;
  saveState();
  renderInspector();

  const card = document.getElementById('inspector-card');
  card.classList.remove('collapsed');

  document.querySelectorAll('.dock-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.station === stationId);
  });

  if (fly) {
    flyToStation(stationId);
  }
}

// Raycaster for 3D Building Clicks
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let pointerDownPos = { x: 0, y: 0 };

renderer.domElement.addEventListener('pointerdown', e => {
  pointerDownPos = { x: e.clientX, y: e.clientY };
});

renderer.domElement.addEventListener('pointerup', e => {
  const dist = Math.hypot(e.clientX - pointerDownPos.x, e.clientY - pointerDownPos.y);
  if (dist > 6) return; // Was dragging camera

  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(stationMeshes, false);
  if (intersects.length > 0) {
    const stationId = intersects[0].object.userData.stationId;
    if (stationId) {
      selectStation(stationId, true);
    }
  }
});

// ============================================================================
// INSPECTOR UI RENDERING FOR ALL 6 MANAGEMENT MODULES
// ============================================================================
function renderInspector() {
  const st = STATIONS[state.activeStation] || STATIONS.hub;
  document.getElementById('insp-avatar').textContent = st.icon;
  document.getElementById('insp-title').textContent = st.name;
  document.getElementById('insp-quote').textContent = `"${st.quote}"`;

  const body = document.getElementById('insp-body');

  if (st.id === 'tasks') {
    renderTasksPanel(body);
  } else if (st.id === 'schedule') {
    renderSchedulePanel(body);
  } else if (st.id === 'finance') {
    renderFinancePanel(body);
  } else if (st.id === 'apps') {
    renderAppsPanel(body);
  } else if (st.id === 'goals') {
    renderGoalsPanel(body);
  } else {
    renderHubOverviewPanel(body);
  }
}

// 1. HUB OVERVIEW PANEL
function renderHubOverviewPanel(body) {
  const allTasks = [...state.tasks.day, ...state.tasks.week, ...state.tasks.month];
  const doneTasks = allTasks.filter(t => t.done).length;

  const income = state.finance.transactions
    .filter(t => t.type === 'income')
    .reduce((s, t) => s + Number(t.amount), 0);
  const expense = state.finance.transactions
    .filter(t => t.type === 'expense')
    .reduce((s, t) => s + Number(t.amount), 0);

  body.innerHTML = `
    <div class="metric-grid">
      <div class="metric-box">
        <div class="label">Tổng tiến độ Task</div>
        <div class="val">${doneTasks} / ${allTasks.length}</div>
        <div class="sub">Ngày · Tuần · Tháng</div>
      </div>
      <div class="metric-box">
        <div class="label">Số dư khả dụng</div>
        <div class="val">${formatVND(income - expense)}</div>
        <div class="sub">Thu: ${formatVND(income)}</div>
      </div>
      <div class="metric-box">
        <div class="label">App & Hệ thống</div>
        <div class="val">${state.apps.length} App</div>
        <div class="sub">${state.apps.filter(a => a.status === 'Đang chạy').length} đang chạy</div>
      </div>
      <div class="metric-box">
        <div class="label">Lịch trình hôm nay</div>
        <div class="val">${state.schedule.length} khung giờ</div>
        <div class="sub">Đang bám sát lịch</div>
      </div>
    </div>

    <div style="font-size:12px; font-weight:800; color:var(--maroon-main); margin: 8px 0 6px;">
      ĐIỀU HƯỚNG NHANH CÁC TRẠM 3D:
    </div>
    <div class="item-list">
      ${Object.values(STATIONS).filter(s => s.id !== 'hub').map(s => {
        const m = getStationMetric(s.id);
        return `
          <div class="list-item" style="cursor:pointer" onclick="window.selectStation('${s.id}', true)">
            <div class="item-left">
              <span style="font-size:20px">${s.icon}</span>
              <div class="item-info">
                <div class="item-title">${s.name}</div>
                <div class="item-meta">${m.bubble}</div>
              </div>
            </div>
            <span class="tag-badge green">${m.label}</span>
          </div>
        `;
      }).join('')}
    </div>

    <div style="font-size:11px; font-weight:800; color:var(--text-muted); margin-top:8px;">
      KỸ NĂNG / LỆNH NHANH (QUICK ACTIONS):
    </div>
    <div class="skill-tags">
      <span class="skill-chip" onclick="window.selectStation('tasks', true)">/task-ngay-tuan-thang</span>
      <span class="skill-chip" onclick="window.selectStation('finance', true)">/quan-ly-luong-chi-tieu</span>
      <span class="skill-chip" onclick="window.selectStation('schedule', true)">/lich-lam-viec</span>
      <span class="skill-chip" onclick="window.selectStation('apps', true)">/quan-ly-app</span>
      <span class="skill-chip" onclick="window.resetDemoData()">/reset-du-lieu-mau</span>
    </div>
  `;
}

// 2. TASKS PANEL (DAY / WEEK / MONTH)
function renderTasksPanel(body) {
  const tab = state.taskSubTab || 'day';
  const list = state.tasks[tab] || [];
  const doneCount = list.filter(t => t.done).length;

  body.innerHTML = `
    <div class="sub-tabs">
      <button class="sub-tab ${tab === 'day' ? 'active' : ''}" onclick="window.setTaskTab('day')">
        Hôm nay (${state.tasks.day.length})
      </button>
      <button class="sub-tab ${tab === 'week' ? 'active' : ''}" onclick="window.setTaskTab('week')">
        Tuần (${state.tasks.week.length})
      </button>
      <button class="sub-tab ${tab === 'month' ? 'active' : ''}" onclick="window.setTaskTab('month')">
        Tháng (${state.tasks.month.length})
      </button>
    </div>

    <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:700; margin-bottom:8px;">
      <span>Tiến độ hoàn thành:</span>
      <span style="color:var(--accent-green)">${doneCount}/${list.length} task</span>
    </div>

    <div class="item-list">
      ${list.map(t => {
        const badgeColor = t.priority === 'Cao' ? 'red' : (t.priority === 'Trung bình' ? 'orange' : 'green');
        return `
          <div class="list-item ${t.done ? 'done' : ''}">
            <div class="item-left">
              <input type="checkbox" class="item-check" ${t.done ? 'checked' : ''}
                onchange="window.toggleTask('${tab}', '${t.id}')" />
              <div class="item-info">
                <div class="item-title">${t.title}</div>
                <div class="item-meta">
                  <span class="tag-badge ${badgeColor}">${t.priority}</span>
                  <span>🕒 ${t.time}</span>
                </div>
              </div>
            </div>
            <button class="delete-btn" onclick="window.deleteTask('${tab}', '${t.id}')" title="Xóa">✕</button>
          </div>
        `;
      }).join('')}
    </div>

    <form class="add-form" onsubmit="window.addTask(event, '${tab}')">
      <div class="add-form-title">+ Thêm công việc mới (${tab === 'day' ? 'Ngày' : tab === 'week' ? 'Tuần' : 'Tháng'})</div>
      <input class="form-input" name="title" placeholder="Nhập tên công việc cần làm..." required />
      <div class="form-row">
        <select class="form-select" name="priority">
          <option value="Cao">Ưu tiên: Cao</option>
          <option value="Trung bình" selected>Ưu tiên: Trung bình</option>
          <option value="Thấp">Ưu tiên: Thấp</option>
        </select>
        <input class="form-input" name="time" placeholder="Giờ / Hạn (VD: 15:00)" value="Hôm nay" />
      </div>
      <button type="submit" class="btn-primary">Thêm vào Trạm Task 3D</button>
    </form>
  `;
}

// 3. SCHEDULE & WORK CALENDAR PANEL
function renderSchedulePanel(body) {
  body.innerHTML = `
    <div class="item-list">
      ${state.schedule.map(s => {
        const stClass = s.status === 'Đã xong' ? 'green' : (s.status === 'Đang diễn ra' ? 'red' : 'orange');
        return `
          <div class="list-item ${s.status === 'Đã xong' ? 'done' : ''}">
            <div class="item-left">
              <input type="checkbox" class="item-check" ${s.status === 'Đã xong' ? 'checked' : ''}
                onchange="window.toggleSchedule('${s.id}')" />
              <div class="item-info">
                <div class="item-title">${s.title}</div>
                <div class="item-meta">
                  <span class="tag-badge">${s.time}</span>
                  <span class="tag-badge ${stClass}">${s.status}</span>
                </div>
              </div>
            </div>
            <button class="delete-btn" onclick="window.deleteSchedule('${s.id}')">✕</button>
          </div>
        `;
      }).join('')}
    </div>

    <form class="add-form" onsubmit="window.addSchedule(event)">
      <div class="add-form-title">+ Thêm khung giờ làm việc / Lịch hẹn</div>
      <input class="form-input" name="title" placeholder="Nội dung công việc / cuộc họp..." required />
      <div class="form-row">
        <input class="form-input" name="time" placeholder="Khung giờ (VD: 10:00 - 11:30)" required />
        <select class="form-select" name="status">
          <option value="Sắp tới">Sắp tới</option>
          <option value="Đang diễn ra">Đang diễn ra</option>
          <option value="Đã xong">Đã xong</option>
        </select>
      </div>
      <button type="submit" class="btn-primary">Thêm Lịch Làm Việc</button>
    </form>
  `;
}

// 4. FINANCE, BUDGET & SALARY PANEL
function renderFinancePanel(body) {
  const income = state.finance.transactions
    .filter(t => t.type === 'income')
    .reduce((s, t) => s + Number(t.amount), 0);
  const expense = state.finance.transactions
    .filter(t => t.type === 'expense')
    .reduce((s, t) => s + Number(t.amount), 0);
  const balance = income - expense;
  const budget = state.finance.monthlyBudget || 1;
  const budgetPct = Math.min(100, Math.round((expense / budget) * 100));

  body.innerHTML = `
    <div class="metric-grid">
      <div class="metric-box">
        <div class="label">Tổng Thu Nhập / Lương</div>
        <div class="val" style="color:var(--accent-green)">+${formatVND(income)}</div>
        <div class="sub">Tháng hiện tại</div>
      </div>
      <div class="metric-box">
        <div class="label">Tổng Chi Tiêu</div>
        <div class="val" style="color:var(--accent-red)">-${formatVND(expense)}</div>
        <div class="sub">${budgetPct}% hạn mức ngân sách</div>
      </div>
    </div>

    <div class="metric-box" style="margin-bottom:12px;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="label">Số dư còn lại: <strong style="color:var(--maroon-main); font-size:15px">${formatVND(balance)}</strong></span>
        <span class="tag-badge ${budgetPct > 85 ? 'red' : 'green'}">Hạn mức chi: ${formatVND(budget)}</span>
      </div>
      <div class="mini-progress" style="width:100%; height:8px; margin-top:8px;">
        <div class="mini-progress-bar" style="width:${budgetPct}%; background:${budgetPct > 85 ? '#d9434e' : '#2eaa68'}"></div>
      </div>
    </div>

    <div class="item-list">
      ${state.finance.transactions.map(t => `
        <div class="list-item">
          <div class="item-left">
            <span style="font-size:18px">${t.type === 'income' ? '💰' : '💸'}</span>
            <div class="item-info">
              <div class="item-title">${t.title}</div>
              <div class="item-meta">
                <span class="tag-badge ${t.type === 'income' ? 'green' : 'orange'}">${t.category}</span>
                <span>📅 ${t.date}</span>
              </div>
            </div>
          </div>
          <div style="text-align:right; display:flex; align-items:center; gap:6px;">
            <span style="font-size:12px; font-weight:800; color:${t.type === 'income' ? 'var(--accent-green)' : 'var(--accent-red)'}">
              ${t.type === 'income' ? '+' : '-'}${formatVND(t.amount)}
            </span>
            <button class="delete-btn" onclick="window.deleteTransaction('${t.id}')">✕</button>
          </div>
        </div>
      `).join('')}
    </div>

    <form class="add-form" onsubmit="window.addTransaction(event)">
      <div class="add-form-title">+ Ghi nhận Lương / Thu nhập / Chi tiêu</div>
      <div class="form-row">
        <select class="form-select" name="type">
          <option value="expense">💸 Khoản Chi tiêu</option>
          <option value="income">💰 Lương / Thu nhập</option>
        </select>
        <input class="form-input" name="category" placeholder="Danh mục (Ăn uống, Lương...)" required />
      </div>
      <input class="form-input" name="title" placeholder="Diễn giải khoản thu/chi..." required />
      <div class="form-row">
        <input class="form-input" type="number" name="amount" placeholder="Số tiền (VNĐ) VD: 500000" required />
        <button type="submit" class="btn-primary">Lưu</button>
      </div>
    </form>
  `;
}

// 5. APPS & SYSTEM MANAGEMENT PANEL
function renderAppsPanel(body) {
  body.innerHTML = `
    <div class="item-list">
      ${state.apps.map(a => {
        const badgeClass = a.status === 'Đang chạy' ? 'green' : (a.status === 'Đang code' ? 'orange' : 'red');
        return `
          <div class="list-item">
            <div class="item-left">
              <span style="font-size:20px">📦</span>
              <div class="item-info">
                <div class="item-title">${a.name}</div>
                <div class="item-meta">
                  <span class="tag-badge ${badgeClass}" style="cursor:pointer" onclick="window.cycleAppStatus('${a.id}')" title="Bấm để đổi trạng thái">${a.status}</span>
                  <span>${a.tech}</span>
                  <span>• ${a.progress}%</span>
                </div>
              </div>
            </div>
            <button class="delete-btn" onclick="window.deleteApp('${a.id}')">✕</button>
          </div>
        `;
      }).join('')}
    </div>

    <form class="add-form" onsubmit="window.addApp(event)">
      <div class="add-form-title">+ Thêm App / Dự án vào Hệ thống</div>
      <input class="form-input" name="name" placeholder="Tên App / Dự án..." required />
      <div class="form-row">
        <input class="form-input" name="tech" placeholder="Công nghệ (Web, Desktop, AI...)" required />
        <select class="form-select" name="status">
          <option value="Đang chạy">Đang chạy</option>
          <option value="Đang code">Đang code</option>
          <option value="Ý tưởng">Ý tưởng</option>
        </select>
      </div>
      <button type="submit" class="btn-primary">Triển khai Trạm App</button>
    </form>
  `;
}

// 6. GOALS & HABITS PANEL
function renderGoalsPanel(body) {
  body.innerHTML = `
    <div class="item-list">
      ${state.goals.map(g => `
        <div class="list-item ${g.doneToday ? 'done' : ''}">
          <div class="item-left">
            <input type="checkbox" class="item-check" ${g.doneToday ? 'checked' : ''}
              onchange="window.toggleGoal('${g.id}')" />
            <div class="item-info">
              <div class="item-title">${g.title}</div>
              <div class="item-meta">
                <span class="tag-badge green">🔥 Chuỗi ${g.streak} ngày</span>
                <span>Mục tiêu: ${g.target} ngày</span>
              </div>
            </div>
          </div>
          <button class="delete-btn" onclick="window.deleteGoal('${g.id}')">✕</button>
        </div>
      `).join('')}
    </div>

    <form class="add-form" onsubmit="window.addGoal(event)">
      <div class="add-form-title">+ Thêm Mục tiêu / Thói quen mới</div>
      <input class="form-input" name="title" placeholder="Tên mục tiêu / thói quen..." required />
      <button type="submit" class="btn-primary">Thêm Mục Tiêu</button>
    </form>
  `;
}

// ============================================================================
// GLOBAL WINDOW HANDLERS FOR FORMS & ACTIONS
// ============================================================================
window.selectStation = selectStation;

window.setTaskTab = function(tab) {
  state.taskSubTab = tab;
  saveState();
  renderInspector();
};

window.toggleTask = function(tab, id) {
  const item = state.tasks[tab].find(t => t.id === id);
  if (item) {
    item.done = !item.done;
    if (item.done) {
      spawnCelebrationBurst('tasks', 0x2eaa68);
      showToast(`✅ Hoàn thành: ${item.title}`);
    }
    saveState({ station: 'tasks', msg: `Cập nhật task: ${item.title}` });
    renderInspector();
  }
};

window.deleteTask = function(tab, id) {
  state.tasks[tab] = state.tasks[tab].filter(t => t.id !== id);
  saveState({ station: 'tasks', msg: 'Đã xóa 1 task' });
  renderInspector();
};

window.addTask = function(e, tab) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const title = fd.get('title');
  state.tasks[tab].unshift({
    id: 't_' + Date.now(),
    title,
    priority: fd.get('priority'),
    time: fd.get('time') || 'Hôm nay',
    done: false
  });
  spawnCelebrationBurst('tasks', 0x9b5de5);
  showToast('📋 Đã thêm công việc mới vào Trạm Task 3D!');
  saveState({ station: 'tasks', msg: `Thêm task mới: ${title}` });
  renderInspector();
};

window.toggleSchedule = function(id) {
  const item = state.schedule.find(s => s.id === id);
  if (item) {
    item.status = item.status === 'Đã xong' ? 'Đang diễn ra' : 'Đã xong';
    if (item.status === 'Đã xong') spawnCelebrationBurst('schedule', 0xd67c3b);
    saveState({ station: 'schedule', msg: `Cập nhật lịch: ${item.title}` });
    renderInspector();
  }
};

window.deleteSchedule = function(id) {
  state.schedule = state.schedule.filter(s => s.id !== id);
  saveState({ station: 'schedule', msg: 'Đã xóa 1 lịch trình' });
  renderInspector();
};

window.addSchedule = function(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const title = fd.get('title');
  state.schedule.push({
    id: 's_' + Date.now(),
    title,
    time: fd.get('time'),
    status: fd.get('status')
  });
  spawnCelebrationBurst('schedule', 0xd67c3b);
  showToast('🥕 Đã cập nhật Lịch làm việc!');
  saveState({ station: 'schedule', msg: `Thêm lịch: ${title}` });
  renderInspector();
};

window.addTransaction = function(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const now = new Date();
  const dateStr = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}`;
  const type = fd.get('type');
  const amount = Number(fd.get('amount'));
  const title = fd.get('title');

  state.finance.transactions.unshift({
    id: 'f_' + Date.now(),
    type,
    category: fd.get('category'),
    title,
    amount,
    date: dateStr
  });
  spawnCelebrationBurst('finance', 0xe3b963);
  showToast(type === 'income' ? `💰 +${formatVND(amount)} vào Ngân khố!` : `💸 Đã ghi nhận khoản chi ${formatVND(amount)}`);
  saveState({ station: 'finance', msg: `${type === 'income' ? 'Thu' : 'Chi'} ${formatVND(amount)}: ${title}` });
  renderInspector();
};

window.deleteTransaction = function(id) {
  state.finance.transactions = state.finance.transactions.filter(t => t.id !== id);
  saveState({ station: 'finance', msg: 'Đã xóa 1 giao dịch tài chính' });
  renderInspector();
};

window.addApp = function(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const name = fd.get('name');
  state.apps.unshift({
    id: 'a_' + Date.now(),
    name,
    tech: fd.get('tech'),
    status: fd.get('status'),
    progress: fd.get('status') === 'Đang chạy' ? 90 : 50
  });
  spawnCelebrationBurst('apps', 0x5f9ea0);
  showToast('🚀 Đã thêm App mới vào Nhà máy vận hành!');
  saveState({ station: 'apps', msg: `Thêm App: ${name}` });
  renderInspector();
};

window.cycleAppStatus = function(id) {
  const order = ['Đang chạy', 'Đang code', 'Ý tưởng'];
  const app = state.apps.find(a => a.id === id);
  if (app) {
    const next = order[(order.indexOf(app.status) + 1) % order.length];
    app.status = next;
    saveState({ station: 'apps', msg: `App ${app.name} -> ${next}` });
    renderInspector();
  }
};

window.deleteApp = function(id) {
  state.apps = state.apps.filter(a => a.id !== id);
  saveState({ station: 'apps', msg: 'Đã xóa 1 App' });
  renderInspector();
};

window.toggleGoal = function(id) {
  const g = state.goals.find(x => x.id === id);
  if (g) {
    g.doneToday = !g.doneToday;
    g.streak += g.doneToday ? 1 : -1;
    if (g.doneToday) spawnCelebrationBurst('goals', 0xe5d36e);
    saveState({ station: 'goals', msg: `Mục tiêu: ${g.title}` });
    renderInspector();
  }
};

window.deleteGoal = function(id) {
  state.goals = state.goals.filter(x => x.id !== id);
  saveState({ station: 'goals', msg: 'Đã xóa 1 mục tiêu' });
  renderInspector();
};

window.addGoal = function(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const title = fd.get('title');
  state.goals.push({
    id: 'g_' + Date.now(),
    title,
    streak: 1,
    target: 30,
    doneToday: false
  });
  spawnCelebrationBurst('goals', 0xf2a6be);
  saveState({ station: 'goals', msg: `Thêm mục tiêu: ${title}` });
  renderInspector();
};

window.resetDemoData = function() {
  localStorage.removeItem(STORAGE_KEY);
  state = JSON.parse(JSON.stringify(DEFAULT_STATE));
  saveState({ station: 'hub', msg: 'Khôi phục dữ liệu mẫu' });
  renderInspector();
  showToast('✨ Đã khôi phục dữ liệu mẫu ban đầu!');
};

// ============================================================================
// TOP & BOTTOM BAR CONTROLS WIRING
// ============================================================================
document.querySelectorAll('.dock-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    selectStation(btn.dataset.station, true);
  });
});

document.getElementById('btn-close-inspector').addEventListener('click', () => {
  document.getElementById('inspector-card').classList.toggle('collapsed');
});

document.getElementById('btn-rotate').addEventListener('click', e => {
  autoRotate = !autoRotate;
  controls.autoRotate = autoRotate;
  controls.autoRotateSpeed = 1.2;
  e.currentTarget.classList.toggle('active', autoRotate);
});

document.getElementById('btn-sim').addEventListener('click', e => {
  simRunning = !simRunning;
  e.currentTarget.classList.toggle('active', simRunning);
  e.currentTarget.textContent = simRunning ? '⚡ Tự chạy ▶' : '⏸ Đã dừng';
});

document.getElementById('btn-cam-overview').addEventListener('click', () => {
  followTrain = false;
  document.getElementById('btn-follow-train').classList.remove('active');
  cameraLerp = {
    targetPos: new THREE.Vector3(-6, 36, 46),
    targetLook: new THREE.Vector3(-2, 2, 0),
    alpha: 0
  };
});

document.getElementById('btn-cam-top').addEventListener('click', () => {
  followTrain = false;
  document.getElementById('btn-follow-train').classList.remove('active');
  cameraLerp = {
    targetPos: new THREE.Vector3(0, 62, 8),
    targetLook: new THREE.Vector3(0, 0, -2),
    alpha: 0
  };
});

document.getElementById('btn-follow-train').addEventListener('click', e => {
  followTrain = !followTrain;
  cameraLerp = null;
  e.currentTarget.classList.toggle('active', followTrain);
  if (followTrain) showToast('🚂 Camera đang đi theo tàu vận hành!');
});

// Day / Sunset / Night Theme Switcher
let themeMode = 0; // 0: Day, 1: Sunset, 2: Night
document.getElementById('btn-theme').addEventListener('click', e => {
  themeMode = (themeMode + 1) % 3;
  if (themeMode === 0) {
    scene.background.setHex(0xdcf0d5);
    scene.fog.color.setHex(0xdcf0d5);
    ambientLight.intensity = 0.72;
    dirLight.intensity = 0.9;
    dirLight.color.setHex(0xfff5e4);
    groundMesh.material.color.setHex(0xd5ebd0);
    MATS.shojiGlow.emissiveIntensity = 0.35;
    MATS.lanternGlow.emissiveIntensity = 0.65;
    e.currentTarget.textContent = '☀️ Sáng';
  } else if (themeMode === 1) {
    scene.background.setHex(0xf7c5bd);
    scene.fog.color.setHex(0xf7c5bd);
    ambientLight.intensity = 0.6;
    dirLight.intensity = 0.95;
    dirLight.color.setHex(0xff9e7d);
    groundMesh.material.color.setHex(0xe5d0c3);
    MATS.shojiGlow.emissiveIntensity = 0.85;
    MATS.lanternGlow.emissiveIntensity = 1.1;
    e.currentTarget.textContent = '🌅 Hoàng hôn';
  } else {
    scene.background.setHex(0x161b33);
    scene.fog.color.setHex(0x161b33);
    ambientLight.intensity = 0.42;
    dirLight.intensity = 0.55;
    dirLight.color.setHex(0x8ecae6);
    groundMesh.material.color.setHex(0x223042);
    MATS.shojiGlow.emissiveIntensity = 1.25;
    MATS.lanternGlow.emissiveIntensity = 1.5;
    e.currentTarget.textContent = '🌙 Ban đêm';
  }
});

// ============================================================================
// MAIN ANIMATION LOOP & 3D-TO-2D LABEL PROJECTION
// ============================================================================
const clock = new THREE.Clock();
const tempVec = new THREE.Vector3();

function projectToScreen(pos3D, element) {
  tempVec.copy(pos3D);
  tempVec.project(camera);

  if (tempVec.z > 1) {
    element.style.display = 'none';
    return;
  }
  const x = (tempVec.x * 0.5 + 0.5) * window.innerWidth;
  const y = (-(tempVec.y * 0.5) + 0.5) * window.innerHeight;
  element.style.display = 'flex';
  element.style.left = `${x}px`;
  element.style.top = `${y}px`;
}

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.1);
  const elapsed = clock.getElapsedTime();

  if (simRunning) {
    // 1. Rotate / Wave Building Rooftop Icons, Maneki-Neko Paw & Swimming Koi
    animatedObjects.forEach(obj => {
      if (obj.type === 'spinY') {
        obj.mesh.rotation.y += dt * obj.speed;
        if (obj.baseY !== undefined) {
          obj.mesh.position.y = obj.baseY + Math.sin(elapsed * 2.2) * 0.22;
        }
      } else if (obj.type === 'waveX') {
        obj.mesh.rotation.x = 0.35 + Math.sin(elapsed * obj.speed) * 0.55;
      }
    });

    // 2. Move 2-Car Shinkansen Bullet Train along Railway Curve
    trainProgress = (trainProgress + dt * 0.05) % 1;
    const trainPos = trackCurve.getPointAt(trainProgress);
    const trainTangent = trackCurve.getTangentAt(trainProgress);
    trainMesh.position.copy(trainPos);
    trainMesh.lookAt(trainPos.clone().add(trainTangent));

    if (carriageMesh) {
      const carProgress = (trainProgress - 0.048 + 1) % 1;
      const carPos = trackCurve.getPointAt(carProgress);
      const carTangent = trackCurve.getTangentAt(carProgress);
      carriageMesh.position.copy(carPos);
      carriageMesh.lookAt(carPos.clone().add(carTangent));
    }

    if (followTrain) {
      const camOffset = trainPos.clone().add(new THREE.Vector3(0, 14, 18));
      camera.position.lerp(camOffset, 0.08);
      controls.target.lerp(trainPos, 0.12);
    }

    // 3. Move Japanese Kimono Chibi Workers between Stations
    workers.forEach((w, idx) => {
      w.t += dt * w.speed * w.dir;
      if (w.t >= 1) {
        w.t = 1;
        w.dir = -1;
      } else if (w.t <= 0) {
        w.t = 0;
        w.dir = 1;
      }
      w.mesh.position.lerpVectors(w.start, w.end, w.t);
      w.mesh.position.y = Math.abs(Math.sin(elapsed * 8 + idx)) * 0.3;
      const lookTarget = w.dir === 1 ? w.end : w.start;
      w.mesh.lookAt(lookTarget.x, w.mesh.position.y, lookTarget.z);
    });

    // 4. Drift & Flutter Falling Sakura Petals
    sakuraPetals.forEach(p => {
      p.mesh.position.y -= p.speedY * dt;
      p.mesh.position.x += Math.sin(elapsed * 1.5 + p.phase) * p.driftX * dt;
      p.mesh.position.z += Math.cos(elapsed * 1.2 + p.phase) * p.driftX * dt;
      p.mesh.rotation.x += dt * 1.8;
      p.mesh.rotation.y += dt * 2.2;
      if (p.mesh.position.y < 0.2) {
        p.mesh.position.y = 20 + Math.random() * 6;
        p.mesh.position.x = (Math.random() - 0.5) * 68;
        p.mesh.position.z = (Math.random() - 0.5) * 60;
      }
    });
  }

  // 4. Update Celebration Bursts
  for (let i = bursts.length - 1; i >= 0; i--) {
    const b = bursts[i];
    b.life -= dt;
    b.vel.y -= 14 * dt;
    b.mesh.position.addScaledVector(b.vel, dt);
    b.mesh.rotation.x += 4 * dt;
    b.mesh.rotation.y += 4 * dt;
    if (b.life <= 0) {
      scene.remove(b.mesh);
      bursts.splice(i, 1);
    }
  }

  // 5. Smooth Camera Fly-To Transition
  if (cameraLerp) {
    cameraLerp.alpha += dt * 2.4;
    const t = Math.min(1, cameraLerp.alpha);
    camera.position.lerp(cameraLerp.targetPos, t * 0.14);
    controls.target.lerp(cameraLerp.targetLook, t * 0.18);
    if (camera.position.distanceTo(cameraLerp.targetPos) < 0.4) {
      cameraLerp = null;
    }
  }

  controls.update();
  renderer.render(scene, camera);

  // 6. Project 3D Station & Worker Labels to 2D Screen
  Object.values(STATIONS).forEach(st => {
    const el = stationLabelEls[st.id];
    if (el) {
      projectToScreen(new THREE.Vector3(st.pos.x, st.labelHeight, st.pos.z), el);
    }
  });

  workers.forEach(w => {
    const pos = w.mesh.position.clone();
    pos.y += 2.9;
    projectToScreen(pos, w.labelEl);
  });
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ============================================================================
// REAL-TIME CLOUD SYNC ENGINE (4-CHANNEL INSTANT SYNC + AUTO CODE HOT-RELOAD)
// ============================================================================
const ROOM_KEY = 'lifetown_3d_room_id';
const UNLOCKED_KEY = 'lifetown_3d_room_unlocked';
const FIREBASE_KEY = 'lifetown_3d_firebase_url';
const CLIENT_ID = 'lt3d_' + Math.random().toString(36).substring(2, 10);

const urlParams = new URLSearchParams(window.location.search);
const isViewOnly = urlParams.get('view') === '1';

if (isViewOnly) {
  document.body.classList.add('view-only-mode');
}

let currentRoomId = localStorage.getItem(ROOM_KEY) || '';
let isRoomUnlocked = localStorage.getItem(UNLOCKED_KEY) === '1' && Boolean(currentRoomId);
let isDemoMode = false;
let firebaseDbUrl = localStorage.getItem(FIREBASE_KEY) || '';
let mqttClients = [];
let sseSource = null;
let fbEventSource = null;
const seenMsgIds = new Set();

// Instant same-browser / same-PC tab sync via BroadcastChannel & Storage event
const localChannel = typeof BroadcastChannel !== 'undefined'
  ? new BroadcastChannel('lifetown_3d_realtime_channel')
  : null;

if (localChannel) {
  localChannel.onmessage = (ev) => {
    if (ev.data && ev.data.room === currentRoomId) {
      applyIncomingCloudData(ev.data.payload, 'Tab');
    }
  };
}

window.addEventListener('storage', (ev) => {
  if (ev.key === STORAGE_KEY && ev.newValue && !isDemoMode && currentRoomId) {
    try {
      const parsed = JSON.parse(ev.newValue);
      state.tasks = parsed.tasks || state.tasks;
      state.schedule = parsed.schedule || state.schedule;
      state.finance = parsed.finance || state.finance;
      state.apps = parsed.apps || state.apps;
      state.goals = parsed.goals || state.goals;
      updateTopSummary();
      updateWorldBadges();
      renderInspector();
    } catch (e) {}
  }
});

const lockScreenEl = document.getElementById('lock-screen');
const lockRoomInput = document.getElementById('lock-room-input');
const lockShowPin = document.getElementById('lock-show-pin');
const lockRememberMe = document.getElementById('lock-remember-me');

function closeAllConnections() {
  mqttClients.forEach(c => {
    try { c.end(true); } catch (e) {}
  });
  mqttClients = [];
  if (sseSource) {
    try { sseSource.close(); } catch (e) {}
    sseSource = null;
  }
  if (fbEventSource) {
    try { fbEventSource.close(); } catch (e) {}
    fbEventSource = null;
  }
}

function showLockScreen() {
  document.body.classList.add('room-locked');
  lockScreenEl.classList.remove('hidden');
  closeAllConnections();
  setTimeout(() => lockRoomInput && lockRoomInput.focus(), 100);
}

function unlockWithRoom(roomId, remember = true) {
  currentRoomId = roomId.trim().replace(/[^a-zA-Z0-9_-]/g, '-');
  isDemoMode = false;
  isRoomUnlocked = true;

  if (remember) {
    localStorage.setItem(ROOM_KEY, currentRoomId);
    localStorage.setItem(UNLOCKED_KEY, '1');
  } else {
    localStorage.removeItem(ROOM_KEY);
    localStorage.removeItem(UNLOCKED_KEY);
  }

  document.body.classList.remove('room-locked');
  lockScreenEl.classList.add('hidden');

  buildShareLinks();
  connectRealtimeCloud();
  showToast(`🔓 Đã mở khóa phòng riêng tư: ${currentRoomId}`);
}

function unlockDemoMode() {
  isDemoMode = true;
  currentRoomId = '';
  document.body.classList.remove('room-locked');
  lockScreenEl.classList.add('hidden');
  updateSyncStatusUI('offline', '✨ Bản Demo (Offline)');
  showToast('✨ Đang xem bản Demo mẫu (Không kết nối phòng riêng)');
}

// Wire Lock Screen Controls
if (lockShowPin) {
  lockShowPin.addEventListener('change', e => {
    lockRoomInput.type = e.target.checked ? 'text' : 'password';
  });
}

document.getElementById('lock-form').addEventListener('submit', e => {
  e.preventDefault();
  const pin = lockRoomInput.value.trim();
  if (!pin) return;
  unlockWithRoom(pin, lockRememberMe.checked);
});

document.getElementById('btn-enter-demo').addEventListener('click', () => {
  unlockDemoMode();
});

function updateSyncStatusUI(status, text) {
  const dot = document.getElementById('sync-status-dot');
  const modalDot = document.getElementById('modal-sync-dot');
  const label = document.getElementById('sync-status-text');
  const modalDesc = document.getElementById('modal-sync-desc');

  [dot, modalDot].forEach(d => {
    if (!d) return;
    d.classList.remove('connecting', 'offline');
    if (status === 'connecting') d.classList.add('connecting');
    if (status === 'offline') d.classList.add('offline');
  });

  if (label) label.textContent = text;
  if (modalDesc) {
    modalDesc.textContent = isViewOnly
      ? `${text} (Chế độ Chỉ Xem)`
      : `${text} • Phòng: ${currentRoomId || 'Demo'}`;
  }
}

function getSyncTopic(roomId) {
  return `lifetown3d_sync_v1/${roomId}/state`;
}

function buildShareLinks() {
  const baseUrl = window.location.origin + window.location.pathname;
  const editLink = `${baseUrl}`;
  const viewLink = `${baseUrl}?view=1`;

  const editInput = document.getElementById('input-share-edit');
  const viewInput = document.getElementById('input-share-view');
  const roomInput = document.getElementById('input-room-id');
  const fbInput = document.getElementById('input-firebase-url');
  const fileWarn = document.getElementById('local-file-warning');

  if (editInput) editInput.value = editLink;
  if (viewInput) viewInput.value = viewLink;
  if (roomInput) roomInput.value = currentRoomId;
  if (fbInput) fbInput.value = firebaseDbUrl;
  if (fileWarn) {
    fileWarn.style.display = window.location.protocol === 'file:' ? 'block' : 'none';
  }
}

function applyIncomingCloudData(payload, sourceLabel = 'Cloud') {
  if (!payload || !payload.data) return;
  if (payload.clientId === CLIENT_ID) return; // Ignore own echo

  // Deduplicate by unique msgId (immune to clock skew between different devices!)
  if (payload.msgId) {
    if (seenMsgIds.has(payload.msgId)) return;
    seenMsgIds.add(payload.msgId);
    if (seenMsgIds.size > 500) {
      const first = seenMsgIds.values().next().value;
      seenMsgIds.delete(first);
    }
  }

  state.tasks = payload.data.tasks || state.tasks;
  state.schedule = payload.data.schedule || state.schedule;
  state.finance = payload.data.finance || state.finance;
  state.apps = payload.data.apps || state.apps;
  state.goals = payload.data.goals || state.goals;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {}

  updateTopSummary();
  updateWorldBadges();
  renderInspector();

  if (payload.station) {
    spawnCelebrationBurst(payload.station, 0x2eaa68);
  }
  if (payload.msg) {
    showToast(`⚡ Live: ${payload.msg}`);
  }
}

function publishCloudState(syncMeta = { station: 'hub', msg: 'Đồng bộ dữ liệu' }) {
  if (isViewOnly || isDemoMode || !currentRoomId) return;

  const now = Date.now();
  const msgId = `${CLIENT_ID}_${now}_${Math.random().toString(36).substring(2, 7)}`;
  seenMsgIds.add(msgId);

  const payload = {
    msgId,
    clientId: CLIENT_ID,
    updatedAt: now,
    station: syncMeta.station || 'hub',
    msg: syncMeta.msg || '',
    data: {
      tasks: state.tasks,
      schedule: state.schedule,
      finance: state.finance,
      apps: state.apps,
      goals: state.goals
    }
  };

  // 1. Instant Tab-to-Tab BroadcastChannel
  if (localChannel) {
    try {
      localChannel.postMessage({ room: currentRoomId, payload });
    } catch (e) {}
  }

  const jsonStr = JSON.stringify(payload);

  // 2. Publish to ALL connected MQTT WebSocket Brokers simultaneously (Retain=true)
  const topic = getSyncTopic(currentRoomId);
  mqttClients.forEach(client => {
    if (client && client.connected) {
      try {
        client.publish(topic, jsonStr, { qos: 1, retain: true });
      } catch (e) {}
    }
  });

  // 3. Push to built-in Real-Time Python Server (/api/state) if running on server
  if (window.location.protocol.startsWith('http')) {
    fetch(`/api/state?room=${encodeURIComponent(currentRoomId)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: jsonStr
    }).catch(() => {});
  }

  // 4. Optional: Push to user's Firebase Realtime Database if configured
  if (firebaseDbUrl) {
    const cleanUrl = firebaseDbUrl.replace(/\/+$/, '');
    fetch(`${cleanUrl}/lifetown_rooms/${encodeURIComponent(currentRoomId)}.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: jsonStr
    }).catch(() => {});
  }
}

function connectRealtimeCloud() {
  if (isDemoMode || !currentRoomId) {
    updateSyncStatusUI('offline', '🔒 Chưa mở phòng');
    return;
  }

  closeAllConnections();
  updateSyncStatusUI('connecting', '☁️ Đang kết nối...');

  // Channel A: Connect to Local/Tunnel Python Real-Time SSE Server (if served via server.py)
  if (window.location.protocol.startsWith('http') && typeof EventSource !== 'undefined') {
    try {
      sseSource = new EventSource(`/api/stream?room=${encodeURIComponent(currentRoomId)}`);
      sseSource.onopen = () => {
        updateSyncStatusUI(
          'online',
          isViewOnly ? '👁️ Đang xem Live' : `☁️ Live: ${currentRoomId}`
        );
      };
      sseSource.onmessage = (ev) => {
        try {
          const msg = JSON.parse(ev.data);
          if (msg.type === 'code_reload') {
            showToast('🚀 Code vừa được cập nhật! Đang tải lại giao diện mới...');
            setTimeout(() => window.location.reload(), 600);
          } else if (msg.type === 'state' && msg.payload) {
            applyIncomingCloudData(msg.payload, 'ServerSSE');
          }
        } catch (e) {}
      };
      sseSource.onerror = () => {
        // Fallback silently to MQTT if hosted on static Netlify/GitHub
        if (sseSource) {
          sseSource.close();
          sseSource = null;
        }
      };
    } catch (e) {}
  }

  // Channel B: Multi-Broker MQTT WebSocket Mesh (Works on Netlify, GitHub Pages, Local file://, everywhere!)
  if (typeof mqtt !== 'undefined') {
    const brokers = [
      'wss://broker.emqx.io:8084/mqtt',
      'wss://broker.hivemq.com:8884/mqtt',
      'wss://test.mosquitto.org:8081/mqtt'
    ];

    const topic = getSyncTopic(currentRoomId);
    const reqTopic = `${topic}/req`;

    brokers.forEach((brokerUrl, idx) => {
      try {
        const client = mqtt.connect(brokerUrl, {
          clientId: `${CLIENT_ID}_${idx}_${Math.floor(Math.random() * 9999)}`,
          clean: true,
          keepalive: 25,
          connectTimeout: 5000,
          reconnectPeriod: 2500
        });

        client.on('connect', () => {
          updateSyncStatusUI(
            'online',
            isViewOnly ? '👁️ Đang xem Live' : `☁️ Live: ${currentRoomId}`
          );
          client.subscribe([topic, reqTopic], { qos: 1 }, err => {
            if (!err) {
              // Ask any active peer to also broadcast their latest state
              client.publish(reqTopic, JSON.stringify({ requester: CLIENT_ID }), { qos: 0, retain: false });
            }
          });
        });

        client.on('message', (t, message) => {
          try {
            const parsed = JSON.parse(message.toString());
            if (t === reqTopic) {
              if (parsed.requester !== CLIENT_ID && !isViewOnly) {
                // Another user just joined the room; push current state so they sync immediately
                publishCloudState({ station: '', msg: '' });
              }
            } else {
              applyIncomingCloudData(parsed, 'MQTT');
            }
          } catch (e) {}
        });

        mqttClients.push(client);
      } catch (e) {}
    });
  }

  // Channel C: Firebase Realtime Database Live Stream (EventSource) if configured
  if (firebaseDbUrl && typeof EventSource !== 'undefined') {
    const cleanUrl = firebaseDbUrl.replace(/\/+$/, '');
    const fbRoomUrl = `${cleanUrl}/lifetown_rooms/${encodeURIComponent(currentRoomId)}.json`;
    try {
      fbEventSource = new EventSource(fbRoomUrl);
      fbEventSource.addEventListener('put', (ev) => {
        try {
          const wrapper = JSON.parse(ev.data);
          if (wrapper && wrapper.data) {
            applyIncomingCloudData(wrapper.data, 'FirebaseSSE');
          }
        } catch (e) {}
      });
    } catch (e) {
      fetch(fbRoomUrl)
        .then(r => r.json())
        .then(data => {
          if (data && data.data) applyIncomingCloudData(data, 'Firebase');
        })
        .catch(() => {});
    }
  }
}

// Wire Sync Modal Buttons
document.getElementById('btn-open-sync').addEventListener('click', () => {
  if (isDemoMode || !currentRoomId) {
    showLockScreen();
    return;
  }
  buildShareLinks();
  document.getElementById('sync-modal').classList.remove('hidden');
});

document.getElementById('btn-close-sync').addEventListener('click', () => {
  document.getElementById('sync-modal').classList.add('hidden');
});

document.getElementById('btn-apply-room').addEventListener('click', () => {
  const val = document.getElementById('input-room-id').value.trim().replace(/[^a-zA-Z0-9_-]/g, '-');
  if (!val) return;
  unlockWithRoom(val, true);
});

document.getElementById('btn-lock-room').addEventListener('click', () => {
  localStorage.removeItem(UNLOCKED_KEY);
  localStorage.removeItem(ROOM_KEY);
  currentRoomId = '';
  document.getElementById('sync-modal').classList.add('hidden');
  showLockScreen();
  showToast('🔒 Đã khóa phòng! Cần nhập lại Mã Phòng để truy cập.');
});

document.getElementById('btn-copy-edit').addEventListener('click', () => {
  const input = document.getElementById('input-share-edit');
  navigator.clipboard.writeText(input.value);
  showToast('📋 Đã copy Link (Khách vào sẽ phải nhập Mã Phòng)!');
});

document.getElementById('btn-copy-view').addEventListener('click', () => {
  const input = document.getElementById('input-share-view');
  navigator.clipboard.writeText(input.value);
  showToast('👁️ Đã copy Link Chỉ Xem (Khách vẫn phải nhập Mã Phòng)!');
});

document.getElementById('btn-save-firebase').addEventListener('click', () => {
  firebaseDbUrl = document.getElementById('input-firebase-url').value.trim();
  localStorage.setItem(FIREBASE_KEY, firebaseDbUrl);
  if (firebaseDbUrl) {
    connectRealtimeCloud();
    publishCloudState({ station: 'hub', msg: 'Đồng bộ lên Firebase' });
    showToast('🔥 Đã lưu & đồng bộ trực tiếp với Firebase Realtime Database!');
  } else {
    showToast('☁️ Đã chuyển về Cloud mặc định.');
  }
});

document.getElementById('btn-force-push').addEventListener('click', () => {
  publishCloudState({ station: 'hub', msg: 'Cập nhật toàn bộ hệ thống từ máy chủ' });
  showToast('📤 Đã đẩy toàn bộ dữ liệu hiện tại lên Cloud cho mọi người!');
});

window.exportJsonFile = function() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `lifetown-3d-backup-${currentRoomId || 'demo'}.json`;
  a.click();
};

// Initialize UI, Lock Screen Gatekeeper & Start Loop
updateTopSummary();
updateWorldBadges();
renderInspector();

if (isRoomUnlocked && currentRoomId) {
  document.body.classList.remove('room-locked');
  lockScreenEl.classList.add('hidden');
  buildShareLinks();
  connectRealtimeCloud();
} else {
  showLockScreen();
}

animate();
