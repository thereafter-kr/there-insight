const insights = [
  {"id":1,"name":"01.지울 수 없는 진심 (안성기의 손편지)","perspective":"디지털의 '백스페이스'는 정성을 증발시키지만, 아날로그의 '수정 불가능성'은 투입된 시간과 태도를 증명한다.","law":"5 투명성 법칙","keywords":["손편지","안성기","진심"],"track":"Track1:본질/유산"},
  {"id":2,"name":"02: 셀프 환대 (최화정 )","perspective":"나를 대하는 태도가 곧 삶의 질을 결정한다. 타인의 시선이 아닌, 나를 가장 귀한 손님으로 대접하는 일상의 리추얼.","law":"","keywords":["나에 대한 예의","리츄얼","셀프환대","자존","최화정"],"track":"Track2:삶의 태도"},
  {"id":3,"name":"03: 로컬의 중력 (The Gravity of Territory)","perspective":"확장을 거부해 '목적지'가 되는 역설. 결핍을 설계해 세상의 발길을 모으는 중력의 미학.","law":"4 희소성 법칙","keywords":["결핍의 미학","로컬의 중력","목적지브랜드","성심당","희소성"],"track":"Track1:본질/유산"},
  {"id":4,"name":"04.지금 아니면 없다 (Now or Never)","perspective":"희소성과 긴박함을 공간 경험의 핵심 테마로 만들어, 방문 자체를 이벤트화하는 전략.","law":"4 희소성 법칙","keywords":["긴박한경험","시간제한","자라","희소성공간"],"track":"Track3:트렌드와 통찰"},
  {"id":5,"name":"05.먹는 곳이 아니라 '있는' 곳 (A Place to Be, Not Just to Eat)","perspective":"제품을 파는 공간에서 시간을 보내는 공간으로, 소비 장소를 체류 공간으로 전환하는 전략","law":"2 재정의 법칙","keywords":["공간경험","런던베이글뮤지엄","머무는이유","인스타그래머블","체류형공간"],"track":"Track3:트렌드와 통찰"},
  {"id":6,"name":"06.평범한 것을 '뮤지엄'이라 부르는 순간 (When the Ordinary Becomes a Museum)","perspective":"흔한 제품에 '뮤지엄'이라는 이름을 붙여 일상을 특별한 경험으로 재정의하는 전략.","law":"2 재정의 법칙","keywords":["경험의 격상","네이밍의 힘","런던베이글뮤지엄","뮤지엄화","일상의 재발견"],"track":"Track3:트렌드와 통찰"},
  {"id":7,"name":"07.매장이 아니라 '사건' (Not a Store, But an Event)","perspective":"일상적인 쇼핑 행위를 특별한 이벤트로 전환하여, 방문 자체를 기다리게 만드는 전략","law":"2 재정의 법칙","keywords":["ZARA","드롭컬처","오픈런","이벤트경험"],"track":"Track3:트렌드와 통찰"},
  {"id":8,"name":"08.완벽한 기본 (The Perfection of Basics)","perspective":"평범한 것을 극한까지 완성시키는 것이 진짜 차별화다. 기본이야말로 가장 어렵고, 가장 오래 남는다.","law":"3 본질 우선 법칙","keywords":["본질의 완성","완벽한 기본","유니클로","장인정신","평범함의 극한"],"track":"Track1:본질/유산"},
  {"id":9,"name":"09.옷장이 아니라 '유니폼' (Not a Wardrobe, But a Uniform)","perspective":"개성이 아닌 보편성, 유행이 아닌 영속성을 제공하는 것이 오히려 더 강력한 선택이 될 수 있다.","law":"1 선택 피로 법칙","keywords":["보편성","선택의 단순화","유니클로","유니폼","일상의 표준"],"track":"Track2:삶의 태도"},
  {"id":10,"name":"10.보이지 않는 기술 (Invisible Innovation)","perspective":"겉으로는 단순하지만 안에는 첨단 기술이 숨어있는 역설. 진짜 혁신은 보이지 않는 곳에서 일어난다.","law":"3 본질 우선 법칙","keywords":["기능의 은폐","단순함 뒤의 복잡함","보이지 않는 기술","숨겨진 혁신","유니클로"],"track":"Track1:본질/유산"},
  {"id":11,"name":"11.계절을 파는 가게 (Selling Seasons, Not Fashion)","perspective":"트렌드가 아닌 기후와 계절에 집중하는 실용주의. 패션이 아니라 생존 전략을 판다.","law":"3 본질 우선 법칙","keywords":["계절의 본질","기능이 스타일을 이긴다","에어리즘","유니클로","히트텍"],"track":"Track1:본질/유산"},
  {"id":12,"name":"12.빠지는 것의 미학 (The Beauty of Subtraction)","perspective":"로고도, 장식도, 과장도 없는 극단적 미니멀리즘. 빼고 빼고 또 뺀 디자인의 완성.","law":"1 선택 피로 법칙","keywords":["극단적 단순함","노로고","미니멀리즘","빼기의 미학","유니클로"],"track":"Track1:본질/유산"},
  {"id":13,"name":"13.못생긴 밑창의 역습","perspective":"엔지니어가 신발을 만들면 못생겨도 세계 기록을 깬다","law":"3 본질 우선 법칙","keywords":["기능주의","못생김","반전","엔지니어링","온"],"track":"Track1:본질/유산"},
  {"id":14,"name":"14.주인공을 죽여도 세계는 산다","perspective":"스타 하나에 의존하지 마라. 세계를 만들면 영원하다.","law":"10 세계관 법칙","keywords":["세계관","영속성","유니버스","의존탈피","주토피아"],"track":"Track1:본질/유산"},
  {"id":15,"name":"15.선택지가 3개밖에 없는 마트","perspective":"많이 줄수록 못 고른다. 3개만 남기니 고민 없이 산다.","law":"1 선택 피로 법칙","keywords":["결정피로","선택축소","역설","코스트코","큐레이션"],"track":"Track2:삶의 태도"},
  {"id":16,"name":"16.메뉴가 3개밖에 없는 버거집","perspective":"100가지 평범함보다 3가지 완벽함. 줄일수록 강해진다.","law":"1 선택 피로 법칙","keywords":["단순함","메뉴축소","완벽추구","인앤아웃","집중"],"track":"Track1:본질/유산"},
  {"id":17,"name":"17.안 하는 버거집","perspective":"모두가 하는 걸 75년간 안 했더니, 컬트 브랜드가 되었다.","law":"6 집중 법칙","keywords":["거부","반대로가기","원칙","인앤아웃","타협없음"],"track":"Track2:삶의 태도"},
  {"id":18,"name":"18.시크릿 메뉴가 더 유명한 가게","perspective":"숨길수록 더 찾고 싶어진다. 비밀이 팬을 만든다.","law":"4 희소성 법칙","keywords":["숨김","시크릿메뉴","인앤아웃","입소문","커뮤니티"],"track":"Track2:삶의 태도"},
  {"id":19,"name":"19.컨시어지가 있는 서점","perspective":"셀프서비스 시대에 30분 상담. 시간 들일수록 더 판다.","law":"","keywords":["맞춤서비스","츠타야서점","컨시어지","큐레이션","프미미엄경험"],"track":"Track2:삶의 태도"},
  {"id":20,"name":"20.50대만 오는 서점","perspective":"모두를 위하면 아무도 안 온다. 타겟 좁히니 성공했다.","law":"6 집중 법칙","keywords":["명확성","블루오션","선택과집중","시니어타겟","츠타야서점"],"track":"Track2:삶의 태도"},
  {"id":21,"name":"21.3개의 법칙","perspective":"왜 성공한 브랜드들은 다 3개만 팔까? 적을수록 강하다.","law":"1 선택 피로 법칙","keywords":["결정피로","단순함","선택축소","심리학"],"track":"Track1:본질/유산"},
  {"id":22,"name":"22.신발이 아니라 선수를 팝니다","perspective":"제품 보여주지 말고 꿈을 보여줘라. 사람이 제품이다.","law":"2 재정의 법칙","keywords":["꿈","나이키","동경","선수마케팅","스토리"],"track":"Track2:삶의 태도"},
  {"id":23,"name":"23.집도 아니고 회사도 아닌 곳","perspective":"커피 팔지 말고 공간 팔아라. 카테고리를 만들어라","law":"2 재정의 법칙","keywords":["머무는곳","스타벅스","재정의","제3의공간","카테고리창조"],"track":"Track1:본질/유산"},
  {"id":24,"name":"24.주방이 카운터 앞에 있습니다","perspective":"숨기지 말고 보여줘라. 투명성이 신뢰다.","law":"5 투명성 법칙","keywords":["눈앞조리","신뢰","오픈키친","치폴레","투명성"],"track":"Track1:본질/유산"},
  {"id":25,"name":"25.종이봉투에 철학을 쓰는 식당","perspective":"포장에 광고 말고 생각을 담아라. 문화가 브랜드다.","law":"","keywords":["문화","종이봉투철학","차별화","치폴레","콘텐츠"],"track":"Track2:삶의 태도"},
  {"id":26,"name":"26.집주인이 고객보다 중요한 회사","perspective":"손님 말고 공급자를 먼저 챙겨라. 공급이 수요를 만든다.","law":"9 역발상 법칙","keywords":["공급중심","양면시장","에어비앤비","역발상","호스트우선"],"track":"Track2:삶의 태도"},
  {"id":27,"name":"27.호텔이 아니라 경험을 팝니다","perspective":"숙박 팔지 말고 삶을 팔아라. 관광객이 아니라 로컬로 만들어라.","law":"2 재정의 법칙","keywords":["경험판매","관광아닌삶","로컬생활","속하기","에어비앤비"],"track":"Track1:본질/유산"},
  {"id":28,"name":"28.영상 속 남자가 튀어나왔습니다","perspective":"디지털을 현실로 소환하라. 온라인이 오프라인을 부른다.","law":"","keywords":["디지털소환","박정민","온오프통합","청룡영화상","화사"],"track":"Track3:트렌드와 통찰"},
  {"id":29,"name":"29.상 못 받았는데 가장 화제","perspective":"트로피보다 기억에 남아라. 수상보다 화제가 본질이다.","law":"","keywords":["기억승리","박정민","수상불발","청룡영화상","화제성"],"track":"Track2:삶의 태도"},
  {"id":30,"name":"30.숫자가 아니라, 구름","perspective":"술 스펙을 나열하는 것보다 하나의 감각으로 압축하는 것이 더 강력하다. 사람들은 성능표가 아니라 '느낌'을 산다.","law":"2 재정의 법칙","keywords":["감각의 언어","구름위를 걷다","기술의 번역","스펙을 느낌으로","온"],"track":"Track3:트렌드와 통찰"},
  {"id":31,"name":"31.완벽하게 통역되자, 아무것도 통하지 않았습니다","perspective":"AI가 언어를 완벽히 번역할수록, 번역 '불가능한' 것들의 가치가 커진다. 말은 통하는데 마음이 안 통하는 시대.","law":"","keywords":["AI통역시대","기술의 역설","이사랑통역되나요","통하지않는 완벽"],"track":"Track3:트렌드와 통찰"},
  {"id":32,"name":"32.\"나도 저래\" - 네 글자로 끝나는 공감","perspective":"특별한 이야기가 아니라 내 이야기 같아서 리메이크한다. 스웨덴도 저렇게 살고, 한국도 저렇게 산다.","law":"7 공감 법칙","keywords":["나도저래","내이야기같아서","러브미","평범의보편"],"track":"Track2:삶의 태도"},
  {"id":33,"name":"33.물인데, 맥주캔","perspective":"내용물이 아니라 포장이 정체성을 만든다. 똑같은 것도 어떻게 담느냐에 따라 완전히 다른 제품이 된다.","law":"2 재정의 법칙","keywords":["겉이전부","리퀴드데스","정체성디자인","포장의힘"],"track":"Track3:트렌드와 통찰"},
  {"id":34,"name":"34.선생님이 아니라, 초록 올빼미","perspective":"가르치려 들지 말고, 함께 놀아라. 평가가 아니라 응원할 때 사람들은 입을 연다.","law":"7 공감 법칙","keywords":["두올링고","실수해도돼","올빼미효과","응원의교육","평가vs응원"],"track":"Track2:삶의 태도"},
  {"id":35,"name":"35.새로운 게 아니라, 이미 하던 거","perspective":"혁신은 발명이 아니라 인정이다. 가장 강력한 제품은 실험실이 아니라 소비자의 습관에서 나온다.","law":"8 관찰 법칙","keywords":["관찰의힘","마요치즈","소비자가만든다","인정이혁신","크래프트하인즈"],"track":"Track3:트렌드와 통찰"}
];

let activeKeywords = new Set();
let activeTrack = '';
let activeLaw = '';
let activeBtlTypes = new Set();
let searchQuery = '';
let viewMode = 'internal'; // 'public' | 'meeting' | 'internal'
let expandedId = null;
let selectedIds = new Set();
const MAX_COMBO = 3;

const SLIDE_LABELS = ['현상', '전환', '반전', '본질', '증명', '핵심메시지'];
const BTL_TYPES = ['경험공간', '이벤트', '전시'];
const BTL_FIELD_LABELS = {
  spaceDesign: '공간설계',
  experienceDesign: '경험설계',
  executionIdea: '실행 아이디어',
  kpi: '성과지표'
};

// 35개 데이터에 기본 필드 주입
insights.forEach(item => {
  if (!item.btlType) item.btlType = [];
  if (!item.spaceDesign) item.spaceDesign = '';
  if (!item.experienceDesign) item.experienceDesign = '';
  if (!item.executionIdea) item.executionIdea = '';
  if (!item.kpi) item.kpi = '';
  // 이미지 필드
  if (!item.heroImage) item.heroImage = '';
  if (!item.currentStateImages) item.currentStateImages = [];
  if (!item.brandRefImages) item.brandRefImages = [];
  if (!item.spaceDesignImages) item.spaceDesignImages = [];
  if (!item.experienceDesignImages) item.experienceDesignImages = [];
  if (!item.conceptImages) item.conceptImages = [];
  if (!item.moodboard) item.moodboard = '';
});

// 이미지 갤러리 설정
const IMAGE_SECTIONS = [
  { key: 'currentStateImages', label: '현상 이미지', modes: ['meeting', 'internal'] },
  { key: 'brandRefImages', label: '브랜드 레퍼런스', modes: ['meeting', 'internal'] },
  { key: 'spaceDesignImages', label: '공간설계 레퍼런스', modes: ['internal'] },
  { key: 'experienceDesignImages', label: '경험설계 레퍼런스', modes: ['internal'] },
  { key: 'conceptImages', label: '실행 컨셉', modes: ['internal'] },
  { key: 'moodboard', label: '무드보드', modes: ['internal'], single: true }
];

const searchInput = document.getElementById('search-input');
const btlContainer = document.getElementById('btl-tags');
const keywordContainer = document.getElementById('keyword-tags');
const trackContainer = document.getElementById('track-tags');
const lawContainer = document.getElementById('law-tags');
const insightList = document.getElementById('insight-list');
const resultCount = document.getElementById('result-count');
const resetBtn = document.getElementById('reset-btn');
const viewModeContainer = document.getElementById('view-mode');

function init() {
  renderBtlTypes();
  renderTracks();
  renderLaws();
  renderKeywords();
  renderInsights(insights);
}

// BTL 유형 필터
function renderBtlTypes() {
  btlContainer.innerHTML = BTL_TYPES
    .map(t => `<span class="btl-tag" data-btl="${t}">${t}</span>`)
    .join('');

  btlContainer.querySelectorAll('.btl-tag').forEach(tag => {
    tag.addEventListener('click', () => toggleBtlType(tag.dataset.btl));
  });
}

function toggleBtlType(type) {
  if (activeBtlTypes.has(type)) {
    activeBtlTypes.delete(type);
  } else {
    activeBtlTypes.add(type);
  }
  updateBtlTypeUI();
  applyFilters();
}

function updateBtlTypeUI() {
  btlContainer.querySelectorAll('.btl-tag').forEach(tag => {
    tag.classList.toggle('active', activeBtlTypes.has(tag.dataset.btl));
  });
}

// 트랙 목록 추출
function getAllTracks() {
  const tracks = new Set();
  insights.forEach(item => {
    if (item.track) tracks.add(item.track);
  });
  return [...tracks].sort();
}

// 트랙 필터 렌더링
function renderTracks() {
  const tracks = getAllTracks();
  trackContainer.innerHTML = tracks
    .map(t => `<span class="track-tag ${trackClass(t)}" data-track="${t}">${t}</span>`)
    .join('');

  trackContainer.querySelectorAll('.track-tag').forEach(tag => {
    tag.addEventListener('click', () => toggleTrack(tag.dataset.track));
  });
}

function toggleTrack(track) {
  activeTrack = activeTrack === track ? '' : track;
  updateTrackUI();
  applyFilters();
}

function updateTrackUI() {
  trackContainer.querySelectorAll('.track-tag').forEach(tag => {
    tag.classList.toggle('active', tag.dataset.track === activeTrack);
  });
}

// 법칙 목록 추출 (번호순 정렬)
function getAllLaws() {
  const laws = new Set();
  insights.forEach(item => {
    if (item.law) laws.add(item.law);
  });
  return [...laws].sort((a, b) => {
    const numA = parseInt(a) || 99;
    const numB = parseInt(b) || 99;
    return numA - numB;
  });
}

function renderLaws() {
  const laws = getAllLaws();
  lawContainer.innerHTML = laws
    .map(l => `<span class="law-tag" data-law="${l}">${l}</span>`)
    .join('');

  lawContainer.querySelectorAll('.law-tag').forEach(tag => {
    tag.addEventListener('click', () => toggleLaw(tag.dataset.law));
  });
}

function toggleLaw(law) {
  activeLaw = activeLaw === law ? '' : law;
  updateLawUI();
  applyFilters();
}

function updateLawUI() {
  lawContainer.querySelectorAll('.law-tag').forEach(tag => {
    tag.classList.toggle('active', tag.dataset.law === activeLaw);
  });
}

// 전체 키워드 추출 (중복 제거, 빈도순 정렬)
function getAllKeywords() {
  const freq = {};
  insights.forEach(item => {
    item.keywords.forEach(kw => {
      freq[kw] = (freq[kw] || 0) + 1;
    });
  });
  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .map(([kw]) => kw);
}

const KEYWORD_LIMIT = 15;
let keywordsExpanded = false;

function renderKeywords() {
  const keywords = getAllKeywords();
  const visible = keywordsExpanded ? keywords : keywords.slice(0, KEYWORD_LIMIT);
  const hasMore = keywords.length > KEYWORD_LIMIT;

  keywordContainer.innerHTML = visible
    .map(kw => `<span class="keyword-tag" data-keyword="${kw}">${kw}</span>`)
    .join('')
    + (hasMore ? `<span class="keyword-toggle" id="keyword-toggle">${keywordsExpanded ? '접기' : `+${keywords.length - KEYWORD_LIMIT}개 더보기`}</span>` : '');

  keywordContainer.querySelectorAll('.keyword-tag').forEach(tag => {
    tag.addEventListener('click', () => toggleKeyword(tag.dataset.keyword));
  });

  const toggleBtn = document.getElementById('keyword-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      keywordsExpanded = !keywordsExpanded;
      renderKeywords();
      updateKeywordUI();
    });
  }
}

function toggleKeyword(keyword) {
  if (activeKeywords.has(keyword)) {
    activeKeywords.delete(keyword);
  } else {
    activeKeywords.add(keyword);
  }
  updateKeywordUI();
  applyFilters();
}

function updateKeywordUI() {
  keywordContainer.querySelectorAll('.keyword-tag').forEach(tag => {
    tag.classList.toggle('active', activeKeywords.has(tag.dataset.keyword));
  });
}

// 검색 + 키워드 + 트랙 필터 동시 적용
function applyFilters() {
  let filtered = insights;

  // BTL 유형 필터 (OR 조건: 선택한 유형 중 하나라도 포함)
  if (activeBtlTypes.size > 0) {
    filtered = filtered.filter(item =>
      item.btlType && item.btlType.some(t => activeBtlTypes.has(t))
    );
  }

  // 트랙 필터
  if (activeTrack) {
    filtered = filtered.filter(item => item.track === activeTrack);
  }

  // 법칙 필터
  if (activeLaw) {
    filtered = filtered.filter(item => item.law === activeLaw);
  }

  // 텍스트 검색 (name, perspective, law, keywords)
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(item =>
      item.name.toLowerCase().includes(q) ||
      item.perspective.toLowerCase().includes(q) ||
      (item.law && item.law.toLowerCase().includes(q)) ||
      item.keywords.some(kw => kw.toLowerCase().includes(q))
    );
  }

  // 키워드 필터 (AND 조건)
  if (activeKeywords.size > 0) {
    filtered = filtered.filter(item =>
      [...activeKeywords].every(kw => item.keywords.includes(kw))
    );
  }

  renderInsights(filtered);
}

function renderInsights(list) {
  resultCount.textContent = `${list.length}건`;

  if (list.length === 0) {
    insightList.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">&#128269;</div>
        <p>검색 결과가 없습니다</p>
      </div>`;
    return;
  }

  insightList.innerHTML = list.map(item => {
    const isOpen = expandedId === item.id;
    const isSelected = selectedIds.has(item.id);
    const checkboxDisabled = !isSelected && selectedIds.size >= MAX_COMBO;
    const thumbHtml = item.heroImage
      ? `<div class="card-thumb"><img src="${item.heroImage}" alt="" data-lightbox="${item.heroImage}"></div>`
      : '';

    return `
    <article class="insight-card ${isOpen ? 'expanded' : ''} ${isSelected ? 'selected' : ''}" data-id="${item.id}">
      <div class="card-body">
        <div class="card-header">
          ${viewMode === 'internal' ? `
          <label class="card-select" title="조합에 추가">
            <input type="checkbox" data-select-id="${item.id}" ${isSelected ? 'checked' : ''} ${checkboxDisabled ? 'disabled' : ''}>
          </label>` : ''}
          <span class="card-track ${trackClass(item.track)}">${item.track}</span>
          ${item.law && viewMode !== 'public' ? `<span class="card-law">${item.law}</span>` : ''}
          <span class="card-expand-icon">${isOpen ? '&#9650;' : '&#9660;'}</span>
        </div>
        <div class="card-body-wrap">
          ${thumbHtml}
          <div class="card-main">
            <h3 class="card-name">${highlightText(item.name)}</h3>
            ${viewMode !== 'public' ? `<p class="card-perspective">${highlightText(item.perspective)}</p>` : ''}
            <div class="card-keywords">
              ${item.keywords.map(kw => `<span class="card-keyword">#${kw}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
      <div class="card-detail" style="display:${isOpen ? 'block' : 'none'}">
        ${renderDetail(item)}
      </div>
    </article>`;
  }).join('');

  insightList.querySelectorAll('.insight-card').forEach(card => {
    // 체크박스 클릭 — 아코디언과 분리
    const checkbox = card.querySelector('input[data-select-id]');
    if (checkbox) {
      checkbox.addEventListener('click', (e) => e.stopPropagation());
      checkbox.addEventListener('change', (e) => {
        e.stopPropagation();
        toggleSelect(Number(e.target.dataset.selectId));
      });
    }

    card.querySelector('.card-body').addEventListener('click', (e) => {
      // 체크박스 영역 클릭은 무시
      if (e.target.closest('.card-select')) return;
      const id = Number(card.dataset.id);
      expandedId = expandedId === id ? null : id;
      applyFilters();
    });
  });
}

function renderDetail(item) {
  if (viewMode === 'internal') {
    const slides = item.slides || [];
    return `
      <div class="detail-slides">
        ${SLIDE_LABELS.map((label, i) => {
          const slide = slides[i];
          const headline = slide ? slide.headline : '';
          const narrative = slide ? slide.narrative : '';
          return `
          <div class="slide-item">
            <div class="slide-number">${i + 1}</div>
            <div class="slide-content">
              <div class="slide-label">${label}</div>
              <div class="slide-headline">${headline || '<span class="empty-field">헤드라인 미입력</span>'}</div>
              <div class="slide-narrative">${narrative || '<span class="empty-field">내러티브 미입력</span>'}</div>
            </div>
          </div>`;
        }).join('')}
      </div>
      ${renderImageGalleries(item)}
      ${renderBtlSection(item)}`;
  }
  if (viewMode === 'meeting') {
    return `
      ${renderImageGalleries(item)}
      <div class="detail-locked">
        <span class="lock-icon">&#128274;</span>
        <p>상세 내용은 내부용 모드에서 확인하세요</p>
      </div>`;
  }
  // public
  return `
    ${renderImageGalleries(item)}
    <div class="detail-locked">
      <span class="lock-icon">&#128274;</span>
      <p>상세 내용은 미팅에서 공유합니다</p>
    </div>`;
}

function renderBtlSection(item) {
  const types = item.btlType || [];
  const typeBadges = types.length > 0
    ? types.map(t => `<span class="btl-type-badge">${t}</span>`).join('')
    : '<span class="btl-type-badge empty">유형 미지정</span>';

  const fields = ['spaceDesign', 'experienceDesign', 'executionIdea', 'kpi'];

  return `
    <div class="btl-section">
      <div class="btl-section-title">BTL 실행</div>
      <div class="btl-type-badges">${typeBadges}</div>
      <div class="btl-fields">
        ${fields.map(key => `
        <div class="btl-field">
          <div class="btl-field-label">${BTL_FIELD_LABELS[key]}</div>
          <div class="btl-field-value ${item[key] ? '' : 'empty'}">${item[key] || '미입력'}</div>
        </div>`).join('')}
      </div>
    </div>`;
}

function renderImageGalleries(item) {
  let html = '';

  IMAGE_SECTIONS.forEach(sec => {
    if (!sec.modes.includes(viewMode)) return;

    if (sec.single) {
      // 단일 이미지 (moodboard)
      const src = item[sec.key];
      html += `
        <div class="img-gallery-section">
          <div class="img-gallery-label">${sec.label}</div>
          <div class="img-gallery">
            ${src
              ? `<div class="img-gallery-item moodboard"><img src="${src}" alt="${sec.label}" data-lightbox="${src}"></div>`
              : `<div class="img-placeholder moodboard">이미지 미등록</div>`}
          </div>
        </div>`;
    } else {
      // 배열 이미지
      const images = item[sec.key] || [];
      html += `
        <div class="img-gallery-section">
          <div class="img-gallery-label">${sec.label}</div>
          <div class="img-gallery">
            ${images.length > 0
              ? images.map(src => `<div class="img-gallery-item"><img src="${src}" alt="${sec.label}" data-lightbox="${src}"></div>`).join('')
              : `<div class="img-placeholder">이미지 미등록</div>`}
          </div>
        </div>`;
    }
  });

  return html;
}

// 라이트박스
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add('active');
}

function closeLightbox() {
  lightbox.classList.remove('active');
  lightboxImg.src = '';
}

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.querySelector('.lightbox-backdrop').addEventListener('click', closeLightbox);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// 이미지 클릭 이벤트 위임 (동적 요소)
document.addEventListener('click', (e) => {
  const img = e.target.closest('[data-lightbox]');
  if (img) {
    e.stopPropagation();
    openLightbox(img.dataset.lightbox);
  }
});

function trackClass(track) {
  if (track.startsWith('Track1')) return 'track-1';
  if (track.startsWith('Track2')) return 'track-2';
  if (track.startsWith('Track3')) return 'track-3';
  return '';
}

// 검색어 하이라이트
function highlightText(text) {
  if (!searchQuery) return text;
  const escaped = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

// ================================================
// 조합 기능
// ================================================
const comboPanel = document.getElementById('combo-panel');

function toggleSelect(id) {
  if (selectedIds.has(id)) {
    selectedIds.delete(id);
  } else {
    if (selectedIds.size >= MAX_COMBO) return;
    selectedIds.add(id);
  }
  applyFilters();
  renderComboPanel();
}

function removeFromCombo(id) {
  selectedIds.delete(id);
  applyFilters();
  renderComboPanel();
}

function clearCombo() {
  selectedIds.clear();
  applyFilters();
  renderComboPanel();
}

function renderComboPanel() {
  if (selectedIds.size < 2 || viewMode !== 'internal') {
    comboPanel.classList.remove('visible');
    document.body.classList.remove('combo-open');
    return;
  }

  const selected = insights.filter(item => selectedIds.has(item.id));

  comboPanel.innerHTML = `
    <div class="combo-inner">
      <div class="combo-header">
        <span class="combo-title">조합 패널 — <span>${selected.length}개</span> 선택됨</span>
        <button class="combo-close" id="combo-close">선택 해제</button>
      </div>
      <div class="combo-cards">
        ${selected.map(item => `
        <div class="combo-card">
          <span class="combo-card-remove" data-remove-id="${item.id}">&times;</span>
          <div class="combo-card-track">${item.track}</div>
          <div class="combo-card-name">${item.name}</div>
          <div class="combo-card-perspective">${item.perspective}</div>
          <div class="combo-card-keywords">
            ${item.keywords.map(kw => `<span class="combo-card-kw">#${kw}</span>`).join('')}
          </div>
        </div>`).join('')}
      </div>
      <div class="combo-memo">
        <span class="combo-memo-label">MEMO</span>
        <textarea id="combo-memo-input" placeholder="이 조합을 왜 묶었는지 메모하세요...">${comboMemoText}</textarea>
      </div>
    </div>`;

  comboPanel.classList.add('visible');
  document.body.classList.add('combo-open');

  // 패널 이벤트
  document.getElementById('combo-close').addEventListener('click', clearCombo);

  comboPanel.querySelectorAll('.combo-card-remove').forEach(btn => {
    btn.addEventListener('click', () => removeFromCombo(Number(btn.dataset.removeId)));
  });

  document.getElementById('combo-memo-input').addEventListener('input', (e) => {
    comboMemoText = e.target.value;
  });
}

let comboMemoText = '';

// 이벤트 바인딩
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value.trim();
  applyFilters();
});

viewModeContainer.addEventListener('click', (e) => {
  const btn = e.target.closest('.mode-btn');
  if (!btn) return;
  viewMode = btn.dataset.mode;
  viewModeContainer.querySelectorAll('.mode-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.mode === viewMode)
  );
  applyFilters();
  renderComboPanel();
});

resetBtn.addEventListener('click', () => {
  searchQuery = '';
  searchInput.value = '';
  activeKeywords.clear();
  activeTrack = '';
  activeLaw = '';
  activeBtlTypes.clear();
  selectedIds.clear();
  comboMemoText = '';
  updateKeywordUI();
  updateTrackUI();
  updateLawUI();
  updateBtlTypeUI();
  applyFilters();
  renderComboPanel();
});

init();
