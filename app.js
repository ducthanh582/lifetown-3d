// ============================================================================
// LIFETOWN 3D — THỊ TRẤN ĐÔI THANH (LÁ PHONG ĐỎ) & NENE (HOA ANH ĐÀO)
// TÍCH HỢP ONSEN TRUNG TÂM, THỜI TIẾT 4 MÙA & ĐẠI TIỆC PHÁO HOA 5 TASKS
// ============================================================================

const STORAGE_KEY = 'lifetown_3d_state_dual_v2';
const DEFAULT_ROOM_ID = '280900';

const DEFAULT_STATE = {
  currentUser: 'thanh',     // 'thanh' | 'nene' | 'all'
  currentSeason: 'autumn',  // 'spring' | 'summer' | 'autumn' | 'winter'
  activeStation: 'onsen_hub',
  taskSubTab: 'day',        // 'day' | 'week' | 'month'
  completedStreak: 0,       // Đếm số task để kích hoạt Mega Fireworks (mỗi 5 task)
  totalCompleted: 8,

  // Luồng công việc của THANH (Khu bờ Lá Phong Đỏ - Nam)
  thanh: {
    name: 'Thanh',
    title: 'Bờ Lá Phong Đỏ · Võ Đường Lễ Hội',
    tasks: {
      day: [
        { id: 'th_d1', title: 'Hoàn thiện kiến trúc 3D chia 2 bờ cho Thanh & Nene', priority: 'Cao', time: '09:00', done: true },
        { id: 'th_d2', title: 'Tối ưu hiệu năng Three.js & chuyển động hạt 4 mùa', priority: 'Cao', time: '14:30', done: true },
        { id: 'th_d3', title: 'Code tính năng bắn đại tiệc pháo hoa khi xong 5 task', priority: 'Trung bình', time: '17:00', done: false },
        { id: 'th_d4', title: 'Hẹn Nene đi ngâm chân ở Suối Nước Nóng Onsen', priority: 'Cao', time: '20:00', done: false }
      ],
      week: [
        { id: 'th_w1', title: 'Triển khai toàn bộ hệ thống đồng bộ Cloud Real-time 2 bờ', priority: 'Cao', time: 'Thứ 4', done: true },
        { id: 'th_w2', title: 'Xây dựng kho dự án App & API Server cho cả 2', priority: 'Cao', time: 'Thứ 6', done: false },
        { id: 'th_w3', title: 'Tổng kết chi tiêu cá nhân & quỹ tiết kiệm tháng', priority: 'Trung bình', time: 'Chủ nhật', done: false }
      ],
      month: [
        { id: 'th_m1', title: 'Hoàn thành 1 sản phẩm phần mềm SaaS lớn', priority: 'Cao', time: 'Tháng này', done: false },
        { id: 'th_m2', title: 'Duy trì chuỗi tập thể hình & rèn luyện 25 ngày', priority: 'Cao', time: 'Tháng này', done: true },
        { id: 'th_m3', title: 'Tích lũy 35% thu nhập vào quỹ đầu tư tương lai', priority: 'Trung bình', time: 'Tháng này', done: false }
      ]
    },
    schedule: [
      { id: 'th_s1', time: '07:30 - 08:30', title: 'Chạy bộ sáng & Lập kế hoạch ngày', tag: 'Sức khỏe', status: 'Đã xong' },
      { id: 'th_s2', time: '09:00 - 12:00', title: 'Deep Work: Lập trình hệ thống 3D & Server', tag: 'Kỹ thuật', status: 'Đang diễn ra' },
      { id: 'th_s3', time: '14:00 - 16:30', title: 'Review tiến độ các App & Họp đối tác', tag: 'Dự án', status: 'Sắp tới' },
      { id: 'th_s4', time: '20:30 - 22:00', title: 'Nghiên cứu công nghệ AI mới & Nghe nhạc thư giãn', tag: 'Phát triển', status: 'Sắp tới' }
    ],
    finance: {
      baseSalary: 35000000,
      monthlyBudget: 18000000,
      transactions: [
        { id: 'th_f1', type: 'income', title: 'Lương chính tháng này', amount: 35000000, category: 'Lương', date: '01/10' },
        { id: 'th_f2', type: 'income', title: 'Dự án tư vấn phần mềm ngoài', amount: 12000000, category: 'Thưởng/Dự án', date: '15/10' },
        { id: 'th_f3', type: 'expense', title: 'Tiền thuê văn phòng & Cloud Server', amount: 6200000, category: 'Công việc', date: '05/10' },
        { id: 'th_f4', type: 'expense', title: 'Ăn uống & chi tiêu thường nhật', amount: 4500000, category: 'Ăn uống', date: '20/10' },
        { id: 'th_f5', type: 'expense', title: 'Đóng góp Quỹ Chung cùng Nene', amount: 5000000, category: 'Quỹ đôi', date: '25/10' }
      ]
    },
    apps: [
      { id: 'th_a1', name: 'LifeTown 3D (Bản đồ đôi Thanh & Nene)', category: 'Hệ thống', status: 'Đang chạy', progress: 98, tech: 'Three.js / WebGL' },
      { id: 'th_a2', name: 'Cloud Real-time Engine (WebSocket/MQTT)', category: 'Backend', status: 'Đang chạy', progress: 95, tech: 'Python / MQTT' },
      { id: 'th_a3', name: 'Trading & Quản lý Tài sản Cá nhân', category: 'Fintech', status: 'Đang code', progress: 70, tech: 'Node.js / React' }
    ],
    goals: [
      { id: 'th_g1', title: 'Deep Work tập trung tối thiểu 4 tiếng/ngày', streak: 18, target: 30, doneToday: true },
      { id: 'th_g2', title: 'Tập thể thao, hít đất & chạy bộ mỗi chiều', streak: 12, target: 30, doneToday: true },
      { id: 'th_g3', title: 'Không thức khuya sau 23:30', streak: 7, target: 21, doneToday: false }
    ]
  },

  // Luồng công việc của NENE (Khu bờ Hoa Anh Đào - Nữ)
  nene: {
    name: 'Nene',
    title: 'Bờ Hoa Anh Đào · Phố Cổ Machiya Kyoto',
    tasks: {
      day: [
        { id: 'ne_d1', title: 'Trang trí phòng trà Sakura & góc làm việc phong cách Nhật', priority: 'Cao', time: '09:30', done: true },
        { id: 'ne_d2', title: 'Lên ý tưởng thiết kế bộ sưu tập tranh & nội dung mới', priority: 'Cao', time: '14:00', done: true },
        { id: 'ne_d3', title: 'Chọn món ngon cho bữa tối ấm cúng cùng Thanh', priority: 'Trung bình', time: '17:30', done: false },
        { id: 'ne_d4', title: 'Đọc 30 trang sách nghệ thuật sống Hygge / Wabi-Sabi', priority: 'Thấp', time: '21:30', done: false }
      ],
      week: [
        { id: 'ne_w1', title: 'Hoàn thành bộ minh họa chủ đề Hoa Anh Đào Kyoto', priority: 'Cao', time: 'Thứ 5', done: true },
        { id: 'ne_w2', title: 'Lên lịch hẹn chụp ảnh & dạo phố cuối tuần', priority: 'Trung bình', time: 'Thứ 7', done: false },
        { id: 'ne_w3', title: 'Đối soát chi tiêu cá nhân & danh sách đồ cần sắm', priority: 'Trung bình', time: 'Chủ nhật', done: false }
      ],
      month: [
        { id: 'ne_m1', title: 'Khai trương studio sáng tạo & kênh nội dung cá nhân', priority: 'Cao', time: 'Tháng này', done: false },
        { id: 'ne_m2', title: 'Duy trì tập Yoga & Thiền định 20 buổi trong tháng', priority: 'Cao', time: 'Tháng này', done: true },
        { id: 'ne_m3', title: 'Tiết kiệm đạt mục tiêu cho chuyến du lịch cùng Thanh', priority: 'Cao', time: 'Tháng này', done: false }
      ]
    },
    schedule: [
      { id: 'ne_s1', time: '08:00 - 09:00', title: 'Trà sáng, nghe nhạc Lofi & Lên to-do list', tag: 'Cá nhân', status: 'Đã xong' },
      { id: 'ne_s2', time: '09:30 - 12:00', title: 'Sáng tạo nội dung & Thiết kế đồ họa Studio', tag: 'Sáng tạo', status: 'Đang diễn ra' },
      { id: 'ne_s3', time: '14:30 - 16:30', title: 'Chăm sóc cây hoa Sakura & Viết nhật ký ý tưởng', tag: 'Cảm hứng', status: 'Sắp tới' },
      { id: 'ne_s4', time: '18:00 - 19:30', title: 'Lớp Yoga thư giãn & Thư giãn tinh thần', tag: 'Sức khỏe', status: 'Sắp tới' }
    ],
    finance: {
      baseSalary: 28000000,
      monthlyBudget: 15000000,
      transactions: [
        { id: 'ne_f1', type: 'income', title: 'Thu nhập công việc thiết kế sáng tạo', amount: 28000000, category: 'Lương', date: '01/10' },
        { id: 'ne_f2', type: 'income', title: 'Bán tranh minh họa & tác phẩm nghệ thuật', amount: 7500000, category: 'Nghệ thuật', date: '12/10' },
        { id: 'ne_f3', type: 'expense', title: 'Mua họa cụ, sách nghệ thuật & vải lụa', amount: 3200000, category: 'Đam mê', date: '06/10' },
        { id: 'ne_f4', type: 'expense', title: 'Mỹ phẩm, trang phục & chăm sóc cá nhân', amount: 3800000, category: 'Làm đẹp', date: '18/10' },
        { id: 'ne_f5', type: 'expense', title: 'Đóng góp Quỹ Chung cùng Thanh', amount: 5000000, category: 'Quỹ đôi', date: '25/10' }
      ]
    },
    apps: [
      { id: 'ne_a1', name: 'Sakura Creative Studio & Gallery', category: 'Thiết kế', status: 'Đang chạy', progress: 92, tech: 'Figma / Illustrator' },
      { id: 'ne_a2', name: 'Sổ Tay Kỷ Niệm & Thư Tình Trực Tuyến', category: 'Cá nhân', status: 'Đang chạy', progress: 88, tech: 'React / Web' },
      { id: 'ne_a3', name: 'Tiệm Bánh Ngọt Wagashi Store', category: 'Kinh doanh', status: 'Ý tưởng', progress: 40, tech: 'E-commerce' }
    ],
    goals: [
      { id: 'ne_g1', title: 'Tập Yoga hoặc Thiền định 30 phút mỗi ngày', streak: 21, target: 30, doneToday: true },
      { id: 'ne_g2', title: 'Uống đủ 2 lít nước ấm & trà hoa thảo mộc', streak: 15, target: 30, doneToday: true },
      { id: 'ne_g3', title: 'Viết lời cảm ơn hoặc nhật ký vui vẻ mỗi tối', streak: 9, target: 21, doneToday: false }
    ]
  },

  // CÔNG VIỆC CHUNG CỦA CẢ 2 ĐỨA (Suối Nước Nóng Onsen Trung Tâm)
  shared: {
    tasks: [
      { id: 'sh_1', title: 'Cùng nhau trang trí & chăm sóc thị trấn 3D mỗi tối', done: true, by: 'Cả hai' },
      { id: 'sh_2', title: 'Nấu bữa tối món Nhật ấm cúng vào cuối tuần này', done: false, by: 'Thanh & Nene' },
      { id: 'sh_3', title: 'Lên kế hoạch & đặt vé chuyến du lịch ngắm tuyết / hoa', done: false, by: 'Thanh & Nene' },
      { id: 'sh_4', title: 'Tiết kiệm đạt 20 triệu cho Quỹ Du Lịch chung', done: true, by: 'Quỹ đôi' }
    ],
    coupleGoals: [
      { id: 'cg_1', title: 'Cùng chia sẻ 3 điều vui nhất trong ngày trước khi ngủ', streak: 26 },
      { id: 'cg_2', title: 'Mỗi tuần dành trọn 1 ngày Date Night không vướng bận việc', streak: 8 },
      { id: 'cg_3', title: 'Hoàn thành 100% mục tiêu tháng của cả 2 để ăn mừng', streak: 4 }
    ]
  }
};

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return Object.assign({}, DEFAULT_STATE, parsed);
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
  if (!container) return;
  const el = document.createElement('div');
  el.className = 'toast-msg';
  el.textContent = msg;
  container.appendChild(el);
  setTimeout(() => el.remove(), 3400);
}

// ============================================================================
// STATIONS METADATA — PHÂN CHIA 2 BỜ THANH & NENE + ONSEN TRUNG TÂM
// ============================================================================
const STATIONS = {
  // --- TRUNG TÂM GIAO THOA: SUỐI NƯỚC NÓNG ON-SEN ---
  onsen_hub: {
    id: 'onsen_hub',
    side: 'center',
    owner: 'Cả hai',
    name: 'Suối Nước Nóng Uyên Ương (Onsen)',
    shortName: 'Onsen Chung',
    icon: '♨️',
    pos: { x: 0, y: 0, z: 0 },
    labelHeight: 9.5,
    camOffset: { x: 0, y: 32, z: 42 },
    quote: 'Nơi giao thoa giữa bờ Lá Phong Đỏ của Thanh và bờ Hoa Anh Đào của Nene. Nước khoáng ấm áp, gắn kết mục tiêu chung!',
    bubble: 'Khói Onsen nghi ngút · Đôi bạn hòa hợp 100%!'
  },

  // --- BỜ BÊN TRÁI: KHU VỰC CỦA THANH (LÁ PHONG ĐỎ - ẢNH 1) ---
  thanh_dojo: {
    id: 'thanh_dojo',
    side: 'thanh',
    owner: 'Thanh',
    name: 'Võ Đường Phong Diệp (Task Thanh)',
    shortName: 'Võ Đường Task',
    icon: '⛩️',
    pos: { x: -16, y: 0, z: 6 },
    labelHeight: 12.0,
    camOffset: { x: -16, y: 20, z: 24 },
    quote: 'Võ đường rực rỡ đèn lồng đỏ dưới tán lá phong Momiji! Tập trung tinh thần dứt điểm từng Task Ngày - Tuần - Tháng.',
    bubble: 'Thanh đang xử lý các Task ưu tiên cao!'
  },
  thanh_tower: {
    id: 'thanh_tower',
    side: 'thanh',
    owner: 'Thanh',
    name: 'Lầu Vọng Cảnh Lễ Hội (App & Dự Án)',
    shortName: 'Lầu Vọng Cảnh',
    icon: '🏯',
    pos: { x: -22, y: 0, z: -14 },
    labelHeight: 16.5,
    camOffset: { x: -22, y: 26, z: 12 },
    quote: 'Tháp vọng cảnh nhiều tầng rực rỡ sắc đỏ lễ hội, quan sát toàn bộ các App, phần mềm & dự án công nghệ của Thanh.',
    bubble: 'Hệ thống App & Server đang vận hành mượt mà!'
  },
  thanh_bell: {
    id: 'thanh_bell',
    side: 'thanh',
    owner: 'Thanh',
    name: 'Tháp Chuông Kỷ Luật (Lịch Trình Thanh)',
    shortName: 'Tháp Kỷ Luật',
    icon: '🔔',
    pos: { x: -14, y: 0, z: -8 },
    labelHeight: 13.0,
    camOffset: { x: -14, y: 19, z: 16 },
    quote: 'Tiếng chuông cổ kính nhắc nhở các khung giờ làm việc Deep Work, rèn luyện thể thao và lịch họp quan trọng.',
    bubble: 'Khung giờ Deep Work của Thanh đang diễn ra!'
  },
  thanh_forge: {
    id: 'thanh_forge',
    side: 'thanh',
    owner: 'Thanh',
    name: 'Tiệm Rèn Đao & Ngân Khố (Tài Chính)',
    shortName: 'Tiệm Rèn & Tiền',
    icon: '⚔️',
    pos: { x: -25, y: 0, z: 7 },
    labelHeight: 10.5,
    camOffset: { x: -25, y: 18, z: 25 },
    quote: 'Quản lý thu nhập, lương, ngân sách chi tiêu và phần đóng góp vào Quỹ Chung của Thanh.',
    bubble: 'Ngân sách của Thanh trong vùng an toàn!'
  },

  // --- BỜ BÊN PHẢI: KHU VỰC CỦA NENE (HOA ANH ĐÀO - ẢNH 2) ---
  nene_tea: {
    id: 'nene_tea',
    side: 'nene',
    owner: 'Nene',
    name: 'Trà Quán Sakura (Task Nene)',
    shortName: 'Trà Quán Task',
    icon: '🍵',
    pos: { x: 16, y: 0, z: 6 },
    labelHeight: 11.5,
    camOffset: { x: 16, y: 20, z: 24 },
    quote: 'Trà quán phố cổ Machiya Kyoto xinh xắn bên rặng hoa anh đào! Thưởng trà và giải quyết nhẹ nhàng từng công việc.',
    bubble: 'Nene đang hoàn thành các nhiệm vụ hôm nay!'
  },
  nene_studio: {
    id: 'nene_studio',
    side: 'nene',
    owner: 'Nene',
    name: 'Thương Điếm Nhuộm Vải & Sáng Tạo',
    shortName: 'Tiệm Sáng Tạo',
    icon: '👘',
    pos: { x: 23, y: 0, z: -12 },
    labelHeight: 14.5,
    camOffset: { x: 23, y: 24, z: 14 },
    quote: 'Không gian sáng tạo lụa là, thiết kế nghệ thuật, nội dung và các dự án truyền cảm hứng của Nene.',
    bubble: 'Các dự án sáng tạo đang tràn đầy cảm hứng!'
  },
  nene_clock: {
    id: 'nene_clock',
    side: 'nene',
    owner: 'Nene',
    name: 'Lầu Nguyệt Quang Điểm Giờ (Lịch Nene)',
    shortName: 'Lầu Nguyệt Quang',
    icon: '🕰️',
    pos: { x: 14, y: 0, z: -8 },
    labelHeight: 13.0,
    camOffset: { x: 14, y: 19, z: 16 },
    quote: 'Tháp đồng hồ gỗ cổ kính bên dòng suối, quản lý khung giờ sáng tạo, các lớp Yoga và lịch hẹn hò ấm áp.',
    bubble: 'Lịch trình thảnh thơi & đúng hẹn của Nene!'
  },
  nene_wagashi: {
    id: 'nene_wagashi',
    side: 'nene',
    owner: 'Nene',
    name: 'Tiệm Bánh Wagashi & Ngân Khố Nene',
    shortName: 'Wagashi & Tiền',
    icon: '🍡',
    pos: { x: 25, y: 0, z: 7 },
    labelHeight: 10.5,
    camOffset: { x: 25, y: 18, z: 25 },
    quote: 'Tiệm bánh ngọt truyền thống và chú mèo Maneki-Neko nhỏ xinh, quản lý ví chi tiêu, mua sắm và tiết kiệm của Nene.',
    bubble: 'Tài chính ngọt ngào, tích lũy đều đặn!'
  }
};

// ============================================================================
// THREE.JS SCENE SETUP
// ============================================================================
const container = document.getElementById('canvas-container');
const labelsContainer = document.getElementById('labels-container');

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdcebd5);
scene.fog = new THREE.FogExp2(0xdcebd5, 0.007);

const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.5, 350);
camera.position.set(0, 36, 48);

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
container.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.maxPolarAngle = Math.PI / 2 - 0.05;
controls.minDistance = 14;
controls.maxDistance = 110;
controls.target.set(0, 2, 0);

// Ánh sáng môi trường
const ambientLight = new THREE.AmbientLight(0xfff5ee, 0.75);
scene.add(ambientLight);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0xcde0c9, 0.4);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xfff0dd, 0.95);
dirLight.position.set(35, 60, 30);
dirLight.castShadow = true;
dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;
dirLight.shadow.camera.near = 5;
dirLight.shadow.camera.far = 160;
const d = 52;
dirLight.shadow.camera.left = -d;
dirLight.shadow.camera.right = d;
dirLight.shadow.camera.top = d;
dirLight.shadow.camera.bottom = -d;
dirLight.shadow.bias = -0.0004;
scene.add(dirLight);

// Vật liệu (Materials Palette: Kết hợp Lễ hội đỏ ấm & Phố cổ thanh lịch & Suối nước nóng)
const MATS = {
  groundThanh: new THREE.MeshStandardMaterial({ color: 0xd9c2a7, roughness: 0.9 }), // Bờ Thanh gạch đá nâu ấm
  groundNene: new THREE.MeshStandardMaterial({ color: 0xdde6d5, roughness: 0.9 }),  // Bờ Nene sỏi rêu thanh nhã
  onsenRock: new THREE.MeshStandardMaterial({ color: 0x5a5652, roughness: 0.85 }),
  onsenWater: new THREE.MeshStandardMaterial({ color: 0x38b6ff, roughness: 0.15, metalness: 0.2, transparent: true, opacity: 0.88 }),
  woodDark: new THREE.MeshStandardMaterial({ color: 0x3a2318, roughness: 0.75 }),
  woodWarm: new THREE.MeshStandardMaterial({ color: 0x825438, roughness: 0.7 }),
  shikkuiWhite: new THREE.MeshStandardMaterial({ color: 0xfcfaf5, roughness: 0.55 }),
  kawaraRoofDark: new THREE.MeshStandardMaterial({ color: 0x2c333a, roughness: 0.48 }), // Ngói đen xám
  kawaraRoofRed: new THREE.MeshStandardMaterial({ color: 0x8a2820, roughness: 0.5 }),   // Ngói đỏ sẫm lễ hội
  vermilionRed: new THREE.MeshStandardMaterial({ color: 0xd93829, roughness: 0.45 }),   // Đỏ son Torii / Đèn lồng
  vermilionDeep: new THREE.MeshStandardMaterial({ color: 0x9e1f14, roughness: 0.55 }),
  goldTrim: new THREE.MeshStandardMaterial({ color: 0xf3c14b, roughness: 0.3, metalness: 0.45 }),
  // Cây lá phong đỏ (Thanh)
  mapleRed: new THREE.MeshStandardMaterial({ color: 0xd92027, roughness: 0.6 }),
  mapleOrange: new THREE.MeshStandardMaterial({ color: 0xf37121, roughness: 0.6 }),
  mapleGold: new THREE.MeshStandardMaterial({ color: 0xffa41b, roughness: 0.6 }),
  // Cây hoa anh đào (Nene)
  sakuraPink: new THREE.MeshStandardMaterial({ color: 0xffb7c5, roughness: 0.6 }),
  sakuraDeep: new THREE.MeshStandardMaterial({ color: 0xf48fb1, roughness: 0.6 }),
  sakuraLight: new THREE.MeshStandardMaterial({ color: 0xffe4ec, roughness: 0.6 }),
  // Ánh sáng đèn lồng và cửa giấy Shoji
  shojiGlow: new THREE.MeshStandardMaterial({ color: 0xfff3d1, emissive: 0xffaa40, emissiveIntensity: 0.45, roughness: 0.4 }),
  lanternRedGlow: new THREE.MeshStandardMaterial({ color: 0xff3b30, emissive: 0xff2d20, emissiveIntensity: 0.8, roughness: 0.4 }),
  lanternWarmGlow: new THREE.MeshStandardMaterial({ color: 0xfff0b3, emissive: 0xffcc00, emissiveIntensity: 0.75, roughness: 0.4 }),
  white: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 }),
  norenBlue: new THREE.MeshStandardMaterial({ color: 0x204060, roughness: 0.7 })
};

function enableShadow(obj) {
  obj.traverse(child => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
}

// ============================================================================
// XÂY DỰNG MẶT ĐẤT 2 BỜ & DÒNG SUỐI NƯỚC NÓNG (ONSEN) CHÍNH GIỮA
// ============================================================================
const groundGroup = new THREE.Group();

// Nửa bờ bên trái (Thanh - X < -2.5)
const groundThanhGeo = new THREE.BoxGeometry(45, 1.8, 80);
const groundThanhMesh = new THREE.Mesh(groundThanhGeo, MATS.groundThanh);
groundThanhMesh.position.set(-25, -0.9, 0);
groundThanhMesh.receiveShadow = true;
groundGroup.add(groundThanhMesh);

// Nửa bờ bên phải (Nene - X > 2.5)
const groundNeneGeo = new THREE.BoxGeometry(45, 1.8, 80);
const groundNeneMesh = new THREE.Mesh(groundNeneGeo, MATS.groundNene);
groundNeneMesh.position.set(25, -0.9, 0);
groundNeneMesh.receiveShadow = true;
groundGroup.add(groundNeneMesh);

// Lòng suối Onsen chính giữa (-2.5 <= X <= 2.5)
const streamBedGeo = new THREE.BoxGeometry(9, 1.2, 80);
const streamBedMesh = new THREE.Mesh(streamBedGeo, MATS.onsenRock);
streamBedMesh.position.set(0, -1.2, 0);
groundGroup.add(streamBedMesh);

// Mặt nước khoáng nóng bốc hơi
const waterGeo = new THREE.BoxGeometry(7.6, 0.4, 78);
const waterMesh = new THREE.Mesh(waterGeo, MATS.onsenWater);
waterMesh.position.set(0, -0.25, 0);
groundGroup.add(waterMesh);

// Rải đá cuội tự nhiên dọc 2 bờ suối
for (let z = -38; z <= 38; z += 3.8) {
  // Bờ đá bên trái
  const rockL = new THREE.Mesh(
    new THREE.DodecahedronGeometry(0.7 + Math.random() * 0.45, 0),
    MATS.onsenRock
  );
  rockL.position.set(-3.7 + (Math.random() - 0.5) * 0.6, 0.1, z + (Math.random() - 0.5) * 1.2);
  rockL.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
  groundGroup.add(rockL);

  // Bờ đá bên phải
  const rockR = rockL.clone();
  rockR.position.set(3.7 + (Math.random() - 0.5) * 0.6, 0.1, z + (Math.random() - 0.5) * 1.2);
  groundGroup.add(rockR);
}

scene.add(groundGroup);

// Interactive Hitboxes
const stationMeshes = [];
const animatedObjects = [];
const activeRingMeshes = {};

function registerStationHitbox(stationId, group, radius = 6.5, height = 11) {
  const hitGeo = new THREE.CylinderGeometry(radius, radius, height, 16);
  const hitMat = new THREE.MeshBasicMaterial({ visible: false });
  const hitMesh = new THREE.Mesh(hitGeo, hitMat);
  hitMesh.position.y = height / 2;
  hitMesh.userData.stationId = stationId;
  group.add(hitMesh);
  stationMeshes.push(hitMesh);

  // Vòng sáng hào quang dưới chân công trình
  const ringGeo = new THREE.RingGeometry(radius + 0.4, radius + 1.2, 48);
  ringGeo.rotateX(-Math.PI / 2);
  const ringMat = new THREE.MeshBasicMaterial({
    color: stationId.startsWith('thanh') ? 0xd63031 : (stationId.startsWith('nene') ? 0xe84393 : 0x0984e3),
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.0
  });
  const ringMesh = new THREE.Mesh(ringGeo, ringMat);
  ringMesh.position.y = 0.08;
  group.add(ringMesh);
  activeRingMeshes[stationId] = ringMesh;
}

// Helper: Mái ngói Nhật Bản uốn cong viền góc
function createCurvedRoof(width, depth, height, roofMat = MATS.kawaraRoofDark) {
  const rg = new THREE.Group();
  const eave = new THREE.Mesh(new THREE.BoxGeometry(width * 1.1, height * 0.25, depth * 1.1), roofMat);
  eave.position.y = height * 0.12;
  rg.add(eave);

  const radiusBottom = Math.hypot(width, depth) * 0.52;
  const radiusTop = radiusBottom * 0.42;
  const slope = new THREE.Mesh(new THREE.CylinderGeometry(radiusTop, radiusBottom, height * 0.78, 4), roofMat);
  slope.rotation.y = Math.PI / 4;
  slope.scale.set(width / Math.max(width, depth), 1, depth / Math.max(width, depth));
  slope.position.y = height * 0.52;
  rg.add(slope);

  const ridge = new THREE.Mesh(new THREE.BoxGeometry(width * 0.48, height * 0.22, depth * 0.14), roofMat);
  ridge.position.y = height * 0.92;
  rg.add(ridge);
  return rg;
}

// ============================================================================
// 1. CÔNG TRÌNH TRUNG TÂM: SUỐI NƯỚC NÓNG UYÊN ƯƠNG & CẦU TAIKO-BASHI
// ============================================================================
function buildOnsenCenter() {
  const group = new THREE.Group();
  group.position.set(STATIONS.onsen_hub.pos.x, 0, STATIONS.onsen_hub.pos.z);

  // Hồ Onsen chính hình bầu dục đá cuội
  const basinOuter = new THREE.Mesh(new THREE.CylinderGeometry(6.4, 6.8, 0.65, 32), MATS.onsenRock);
  basinOuter.position.y = 0.32;
  basinOuter.scale.set(1.15, 1, 1.4);
  group.add(basinOuter);

  const hotWater = new THREE.Mesh(new THREE.CylinderGeometry(5.7, 5.7, 0.72, 32), MATS.onsenWater);
  hotWater.position.y = 0.4;
  hotWater.scale.set(1.15, 1, 1.4);
  group.add(hotWater);

  // Đình nghỉ ngâm chân Onsen (Chòi gỗ mộc Nhật Bản)
  const gazebo = new THREE.Group();
  gazebo.position.set(0, 0.4, -4.5);
  for (let gx of [-2.4, 2.4]) {
    for (let gz of [-1.8, 1.8]) {
      const col = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.2, 3.2, 10), MATS.woodWarm);
      col.position.set(gx, 1.6, gz);
      gazebo.add(col);
    }
  }
  const gazRoof = createCurvedRoof(6.2, 5.0, 1.5, MATS.kawaraRoofDark);
  gazRoof.position.y = 3.2;
  gazebo.add(gazRoof);

  // Biển hiệu gỗ ♨️ ONSEN UYÊN ƯƠNG
  const sign = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.8, 0.2), MATS.woodWarm);
  sign.position.set(0, 3.0, 2.6);
  gazebo.add(sign);
  group.add(gazebo);

  // CẦU VÒM GỖ ĐỎ (TAIKO-BASHI) NỐI 2 BỜ THANH & NENE
  const bridge = new THREE.Group();
  bridge.position.set(0, 0.4, 6.5);
  const deck = new THREE.Mesh(new THREE.BoxGeometry(9.6, 0.38, 3.2), MATS.vermilionRed);
  deck.position.y = 0.55;
  const railL = new THREE.Mesh(new THREE.BoxGeometry(9.6, 0.75, 0.2), MATS.vermilionDeep);
  railL.position.set(0, 0.95, -1.5);
  const railR = railL.clone();
  railR.position.z = 1.5;
  bridge.add(deck, railL, railR);

  // Đèn lồng giấy đỏ gắn trên cầu
  for (let bx of [-4.2, -1.4, 1.4, 4.2]) {
    const lPost = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.2, 8), MATS.woodDark);
    lPost.position.set(bx, 1.1, -1.5);
    const lantern = new THREE.Mesh(new THREE.SphereGeometry(0.24, 10, 10), MATS.lanternRedGlow);
    lantern.scale.y = 1.3;
    lantern.position.set(bx, 1.8, -1.5);
    bridge.add(lPost, lantern);
  }
  group.add(bridge);

  // Biểu tượng trái tim vàng & suối khoáng xoay trên không trung
  const heartGroup = new THREE.Group();
  heartGroup.position.set(0, 9.2, 0);
  const ring1 = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.16, 12, 32), MATS.goldTrim);
  ring1.rotation.x = Math.PI / 2;
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.14, 12, 32), MATS.onsenWater);
  ring2.rotation.y = Math.PI / 2;
  heartGroup.add(ring1, ring2);
  group.add(heartGroup);
  animatedObjects.push({ mesh: heartGroup, type: 'spinY', speed: 1.5, baseY: 9.2 });

  enableShadow(group);
  registerStationHitbox('onsen_hub', group, 8.5, 12);
  scene.add(group);
}

// ============================================================================
// 2. CÁC CÔNG TRÌNH BỜ THANH (PHONG CÁCH ẢNH 1: LỄ HỘI & LÁ PHONG ĐỎ)
// ============================================================================

// A. Võ Đường Phong Diệp (Task Thanh)
function buildThanhDojo() {
  const group = new THREE.Group();
  group.position.set(STATIONS.thanh_dojo.pos.x, 0, STATIONS.thanh_dojo.pos.z);

  const pad = new THREE.Mesh(new THREE.BoxGeometry(11.5, 0.7, 10.5), MATS.groundThanh);
  pad.position.y = 0.35;
  group.add(pad);

  // Tòa chính võ đường 2 tầng gỗ sẫm & đèn lồng lễ hội
  const hall = new THREE.Mesh(new THREE.BoxGeometry(8.2, 4.2, 6.8), MATS.woodDark);
  hall.position.set(0, 2.5, -0.5);
  group.add(hall);

  const shoji = new THREE.Mesh(new THREE.BoxGeometry(8.4, 2.6, 6.95), MATS.shojiGlow);
  shoji.position.set(0, 2.4, -0.5);
  group.add(shoji);

  // Cột đỏ son & hiên đón
  for (let x = -3.8; x <= 3.8; x += 1.9) {
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.22, 4.4, 10), MATS.vermilionRed);
    col.position.set(x, 2.5, 3.1);
    group.add(col);
  }

  // Mái ngói cong tầng 1
  const roof1 = createCurvedRoof(10.6, 8.8, 1.8, MATS.kawaraRoofRed);
  roof1.position.set(0, 4.4, -0.5);
  group.add(roof1);

  // Tầng 2 võ đường
  const upper = new THREE.Mesh(new THREE.BoxGeometry(6.0, 2.6, 4.8), MATS.woodDark);
  upper.position.set(0, 6.2, -0.5);
  group.add(upper);

  const roof2 = createCurvedRoof(7.8, 6.4, 1.6, MATS.kawaraRoofRed);
  roof2.position.set(0, 7.6, -0.5);
  group.add(roof2);

  // Hàng đèn lồng đỏ lễ hội rực sáng phía trước
  for (let lx = -3.6; lx <= 3.6; lx += 1.2) {
    const lantern = new THREE.Mesh(new THREE.SphereGeometry(0.32, 12, 12), MATS.lanternRedGlow);
    lantern.scale.y = 1.35;
    lantern.position.set(lx, 4.2, 3.2);
    group.add(lantern);
  }

  // Cổng Torii võ đường phong diệp phía trước
  const torii = createToriiGate(1.0);
  torii.position.set(0, 0.5, 5.0);
  group.add(torii);

  // Biểu tượng quạt giấy đỏ Momiji xoay trên đỉnh
  const fanGroup = new THREE.Group();
  fanGroup.position.set(0, 10.4, -0.5);
  const fan = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.12, 16, 1, false, 0, Math.PI), MATS.vermilionRed);
  fan.rotation.z = Math.PI / 2;
  fanGroup.add(fan);
  group.add(fanGroup);
  animatedObjects.push({ mesh: fanGroup, type: 'spinY', speed: 1.8, baseY: 10.4 });

  enableShadow(group);
  registerStationHitbox('thanh_dojo', group, 8.0, 11);
  scene.add(group);
}

// B. Lầu Vọng Cảnh Lễ Hội (App & Dự Án của Thanh - Giống tháp ảnh 1)
function buildThanhTower() {
  const group = new THREE.Group();
  group.position.set(STATIONS.thanh_tower.pos.x, 0, STATIONS.thanh_tower.pos.z);

  const pad = new THREE.Mesh(new THREE.BoxGeometry(11.0, 0.8, 11.0), MATS.groundThanh);
  pad.position.y = 0.4;
  group.add(pad);

  // Tháp vọng cảnh 3 tầng lộng lẫy phong cách lễ hội đêm
  const tiers = [
    { w: 7.6, h: 3.4, y: 0.8, rw: 9.6, rh: 1.6 },
    { w: 5.8, h: 3.0, y: 4.8, rw: 7.6, rh: 1.5 },
    { w: 4.2, h: 2.8, y: 8.6, rw: 5.8, rh: 1.6 }
  ];

  tiers.forEach((t) => {
    const body = new THREE.Mesh(new THREE.BoxGeometry(t.w, t.h, t.w), MATS.woodDark);
    body.position.y = t.y + t.h / 2;
    const glow = new THREE.Mesh(new THREE.BoxGeometry(t.w + 0.1, t.h * 0.65, t.w + 0.1), MATS.shojiGlow);
    glow.position.y = t.y + t.h / 2;
    group.add(body, glow);

    const roof = createCurvedRoof(t.rw, t.rw, t.rh, MATS.kawaraRoofRed);
    roof.position.y = t.y + t.h;
    group.add(roof);

    // Đèn lồng đỏ 4 góc mỗi tầng tháp
    const offsets = [[-t.rw*0.48, -t.rw*0.48], [t.rw*0.48, -t.rw*0.48], [-t.rw*0.48, t.rw*0.48], [t.rw*0.48, t.rw*0.48]];
    offsets.forEach(([ox, oz]) => {
      const lan = new THREE.Mesh(new THREE.SphereGeometry(0.28, 10, 10), MATS.lanternRedGlow);
      lan.scale.y = 1.3;
      lan.position.set(ox, t.y + t.h - 0.2, oz);
      group.add(lan);
    });
  });

  // Đỉnh tháp vàng lễ hội xoay tròn
  const apex = new THREE.Mesh(new THREE.OctahedronGeometry(1.1, 0), MATS.goldTrim);
  apex.position.y = 15.4;
  group.add(apex);
  animatedObjects.push({ mesh: apex, type: 'spinY', speed: 2.2, baseY: 15.4 });

  enableShadow(group);
  registerStationHitbox('thanh_tower', group, 8.0, 16);
  scene.add(group);
}

// C. Tháp Chuông Kỷ Luật & Tiệm Rèn của Thanh
function buildThanhExtras() {
  // Tháp Chuông
  const bellGroup = new THREE.Group();
  bellGroup.position.set(STATIONS.thanh_bell.pos.x, 0, STATIONS.thanh_bell.pos.z);
  const bPad = new THREE.Mesh(new THREE.BoxGeometry(8.5, 0.6, 8.5), MATS.groundThanh);
  bPad.position.y = 0.3;
  const bPosts = [[-2.5, -2.5], [2.5, -2.5], [-2.5, 2.5], [2.5, 2.5]];
  bPosts.forEach(([px, pz]) => {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.3, 5.2, 10), MATS.woodDark);
    post.position.set(px, 2.8, pz);
    bellGroup.add(post);
  });
  const bellRoof = createCurvedRoof(7.2, 7.2, 1.8, MATS.kawaraRoofDark);
  bellRoof.position.y = 5.2;
  const bell = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 1.1, 2.2, 16), MATS.onsenRock);
  bell.position.y = 3.6;
  bellGroup.add(bPad, bellRoof, bell);
  enableShadow(bellGroup);
  registerStationHitbox('thanh_bell', bellGroup, 6.5, 12);
  scene.add(bellGroup);

  // Tiệm Rèn & Ngân Khố
  const forgeGroup = new THREE.Group();
  forgeGroup.position.set(STATIONS.thanh_forge.pos.x, 0, STATIONS.thanh_forge.pos.z);
  const fPad = new THREE.Mesh(new THREE.BoxGeometry(9.5, 0.6, 8.5), MATS.groundThanh);
  fPad.position.y = 0.3;
  const fHouse = new THREE.Mesh(new THREE.BoxGeometry(6.8, 3.8, 5.6), MATS.woodDark);
  fHouse.position.set(0, 2.2, 0);
  const fGlow = new THREE.Mesh(new THREE.BoxGeometry(4.2, 2.2, 5.75), MATS.lanternRedGlow);
  fGlow.position.set(0, 2.0, 0);
  const fRoof = createCurvedRoof(8.5, 7.2, 1.6, MATS.kawaraRoofRed);
  fRoof.position.set(0, 4.2, 0);
  // Đồng tiền vàng Koban xoay
  const goldKoban = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, 0.2, 16), MATS.goldTrim);
  goldKoban.scale.z = 1.45;
  goldKoban.rotation.x = Math.PI / 2;
  goldKoban.position.set(0, 7.2, 0);
  forgeGroup.add(fPad, fHouse, fGlow, fRoof, goldKoban);
  animatedObjects.push({ mesh: goldKoban, type: 'spinY', speed: 1.6, baseY: 7.2 });
  enableShadow(forgeGroup);
  registerStationHitbox('thanh_forge', forgeGroup, 7.0, 10);
  scene.add(forgeGroup);
}

// ============================================================================
// 3. CÁC CÔNG TRÌNH BỜ NENE (PHONG CÁCH ẢNH 2: PHỐ CỔ MACHIYA & HOA ANH ĐÀO)
// ============================================================================

// A. Trà Quán Sakura (Task Nene - Giống nhà mặt tiền ảnh 2)
function buildNeneTeaHouse() {
  const group = new THREE.Group();
  group.position.set(STATIONS.nene_tea.pos.x, 0, STATIONS.nene_tea.pos.z);

  const pad = new THREE.Mesh(new THREE.BoxGeometry(11.5, 0.7, 10.5), MATS.groundNene);
  pad.position.y = 0.35;
  group.add(pad);

  // Nhà phố Machiya 2 tầng truyền thống Kyoto
  const groundFloor = new THREE.Mesh(new THREE.BoxGeometry(8.4, 3.6, 6.6), MATS.woodWarm);
  groundFloor.position.set(0, 2.1, -0.5);
  group.add(groundFloor);

  // Vách giấy Shoji trắng ấm áp & rèm noren xanh chàm
  const shoji = new THREE.Mesh(new THREE.BoxGeometry(8.5, 2.2, 6.75), MATS.shojiGlow);
  shoji.position.set(0, 2.0, -0.5);
  const noren = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.2, 0.15), MATS.norenBlue);
  noren.position.set(0, 2.6, 2.9);
  group.add(shoji, noren);

  // Hiên gỗ Engawa bước vào quán trà
  const engawa = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.4, 2.2), MATS.woodWarm);
  engawa.position.set(0, 0.5, 3.8);
  group.add(engawa);

  // Mái ngói cong tầng 1
  const roof1 = createCurvedRoof(10.2, 8.4, 1.6, MATS.kawaraRoofDark);
  roof1.position.set(0, 4.0, -0.5);
  group.add(roof1);

  // Tầng 2 trà quán
  const upperFloor = new THREE.Mesh(new THREE.BoxGeometry(6.6, 2.6, 5.2), MATS.shikkuiWhite);
  upperFloor.position.set(0, 5.8, -0.5);
  const upperShoji = new THREE.Mesh(new THREE.BoxGeometry(6.75, 1.6, 5.35), MATS.shojiGlow);
  upperShoji.position.set(0, 5.8, -0.5);
  group.add(upperFloor, upperShoji);

  const roof2 = createCurvedRoof(8.4, 7.0, 1.6, MATS.kawaraRoofDark);
  roof2.position.set(0, 7.2, -0.5);
  group.add(roof2);

  // Đèn lồng giấy ấm Andon phong cách Kyoto trước cửa
  const lLeft = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.2, 0.6), MATS.lanternWarmGlow);
  lLeft.position.set(-2.8, 1.6, 3.6);
  const lRight = lLeft.clone();
  lRight.position.x = 2.8;
  group.add(lLeft, lRight);

  // Chén trà hoa anh đào khổng lồ xoay trên nóc
  const teaCupGroup = new THREE.Group();
  teaCupGroup.position.set(0, 9.8, -0.5);
  const cup = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 0.7, 1.2, 16), MATS.white);
  const matcha = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 0.95, 0.2, 16), MATS.sakuraPink);
  matcha.position.y = 0.5;
  teaCupGroup.add(cup, matcha);
  group.add(teaCupGroup);
  animatedObjects.push({ mesh: teaCupGroup, type: 'spinY', speed: 1.5, baseY: 9.8 });

  enableShadow(group);
  registerStationHitbox('nene_tea', group, 8.0, 11);
  scene.add(group);
}

// B. Thương Điếm Sáng Tạo & Lầu Nguyệt Quang của Nene
function buildNeneExtras() {
  // Thương Điếm Sáng Tạo
  const studioGroup = new THREE.Group();
  studioGroup.position.set(STATIONS.nene_studio.pos.x, 0, STATIONS.nene_studio.pos.z);
  const sPad = new THREE.Mesh(new THREE.BoxGeometry(11.0, 0.8, 11.0), MATS.groundNene);
  sPad.position.y = 0.4;
  const sBody1 = new THREE.Mesh(new THREE.BoxGeometry(7.6, 3.8, 6.8), MATS.woodWarm);
  sBody1.position.set(0, 2.5, 0);
  const sRoof1 = createCurvedRoof(9.4, 8.4, 1.6, MATS.kawaraRoofDark);
  sRoof1.position.set(0, 4.6, 0);
  const sBody2 = new THREE.Mesh(new THREE.BoxGeometry(5.6, 2.8, 5.0), MATS.shikkuiWhite);
  sBody2.position.set(0, 6.4, 0);
  const sRoof2 = createCurvedRoof(7.2, 6.4, 1.5, MATS.kawaraRoofDark);
  sRoof2.position.set(0, 8.0, 0);
  // Dải lụa sáng tạo hoa đào xoay tròn
  const ribbon = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.22, 12, 32), MATS.sakuraDeep);
  ribbon.rotation.x = Math.PI / 3;
  ribbon.position.set(0, 10.5, 0);
  studioGroup.add(sPad, sBody1, sRoof1, sBody2, sRoof2, ribbon);
  animatedObjects.push({ mesh: ribbon, type: 'spinY', speed: 2.0, baseY: 10.5 });
  enableShadow(studioGroup);
  registerStationHitbox('nene_studio', studioGroup, 8.0, 13);
  scene.add(studioGroup);

  // Lầu Nguyệt Quang (Tháp Đồng Hồ Nene)
  const clockGroup = new THREE.Group();
  clockGroup.position.set(STATIONS.nene_clock.pos.x, 0, STATIONS.nene_clock.pos.z);
  const cPad = new THREE.Mesh(new THREE.BoxGeometry(8.5, 0.6, 8.5), MATS.groundNene);
  cPad.position.y = 0.3;
  const cTower = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 3.0, 6.5, 8), MATS.woodWarm);
  cTower.position.y = 3.6;
  const cRoof = createCurvedRoof(7.0, 7.0, 1.8, MATS.kawaraRoofDark);
  cRoof.position.y = 7.0;
  // Mặt trăng lưỡi liềm vàng trên đỉnh
  const moon = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.2, 8, 24, Math.PI * 1.3), MATS.goldTrim);
  moon.position.set(0, 9.4, 0);
  clockGroup.add(cPad, cTower, cRoof, moon);
  animatedObjects.push({ mesh: moon, type: 'spinY', speed: 1.4, baseY: 9.4 });
  enableShadow(clockGroup);
  registerStationHitbox('nene_clock', clockGroup, 6.5, 12);
  scene.add(clockGroup);

  // Tiệm Bánh Wagashi & Ngân Khố
  const wagashiGroup = new THREE.Group();
  wagashiGroup.position.set(STATIONS.nene_wagashi.pos.x, 0, STATIONS.nene_wagashi.pos.z);
  const wPad = new THREE.Mesh(new THREE.BoxGeometry(9.5, 0.6, 8.5), MATS.groundNene);
  wPad.position.y = 0.3;
  const wHouse = new THREE.Mesh(new THREE.BoxGeometry(6.6, 3.6, 5.4), MATS.shikkuiWhite);
  wHouse.position.set(0, 2.1, 0);
  const wRoof = createCurvedRoof(8.4, 7.0, 1.5, MATS.kawaraRoofDark);
  wRoof.position.set(0, 4.1, 0);
  // Mèo Thần Tài nhỏ nhắn Maneki-Neko
  const luckyCat = new THREE.Mesh(new THREE.SphereGeometry(1.0, 16, 16), MATS.white);
  luckyCat.position.set(0, 6.4, 0);
  wagashiGroup.add(wPad, wHouse, wRoof, luckyCat);
  animatedObjects.push({ mesh: luckyCat, type: 'spinY', speed: 1.2, baseY: 6.4 });
  enableShadow(wagashiGroup);
  registerStationHitbox('nene_wagashi', wagashiGroup, 7.0, 10);
  scene.add(wagashiGroup);
}

// Helper: Cây Cổng Torii
function createToriiGate(scale = 1) {
  const tg = new THREE.Group();
  const pillarGeo = new THREE.CylinderGeometry(0.2 * scale, 0.24 * scale, 3.8 * scale, 12);
  const pL = new THREE.Mesh(pillarGeo, MATS.vermilionRed);
  pL.position.set(-1.4 * scale, 1.9 * scale, 0);
  const pR = pL.clone();
  pR.position.x = 1.4 * scale;

  const nuki = new THREE.Mesh(new THREE.BoxGeometry(3.5 * scale, 0.22 * scale, 0.2 * scale), MATS.vermilionRed);
  nuki.position.y = 2.9 * scale;
  const kasagi = new THREE.Mesh(new THREE.BoxGeometry(4.2 * scale, 0.28 * scale, 0.38 * scale), MATS.vermilionRed);
  kasagi.position.y = 3.8 * scale;
  tg.add(pL, pR, nuki, kasagi);
  return tg;
}

// ============================================================================
// 4. CÂY CỐI & CẢNH QUAN 2 BỜ: LÁ PHONG ĐỎ (THANH) & HOA ANH ĐÀO (NENE)
// ============================================================================
function createMapleTree(scale = 1) {
  const tg = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.22 * scale, 0.36 * scale, 2.4 * scale, 8), MATS.woodDark);
  trunk.position.y = 1.2 * scale;
  tg.add(trunk);

  const puffs = [
    { x: 0, y: 2.8, z: 0, r: 1.4, mat: MATS.mapleRed },
    { x: -0.85, y: 2.5, z: 0.4, r: 1.05, mat: MATS.mapleOrange },
    { x: 0.85, y: 2.6, z: -0.4, r: 1.1, mat: MATS.mapleGold },
    { x: 0.2, y: 3.3, z: 0.6, r: 0.95, mat: MATS.mapleRed }
  ];
  puffs.forEach(p => {
    const puff = new THREE.Mesh(new THREE.DodecahedronGeometry(p.r * scale, 1), p.mat);
    puff.scale.y = 0.85;
    puff.position.set(p.x * scale, p.y * scale, p.z * scale);
    tg.add(puff);
  });
  return tg;
}

function createSakuraTree(scale = 1) {
  const tg = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.2 * scale, 0.34 * scale, 2.4 * scale, 8), MATS.woodWarm);
  trunk.position.y = 1.2 * scale;
  tg.add(trunk);

  const puffs = [
    { x: 0, y: 2.8, z: 0, r: 1.4, mat: MATS.sakuraPink },
    { x: -0.85, y: 2.5, z: 0.4, r: 1.05, mat: MATS.sakuraLight },
    { x: 0.85, y: 2.6, z: -0.4, r: 1.1, mat: MATS.sakuraDeep },
    { x: 0.2, y: 3.3, z: 0.6, r: 0.95, mat: MATS.sakuraPink }
  ];
  puffs.forEach(p => {
    const puff = new THREE.Mesh(new THREE.SphereGeometry(p.r * scale, 12, 12), p.mat);
    puff.scale.y = 0.82;
    puff.position.set(p.x * scale, p.y * scale, p.z * scale);
    tg.add(puff);
  });
  return tg;
}

function buildFloraScenery() {
  // Rừng cây Lá phong đỏ bên bờ Thanh (X < -4)
  const maplePositions = [
    [-9, 12, 1.2], [-14, 18, 1.35], [-24, 18, 1.2], [-32, 8, 1.4],
    [-28, -6, 1.3], [-18, -20, 1.4], [-30, -18, 1.25], [-8, -14, 1.1],
    [-11, -2, 1.15], [-20, 2, 1.3]
  ];
  maplePositions.forEach(([mx, mz, ms]) => {
    const tree = createMapleTree(ms);
    tree.position.set(mx, 0, mz);
    enableShadow(tree);
    scene.add(tree);
  });

  // Rừng cây Hoa anh đào bên bờ Nene (X > 4)
  const sakuraPositions = [
    [9, 12, 1.2], [14, 18, 1.35], [24, 18, 1.2], [32, 8, 1.4],
    [28, -6, 1.3], [18, -20, 1.4], [30, -18, 1.25], [8, -14, 1.1],
    [11, -2, 1.15], [20, 2, 1.3]
  ];
  sakuraPositions.forEach(([sx, sz, ss]) => {
    const tree = createSakuraTree(ss);
    tree.position.set(sx, 0, sz);
    enableShadow(tree);
    scene.add(tree);
  });
}

// ============================================================================
// 5. TÀU SHINKANSEN KẾT NỐI 2 BỜ & NHÂN VẬT CHIBI THANH - NENE
// ============================================================================
const trackWaypoints = [
  new THREE.Vector3(-22, 0.25, -5),
  new THREE.Vector3(-14, 0.25, 4),
  new THREE.Vector3(0, 0.65, 12),  // Qua cầu suối Onsen
  new THREE.Vector3(14, 0.25, 4),
  new THREE.Vector3(22, 0.25, -5),
  new THREE.Vector3(16, 0.25, -16),
  new THREE.Vector3(0, 0.65, -12), // Qua cầu phía bắc
  new THREE.Vector3(-16, 0.25, -16)
];
const trackCurve = new THREE.CatmullRomCurve3(trackWaypoints, true);

let trainMesh;
let trainProgress = 0;

function buildRailwayAndTrain() {
  const points = trackCurve.getSpacedPoints(140);
  const railGroup = new THREE.Group();
  for (let i = 0; i < points.length; i++) {
    const pt = points[i];
    const tangent = trackCurve.getTangent(i / points.length);
    const sleeper = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.12, 0.4), MATS.woodDark);
    sleeper.position.copy(pt);
    sleeper.lookAt(pt.clone().add(tangent));
    railGroup.add(sleeper);
  }
  const tube = new THREE.Mesh(
    new THREE.TubeGeometry(trackCurve, 140, 0.12, 8, true),
    MATS.onsenRock
  );
  tube.position.y = 0.08;
  railGroup.add(tube);
  scene.add(railGroup);

  // Đoàn tàu Shinkansen đỏ-hồng kết nối 2 bờ
  trainMesh = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.3, 3.4), MATS.white);
  body.position.y = 0.9;
  const stripeRed = new THREE.Mesh(new THREE.BoxGeometry(1.85, 0.25, 3.42), MATS.vermilionRed);
  stripeRed.position.y = 0.85;
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.9, 1.8, 14), MATS.white);
  nose.rotation.x = Math.PI / 2;
  nose.position.set(0, 0.75, 2.5);
  trainMesh.add(body, stripeRed, nose);
  enableShadow(trainMesh);
  scene.add(trainMesh);
}

// 2 Nhân vật chính: Chibi Thanh 🍁 & Chibi Nene 🌸
const characters = [];

function buildChibiCouple() {
  // 1. Chibi Thanh (Samurai Haori Đỏ - Bờ Lá Phong)
  const thanhGroup = new THREE.Group();
  const tKimono = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.62, 1.25, 14), MATS.woodDark);
  tKimono.position.y = 0.72;
  const tHaori = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.66, 1.0, 14), MATS.vermilionDeep);
  tHaori.position.y = 0.8;
  const tHead = new THREE.Mesh(new THREE.SphereGeometry(0.68, 20, 20), new THREE.MeshStandardMaterial({ color: 0xffe0bd }));
  tHead.position.y = 1.88;
  const tHair = new THREE.Mesh(new THREE.SphereGeometry(0.72, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.55), MATS.woodDark);
  tHair.position.y = 1.95;
  const tBun = new THREE.Mesh(new THREE.SphereGeometry(0.24, 10, 10), MATS.woodDark);
  tBun.position.set(0, 2.65, -0.15);
  thanhGroup.add(tKimono, tHaori, tHead, tHair, tBun);
  enableShadow(thanhGroup);
  scene.add(thanhGroup);

  const tLabel = document.createElement('div');
  tLabel.className = 'worker-label';
  tLabel.textContent = '🍁 Thanh';
  labelsContainer.appendChild(tLabel);

  characters.push({
    mesh: thanhGroup,
    labelEl: tLabel,
    start: new THREE.Vector3(-14, 0, 4),
    end: new THREE.Vector3(-1, 0.4, 6.5), // Gặp nhau giữa cầu Onsen
    t: 0,
    dir: 1,
    speed: 0.18
  });

  // 2. Chibi Nene (Kimono Hoa Đào Hồng - Bờ Sakura)
  const neneGroup = new THREE.Group();
  const nKimono = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.62, 1.25, 14), MATS.sakuraPink);
  nKimono.position.y = 0.72;
  const nObi = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.52, 0.32, 14), MATS.vermilionRed);
  nObi.position.y = 0.78;
  const nHead = new THREE.Mesh(new THREE.SphereGeometry(0.66, 20, 20), new THREE.MeshStandardMaterial({ color: 0xffe0bd }));
  nHead.position.y = 1.86;
  const nHair = new THREE.Mesh(new THREE.SphereGeometry(0.7, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.58), MATS.woodDark);
  nHair.position.y = 1.92;
  const nFlower = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 8), MATS.sakuraDeep);
  nFlower.position.set(0.55, 2.3, 0.2);
  neneGroup.add(nKimono, nObi, nHead, nHair, nFlower);
  enableShadow(neneGroup);
  scene.add(neneGroup);

  const nLabel = document.createElement('div');
  nLabel.className = 'worker-label';
  nLabel.textContent = '🌸 Nene';
  labelsContainer.appendChild(nLabel);

  characters.push({
    mesh: neneGroup,
    labelEl: nLabel,
    start: new THREE.Vector3(14, 0, 4),
    end: new THREE.Vector3(1, 0.4, 6.5), // Gặp nhau giữa cầu Onsen
    t: 0,
    dir: 1,
    speed: 0.18
  });
}

// ============================================================================
// 6. HỆ THỐNG THỜI TIẾT 4 MÙA (XUÂN, HẠ, THU, ĐÔNG) & HƠI NƯỚC ONSEN
// ============================================================================
const particles = [];
let onsenSteamParticles = [];

function initWeatherParticles() {
  // Hơi nước Onsen bốc lên nghi ngút
  const steamGeo = new THREE.SphereGeometry(0.35, 8, 8);
  const steamMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 });
  for (let s = 0; s < 45; s++) {
    const sp = new THREE.Mesh(steamGeo, steamMat);
    sp.position.set(
      (Math.random() - 0.5) * 5.5,
      0.4 + Math.random() * 4.5,
      (Math.random() - 0.5) * 25
    );
    scene.add(sp);
    onsenSteamParticles.push({
      mesh: sp,
      speedY: 0.6 + Math.random() * 0.8,
      baseX: sp.position.x,
      baseZ: sp.position.z,
      scaleSpeed: 0.4 + Math.random() * 0.4
    });
  }

  // 150 hạt thời tiết 4 mùa (Cánh hoa anh đào, Lá phong, Đom đóm, Bông tuyết)
  const pGeo = new THREE.PlaneGeometry(0.3, 0.26);
  const pMat = new THREE.MeshBasicMaterial({ color: 0xffb7c5, side: THREE.DoubleSide, transparent: true, opacity: 0.9 });
  for (let i = 0; i < 150; i++) {
    const pMesh = new THREE.Mesh(pGeo, pMat);
    pMesh.position.set(
      (Math.random() - 0.5) * 75,
      2 + Math.random() * 24,
      (Math.random() - 0.5) * 70
    );
    pMesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    scene.add(pMesh);
    particles.push({
      mesh: pMesh,
      speedY: 0.8 + Math.random() * 1.2,
      driftX: 0.5 + Math.random() * 0.8,
      phase: Math.random() * Math.PI * 2
    });
  }
}

function applySeason(seasonName) {
  state.currentSeason = seasonName;
  document.querySelectorAll('.season-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.season === seasonName);
  });

  particles.forEach(p => {
    if (seasonName === 'spring') {
      // Mùa Xuân: Cánh hoa anh đào hồng bay lãng mạn
      p.mesh.material.color.setHex(0xffb7c5);
      p.speedY = 1.0;
    } else if (seasonName === 'summer') {
      // Mùa Hạ: Đom đóm vàng xanh đêm rực rỡ
      p.mesh.material.color.setHex(0xc8f700);
      p.speedY = 0.4;
    } else if (seasonName === 'autumn') {
      // Mùa Thu: Mưa lá phong đỏ & cam rực lửa
      p.mesh.material.color.setHex(Math.random() > 0.5 ? 0xd92027 : 0xf37121);
      p.speedY = 1.4;
    } else if (seasonName === 'winter') {
      // Mùa Đông: Tuyết trắng lấp lánh rơi dày phủ mái ngói
      p.mesh.material.color.setHex(0xffffff);
      p.speedY = 1.8;
    }
  });

  if (seasonName === 'winter') {
    scene.background.setHex(0xd0d8e2);
    scene.fog.color.setHex(0xd0d8e2);
    groundThanhMesh.material.color.setHex(0xe8edf2);
    groundNeneMesh.material.color.setHex(0xf0f4f8);
  } else if (seasonName === 'autumn') {
    scene.background.setHex(0xf8d8c2);
    scene.fog.color.setHex(0xf8d8c2);
    groundThanhMesh.material.color.setHex(0xd9c2a7);
    groundNeneMesh.material.color.setHex(0xdde6d5);
  } else if (seasonName === 'spring') {
    scene.background.setHex(0xfde2e4);
    scene.fog.color.setHex(0xfde2e4);
    groundThanhMesh.material.color.setHex(0xd9c2a7);
    groundNeneMesh.material.color.setHex(0xdde6d5);
  } else {
    // Summer
    scene.background.setHex(0xdcebd5);
    scene.fog.color.setHex(0xdcebd5);
    groundThanhMesh.material.color.setHex(0xd9c2a7);
    groundNeneMesh.material.color.setHex(0xdde6d5);
  }

  showToast(`🌸 Thời tiết đã chuyển sang: MÙA ${seasonName === 'spring' ? 'XUÂN' : seasonName === 'summer' ? 'HẠ' : seasonName === 'autumn' ? 'THU' : 'ĐÔNG'}!`);
}

// ============================================================================
// 7. HỆ THỐNG PHÁO HOA 3D & ĐẠI TIỆC PHÁO HOA 5 TASKS (MEGA FIREWORKS)
// ============================================================================
const fireworks = [];

function spawnSingleFirework(posX, posY, posZ, colorHex = 0xff3b30) {
  const count = 28;
  for (let i = 0; i < count; i++) {
    const p = new THREE.Mesh(
      new THREE.SphereGeometry(0.24, 8, 8),
      new THREE.MeshStandardMaterial({
        color: colorHex,
        emissive: colorHex,
        emissiveIntensity: 0.9,
        roughness: 0.2
      })
    );
    p.position.set(posX, posY, posZ);
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const speed = 4.5 + Math.random() * 5.5;
    const vel = new THREE.Vector3(
      Math.sin(phi) * Math.cos(theta) * speed,
      Math.sin(phi) * Math.sin(theta) * speed + 3,
      Math.cos(phi) * speed
    );
    scene.add(p);
    fireworks.push({ mesh: p, vel, life: 1.4, maxLife: 1.4 });
  }
}

function triggerMegaFireworks(customMessage = null) {
  const colors = [0xff3b30, 0xff9500, 0xffcc00, 0x4cd964, 0x5ac8fa, 0x007aff, 0x5856d6, 0xff2d55];
  const launchPoints = [
    { x: -16, z: 6 }, { x: 16, z: 6 },
    { x: -22, z: -14 }, { x: 23, z: -12 },
    { x: 0, z: 0 }, { x: -8, z: 12 }, { x: 8, z: 12 }
  ];

  // Bắn liên hồi 8-10 phát pháo hoa rực sáng
  for (let wave = 0; wave < 8; wave++) {
    setTimeout(() => {
      const pt = launchPoints[wave % launchPoints.length];
      const col = colors[wave % colors.length];
      spawnSingleFirework(
        pt.x + (Math.random() - 0.5) * 4,
        14 + Math.random() * 8,
        pt.z + (Math.random() - 0.5) * 4,
        col
      );
    }, wave * 380);
  }

  // Hiển thị Banner chúc mừng Đại Tiệc Pháo Hoa
  const banner = document.getElementById('mega-fireworks-banner');
  if (banner) {
    if (customMessage) {
      document.getElementById('fw-banner-sub').textContent = customMessage;
    }
    banner.classList.remove('hidden');
    setTimeout(() => banner.classList.add('hidden'), 4800);
  }
}

// ============================================================================
// 8. TẠO TẤT CẢ CÔNG TRÌNH VÀ BẮT ĐẦU VÒNG LẶP RENDER 3D
// ============================================================================
buildOnsenCenter();
buildThanhDojo();
buildThanhTower();
buildThanhExtras();
buildNeneTeaHouse();
buildNeneExtras();
buildFloraScenery();
buildRailwayAndTrain();
buildChibiCouple();
initWeatherParticles();

// Tạo các nhãn 3D nổi trên màn hình
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

function updateWorldBadges() {
  Object.values(STATIONS).forEach(st => {
    const el = stationLabelEls[st.id];
    if (!el) return;
    const bar = document.getElementById(`bar-${st.id}`);
    const pct = document.getElementById(`pct-${st.id}`);
    const bubble = document.getElementById(`bubble-${st.id}`);

    let done = 0;
    let total = 1;
    let bText = st.bubble;

    if (st.id === 'thanh_dojo') {
      const all = [...state.thanh.tasks.day, ...state.thanh.tasks.week, ...state.thanh.tasks.month];
      done = all.filter(t => t.done).length;
      total = all.length;
      const pending = state.thanh.tasks.day.filter(t => !t.done);
      bText = pending.length ? `🍁 Đang làm: "${pending[0].title}"` : 'Thanh đã xong hết task ngày!';
    } else if (st.id === 'nene_tea') {
      const all = [...state.nene.tasks.day, ...state.nene.tasks.week, ...state.nene.tasks.month];
      done = all.filter(t => t.done).length;
      total = all.length;
      const pending = state.nene.tasks.day.filter(t => !t.done);
      bText = pending.length ? `🌸 Đang làm: "${pending[0].title}"` : 'Nene đã hoàn thành hết task ngày!';
    } else if (st.id === 'onsen_hub') {
      done = state.shared.tasks.filter(t => t.done).length;
      total = state.shared.tasks.length;
      bText = `♨️ Việc chung: ${done}/${total} việc xong · Hòa hợp 100%!`;
    }

    const p = Math.round((done / Math.max(total, 1)) * 100);
    if (bar) bar.style.width = `${p}%`;
    if (pct) pct.textContent = `${p}%`;
    if (bubble) bubble.textContent = bText;

    el.classList.toggle('active', state.activeStation === st.id);
    if (activeRingMeshes[st.id]) {
      activeRingMeshes[st.id].material.opacity = state.activeStation === st.id ? 0.8 : 0.0;
    }
  });
}

function updateTopSummary() {
  const thanhAll = [...state.thanh.tasks.day, ...state.thanh.tasks.week, ...state.thanh.tasks.month];
  const neneAll = [...state.nene.tasks.day, ...state.nene.tasks.week, ...state.nene.tasks.month];
  const totalAll = [...thanhAll, ...neneAll, ...state.shared.tasks];
  const totalDone = totalAll.filter(t => t.done).length;

  document.getElementById('top-stat-tasks').textContent = `${totalDone}/${totalAll.length} task xong`;
  document.getElementById('fw-streak-text').textContent = `${state.completedStreak % 5}/5 task`;

  // Cập nhật số dư theo Persona hiện tại
  if (state.currentUser === 'thanh') {
    const inc = state.thanh.finance.transactions.filter(t => t.type === 'income').reduce((s,t) => s + t.amount, 0);
    const exp = state.thanh.finance.transactions.filter(t => t.type === 'expense').reduce((s,t) => s + t.amount, 0);
    document.getElementById('top-stat-budget').textContent = `Thanh: ${formatVND(inc - exp)}`;
  } else if (state.currentUser === 'nene') {
    const inc = state.nene.finance.transactions.filter(t => t.type === 'income').reduce((s,t) => s + t.amount, 0);
    const exp = state.nene.finance.transactions.filter(t => t.type === 'expense').reduce((s,t) => s + t.amount, 0);
    document.getElementById('top-stat-budget').textContent = `Nene: ${formatVND(inc - exp)}`;
  } else {
    document.getElementById('top-stat-budget').textContent = `Cả 2 bờ · ${STATIONS.onsen_hub.shortName}`;
  }
}

// ============================================================================
// CAMERA SMOOTH FLY-TO & INTERACTION
// ============================================================================
let cameraLerp = null;
let autoRotate = false;
let simRunning = true;
let followTrain = false;

function flyToStation(stationId) {
  const st = STATIONS[stationId] || STATIONS.onsen_hub;
  followTrain = false;
  document.getElementById('btn-follow-train').classList.remove('active');

  cameraLerp = {
    targetPos: new THREE.Vector3(
      st.pos.x + st.camOffset.x * 0.45,
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

// Raycaster click vào mô hình 3D trên map
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let pointerDownPos = { x: 0, y: 0 };

renderer.domElement.addEventListener('pointerdown', e => {
  pointerDownPos = { x: e.clientX, y: e.clientY };
});

renderer.domElement.addEventListener('pointerup', e => {
  const dist = Math.hypot(e.clientX - pointerDownPos.x, e.clientY - pointerDownPos.y);
  if (dist > 6) return;

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
// INSPECTOR CARD RENDERING — NỘI DUNG CHI TIẾT TỪNG MÔ HÌNH 3D
// ============================================================================
function renderInspector() {
  const st = STATIONS[state.activeStation] || STATIONS.onsen_hub;
  document.getElementById('insp-avatar').textContent = st.icon;
  document.getElementById('insp-title').textContent = st.name;
  document.getElementById('insp-quote').textContent = `"${st.quote}"`;

  const body = document.getElementById('insp-body');

  // A. SUỐI NƯỚC NÓNG ONSEN TRUNG TÂM (CHUNG CHO CẢ HAI)
  if (st.id === 'onsen_hub') {
    renderOnsenHubPanel(body);
  }
  // B. CÁC CÔNG TRÌNH CỦA THANH (BỜ LÁ PHONG ĐỎ)
  else if (st.id === 'thanh_dojo') {
    renderTasksPanel(body, 'thanh');
  } else if (st.id === 'thanh_tower') {
    renderAppsPanel(body, 'thanh');
  } else if (st.id === 'thanh_bell') {
    renderSchedulePanel(body, 'thanh');
  } else if (st.id === 'thanh_forge') {
    renderFinancePanel(body, 'thanh');
  }
  // C. CÁC CÔNG TRÌNH CỦA NENE (BỜ HOA ANH ĐÀO)
  else if (st.id === 'nene_tea') {
    renderTasksPanel(body, 'nene');
  } else if (st.id === 'nene_studio') {
    renderAppsPanel(body, 'nene');
  } else if (st.id === 'nene_clock') {
    renderSchedulePanel(body, 'nene');
  } else if (st.id === 'nene_wagashi') {
    renderFinancePanel(body, 'nene');
  }
}

// 1. Render Onsen Hub Panel (Việc chung của 2 người)
function renderOnsenHubPanel(body) {
  const thanhAll = [...state.thanh.tasks.day, ...state.thanh.tasks.week, ...state.thanh.tasks.month];
  const neneAll = [...state.nene.tasks.day, ...state.nene.tasks.week, ...state.nene.tasks.month];
  const tDone = thanhAll.filter(t => t.done).length;
  const nDone = neneAll.filter(t => t.done).length;

  body.innerHTML = `
    <div class="metric-grid">
      <div class="metric-box" style="border-left: 3px solid #d63031;">
        <div class="label">🍁 Tiến độ Thanh</div>
        <div class="val" style="color:#d63031;">${tDone}/${thanhAll.length} task</div>
        <div class="sub">Bờ Lá Phong Đỏ</div>
      </div>
      <div class="metric-box" style="border-left: 3px solid #e84393;">
        <div class="label">🌸 Tiến độ Nene</div>
        <div class="val" style="color:#e84393;">${nDone}/${neneAll.length} task</div>
        <div class="sub">Bờ Hoa Anh Đào</div>
      </div>
    </div>

    <div style="font-size:12px; font-weight:800; color:var(--maroon-main); margin: 8px 0 6px;">
      ♨️ CÔNG VIỆC CHUNG CỦA HAI ĐỨA (SHARED TASKS):
    </div>
    <div class="item-list">
      ${state.shared.tasks.map(t => `
        <div class="list-item ${t.done ? 'done' : ''}">
          <div class="item-left">
            <input type="checkbox" class="item-check" ${t.done ? 'checked' : ''}
              onchange="window.toggleSharedTask('${t.id}')" />
            <div class="item-info">
              <div class="item-title">${t.title}</div>
              <div class="item-meta">
                <span class="tag-badge green">♨️ ${t.by}</span>
              </div>
            </div>
          </div>
          <button class="delete-btn" onclick="window.deleteSharedTask('${t.id}')">✕</button>
        </div>
      `).join('')}
    </div>

    <form class="add-form" onsubmit="window.addSharedTask(event)">
      <div class="add-form-title">+ Thêm kế hoạch chung của Thanh & Nene</div>
      <input class="form-input" name="title" placeholder="Ví dụ: Đi ăn tối món Nhật, du lịch Đà Lạt..." required />
      <button type="submit" class="btn-primary">Thêm Vào Suối Onsen</button>
    </form>

    <div style="font-size:12px; font-weight:800; color:var(--maroon-main); margin: 12px 0 6px;">
      💑 MỤC TIÊU GẮN KẾT (COUPLE GOALS):
    </div>
    <div class="item-list">
      ${state.shared.coupleGoals.map(g => `
        <div class="list-item">
          <div class="item-left">
            <span style="font-size:18px;">🔥</span>
            <div class="item-info">
              <div class="item-title">${g.title}</div>
              <div class="item-meta">
                <span class="tag-badge orange">Chuỗi ${g.streak} ngày</span>
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// 2. Render Task Panel (Theo luồng Thanh hoặc Nene)
function renderTasksPanel(body, role) {
  const data = state[role];
  const tab = state.taskSubTab || 'day';
  const list = data.tasks[tab] || [];
  const doneCount = list.filter(t => t.done).length;
  const isThanh = role === 'thanh';

  body.innerHTML = `
    <div class="sub-tabs">
      <button class="sub-tab ${tab === 'day' ? 'active' : ''}" onclick="window.setTaskTab('${role}', 'day')">
        Hôm nay (${data.tasks.day.length})
      </button>
      <button class="sub-tab ${tab === 'week' ? 'active' : ''}" onclick="window.setTaskTab('${role}', 'week')">
        Tuần (${data.tasks.week.length})
      </button>
      <button class="sub-tab ${tab === 'month' ? 'active' : ''}" onclick="window.setTaskTab('${role}', 'month')">
        Tháng (${data.tasks.month.length})
      </button>
    </div>

    <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:700; margin-bottom:8px;">
      <span>Tiến độ ${isThanh ? '🍁 Thanh' : '🌸 Nene'}:</span>
      <span style="color:var(--accent-green); font-size:13px;">${doneCount}/${list.length} hoàn thành</span>
    </div>

    <div class="item-list">
      ${list.map(t => {
        const badgeColor = t.priority === 'Cao' ? 'red' : (t.priority === 'Trung bình' ? 'orange' : 'green');
        return `
          <div class="list-item ${t.done ? 'done' : ''}">
            <div class="item-left">
              <input type="checkbox" class="item-check" ${t.done ? 'checked' : ''}
                onchange="window.toggleTask('${role}', '${tab}', '${t.id}')" />
              <div class="item-info">
                <div class="item-title">${t.title}</div>
                <div class="item-meta">
                  <span class="tag-badge ${badgeColor}">${t.priority}</span>
                  <span>🕒 ${t.time}</span>
                </div>
              </div>
            </div>
            <button class="delete-btn" onclick="window.deleteTask('${role}', '${tab}', '${t.id}')">✕</button>
          </div>
        `;
      }).join('')}
    </div>

    <form class="add-form" onsubmit="window.addTask(event, '${role}', '${tab}')">
      <div class="add-form-title">+ Thêm công việc mới cho ${isThanh ? 'Thanh' : 'Nene'} (${tab === 'day' ? 'Ngày' : tab === 'week' ? 'Tuần' : 'Tháng'})</div>
      <input class="form-input" name="title" placeholder="Nhập tên việc cần làm..." required />
      <div class="form-row">
        <select class="form-select" name="priority">
          <option value="Cao">Ưu tiên: Cao</option>
          <option value="Trung bình" selected>Ưu tiên: Trung bình</option>
          <option value="Thấp">Ưu tiên: Thấp</option>
        </select>
        <input class="form-input" name="time" placeholder="Giờ / Hạn (VD: 15:00)" value="Hôm nay" />
      </div>
      <button type="submit" class="btn-primary" style="${isThanh ? 'background:#d63031;' : 'background:#e84393;'}">Thêm Vào Danh Sách</button>
    </form>
  `;
}

// 3. Render Schedule Panel
function renderSchedulePanel(body, role) {
  const data = state[role];
  const isThanh = role === 'thanh';

  body.innerHTML = `
    <div style="font-size:12px; font-weight:800; color:var(--maroon-main); margin-bottom:8px;">
      ${isThanh ? '🔔 LỊCH TRÌNH & DEEP WORK CỦA THANH' : '🕰️ LỊCH TRÌNH & HẸN HÒ CỦA NENE'}
    </div>
    <div class="item-list">
      ${data.schedule.map(s => {
        const stClass = s.status === 'Đã xong' ? 'green' : (s.status === 'Đang diễn ra' ? 'red' : 'orange');
        return `
          <div class="list-item ${s.status === 'Đã xong' ? 'done' : ''}">
            <div class="item-left">
              <input type="checkbox" class="item-check" ${s.status === 'Đã xong' ? 'checked' : ''}
                onchange="window.toggleSchedule('${role}', '${s.id}')" />
              <div class="item-info">
                <div class="item-title">${s.title}</div>
                <div class="item-meta">
                  <span class="tag-badge">${s.time}</span>
                  <span class="tag-badge ${stClass}">${s.status}</span>
                </div>
              </div>
            </div>
            <button class="delete-btn" onclick="window.deleteSchedule('${role}', '${s.id}')">✕</button>
          </div>
        `;
      }).join('')}
    </div>

    <form class="add-form" onsubmit="window.addSchedule(event, '${role}')">
      <div class="add-form-title">+ Thêm khung giờ mới cho ${isThanh ? 'Thanh' : 'Nene'}</div>
      <input class="form-input" name="title" placeholder="Nội dung công việc..." required />
      <div class="form-row">
        <input class="form-input" name="time" placeholder="Khung giờ (VD: 14:00 - 16:00)" required />
        <select class="form-select" name="status">
          <option value="Sắp tới">Sắp tới</option>
          <option value="Đang diễn ra">Đang diễn ra</option>
          <option value="Đã xong">Đã xong</option>
        </select>
      </div>
      <button type="submit" class="btn-primary" style="${isThanh ? 'background:#d63031;' : 'background:#e84393;'}">Thêm Khung Giờ</button>
    </form>
  `;
}

// 4. Render Finance Panel
function renderFinancePanel(body, role) {
  const data = state[role];
  const isThanh = role === 'thanh';
  const income = data.finance.transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const expense = data.finance.transactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  const balance = income - expense;

  body.innerHTML = `
    <div class="metric-grid">
      <div class="metric-box">
        <div class="label">Tổng thu nhập (${isThanh ? 'Thanh' : 'Nene'})</div>
        <div class="val" style="color:var(--accent-green)">+${formatVND(income)}</div>
      </div>
      <div class="metric-box">
        <div class="label">Tổng chi tiêu</div>
        <div class="val" style="color:var(--accent-red)">-${formatVND(expense)}</div>
      </div>
    </div>

    <div class="metric-box" style="margin-bottom:10px;">
      <div style="display:flex; justify-content:space-between;">
        <span class="label">Số dư khả dụng:</span>
        <strong style="color:var(--maroon-main); font-size:15px;">${formatVND(balance)}</strong>
      </div>
    </div>

    <div class="item-list">
      ${data.finance.transactions.map(t => `
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
          <div style="text-align:right;">
            <div style="font-size:12px; font-weight:800; color:${t.type === 'income' ? 'var(--accent-green)' : 'var(--accent-red)'}">
              ${t.type === 'income' ? '+' : '-'}${formatVND(t.amount)}
            </div>
            <button class="delete-btn" style="margin-top:2px;" onclick="window.deleteTransaction('${role}', '${t.id}')">✕</button>
          </div>
        </div>
      `).join('')}
    </div>

    <form class="add-form" onsubmit="window.addTransaction(event, '${role}')">
      <div class="add-form-title">+ Ghi nhận thu / chi (${isThanh ? 'Thanh' : 'Nene'})</div>
      <div class="form-row">
        <select class="form-select" name="type">
          <option value="expense">💸 Khoản Chi</option>
          <option value="income">💰 Khoản Thu</option>
        </select>
        <input class="form-input" name="category" placeholder="Danh mục..." required />
      </div>
      <input class="form-input" name="title" placeholder="Diễn giải khoản tiền..." required />
      <div class="form-row">
        <input class="form-input" type="number" name="amount" placeholder="Số tiền (VNĐ)..." required />
        <button type="submit" class="btn-primary" style="${isThanh ? 'background:#d63031;' : 'background:#e84393;'}">Lưu</button>
      </div>
    </form>
  `;
}

// 5. Render Apps & Projects Panel
function renderAppsPanel(body, role) {
  const data = state[role];
  const isThanh = role === 'thanh';

  body.innerHTML = `
    <div style="font-size:12px; font-weight:800; color:var(--maroon-main); margin-bottom:8px;">
      ${isThanh ? '🏯 DỰ ÁN & HỆ THỐNG CỦA THANH' : '👘 DỰ ÁN SÁNG TẠO & STUDIO CỦA NENE'}
    </div>
    <div class="item-list">
      ${data.apps.map(a => `
        <div class="list-item">
          <div class="item-left">
            <span style="font-size:20px;">📦</span>
            <div class="item-info">
              <div class="item-title">${a.name}</div>
              <div class="item-meta">
                <span class="tag-badge green">${a.status}</span>
                <span>${a.tech}</span>
                <span>• ${a.progress}%</span>
              </div>
            </div>
          </div>
          <button class="delete-btn" onclick="window.deleteApp('${role}', '${a.id}')">✕</button>
        </div>
      `).join('')}
    </div>

    <form class="add-form" onsubmit="window.addApp(event, '${role}')">
      <div class="add-form-title">+ Thêm dự án mới cho ${isThanh ? 'Thanh' : 'Nene'}</div>
      <input class="form-input" name="name" placeholder="Tên dự án / sản phẩm..." required />
      <div class="form-row">
        <input class="form-input" name="tech" placeholder="Công nghệ / Loại hình..." required />
        <select class="form-select" name="status">
          <option value="Đang chạy">Đang chạy</option>
          <option value="Đang code">Đang code</option>
          <option value="Ý tưởng">Ý tưởng</option>
        </select>
      </div>
      <button type="submit" class="btn-primary" style="${isThanh ? 'background:#d63031;' : 'background:#e84393;'}">Thêm Dự Án</button>
    </form>
  `;
}

// ============================================================================
// WINDOW ACTIONS & PHÁO HOA TRIGGER KHI HOÀN THÀNH TASK
// ============================================================================
window.setTaskTab = function(role, tab) {
  state.taskSubTab = tab;
  saveState();
  renderInspector();
};

function handleTaskCompletionReward(stationId, taskTitle) {
  state.completedStreak += 1;
  state.totalCompleted += 1;

  // 1. Luôn bắn pháo hoa đơn lẻ tại vị trí công trình đó
  const st = STATIONS[stationId] || STATIONS.onsen_hub;
  spawnSingleFirework(st.pos.x, 8.5, st.pos.z, stationId.startsWith('thanh') ? 0xd63031 : 0xe84393);
  showToast(`🎆 Đã xong: ${taskTitle}! (${state.completedStreak % 5}/5 task)`);

  // 2. Khi chạm mốc bội số của 5 -> KÍCH HOẠT ĐẠI TIỆC PHÁO HOA LỚN!
  if (state.completedStreak % 5 === 0) {
    triggerMegaFireworks(`🎉 CẢ HAI ĐÃ HOÀN THÀNH MỐC ${state.completedStreak} TASKS! ĐẠI TIỆC PHÁO HOA RỰC SÁNG! 🎉`);
  }
}

window.toggleTask = function(role, tab, id) {
  const item = state[role].tasks[tab].find(t => t.id === id);
  if (item) {
    item.done = !item.done;
    if (item.done) {
      handleTaskCompletionReward(role === 'thanh' ? 'thanh_dojo' : 'nene_tea', item.title);
    }
    saveState({ station: role === 'thanh' ? 'thanh_dojo' : 'nene_tea', msg: `${role === 'thanh' ? 'Thanh' : 'Nene'} cập nhật task: ${item.title}` });
    renderInspector();
  }
};

window.deleteTask = function(role, tab, id) {
  state[role].tasks[tab] = state[role].tasks[tab].filter(t => t.id !== id);
  saveState({ station: 'onsen_hub', msg: 'Đã xóa 1 task' });
  renderInspector();
};

window.addTask = function(e, role, tab) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const title = fd.get('title');
  state[role].tasks[tab].unshift({
    id: role + '_' + Date.now(),
    title,
    priority: fd.get('priority'),
    time: fd.get('time') || 'Hôm nay',
    done: false
  });
  const stId = role === 'thanh' ? 'thanh_dojo' : 'nene_tea';
  spawnSingleFirework(STATIONS[stId].pos.x, 7.5, STATIONS[stId].pos.z, role === 'thanh' ? 0xff3b30 : 0xff2d55);
  showToast(`📋 Đã thêm việc mới cho ${role === 'thanh' ? 'Thanh' : 'Nene'}!`);
  saveState({ station: stId, msg: `Thêm task cho ${role}: ${title}` });
  renderInspector();
};

window.toggleSharedTask = function(id) {
  const item = state.shared.tasks.find(t => t.id === id);
  if (item) {
    item.done = !item.done;
    if (item.done) {
      handleTaskCompletionReward('onsen_hub', `[Việc chung] ${item.title}`);
    }
    saveState({ station: 'onsen_hub', msg: `Việc chung: ${item.title}` });
    renderInspector();
  }
};

window.deleteSharedTask = function(id) {
  state.shared.tasks = state.shared.tasks.filter(t => t.id !== id);
  saveState({ station: 'onsen_hub', msg: 'Xóa 1 việc chung' });
  renderInspector();
};

window.addSharedTask = function(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const title = fd.get('title');
  state.shared.tasks.push({
    id: 'sh_' + Date.now(),
    title,
    done: false,
    by: 'Thanh & Nene'
  });
  spawnSingleFirework(0, 8.5, 0, 0x0984e3);
  showToast('♨️ Đã thêm kế hoạch chung của 2 đứa vào Suối Onsen!');
  saveState({ station: 'onsen_hub', msg: `Kế hoạch đôi: ${title}` });
  renderInspector();
};

window.toggleSchedule = function(role, id) {
  const item = state[role].schedule.find(s => s.id === id);
  if (item) {
    item.status = item.status === 'Đã xong' ? 'Đang diễn ra' : 'Đã xong';
    if (item.status === 'Đã xong') {
      spawnSingleFirework(STATIONS[role === 'thanh' ? 'thanh_bell' : 'nene_clock'].pos.x, 7.5, 0, 0xffaa00);
    }
    saveState({ station: role === 'thanh' ? 'thanh_bell' : 'nene_clock', msg: `Lịch: ${item.title}` });
    renderInspector();
  }
};

window.deleteSchedule = function(role, id) {
  state[role].schedule = state[role].schedule.filter(s => s.id !== id);
  saveState({ station: 'onsen_hub', msg: 'Xóa 1 lịch trình' });
  renderInspector();
};

window.addSchedule = function(e, role) {
  e.preventDefault();
  const fd = new FormData(e.target);
  state[role].schedule.push({
    id: 's_' + Date.now(),
    title: fd.get('title'),
    time: fd.get('time'),
    status: fd.get('status')
  });
  saveState({ station: role === 'thanh' ? 'thanh_bell' : 'nene_clock', msg: 'Cập nhật lịch trình' });
  renderInspector();
};

window.addTransaction = function(e, role) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const now = new Date();
  const dateStr = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}`;
  const type = fd.get('type');
  const amount = Number(fd.get('amount'));
  const title = fd.get('title');

  state[role].finance.transactions.unshift({
    id: 'f_' + Date.now(),
    type,
    category: fd.get('category'),
    title,
    amount,
    date: dateStr
  });
  spawnSingleFirework(STATIONS[role === 'thanh' ? 'thanh_forge' : 'nene_wagashi'].pos.x, 7.5, 0, 0xf3c14b);
  showToast(type === 'income' ? `💰 +${formatVND(amount)} (${role === 'thanh' ? 'Thanh' : 'Nene'})` : `💸 -${formatVND(amount)}`);
  saveState({ station: role === 'thanh' ? 'thanh_forge' : 'nene_wagashi', msg: `Tài chính ${role}: ${title}` });
  renderInspector();
};

window.deleteTransaction = function(role, id) {
  state[role].finance.transactions = state[role].finance.transactions.filter(t => t.id !== id);
  saveState({ station: 'onsen_hub', msg: 'Xóa giao dịch' });
  renderInspector();
};

window.addApp = function(e, role) {
  e.preventDefault();
  const fd = new FormData(e.target);
  state[role].apps.unshift({
    id: 'a_' + Date.now(),
    name: fd.get('name'),
    tech: fd.get('tech'),
    status: fd.get('status'),
    progress: 75
  });
  saveState({ station: role === 'thanh' ? 'thanh_tower' : 'nene_studio', msg: 'Thêm dự án mới' });
  renderInspector();
};

window.deleteApp = function(role, id) {
  state[role].apps = state[role].apps.filter(a => a.id !== id);
  saveState({ station: 'onsen_hub', msg: 'Xóa 1 dự án' });
  renderInspector();
};

// ============================================================================
// TOP BAR SWITCHERS & LOCK SCREEN WIRING
// ============================================================================
function setPersonaView(persona) {
  state.currentUser = persona;
  document.getElementById('btn-role-thanh').classList.toggle('active', persona === 'thanh');
  document.getElementById('btn-role-nene').classList.toggle('active', persona === 'nene');
  document.getElementById('btn-role-all').classList.toggle('active', persona === 'all');

  const heroBanner = document.getElementById('hero-banner-title');
  if (persona === 'thanh') {
    heroBanner.innerHTML = '🍁 Khu Vực Của Thanh (Lá Phong Đỏ · Võ Đường Lễ Hội)';
    selectStation('thanh_dojo', true);
  } else if (persona === 'nene') {
    heroBanner.innerHTML = '🌸 Khu Vực Của Nene (Hoa Anh Đào · Phố Cổ Machiya Kyoto)';
    selectStation('nene_tea', true);
  } else {
    heroBanner.innerHTML = '🍁 Bên Thanh &amp; 🌸 Bên Nene · Kết Nối Bằng Suối Onsen';
    selectStation('onsen_hub', true);
  }
  updateTopSummary();
}

document.getElementById('btn-role-thanh').addEventListener('click', () => setPersonaView('thanh'));
document.getElementById('btn-role-nene').addEventListener('click', () => setPersonaView('nene'));
document.getElementById('btn-role-all').addEventListener('click', () => setPersonaView('all'));

// 4 Seasons Buttons
document.querySelectorAll('.season-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    applySeason(btn.dataset.season);
  });
});

// Nút bắn pháo hoa thủ công trên top bar
document.getElementById('btn-trigger-fireworks').addEventListener('click', () => {
  triggerMegaFireworks('🎆 BẮN PHÁO HOA ĂN MỪNG THỊ TRẤN ĐÔI THANH & NENE! 🎆');
});

// Dock bar links
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

document.getElementById('btn-follow-train').addEventListener('click', e => {
  followTrain = !followTrain;
  cameraLerp = null;
  e.currentTarget.classList.toggle('active', followTrain);
  if (followTrain) showToast('🚄 Camera đang đi theo tàu Shinkansen!');
});

// Theme Ngày / Hoàng hôn / Đêm
let themeMode = 2; // Mặc định Đêm lộng lẫy pháo hoa và đèn lồng!
document.getElementById('btn-theme').addEventListener('click', e => {
  themeMode = (themeMode + 1) % 3;
  if (themeMode === 0) {
    scene.background.setHex(0xdcebd5);
    scene.fog.color.setHex(0xdcebd5);
    ambientLight.intensity = 0.75;
    dirLight.intensity = 0.95;
    dirLight.color.setHex(0xfff0dd);
    e.currentTarget.textContent = '☀️ Sáng';
  } else if (themeMode === 1) {
    scene.background.setHex(0xf8c9b9);
    scene.fog.color.setHex(0xf8c9b9);
    ambientLight.intensity = 0.6;
    dirLight.intensity = 0.85;
    dirLight.color.setHex(0xff8c69);
    e.currentTarget.textContent = '🌅 Hoàng hôn';
  } else {
    scene.background.setHex(0x1a1e36);
    scene.fog.color.setHex(0x1a1e36);
    ambientLight.intensity = 0.45;
    dirLight.intensity = 0.55;
    dirLight.color.setHex(0x90caf9);
    e.currentTarget.textContent = '🌙 Đêm';
  }
});

// ============================================================================
// REAL-TIME CLOUD SYNC & LOCK SCREEN GATEKEEPER
// ============================================================================
const ROOM_KEY = 'lifetown_3d_room_id';
const UNLOCKED_KEY = 'lifetown_3d_room_unlocked';
const ROLE_KEY = 'lifetown_3d_user_role';
const CLIENT_ID = 'lt3d_' + Math.random().toString(36).substring(2, 10);

let currentRoomId = localStorage.getItem(ROOM_KEY) || DEFAULT_ROOM_ID;
let isRoomUnlocked = localStorage.getItem(UNLOCKED_KEY) === '1';
let mqttClients = [];
let sseSource = null;
const seenMsgIds = new Set();

const lockScreenEl = document.getElementById('lock-screen');
const lockRoomInput = document.getElementById('lock-room-input');
const lockShowPin = document.getElementById('lock-show-pin');
const lockRememberMe = document.getElementById('lock-remember-me');

if (lockShowPin) {
  lockShowPin.addEventListener('change', e => {
    lockRoomInput.type = e.target.checked ? 'text' : 'password';
  });
}

document.getElementById('lock-form').addEventListener('submit', e => {
  e.preventDefault();
  const pin = lockRoomInput.value.trim() || DEFAULT_ROOM_ID;
  const roleRadios = document.getElementsByName('lock_role');
  let chosenRole = 'thanh';
  for (const r of roleRadios) {
    if (r.checked) chosenRole = r.value;
  }
  unlockWithRoomAndRole(pin, chosenRole, lockRememberMe.checked);
});

document.getElementById('btn-enter-demo').addEventListener('click', () => {
  document.body.classList.remove('room-locked');
  lockScreenEl.classList.add('hidden');
  showToast('✨ Đang xem bản Demo mẫu!');
});

function unlockWithRoomAndRole(roomId, role, remember = true) {
  currentRoomId = roomId.trim().replace(/[^a-zA-Z0-9_-]/g, '-');
  isRoomUnlocked = true;

  if (remember) {
    localStorage.setItem(ROOM_KEY, currentRoomId);
    localStorage.setItem(UNLOCKED_KEY, '1');
    localStorage.setItem(ROLE_KEY, role);
  }

  document.body.classList.remove('room-locked');
  lockScreenEl.classList.add('hidden');

  setPersonaView(role);
  buildShareLinks();
  connectRealtimeCloud();
  showToast(`🔓 Đã mở khóa phòng ${currentRoomId} · Nhân vật: ${role === 'thanh' ? '🍁 Thanh' : '🌸 Nene'}!`);
}

function updateSyncStatusUI(status, text) {
  const dot = document.getElementById('sync-status-dot');
  const label = document.getElementById('sync-status-text');
  if (dot) {
    dot.classList.remove('connecting', 'offline');
    if (status === 'connecting') dot.classList.add('connecting');
    if (status === 'offline') dot.classList.add('offline');
  }
  if (label) label.textContent = text;
}

function getSyncTopic(roomId) {
  return `lifetown3d_sync_v2/${roomId}/state`;
}

function buildShareLinks() {
  const baseUrl = window.location.origin + window.location.pathname;
  const editInput = document.getElementById('input-share-edit');
  const viewInput = document.getElementById('input-share-view');
  const roomInput = document.getElementById('input-room-id');
  if (editInput) editInput.value = `${baseUrl}`;
  if (viewInput) viewInput.value = `${baseUrl}?view=1`;
  if (roomInput) roomInput.value = currentRoomId;
}

function applyIncomingCloudData(payload) {
  if (!payload || !payload.data) return;
  if (payload.clientId === CLIENT_ID) return;
  if (payload.msgId) {
    if (seenMsgIds.has(payload.msgId)) return;
    seenMsgIds.add(payload.msgId);
  }

  if (payload.data.thanh) state.thanh = payload.data.thanh;
  if (payload.data.nene) state.nene = payload.data.nene;
  if (payload.data.shared) state.shared = payload.data.shared;
  if (payload.data.completedStreak !== undefined) state.completedStreak = payload.data.completedStreak;
  if (payload.data.currentSeason) applySeason(payload.data.currentSeason);

  saveState();
  renderInspector();

  if (payload.station) {
    const st = STATIONS[payload.station] || STATIONS.onsen_hub;
    spawnSingleFirework(st.pos.x, 8.5, st.pos.z, payload.station.startsWith('thanh') ? 0xd63031 : 0xe84393);
  }
  if (payload.msg) {
    showToast(`⚡ Live: ${payload.msg}`);
  }
}

function publishCloudState(syncMeta = { station: 'onsen_hub', msg: 'Đồng bộ dữ liệu' }) {
  const now = Date.now();
  const msgId = `${CLIENT_ID}_${now}_${Math.random().toString(36).substring(2, 7)}`;
  seenMsgIds.add(msgId);

  const payload = {
    msgId,
    clientId: CLIENT_ID,
    updatedAt: now,
    station: syncMeta.station || 'onsen_hub',
    msg: syncMeta.msg || '',
    data: {
      thanh: state.thanh,
      nene: state.nene,
      shared: state.shared,
      completedStreak: state.completedStreak,
      currentSeason: state.currentSeason
    }
  };

  const jsonStr = JSON.stringify(payload);
  const topic = getSyncTopic(currentRoomId);
  mqttClients.forEach(client => {
    if (client && client.connected) {
      try { client.publish(topic, jsonStr, { qos: 1, retain: true }); } catch (e) {}
    }
  });

  if (window.location.protocol.startsWith('http')) {
    fetch(`/api/state?room=${encodeURIComponent(currentRoomId)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: jsonStr
    }).catch(() => {});
  }
}

function connectRealtimeCloud() {
  if (typeof mqtt === 'undefined') {
    updateSyncStatusUI('offline', '☁️ Offline');
    return;
  }

  updateSyncStatusUI('connecting', '☁️ Đang kết nối...');
  const brokers = [
    'wss://broker.emqx.io:8084/mqtt',
    'wss://broker.hivemq.com:8884/mqtt'
  ];
  const topic = getSyncTopic(currentRoomId);

  brokers.forEach((bUrl, idx) => {
    try {
      const client = mqtt.connect(bUrl, {
        clientId: `${CLIENT_ID}_${idx}`,
        clean: true,
        connectTimeout: 5000,
        reconnectPeriod: 2500
      });
      client.on('connect', () => {
        updateSyncStatusUI('online', `☁️ ${currentRoomId}`);
        client.subscribe(topic, { qos: 1 });
      });
      client.on('message', (t, msg) => {
        try { applyIncomingCloudData(JSON.parse(msg.toString())); } catch (e) {}
      });
      mqttClients.push(client);
    } catch (e) {}
  });
}

// Modal Sync wiring
document.getElementById('btn-open-sync').addEventListener('click', () => {
  buildShareLinks();
  document.getElementById('sync-modal').classList.remove('hidden');
});
document.getElementById('btn-close-sync').addEventListener('click', () => {
  document.getElementById('sync-modal').classList.add('hidden');
});
document.getElementById('btn-apply-room').addEventListener('click', () => {
  const val = document.getElementById('input-room-id').value.trim();
  if (val) unlockWithRoomAndRole(val, state.currentUser, true);
});
document.getElementById('btn-copy-edit').addEventListener('click', () => {
  navigator.clipboard.writeText(document.getElementById('input-share-edit').value);
  showToast('📋 Đã copy link chia sẻ thị trấn đôi!');
});
document.getElementById('btn-copy-view').addEventListener('click', () => {
  navigator.clipboard.writeText(document.getElementById('input-share-view').value);
  showToast('👁️ Đã copy link chỉ xem!');
});
document.getElementById('btn-lock-room').addEventListener('click', () => {
  localStorage.removeItem(UNLOCKED_KEY);
  document.getElementById('sync-modal').classList.add('hidden');
  document.body.classList.add('room-locked');
  lockScreenEl.classList.remove('hidden');
  showToast('🔒 Đã khóa cổng thị trấn!');
});

// ============================================================================
// MAIN ANIMATION LOOP
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
    // 1. Xoay các biểu tượng trên nóc công trình
    animatedObjects.forEach(obj => {
      if (obj.type === 'spinY') {
        obj.mesh.rotation.y += dt * obj.speed;
        if (obj.baseY !== undefined) {
          obj.mesh.position.y = obj.baseY + Math.sin(elapsed * 2.2) * 0.22;
        }
      }
    });

    // 2. Chuyển động tàu Shinkansen chạy vòng quanh 2 bờ
    trainProgress = (trainProgress + dt * 0.045) % 1;
    const trainPos = trackCurve.getPointAt(trainProgress);
    const trainTangent = trackCurve.getTangentAt(trainProgress);
    trainMesh.position.copy(trainPos);
    trainMesh.lookAt(trainPos.clone().add(trainTangent));

    if (followTrain) {
      const camOffset = trainPos.clone().add(new THREE.Vector3(0, 14, 18));
      camera.position.lerp(camOffset, 0.08);
      controls.target.lerp(trainPos, 0.12);
    }

    // 3. Chibi Thanh & Nene đi dạo qua cầu suối Onsen gặp nhau
    characters.forEach((char) => {
      char.t += dt * char.speed * char.dir;
      if (char.t >= 1) {
        char.t = 1;
        char.dir = -1;
      } else if (char.t <= 0) {
        char.t = 0;
        char.dir = 1;
      }
      char.mesh.position.lerpVectors(char.start, char.end, char.t);
      char.mesh.position.y = (char.mesh.position.z > 5 && Math.abs(char.mesh.position.x) < 4) ? 0.75 : 0;
      char.mesh.position.y += Math.abs(Math.sin(elapsed * 7)) * 0.22;
      const target = char.dir === 1 ? char.end : char.start;
      char.mesh.lookAt(target.x, char.mesh.position.y, target.z);
    });

    // 4. Chuyển động hơi nước Onsen bốc lên mờ ảo
    onsenSteamParticles.forEach(sp => {
      sp.mesh.position.y += sp.speedY * dt;
      sp.mesh.position.x = sp.baseX + Math.sin(elapsed * 1.5 + sp.baseZ) * 0.4;
      sp.mesh.scale.setScalar(1 + (sp.mesh.position.y - 0.4) * sp.scaleSpeed);
      if (sp.mesh.position.y > 6.0) {
        sp.mesh.position.y = 0.4;
        sp.mesh.scale.setScalar(1);
      }
    });

    // 5. Chuyển động hạt thời tiết 4 mùa (hoa đào, lá phong, tuyết, đom đóm)
    particles.forEach(p => {
      p.mesh.position.y -= p.speedY * dt;
      p.mesh.position.x += Math.sin(elapsed * 1.4 + p.phase) * p.driftX * dt;
      p.mesh.position.z += Math.cos(elapsed * 1.2 + p.phase) * p.driftX * dt;
      p.mesh.rotation.x += dt * 1.5;
      p.mesh.rotation.y += dt * 1.8;
      if (p.mesh.position.y < 0.2) {
        p.mesh.position.y = 22 + Math.random() * 5;
        p.mesh.position.x = (Math.random() - 0.5) * 75;
        p.mesh.position.z = (Math.random() - 0.5) * 70;
      }
    });
  }

  // 6. Xử lý hoạt ảnh pháo hoa nổ bung và rơi tàn
  for (let i = fireworks.length - 1; i >= 0; i--) {
    const fw = fireworks[i];
    fw.life -= dt;
    fw.vel.y -= 9.8 * dt; // Trọng lực rơi
    fw.mesh.position.addScaledVector(fw.vel, dt);
    const alpha = fw.life / fw.maxLife;
    fw.mesh.scale.setScalar(Math.max(alpha, 0.1));
    if (fw.life <= 0) {
      scene.remove(fw.mesh);
      fireworks.splice(i, 1);
    }
  }

  // 7. Lướt camera chuyển cảnh mượt mà
  if (cameraLerp) {
    cameraLerp.alpha += dt * 2.5;
    const t = Math.min(1, cameraLerp.alpha);
    camera.position.lerp(cameraLerp.targetPos, t * 0.15);
    controls.target.lerp(cameraLerp.targetLook, t * 0.18);
    if (camera.position.distanceTo(cameraLerp.targetPos) < 0.5) {
      cameraLerp = null;
    }
  }

  controls.update();
  renderer.render(scene, camera);

  // Cập nhật vị trí nhãn 3D trên màn hình
  Object.values(STATIONS).forEach(st => {
    const el = stationLabelEls[st.id];
    if (el) projectToScreen(new THREE.Vector3(st.pos.x, st.labelHeight, st.pos.z), el);
  });

  characters.forEach(c => {
    const pos = c.mesh.position.clone();
    pos.y += 2.8;
    projectToScreen(pos, c.labelEl);
  });
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Khởi động giao diện & kết nối
updateTopSummary();
updateWorldBadges();
renderInspector();

const savedRole = localStorage.getItem(ROLE_KEY) || 'thanh';
if (isRoomUnlocked && currentRoomId) {
  document.body.classList.remove('room-locked');
  lockScreenEl.classList.add('hidden');
  setPersonaView(savedRole);
  buildShareLinks();
  connectRealtimeCloud();
} else {
  document.body.classList.add('room-locked');
  lockScreenEl.classList.remove('hidden');
}

applySeason('autumn'); // Mặc định mùa Thu lá phong đỏ & hoa anh đào ấm áp
animate();
