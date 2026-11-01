// ============================================================================
// LIFETOWN 3D — THỊ TRẤN ĐÔI THANH (LÁ PHONG ĐỎ) & NENE (HOA ANH ĐÀO)
// TÍCH HỢP ONSEN TRUNG TÂM, THỜI TIẾT 4 MÙA, ĐẠI TIỆC PHÁO HOA & NỤ HÔN NGỌT NGÀO
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
// STATIONS METADATA — PHÂN CHIA RÕ RÀNG THEO SIDE: 'thanh' | 'nene' | 'center'
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
    labelHeight: 9.8,
    camOffset: { x: 0, y: 30, z: 40 },
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
    pos: { x: -18, y: 0, z: 6 },
    labelHeight: 12.2,
    camOffset: { x: -18, y: 20, z: 24 },
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
    pos: { x: -26, y: 0, z: -16 },
    labelHeight: 16.8,
    camOffset: { x: -26, y: 26, z: 12 },
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
    pos: { x: -15, y: 0, z: -10 },
    labelHeight: 13.2,
    camOffset: { x: -15, y: 19, z: 16 },
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
    pos: { x: -28, y: 0, z: 8 },
    labelHeight: 10.8,
    camOffset: { x: -28, y: 18, z: 25 },
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
    pos: { x: 18, y: 0, z: 6 },
    labelHeight: 11.8,
    camOffset: { x: 18, y: 20, z: 24 },
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
    pos: { x: 26, y: 0, z: -14 },
    labelHeight: 14.8,
    camOffset: { x: 26, y: 24, z: 14 },
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
    pos: { x: 15, y: 0, z: -10 },
    labelHeight: 13.2,
    camOffset: { x: 15, y: 19, z: 16 },
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
    pos: { x: 28, y: 0, z: 8 },
    labelHeight: 10.8,
    camOffset: { x: 28, y: 18, z: 25 },
    quote: 'Tiệm bánh ngọt truyền thống và chú mèo Maneki-Neko nhỏ xinh, quản lý ví chi tiêu, mua sắm và tiết kiệm của Nene.',
    bubble: 'Tài chính ngọt ngào, tích lũy đều đặn!'
  }
};

// ============================================================================
// THREE.JS SETUP — TÔNG MÀU TỐI HUYỀN ẢO & COZY (DARK NIGHT AESTHETIC)
// ============================================================================
const container = document.getElementById('canvas-container');
const labelsContainer = document.getElementById('labels-container');

const scene = new THREE.Scene();
// Tông màu đêm xanh than huyền bí (Moody Midnight Blue)
const NIGHT_BG = 0x0f1423;
scene.background = new THREE.Color(NIGHT_BG);
scene.fog = new THREE.FogExp2(NIGHT_BG, 0.0075);

const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.5, 400);
camera.position.set(0, 36, 50);

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
container.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.maxPolarAngle = Math.PI / 2 - 0.04;
controls.minDistance = 12;
controls.maxDistance = 125;
controls.target.set(0, 2, 0);

// Hệ thống chiếu sáng đêm ấm cúng (Cozy Night Lantern Glow)
const ambientLight = new THREE.AmbientLight(0x28324e, 0.85);
scene.add(ambientLight);

const hemiLight = new THREE.HemisphereLight(0x7da4d4, 0x1a2130, 0.45);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xa3c5e8, 0.65);
dirLight.position.set(30, 65, 30);
dirLight.castShadow = true;
dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;
dirLight.shadow.camera.near = 5;
dirLight.shadow.camera.far = 180;
const d = 60;
dirLight.shadow.camera.left = -d;
dirLight.shadow.camera.right = d;
dirLight.shadow.camera.top = d;
dirLight.shadow.camera.bottom = -d;
dirLight.shadow.bias = -0.0004;
scene.add(dirLight);

// Vật liệu (Materials: Tông tối sang trọng, phát sáng đèn lồng rực rỡ)
const MATS = {
  // Mặt đất đêm tối dịu mắt
  groundThanh: new THREE.MeshStandardMaterial({ color: 0x302722, roughness: 0.92 }), // Đất gạch sẫm đêm bên Thanh
  groundNene: new THREE.MeshStandardMaterial({ color: 0x222d26, roughness: 0.92 }),  // Đất đá rêu sẫm đêm bên Nene
  onsenRock: new THREE.MeshStandardMaterial({ color: 0x484643, roughness: 0.85 }),
  // Mặt nước Onsen phản chiếu lấp lánh trong đêm
  onsenWater: new THREE.MeshStandardMaterial({ color: 0x2bb8ff, roughness: 0.12, metalness: 0.35, transparent: true, opacity: 0.92 }),
  woodDark: new THREE.MeshStandardMaterial({ color: 0x241710, roughness: 0.8 }),
  woodWarm: new THREE.MeshStandardMaterial({ color: 0x6e432a, roughness: 0.72 }),
  shikkuiWhite: new THREE.MeshStandardMaterial({ color: 0xded8ce, roughness: 0.6 }),
  kawaraRoofDark: new THREE.MeshStandardMaterial({ color: 0x1e242b, roughness: 0.5, metalness: 0.2 }),
  kawaraRoofRed: new THREE.MeshStandardMaterial({ color: 0x731e16, roughness: 0.5 }),
  vermilionRed: new THREE.MeshStandardMaterial({ color: 0xd93829, roughness: 0.4 }),
  vermilionDeep: new THREE.MeshStandardMaterial({ color: 0x8a150c, roughness: 0.5 }),
  goldTrim: new THREE.MeshStandardMaterial({ color: 0xf3c14b, roughness: 0.25, metalness: 0.55 }),
  // Cây Lá Phong Đỏ
  mapleRed: new THREE.MeshStandardMaterial({ color: 0xd92027, roughness: 0.55 }),
  mapleOrange: new THREE.MeshStandardMaterial({ color: 0xf37121, roughness: 0.55 }),
  mapleGold: new THREE.MeshStandardMaterial({ color: 0xffa41b, roughness: 0.55 }),
  // Cây Hoa Anh Đào
  sakuraPink: new THREE.MeshStandardMaterial({ color: 0xffb7c5, roughness: 0.55 }),
  sakuraDeep: new THREE.MeshStandardMaterial({ color: 0xf48fb1, roughness: 0.55 }),
  sakuraLight: new THREE.MeshStandardMaterial({ color: 0xffe4ec, roughness: 0.55 }),
  // Ánh sáng phát quang đêm rực rỡ
  shojiGlow: new THREE.MeshStandardMaterial({ color: 0xffe49e, emissive: 0xff9900, emissiveIntensity: 0.95, roughness: 0.35 }),
  lanternRedGlow: new THREE.MeshStandardMaterial({ color: 0xff3b30, emissive: 0xff2010, emissiveIntensity: 1.45, roughness: 0.35 }),
  lanternWarmGlow: new THREE.MeshStandardMaterial({ color: 0xfff0b3, emissive: 0xffbb00, emissiveIntensity: 1.35, roughness: 0.35 }),
  white: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 }),
  norenBlue: new THREE.MeshStandardMaterial({ color: 0x1e3a58, roughness: 0.7 }),
  // Đèn đá & Cột đèn phố
  toroStone: new THREE.MeshStandardMaterial({ color: 0x5a5752, roughness: 0.85 }),
  toroStoneDark: new THREE.MeshStandardMaterial({ color: 0x3d3a36, roughness: 0.9 }),
  // Thú cưng đáng yêu: Chó Shiba & Mèo Calico & Hươu Nara & Cá Koi
  shibaGold: new THREE.MeshStandardMaterial({ color: 0xd9822b, roughness: 0.65 }),
  shibaWhite: new THREE.MeshStandardMaterial({ color: 0xfff6ec, roughness: 0.7 }),
  shibaNose: new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.4 }),
  catWhite: new THREE.MeshStandardMaterial({ color: 0xf5f5f5, roughness: 0.6 }),
  catOrange: new THREE.MeshStandardMaterial({ color: 0xd35400, roughness: 0.6 }),
  catBlack: new THREE.MeshStandardMaterial({ color: 0x2c3e50, roughness: 0.6 }),
  deerBrown: new THREE.MeshStandardMaterial({ color: 0x935116, roughness: 0.75 }),
  deerWhite: new THREE.MeshStandardMaterial({ color: 0xfef9e7, roughness: 0.8 }),
  koiKohakuRed: new THREE.MeshStandardMaterial({ color: 0xe74c3c, roughness: 0.25 }),
  koiYamabuki: new THREE.MeshStandardMaterial({ color: 0xf39c12, metalness: 0.3, roughness: 0.2 }),
  koiPlatinum: new THREE.MeshStandardMaterial({ color: 0xf0f3f4, metalness: 0.35, roughness: 0.15 }),
  // Trang phục dân làng Kimono & Yukata
  kimonoPurple: new THREE.MeshStandardMaterial({ color: 0x8e44ad, roughness: 0.65 }),
  kimonoNavy: new THREE.MeshStandardMaterial({ color: 0x1b2631, roughness: 0.65 }),
  kimonoMonk: new THREE.MeshStandardMaterial({ color: 0x566573, roughness: 0.85 })
};

// Quản lý hệ thống chiếu sáng đèn phố và nguồn sáng PointLight
const townPointLights = [];
const townLanternMeshes = [];

function enableShadow(obj) {
  obj.traverse(child => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
}

// ============================================================================
// MỞ RỘNG BẢN ĐỒ 3D & DÒNG SUỐI NƯỚC NÓNG (ONSEN) CHÍNH GIỮA
// ============================================================================
const groundGroup = new THREE.Group();

// Mở rộng bờ bên trái (Thanh - X < -3)
const groundThanhGeo = new THREE.BoxGeometry(60, 1.8, 95);
const groundThanhMesh = new THREE.Mesh(groundThanhGeo, MATS.groundThanh);
groundThanhMesh.position.set(-33, -0.9, 0);
groundThanhMesh.receiveShadow = true;
groundGroup.add(groundThanhMesh);

// Mở rộng bờ bên phải (Nene - X > 3)
const groundNeneGeo = new THREE.BoxGeometry(60, 1.8, 95);
const groundNeneMesh = new THREE.Mesh(groundNeneGeo, MATS.groundNene);
groundNeneMesh.position.set(33, -0.9, 0);
groundNeneMesh.receiveShadow = true;
groundGroup.add(groundNeneMesh);

// Dòng suối Onsen kéo dài từ Bắc chí Nam
const streamBedGeo = new THREE.BoxGeometry(10, 1.2, 95);
const streamBedMesh = new THREE.Mesh(streamBedGeo, MATS.onsenRock);
streamBedMesh.position.set(0, -1.2, 0);
groundGroup.add(streamBedMesh);

const waterGeo = new THREE.BoxGeometry(8.6, 0.4, 93);
const waterMesh = new THREE.Mesh(waterGeo, MATS.onsenWater);
waterMesh.position.set(0, -0.22, 0);
groundGroup.add(waterMesh);

// Rải đá cuội tự nhiên dọc 2 bờ suối
for (let z = -44; z <= 44; z += 3.6) {
  const rockL = new THREE.Mesh(
    new THREE.DodecahedronGeometry(0.75 + Math.random() * 0.45, 0),
    MATS.onsenRock
  );
  rockL.position.set(-4.2 + (Math.random() - 0.5) * 0.6, 0.1, z + (Math.random() - 0.5) * 1.2);
  rockL.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
  groundGroup.add(rockL);

  const rockR = rockL.clone();
  rockR.position.set(4.2 + (Math.random() - 0.5) * 0.6, 0.1, z + (Math.random() - 0.5) * 1.2);
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

// Helper: Mái ngói Nhật Bản cong viền góc
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

// Helper: Cổng Torii
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
// 1. CÔNG TRÌNH TRUNG TÂM: SUỐI NƯỚC NÓNG UYÊN ƯƠNG & CẦU TAIKO-BASHI
// ============================================================================
function buildOnsenCenter() {
  const group = new THREE.Group();
  group.position.set(STATIONS.onsen_hub.pos.x, 0, STATIONS.onsen_hub.pos.z);

  // Hồ Onsen chính hình bầu dục đá cuội
  const basinOuter = new THREE.Mesh(new THREE.CylinderGeometry(6.6, 7.0, 0.65, 32), MATS.onsenRock);
  basinOuter.position.y = 0.32;
  basinOuter.scale.set(1.15, 1, 1.4);
  group.add(basinOuter);

  const hotWater = new THREE.Mesh(new THREE.CylinderGeometry(5.9, 5.9, 0.72, 32), MATS.onsenWater);
  hotWater.position.y = 0.4;
  hotWater.scale.set(1.15, 1, 1.4);
  group.add(hotWater);

  // Đình ngâm chân Onsen
  const gazebo = new THREE.Group();
  gazebo.position.set(0, 0.4, -4.8);
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

  const sign = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.8, 0.2), MATS.woodWarm);
  sign.position.set(0, 3.0, 2.6);
  gazebo.add(sign);
  group.add(gazebo);

  // CẦU VÒM GỖ ĐỎ (TAIKO-BASHI) NƠI THANH VÀ NENE HÔN NHAU
  const bridge = new THREE.Group();
  bridge.position.set(0, 0.4, 6.5);
  const deck = new THREE.Mesh(new THREE.BoxGeometry(10.2, 0.4, 3.4), MATS.vermilionRed);
  deck.position.y = 0.55;
  const railL = new THREE.Mesh(new THREE.BoxGeometry(10.2, 0.75, 0.2), MATS.vermilionDeep);
  railL.position.set(0, 0.95, -1.6);
  const railR = railL.clone();
  railR.position.z = 1.6;
  bridge.add(deck, railL, railR);

  // Đèn lồng giấy đỏ gắn trên cầu
  for (let bx of [-4.5, -1.5, 1.5, 4.5]) {
    const lPost = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.2, 8), MATS.woodDark);
    lPost.position.set(bx, 1.1, -1.6);
    const lantern = new THREE.Mesh(new THREE.SphereGeometry(0.24, 10, 10), MATS.lanternRedGlow);
    lantern.scale.y = 1.3;
    lantern.position.set(bx, 1.8, -1.6);
    bridge.add(lPost, lantern);
  }
  group.add(bridge);

  // Biểu tượng trái tim vàng xoay trên không trung
  const heartGroup = new THREE.Group();
  heartGroup.position.set(0, 9.5, 0);
  const ring1 = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.16, 12, 32), MATS.goldTrim);
  ring1.rotation.x = Math.PI / 2;
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.14, 12, 32), MATS.onsenWater);
  ring2.rotation.y = Math.PI / 2;
  heartGroup.add(ring1, ring2);
  group.add(heartGroup);
  animatedObjects.push({ mesh: heartGroup, type: 'spinY', speed: 1.5, baseY: 9.5 });

  enableShadow(group);
  registerStationHitbox('onsen_hub', group, 8.5, 12);
  scene.add(group);
}

// ============================================================================
// 2. CÁC CÔNG TRÌNH CHÍNH & PHỤ BỜ THANH (LỄ HỘI & LÁ PHONG ĐỎ - ẢNH 1)
// ============================================================================

// A. Võ Đường Phong Diệp
function buildThanhDojo() {
  const group = new THREE.Group();
  group.position.set(STATIONS.thanh_dojo.pos.x, 0, STATIONS.thanh_dojo.pos.z);

  const pad = new THREE.Mesh(new THREE.BoxGeometry(11.5, 0.7, 10.5), MATS.groundThanh);
  pad.position.y = 0.35;
  group.add(pad);

  const hall = new THREE.Mesh(new THREE.BoxGeometry(8.2, 4.2, 6.8), MATS.woodDark);
  hall.position.set(0, 2.5, -0.5);
  const shoji = new THREE.Mesh(new THREE.BoxGeometry(8.4, 2.6, 6.95), MATS.shojiGlow);
  shoji.position.set(0, 2.4, -0.5);
  group.add(hall, shoji);

  for (let x = -3.8; x <= 3.8; x += 1.9) {
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.22, 4.4, 10), MATS.vermilionRed);
    col.position.set(x, 2.5, 3.1);
    group.add(col);
  }

  const roof1 = createCurvedRoof(10.6, 8.8, 1.8, MATS.kawaraRoofRed);
  roof1.position.set(0, 4.4, -0.5);
  group.add(roof1);

  const upper = new THREE.Mesh(new THREE.BoxGeometry(6.0, 2.6, 4.8), MATS.woodDark);
  upper.position.set(0, 6.2, -0.5);
  const roof2 = createCurvedRoof(7.8, 6.4, 1.6, MATS.kawaraRoofRed);
  roof2.position.set(0, 7.6, -0.5);
  group.add(upper, roof2);

  for (let lx = -3.6; lx <= 3.6; lx += 1.2) {
    const lantern = new THREE.Mesh(new THREE.SphereGeometry(0.32, 12, 12), MATS.lanternRedGlow);
    lantern.scale.y = 1.35;
    lantern.position.set(lx, 4.2, 3.2);
    group.add(lantern);
  }

  const torii = createToriiGate(1.0);
  torii.position.set(0, 0.5, 5.0);
  group.add(torii);

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

// B. Lầu Vọng Cảnh Lễ Hội
function buildThanhTower() {
  const group = new THREE.Group();
  group.position.set(STATIONS.thanh_tower.pos.x, 0, STATIONS.thanh_tower.pos.z);

  const pad = new THREE.Mesh(new THREE.BoxGeometry(11.0, 0.8, 11.0), MATS.groundThanh);
  pad.position.y = 0.4;
  group.add(pad);

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

    const offsets = [[-t.rw*0.48, -t.rw*0.48], [t.rw*0.48, -t.rw*0.48], [-t.rw*0.48, t.rw*0.48], [t.rw*0.48, t.rw*0.48]];
    offsets.forEach(([ox, oz]) => {
      const lan = new THREE.Mesh(new THREE.SphereGeometry(0.28, 10, 10), MATS.lanternRedGlow);
      lan.scale.y = 1.3;
      lan.position.set(ox, t.y + t.h - 0.2, oz);
      group.add(lan);
    });
  });

  const apex = new THREE.Mesh(new THREE.OctahedronGeometry(1.1, 0), MATS.goldTrim);
  apex.position.y = 15.4;
  group.add(apex);
  animatedObjects.push({ mesh: apex, type: 'spinY', speed: 2.2, baseY: 15.4 });

  enableShadow(group);
  registerStationHitbox('thanh_tower', group, 8.0, 16);
  scene.add(group);
}

// C. Tháp Chuông & Tiệm Rèn của Thanh
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

// D. CÔNG TRÌNH PHỤ BỜ THANH (MỞ RỘNG: CHỢ ĐÊM YATAI, ĐƯỜNG CỔNG TORII, LẦU TRỐNG TAIKO)
function buildThanhSubStructures() {
  const subGroup = new THREE.Group();

  // 1. Dãy cổng Torii liên hoàn (Senbon Torii Path)
  for (let tz = -26; tz <= -12; tz += 3.2) {
    const miniTorii = createToriiGate(0.75);
    miniTorii.position.set(-8.5, 0.1, tz);
    subGroup.add(miniTorii);
  }

  // 2. Các gian hàng lễ hội chợ đêm Yatai (Yatai Food Stalls)
  const yataiPositions = [
    { x: -16, z: 18, rot: 0.2 },
    { x: -23, z: 19, rot: -0.15 },
    { x: -10, z: -2, rot: 1.57 }
  ];
  yataiPositions.forEach(yp => {
    const yatai = new THREE.Group();
    yatai.position.set(yp.x, 0.1, yp.z);
    yatai.rotation.y = yp.rot;

    const cart = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.2, 2.2), MATS.woodWarm);
    cart.position.y = 0.6;
    const counter = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.15, 2.4), MATS.shikkuiWhite);
    counter.position.y = 1.25;

    // Mái bạt sọc đỏ trắng lễ hội
    const canopy = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.2, 2.6), MATS.vermilionRed);
    canopy.position.y = 2.6;
    for (let cx of [-1.7, 1.7]) {
      for (let cz of [-1.0, 1.0]) {
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.4, 8), MATS.woodDark);
        pole.position.set(cx, 1.9, cz);
        yatai.add(pole);
      }
    }
    // Đèn lồng đỏ treo ở quầy
    const l1 = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 8), MATS.lanternRedGlow);
    l1.position.set(-1.2, 2.3, 1.1);
    const l2 = l1.clone();
    l2.position.x = 1.2;
    yatai.add(cart, counter, canopy, l1, l2);
    subGroup.add(yatai);
  });

  // 3. Vọng Lâu Trống Taiko (Kagura Festival Stage)
  const taikoStage = new THREE.Group();
  taikoStage.position.set(-36, 0.1, 0);
  const tPlatform = new THREE.Mesh(new THREE.BoxGeometry(6.4, 1.2, 6.4), MATS.woodDark);
  tPlatform.position.y = 0.6;
  const tRoof = createCurvedRoof(7.8, 7.8, 1.6, MATS.kawaraRoofRed);
  tRoof.position.y = 4.2;
  // Trống Taiko lớn ở giữa
  const taikoDrum = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 1.4, 16), MATS.woodWarm);
  taikoDrum.rotation.z = Math.PI / 2;
  taikoDrum.position.y = 1.8;
  taikoStage.add(tPlatform, tRoof, taikoDrum);
  subGroup.add(taikoStage);

  enableShadow(subGroup);
  scene.add(subGroup);
}

// ============================================================================
// 3. CÁC CÔNG TRÌNH CHÍNH & PHỤ BỜ NENE (PHỐ CỔ MACHIYA & HOA ANH ĐÀO - ẢNH 2)
// ============================================================================

// A. Trà Quán Sakura
function buildNeneTeaHouse() {
  const group = new THREE.Group();
  group.position.set(STATIONS.nene_tea.pos.x, 0, STATIONS.nene_tea.pos.z);

  const pad = new THREE.Mesh(new THREE.BoxGeometry(11.5, 0.7, 10.5), MATS.groundNene);
  pad.position.y = 0.35;
  group.add(pad);

  const groundFloor = new THREE.Mesh(new THREE.BoxGeometry(8.4, 3.6, 6.6), MATS.woodWarm);
  groundFloor.position.set(0, 2.1, -0.5);
  const shoji = new THREE.Mesh(new THREE.BoxGeometry(8.5, 2.2, 6.75), MATS.shojiGlow);
  shoji.position.set(0, 2.0, -0.5);
  const noren = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.2, 0.15), MATS.norenBlue);
  noren.position.set(0, 2.6, 2.9);
  const engawa = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.4, 2.2), MATS.woodWarm);
  engawa.position.set(0, 0.5, 3.8);
  group.add(groundFloor, shoji, noren, engawa);

  const roof1 = createCurvedRoof(10.2, 8.4, 1.6, MATS.kawaraRoofDark);
  roof1.position.set(0, 4.0, -0.5);
  group.add(roof1);

  const upperFloor = new THREE.Mesh(new THREE.BoxGeometry(6.6, 2.6, 5.2), MATS.shikkuiWhite);
  upperFloor.position.set(0, 5.8, -0.5);
  const upperShoji = new THREE.Mesh(new THREE.BoxGeometry(6.75, 1.6, 5.35), MATS.shojiGlow);
  upperShoji.position.set(0, 5.8, -0.5);
  const roof2 = createCurvedRoof(8.4, 7.0, 1.6, MATS.kawaraRoofDark);
  roof2.position.set(0, 7.2, -0.5);
  group.add(upperFloor, upperShoji, roof2);

  const lLeft = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.2, 0.6), MATS.lanternWarmGlow);
  lLeft.position.set(-2.8, 1.6, 3.6);
  const lRight = lLeft.clone();
  lRight.position.x = 2.8;
  group.add(lLeft, lRight);

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
  const ribbon = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.22, 12, 32), MATS.sakuraDeep);
  ribbon.rotation.x = Math.PI / 3;
  ribbon.position.set(0, 10.5, 0);
  studioGroup.add(sPad, sBody1, sRoof1, sBody2, sRoof2, ribbon);
  animatedObjects.push({ mesh: ribbon, type: 'spinY', speed: 2.0, baseY: 10.5 });
  enableShadow(studioGroup);
  registerStationHitbox('nene_studio', studioGroup, 8.0, 13);
  scene.add(studioGroup);

  // Lầu Nguyệt Quang
  const clockGroup = new THREE.Group();
  clockGroup.position.set(STATIONS.nene_clock.pos.x, 0, STATIONS.nene_clock.pos.z);
  const cPad = new THREE.Mesh(new THREE.BoxGeometry(8.5, 0.6, 8.5), MATS.groundNene);
  cPad.position.y = 0.3;
  const cTower = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 3.0, 6.5, 8), MATS.woodWarm);
  cTower.position.y = 3.6;
  const cRoof = createCurvedRoof(7.0, 7.0, 1.8, MATS.kawaraRoofDark);
  cRoof.position.y = 7.0;
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
  const luckyCat = new THREE.Mesh(new THREE.SphereGeometry(1.0, 16, 16), MATS.white);
  luckyCat.position.set(0, 6.4, 0);
  wagashiGroup.add(wPad, wHouse, wRoof, luckyCat);
  animatedObjects.push({ mesh: luckyCat, type: 'spinY', speed: 1.2, baseY: 6.4 });
  enableShadow(wagashiGroup);
  registerStationHitbox('nene_wagashi', wagashiGroup, 7.0, 10);
  scene.add(wagashiGroup);
}

// C. CÔNG TRÌNH PHỤ BỜ NENE (MỞ RỘNG: BÁNH XE NƯỚC SUISHA, CHÒI HANAMI, VƯỜN ZEN)
let waterWheelMesh;

function buildNeneSubStructures() {
  const subGroup = new THREE.Group();

  // 1. Bánh xe nước cối xay gỗ cổ truyền (Suisha Waterwheel) bên suối Onsen
  const wheelGroup = new THREE.Group();
  wheelGroup.position.set(6.0, 1.4, -4.0);

  const wheelHub = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.6, 12), MATS.woodDark);
  wheelHub.rotation.x = Math.PI / 2;
  wheelGroup.add(wheelHub);

  const rim = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.1, 8, 24), MATS.woodWarm);
  wheelGroup.add(rim);

  for (let b = 0; b < 8; b++) {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.35, 1.5, 0.08), MATS.woodWarm);
    blade.rotation.z = (b / 8) * Math.PI * 2;
    blade.position.set(Math.cos(blade.rotation.z) * 0.8, Math.sin(blade.rotation.z) * 0.8, 0);
    wheelGroup.add(blade);
  }
  waterWheelMesh = wheelGroup;
  subGroup.add(wheelGroup);

  // 2. Chòi ngắm hoa anh đào Hanami ven suối (Hanami Tea Gazebo)
  const hanamiGazebo = new THREE.Group();
  hanamiGazebo.position.set(36, 0.1, 0);
  const hFloor = new THREE.Mesh(new THREE.BoxGeometry(5.8, 0.4, 5.8), MATS.woodWarm);
  hFloor.position.y = 0.2;
  const hRoof = createCurvedRoof(7.2, 7.2, 1.6, MATS.kawaraRoofDark);
  hRoof.position.y = 3.6;
  const hTable = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.4, 16), MATS.shikkuiWhite);
  hTable.position.y = 0.6;
  hanamiGazebo.add(hFloor, hRoof, hTable);
  subGroup.add(hanamiGazebo);

  // 3. Vườn rải sỏi trắng phong cách Zen Karesansui
  const zenGarden = new THREE.Group();
  zenGarden.position.set(16, 0.1, -22);
  const gravel = new THREE.Mesh(new THREE.BoxGeometry(10, 0.15, 8), MATS.shikkuiWhite);
  gravel.position.y = 0.1;
  // 3 tảng đá thiền rêu phong
  const zRock1 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.9, 0), MATS.onsenRock);
  zRock1.position.set(-2, 0.8, 0);
  const zRock2 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.65, 0), MATS.onsenRock);
  zRock2.position.set(1.5, 0.6, 1.2);
  zenGarden.add(gravel, zRock1, zRock2);
  subGroup.add(zenGarden);

  enableShadow(subGroup);
  scene.add(subGroup);
}

// ============================================================================
// 4. RỪNG CÂY LÁ PHONG ĐỎ (THANH) & HOA ANH ĐÀO (NENE)
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
  const maplePositions = [
    [-9, 12, 1.2], [-14, 18, 1.35], [-24, 18, 1.2], [-34, 8, 1.4],
    [-28, -6, 1.3], [-18, -20, 1.4], [-32, -18, 1.25], [-8, -14, 1.1],
    [-11, -2, 1.15], [-20, 2, 1.3], [-40, -10, 1.4], [-38, 14, 1.3]
  ];
  maplePositions.forEach(([mx, mz, ms]) => {
    const tree = createMapleTree(ms);
    tree.position.set(mx, 0, mz);
    enableShadow(tree);
    scene.add(tree);
  });

  const sakuraPositions = [
    [9, 12, 1.2], [14, 18, 1.35], [24, 18, 1.2], [34, 8, 1.4],
    [28, -6, 1.3], [18, -20, 1.4], [32, -18, 1.25], [8, -14, 1.1],
    [11, -2, 1.15], [20, 2, 1.3], [40, -10, 1.4], [38, 14, 1.3]
  ];
  sakuraPositions.forEach(([sx, sz, ss]) => {
    const tree = createSakuraTree(ss);
    tree.position.set(sx, 0, sz);
    enableShadow(tree);
    scene.add(tree);
  });
}

// ============================================================================
// 5. HỆ THỐNG ĐÈN THỊ TRẤN & TỰ ĐỘNG BẬT KHI TRỜI TỐI (TỔNG HỢP CẢ 2 BỜ)
// ============================================================================
function createIshidoro(x, z, rotY = 0) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = rotY;

  // Đế đá Kiso
  const base = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.28, 0.75), MATS.toroStone);
  base.position.y = 0.14;
  // Cột đá Sao
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.25, 1.05, 8), MATS.toroStone);
  pole.position.y = 0.8;
  // Bệ giữa Chudai
  const mid = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.2, 0.8), MATS.toroStone);
  mid.position.y = 1.4;
  // Buồng phát sáng lồng giấy Hibukuro
  const chamber = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.52, 0.52), MATS.lanternWarmGlow);
  chamber.position.y = 1.76;
  // 4 cột góc bảo vệ
  for (let cx of [-0.27, 0.27]) {
    for (let cz of [-0.27, 0.27]) {
      const col = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.54, 0.08), MATS.toroStoneDark);
      col.position.set(cx, 1.76, cz);
      g.add(col);
    }
  }
  // Mái đá che nón lục giác Kasa
  const roof = new THREE.Mesh(new THREE.ConeGeometry(0.72, 0.42, 6), MATS.toroStone);
  roof.position.y = 2.22;
  // Đỉnh ngọc báu Hoju
  const hoju = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), MATS.toroStoneDark);
  hoju.position.y = 2.48;

  g.add(base, pole, mid, chamber, roof, hoju);
  enableShadow(g);
  townLanternMeshes.push(chamber);
  return g;
}

function createChochinPost(x, z, rotY = 0, isRed = true) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = rotY;

  // Cột gỗ đen
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, 3.2, 8), MATS.woodDark);
  post.position.y = 1.6;
  // Tay vươn
  const arm = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.09, 0.09), MATS.woodDark);
  arm.position.set(0.38, 3.1, 0);
  // Dây treo
  const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.35, 6), MATS.woodDark);
  cord.position.set(0.72, 2.9, 0);
  // Lồng đèn bầu dục
  const mat = isRed ? MATS.lanternRedGlow : MATS.lanternWarmGlow;
  const lantern = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 12), mat);
  lantern.scale.set(1.0, 1.35, 1.0);
  lantern.position.set(0.72, 2.45, 0);
  // Chóp nón trên dưới
  const capTop = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.28, 0.07, 8), MATS.woodDark);
  capTop.position.set(0.72, 2.85, 0);
  const capBtm = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.14, 0.07, 8), MATS.woodDark);
  capBtm.position.set(0.72, 2.05, 0);

  g.add(post, arm, cord, lantern, capTop, capBtm);
  enableShadow(g);
  townLanternMeshes.push(lantern);
  return g;
}

function buildTownLamps() {
  const lampsGroup = new THREE.Group();

  // 1. Đèn đá Toro (Ishidoro) tại các vị trí trọng điểm ven suối Onsen & quanh công trình
  const toroPositions = [
    // 4 góc Cầu Onsen
    [-2.8, 4.4, 0], [-2.8, 8.6, 0], [2.8, 4.4, Math.PI], [2.8, 8.6, Math.PI],
    // Dọc bờ suối Onsen bên Thanh (X = -4.8)
    [-4.8, -34, 0], [-4.8, -22, 0], [-4.8, -10, 0], [-4.8, 16, 0], [-4.8, 28, 0], [-4.8, 40, 0],
    // Dọc bờ suối Onsen bên Nene (X = +4.8)
    [4.8, -34, Math.PI], [4.8, -22, Math.PI], [4.8, -10, Math.PI], [4.8, 16, Math.PI], [4.8, 28, Math.PI], [4.8, 40, Math.PI],
    // Vườn Sỏi Trắng Zen & Bánh xe nước bên Nene
    [14, -18, 0.4], [18, -25, -0.6], [22, -18, 0.8], [9.5, -4, 0],
    // Chòi Hanami & Đền thờ Thanh
    [16, 20, 0], [26, 24, -0.5], [-16, 24, 0.5], [-24, 14, 0]
  ];

  toroPositions.forEach(([tx, tz, tr]) => {
    lampsGroup.add(createIshidoro(tx, tz, tr));
  });

  // 2. Cột đèn lồng gỗ treo Chochin dọc các trục đường đi bộ chính
  const postPositions = [
    // Bờ Thanh: Trục đường Senbon Torii & Chợ Đêm Yatai
    [-10, 6, 0, true], [-14, 10, 0.3, true], [-18, 2, -0.4, true],
    [-14, -4, 0, true], [-18, -12, 0.5, true], [-24, -8, -0.5, true],
    // Bờ Nene: Trục phố cổ Machiya & Vườn Trà
    [10, 6, Math.PI, false], [14, 10, Math.PI - 0.3, false], [18, 2, Math.PI + 0.4, false],
    [14, -4, Math.PI, false], [18, -12, Math.PI - 0.5, false], [24, -8, Math.PI + 0.5, false]
  ];

  postPositions.forEach(([px, pz, pr, isRed]) => {
    lampsGroup.add(createChochinPost(px, pz, pr, isRed));
  });

  scene.add(lampsGroup);

  // 3. Hệ thống PointLight tạo quầng sáng ấm áp thực tế khi trời tối
  function addTownPointLight(x, y, z, color, intensity, distance) {
    const pl = new THREE.PointLight(color, intensity, distance);
    pl.position.set(x, y, z);
    pl.userData.baseIntensity = intensity;
    scene.add(pl);
    townPointLights.push(pl);
  }

  addTownPointLight(0, 2.4, 6.5, 0xffaa55, 1.4, 18);     // Cầu Onsen trung tâm
  addTownPointLight(-16, 3.2, 18, 0xff3311, 1.3, 18);    // Dãy cổng Senbon Torii Thanh
  addTownPointLight(-17, 3.2, -3, 0xffaa33, 1.4, 20);    // Chợ Đêm lễ hội Yatai
  addTownPointLight(-22, 3.5, -14, 0xff8833, 1.2, 18);   // Võ Đường rèn luyện Thanh
  addTownPointLight(-16, 3.5, -26, 0xff5522, 1.2, 18);   // Lầu Trống Taiko
  addTownPointLight(18, 3.2, 2, 0xffbb44, 1.4, 20);      // Nhà Trà Machiya Nene
  addTownPointLight(11, 2.5, -6, 0x55ccff, 1.1, 16);     // Bánh Xe Nước Suisha
  addTownPointLight(22, 3.0, 22, 0xff99bb, 1.3, 18);     // Chòi Ngắm Hoa Hanami Nene
  addTownPointLight(17, 2.5, -21, 0xffcc66, 1.1, 16);    // Vườn Sỏi Trắng Zen Karesansui
  addTownPointLight(0, 2.0, -15, 0xff8844, 1.3, 22);     // Suối Onsen khúc Bắc
  addTownPointLight(0, 2.0, 26, 0xff8844, 1.2, 20);      // Suối Onsen khúc Nam
}

// Hàm chuyển đổi chiếu sáng ngày / hoàng hôn / đêm và TỰ ĐỘNG BẬT/TẮT ĐÈN
function updateTownLighting(mode, notify = false) {
  themeMode = mode;
  const themeBtn = document.getElementById('btn-theme');

  if (mode === 0) {
    // ☀️ BAN NGÀY (SÁNG) — TỰ ĐỘNG TẮT ĐÈN TIẾT KIỆM NĂNG LƯỢNG
    scene.background.setHex(0xdcebd5);
    scene.fog.color.setHex(0xdcebd5);
    ambientLight.color.setHex(0xd0e0d8);
    ambientLight.intensity = 0.85;
    dirLight.color.setHex(0xfff2df);
    dirLight.intensity = 1.05;

    // Tắt phát quang các đèn lồng
    MATS.lanternRedGlow.emissiveIntensity = 0.05;
    MATS.lanternWarmGlow.emissiveIntensity = 0.05;
    MATS.shojiGlow.emissiveIntensity = 0.05;

    // Tắt toàn bộ PointLight
    townPointLights.forEach(pl => { pl.intensity = 0; });

    if (themeBtn) themeBtn.textContent = '☀️ Sáng (Đèn Tắt)';
    if (notify) showToast('☀️ Bình minh tỏa sáng — Hệ thống đèn lồng thị trấn đã tự động tắt!');
  } else if (mode === 1) {
    // 🌅 HOÀNG HÔN — TỰ ĐỘNG BẬT ĐÈN VÀNG ẤM ÁP
    scene.background.setHex(0x381f28);
    scene.fog.color.setHex(0x381f28);
    ambientLight.color.setHex(0x55333e);
    ambientLight.intensity = 0.65;
    dirLight.color.setHex(0xff7744);
    dirLight.intensity = 0.85;

    // Bật đèn lồng ở mức ấm áp
    MATS.lanternRedGlow.emissiveIntensity = 1.15;
    MATS.lanternWarmGlow.emissiveIntensity = 1.05;
    MATS.shojiGlow.emissiveIntensity = 0.85;

    // Bật PointLight 75%
    townPointLights.forEach(pl => { pl.intensity = pl.userData.baseIntensity * 0.75; });

    if (themeBtn) themeBtn.textContent = '🌅 Hoàng Hôn (Đèn Bật)';
    if (notify) showToast('🌅 Hoàng hôn buông xuống — Đèn lồng bắt đầu thắp sáng lung linh!');
  } else {
    // 🌙 BAN ĐÊM (MẶC ĐỊNH) — TỰ ĐỘNG BẬT ĐÈN RỰC RỠ NHẤT
    scene.background.setHex(NIGHT_BG);
    scene.fog.color.setHex(NIGHT_BG);
    ambientLight.color.setHex(0x28324e);
    ambientLight.intensity = 0.55;
    dirLight.color.setHex(0x8aa8d6);
    dirLight.intensity = 0.5;

    // Bật rực rỡ lồng đèn và ánh cửa Shoji
    MATS.lanternRedGlow.emissiveIntensity = 1.45;
    MATS.lanternWarmGlow.emissiveIntensity = 1.35;
    MATS.shojiGlow.emissiveIntensity = 1.1;

    // Bật 100% cường độ PointLight
    townPointLights.forEach(pl => { pl.intensity = pl.userData.baseIntensity; });

    if (themeBtn) themeBtn.textContent = '🌙 Đêm (Đèn Bật)';
    if (notify) showToast('🏮 Trời tối rồi — Hệ thống đèn lồng & đèn đá thị trấn đã tự động thắp sáng rực rỡ!');
  }
}

// ============================================================================
// 6. NHÂN VẬT CHIBI THANH & NENE — DẠO CHƠI TOÀN BỘ BẢN ĐỒ & NỤ HÔN NGỌT NGÀO
// ============================================================================
let chibiThanhMesh, chibiNeneMesh;
let isKissing = false;
let kissProgress = 0;
const characters = [];

function buildChibiCouple() {
  // 1. Chibi Thanh (Haori đỏ sẫm - Bờ Lá Phong Momiji)
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
  thanhGroup.position.set(-0.6, 0.95, 6.5);
  enableShadow(thanhGroup);
  scene.add(thanhGroup);
  chibiThanhMesh = thanhGroup;

  const tLabel = document.createElement('div');
  tLabel.className = 'worker-label label-thanh';
  tLabel.dataset.side = 'thanh';
  tLabel.textContent = '🍁 Thanh';
  labelsContainer.appendChild(tLabel);

  // Lộ trình đi dạo quanh toàn bộ bờ Thanh & gặp Nene trên cầu Onsen
  const thanhWaypoints = [
    { x: -0.6, y: 0.95, z: 6.5, wait: 2.5 }, // Trên Cầu Onsen ngắm suối
    { x: -5.0, y: 0, z: 6.5 },                // Xuống cầu bờ Thanh
    { x: -10.0, y: 0, z: 12.0 },              // Đi qua hàng cây lá phong đỏ
    { x: -16.0, y: 0, z: 18.0 },              // Đi qua dãy cổng Senbon Torii
    { x: -24.0, y: 0, z: 18.0, wait: 2.0 },   // Ngắm Lầu Vọng Cảnh & Đền thờ
    { x: -24.0, y: 0, z: 4.0 },               // Đường nối trung tâm phố
    { x: -16.0, y: 0, z: -2.0, wait: 2.0 },   // Dạo quanh Chợ Đêm Yatai
    { x: -22.0, y: 0, z: -14.0, wait: 2.0 },  // Ghé thăm Võ Đường rèn luyện
    { x: -16.0, y: 0, z: -26.0, wait: 2.0 },  // Đến thăm Lầu Trống Taiko
    { x: -8.0, y: 0, z: -16.0 },              // Men theo đường đèn lồng ven suối
    { x: -4.5, y: 0, z: 0.0 },                // Về chân cầu Onsen
    { x: -0.6, y: 0.95, z: 6.5, wait: 3.0 }   // Lên cầu đón nụ hôn cùng Nene
  ];

  characters.push({
    id: 'thanh',
    mesh: thanhGroup,
    labelEl: tLabel,
    labelHeight: 2.8,
    waypoints: thanhWaypoints,
    currentWpIndex: 0,
    waitTime: 0,
    walkClock: 0,
    speed: 2.4
  });

  // 2. Chibi Nene (Kimono hoa đào hồng - Bờ Hoa Anh Đào Sakura)
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
  neneGroup.position.set(0.6, 0.95, 6.5);
  enableShadow(neneGroup);
  scene.add(neneGroup);
  chibiNeneMesh = neneGroup;

  const nLabel = document.createElement('div');
  nLabel.className = 'worker-label label-nene';
  nLabel.dataset.side = 'nene';
  nLabel.textContent = '🌸 Nene';
  labelsContainer.appendChild(nLabel);

  // Lộ trình đi dạo quanh toàn bộ bờ Nene & gặp Thanh trên cầu Onsen
  const neneWaypoints = [
    { x: 0.6, y: 0.95, z: 6.5, wait: 2.5 },  // Trên Cầu Onsen ngắm suối
    { x: 5.0, y: 0, z: 6.5 },                 // Xuống cầu bờ Nene
    { x: 12.0, y: 0, z: 14.0 },               // Đường rợp bóng hoa anh đào
    { x: 22.0, y: 0, z: 22.0, wait: 2.0 },    // Thăm Chòi Ngắm Hoa Hanami
    { x: 24.0, y: 0, z: 10.0 },               // Dạo bước phố cổ Machiya
    { x: 18.0, y: 0, z: 0.0, wait: 2.0 },     // Ghé Nhà Trà & Tiệm Bánh
    { x: 12.0, y: 0, z: -8.0, wait: 2.0 },    // Ngắm Bánh Xe Nước Suisha
    { x: 18.0, y: 0, z: -20.0, wait: 2.0 },   // Dạo Vườn Sỏi Trắng Zen
    { x: 8.0, y: 0, z: -18.0 },               // Đường đèn đá ven suối
    { x: 4.5, y: 0, z: 0.0 },                 // Về chân cầu Onsen
    { x: 0.6, y: 0.95, z: 6.5, wait: 3.0 }    // Lên cầu đón nụ hôn cùng Thanh
  ];

  characters.push({
    id: 'nene',
    mesh: neneGroup,
    labelEl: nLabel,
    labelHeight: 2.8,
    waypoints: neneWaypoints,
    currentWpIndex: 0,
    waitTime: 0,
    walkClock: 0,
    speed: 2.4
  });
}

// Chùm trái tim 3D bay lên khi Thanh và Nene hôn nhau
const kissHearts = [];

function spawnKissHearts(posX, posY, posZ) {
  for (let i = 0; i < 22; i++) {
    const hMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.26, 10, 10),
      new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? 0xff2d55 : 0xff758f,
        emissive: 0xff2d55,
        emissiveIntensity: 0.95
      })
    );
    hMesh.position.set(
      posX + (Math.random() - 0.5) * 1.0,
      posY + Math.random() * 0.6,
      posZ + (Math.random() - 0.5) * 1.0
    );
    scene.add(hMesh);
    kissHearts.push({
      mesh: hMesh,
      velY: 2.0 + Math.random() * 2.5,
      velX: (Math.random() - 0.5) * 1.8,
      velZ: (Math.random() - 0.5) * 1.8,
      life: 2.4,
      maxLife: 2.4
    });
  }
}

function triggerKiss(broadcast = true) {
  isKissing = true;
  kissProgress = 5.0; // Kéo dài 5.0 giây

  // Camera lướt nhẹ nhàng đến Cầu Onsen
  cameraLerp = {
    targetPos: new THREE.Vector3(0, 7.8, 17.5),
    targetLook: new THREE.Vector3(0, 2.0, 6.5),
    alpha: 0
  };

  spawnKissHearts(0, 2.8, 6.5);
  showToast('💖 Thanh & Nene hẹn nhau trên Cầu Suối Nước Nóng trao nhau nụ hôn ngọt ngào!');

  if (broadcast && typeof publishCloudState === 'function') {
    publishCloudState({ station: 'onsen_hub', msg: '💋 Thanh & Nene vừa hôn nhau lãng mạn!' });
  }
}

// ============================================================================
// 7. THÚ CƯNG (SHIBA, MÈO, CÁ KOI, HƯƠU NARA) & DÂN LÀNG THỊ TRẤN
// ============================================================================
const koiFishList = [];
let deerHeadMesh;

function buildPetsAndVillagers() {
  // 1. Chó Shiba Inu ("Hachi") vui vẻ vẫy đuôi dạo chơi bên bờ Thanh
  const shibaGroup = new THREE.Group();
  const sBody = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.45, 0.9), MATS.shibaGold);
  sBody.position.y = 0.42;
  const sBelly = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.22, 0.75), MATS.shibaWhite);
  sBelly.position.set(0, 0.32, 0);

  const sHead = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 12), MATS.shibaGold);
  sHead.position.set(0, 0.75, 0.48);
  const sCheek = new THREE.Mesh(new THREE.SphereGeometry(0.24, 10, 10), MATS.shibaWhite);
  sCheek.position.set(0, 0.68, 0.54);
  const sSnout = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.14, 0.22), MATS.shibaWhite);
  sSnout.position.set(0, 0.72, 0.72);
  const sNose = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 6), MATS.shibaNose);
  sNose.position.set(0, 0.76, 0.82);

  const sEarL = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.22, 4), MATS.shibaGold);
  sEarL.position.set(-0.18, 1.05, 0.44);
  sEarL.rotation.z = 0.2;
  const sEarR = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.22, 4), MATS.shibaGold);
  sEarR.position.set(0.18, 1.05, 0.44);
  sEarR.rotation.z = -0.2;

  const legFL = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.35, 6), MATS.shibaWhite);
  legFL.position.set(-0.2, 0.18, 0.32);
  const legFR = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.35, 6), MATS.shibaWhite);
  legFR.position.set(0.2, 0.18, 0.32);
  const legBL = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.35, 6), MATS.shibaGold);
  legBL.position.set(-0.2, 0.18, -0.32);
  const legBR = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.35, 6), MATS.shibaGold);
  legBR.position.set(0.2, 0.18, -0.32);

  const sTailGroup = new THREE.Group();
  sTailGroup.position.set(0, 0.6, -0.45);
  const sTail = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.07, 8, 16, Math.PI * 1.4), MATS.shibaGold);
  sTail.rotation.x = Math.PI / 2;
  sTailGroup.add(sTail);

  shibaGroup.add(sBody, sBelly, sHead, sCheek, sSnout, sNose, sEarL, sEarR, legFL, legFR, legBL, legBR, sTailGroup);
  enableShadow(shibaGroup);
  scene.add(shibaGroup);

  const sLabel = document.createElement('div');
  sLabel.className = 'pet-label';
  sLabel.dataset.side = 'thanh';
  sLabel.textContent = '🐕 Shiba Hachi';
  labelsContainer.appendChild(sLabel);

  characters.push({
    id: 'shiba',
    mesh: shibaGroup,
    labelEl: sLabel,
    labelHeight: 1.4,
    waypoints: [
      { x: -12, y: 0, z: 8, wait: 2.0 },
      { x: -18, y: 0, z: 12 },
      { x: -24, y: 0, z: 2, wait: 2.5 },
      { x: -18, y: 0, z: -6 },
      { x: -10, y: 0, z: 0, wait: 2.0 }
    ],
    currentWpIndex: 0,
    waitTime: 0,
    walkClock: 0,
    speed: 2.6,
    tailMesh: sTailGroup,
    legs: [legFL, legFR, legBL, legBR],
    animWalk: (c, dt, el) => {
      if (c.tailMesh) c.tailMesh.rotation.y = Math.sin(el * 14) * 0.45;
      c.legs[0].rotation.x = Math.sin(c.walkClock * 10) * 0.4;
      c.legs[1].rotation.x = -Math.sin(c.walkClock * 10) * 0.4;
      c.legs[2].rotation.x = -Math.sin(c.walkClock * 10) * 0.4;
      c.legs[3].rotation.x = Math.sin(c.walkClock * 10) * 0.4;
    },
    animIdle: (c, dt, el) => {
      if (c.tailMesh) c.tailMesh.rotation.y = Math.sin(el * 10) * 0.4;
      c.legs.forEach(l => { l.rotation.x = 0; });
    }
  });

  // 2. Mèo Calico ("Mimi") dạo chơi bên Nhà Trà bờ Nene
  const catGroup = new THREE.Group();
  const cBody = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.32, 0.65), MATS.catWhite);
  cBody.position.y = 0.28;
  const cSpot1 = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.18, 0.25), MATS.catOrange);
  cSpot1.position.set(0.1, 0.35, 0.1);
  const cSpot2 = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.16, 0.22), MATS.catBlack);
  cSpot2.position.set(-0.1, 0.35, -0.15);

  const cHead = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 12), MATS.catWhite);
  cHead.position.set(0, 0.52, 0.35);
  const cCollar = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.03, 8, 16), MATS.vermilionRed);
  cCollar.position.set(0, 0.42, 0.32);
  const cBell = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), MATS.goldTrim);
  cBell.position.set(0, 0.38, 0.45);

  const cEarL = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.16, 4), MATS.catOrange);
  cEarL.position.set(-0.14, 0.74, 0.32);
  const cEarR = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.16, 4), MATS.catWhite);
  cEarR.position.set(0.14, 0.74, 0.32);

  const cTailGroup = new THREE.Group();
  cTailGroup.position.set(0, 0.36, -0.32);
  const cTail = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.03, 0.45, 8), MATS.catBlack);
  cTail.position.set(0, 0.2, -0.1);
  cTail.rotation.x = -Math.PI / 4;
  cTailGroup.add(cTail);

  catGroup.add(cBody, cSpot1, cSpot2, cHead, cCollar, cBell, cEarL, cEarR, cTailGroup);
  enableShadow(catGroup);
  scene.add(catGroup);

  const cLabel = document.createElement('div');
  cLabel.className = 'pet-label';
  cLabel.dataset.side = 'nene';
  cLabel.textContent = '🐱 Mèo Mimi';
  labelsContainer.appendChild(cLabel);

  characters.push({
    id: 'cat',
    mesh: catGroup,
    labelEl: cLabel,
    labelHeight: 1.2,
    waypoints: [
      { x: 16, y: 0, z: 4, wait: 3.0 },
      { x: 22, y: 0, z: 6 },
      { x: 20, y: 0, z: -6, wait: 2.5 },
      { x: 12, y: 0, z: 0, wait: 2.0 }
    ],
    currentWpIndex: 0,
    waitTime: 0,
    walkClock: 0,
    speed: 1.8,
    tailMesh: cTailGroup,
    animWalk: (c, dt, el) => {
      if (c.tailMesh) c.tailMesh.rotation.z = Math.sin(el * 6) * 0.3;
    },
    animIdle: (c, dt, el) => {
      if (c.tailMesh) c.tailMesh.rotation.z = Math.sin(el * 3) * 0.25;
    }
  });

  // 3. Đàn Cá Chép Koi (5 chú cá bơi lội dưới dòng suối Onsen)
  const koiMats = [
    MATS.koiKohakuRed,
    MATS.koiYamabuki,
    MATS.koiPlatinum,
    MATS.mapleOrange,
    MATS.koiKohakuRed
  ];

  for (let i = 0; i < 5; i++) {
    const kGroup = new THREE.Group();
    const kBody = new THREE.Mesh(new THREE.SphereGeometry(0.28, 8, 8), koiMats[i]);
    kBody.scale.set(0.65, 0.45, 1.4);
    const kBelly = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 8), MATS.white);
    kBelly.scale.set(0.55, 0.35, 1.2);
    kBelly.position.y = -0.06;
    const tailFin = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.25, 0.32), koiMats[i]);
    tailFin.position.set(0, 0, -0.46);

    kGroup.add(kBody, kBelly, tailFin);
    kGroup.position.set((Math.random() - 0.5) * 4, -0.32, -10 + i * 5);
    scene.add(kGroup);

    koiFishList.push({
      mesh: kGroup,
      tail: tailFin,
      phase: i * 1.3,
      speed: 0.6 + i * 0.15,
      radiusX: 1.6 + (i % 2) * 0.8,
      centerZ: -8 + i * 4.5,
      angle: i * 1.2
    });
  }

  // 4. Hươu Nara ("Kojika") gặm cỏ thanh bình dưới bóng cây ven suối
  const deerGroup = new THREE.Group();
  deerGroup.position.set(8.5, 0, -22);

  const dBody = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.65, 1.25), MATS.deerBrown);
  dBody.position.y = 1.05;
  for (let s = -0.4; s <= 0.4; s += 0.25) {
    const spotL = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 6), MATS.deerWhite);
    spotL.position.set(-0.25, 1.35, s);
    const spotR = spotL.clone();
    spotR.position.x = 0.25;
    deerGroup.add(spotL, spotR);
  }

  for (let lx of [-0.24, 0.24]) {
    for (let lz of [-0.45, 0.45]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.05, 0.85, 8), MATS.deerBrown);
      leg.position.set(lx, 0.42, lz);
      deerGroup.add(leg);
    }
  }

  const dNeck = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.18, 0.7, 8), MATS.deerBrown);
  dNeck.position.set(0, 1.45, 0.5);
  dNeck.rotation.x = -Math.PI / 6;

  const dHeadGroup = new THREE.Group();
  dHeadGroup.position.set(0, 1.75, 0.75);
  const dHead = new THREE.Mesh(new THREE.SphereGeometry(0.24, 10, 10), MATS.deerBrown);
  const dMuzzle = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, 0.3, 8), MATS.deerWhite);
  dMuzzle.rotation.x = Math.PI / 2;
  dMuzzle.position.set(0, -0.06, 0.2);
  const dEarL = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.25, 4), MATS.deerBrown);
  dEarL.position.set(-0.18, 0.22, -0.05);
  dEarL.rotation.z = 0.4;
  const dEarR = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.25, 4), MATS.deerBrown);
  dEarR.position.set(0.18, 0.22, -0.05);
  dEarR.rotation.z = -0.4;
  dHeadGroup.add(dHead, dMuzzle, dEarL, dEarR);
  deerHeadMesh = dHeadGroup;

  deerGroup.add(dBody, dNeck, dHeadGroup);
  enableShadow(deerGroup);
  scene.add(deerGroup);

  const dLabel = document.createElement('div');
  dLabel.className = 'pet-label';
  dLabel.dataset.side = 'center';
  dLabel.textContent = '🦌 Hươu Nara';
  labelsContainer.appendChild(dLabel);

  characters.push({
    id: 'deer',
    mesh: deerGroup,
    labelEl: dLabel,
    labelHeight: 2.2,
    waypoints: [{ x: 8.5, y: 0, z: -22, wait: 9999 }],
    currentWpIndex: 0,
    waitTime: 9999,
    animIdle: (c, dt, el) => {
      if (deerHeadMesh) {
        deerHeadMesh.rotation.x = Math.sin(el * 1.5) * 0.22;
      }
    }
  });

  // 5. Dân Làng: Aoi (Kimono Nene), Ren (Yukata Thanh), Sensei (Thiền sư)
  // A. Cô gái Kimono Aoi (Bờ Nene)
  const aoiGroup = new THREE.Group();
  const aKimono = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.58, 1.2, 12), MATS.kimonoPurple);
  aKimono.position.y = 0.7;
  const aObi = new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.48, 0.28, 12), MATS.sakuraDeep);
  aObi.position.y = 0.76;
  const aHead = new THREE.Mesh(new THREE.SphereGeometry(0.55, 16, 16), new THREE.MeshStandardMaterial({ color: 0xffe0bd }));
  aHead.position.y = 1.68;
  const aHair = new THREE.Mesh(new THREE.SphereGeometry(0.58, 14, 14, 0, Math.PI * 2, 0, Math.PI * 0.6), MATS.woodDark);
  aHair.position.y = 1.74;
  const parasolPole = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.4, 6), MATS.woodWarm);
  parasolPole.position.set(0.45, 1.5, 0.1);
  parasolPole.rotation.z = -0.25;
  const parasolCanopy = new THREE.Mesh(new THREE.ConeGeometry(0.7, 0.35, 12), MATS.sakuraPink);
  parasolCanopy.position.set(0.62, 2.15, 0.1);
  parasolCanopy.rotation.z = -0.25;
  aoiGroup.add(aKimono, aObi, aHead, aHair, parasolPole, parasolCanopy);
  enableShadow(aoiGroup);
  scene.add(aoiGroup);

  const aLabel = document.createElement('div');
  aLabel.className = 'npc-label';
  aLabel.dataset.side = 'nene';
  aLabel.textContent = '🌸 Aoi (Kimono)';
  labelsContainer.appendChild(aLabel);

  characters.push({
    id: 'aoi',
    mesh: aoiGroup,
    labelEl: aLabel,
    labelHeight: 2.5,
    waypoints: [
      { x: 16, y: 0, z: 12, wait: 2.0 },
      { x: 24, y: 0, z: 20, wait: 2.5 },
      { x: 22, y: 0, z: 4, wait: 2.0 },
      { x: 14, y: 0, z: 6 }
    ],
    currentWpIndex: 0,
    waitTime: 0,
    walkClock: 0,
    speed: 1.9
  });

  // B. Chàng trai Yukata Ren (Bờ Thanh)
  const renGroup = new THREE.Group();
  const rKimono = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.6, 1.25, 12), MATS.kimonoNavy);
  rKimono.position.y = 0.72;
  const rObi = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.5, 0.25, 12), MATS.white);
  rObi.position.y = 0.78;
  const rHead = new THREE.Mesh(new THREE.SphereGeometry(0.58, 16, 16), new THREE.MeshStandardMaterial({ color: 0xffe0bd }));
  rHead.position.y = 1.72;
  const rHair = new THREE.Mesh(new THREE.SphereGeometry(0.62, 14, 14, 0, Math.PI * 2, 0, Math.PI * 0.55), MATS.woodDark);
  rHair.position.y = 1.78;
  const fan = new THREE.Mesh(new THREE.CircleGeometry(0.24, 12), MATS.vermilionRed);
  fan.position.set(-0.5, 1.1, 0.3);
  fan.rotation.y = Math.PI / 4;
  renGroup.add(rKimono, rObi, rHead, rHair, fan);
  enableShadow(renGroup);
  scene.add(renGroup);

  const rLabel = document.createElement('div');
  rLabel.className = 'npc-label';
  rLabel.dataset.side = 'thanh';
  rLabel.textContent = '🍁 Ren (Lễ Hội)';
  labelsContainer.appendChild(rLabel);

  characters.push({
    id: 'ren',
    mesh: renGroup,
    labelEl: rLabel,
    labelHeight: 2.5,
    waypoints: [
      { x: -14, y: 0, z: -2, wait: 2.0 },
      { x: -22, y: 0, z: -4, wait: 2.5 },
      { x: -18, y: 0, z: -20, wait: 2.0 },
      { x: -10, y: 0, z: -12 }
    ],
    currentWpIndex: 0,
    waitTime: 0,
    walkClock: 0,
    speed: 2.1
  });

  // C. Thiền sư Sensei (Vườn Zen & Cầu Onsen)
  const senGroup = new THREE.Group();
  const sRobe = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.6, 1.3, 12), MATS.kimonoMonk);
  sRobe.position.y = 0.72;
  const senHead = new THREE.Mesh(new THREE.SphereGeometry(0.54, 16, 16), new THREE.MeshStandardMaterial({ color: 0xffe0bd }));
  senHead.position.y = 1.7;
  const sStaff = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.9, 8), MATS.woodDark);
  sStaff.position.set(0.48, 0.95, 0.2);
  senGroup.add(sRobe, senHead, sStaff);
  enableShadow(senGroup);
  scene.add(senGroup);

  const senLabel = document.createElement('div');
  senLabel.className = 'npc-label';
  senLabel.dataset.side = 'center';
  senLabel.textContent = '🍵 Sensei (Vườn Zen)';
  labelsContainer.appendChild(senLabel);

  characters.push({
    id: 'sensei',
    mesh: senGroup,
    labelEl: senLabel,
    labelHeight: 2.5,
    waypoints: [
      { x: 18, y: 0, z: -18, wait: 3.0 },
      { x: 14, y: 0, z: -24, wait: 2.5 },
      { x: 8, y: 0, z: -14, wait: 2.0 },
      { x: 14, y: 0, z: -10 }
    ],
    currentWpIndex: 0,
    waitTime: 0,
    walkClock: 0,
    speed: 1.4
  });
}

// ============================================================================
// 6. THỜI TIẾT 4 MÙA & HƠI NƯỚC ONSEN
// ============================================================================
const particles = [];
let onsenSteamParticles = [];

function initWeatherParticles() {
  const steamGeo = new THREE.SphereGeometry(0.38, 8, 8);
  const steamMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.38 });
  for (let s = 0; s < 50; s++) {
    const sp = new THREE.Mesh(steamGeo, steamMat);
    sp.position.set(
      (Math.random() - 0.5) * 6.5,
      0.4 + Math.random() * 4.8,
      (Math.random() - 0.5) * 35
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

  const pGeo = new THREE.PlaneGeometry(0.32, 0.28);
  const pMat = new THREE.MeshBasicMaterial({ color: 0xffb7c5, side: THREE.DoubleSide, transparent: true, opacity: 0.9 });
  for (let i = 0; i < 160; i++) {
    const pMesh = new THREE.Mesh(pGeo, pMat);
    pMesh.position.set(
      (Math.random() - 0.5) * 95,
      2 + Math.random() * 26,
      (Math.random() - 0.5) * 85
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
      p.mesh.material.color.setHex(0xffb7c5);
      p.speedY = 1.0;
    } else if (seasonName === 'summer') {
      p.mesh.material.color.setHex(0xc8f700);
      p.speedY = 0.4;
    } else if (seasonName === 'autumn') {
      p.mesh.material.color.setHex(Math.random() > 0.5 ? 0xd92027 : 0xf37121);
      p.speedY = 1.4;
    } else if (seasonName === 'winter') {
      p.mesh.material.color.setHex(0xffffff);
      p.speedY = 1.8;
    }
  });

  if (seasonName === 'winter') {
    scene.background.setHex(0x121728);
    scene.fog.color.setHex(0x121728);
    groundThanhMesh.material.color.setHex(0x38414e);
    groundNeneMesh.material.color.setHex(0x3c4756);
  } else {
    scene.background.setHex(NIGHT_BG);
    scene.fog.color.setHex(NIGHT_BG);
    groundThanhMesh.material.color.setHex(0x302722);
    groundNeneMesh.material.color.setHex(0x222d26);
  }

  showToast(`🌸 Thời tiết đã chuyển sang: MÙA ${seasonName === 'spring' ? 'XUÂN' : seasonName === 'summer' ? 'HẠ' : seasonName === 'autumn' ? 'THU' : 'ĐÔNG'}!`);
}

// ============================================================================
// 7. HỆ THỐNG PHÁO HOA 3D & MEGA FIREWORKS (5 TASKS)
// ============================================================================
const fireworks = [];

function spawnSingleFirework(posX, posY, posZ, colorHex = 0xff3b30) {
  const count = 30;
  for (let i = 0; i < count; i++) {
    const p = new THREE.Mesh(
      new THREE.SphereGeometry(0.25, 8, 8),
      new THREE.MeshStandardMaterial({
        color: colorHex,
        emissive: colorHex,
        emissiveIntensity: 1.1,
        roughness: 0.2
      })
    );
    p.position.set(posX, posY, posZ);
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const speed = 4.5 + Math.random() * 5.8;
    const vel = new THREE.Vector3(
      Math.sin(phi) * Math.cos(theta) * speed,
      Math.sin(phi) * Math.sin(theta) * speed + 3,
      Math.cos(phi) * speed
    );
    scene.add(p);
    fireworks.push({ mesh: p, vel, life: 1.45, maxLife: 1.45 });
  }
}

function triggerMegaFireworks(customMessage = null) {
  const colors = [0xff3b30, 0xff9500, 0xffcc00, 0x4cd964, 0x5ac8fa, 0x007aff, 0x5856d6, 0xff2d55];
  const launchPoints = [
    { x: -18, z: 6 }, { x: 18, z: 6 },
    { x: -26, z: -16 }, { x: 26, z: -14 },
    { x: 0, z: 0 }, { x: -10, z: 14 }, { x: 10, z: 14 }
  ];

  for (let wave = 0; wave < 8; wave++) {
    setTimeout(() => {
      const pt = launchPoints[wave % launchPoints.length];
      const col = colors[wave % colors.length];
      spawnSingleFirework(
        pt.x + (Math.random() - 0.5) * 5,
        15 + Math.random() * 8,
        pt.z + (Math.random() - 0.5) * 5,
        col
      );
    }, wave * 380);
  }

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
buildThanhSubStructures(); // Mở rộng: Chợ đêm Yatai & Senbon Torii
buildNeneTeaHouse();
buildNeneExtras();
buildNeneSubStructures();  // Mở rộng: Bánh xe nước & Vườn Zen
buildFloraScenery();
buildTownLamps();
buildChibiCouple();
buildPetsAndVillagers();
initWeatherParticles();
updateTownLighting(themeMode, false);

// Tạo các nhãn 3D nổi trên màn hình có gán data-side
const stationLabelEls = {};

function createStationLabels() {
  Object.values(STATIONS).forEach(st => {
    const wrapper = document.createElement('div');
    wrapper.className = 'world-label';
    wrapper.dataset.station = st.id;
    wrapper.dataset.side = st.side; // 'thanh' | 'nene' | 'center'
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
      activeRingMeshes[st.id].material.opacity = state.activeStation === st.id ? 0.85 : 0.0;
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

function flyToStation(stationId) {
  const st = STATIONS[stationId] || STATIONS.onsen_hub;
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

  if (st.id === 'onsen_hub') {
    renderOnsenHubPanel(body);
  } else if (st.id === 'thanh_dojo') {
    renderTasksPanel(body, 'thanh');
  } else if (st.id === 'thanh_tower') {
    renderAppsPanel(body, 'thanh');
  } else if (st.id === 'thanh_bell') {
    renderSchedulePanel(body, 'thanh');
  } else if (st.id === 'thanh_forge') {
    renderFinancePanel(body, 'thanh');
  } else if (st.id === 'nene_tea') {
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

    <div style="margin-top:12px; text-align:center;">
      <button class="ctrl-btn kiss-trigger-btn" style="width:100%; justify-content:center; padding:10px;" onclick="window.triggerKiss()">
        💋 Thanh &amp; Nene Hôn Nhau Trên Cầu
      </button>
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
      <div class="add-form-title">+ Thêm việc mới cho ${isThanh ? 'Thanh' : 'Nene'} (${tab === 'day' ? 'Ngày' : tab === 'week' ? 'Tuần' : 'Tháng'})</div>
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
// WINDOW ACTIONS & PHÁO HOA TRIGGER
// ============================================================================
window.setTaskTab = function(role, tab) {
  state.taskSubTab = tab;
  saveState();
  renderInspector();
};

function handleTaskCompletionReward(stationId, taskTitle) {
  state.completedStreak += 1;
  state.totalCompleted += 1;

  const st = STATIONS[stationId] || STATIONS.onsen_hub;
  spawnSingleFirework(st.pos.x, 8.5, st.pos.z, stationId.startsWith('thanh') ? 0xd63031 : 0xe84393);
  showToast(`🎆 Đã xong: ${taskTitle}! (${state.completedStreak % 5}/5 task)`);

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

window.triggerKiss = function() {
  triggerKiss(true);
};

// ============================================================================
// TOP BAR SWITCHERS & PERSONA VIEW CONTROLLER
// (TỰ ĐỘNG ẨN CÁC NÚT KHÔNG CẦN THIẾT THEO PERSONA)
// ============================================================================
function setPersonaView(persona) {
  state.currentUser = persona;
  document.getElementById('btn-role-thanh').classList.toggle('active', persona === 'thanh');
  document.getElementById('btn-role-nene').classList.toggle('active', persona === 'nene');
  document.getElementById('btn-role-all').classList.toggle('active', persona === 'all');

  // Gán class lên document.body để CSS tự động ẩn các nút không cần thiết!
  document.body.classList.remove('persona-thanh', 'persona-nene', 'persona-all');
  document.body.classList.add('persona-' + persona);

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

document.querySelectorAll('.season-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    applySeason(btn.dataset.season);
  });
});

document.getElementById('btn-trigger-fireworks').addEventListener('click', () => {
  triggerMegaFireworks('🎆 BẮN PHÁO HOA ĂN MỪNG THỊ TRẤN ĐÔI THANH & NENE! 🎆');
});

document.getElementById('btn-trigger-kiss').addEventListener('click', () => {
  triggerKiss(true);
});

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

// Chuyển đổi Ngày / Hoàng hôn / Đêm — Tự động bật/tắt toàn bộ đèn phố thị trấn
let themeMode = 2; // Mặc định Đêm huyền ảo (Đèn tự động bật sáng)
document.getElementById('btn-theme').addEventListener('click', () => {
  themeMode = (themeMode + 1) % 3;
  updateTownLighting(themeMode, true);
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

  // Nếu là sự kiện hôn nhau từ máy của người kia
  if (payload.isKiss) {
    triggerKiss(false);
    return;
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
    isKiss: isKissing,
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

    // 2. Quay bánh xe nước cối xay gỗ bên suối Nene
    if (waterWheelMesh) {
      waterWheelMesh.rotation.z -= dt * 0.95;
    }

    // 3. Xử lý nhân vật Chibi Thanh & Nene và nụ hôn ngọt ngào
    if (isKissing) {
      kissProgress -= dt;
      // Hai nhân vật tiến sát nhau trên Cầu Onsen và nghiêng người hôn nhau
      chibiThanhMesh.position.lerp(new THREE.Vector3(-0.48, 0.95, 6.5), Math.min(1, dt * 5.0));
      chibiNeneMesh.position.lerp(new THREE.Vector3(0.48, 0.95, 6.5), Math.min(1, dt * 5.0));
      chibiThanhMesh.lookAt(1, 0.95, 6.5);
      chibiNeneMesh.lookAt(-1, 0.95, 6.5);
      chibiThanhMesh.rotation.z = -0.18;
      chibiNeneMesh.rotation.z = 0.18;

      if (kissProgress <= 0) {
        isKissing = false;
        chibiThanhMesh.rotation.z = 0;
        chibiNeneMesh.rotation.z = 0;
      }
    }

    // Cập nhật di chuyển theo lộ trình (Waypoints) cho tất cả nhân vật, thú cưng và dân làng
    characters.forEach(char => {
      // Nếu đang trong thời gian hôn nhau, Thanh và Nene đã được điều khiển ở trên
      if (isKissing && (char.id === 'thanh' || char.id === 'nene')) {
        return;
      }

      if (!char.waypoints || char.waypoints.length === 0) return;

      if (char.waitTime > 0) {
        char.waitTime -= dt;
        if (char.animIdle) char.animIdle(char, dt, elapsed);
        return;
      }

      const target = char.waypoints[char.currentWpIndex];
      const curPos = char.mesh.position;
      const dx = target.x - curPos.x;
      const dz = target.z - curPos.z;
      const dist = Math.hypot(dx, dz);

      if (dist < 0.35) {
        if (target.wait) {
          char.waitTime = target.wait;
        }
        char.currentWpIndex = (char.currentWpIndex + 1) % char.waypoints.length;
        return;
      }

      const speed = target.speed || char.speed || 2.2;
      const moveDist = Math.min(speed * dt, dist);
      const moveAngle = Math.atan2(dx, dz);

      curPos.x += Math.sin(moveAngle) * moveDist;
      curPos.z += Math.cos(moveAngle) * moveDist;

      // Độ cao Y: nếu ở trên Cầu Onsen (X: [-3.8, 3.8], Z: [4.2, 8.8]) thì nâng lên 0.95
      const onBridge = (curPos.z > 4.2 && curPos.z < 8.8 && Math.abs(curPos.x) < 3.8);
      const baseY = onBridge ? 0.95 : (target.y !== undefined ? target.y : 0);
      curPos.y = baseY + Math.abs(Math.sin((char.walkClock || 0) * 7.5)) * 0.15;
      char.walkClock = (char.walkClock || 0) + dt;

      // Xoay hướng nhìn về đích đến
      let diff = moveAngle - char.mesh.rotation.y;
      while (diff < -Math.PI) diff += Math.PI * 2;
      while (diff > Math.PI) diff -= Math.PI * 2;
      char.mesh.rotation.y += diff * Math.min(1, dt * 7);

      if (char.animWalk) char.animWalk(char, dt, elapsed);
    });

    // Cập nhật bơi lội đàn cá Koi dưới suối Onsen
    koiFishList.forEach(k => {
      k.angle += dt * k.speed;
      k.mesh.position.x = Math.sin(k.angle + k.phase) * k.radiusX;
      k.mesh.position.z = k.centerZ + Math.cos(k.angle + k.phase) * 3.2;
      k.mesh.rotation.y = (k.angle + k.phase) + Math.PI / 2;
      if (k.tail) {
        k.tail.rotation.y = Math.sin(elapsed * 9 + k.phase) * 0.45;
      }
    });

    // 4. Cập nhật các hạt trái tim bay khi hôn nhau
    for (let h = kissHearts.length - 1; h >= 0; h--) {
      const heart = kissHearts[h];
      heart.life -= dt;
      heart.mesh.position.y += heart.velY * dt;
      heart.mesh.position.x += heart.velX * dt;
      heart.mesh.position.z += heart.velZ * dt;
      const alpha = heart.life / heart.maxLife;
      heart.mesh.scale.setScalar(Math.max(alpha * 1.2, 0.1));
      if (heart.life <= 0) {
        scene.remove(heart.mesh);
        kissHearts.splice(h, 1);
      }
    }

    // 5. Chuyển động hơi nước Onsen bốc lên mờ ảo
    onsenSteamParticles.forEach(sp => {
      sp.mesh.position.y += sp.speedY * dt;
      sp.mesh.position.x = sp.baseX + Math.sin(elapsed * 1.5 + sp.baseZ) * 0.4;
      sp.mesh.scale.setScalar(1 + (sp.mesh.position.y - 0.4) * sp.scaleSpeed);
      if (sp.mesh.position.y > 6.0) {
        sp.mesh.position.y = 0.4;
        sp.mesh.scale.setScalar(1);
      }
    });

    // 6. Chuyển động hạt thời tiết 4 mùa
    particles.forEach(p => {
      p.mesh.position.y -= p.speedY * dt;
      p.mesh.position.x += Math.sin(elapsed * 1.4 + p.phase) * p.driftX * dt;
      p.mesh.position.z += Math.cos(elapsed * 1.2 + p.phase) * p.driftX * dt;
      p.mesh.rotation.x += dt * 1.5;
      p.mesh.rotation.y += dt * 1.8;
      if (p.mesh.position.y < 0.2) {
        p.mesh.position.y = 24 + Math.random() * 5;
        p.mesh.position.x = (Math.random() - 0.5) * 95;
        p.mesh.position.z = (Math.random() - 0.5) * 85;
      }
    });
  }

  // 7. Xử lý hoạt ảnh pháo hoa nổ bung
  for (let i = fireworks.length - 1; i >= 0; i--) {
    const fw = fireworks[i];
    fw.life -= dt;
    fw.vel.y -= 9.8 * dt;
    fw.mesh.position.addScaledVector(fw.vel, dt);
    const alpha = fw.life / fw.maxLife;
    fw.mesh.scale.setScalar(Math.max(alpha, 0.1));
    if (fw.life <= 0) {
      scene.remove(fw.mesh);
      fireworks.splice(i, 1);
    }
  }

  // 8. Lướt camera chuyển cảnh mượt mà
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
    if (c.labelEl && c.mesh) {
      const pos = c.mesh.position.clone();
      pos.y += (c.labelHeight || 2.8);
      projectToScreen(pos, c.labelEl);
    }
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

applySeason('autumn'); // Mặc định mùa Thu ấm cúng
animate();
