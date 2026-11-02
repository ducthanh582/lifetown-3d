// ============================================================================
// LIFETOWN 3D — THỊ TRẤN ĐÔI PHONG CÁCH NHẬT BẢN CHO THANH & NENE
// ============================================================================

const STORAGE_KEY = 'lifetown_3d_kyoto_state_v3';
const DEFAULT_ROOM_ID = '280900';

const DEFAULT_STATE = {
  currentUser: 'all', // 'thanh' | 'nene' | 'all'
  activeStation: 'onsen_hub',
  completedStreak: 0,
  currentSeason: 'autumn',
  taskSubTab: 'day',

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
    ],
    ramenMenu: [
      { id: 'rm_1', title: '🍜 Tô Mì Ramen Tonkotsu Khổng Lồ (Nước hầm xương 12h, trứng lòng đào & rong biển)', energy: '+100 Năng Lượng', done: true },
      { id: 'rm_2', title: '🥟 Đĩa Gyoza Áp Chảo Giòn Rụm (Thưởng khi hoàn thành 2 task)', energy: '+50 Năng Lượng', done: true },
      { id: 'rm_3', title: '🍵 Trà Rang Hojicha Nóng & Trà Sữa Sakura Thơm Lừng', energy: '+40 Năng Lượng', done: false },
      { id: 'rm_4', title: '🍡 Bánh Dango Mật Mía & Kem Matcha Tráng Miệng', energy: '+30 Năng Lượng', done: false }
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
      const merged = Object.assign({}, DEFAULT_STATE, parsed);
      if (merged.nene && !merged.nene.ramenMenu) {
        merged.nene.ramenMenu = JSON.parse(JSON.stringify(DEFAULT_STATE.nene.ramenMenu));
      }
      return merged;
    }
  } catch (e) {
    console.warn('Cannot read localStorage:', e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function saveState(syncMeta = null) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    updateWorldBadges();
    updateTopSummary();
    if (typeof publishCloudState === 'function') {
      publishCloudState(syncMeta);
    }
  } catch (e) {
    console.warn('Cannot save localStorage:', e);
  }
}

function formatVND(num) {
  return (num || 0).toLocaleString('vi-VN') + ' đ';
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
// HỆ THỐNG TRẠM QUẢN LÝ (STATIONS) — BỐ TRÍ CÂN ĐỐI, RÕ RÀNG & KHÔNG CHỒNG LẤN
// ============================================================================
const STATIONS = {
  // 1. TRUNG TÂM KẾT NỐI: SUỐI NƯỚC NÓNG ON-SEN UYÊN ƯƠNG (CHUNG CHO CẢ HAI)
  onsen_hub: {
    id: 'onsen_hub',
    side: 'center',
    owner: 'Thanh & Nene',
    name: 'Suối Nước Nóng Uyên Ương (Onsen)',
    shortName: 'Suối Onsen',
    icon: '♨️',
    pos: { x: 0, y: 0, z: 0 },
    labelHeight: 12.0,
    camOffset: { x: 0, y: 15, z: 22 },
    quote: 'Nơi kết nối hai tâm hồn, ngâm mình trong dòng suối khoáng nóng thư thái và cùng theo dõi mục tiêu chung.',
    bubble: 'Nơi hai trái tim hội ngộ giữa làn khói Onsen ấm áp'
  },

  // 2. BỜ THANH (BÊN TRÁI - TÂY): LỄ HỘI VÕ SĨ & RỪNG LÁ PHONG ĐỎ MOMIJI
  thanh_dojo: {
    id: 'thanh_dojo',
    side: 'thanh',
    owner: 'Thanh',
    name: 'Võ Đường Phong Diệp (Task Thanh)',
    shortName: 'Võ Đường Task',
    icon: '⛩️',
    pos: { x: -26, y: 0, z: 6 },
    labelHeight: 12.5,
    camOffset: { x: -26, y: 15, z: 22 },
    quote: 'Võ đường rèn luyện ý chí kiên định như kiếm đạo Samurai. Mỗi task hoàn thành là một đường kiếm dứt khoát!',
    bubble: 'Chém tan mọi trì hoãn, làm chủ từng mục tiêu!'
  },
  thanh_tower: {
    id: 'thanh_tower',
    side: 'thanh',
    owner: 'Thanh',
    name: 'Lầu Vọng Cảnh Lễ Hội (App & Dự Án)',
    shortName: 'Lầu Vọng Cảnh',
    icon: '🏯',
    pos: { x: -28, y: 0, z: -20 },
    labelHeight: 18.0,
    camOffset: { x: -28, y: 20, z: -4 },
    quote: 'Tòa bảo tháp 3 tầng vươn cao giữa trời thu, nơi quản lý toàn bộ các ứng dụng SaaS, hạ tầng server và hệ sinh thái công nghệ.',
    bubble: 'Phóng tầm mắt nhìn xa, kiến tạo tương lai'
  },
  thanh_bell: {
    id: 'thanh_bell',
    side: 'thanh',
    owner: 'Thanh',
    name: 'Tháp Chuông Kỷ Luật (Lịch Trình Thanh)',
    shortName: 'Tháp Kỷ Luật',
    icon: '🔔',
    pos: { x: -14, y: 0, z: -20 },
    labelHeight: 10.5,
    camOffset: { x: -14, y: 15, z: -6 },
    quote: 'Tiếng chuông đồng ngân vang theo từng khung giờ trong ngày, giữ vững kỷ luật thép và sự tập trung cao độ.',
    bubble: 'Thời gian trôi không chờ đợi, hành động ngay!'
  },
  thanh_forge: {
    id: 'thanh_forge',
    side: 'thanh',
    owner: 'Thanh',
    name: 'Tiệm Rèn Đao & Ngân Khố (Tài Chính)',
    shortName: 'Tiệm Rèn & Tiền',
    icon: '⚔️',
    pos: { x: -26, y: 0, z: 24 },
    labelHeight: 11.5,
    camOffset: { x: -26, y: 15, z: 38 },
    quote: 'Ngọn lửa rèn than hồng rực rỡ, tích lũy ngân lượng vững bền và quản lý thu chi cá nhân cho Thanh.',
    bubble: 'Rèn giũa bản thân, tích lũy tài chính vững chắc!'
  },

  // 3. BỜ NENE (BÊN PHẢI - ĐÔNG): PHỐ CỔ MACHIYA KYOTO & HOA ANH ĐÀO SAKURA
  nene_tea: {
    id: 'nene_tea',
    side: 'nene',
    owner: 'Nene',
    name: 'Trà Quán Sakura (Task Nene)',
    shortName: 'Trà Quán Task',
    icon: '🍵',
    pos: { x: 26, y: 0, z: 6 },
    labelHeight: 12.5,
    camOffset: { x: 26, y: 15, z: 22 },
    quote: 'Trà quán phong cách Kyoto cổ kính dưới bóng hoa anh đào, thưởng thức trà thơm và hoàn thành to-do list mỗi ngày.',
    bubble: 'Nhấp ngụm trà thơm, làm việc nhẹ nhàng như cánh hoa rơi'
  },
  nene_ramen: {
    id: 'nene_ramen',
    side: 'nene',
    owner: 'Nene',
    name: 'Quán Mì Ramen Nene (Ảnh 3)',
    shortName: 'Quán Mì Ramen',
    icon: '🍜',
    pos: { x: 16, y: 0, z: 20 },
    labelHeight: 12.0,
    camOffset: { x: 16, y: 15, z: 34 },
    quote: 'Quán mì Ramen phong cách Kyoto mái ngói xanh Kawara với tô mì khổng lồ bốc khói trên nóc! Thưởng thức bát mì thơm ngon để nạp năng lượng.',
    bubble: 'Tô mì ramen nóng hổi sẵn sàng phục vụ!'
  },
  nene_studio: {
    id: 'nene_studio',
    side: 'nene',
    owner: 'Nene',
    name: 'Thương Điếm Nhuộm Vải & Sáng Tạo',
    shortName: 'Tiệm Sáng Tạo',
    icon: '👘',
    pos: { x: 28, y: 0, z: -20 },
    labelHeight: 13.0,
    camOffset: { x: 28, y: 15, z: -6 },
    quote: 'Xưởng may kimono lụa là và studio nghệ thuật của Nene, quản lý các dự án thiết kế, vẽ tranh và sáng tạo nội dung.',
    bubble: 'Nghệ thuật thêu dệt nên sắc màu cuộc sống'
  },
  nene_clock: {
    id: 'nene_clock',
    side: 'nene',
    owner: 'Nene',
    name: 'Lầu Nguyệt Quang Điểm Giờ (Lịch Nene)',
    shortName: 'Lầu Nguyệt Quang',
    icon: '🕰️',
    pos: { x: 14, y: 0, z: -20 },
    labelHeight: 12.0,
    camOffset: { x: 14, y: 15, z: -6 },
    quote: 'Tòa lầu gỗ ngắm trăng thanh bình, quản lý thời gian biểu, các buổi tập yoga, đọc sách và khoảnh khắc thư giãn của Nene.',
    bubble: 'Trân quý từng giây phút bình yên'
  },
  nene_wagashi: {
    id: 'nene_wagashi',
    side: 'nene',
    owner: 'Nene',
    name: 'Tiệm Bánh Wagashi & Ngân Khố Nene',
    shortName: 'Wagashi & Tiền',
    icon: '🍡',
    pos: { x: 28, y: 0, z: 24 },
    labelHeight: 11.5,
    camOffset: { x: 28, y: 15, z: 38 },
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
const NIGHT_BG = 0x0a101d;
const DUSK_BG  = 0x221324;
const DAY_BG   = 0x7fa2b6;

scene.background = new THREE.Color(NIGHT_BG);
scene.fog = new THREE.FogExp2(NIGHT_BG, 0.0085);

const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.2, 380);
camera.position.set(0, 32, 54);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
container.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.maxPolarAngle = Math.PI / 2.05;
controls.minDistance = 6;
controls.maxDistance = 140;
controls.target.set(0, 2, 0);

const clock = new THREE.Clock();

// ============================================================================
// HỆ THỐNG ÁNH SÁNG & ĐÈN THỊ TRẤN
// ============================================================================
let themeMode = 2; // 0 = Sáng, 1 = Hoàng hôn, 2 = Đêm (Mặc định đêm lung linh)

const hemiLight = new THREE.HemisphereLight(0x4a6572, 0x1f272a, 0.8);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xdde8f0, 0.85);
dirLight.position.set(30, 48, 20);
dirLight.castShadow = true;
dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;
dirLight.shadow.camera.near = 1;
dirLight.shadow.camera.far = 180;
dirLight.shadow.camera.left = -48;
dirLight.shadow.camera.right = 48;
dirLight.shadow.camera.top = 48;
dirLight.shadow.camera.bottom = -48;
dirLight.shadow.bias = -0.0004;
scene.add(dirLight);

const ambientLight = new THREE.AmbientLight(0x283244, 0.95);
scene.add(ambientLight);

// Nguồn sáng xanh ngọc lung linh từ Suối Nước Nóng Onsen trung tâm
const onsenPoolLight = new THREE.PointLight(0x00d2d3, 1.4, 18);
onsenPoolLight.position.set(0, 1.6, -1);
scene.add(onsenPoolLight);

const townLanternMeshes = [];
const townPointLights = [];

function enableShadow(obj) {
  obj.traverse(child => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
}

// ============================================================================
// BẢNG VẬT LIỆU CHUẨN PHONG CÁCH NHẬT BẢN (AUTHENTIC MATERIALS)
// ============================================================================
const MATS = {
  // Mặt đất & Đá lát đường
  groundThanh: new THREE.MeshStandardMaterial({ color: 0x221a15, roughness: 0.94 }),
  groundNene:  new THREE.MeshStandardMaterial({ color: 0x16221b, roughness: 0.94 }),
  stonePath:   new THREE.MeshStandardMaterial({ color: 0x4a5568, roughness: 0.85, metalness: 0.08 }),
  stoneCurb:   new THREE.MeshStandardMaterial({ color: 0x2d3748, roughness: 0.9 }),
  onsenRock:   new THREE.MeshStandardMaterial({ color: 0x3d3935, roughness: 0.88 }),

  // MẶT NƯỚC ONSEN TRONG SUỐT, LẤP LÁNH & VIBRANT (CHUẨN ẢNH 2)
  onsenWater: new THREE.MeshStandardMaterial({
    color: 0x00cec9,
    emissive: 0x005566,
    emissiveIntensity: 0.35,
    roughness: 0.06,
    metalness: 0.2,
    transparent: true,
    opacity: 0.86,
    side: THREE.DoubleSide
  }),

  // Gỗ truyền thống Nhật Bản
  woodDark: new THREE.MeshStandardMaterial({ color: 0x241810, roughness: 0.82 }),
  woodWarm: new THREE.MeshStandardMaterial({ color: 0x5a3721, roughness: 0.74 }),
  woodCedar: new THREE.MeshStandardMaterial({ color: 0x7a4928, roughness: 0.68 }),
  shikkuiWhite: new THREE.MeshStandardMaterial({ color: 0xded8ce, roughness: 0.6 }),

  // Mái ngói Kawara
  kawaraRoofDark: new THREE.MeshStandardMaterial({ color: 0x1e242b, roughness: 0.5, metalness: 0.15 }),
  kawaraRoofRed:  new THREE.MeshStandardMaterial({ color: 0x781e16, roughness: 0.5 }),
  ramenRoofGreen: new THREE.MeshStandardMaterial({ color: 0x3b694b, roughness: 0.42 }),

  // Màu đỏ sơn son đền Shinto
  vermilionRed:  new THREE.MeshStandardMaterial({ color: 0xd93829, roughness: 0.4 }),
  vermilionDeep: new THREE.MeshStandardMaterial({ color: 0x8a150c, roughness: 0.5 }),
  goldTrim:      new THREE.MeshStandardMaterial({ color: 0xf3c14b, roughness: 0.25, metalness: 0.55 }),

  // Cây Lá Phong Đỏ (Bờ Thanh)
  mapleRed:    new THREE.MeshStandardMaterial({ color: 0xd92027, roughness: 0.55 }),
  mapleOrange: new THREE.MeshStandardMaterial({ color: 0xf37121, roughness: 0.55 }),
  mapleGold:   new THREE.MeshStandardMaterial({ color: 0xffa41b, roughness: 0.55 }),

  // Cây Hoa Anh Đào (Bờ Nene)
  sakuraPink:    new THREE.MeshStandardMaterial({ color: 0xffb7c5, roughness: 0.55 }),
  sakuraDeep:    new THREE.MeshStandardMaterial({ color: 0xf48fb1, roughness: 0.55 }),
  sakuraLight:   new THREE.MeshStandardMaterial({ color: 0xffe4ec, roughness: 0.55 }),
  sakuraVibrant: new THREE.MeshStandardMaterial({ color: 0xff69b4, roughness: 0.55 }),
  sakuraCanopy:  new THREE.MeshStandardMaterial({ color: 0xff80bf, roughness: 0.55 }),

  // Giấy Shoji phát sáng ấm cúng & Đèn lồng Chochin
  shojiGlow:        new THREE.MeshStandardMaterial({ color: 0xfffae6, emissive: 0xffb347, emissiveIntensity: 0.85, roughness: 0.4 }),
  lanternRedGlow:   new THREE.MeshStandardMaterial({ color: 0xff3b30, emissive: 0xff2010, emissiveIntensity: 1.45, roughness: 0.35 }),
  lanternWarmGlow:  new THREE.MeshStandardMaterial({ color: 0xfff0b3, emissive: 0xffbb00, emissiveIntensity: 1.35, roughness: 0.35 }),
  white:            new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 }),
  norenBlue:        new THREE.MeshStandardMaterial({ color: 0x1b3a5b, roughness: 0.7 }),

  // Đèn đá Toro & Bậc thềm
  toroStone:     new THREE.MeshStandardMaterial({ color: 0x5a5752, roughness: 0.85 }),
  toroStoneDark: new THREE.MeshStandardMaterial({ color: 0x33312e, roughness: 0.9 }),

  // Quán Mì Ramen (Ảnh 3)
  ramenBowlWhite:  new THREE.MeshStandardMaterial({ color: 0xfbfbfb, roughness: 0.22 }),
  ramenSoup:       new THREE.MeshStandardMaterial({ color: 0x8b4513, roughness: 0.18, metalness: 0.1 }),
  ramenNoodle:     new THREE.MeshStandardMaterial({ color: 0xf5b041, roughness: 0.45 }),
  ramenEggWhite:   new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.35 }),
  ramenEggYolk:    new THREE.MeshStandardMaterial({ color: 0xff8c00, roughness: 0.3 }),
  ramenNori:       new THREE.MeshStandardMaterial({ color: 0x1c351c, roughness: 0.8 }),
  ramenChopsticks: new THREE.MeshStandardMaterial({ color: 0xd35400, roughness: 0.5 }),
  ramenWallPeach:  new THREE.MeshStandardMaterial({ color: 0xf4b5a4, roughness: 0.7 }),
  ramenNorenRed:   new THREE.MeshStandardMaterial({ color: 0xd63031, roughness: 0.6 }),

  // Thác nước Onsen
  waterfallWhite: new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.88, roughness: 0.1 }),

  // Thú cưng & Cá Koi
  shibaGold:    new THREE.MeshStandardMaterial({ color: 0xd9822b, roughness: 0.65 }),
  shibaWhite:   new THREE.MeshStandardMaterial({ color: 0xfff6ec, roughness: 0.7 }),
  shibaNose:    new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.4 }),
  catWhite:     new THREE.MeshStandardMaterial({ color: 0xf5f5f5, roughness: 0.6 }),
  catOrange:    new THREE.MeshStandardMaterial({ color: 0xd35400, roughness: 0.6 }),
  catBlack:     new THREE.MeshStandardMaterial({ color: 0x2c3e50, roughness: 0.6 }),
  deerBrown:    new THREE.MeshStandardMaterial({ color: 0x935116, roughness: 0.75 }),
  deerWhite:    new THREE.MeshStandardMaterial({ color: 0xfef9e7, roughness: 0.8 }),
  koiKohakuRed: new THREE.MeshStandardMaterial({ color: 0xe74c3c, roughness: 0.25 }),
  koiYamabuki:  new THREE.MeshStandardMaterial({ color: 0xf39c12, metalness: 0.3, roughness: 0.2 }),
  koiPlatinum:  new THREE.MeshStandardMaterial({ color: 0xf0f3f4, metalness: 0.35, roughness: 0.15 }),

  // Kimono dân làng
  kimonoPurple: new THREE.MeshStandardMaterial({ color: 0x8e44ad, roughness: 0.65 }),
  kimonoNavy:   new THREE.MeshStandardMaterial({ color: 0x1b2631, roughness: 0.65 }),
  kimonoMonk:   new THREE.MeshStandardMaterial({ color: 0x566573, roughness: 0.85 })
};

// ============================================================================
// ĐỊA HÌNH, MẶT ĐẤT & TRỤC ĐƯỜNG ĐÁ PHỐ CỔ (PAVED STREET NETWORK)
// ============================================================================
const groundGroup = new THREE.Group();

// 1. Thảm đất nền chính bờ Thanh (Tây: X < 0) và bờ Nene (Đông: X > 0)
const groundThanhMesh = new THREE.Mesh(new THREE.BoxGeometry(46, 1.6, 80), MATS.groundThanh);
groundThanhMesh.position.set(-25, -0.8, 0);
groundThanhMesh.receiveShadow = true;

const groundNeneMesh = new THREE.Mesh(new THREE.BoxGeometry(46, 1.6, 80), MATS.groundNene);
groundNeneMesh.position.set(25, -0.8, 0);
groundNeneMesh.receiveShadow = true;

// Đất liền nối liền phía Bắc và Nam của Hồ Onsen
const northPromenade = new THREE.Mesh(new THREE.BoxGeometry(18, 1.6, 26), MATS.groundNene);
northPromenade.position.set(0, -0.8, -27);
northPromenade.receiveShadow = true;

const southPromenade = new THREE.Mesh(new THREE.BoxGeometry(18, 1.6, 26), MATS.groundThanh);
southPromenade.position.set(0, -0.8, 27);
southPromenade.receiveShadow = true;

groundGroup.add(groundThanhMesh, groundNeneMesh, northPromenade, southPromenade);

// 2. LÒNG HỒ ONSEN TRUNG TÂM (Trũng xuống để chứa làn nước khoáng nóng)
const lakeBasin = new THREE.Mesh(new THREE.CylinderGeometry(9.2, 9.6, 0.45, 36), MATS.toroStoneDark);
lakeBasin.position.set(0, -0.15, -1.0);
lakeBasin.scale.set(1.15, 1, 1.25);
lakeBasin.receiveShadow = true;
groundGroup.add(lakeBasin);

// 3. TRỤC ĐƯỜNG ĐÁ LÁT CHÍNH (SANDO & MACHIYA DORI)
function createPavedRoad(x, z, width, length, isRotated = false) {
  const roadGeo = new THREE.BoxGeometry(isRotated ? length : width, 0.06, isRotated ? width : length);
  const road = new THREE.Mesh(roadGeo, MATS.stonePath);
  road.position.set(x, 0.03, z);
  road.receiveShadow = true;
  return road;
}

// Trục đường chính bờ Thanh (Chạy dọc X = -18)
groundGroup.add(createPavedRoad(-18, 0, 4.4, 64));
// Trục đường chính bờ Nene (Chạy dọc X = 18)
groundGroup.add(createPavedRoad(18, 0, 4.4, 64));
// Đại lộ nối ngang hai bờ qua Cầu Taiko (Chạy ngang Z = 6)
groundGroup.add(createPavedRoad(0, 6, 4.0, 42, true));

// Các lối đi nhánh dẫn vào cửa từng công trình
groundGroup.add(createPavedRoad(-22, 6, 8.0, 3.2, true));   // Vào Võ Đường
groundGroup.add(createPavedRoad(-23, -20, 10.0, 3.2, true)); // Vào Lầu Vọng Cảnh
groundGroup.add(createPavedRoad(-22, 24, 8.0, 3.2, true));  // Vào Tiệm Rèn
groundGroup.add(createPavedRoad(22, 6, 8.0, 3.2, true));    // Vào Trà Quán
groundGroup.add(createPavedRoad(17, 20, 6.0, 3.2, true));   // Vào Quán Mì Ramen
groundGroup.add(createPavedRoad(23, -20, 10.0, 3.2, true)); // Vào Tiệm Sáng Tạo
groundGroup.add(createPavedRoad(23, 24, 10.0, 3.2, true));  // Vào Tiệm Bánh Wagashi

scene.add(groundGroup);

// Hitboxes & Active Rings
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

  const ringGeo = new THREE.RingGeometry(radius + 0.3, radius + 1.1, 48);
  ringGeo.rotateX(-Math.PI / 2);
  const ringMat = new THREE.MeshBasicMaterial({
    color: stationId.startsWith('thanh') ? 0xd63031 : (stationId.startsWith('nene') ? 0xe84393 : 0x00cec9),
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
// HỆ THỐNG KIẾN TRÚC NHẬT BẢN THẨM MỸ (AESTHETIC JAPANESE ARCHITECTURE)
// ============================================================================

// Mái ngói cong truyền thống Nhật Bản (Irimoya / Pagoda Roof)
function createCurvedRoof(width, depth, height, roofMat = MATS.kawaraRoofDark) {
  const roofGroup = new THREE.Group();
  const mainRoof = new THREE.Mesh(new THREE.ConeGeometry(Math.max(width, depth) * 0.72, height, 4), roofMat);
  mainRoof.rotation.y = Math.PI / 4;
  mainRoof.position.y = height / 2;
  mainRoof.scale.set(width / Math.max(width, depth), 1, depth / Math.max(width, depth));

  const eave = new THREE.Mesh(new THREE.BoxGeometry(width + 0.8, 0.16, depth + 0.8), roofMat);
  eave.position.y = 0.08;

  const ridgeX = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, width + 0.9, 8), MATS.woodDark);
  ridgeX.rotation.z = Math.PI / 2;
  ridgeX.position.y = height + 0.05;

  roofGroup.add(mainRoof, eave, ridgeX);
  return roofGroup;
}

// Cổng Shinto Torii sơn son
function createToriiGate(scale = 1) {
  const tg = new THREE.Group();
  const pL = new THREE.Mesh(new THREE.CylinderGeometry(0.24 * scale, 0.28 * scale, 4.4 * scale, 12), MATS.vermilionRed);
  pL.position.set(-1.8 * scale, 2.2 * scale, 0);
  pL.rotation.z = -0.04;

  const pR = new THREE.Mesh(new THREE.CylinderGeometry(0.24 * scale, 0.28 * scale, 4.4 * scale, 12), MATS.vermilionRed);
  pR.position.set(1.8 * scale, 2.2 * scale, 0);
  pR.rotation.z = 0.04;

  const nuki = new THREE.Mesh(new THREE.BoxGeometry(4.4 * scale, 0.22 * scale, 0.25 * scale), MATS.vermilionRed);
  nuki.position.y = 3.3 * scale;

  const kasagi = new THREE.Mesh(new THREE.BoxGeometry(5.2 * scale, 0.38 * scale, 0.45 * scale), MATS.vermilionDeep);
  kasagi.position.y = 4.3 * scale;

  tg.add(pL, pR, nuki, kasagi);
  return tg;
}

// Cửa sổ Shoji phẳng gắn chìm thanh lịch (Flush Shoji Lattice Window)
function createShojiLattice(width, height, cols = 3, rows = 3) {
  const wg = new THREE.Group();
  // Khung gỗ viền
  const frame = new THREE.Mesh(new THREE.BoxGeometry(width, height, 0.04), MATS.woodDark);
  // Giấy washi phát sáng
  const pane = new THREE.Mesh(new THREE.BoxGeometry(width - 0.08, height - 0.08, 0.05), MATS.shojiGlow);
  wg.add(frame, pane);

  // Nan dọc
  for (let c = 1; c < cols; c++) {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.03, height - 0.08, 0.06), MATS.woodDark);
    bar.position.x = -width / 2 + (width / cols) * c;
    wg.add(bar);
  }
  // Nan ngang
  for (let r = 1; r < rows; r++) {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(width - 0.08, 0.03, 0.06), MATS.woodDark);
    bar.position.y = -height / 2 + (height / rows) * r;
    wg.add(bar);
  }
  townLanternMeshes.push(pane);
  return wg;
}

// Cửa chính Genkan phong cách Nhật Bản thanh lịch (Traditional Japanese Sliding Genkan)
function createJapaneseGenkan(width, height, norenColor = MATS.norenBlue) {
  const eg = new THREE.Group();

  // 1. Bậc thềm đá bước chân (Kutsunugi-ishi)
  const step = new THREE.Mesh(new THREE.BoxGeometry(width + 0.4, 0.12, 0.45), MATS.toroStoneDark);
  step.position.set(0, 0.06, 0.22);

  // 2. Khung cửa gỗ âm tường
  const frame = new THREE.Mesh(new THREE.BoxGeometry(width, height, 0.08), MATS.woodDark);
  frame.position.y = height / 2;

  // 3. Đôi cửa trượt Shoji nan ngang (Hikido)
  const halfW = width / 2 - 0.04;
  const doorL = new THREE.Mesh(new THREE.BoxGeometry(halfW, height - 0.1, 0.04), MATS.shojiGlow);
  doorL.position.set(-halfW / 2 - 0.01, height / 2, 0.01);
  const doorR = new THREE.Mesh(new THREE.BoxGeometry(halfW, height - 0.1, 0.04), MATS.shojiGlow);
  doorR.position.set(halfW / 2 + 0.01, height / 2, -0.01);

  // Nan gỗ ngang trên cửa trượt
  for (let dy = 0.3; dy < height - 0.2; dy += 0.38) {
    const slatL = new THREE.Mesh(new THREE.BoxGeometry(halfW - 0.04, 0.03, 0.05), MATS.woodDark);
    slatL.position.set(-halfW / 2 - 0.01, dy, 0.01);
    const slatR = new THREE.Mesh(new THREE.BoxGeometry(halfW - 0.04, 0.03, 0.05), MATS.woodDark);
    slatR.position.set(halfW / 2 + 0.01, dy, -0.01);
    eg.add(slatL, slatR);
  }

  // 4. Mái che gỗ hiên cửa thanh mảnh (Kitsuki Eave)
  const eaveSlab = new THREE.Mesh(new THREE.BoxGeometry(width + 0.6, 0.08, 0.45), MATS.woodDark);
  eaveSlab.position.set(0, height + 0.04, 0.2);
  const bracketL = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.2, 0.35), MATS.woodDark);
  bracketL.position.set(-width / 2 + 0.1, height - 0.08, 0.15);
  const bracketR = bracketL.clone();
  bracketR.position.x = width / 2 - 0.1;

  // 5. Rèm vải Noren truyền thống chia múi
  const norenGroup = new THREE.Group();
  norenGroup.position.set(0, height - 0.22, 0.06);
  const numPanels = 3;
  const pW = (width - 0.15) / numPanels;
  for (let p = 0; p < numPanels; p++) {
    const panel = new THREE.Mesh(new THREE.BoxGeometry(pW - 0.03, 0.45, 0.02), norenColor);
    panel.position.x = -width / 2 + 0.1 + p * pW + pW / 2;
    norenGroup.add(panel);
  }

  eg.add(step, frame, doorL, doorR, eaveSlab, bracketL, bracketR, norenGroup);
  townLanternMeshes.push(doorL, doorR);
  return eg;
}

// ============================================================================
// 1. CỤM HỒ SUỐI NƯỚC NÓNG ONSEN TRUNG TÂM (CHUẨN ĐÚNG THEO ẢNH THỨ 2)
// (NƯỚC TRONG XANH LẤP LÁNH, BỜ ĐÁ TỰ NHIÊN, THÁC NƯỚC, BỒN TẮM GỖ OFURO, CẦU TAIKO)
// ============================================================================
let ofuroWaterMesh, stoneTubWaterMesh;

function buildOnsenCenter() {
  const group = new THREE.Group();
  group.position.set(STATIONS.onsen_hub.pos.x, 0, STATIONS.onsen_hub.pos.z);

  // 1. MẶT NƯỚC HỒ ONSEN TỰ NHIÊN — TRONG XANH, LẤP LÁNH VÀ HOÀN TOÀN LỘ THIÊN
  const lakeWater = new THREE.Mesh(new THREE.CylinderGeometry(8.2, 8.2, 0.1, 36), MATS.onsenWater);
  lakeWater.position.set(0, 0.22, -1.0);
  lakeWater.scale.set(1.15, 1, 1.25);
  group.add(lakeWater);

  // 2. BỜ ĐÁ CUỘI TỰ NHIÊN UỐN LƯỢN QUANH HỒ (Bao quanh mép nước, không che mặt nước)
  for (let i = 0; i < 28; i++) {
    const angle = (i / 28) * Math.PI * 2;
    const rx = Math.cos(angle) * 9.2 * 1.15;
    const rz = -1.0 + Math.sin(angle) * 9.2 * 1.25;
    const rock = new THREE.Mesh(
      new THREE.DodecahedronGeometry(0.75 + Math.sin(i * 3.5) * 0.35, 0),
      MATS.onsenRock
    );
    rock.position.set(rx, 0.35, rz);
    rock.rotation.set(Math.sin(i), Math.cos(i), 0);
    group.add(rock);
  }

  // 3. HÒN NON BỘ & THÁC NƯỚC KHOÁNG TRẮNG XÓA (BỜ BẮC HỒ: X: 0, Z: -11)
  const rockeryGroup = new THREE.Group();
  rockeryGroup.position.set(0, 0, -11.0);

  const crags = [
    { x: 0, y: 1.8, z: 0, r: 2.2 },
    { x: -1.8, y: 1.4, z: 0.6, r: 1.6 },
    { x: 1.8, y: 1.5, z: 0.5, r: 1.7 },
    { x: 0, y: 3.2, z: -0.4, r: 1.4 },
    { x: -1.1, y: 2.8, z: 0.2, r: 1.1 }
  ];
  crags.forEach(c => {
    const rockMesh = new THREE.Mesh(new THREE.DodecahedronGeometry(c.r, 0), MATS.onsenRock);
    rockMesh.position.set(c.x, c.y, c.z);
    rockeryGroup.add(rockMesh);
  });

  // Miệng thác nước & Dòng thác đổ trắng xóa
  const spout = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.4, 0.9, 8), MATS.toroStoneDark);
  spout.rotation.x = Math.PI / 2;
  spout.position.set(0, 2.7, 0.9);

  const waterfallChute = new THREE.Mesh(new THREE.BoxGeometry(1.1, 2.6, 0.12), MATS.waterfallWhite);
  waterfallChute.position.set(0, 1.4, 1.15);
  waterfallChute.rotation.x = -0.16;

  // Cây bonsai lá phong đỏ mọc trên vách đá hòn non bộ
  const miniMaple = createMapleTree(0.65);
  miniMaple.position.set(1.6, 2.8, -0.2);

  rockeryGroup.add(spout, waterfallChute, miniMaple);
  group.add(rockeryGroup);

  // 4. BỒN TẮM GỖ KHỔNG LỒ OFURO CHO THANH & NENE VÀO TẮM (BỜ TÂY: X: -7.5, Z: -2.0)
  const ofuroGroup = new THREE.Group();
  ofuroGroup.position.set(-7.5, 0, -2.0);

  // Sàn gỗ tuyết tùng nâng cao
  const oDeck = new THREE.Mesh(new THREE.BoxGeometry(6.6, 0.4, 6.6), MATS.woodDark);
  oDeck.position.y = 0.2;

  // Thành bồn tắm gỗ hình trụ rỗng mở đáy và đỉnh (openEnded = true)
  const barrelWall = new THREE.Mesh(
    new THREE.CylinderGeometry(2.4, 2.2, 1.8, 24, 1, true),
    MATS.woodCedar
  );
  barrelWall.position.y = 1.1;

  // Vành đai tròn bọc quanh miệng bồn
  const rimTorus = new THREE.Mesh(new THREE.TorusGeometry(2.4, 0.08, 8, 24), MATS.woodDark);
  rimTorus.rotation.x = Math.PI / 2;
  rimTorus.position.y = 2.0;

  const hoop1 = new THREE.Mesh(new THREE.TorusGeometry(2.35, 0.05, 6, 24), MATS.kawaraRoofDark);
  hoop1.rotation.x = Math.PI / 2;
  hoop1.position.y = 0.6;
  const hoop2 = hoop1.clone();
  hoop2.position.y = 1.5;

  // Nước ngâm khoáng nóng bên trong bồn gỗ — Lộ thiên hoàn toàn và phát sáng
  const oWater = new THREE.Mesh(new THREE.CylinderGeometry(2.3, 2.3, 0.15, 24), MATS.onsenWater);
  oWater.position.y = 1.35;
  ofuroWaterMesh = oWater;

  // Cầu thang gỗ bước lên bồn tắm
  const oStairs = new THREE.Group();
  oStairs.position.set(0, 0, 2.6);
  for (let s = 0; s < 3; s++) {
    const step = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.2, 0.45), MATS.woodWarm);
    step.position.set(0, 0.2 + s * 0.2, -s * 0.4);
    oStairs.add(step);
  }

  // Máng gỗ rót nước nóng tràn vào hồ Onsen (Overflow Chute)
  const chute = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.18, 0.45), MATS.woodWarm);
  chute.position.set(2.4, 1.3, 0.5);
  chute.rotation.z = -0.22;
  chute.rotation.y = 0.35;

  // Cọc treo khăn tắm & Rèm Onsen
  const towelRack = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.6, 0.1), MATS.woodDark);
  towelRack.position.set(-2.8, 1.0, 1.8);
  const norenOnsen = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.6, 0.04), MATS.norenBlue);
  norenOnsen.position.set(0, 1.8, 3.1);

  ofuroGroup.add(oDeck, barrelWall, rimTorus, hoop1, hoop2, oWater, oStairs, chute, towelRack, norenOnsen);
  group.add(ofuroGroup);

  // 5. BỂ NGÂM ĐÁ PHỤ RIÊNG TƯ (IWABURO - BỜ ĐÔNG: X: 7.5, Z: -2.0)
  const stoneTubGroup = new THREE.Group();
  stoneTubGroup.position.set(7.5, 0, -2.0);

  const stDeck = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.35, 5.2), MATS.woodDark);
  stDeck.position.y = 0.18;

  const stWall = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 2.0, 1.1, 18, 1, true), MATS.onsenRock);
  stWall.position.y = 0.75;
  const stRim = new THREE.Mesh(new THREE.TorusGeometry(1.8, 0.14, 8, 18), MATS.onsenRock);
  stRim.rotation.x = Math.PI / 2;
  stRim.position.y = 1.3;

  const stWater = new THREE.Mesh(new THREE.CylinderGeometry(1.7, 1.7, 0.15, 18), MATS.onsenWater);
  stWater.position.y = 0.95;
  stoneTubWaterMesh = stWater;

  const stBench = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.35, 0.5), MATS.woodWarm);
  stBench.position.set(1.5, 0.35, 1.5);

  stoneTubGroup.add(stDeck, stWall, stRim, stWater, stBench);
  group.add(stoneTubGroup);

  // 6. CẦU VÒM GỖ ĐỎ TAIKO-BASHI BẮC QUA MẶT HỒ ONSEN NƠI THANH & NENE HÔN NHAU
  const bridge = new THREE.Group();
  bridge.position.set(0, 0.4, 6.0);

  const deck = new THREE.Mesh(new THREE.BoxGeometry(12.4, 0.35, 3.6), MATS.vermilionRed);
  deck.position.y = 0.55;
  const railL = new THREE.Mesh(new THREE.BoxGeometry(12.4, 0.75, 0.18), MATS.vermilionDeep);
  railL.position.set(0, 0.95, -1.7);
  const railR = railL.clone();
  railR.position.z = 1.7;
  bridge.add(deck, railL, railR);

  // Đèn lồng giấy đỏ gắn trên thành cầu
  for (let bx of [-5.0, -1.8, 1.8, 5.0]) {
    const lPost = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.1, 8), MATS.woodDark);
    lPost.position.set(bx, 1.1, -1.7);
    const lantern = new THREE.Mesh(new THREE.SphereGeometry(0.24, 10, 10), MATS.lanternRedGlow);
    lantern.scale.y = 1.3;
    lantern.position.set(bx, 1.75, -1.7);
    bridge.add(lPost, lantern);
    townLanternMeshes.push(lantern);
  }
  group.add(bridge);

  enableShadow(group);
  registerStationHitbox('onsen_hub', group, 8.5, 11);
  scene.add(group);
}

// ============================================================================
// 2. CÁC CÔNG TRÌNH BỜ THANH (LỄ HỘI VÕ SĨ & LÁ PHONG ĐỎ MOMIJI)
// ============================================================================

// A. Võ Đường Phong Diệp (X: -26, Z: 6)
function buildThanhDojo() {
  const group = new THREE.Group();
  group.position.set(STATIONS.thanh_dojo.pos.x, 0, STATIONS.thanh_dojo.pos.z);

  // Nền đá
  const pad = new THREE.Mesh(new THREE.BoxGeometry(11.0, 0.6, 10.0), MATS.toroStoneDark);
  pad.position.y = 0.3;
  group.add(pad);

  // Thân võ đường gỗ trầm
  const hall = new THREE.Mesh(new THREE.BoxGeometry(8.4, 3.8, 7.2), MATS.woodDark);
  hall.position.set(0, 2.2, 0);
  group.add(hall);

  // Cửa chính Genkan mặt tiền (hướng về phía đường đá chính)
  const dojoDoor = createJapaneseGenkan(3.2, 2.7, MATS.norenBlue);
  dojoDoor.position.set(3.6, 0.6, 0);
  dojoDoor.rotation.y = Math.PI / 2; // Hướng mặt ra đường chính X = -18
  group.add(dojoDoor);

  // Các cửa sổ Shoji nan gỗ thanh lịch ở 2 mặt bên
  const winF = createShojiLattice(2.4, 1.6, 3, 2);
  winF.position.set(0, 2.4, 3.62);
  const winB = createShojiLattice(2.4, 1.6, 3, 2);
  winB.position.set(0, 2.4, -3.62);
  group.add(winF, winB);

  // Cột sơn son trước sảnh
  for (let z of [-2.8, 2.8]) {
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.2, 4.0, 10), MATS.vermilionRed);
    col.position.set(3.8, 2.2, z);
    group.add(col);
  }

  // Mái ngói cong 2 tầng sơn đỏ vermilion
  const roof1 = createCurvedRoof(10.2, 9.0, 1.8, MATS.kawaraRoofRed);
  roof1.position.set(0, 4.1, 0);
  const upper = new THREE.Mesh(new THREE.BoxGeometry(5.6, 2.0, 5.0), MATS.woodDark);
  upper.position.set(0, 5.3, 0);
  const roof2 = createCurvedRoof(7.4, 6.6, 1.5, MATS.kawaraRoofRed);
  roof2.position.set(0, 6.5, 0);
  group.add(roof1, upper, roof2);

  // Quạt võ sĩ quay trên đỉnh
  const fanGroup = new THREE.Group();
  fanGroup.position.set(0, 8.8, 0);
  const fan = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.1, 16, 1, false, 0, Math.PI), MATS.vermilionRed);
  fan.rotation.z = Math.PI / 2;
  fanGroup.add(fan);
  group.add(fanGroup);
  animatedObjects.push({ mesh: fanGroup, type: 'spinY', speed: 1.8, baseY: 8.8 });

  enableShadow(group);
  registerStationHitbox('thanh_dojo', group, 7.8, 11);
  scene.add(group);
}

// B. Lầu Vọng Cảnh Lễ Hội (X: -28, Z: -20)
function buildThanhTower() {
  const group = new THREE.Group();
  group.position.set(STATIONS.thanh_tower.pos.x, 0, STATIONS.thanh_tower.pos.z);

  const pad = new THREE.Mesh(new THREE.BoxGeometry(10.5, 0.6, 10.5), MATS.toroStoneDark);
  pad.position.y = 0.3;
  group.add(pad);

  const tiers = [
    { w: 7.2, h: 3.2, y: 0.6, rw: 9.2, rh: 1.6 },
    { w: 5.4, h: 2.8, y: 4.4, rw: 7.2, rh: 1.5 },
    { w: 3.8, h: 2.6, y: 7.8, rw: 5.4, rh: 1.5 }
  ];

  tiers.forEach((t, idx) => {
    const body = new THREE.Mesh(new THREE.BoxGeometry(t.w, t.h, t.w), MATS.woodDark);
    body.position.y = t.y + t.h / 2;
    group.add(body);

    if (idx === 0) {
      // Cửa chính tầng trệt
      const door = createJapaneseGenkan(2.2, 2.4, MATS.vermilionDeep);
      door.position.set(t.w / 2 + 0.02, t.y, 0);
      door.rotation.y = Math.PI / 2;
      group.add(door);
    } else {
      // Cửa sổ Shoji gắn chìm
      const win = createShojiLattice(t.w * 0.45, t.h * 0.5, 2, 2);
      win.position.set(t.w / 2 + 0.02, t.y + t.h / 2, 0);
      win.rotation.y = Math.PI / 2;
      group.add(win);
    }

    const roof = createCurvedRoof(t.rw, t.rw, t.rh, MATS.kawaraRoofRed);
    roof.position.y = t.y + t.h;
    group.add(roof);

    // Đèn lồng treo 4 góc mái
    for (let ox of [-t.rw * 0.46, t.rw * 0.46]) {
      for (let oz of [-t.rw * 0.46, t.rw * 0.46]) {
        const lan = new THREE.Mesh(new THREE.SphereGeometry(0.25, 8, 8), MATS.lanternRedGlow);
        lan.scale.y = 1.3;
        lan.position.set(ox, t.y + t.h - 0.2, oz);
        group.add(lan);
        townLanternMeshes.push(lan);
      }
    }
  });

  // Chóp tháp mạ vàng (Sorin)
  const apex = new THREE.Mesh(new THREE.OctahedronGeometry(1.0, 0), MATS.goldTrim);
  apex.position.y = 14.2;
  group.add(apex);
  animatedObjects.push({ mesh: apex, type: 'spinY', speed: 2.0, baseY: 14.2 });

  enableShadow(group);
  registerStationHitbox('thanh_tower', group, 7.5, 15);
  scene.add(group);
}

// C. Tháp Chuông Kỷ Luật & Tiệm Rèn (Thanh Extras)
function buildThanhExtras() {
  // 1. Tháp Chuông Kỷ Luật (X: -14, Z: -20)
  const bellGroup = new THREE.Group();
  bellGroup.position.set(STATIONS.thanh_bell.pos.x, 0, STATIONS.thanh_bell.pos.z);
  const bPad = new THREE.Mesh(new THREE.BoxGeometry(8.0, 0.5, 8.0), MATS.toroStoneDark);
  bPad.position.y = 0.25;

  for (let px of [-2.4, 2.4]) {
    for (let pz of [-2.4, 2.4]) {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 4.8, 10), MATS.woodDark);
      post.position.set(px, 2.6, pz);
      bellGroup.add(post);
    }
  }

  const bellRoof = createCurvedRoof(7.2, 7.2, 1.8, MATS.kawaraRoofDark);
  bellRoof.position.y = 4.8;
  const bell = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 1.05, 2.0, 16), MATS.onsenRock);
  bell.position.y = 3.3;
  bellGroup.add(bPad, bellRoof, bell);
  enableShadow(bellGroup);
  registerStationHitbox('thanh_bell', bellGroup, 6.0, 11);
  scene.add(bellGroup);

  // 2. Tiệm Rèn Đao & Ngân Khố (X: -26, Z: 24)
  const forgeGroup = new THREE.Group();
  forgeGroup.position.set(STATIONS.thanh_forge.pos.x, 0, STATIONS.thanh_forge.pos.z);
  const fPad = new THREE.Mesh(new THREE.BoxGeometry(9.6, 0.5, 8.6), MATS.toroStoneDark);
  fPad.position.y = 0.25;

  const fHouse = new THREE.Mesh(new THREE.BoxGeometry(7.2, 3.4, 6.4), MATS.woodWarm);
  fHouse.position.set(0, 2.0, 0);

  const fDoor = createJapaneseGenkan(2.4, 2.4, MATS.norenBlue);
  fDoor.position.set(3.62, 0.5, 0);
  fDoor.rotation.y = Math.PI / 2;

  const fWin = createShojiLattice(1.8, 1.4, 2, 2);
  fWin.position.set(0, 2.2, 3.22);

  const fRoof = createCurvedRoof(9.0, 7.8, 1.6, MATS.kawaraRoofRed);
  fRoof.position.y = 3.8;

  // Lò rèn & đe rèn
  const chimney = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.45, 3.2, 8), MATS.onsenRock);
  chimney.position.set(-2.4, 4.6, -1.8);
  const anvil = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.5, 0.9), MATS.kawaraRoofDark);
  anvil.position.set(2.8, 0.5, 2.0);

  forgeGroup.add(fPad, fHouse, fDoor, fWin, fRoof, chimney, anvil);
  enableShadow(forgeGroup);
  registerStationHitbox('thanh_forge', forgeGroup, 7.0, 11);
  scene.add(forgeGroup);
}

// D. Cảnh quan phụ bờ Thanh: Cổng Senbon Torii & Chợ đêm Yatai
function buildThanhSubStructures() {
  const subGroup = new THREE.Group();

  // 1. Dãy cổng Torii liên hoàn (Senbon Torii Path) dẫn vào lầu chuông
  for (let tz = -18; tz <= -8; tz += 2.8) {
    const miniTorii = createToriiGate(0.72);
    miniTorii.position.set(-14.0, 0.1, tz);
    subGroup.add(miniTorii);
  }

  // 2. Chợ đêm Yatai (3 gian hàng lễ hội thẳng hàng dọc phố)
  const yataiConfigs = [
    { z: 14, name: 'Takoyaki', color: MATS.vermilionRed },
    { z: 18, name: 'Yakitori', color: MATS.mapleOrange },
    { z: 22, name: 'Dango',    color: MATS.mapleGold }
  ];
  yataiConfigs.forEach(yc => {
    const yatai = new THREE.Group();
    yatai.position.set(-13.5, 0.1, yc.z);
    yatai.rotation.y = -Math.PI / 2; // Hướng mặt ra đường chính

    const cart = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.1, 1.8), MATS.woodWarm);
    cart.position.y = 0.55;
    const counter = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.12, 2.0), MATS.shikkuiWhite);
    counter.position.y = 1.15;
    const canopy = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.18, 2.2), yc.color);
    canopy.position.y = 2.4;

    for (let cx of [-1.5, 1.5]) {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.3, 6), MATS.woodDark);
      pole.position.set(cx, 1.75, 0.8);
      yatai.add(pole);
    }
    const lantern = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 8), MATS.lanternRedGlow);
    lantern.scale.y = 1.25;
    lantern.position.set(0, 2.1, 1.0);
    yatai.add(cart, counter, canopy, lantern);
    townLanternMeshes.push(lantern);
    subGroup.add(yatai);
  });

  enableShadow(subGroup);
  scene.add(subGroup);
}

// ============================================================================
// 3. CÁC CÔNG TRÌNH BỜ NENE (PHỐ CỔ MACHIYA KYOTO & HOA ANH ĐÀO SAKURA)
// ============================================================================

// A. Trà Quán Sakura (X: 26, Z: 6)
function buildNeneTeaHouse() {
  const group = new THREE.Group();
  group.position.set(STATIONS.nene_tea.pos.x, 0, STATIONS.nene_tea.pos.z);

  const pad = new THREE.Mesh(new THREE.BoxGeometry(11.0, 0.6, 10.0), MATS.toroStoneDark);
  pad.position.y = 0.3;
  group.add(pad);

  // Tầng trệt với sàn gỗ Engawa
  const groundFloor = new THREE.Mesh(new THREE.BoxGeometry(8.2, 3.4, 6.8), MATS.woodWarm);
  groundFloor.position.set(0, 2.0, 0);
  const engawa = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.25, 7.2), MATS.woodCedar);
  engawa.position.set(-4.5, 0.45, 0);
  group.add(groundFloor, engawa);

  // Cửa chính Genkan hướng ra đường chính X = 18
  const teaDoor = createJapaneseGenkan(3.0, 2.5, MATS.norenBlue);
  teaDoor.position.set(-4.12, 0.6, 0);
  teaDoor.rotation.y = -Math.PI / 2;
  group.add(teaDoor);

  // Cửa sổ Shoji tầng 1
  const teaWinF = createShojiLattice(2.4, 1.6, 3, 2);
  teaWinF.position.set(0, 2.2, 3.42);
  const teaWinB = createShojiLattice(2.4, 1.6, 3, 2);
  teaWinB.position.set(0, 2.2, -3.42);
  group.add(teaWinF, teaWinB);

  // Mái tầng 1
  const roof1 = createCurvedRoof(10.0, 8.4, 1.6, MATS.kawaraRoofDark);
  roof1.position.set(0, 3.8, 0);
  group.add(roof1);

  // Tầng 2 tường trắng Shikkui
  const upperFloor = new THREE.Mesh(new THREE.BoxGeometry(6.4, 2.4, 5.2), MATS.shikkuiWhite);
  upperFloor.position.set(0, 5.2, 0);
  const upperWin = createShojiLattice(2.8, 1.4, 4, 2);
  upperWin.position.set(-3.22, 5.2, 0);
  upperWin.rotation.y = -Math.PI / 2;
  const roof2 = createCurvedRoof(8.0, 6.8, 1.5, MATS.kawaraRoofDark);
  roof2.position.set(0, 6.5, 0);
  group.add(upperFloor, upperWin, roof2);

  // Chén trà Matcha bốc khói xoay tròn trên nóc
  const teaCupGroup = new THREE.Group();
  teaCupGroup.position.set(0, 8.8, 0);
  const cup = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 0.65, 1.1, 16), MATS.white);
  const matcha = new THREE.Mesh(new THREE.CylinderGeometry(0.88, 0.88, 0.15, 16), MATS.sakuraPink);
  matcha.position.y = 0.48;
  teaCupGroup.add(cup, matcha);
  group.add(teaCupGroup);
  animatedObjects.push({ mesh: teaCupGroup, type: 'spinY', speed: 1.5, baseY: 8.8 });

  enableShadow(group);
  registerStationHitbox('nene_tea', group, 7.8, 11);
  scene.add(group);
}

// B. QUÁN MÌ RAMEN NENE (X: 16, Z: 20) — CHUẨN ĐÚNG THEO ẢNH THỨ 3
function buildRamenRestaurant() {
  const group = new THREE.Group();
  group.position.set(STATIONS.nene_ramen.pos.x, 0, STATIONS.nene_ramen.pos.z);

  // 1. Nền gạch đá đen viền trắng vuông vức (Ảnh 3)
  const base = new THREE.Mesh(new THREE.BoxGeometry(9.0, 0.4, 8.4), MATS.kawaraRoofDark);
  base.position.y = 0.2;
  const baseRim = new THREE.Mesh(new THREE.BoxGeometry(9.4, 0.15, 8.8), MATS.shikkuiWhite);
  baseRim.position.y = 0.08;
  group.add(base, baseRim);

  // 2. Thân nhà màu hồng phấn/cam đào ấm cúng & chân tường đá
  const wallBody = new THREE.Mesh(new THREE.BoxGeometry(6.4, 3.2, 5.6), MATS.ramenWallPeach);
  wallBody.position.set(0, 1.8, -0.4);
  const wainscot = new THREE.Mesh(new THREE.BoxGeometry(6.5, 0.7, 5.7), MATS.onsenRock);
  wainscot.position.set(0, 0.55, -0.4);
  group.add(wallBody, wainscot);

  // Cột gỗ chịu lực
  for (let cx of [-3.1, 3.1]) {
    for (let cz of [-3.1, 2.3]) {
      const col = new THREE.Mesh(new THREE.BoxGeometry(0.38, 3.4, 0.38), MATS.woodWarm);
      col.position.set(cx, 1.8, cz);
      group.add(col);
    }
  }

  // 3. Mái ngói dốc màu xanh rêu (Kawara Green) chuẩn Ảnh 3
  const roof = new THREE.Group();
  roof.position.set(0, 3.5, -0.3);
  const roofSlab = new THREE.Mesh(new THREE.BoxGeometry(7.6, 0.3, 6.6), MATS.ramenRoofGreen);
  roofSlab.rotation.x = 0.12;
  roof.add(roofSlab);

  for (let rx = -3.2; rx <= 3.2; rx += 0.52) {
    const tileRidge = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 6.4, 6), MATS.ramenRoofGreen);
    tileRidge.rotation.x = Math.PI / 2 + 0.12;
    tileRidge.position.set(rx, 0.18, 0);
    roof.add(tileRidge);
  }
  group.add(roof);

  // 4. TÔ MÌ RAMEN KHỔNG LỒ TRÊN NÓC MÁI (ĐIỂM NHẤN CỦA ẢNH 3!)
  const giantBowlGroup = new THREE.Group();
  giantBowlGroup.position.set(0, 4.4, -0.2);

  const bowl = new THREE.Mesh(new THREE.CylinderGeometry(2.1, 1.3, 1.2, 20), MATS.ramenBowlWhite);
  bowl.position.y = 0.6;
  const bowlRim = new THREE.Mesh(new THREE.TorusGeometry(2.1, 0.1, 10, 24), MATS.shikkuiWhite);
  bowlRim.rotation.x = Math.PI / 2;
  bowlRim.position.y = 1.2;

  const soup = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 2.0, 0.1, 20), MATS.ramenSoup);
  soup.position.y = 1.05;
  giantBowlGroup.add(bowl, bowlRim, soup);

  // Lọn mì vàng óng
  for (let n = 0; n < 6; n++) {
    const noodle = new THREE.Mesh(new THREE.TorusGeometry(1.1 - n * 0.14, 0.1, 8, 16, Math.PI * 1.2), MATS.ramenNoodle);
    noodle.rotation.x = Math.PI / 2;
    noodle.rotation.z = n * 0.8;
    noodle.position.set((Math.random() - 0.5) * 0.3, 1.15, (Math.random() - 0.5) * 0.3);
    giantBowlGroup.add(noodle);
  }

  // Nửa quả trứng luộc lòng đào (Ajitsuke Tamago)
  const eggGroup = new THREE.Group();
  eggGroup.position.set(-0.7, 1.22, 0.35);
  const eggWhite = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 12), MATS.ramenEggWhite);
  eggWhite.scale.set(0.9, 0.45, 1.1);
  const eggYolk = new THREE.Mesh(new THREE.SphereGeometry(0.28, 10, 10), MATS.ramenEggYolk);
  eggYolk.scale.set(1.0, 0.5, 1.0);
  eggYolk.position.y = 0.1;
  eggGroup.add(eggWhite, eggYolk);
  giantBowlGroup.add(eggGroup);

  // 2 miếng rong biển Nori xanh thẫm
  for (let noriX of [0.4, 0.85]) {
    const nori = new THREE.Mesh(new THREE.BoxGeometry(0.06, 1.1, 0.75), MATS.ramenNori);
    nori.position.set(noriX, 1.5, -0.5);
    nori.rotation.x = -0.2;
    giantBowlGroup.add(nori);
  }

  // Đôi đũa lớn vươn lên
  const chopstick1 = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.04, 3.4, 8), MATS.ramenChopsticks);
  chopstick1.position.set(-0.25, 2.0, -0.2);
  chopstick1.rotation.set(-0.35, 0.2, 0.3);
  const chopstick2 = chopstick1.clone();
  chopstick2.position.set(-0.05, 2.05, -0.25);
  giantBowlGroup.add(chopstick1, chopstick2);

  group.add(giantBowlGroup);

  // 5. Rèm Noren đỏ trắng dưới mái hiên
  const norenGroup = new THREE.Group();
  norenGroup.position.set(0, 3.0, 2.3);
  for (let nx = -2.4; nx <= 2.4; nx += 0.8) {
    const norenCloth = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.6, 0.03), MATS.white);
    norenCloth.position.x = nx;
    const norenPattern = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.3, 0.04), MATS.ramenNorenRed);
    norenPattern.position.set(nx, -0.05, 0.01);
    norenGroup.add(norenCloth, norenPattern);
  }
  group.add(norenGroup);

  // 6. Quầy bar gỗ & 3 ghế đẩu tròn trước quán
  const counter = new THREE.Mesh(new THREE.BoxGeometry(5.0, 0.16, 0.75), MATS.woodWarm);
  counter.position.set(0, 1.05, 2.2);
  const counterBase = new THREE.Mesh(new THREE.BoxGeometry(4.8, 0.85, 0.35), MATS.ramenWallPeach);
  counterBase.position.set(0, 0.5, 1.95);
  group.add(counter, counterBase);

  // 3 ghế đẩu tròn
  for (let sx of [-1.5, 0, 1.5]) {
    const stool = new THREE.Group();
    stool.position.set(sx, 0, 3.1);
    const seat = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.1, 14), MATS.woodWarm);
    seat.position.y = 0.6;
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.6, 8), MATS.woodDark);
    leg.position.y = 0.3;
    stool.add(seat, leg);
    group.add(stool);
  }

  // 2 bát mì Ramen nhỏ trên quầy bar
  for (let bx of [-0.7, 0.7]) {
    const miniBowl = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.12, 0.14, 10), MATS.ramenBowlWhite);
    miniBowl.position.set(bx, 1.18, 2.2);
    group.add(miniBowl);
  }

  // 7. Cột biển hiệu đứng & đèn lồng đỏ
  const signPost = new THREE.Group();
  signPost.position.set(-3.4, 0, 2.4);
  const pole = new THREE.Mesh(new THREE.BoxGeometry(0.16, 3.0, 0.16), MATS.woodDark);
  pole.position.y = 1.5;
  const banner = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.5, 0.05), MATS.ramenNorenRed);
  banner.position.set(0.4, 1.9, 0);
  const signLantern = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 10), MATS.lanternRedGlow);
  signLantern.scale.y = 1.3;
  signLantern.position.set(-0.2, 2.4, 0);
  signPost.add(pole, banner, signLantern);
  group.add(signPost);
  townLanternMeshes.push(signLantern);

  // Đèn vàng ấm bên trong quán mì
  const ramenLight = new THREE.PointLight(0xffaa44, 1.2, 15);
  ramenLight.position.set(0, 2.0, 0.8);
  ramenLight.userData.baseIntensity = 1.2;
  group.add(ramenLight);
  townPointLights.push(ramenLight);

  enableShadow(group);
  registerStationHitbox('nene_ramen', group, 7.5, 12);
  scene.add(group);
}

// C. Thương Điếm Sáng Tạo, Lầu Nguyệt Quang & Tiệm Bánh Wagashi (Nene Extras)
function buildNeneExtras() {
  // 1. Thương Điếm Nhuộm Vải & Sáng Tạo (X: 28, Z: -20)
  const studioGroup = new THREE.Group();
  studioGroup.position.set(STATIONS.nene_studio.pos.x, 0, STATIONS.nene_studio.pos.z);
  const sPad = new THREE.Mesh(new THREE.BoxGeometry(10.0, 0.5, 9.5), MATS.toroStoneDark);
  sPad.position.y = 0.25;

  const sBody1 = new THREE.Mesh(new THREE.BoxGeometry(7.4, 3.4, 6.6), MATS.woodWarm);
  sBody1.position.set(0, 2.0, 0);

  const sDoor = createJapaneseGenkan(2.4, 2.4, MATS.ramenNorenRed);
  sDoor.position.set(-3.72, 0.5, 0);
  sDoor.rotation.y = -Math.PI / 2;

  const sWin = createShojiLattice(1.8, 1.4, 2, 2);
  sWin.position.set(0, 2.2, 3.32);

  const sRoof1 = createCurvedRoof(9.0, 8.0, 1.6, MATS.kawaraRoofDark);
  sRoof1.position.set(0, 3.8, 0);

  const ribbon = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.2, 12, 32), MATS.sakuraDeep);
  ribbon.rotation.x = Math.PI / 3;
  ribbon.position.set(0, 7.2, 0);
  studioGroup.add(sPad, sBody1, sDoor, sWin, sRoof1, ribbon);
  animatedObjects.push({ mesh: ribbon, type: 'spinY', speed: 2.0, baseY: 7.2 });
  enableShadow(studioGroup);
  registerStationHitbox('nene_studio', studioGroup, 7.5, 11);
  scene.add(studioGroup);

  // 2. Lầu Nguyệt Quang Điểm Giờ (X: 14, Z: -20)
  const clockGroup = new THREE.Group();
  clockGroup.position.set(STATIONS.nene_clock.pos.x, 0, STATIONS.nene_clock.pos.z);
  const cPad = new THREE.Mesh(new THREE.BoxGeometry(7.5, 0.5, 7.5), MATS.toroStoneDark);
  cPad.position.y = 0.25;
  const cTower = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.8, 5.8, 8), MATS.woodWarm);
  cTower.position.y = 3.2;
  const cRoof = createCurvedRoof(6.6, 6.6, 1.7, MATS.kawaraRoofDark);
  cRoof.position.y = 6.2;
  const moon = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.18, 8, 24, Math.PI * 1.3), MATS.goldTrim);
  moon.position.set(0, 8.6, 0);
  clockGroup.add(cPad, cTower, cRoof, moon);
  animatedObjects.push({ mesh: moon, type: 'spinY', speed: 1.4, baseY: 8.6 });
  enableShadow(clockGroup);
  registerStationHitbox('nene_clock', clockGroup, 6.0, 11);
  scene.add(clockGroup);

  // 3. Tiệm Bánh Wagashi & Ngân Khố (X: 28, Z: 24)
  const wagashiGroup = new THREE.Group();
  wagashiGroup.position.set(STATIONS.nene_wagashi.pos.x, 0, STATIONS.nene_wagashi.pos.z);
  const wPad = new THREE.Mesh(new THREE.BoxGeometry(9.6, 0.5, 8.6), MATS.toroStoneDark);
  wPad.position.y = 0.25;

  const wHouse = new THREE.Mesh(new THREE.BoxGeometry(7.0, 3.4, 6.2), MATS.shikkuiWhite);
  wHouse.position.set(0, 2.0, 0);

  const wDoor = createJapaneseGenkan(2.4, 2.4, MATS.norenBlue);
  wDoor.position.set(-3.52, 0.5, 0);
  wDoor.rotation.y = -Math.PI / 2;

  const wWin = createShojiLattice(1.8, 1.4, 2, 2);
  wWin.position.set(0, 2.2, 3.12);

  const wRoof = createCurvedRoof(8.6, 7.6, 1.5, MATS.kawaraRoofDark);
  wRoof.position.y = 3.8;
  const luckyCat = new THREE.Mesh(new THREE.SphereGeometry(0.85, 16, 16), MATS.white);
  luckyCat.position.set(0, 5.8, 0);
  wagashiGroup.add(wPad, wHouse, wDoor, wWin, wRoof, luckyCat);
  animatedObjects.push({ mesh: luckyCat, type: 'spinY', speed: 1.2, baseY: 5.8 });
  enableShadow(wagashiGroup);
  registerStationHitbox('nene_wagashi', wagashiGroup, 7.0, 11);
  scene.add(wagashiGroup);
}

// D. Cảnh quan phụ bờ Nene: Bánh xe nước & Vườn Zen
let waterWheelMesh;

function buildNeneSubStructures() {
  const subGroup = new THREE.Group();

  // 1. Bánh xe nước Suisha bên mép suối Onsen (X: 9.5, Z: -8.0)
  const wheelGroup = new THREE.Group();
  wheelGroup.position.set(9.5, 1.4, -8.0);
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.5, 12), MATS.woodDark);
  hub.rotation.x = Math.PI / 2;
  wheelGroup.add(hub);

  const rim = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.08, 8, 24), MATS.woodWarm);
  wheelGroup.add(rim);

  for (let b = 0; b < 8; b++) {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.3, 1.4, 0.06), MATS.woodWarm);
    blade.rotation.z = (b / 8) * Math.PI * 2;
    blade.position.set(Math.cos(blade.rotation.z) * 0.75, Math.sin(blade.rotation.z) * 0.75, 0);
    wheelGroup.add(blade);
  }
  waterWheelMesh = wheelGroup;
  subGroup.add(wheelGroup);

  // 2. Chòi ngắm hoa anh đào Hanami (X: 36, Z: 0)
  const gazebo = new THREE.Group();
  gazebo.position.set(36, 0.1, 0);
  const gFloor = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.35, 5.2), MATS.woodWarm);
  gFloor.position.y = 0.18;
  const gRoof = createCurvedRoof(6.4, 6.4, 1.5, MATS.kawaraRoofDark);
  gRoof.position.y = 3.6;
  for (let gx of [-2.0, 2.0]) {
    for (let gz of [-2.0, 2.0]) {
      const gPost = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 3.4, 8), MATS.woodDark);
      gPost.position.set(gx, 1.8, gz);
      gazebo.add(gPost);
    }
  }
  gazebo.add(gFloor, gRoof);
  subGroup.add(gazebo);

  enableShadow(subGroup);
  scene.add(subGroup);
}

// ============================================================================
// 4. RỪNG CÂY BONSAI NHẬT BẢN (THU GỌN 50% — THOÁNG ĐÃNG & KHÔNG CHE CHẮN)
// ============================================================================
function createMapleTree(scale = 1) {
  const tg = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.22 * scale, 0.38 * scale, 2.6 * scale, 10), MATS.woodDark);
  trunk.position.y = 1.3 * scale;
  tg.add(trunk);

  const b1 = new THREE.Mesh(new THREE.CylinderGeometry(0.12 * scale, 0.2 * scale, 1.5 * scale, 6), MATS.woodDark);
  b1.position.set(-0.5 * scale, 2.0 * scale, 0.25 * scale);
  b1.rotation.z = 0.55;
  const b2 = new THREE.Mesh(new THREE.CylinderGeometry(0.12 * scale, 0.18 * scale, 1.5 * scale, 6), MATS.woodDark);
  b2.position.set(0.5 * scale, 2.1 * scale, -0.25 * scale);
  b2.rotation.z = -0.55;
  tg.add(b1, b2);

  // Tán lá phong đỏ gọn gàng
  const puffs = [
    { x: 0, y: 3.3, z: 0, r: 1.6, mat: MATS.mapleRed },
    { x: -1.0, y: 2.8, z: 0.4, r: 1.35, mat: MATS.mapleOrange },
    { x: 1.1, y: 2.9, z: -0.35, r: 1.4, mat: MATS.mapleGold },
    { x: 0.25, y: 2.5, z: 0.9, r: 1.2, mat: MATS.vermilionDeep },
    { x: -0.4, y: 2.8, z: -0.9, r: 1.25, mat: MATS.mapleRed },
    { x: 0.8, y: 3.5, z: 0.6, r: 1.1, mat: MATS.mapleOrange }
  ];

  puffs.forEach(p => {
    const puff = new THREE.Mesh(new THREE.DodecahedronGeometry(p.r * scale, 1), p.mat);
    puff.scale.set(1.1, 0.9, 1.1);
    puff.position.set(p.x * scale, p.y * scale, p.z * scale);
    tg.add(puff);
  });
  return tg;
}

function createSakuraTree(scale = 1) {
  const tg = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.22 * scale, 0.36 * scale, 2.6 * scale, 10), MATS.woodWarm);
  trunk.position.y = 1.3 * scale;
  tg.add(trunk);

  const b1 = new THREE.Mesh(new THREE.CylinderGeometry(0.12 * scale, 0.18 * scale, 1.5 * scale, 6), MATS.woodWarm);
  b1.position.set(-0.5 * scale, 2.0 * scale, 0.25 * scale);
  b1.rotation.z = 0.55;
  const b2 = new THREE.Mesh(new THREE.CylinderGeometry(0.12 * scale, 0.18 * scale, 1.5 * scale, 6), MATS.woodWarm);
  b2.position.set(0.5 * scale, 2.1 * scale, -0.25 * scale);
  b2.rotation.z = -0.55;
  tg.add(b1, b2);

  // Tán hoa anh đào bồng bềnh gọn gàng
  const puffs = [
    { x: 0, y: 3.3, z: 0, r: 1.6, mat: MATS.sakuraCanopy },
    { x: -1.0, y: 2.8, z: 0.4, r: 1.35, mat: MATS.sakuraPink },
    { x: 1.1, y: 2.9, z: -0.35, r: 1.4, mat: MATS.sakuraVibrant },
    { x: 0.25, y: 2.5, z: 0.9, r: 1.2, mat: MATS.sakuraLight },
    { x: -0.4, y: 2.8, z: -0.9, r: 1.25, mat: MATS.sakuraDeep },
    { x: 0.8, y: 3.5, z: 0.6, r: 1.1, mat: MATS.sakuraPink }
  ];

  puffs.forEach(p => {
    const puff = new THREE.Mesh(new THREE.DodecahedronGeometry(p.r * scale, 1), p.mat);
    puff.scale.set(1.1, 0.9, 1.1);
    puff.position.set(p.x * scale, p.y * scale, p.z * scale);
    tg.add(puff);
  });
  return tg;
}

function buildFloraScenery() {
  // Cây phong đỏ trồng thành hàng dọc theo các lối đi bờ Thanh
  const maplePositions = [
    [-10, 14, 0.9], [-10, 24, 0.95], [-24, 14, 0.9], [-34, 14, 1.0],
    [-34, -4, 0.95], [-24, -10, 0.9], [-10, -4, 0.85], [-10, -26, 0.95],
    [-20, -30, 1.0], [-34, -28, 1.05]
  ];
  maplePositions.forEach(([mx, mz, ms]) => {
    const tree = createMapleTree(ms);
    tree.position.set(mx, 0, mz);
    enableShadow(tree);
    scene.add(tree);
  });

  // Cây hoa anh đào trồng thành hàng dọc theo các lối đi bờ Nene
  const sakuraPositions = [
    [10, 14, 0.9], [10, 26, 0.95], [22, 14, 0.9], [34, 14, 1.0],
    [34, -4, 0.95], [24, -10, 0.9], [10, -4, 0.85], [10, -26, 0.95],
    [20, -30, 1.0], [34, -28, 1.05]
  ];
  sakuraPositions.forEach(([sx, sz, ss]) => {
    const tree = createSakuraTree(ss);
    tree.position.set(sx, 0, sz);
    enableShadow(tree);
    scene.add(tree);
  });
}

// ============================================================================
// 5. HỆ THỐNG ĐÈN ĐÁ & ĐÈN LỒNG THỊ TRẤN TỰ ĐỘNG BẬT KHI TRỜI TỐI
// ============================================================================
function createIshidoro(x, z) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);

  const kiso = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.18, 0.7), MATS.toroStone);
  kiso.position.y = 0.09;
  const sao = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.2, 0.85, 8), MATS.toroStone);
  sao.position.y = 0.55;
  const chudai = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.16, 0.65), MATS.toroStone);
  chudai.position.y = 1.05;

  const hibukuro = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.46, 0.46), MATS.shojiGlow);
  hibukuro.position.y = 1.35;
  const kasa = new THREE.Mesh(new THREE.ConeGeometry(0.55, 0.35, 4), MATS.toroStone);
  kasa.rotation.y = Math.PI / 4;
  kasa.position.y = 1.75;

  const light = new THREE.PointLight(0xffb84d, 0.8, 7);
  light.position.y = 1.35;
  light.userData.baseIntensity = 0.8;

  g.add(kiso, sao, chudai, hibukuro, kasa, light);
  townLanternMeshes.push(hibukuro);
  townPointLights.push(light);
  return g;
}

function buildTownLamps() {
  // Đèn đá dọc theo 2 bên đường chính
  const lampPositions = [
    [-15.5, 0], [-15.5, 12], [-15.5, 24], [-15.5, -12], [-15.5, -24],
    [-20.5, 0], [-20.5, 12], [-20.5, 24], [-20.5, -12], [-20.5, -24],
    [15.5, 0],  [15.5, 12],  [15.5, -12], [15.5, -24],
    [20.5, 0],  [20.5, 12],  [20.5, 24],  [20.5, -12], [20.5, -24]
  ];
  lampPositions.forEach(([lx, lz]) => {
    const lamp = createIshidoro(lx, lz);
    enableShadow(lamp);
    scene.add(lamp);
  });
}

function updateTownLighting(mode, notify = false) {
  themeMode = mode;
  const btnTheme = document.getElementById('btn-theme');

  if (mode === 0) { // Ngày
    scene.background.setHex(DAY_BG);
    scene.fog.color.setHex(DAY_BG);
    dirLight.intensity = 1.4;
    dirLight.color.setHex(0xffffff);
    ambientLight.intensity = 1.1;
    hemiLight.intensity = 1.0;
    onsenPoolLight.intensity = 0.4;
    townLanternMeshes.forEach(m => { m.material.emissiveIntensity = 0.15; });
    townPointLights.forEach(pl => { pl.intensity = 0; });
    if (btnTheme) btnTheme.textContent = '☀️ Ban Ngày';
    if (notify) showToast('☀️ Chuyển sang Ban Ngày — Ánh nắng ấm chan hòa thị trấn!');
  } else if (mode === 1) { // Hoàng hôn
    scene.background.setHex(DUSK_BG);
    scene.fog.color.setHex(DUSK_BG);
    dirLight.intensity = 0.9;
    dirLight.color.setHex(0xff7744);
    ambientLight.intensity = 0.8;
    hemiLight.intensity = 0.75;
    onsenPoolLight.intensity = 0.9;
    townLanternMeshes.forEach(m => { m.material.emissiveIntensity = 0.85; });
    townPointLights.forEach(pl => { pl.intensity = (pl.userData.baseIntensity || 0.8) * 0.65; });
    if (btnTheme) btnTheme.textContent = '🌇 Hoàng Hôn';
    if (notify) showToast('🌇 Chuyển sang Hoàng Hôn — Ánh ráng chiều lãng mạn phủ khắp 2 bờ!');
  } else { // Đêm
    scene.background.setHex(NIGHT_BG);
    scene.fog.color.setHex(NIGHT_BG);
    dirLight.intensity = 0.45;
    dirLight.color.setHex(0x88aacc);
    ambientLight.intensity = 0.65;
    hemiLight.intensity = 0.55;
    onsenPoolLight.intensity = 1.4;
    townLanternMeshes.forEach(m => { m.material.emissiveIntensity = 1.25; });
    townPointLights.forEach(pl => { pl.intensity = pl.userData.baseIntensity || 0.8; });
    if (btnTheme) btnTheme.textContent = '🌙 Đêm (Đèn Bật)';
    if (notify) showToast('🏮 Trời tối rồi — Toàn bộ đèn lồng & đèn đá thị trấn đã tự động thắp sáng rực rỡ!');
  }
}

// ============================================================================
// 6. NHÂN VẬT CHIBI THANH & NENE — DẠO BƯỚC ĐƯỜNG ĐÁ, TẮM ONSEN & HÔN NHAU
// ============================================================================
let chibiThanhMesh, chibiNeneMesh;
let thanhTowelMesh, neneTowelMesh;
let isBathing = false;
let isKissing = false;
let kissProgress = 0;
const characters = [];

function buildChibiCouple() {
  // 1. Chibi Thanh (Haori đỏ sẫm bờ Phong Diệp)
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

  // Khăn tắm Tenugui đội đầu khi tắm Onsen
  const tTowel = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.16, 0.38), MATS.shikkuiWhite);
  tTowel.position.set(0, 2.7, 0);
  tTowel.visible = false;
  thanhTowelMesh = tTowel;

  thanhGroup.add(tKimono, tHaori, tHead, tHair, tBun, tTowel);
  thanhGroup.position.set(-0.6, 0.95, 6.0);
  enableShadow(thanhGroup);
  scene.add(thanhGroup);
  chibiThanhMesh = thanhGroup;

  const tLabel = document.createElement('div');
  tLabel.className = 'worker-label label-thanh';
  tLabel.dataset.side = 'thanh';
  tLabel.textContent = '🍁 Thanh';
  labelsContainer.appendChild(tLabel);

  // Lộ trình đi dạo chuẩn theo trục đường đá chính
  const thanhWaypoints = [
    { x: -0.6, y: 0.95, z: 6.0, wait: 2.5 },  // Trên Cầu Onsen
    { x: -6.0, y: 0.15, z: 6.0 },              // Chân cầu bờ Thanh
    { x: -18.0, y: 0.15, z: 6.0 },             // Ngã tư đường chính
    { x: -24.0, y: 0.15, z: 6.0, wait: 2.0 },  // Trước Võ Đường
    { x: -18.0, y: 0.15, z: 18.0, wait: 1.5 }, // Dạo Chợ Đêm Yatai
    { x: -24.0, y: 0.15, z: 24.0, wait: 2.0 }, // Thăm Tiệm Rèn
    { x: -18.0, y: 0.15, z: 0.0 },              // Đi ngược lên phía Bắc
    { x: -14.0, y: 0.15, z: -14.0, wait: 1.5 },// Cổng Senbon Torii & Lầu Chuông
    { x: -26.0, y: 0.15, z: -20.0, wait: 2.0 },// Ngắm Lầu Vọng Cảnh
    { x: -18.0, y: 0.15, z: 6.0 },             // Về ngã tư đại lộ
    { x: -0.6, y: 0.95, z: 6.0, wait: 3.0 }   // Về cầu đón nụ hôn cùng Nene
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

  // 2. Chibi Nene (Kimono hoa đào hồng bờ Sakura)
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

  const nTowel = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.16, 0.36), MATS.shikkuiWhite);
  nTowel.position.set(0, 2.65, 0);
  nTowel.visible = false;
  neneTowelMesh = nTowel;

  neneGroup.add(nKimono, nObi, nHead, nHair, nFlower, nTowel);
  neneGroup.position.set(0.6, 0.95, 6.0);
  enableShadow(neneGroup);
  scene.add(neneGroup);
  chibiNeneMesh = neneGroup;

  const nLabel = document.createElement('div');
  nLabel.className = 'worker-label label-nene';
  nLabel.dataset.side = 'nene';
  nLabel.textContent = '🌸 Nene';
  labelsContainer.appendChild(nLabel);

  // Lộ trình đi dạo chuẩn theo trục đường đá chính
  const neneWaypoints = [
    { x: 0.6, y: 0.95, z: 6.0, wait: 2.5 },   // Trên Cầu Onsen
    { x: 6.0, y: 0.15, z: 6.0 },               // Chân cầu bờ Nene
    { x: 18.0, y: 0.15, z: 6.0 },              // Ngã tư đường chính
    { x: 24.0, y: 0.15, z: 6.0, wait: 2.0 },   // Trước Trà Quán Sakura
    { x: 16.0, y: 0.15, z: 20.0, wait: 2.0 },  // Ghé Quán Mì Ramen
    { x: 26.0, y: 0.15, z: 24.0, wait: 1.5 },  // Thăm Tiệm Bánh Wagashi
    { x: 18.0, y: 0.15, z: 0.0 },              // Đi ngược lên phía Bắc
    { x: 14.0, y: 0.15, z: -14.0, wait: 1.5 }, // Ngắm Bánh Xe Nước & Vườn Zen
    { x: 26.0, y: 0.15, z: -20.0, wait: 2.0 }, // Thăm Tiệm Sáng Tạo & Lầu Trăng
    { x: 18.0, y: 0.15, z: 6.0 },              // Về ngã tư đại lộ
    { x: 0.6, y: 0.95, z: 6.0, wait: 3.0 }    // Về cầu đón nụ hôn cùng Thanh
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
  kissProgress = 5.0;

  cameraLerp = {
    targetPos: new THREE.Vector3(0, 7.5, 17.0),
    targetLook: new THREE.Vector3(0, 1.8, 6.0),
    alpha: 0
  };

  spawnKissHearts(0, 2.6, 6.0);
  showToast('💖 Thanh & Nene hẹn nhau trên Cầu Suối Nước Nóng trao nhau nụ hôn ngọt ngào!');

  if (broadcast && typeof publishCloudState === 'function') {
    publishCloudState({ station: 'onsen_hub', msg: '💋 Thanh & Nene vừa hôn nhau lãng mạn!' });
  }
}

// Bọt hơi nước nóng bốc lên khi tắm Onsen
const bathSteamList = [];

function spawnBathSteam(posX, posY, posZ) {
  const puff = new THREE.Mesh(
    new THREE.SphereGeometry(0.22 + Math.random() * 0.16, 8, 8),
    new THREE.MeshStandardMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.55,
      roughness: 1.0
    })
  );
  puff.position.set(posX, posY, posZ);
  scene.add(puff);
  bathSteamList.push({
    mesh: puff,
    vy: 0.75 + Math.random() * 0.6,
    vx: (Math.random() - 0.5) * 0.25,
    vz: (Math.random() - 0.5) * 0.25,
    life: 1.0,
    decay: 0.45 + Math.random() * 0.3
  });
}

function toggleBath(broadcast = true) {
  isBathing = !isBathing;
  if (thanhTowelMesh) thanhTowelMesh.visible = isBathing;
  if (neneTowelMesh) neneTowelMesh.visible = isBathing;

  const btn = document.getElementById('btn-toggle-bath');
  if (btn) {
    btn.classList.toggle('active', isBathing);
    btn.textContent = isBathing ? '♨️ Rời Bồn Tắm' : '♨️ Tắm Onsen';
  }

  if (isBathing) {
    selectStation('onsen_hub', true);
    showToast('♨️ Thanh & Nene đang cùng ngâm mình thư giãn trong bồn nước nóng Onsen!');
    for (let i = 0; i < 8; i++) {
      spawnBathSteam(-7.5 + (Math.random() - 0.5) * 2.0, 1.5, -2.0 + (Math.random() - 0.5) * 2.0);
    }
  } else {
    chibiThanhMesh.position.set(-0.6, 0.95, 6.0);
    chibiNeneMesh.position.set(0.6, 0.95, 6.0);
    chibiThanhMesh.rotation.set(0, 0, 0);
    chibiNeneMesh.rotation.set(0, 0, 0);
    showToast('♨️ Thanh & Nene đã tắm xong sảng khoái và tiếp tục dạo bước!');
  }

  if (broadcast && typeof publishBathAction === 'function') {
    publishBathAction(isBathing);
  }
}

function toggleLabels() {
  const isHidden = document.body.classList.toggle('labels-hidden');
  const btn = document.getElementById('btn-toggle-labels');
  if (btn) {
    btn.classList.toggle('active', isHidden);
    btn.textContent = isHidden ? '🏷️ Hiện Chữ' : '🏷️ Ẩn Chữ';
  }
  showToast(isHidden ? '🏷️ Đã ẩn toàn bộ nhãn chữ để ngắm cảnh thoáng hơn!' : '🏷️ Đã hiển thị lại nhãn chữ!');
}

window.toggleBath = toggleBath;
window.toggleLabels = toggleLabels;

// ============================================================================
// 7. THÚ CƯNG (SHIBA, MÈO, CÁ KOI, HƯƠU NARA) & DÂN LÀNG THỊ TRẤN
// ============================================================================
const koiFishList = [];
let deerHeadMesh;

function buildPetsAndVillagers() {
  // 1. Chó Shiba Inu ("Hachi") vui vẻ dạo chơi bên bờ Thanh
  const shibaGroup = new THREE.Group();
  const sBody = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.45, 0.9), MATS.shibaGold);
  sBody.position.y = 0.42;
  const sBelly = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.22, 0.75), MATS.shibaWhite);
  sBelly.position.set(0, 0.32, 0);
  const sHead = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 12), MATS.shibaGold);
  sHead.position.set(0, 0.75, 0.48);
  const sSnout = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.14, 0.22), MATS.shibaWhite);
  sSnout.position.set(0, 0.72, 0.72);
  const sNose = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 6), MATS.shibaNose);
  sNose.position.set(0, 0.76, 0.82);

  const sTail = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.08, 8, 12, Math.PI * 1.3), MATS.shibaGold);
  sTail.rotation.x = -Math.PI / 3;
  sTail.position.set(0, 0.65, -0.45);
  shibaGroup.add(sBody, sBelly, sHead, sSnout, sNose, sTail);

  for (let lx of [-0.2, 0.2]) {
    for (let lz of [-0.3, 0.3]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.42, 8), MATS.shibaGold);
      leg.position.set(lx, 0.21, lz);
      shibaGroup.add(leg);
    }
  }
  shibaGroup.position.set(-18, 0.15, 12);
  enableShadow(shibaGroup);
  scene.add(shibaGroup);

  const sLabel = document.createElement('div');
  sLabel.className = 'pet-label pet-shiba';
  sLabel.dataset.side = 'thanh';
  sLabel.textContent = '🐕 Hachi (Shiba)';
  labelsContainer.appendChild(sLabel);

  characters.push({
    id: 'shiba_hachi',
    mesh: shibaGroup,
    labelEl: sLabel,
    labelHeight: 1.4,
    waypoints: [
      { x: -18, z: 12, wait: 2.0 },
      { x: -18, z: 24, wait: 1.5 },
      { x: -22, z: 6, wait: 2.0 },
      { x: -18, z: -10, wait: 2.0 },
      { x: -18, z: 6 }
    ],
    currentWpIndex: 0,
    waitTime: 0,
    walkClock: 0,
    speed: 1.8,
    animIdle: (char, dt, elapsed) => {
      sTail.rotation.y = Math.sin(elapsed * 12) * 0.45;
    }
  });

  // 2. Mèo Tam Thể Calico ("Mimi") dạo chơi bên bờ Nene
  const catGroup = new THREE.Group();
  const cBody = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.34, 0.65), MATS.catWhite);
  cBody.position.y = 0.32;
  const cHead = new THREE.Mesh(new THREE.SphereGeometry(0.24, 10, 10), MATS.catWhite);
  cHead.position.set(0, 0.58, 0.35);
  const cTail = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.6, 6), MATS.catOrange);
  cTail.position.set(0, 0.55, -0.4);
  cTail.rotation.x = -0.5;
  catGroup.add(cBody, cHead, cTail);

  catGroup.position.set(18, 0.15, 12);
  enableShadow(catGroup);
  scene.add(catGroup);

  const cLabel = document.createElement('div');
  cLabel.className = 'pet-label pet-cat';
  cLabel.dataset.side = 'nene';
  cLabel.textContent = '🐈 Mimi (Mèo)';
  labelsContainer.appendChild(cLabel);

  characters.push({
    id: 'cat_mimi',
    mesh: catGroup,
    labelEl: cLabel,
    labelHeight: 1.2,
    waypoints: [
      { x: 18, z: 12, wait: 3.0 },
      { x: 16, z: 20, wait: 2.0 }, // Ngửi mùi quán mì ramen
      { x: 26, z: 6, wait: 2.5 },  // Lười biếng ở trà quán
      { x: 18, z: -8, wait: 2.0 },
      { x: 18, z: 6 }
    ],
    currentWpIndex: 0,
    waitTime: 0,
    walkClock: 0,
    speed: 1.4,
    animIdle: (char, dt, elapsed) => {
      cTail.rotation.z = Math.sin(elapsed * 4) * 0.35;
    }
  });

  // 3. Đàn Cá Koi Nhật Bản bơi lội dưới Hồ Nước Nóng Onsen
  const koiConfigs = [
    { mat: MATS.koiKohakuRed, r: 4.8, speed: 0.45, y: 0.15, startAngle: 0 },
    { mat: MATS.koiYamabuki,  r: 6.2, speed: -0.38, y: 0.14, startAngle: 2.1 },
    { mat: MATS.koiPlatinum,  r: 3.6, speed: 0.52, y: 0.16, startAngle: 4.2 }
  ];
  koiConfigs.forEach(kc => {
    const kGroup = new THREE.Group();
    const kBody = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.75, 8), kc.mat);
    kBody.rotation.x = Math.PI / 2;
    const kTail = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.03, 0.35), kc.mat);
    kTail.position.z = -0.45;
    kGroup.add(kBody, kTail);
    scene.add(kGroup);
    koiFishList.push({
      mesh: kGroup,
      tail: kTail,
      radius: kc.r,
      speed: kc.speed,
      baseY: kc.y,
      angle: kc.startAngle
    });
  });
}

// ============================================================================
// HỆ THỐNG THỜI TIẾT 4 MÙA (SEASONS SYSTEM)
// ============================================================================
let weatherParticleGroup;
const particles = [];
const onsenSteamParticles = [];

function initWeatherParticles() {
  weatherParticleGroup = new THREE.Group();
  scene.add(weatherParticleGroup);

  // Hạt hơi nước Onsen bốc lên mờ ảo
  for (let s = 0; s < 45; s++) {
    const steam = new THREE.Mesh(
      new THREE.SphereGeometry(0.35 + Math.random() * 0.35, 8, 8),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.22,
        roughness: 1.0
      })
    );
    const rad = 2.0 + Math.random() * 5.8;
    const ang = Math.random() * Math.PI * 2;
    steam.position.set(Math.cos(ang) * rad, 0.4 + Math.random() * 2.5, -1.0 + Math.sin(ang) * rad);
    scene.add(steam);
    onsenSteamParticles.push({
      mesh: steam,
      baseX: steam.position.x,
      baseZ: steam.position.z,
      speedY: 0.45 + Math.random() * 0.45,
      scaleSpeed: 0.18 + Math.random() * 0.2
    });
  }

  applySeason(state.currentSeason || 'autumn');
}

function applySeason(seasonName) {
  state.currentSeason = seasonName;
  document.querySelectorAll('.season-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.season === seasonName);
  });

  while (weatherParticleGroup.children.length > 0) {
    const obj = weatherParticleGroup.children[0];
    weatherParticleGroup.remove(obj);
    if (obj.geometry) obj.geometry.dispose();
  }
  particles.length = 0;

  const count = seasonName === 'winter' ? 240 : (seasonName === 'spring' ? 180 : 140);
  for (let i = 0; i < count; i++) {
    let geo, mat;
    if (seasonName === 'spring') {
      geo = new THREE.PlaneGeometry(0.32, 0.32);
      mat = MATS.sakuraPink;
    } else if (seasonName === 'summer') {
      geo = new THREE.SphereGeometry(0.12, 6, 6);
      mat = MATS.lanternWarmGlow;
    } else if (seasonName === 'winter') {
      geo = new THREE.DodecahedronGeometry(0.16, 0);
      mat = MATS.white;
    } else { // autumn
      geo = new THREE.PlaneGeometry(0.42, 0.42);
      mat = i % 2 === 0 ? MATS.mapleRed : MATS.mapleGold;
    }

    const p = new THREE.Mesh(geo, mat);
    p.position.set(
      (Math.random() - 0.5) * 88,
      2 + Math.random() * 24,
      (Math.random() - 0.5) * 78
    );
    p.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
    weatherParticleGroup.add(p);
    particles.push({
      mesh: p,
      speedY: seasonName === 'winter' ? (1.5 + Math.random() * 1.5) : (1.0 + Math.random() * 1.2),
      driftX: (Math.random() - 0.5) * 1.4,
      phase: Math.random() * Math.PI * 2
    });
  }
}

// ============================================================================
// HIỆU ỨNG PHÁO HOA ĂN MỪNG HOÀN THÀNH TASK
// ============================================================================
const fireworkSparks = [];

function spawnSingleFirework(posX, posY, posZ, colorHex = 0xff3b30) {
  const sparkCount = 38;
  for (let i = 0; i < sparkCount; i++) {
    const spark = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 8, 8),
      new THREE.MeshStandardMaterial({
        color: colorHex,
        emissive: colorHex,
        emissiveIntensity: 1.5,
        roughness: 0.2
      })
    );
    spark.position.set(posX, posY, posZ);
    scene.add(spark);

    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);
    const speed = 4.5 + Math.random() * 4.5;

    fireworkSparks.push({
      mesh: spark,
      vel: new THREE.Vector3(
        speed * Math.sin(phi) * Math.cos(theta),
        speed * Math.sin(phi) * Math.sin(theta) + 2.0,
        speed * Math.cos(phi)
      ),
      gravity: -5.5,
      life: 1.0,
      decay: 0.55 + Math.random() * 0.45
    });
  }
}

function triggerMegaFireworks(customMessage = null) {
  const colors = [0xff3b30, 0xff9500, 0xffcc00, 0x4cd964, 0x5ac8fa, 0x007aff, 0x5856d6, 0xff2d55];
  for (let b = 0; b < 10; b++) {
    setTimeout(() => {
      const rx = (Math.random() - 0.5) * 44;
      const ry = 14 + Math.random() * 12;
      const rz = (Math.random() - 0.5) * 36;
      const col = colors[Math.floor(Math.random() * colors.length)];
      spawnSingleFirework(rx, ry, rz, col);
    }, b * 280);
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
// KHỞI TẠO CÔNG TRÌNH VÀ VÒNG LẶP RENDER 3D
// ============================================================================
buildOnsenCenter();
buildThanhDojo();
buildThanhTower();
buildThanhExtras();
buildThanhSubStructures();
buildNeneTeaHouse();
buildRamenRestaurant(); // Quán Mì Ramen Ảnh 3
buildNeneExtras();
buildNeneSubStructures();
buildFloraScenery();
buildTownLamps();
buildChibiCouple();
buildPetsAndVillagers();
initWeatherParticles();
updateTownLighting(themeMode, false);

// Nhãn 3D trên màn hình
const stationLabelEls = {};

function createStationLabels() {
  Object.values(STATIONS).forEach(st => {
    const wrapper = document.createElement('div');
    wrapper.className = 'world-label';
    wrapper.dataset.station = st.id;
    wrapper.dataset.side = st.side;
    wrapper.innerHTML = `
      <div class="speech-bubble" id="bubble-${st.id}">${st.bubble}</div>
      <div class="station-badge">
        <span class="icon">${st.icon}</span>
        <span class="title">${st.shortName}</span>
        <span class="count-tag" id="badge-${st.id}">0</span>
      </div>
    `;
    labelsContainer.appendChild(wrapper);
    stationLabelEls[st.id] = wrapper;

    wrapper.addEventListener('click', (e) => {
      e.stopPropagation();
      selectStation(st.id, true);
    });
  });
}

createStationLabels();

function updateWorldBadges() {
  const thanhAll = [...state.thanh.tasks.day, ...state.thanh.tasks.week, ...state.thanh.tasks.month];
  const neneAll = [...state.nene.tasks.day, ...state.nene.tasks.week, ...state.nene.tasks.month];

  const tOpen = thanhAll.filter(t => !t.done).length;
  const nOpen = neneAll.filter(t => !t.done).length;
  const shOpen = state.shared.tasks.filter(t => !t.done).length;

  const setB = (id, val) => {
    const el = document.getElementById(`badge-${id}`);
    if (el) el.textContent = val;
  };

  setB('onsen_hub', shOpen);
  setB('thanh_dojo', tOpen);
  setB('thanh_tower', state.thanh.apps.length);
  setB('thanh_bell', state.thanh.schedule.length);
  setB('thanh_forge', state.thanh.finance.transactions.length);
  setB('nene_tea', nOpen);
  setB('nene_studio', state.nene.apps.length);
  setB('nene_clock', state.nene.schedule.length);
  setB('nene_wagashi', state.nene.finance.transactions.length);
  if (state.nene.ramenMenu) {
    const rOpen = state.nene.ramenMenu.filter(m => !m.done).length;
    setB('nene_ramen', rOpen);
  }
}

function updateTopSummary() {
  const thanhAll = [...state.thanh.tasks.day, ...state.thanh.tasks.week, ...state.thanh.tasks.month];
  const neneAll = [...state.nene.tasks.day, ...state.nene.tasks.week, ...state.nene.tasks.month];
  const tDone = thanhAll.filter(t => t.done).length;
  const nDone = neneAll.filter(t => t.done).length;

  const totalDone = tDone + nDone;
  const totalTasks = thanhAll.length + neneAll.length;
  const pct = totalTasks > 0 ? Math.round((totalDone / totalTasks) * 100) : 0;

  const summaryEl = document.getElementById('top-tasks-summary');
  if (summaryEl) {
    summaryEl.textContent = `🍁 Thanh: ${tDone}/${thanhAll.length} · 🌸 Nene: ${nDone}/${neneAll.length} (${pct}%)`;
  }

  const streakEl = document.getElementById('fw-streak-text');
  if (streakEl) {
    streakEl.textContent = `${state.completedStreak || 0}/5 task`;
  }
}

updateWorldBadges();
updateTopSummary();

// ============================================================================
// CAMERA FLIGHT & STATION SELECTION
// ============================================================================
let cameraLerp = null;
let autoRotate = false;
let simRunning = true;

function flyToStation(stationId) {
  const st = STATIONS[stationId] || STATIONS.onsen_hub;
  cameraLerp = {
    targetPos: new THREE.Vector3(st.pos.x + st.camOffset.x, st.pos.y + st.camOffset.y, st.pos.z + st.camOffset.z),
    targetLook: new THREE.Vector3(st.pos.x, st.pos.y + 2.0, st.pos.z),
    alpha: 0
  };
}

function selectStation(stationId, fly = true) {
  if (!STATIONS[stationId]) return;
  state.activeStation = stationId;

  document.querySelectorAll('.dock-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.station === stationId);
  });

  Object.entries(activeRingMeshes).forEach(([sid, ring]) => {
    ring.material.opacity = (sid === stationId) ? 0.85 : 0.0;
  });

  Object.entries(stationLabelEls).forEach(([sid, el]) => {
    el.classList.toggle('active', sid === stationId);
  });

  renderInspector();
  const card = document.getElementById('inspector-card');
  if (card) card.classList.remove('collapsed');

  if (fly) flyToStation(stationId);
}

// Raycasting click 3D
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let pointerDownPos = { x: 0, y: 0 };

renderer.domElement.addEventListener('pointerdown', e => {
  pointerDownPos = { x: e.clientX, y: e.clientY };
});

renderer.domElement.addEventListener('pointerup', e => {
  const dx = Math.abs(e.clientX - pointerDownPos.x);
  const dy = Math.abs(e.clientY - pointerDownPos.y);
  if (dx > 6 || dy > 6) return;

  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(stationMeshes, false);
  if (intersects.length > 0) {
    const hit = intersects[0].object;
    if (hit.userData && hit.userData.stationId) {
      selectStation(hit.userData.stationId, true);
    }
  }
});

// ============================================================================
// INSPECTOR CARD RENDERING — NỘI DUNG TỪNG CÔNG TRÌNH
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
  } else if (st.id === 'nene_ramen') {
    renderRamenPanel(body);
  } else if (st.id === 'nene_studio') {
    renderAppsPanel(body, 'nene');
  } else if (st.id === 'nene_clock') {
    renderSchedulePanel(body, 'nene');
  } else if (st.id === 'nene_wagashi') {
    renderFinancePanel(body, 'nene');
  }
}

// Quán Mì Ramen (Ảnh 3)
function renderRamenPanel(body) {
  if (!state.nene.ramenMenu) {
    state.nene.ramenMenu = JSON.parse(JSON.stringify(DEFAULT_STATE.nene.ramenMenu));
  }
  const list = state.nene.ramenMenu;
  const doneCount = list.filter(m => m.done).length;

  body.innerHTML = `
    <div style="background: linear-gradient(135deg, rgba(230,126,34,0.15), rgba(214,48,49,0.15)); border: 1px solid rgba(230,126,34,0.3); border-radius: 8px; padding: 10px; margin-bottom: 12px;">
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom: 4px;">
        <span style="font-size:13px; font-weight:800; color:#e67e22;">🍜 Quán Mì Ramen Kyoto Nene (Ảnh 3)</span>
        <span class="tag-badge orange">${doneCount}/${list.length} món đã thưởng</span>
      </div>
      <div style="font-size:11px; color:var(--text-sub); line-height:1.4;">
        Mái ngói xanh Kawara dốc, tô mì khổng lồ bốc khói trên nóc! Nơi nạp đầy năng lượng và tự thưởng sau khi hoàn thành các mục tiêu công việc.
      </div>
    </div>

    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 8px;">
      <span style="font-size:12px; font-weight:700; color:var(--text-main);">Thực đơn nạp năng lượng & Phần thưởng:</span>
      <button class="add-btn" onclick="window.eatRamenNow()" style="background:#e67e22; border-color:#e67e22;">🥢 Thưởng Thức Mì Ngay</button>
    </div>

    <div class="item-list">
      ${list.map(m => `
        <div class="list-item ${m.done ? 'done' : ''}">
          <div class="item-left">
            <input type="checkbox" class="item-check" ${m.done ? 'checked' : ''}
              onchange="window.toggleRamenMenu('${m.id}')" />
            <div class="item-info">
              <div class="item-title">${m.title}</div>
              <div class="item-meta">
                <span class="tag-badge green">⚡ ${m.energy}</span>
                <span style="font-size:11px; color:var(--text-sub);">🌸 Bờ Nene</span>
              </div>
            </div>
          </div>
          <button class="delete-btn" onclick="window.deleteRamenMenu('${m.id}')">✕</button>
        </div>
      `).join('')}
    </div>

    <div class="add-row">
      <input type="text" id="input-new-ramen" class="input-text" placeholder="Thêm món mì / phần thưởng mới..."
        onkeydown="if(event.key==='Enter') window.addRamenMenu()" />
      <button class="add-btn" onclick="window.addRamenMenu()">+ Thêm</button>
    </div>
  `;
}

window.toggleRamenMenu = function(id) {
  if (!state.nene.ramenMenu) return;
  const item = state.nene.ramenMenu.find(m => m.id === id);
  if (item) {
    item.done = !item.done;
    if (item.done) {
      showToast(`🍜 Nene & Thanh đã thưởng thức "${item.title}"! Đã nạp đầy năng lượng!`);
      spawnSingleFirework(STATIONS.nene_ramen.pos.x, 8.5, STATIONS.nene_ramen.pos.z, 0xe67e22);
    }
    saveState({ station: 'nene_ramen', msg: `Cập nhật thực đơn Ramen` });
    renderInspector();
  }
};

window.addRamenMenu = function() {
  const input = document.getElementById('input-new-ramen');
  if (!input) return;
  const val = input.value.trim();
  if (!val) return;
  if (!state.nene.ramenMenu) state.nene.ramenMenu = [];
  state.nene.ramenMenu.push({
    id: 'rm_' + Date.now(),
    title: val,
    energy: '+50 Năng Lượng',
    done: false
  });
  input.value = '';
  saveState({ station: 'nene_ramen', msg: `Thêm món thưởng: ${val}` });
  renderInspector();
  showToast(`🍜 Đã thêm món "${val}" vào Quán Mì Ramen!`);
};

window.deleteRamenMenu = function(id) {
  if (!state.nene.ramenMenu) return;
  state.nene.ramenMenu = state.nene.ramenMenu.filter(m => m.id !== id);
  saveState({ station: 'nene_ramen', msg: `Xóa món thưởng Ramen` });
  renderInspector();
};

window.eatRamenNow = function() {
  showToast('🥢 Xì xụp... Tô mì Ramen nóng hổi thơm phức đã được dọn lên! Nạp 100% sinh lực!');
  spawnSingleFirework(STATIONS.nene_ramen.pos.x, 9.5, STATIONS.nene_ramen.pos.z, 0xf39c12);
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      spawnBathSteam(
        STATIONS.nene_ramen.pos.x + (Math.random() - 0.5) * 1.5,
        5.8 + Math.random() * 0.5,
        STATIONS.nene_ramen.pos.z + (Math.random() - 0.5) * 1.5
      );
    }, i * 200);
  }
};

// Onsen Hub Panel
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

    <div class="add-row">
      <input type="text" id="input-new-shared" class="input-text" placeholder="Thêm việc chung cho hai đứa..."
        onkeydown="if(event.key==='Enter') window.addSharedTask()" />
      <button class="add-btn" onclick="window.addSharedTask()">+ Thêm</button>
    </div>
  `;
}

// Tasks Panel
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

    <div class="add-row">
      <input type="text" id="input-new-task" class="input-text" placeholder="Thêm task mới cho ${isThanh ? 'Thanh' : 'Nene'}..."
        onkeydown="if(event.key==='Enter') window.addNewTask('${role}', '${tab}')" />
      <button class="add-btn" onclick="window.addNewTask('${role}', '${tab}')">+ Thêm</button>
    </div>
  `;
}

// Schedule Panel
function renderSchedulePanel(body, role) {
  const data = state[role];
  const isThanh = role === 'thanh';

  body.innerHTML = `
    <div style="font-size:12px; font-weight:700; margin-bottom:8px;">
      Thời gian biểu của ${isThanh ? '🍁 Thanh (Kỷ luật thép)' : '🌸 Nene (Thanh lịch & Thư giãn)'}:
    </div>
    <div class="item-list">
      ${data.schedule.map(s => `
        <div class="list-item">
          <div class="item-left">
            <div style="font-size:18px; margin-right:8px;">⏰</div>
            <div class="item-info">
              <div class="item-title">${s.title}</div>
              <div class="item-meta">
                <span class="tag-badge orange">${s.time}</span>
                <span class="tag-badge green">${s.tag}</span>
                <span>${s.status}</span>
              </div>
            </div>
          </div>
          <button class="delete-btn" onclick="window.deleteSchedule('${role}', '${s.id}')">✕</button>
        </div>
      `).join('')}
    </div>

    <div class="add-row">
      <input type="text" id="input-new-sched" class="input-text" placeholder="Thêm mốc thời gian biểu mới..."
        onkeydown="if(event.key==='Enter') window.addSchedule('${role}')" />
      <button class="add-btn" onclick="window.addSchedule('${role}')">+ Thêm</button>
    </div>
  `;
}

// Finance Panel
function renderFinancePanel(body, role) {
  const fin = state[role].finance;
  const isThanh = role === 'thanh';

  let totalIncome = 0;
  let totalExpense = 0;
  fin.transactions.forEach(t => {
    if (t.type === 'income') totalIncome += t.amount;
    else totalExpense += t.amount;
  });
  const balance = totalIncome - totalExpense;

  body.innerHTML = `
    <div class="metric-grid">
      <div class="metric-box">
        <div class="label">Tổng thu nhập</div>
        <div class="val" style="color:var(--accent-green);">${formatVND(totalIncome)}</div>
        <div class="sub">Tháng này</div>
      </div>
      <div class="metric-box">
        <div class="label">Tổng chi tiêu</div>
        <div class="val" style="color:var(--accent-red);">${formatVND(totalExpense)}</div>
        <div class="sub">Tháng này</div>
      </div>
    </div>
    <div style="background:var(--bg-glass); padding:8px 12px; border-radius:8px; display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; font-weight:700;">
      <span>💰 Số dư khả dụng của ${isThanh ? 'Thanh' : 'Nene'}:</span>
      <span style="color:${balance >= 0 ? 'var(--accent-green)' : 'var(--accent-red)'}; font-size:14px;">
        ${formatVND(balance)}
      </span>
    </div>

    <div style="font-size:12px; font-weight:700; margin-bottom:8px;">Lịch sử giao dịch:</div>
    <div class="item-list">
      ${fin.transactions.map(t => `
        <div class="list-item">
          <div class="item-left">
            <div style="font-size:18px; margin-right:8px;">${t.type === 'income' ? '💵' : '💸'}</div>
            <div class="item-info">
              <div class="item-title">${t.title}</div>
              <div class="item-meta">
                <span class="tag-badge ${t.type === 'income' ? 'green' : 'red'}">${t.category}</span>
                <span>📅 ${t.date}</span>
              </div>
            </div>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="font-weight:700; font-size:13px; color:${t.type === 'income' ? 'var(--accent-green)' : 'var(--accent-red)'};">
              ${t.type === 'income' ? '+' : '-'}${formatVND(t.amount)}
            </span>
            <button class="delete-btn" onclick="window.deleteFinance('${role}', '${t.id}')">✕</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// Apps Panel
function renderAppsPanel(body, role) {
  const data = state[role];
  const isThanh = role === 'thanh';

  body.innerHTML = `
    <div style="font-size:12px; font-weight:700; margin-bottom:8px;">
      Dự án & Ứng dụng công nghệ của ${isThanh ? '🍁 Thanh' : '🌸 Nene'}:
    </div>
    <div class="item-list">
      ${data.apps.map(a => `
        <div class="list-item" style="flex-direction:column; align-items:stretch; gap:6px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div style="font-weight:700; font-size:13px;">💻 ${a.name}</div>
            <span class="tag-badge orange">${a.status}</span>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; color:var(--text-sub);">
            <span>Tech: ${a.tech}</span>
            <span>${a.progress}% hoàn thành</span>
          </div>
          <div style="height:6px; background:#e2e8f0; border-radius:3px; overflow:hidden;">
            <div style="height:100%; width:${a.progress}%; background:linear-gradient(90deg, #d63031, #e84393); border-radius:3px;"></div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// ============================================================================
// HÀM XỬ LÝ SỰ KIỆN TASK & PHÁO HOA ĂN MỪNG
// ============================================================================
function handleTaskCompletionReward(stationId, taskTitle) {
  state.completedStreak = (state.completedStreak || 0) + 1;

  const st = STATIONS[stationId] || STATIONS.onsen_hub;
  const isThanh = stationId.startsWith('thanh');
  spawnSingleFirework(st.pos.x, 8.5, st.pos.z, isThanh ? 0xd63031 : 0xe84393);

  if (state.completedStreak >= 5) {
    state.completedStreak = 0;
    setTimeout(() => {
      triggerMegaFireworks('🎆 CHÚC MỪNG HOÀN THÀNH 5 TASK! ĐẠI TIỆC PHÁO HOA ĂN MỪNG THỊ TRẤN ĐÔI! 🎆');
    }, 600);
  } else {
    showToast(`🎉 Đã xong: "${taskTitle}"! Tích lũy ${state.completedStreak}/5 task để bắn pháo hoa lớn!`);
  }
}

window.setTaskTab = function(role, tab) {
  state.taskSubTab = tab;
  renderInspector();
};

window.toggleTask = function(role, tab, id) {
  const task = state[role].tasks[tab].find(t => t.id === id);
  if (task) {
    task.done = !task.done;
    if (task.done) {
      handleTaskCompletionReward(role === 'thanh' ? 'thanh_dojo' : 'nene_tea', task.title);
    }
    saveState({ station: role === 'thanh' ? 'thanh_dojo' : 'nene_tea', msg: `Task: ${task.title}` });
    renderInspector();
  }
};

window.addNewTask = function(role, tab) {
  const input = document.getElementById('input-new-task');
  if (!input) return;
  const val = input.value.trim();
  if (!val) return;
  state[role].tasks[tab].push({
    id: role + '_' + Date.now(),
    title: val,
    priority: 'Cao',
    time: '12:00',
    done: false
  });
  input.value = '';
  saveState({ station: role === 'thanh' ? 'thanh_dojo' : 'nene_tea', msg: `Thêm task: ${val}` });
  renderInspector();
  showToast(`✅ Đã thêm task mới cho ${role === 'thanh' ? 'Thanh' : 'Nene'}!`);
};

window.deleteTask = function(role, tab, id) {
  state[role].tasks[tab] = state[role].tasks[tab].filter(t => t.id !== id);
  saveState({ station: role === 'thanh' ? 'thanh_dojo' : 'nene_tea', msg: `Xóa task` });
  renderInspector();
};

window.toggleSharedTask = function(id) {
  const task = state.shared.tasks.find(t => t.id === id);
  if (task) {
    task.done = !task.done;
    if (task.done) {
      handleTaskCompletionReward('onsen_hub', task.title);
    }
    saveState({ station: 'onsen_hub', msg: `Việc chung: ${task.title}` });
    renderInspector();
  }
};

window.addSharedTask = function() {
  const input = document.getElementById('input-new-shared');
  if (!input) return;
  const val = input.value.trim();
  if (!val) return;
  state.shared.tasks.push({
    id: 'sh_' + Date.now(),
    title: val,
    done: false,
    by: 'Thanh & Nene'
  });
  input.value = '';
  saveState({ station: 'onsen_hub', msg: `Thêm việc chung: ${val}` });
  renderInspector();
  showToast('♨️ Đã thêm việc chung của hai đứa!');
};

window.deleteSharedTask = function(id) {
  state.shared.tasks = state.shared.tasks.filter(t => t.id !== id);
  saveState({ station: 'onsen_hub', msg: `Xóa việc chung` });
  renderInspector();
};

window.deleteSchedule = function(role, id) {
  state[role].schedule = state[role].schedule.filter(s => s.id !== id);
  saveState();
  renderInspector();
};

window.deleteFinance = function(role, id) {
  state[role].finance.transactions = state[role].finance.transactions.filter(t => t.id !== id);
  saveState();
  renderInspector();
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

const btnToggleBath = document.getElementById('btn-toggle-bath');
if (btnToggleBath) {
  btnToggleBath.addEventListener('click', () => {
    toggleBath(true);
  });
}

const btnToggleLabels = document.getElementById('btn-toggle-labels');
if (btnToggleLabels) {
  btnToggleLabels.addEventListener('click', () => {
    toggleLabels();
  });
}

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

const lockModal = document.getElementById('lock-screen') || document.getElementById('lock-screen-modal');
const lockFormEl = document.getElementById('lock-form');
const lockPinInput = document.getElementById('lock-room-input') || document.getElementById('lock-pin');
const lockShowPin = document.getElementById('lock-show-pin');
const lockErrorMsg = document.getElementById('lock-error');
const btnEnterDemo = document.getElementById('btn-enter-demo');
const btnSubmitLock = document.getElementById('btn-submit-lock');

if (lockShowPin && lockPinInput) {
  lockShowPin.addEventListener('change', e => {
    lockPinInput.type = e.target.checked ? 'text' : 'password';
  });
}

function handleLockSubmit(e) {
  if (e && e.preventDefault) e.preventDefault();
  const pinInput = document.getElementById('lock-room-input') || document.getElementById('lock-pin');
  const enteredPin = (pinInput ? pinInput.value : '').trim();
  const selectedRoleEl = document.querySelector('input[name="lock_role"]:checked') || document.querySelector('input[name="user-persona"]:checked');
  const role = selectedRoleEl ? selectedRoleEl.value : 'all';
  const rememberMeEl = document.getElementById('lock-remember-me');
  const remember = rememberMeEl ? rememberMeEl.checked : true;
  const errorEl = document.getElementById('lock-error');

  if (!enteredPin) {
    if (errorEl) {
      errorEl.textContent = 'Vui lòng nhập mã phòng bí mật!';
      errorEl.style.display = 'block';
    } else {
      showToast('⚠️ Vui lòng nhập mã phòng bí mật!');
    }
    return;
  }

  if (enteredPin === DEFAULT_ROOM_ID || enteredPin === '280900') {
    unlockWithRoomAndRole(enteredPin, role, remember);
  } else {
    if (errorEl) {
      errorEl.textContent = 'Mật mã phòng không đúng! Gợi ý: 280900';
      errorEl.style.display = 'block';
    } else {
      showToast('❌ Mật mã phòng không đúng! Gợi ý: 280900');
    }
  }
}

if (lockFormEl) lockFormEl.addEventListener('submit', handleLockSubmit);
if (btnSubmitLock) btnSubmitLock.addEventListener('click', handleLockSubmit);

if (btnEnterDemo) {
  btnEnterDemo.addEventListener('click', (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const selectedRoleEl = document.querySelector('input[name="lock_role"]:checked') || document.querySelector('input[name="user-persona"]:checked');
    const role = selectedRoleEl ? selectedRoleEl.value : 'all';
    unlockWithRoomAndRole(DEFAULT_ROOM_ID, role, false);
  });
}

function unlockWithRoomAndRole(roomId, role, remember = true) {
  currentRoomId = roomId;
  isRoomUnlocked = true;
  if (remember) {
    localStorage.setItem(ROOM_KEY, roomId);
    localStorage.setItem(UNLOCKED_KEY, '1');
    localStorage.setItem(ROLE_KEY, role);
  }
  const lockEl = document.getElementById('lock-screen') || document.getElementById('lock-screen-modal');
  if (lockEl) {
    lockEl.classList.add('hidden');
    lockEl.style.display = 'none';
  }
  document.body.classList.remove('room-locked');
  setPersonaView(role);
  connectRealtimeCloud();
  buildShareLinks();
  showToast(`🌸 Chào mừng ${role === 'thanh' ? 'Thanh 🍁' : (role === 'nene' ? 'Nene 🌸' : 'hai bạn')} đã vào LifeTown!`);
}

if (isRoomUnlocked) {
  const lockEl = document.getElementById('lock-screen') || document.getElementById('lock-screen-modal');
  if (lockEl) {
    lockEl.classList.add('hidden');
    lockEl.style.display = 'none';
  }
  document.body.classList.remove('room-locked');
  const savedRole = localStorage.getItem(ROLE_KEY) || 'all';
  setPersonaView(savedRole);
  connectRealtimeCloud();
  buildShareLinks();
} else {
  const lockEl = document.getElementById('lock-screen') || document.getElementById('lock-screen-modal');
  if (lockEl) {
    lockEl.classList.remove('hidden');
    lockEl.style.display = 'flex';
  }
  document.body.classList.add('room-locked');
}

function updateSyncStatusUI(status, text) {
  const dot = document.getElementById('sync-status-dot');
  const txt = document.getElementById('sync-status-text');
  if (dot) {
    dot.className = 'status-dot';
    if (status === 'online') dot.classList.add('online');
    else if (status === 'connecting') dot.classList.add('connecting');
  }
  if (txt) txt.textContent = text;
}

function getSyncTopic(roomId) {
  return `lifetown3d/room/${roomId}/sync`;
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

  if (payload.isKiss) {
    triggerKiss(false);
    return;
  }

  if (payload.isBath !== undefined) {
    if (isBathing !== payload.isBath) {
      toggleBath(false);
    }
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

function publishBathAction(isBath) {
  const now = Date.now();
  const msgId = `${CLIENT_ID}_${now}_bath`;
  seenMsgIds.add(msgId);
  const payload = {
    msgId,
    clientId: CLIENT_ID,
    isBath,
    msg: isBath ? '♨️ Thanh & Nene đã cùng vào tắm Onsen!' : '♨️ Thanh & Nene đã rời bồn Onsen!'
  };
  const jsonStr = JSON.stringify(payload);
  const topic = getSyncTopic(currentRoomId);
  mqttClients.forEach(client => {
    if (client && client.connected) {
      try { client.publish(topic, jsonStr, { qos: 1 }); } catch (e) {}
    }
  });
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
const syncModal = document.getElementById('sync-config-modal');
if (syncModal) {
  document.getElementById('btn-open-sync').addEventListener('click', () => {
    buildShareLinks();
    syncModal.classList.remove('hidden');
  });
  document.getElementById('btn-close-sync').addEventListener('click', () => {
    syncModal.classList.add('hidden');
  });
  document.getElementById('btn-apply-room').addEventListener('click', () => {
    const val = document.getElementById('input-room-id').value.trim();
    if (val) unlockWithRoomAndRole(val, state.currentUser || 'all', true);
    syncModal.classList.add('hidden');
  });
  document.getElementById('btn-copy-edit').addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('input-share-edit').value);
    showToast('📋 Đã sao chép link chỉnh sửa vào clipboard!');
  });
  document.getElementById('btn-copy-view').addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('input-share-view').value);
    showToast('📋 Đã sao chép link chỉ xem vào clipboard!');
  });
  document.getElementById('btn-lock-room').addEventListener('click', () => {
    localStorage.removeItem(UNLOCKED_KEY);
    window.location.reload();
  });
}

// ============================================================================
// MAIN ANIMATION LOOP (RENDER LOOP)
// ============================================================================
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
  element.style.display = 'block';
  element.style.transform = `translate(-50%, -100%) translate(${x}px, ${y}px)`;
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

    // 2. Quay bánh xe nước cối xay gỗ
    if (waterWheelMesh) {
      waterWheelMesh.rotation.z -= dt * 0.95;
    }

    // 3. Xử lý Chibi Thanh & Nene (Hôn nhau hoặc Tắm Onsen)
    if (isKissing) {
      kissProgress -= dt;
      chibiThanhMesh.position.lerp(new THREE.Vector3(-0.48, 0.95, 6.0), Math.min(1, dt * 5.0));
      chibiNeneMesh.position.lerp(new THREE.Vector3(0.48, 0.95, 6.0), Math.min(1, dt * 5.0));
      chibiThanhMesh.lookAt(1, 0.95, 6.0);
      chibiNeneMesh.lookAt(-1, 0.95, 6.0);
      chibiThanhMesh.rotation.z = -0.18;
      chibiNeneMesh.rotation.z = 0.18;

      if (kissProgress <= 0) {
        isKissing = false;
        chibiThanhMesh.rotation.z = 0;
        chibiNeneMesh.rotation.z = 0;
      }
    } else if (isBathing) {
      // Thanh & Nene ngâm mình thư giãn trong bồn tắm gỗ Ofuro (Ảnh 2)
      const bathY = 0.85 + Math.sin(elapsed * 2.2) * 0.04;
      chibiThanhMesh.position.set(-7.5 - 0.75, bathY, -2.0);
      chibiNeneMesh.position.set(-7.5 + 0.75, bathY - 0.02, -2.0);
      chibiThanhMesh.rotation.set(0, Math.PI / 2, 0);
      chibiNeneMesh.rotation.set(0, -Math.PI / 2, 0);

      if (Math.random() < 0.16) {
        spawnBathSteam(
          -7.5 + (Math.random() - 0.5) * 2.0,
          1.5,
          -2.0 + (Math.random() - 0.5) * 2.0
        );
      }
    }

    // Cập nhật di chuyển theo lộ trình (Waypoints)
    characters.forEach(char => {
      if ((isKissing || isBathing) && (char.id === 'thanh' || char.id === 'nene')) {
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

      // Độ cao Y: nếu ở trên Cầu Onsen (X: [-5.5, 5.5], Z: [4.2, 7.8]) thì nâng lên 0.95
      const onBridge = (curPos.z > 4.2 && curPos.z < 7.8 && Math.abs(curPos.x) < 5.5);
      const baseY = onBridge ? 0.95 : (target.y !== undefined ? target.y : 0.15);
      curPos.y = baseY + Math.abs(Math.sin((char.walkClock || 0) * 7.5)) * 0.14;
      char.walkClock = (char.walkClock || 0) + dt;

      let diff = moveAngle - char.mesh.rotation.y;
      while (diff < -Math.PI) diff += Math.PI * 2;
      while (diff > Math.PI) diff -= Math.PI * 2;
      char.mesh.rotation.y += diff * Math.min(1, dt * 7);

      if (char.animWalk) char.animWalk(char, dt, elapsed);
    });

    // Cập nhật bơi lội đàn cá Koi
    koiFishList.forEach(k => {
      k.angle += dt * k.speed;
      k.mesh.position.x = Math.cos(k.angle) * k.radius;
      k.mesh.position.z = -1.0 + Math.sin(k.angle) * k.radius * 1.15;
      k.mesh.position.y = k.baseY + Math.sin(elapsed * 2 + k.radius) * 0.03;
      k.mesh.rotation.y = -k.angle + (k.speed > 0 ? Math.PI : 0);
      if (k.tail) {
        k.tail.rotation.y = Math.sin(elapsed * 8) * 0.45;
      }
    });

    // Cập nhật bọt hơi nước Onsen
    for (let b = bathSteamList.length - 1; b >= 0; b--) {
      const bs = bathSteamList[b];
      bs.life -= dt * bs.decay;
      bs.mesh.position.y += bs.vy * dt;
      bs.mesh.position.x += bs.vx * dt;
      bs.mesh.position.z += bs.vz * dt;
      bs.mesh.scale.multiplyScalar(1.0 + dt * 0.4);
      bs.mesh.material.opacity = Math.max(0, bs.life * 0.55);
      if (bs.life <= 0) {
        scene.remove(bs.mesh);
        bs.mesh.geometry.dispose();
        bs.mesh.material.dispose();
        bathSteamList.splice(b, 1);
      }
    }

    // Chuyển động hơi nước Onsen bốc lên mờ ảo
    onsenSteamParticles.forEach(sp => {
      sp.mesh.position.y += sp.speedY * dt;
      sp.mesh.position.x = sp.baseX + Math.sin(elapsed * 1.5 + sp.baseZ) * 0.35;
      sp.mesh.scale.setScalar(1 + (sp.mesh.position.y - 0.4) * sp.scaleSpeed);
      if (sp.mesh.position.y > 5.5) {
        sp.mesh.position.y = 0.4;
        sp.mesh.scale.setScalar(1);
      }
    });

    // Chuyển động hạt thời tiết 4 mùa
    particles.forEach(p => {
      p.mesh.position.y -= p.speedY * dt;
      p.mesh.position.x += Math.sin(elapsed * 1.4 + p.phase) * p.driftX * dt;
      p.mesh.position.z += Math.cos(elapsed * 1.2 + p.phase) * p.driftX * dt;
      p.mesh.rotation.x += dt * 1.5;
      p.mesh.rotation.y += dt * 1.8;
      if (p.mesh.position.y < 0.2) {
        p.mesh.position.y = 22 + Math.random() * 5;
        p.mesh.position.x = (Math.random() - 0.5) * 88;
        p.mesh.position.z = (Math.random() - 0.5) * 78;
      }
    });
  }

  // Cập nhật pháo hoa
  for (let f = fireworkSparks.length - 1; f >= 0; f--) {
    const sp = fireworkSparks[f];
    sp.life -= dt * sp.decay;
    sp.vel.y += sp.gravity * dt;
    sp.mesh.position.addScaledVector(sp.vel, dt);
    sp.mesh.scale.setScalar(Math.max(sp.life, 0.05));
    if (sp.life <= 0) {
      scene.remove(sp.mesh);
      fireworkSparks.splice(f, 1);
    }
  }

  // Cập nhật trái tim hôn nhau
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

  // Camera lerp
  if (cameraLerp) {
    cameraLerp.alpha += dt * 2.2;
    const ease = Math.min(1, cameraLerp.alpha);
    camera.position.lerp(cameraLerp.targetPos, ease);
    controls.target.lerp(cameraLerp.targetLook, ease);
    if (ease >= 1) cameraLerp = null;
  }

  controls.update();
  renderer.render(scene, camera);

  // Chiếu nhãn 3D lên màn hình (nếu không ở chế độ ẩn chữ)
  if (!document.body.classList.contains('labels-hidden')) {
    Object.entries(STATIONS).forEach(([id, st]) => {
      const el = stationLabelEls[id];
      if (el) {
        tempVec.set(st.pos.x, st.pos.y + (st.labelHeight || 12.0), st.pos.z);
        projectToScreen(tempVec, el);
      }
    });

    characters.forEach(char => {
      if (char.labelEl && char.mesh) {
        tempVec.copy(char.mesh.position);
        tempVec.y += (char.labelHeight || 2.6);
        projectToScreen(tempVec, char.labelEl);
      }
    });
  }
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Bắt đầu vòng lặp render 60 FPS
animate();
