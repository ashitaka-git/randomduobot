// main.js
// =============================
// デュオデータ（サンプルだけ。ここに全部追加していく）
// =============================
const DUOS = [
  {
    bot: "ヨネ",
    sup: "ヤスオ",
    botIcon: "img/yone.png",
    supIcon: "img/yasuo.png",
    difficulty: 3,
    troll: 3,
    offmeta: 3,
    comment: "兄弟の絆を見せつけましょう"
  },
  {
    bot: "ヤスオ",
    sup: "グラガス",
    botIcon: "img/yasuo.png",
    supIcon: "img/gragas.png",
    difficulty: 3,
    troll: 2,
    offmeta: 2,
    comment: "ウルトコンボで敵を泣かせる"
  },
  {
    bot: "ジグス",
    sup: "ベイガー",
    botIcon: "img/ziggs.png",
    supIcon: "img/veigar.png",
    difficulty: 1,
    troll: 1,
    offmeta: 1,
    comment: "ベイガーEとジグスWで敵をスタン"
  },
  {
    bot: "ヴェイン",
    sup: "アニビア",
    botIcon: "img/vayne.png",
    supIcon: "img/anivia.png",
    difficulty: 2,
    troll: 1,
    offmeta: 1,
    comment: "いっぱい壁ドンしよう"
  },
  {
    bot: "レンガー",
    sup: "アイバーン",
    botIcon: "img/rengar.png",
    supIcon: "img/ivern.png",
    difficulty: 3,
    troll: 3,
    offmeta: 3,
    comment: "草むらからいっぱい飛び出す"
  },
  {
    bot: "タリヤ",
    sup: "パンテオン",
    botIcon: "img/taliyah.png",
    supIcon: "img/pantheon.png",
    difficulty: 1,
    troll: 1,
    offmeta: 2,
    comment: "ウルトでどこまでも"
  },
  {
    bot: "オレソル",
    sup: "イラオイ",
    botIcon: "img/aurelionsol.png",
    supIcon: "img/illaoi.png",
    difficulty: 1,
    troll: 2,
    offmeta: 3,
    comment: "イラオイEにビームを当ててスタックいっぱい"
  },
  {
    bot: "ラックス",
    sup: "ゾーイ",
    botIcon: "img/lux.png",
    supIcon: "img/zoe.png",
    difficulty: 1,
    troll: 1,
    offmeta: 1,
    comment: "眠った敵にフルコンボ"
  },
  {
    bot: "ミスフォーチュン",
    sup: "シンドラ",
    botIcon: "img/missfortune.png",
    supIcon: "img/syndra.png",
    difficulty: 1,
    troll: 1,
    offmeta: 1,
    comment: "ミスフォーチュンQをシンドラWで必中"
  },
  {
    bot: "トリンダメア",
    sup: "ユーミ",
    botIcon: "img/tryndamere.png",
    supIcon: "img/yuumi.png",
    difficulty: 2,
    troll: 3,
    offmeta: 2,
    comment: "トリンダメア次第です"
  },
  {
    bot: "カタリナ",
    sup: "タリック",
    botIcon: "img/katarina.png",
    supIcon: "img/taric.png",
    difficulty: 3,
    troll: 2,
    offmeta: 2,
    comment: "タリックEとカタカナEで確定スタン"
  },
  {
    bot: "サイラス",
    sup: "タリック",
    botIcon: "img/sylas.png",
    supIcon: "img/taric.png",
    difficulty: 3,
    troll: 2,
    offmeta: 2,
    comment: "タリックEとサイラスEで確定スタン"
  },
  {
    bot: "サイオン",
    sup: "チョガス",
    botIcon: "img/sion.png",
    supIcon: "img/chogath.png",
    difficulty: 3,
    troll: 3,
    offmeta: 3,
    comment: "いっぱいスタン"
  },
  {
    bot: "セナ",
    sup: "サイオン",
    botIcon: "img/senna.png",
    supIcon: "img/sion.png",
    difficulty: 2,
    troll: 2,
    offmeta: 2,
    comment: "セナWついたミニオンにサイオンEしよう"
  },
  {
    bot: "オリアナ",
    sup: "シャコ",
    botIcon: "img/orianna.png",
    supIcon: "img/shaco.png",
    difficulty: 2,
    troll: 2,
    offmeta: 3,
    comment: "オリアナRで敵を驚かす"
  },
  {
    bot: "カシオペア",
    sup: "ティーモ",
    botIcon: "img/cassiopeia.png",
    supIcon: "img/teemo.png",
    difficulty: 1,
    troll: 2,
    offmeta: 3,
    comment: "毒いっぱいでカシオペアEが光る"
  },
  {
    bot: "カシオペア",
    sup: "シンジド",
    botIcon: "img/cassiopeia.png",
    supIcon: "img/singed.png",
    difficulty: 2,
    troll: 2,
    offmeta: 3,
    comment: "毒いっぱいでカシオペアEが光る"
  },
  {
    bot: "ダイアナ",
    sup: "オリアナ",
    botIcon: "img/diana.png",
    supIcon: "img/orianna.png",
    difficulty: 2,
    troll: 2,
    offmeta: 3,
    comment: "ウルトコンボが最強"
  },
  {
    bot: "ブランド",
    sup: "ナミ",
    botIcon: "img/brand.png",
    supIcon: "img/nami.png",
    difficulty: 1,
    troll: 1,
    offmeta: 1,
    comment: "ナミWつけたブランドでハラスいっぱい"
  },
  {
    bot: "サイオン",
    sup: "スウェイン",
    botIcon: "img/sion.png",
    supIcon: "img/swain.png",
    difficulty: 2,
    troll: 3,
    offmeta: 2,
    comment: "スウェインE当てればめっちゃコンボ"
  },
  {
    bot: "ケネン",
    sup: "アムム",
    botIcon: "img/kennen.png",
    supIcon: "img/amumu.png",
    difficulty: 2,
    troll: 3,
    offmeta: 3,
    comment: "CCで敵を封印"
  },
  {
    bot: "アジール",
    sup: "セト",
    botIcon: "img/azir.png",
    supIcon: "img/sett.png",
    difficulty: 3,
    troll: 3,
    offmeta: 3,
    comment: "アジールRとセトRで敵を運搬"
  },
  {
    bot: "キンドレッド",
    sup: "タリック",
    botIcon: "img/kindred.png",
    supIcon: "img/taric.png",
    difficulty: 2,
    troll: 2,
    offmeta: 3,
    comment: "めっちゃ無敵"
  },
  {
    bot: "ヨリック",
    sup: "ジリアン",
    botIcon: "img/yorick.png",
    supIcon: "img/zilean.png",
    difficulty: 2,
    troll: 3,
    offmeta: 3,
    comment: "ヨリックのペットにジリアンのスキルくっ付けて敵に飛ばそう"
  },
  {
    bot: "トゥイッチ",
    sup: "シャコ",
    botIcon: "img/twitch.png",
    supIcon: "img/shaco.png",
    difficulty: 2,
    troll: 2,
    offmeta: 2,
    comment: "めっちゃステルス"
  },
  {
    bot: "ライズ",
    sup: "タムケンチ",
    botIcon: "img/ryze.png",
    supIcon: "img/tahmkench.png",
    difficulty: 2,
    troll: 2,
    offmeta: 3,
    comment: "タムケンRした状態でライズRすると敵を誘拐できるよ"
  },
  {
    bot: "ブライアー",
    sup: "アニビア",
    botIcon: "img/briar.png",
    supIcon: "img/anivia.png",
    difficulty: 3,
    troll: 3,
    offmeta: 3,
    comment: "ブライラーEで敵いっぱい壁ドン"
  },
  {
    bot: "ガリオ",
    sup: "ザック",
    botIcon: "img/galio.png",
    supIcon: "img/zac.png",
    difficulty: 2,
    troll: 3,
    offmeta: 2,
    comment: "めっちゃCC"
  },
  {
    bot: "タムケンチ",
    sup: "チョガス",
    botIcon: "img/tahmkench.png",
    supIcon: "img/chogath.png",
    difficulty: 2,
    troll: 3,
    offmeta: 2,
    comment: "めっちゃ打ち上げ"
  },
  {
    bot: "タリヤ",
    sup: "ポッピー",
    botIcon: "img/taliyah.png",
    supIcon: "img/poppy.png",
    difficulty: 2,
    troll: 1,
    offmeta: 2,
    comment: "タリヤWの上にポッピーが敵を運ぼう、スタンになる"
  },
  {
    bot: "シンドラ",
    sup: "ベイガー",
    botIcon: "img/syndra.png",
    supIcon: "img/veigar.png",
    difficulty: 1,
    troll: 1,
    offmeta: 2,
    comment: "シンドラのEでベイガーEを必中"
  },
  // TODO: 実際のオフメタBOTデュオをここに追加していく
];

// 名前 → アイコンパス
const CHAMP_ICONS = {};

DUOS.forEach((d) => {
  CHAMP_ICONS[d.bot] = d.botIcon;
  CHAMP_ICONS[d.sup] = d.supIcon;
});

// =============================
// フィルター定義
// =============================

const filterLabels = {
  difficulty: "難易度",
  troll: "トロール度",
  offmeta: "オフメタ度",
};

const filterConfig = {
  difficulty: ["簡単", "普通","難しい"],
  troll: ["トロールじゃない", "少しトロール", "めっちゃトロール"],
  offmeta: ["ほぼオフメタじゃない", "オフメタ","めっちゃオフメタ"],
};

// 数値 → 表示ラベル変換マップ
const difficultyMap = {
  1: "簡単",
  2: "普通",
  3: "難しい"
};

const trollMap = {
  1: "トロールじゃない",
  2: "少しトロール",
  3: "めっちゃトロール"
};

const offmetaMap = {
  1: "ほぼオフメタじゃない",
  2: "オフメタ",
  3: "めっちゃオフメタ"
};
// =============================
// 状態管理
// =============================
const state = {
  history: [],
  excludeChars: []
};

// =============================
// 初期化
// =============================
document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  createFilters();
  bindRandomButton();
  bindExcludeSearch();

  renderList();
  renderHistory();
  updateCountLabel();
});

// =============================
// タブ切り替え
// =============================
function initTabs() {
  const buttons = document.querySelectorAll("#tabs button");
  const tabs = document.querySelectorAll(".tab");

  buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tabName = btn.dataset.tab;

    tabs.forEach((t) => {
      t.style.display = "none";
    });

    const active = document.getElementById(tabName + "Tab");
    if (!active) return;

    // ★ 一覧タブだけ display:grid にする
    if (tabName === "list") {
      active.style.display = "grid";
    } else {
      active.style.display = "block";
    }
  });
});

  // 初期表示は Random
  tabs.forEach((t) => {
    t.style.display = "none";
  });
  const randomTab = document.getElementById("randomTab");
  if (randomTab) randomTab.style.display = "block";
}

// =============================
// フィルターUI生成
// =============================
function createFilters() {
  const area = document.getElementById("filters");
  if (!area) return;

  area.innerHTML = "";

  for (const key in filterConfig) {
    const group = document.createElement("div");
    group.className = "filter-group";

    const title = document.createElement("div");
    title.className = "filter-title";
    title.textContent = filterLabels[key] || key;
    group.appendChild(title);

    filterConfig[key].forEach((v) => {
      const label = document.createElement("label");
      label.className = "filter-item";

      const input = document.createElement("input");
      input.type = "checkbox";
      input.name = key;
      input.value = String(v);

      const span = document.createElement("span");
      span.className = "filter-pill";
      span.textContent = String(v);

      label.appendChild(input);
      label.appendChild(span);
      group.appendChild(label);
    });

    area.appendChild(group);
  }

  // チェック変更時に件数を更新
  area.addEventListener("change", updateCountLabel);
}
 
 function getCheckedValues(name) {
   return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`))
     .map((el) => el.value);
 }
 
 // =============================
 // 除外キャラ関連
 // =============================
 function bindExcludeSearch() {
   const input = document.getElementById("excludeSearch");
   const suggest = document.getElementById("excludeSuggest");
   if (!input || !suggest) return;
 
   input.addEventListener("input", () => {
     const q = input.value.trim().toLowerCase();
     suggest.innerHTML = "";
     if (!q) return;
 
     const names = new Set();
     DUOS.forEach((d) => {
       names.add(d.bot);
       names.add(d.sup);
     });
 
     Array.from(names)
      .filter((name) => name.toLowerCase().includes(q))
      .forEach((name) => {
        const div = document.createElement("div");
        div.className = "exclude-suggest-item";
    
        // アイコンパス取得（なければ null）
        const icon = CHAMP_ICONS[name];
    
        // 画像 + 名前を表示
        if (icon) {
          div.innerHTML = `
            <img src="${icon}" class="champ-icon"> 
            <span>${name}</span>
          `;
        } else {
          // 念のため画像が登録されていない場合
          div.textContent = name;
        }
    
        div.addEventListener("click", () => {
          addExcludeChar(name);
          input.value = "";
          suggest.innerHTML = "";
        });
        suggest.appendChild(div);
      });
   });
 }
 
 function addExcludeChar(name) {
   if (!state.excludeChars.includes(name)) {
     state.excludeChars.push(name);
     updateExcludeListView();
     updateCountLabel();
   }
 }
 
 function removeExcludeChar(name) {
   state.excludeChars = state.excludeChars.filter((n) => n !== name);
   updateExcludeListView();
   updateCountLabel();
 }
 
 function updateExcludeListView() {
  const area = document.getElementById("excludeList");
  if (!area) return;

  area.innerHTML = "";
  state.excludeChars.forEach((name) => {
    const chip = document.createElement("span");
    chip.className = "exclude-chip";

    const icon = CHAMP_ICONS[name]; // ← ここで画像パス取得

    chip.innerHTML = `
      <img src="${icon}" class="champ-icon">
      <span>${name}</span>
    `;

    chip.addEventListener("click", () => removeExcludeChar(name));
    area.appendChild(chip);
  });
}
 
 // =============================
 // 絞り込みロジック（フィルター＋除外）
 // =============================
 function filterDuosByFilterOnly() {
   const selected = {
     difficulty: getCheckedValues("difficulty"),
     troll: getCheckedValues("troll"),
     offmeta: getCheckedValues("offmeta"),
   };
 
   return DUOS.filter((d) => {
     const conds = [];
 
     if (selected.difficulty.length > 0) {
       const label = difficultyMap[d.difficulty];
       conds.push(selected.difficulty.includes(label));
     }
     if (selected.troll.length > 0) {
       const label = trollMap[d.troll];
       conds.push(selected.troll.includes(label));
     }
     if (selected.offmeta.length > 0) {
       const label = offmetaMap[d.offmeta];
       conds.push(selected.offmeta.includes(label));
     }

     // 全カテゴリ未選択 → フィルターなし
     if (conds.length === 0) return true;
     // カテゴリ間 OR：1つでも true なら採用
     return conds.every(Boolean);
   });
 }
 
 function applyExclusion(list) {
   if (state.excludeChars.length === 0) return list;
 
   return list.filter(
     (d) =>
       !state.excludeChars.includes(d.bot) &&
       !state.excludeChars.includes(d.sup)
   );
 }
 
 function getFilteredDuos() {
   const byFilter = filterDuosByFilterOnly();
   return applyExclusion(byFilter);
 }
 
 function updateCountLabel() {
   const area = document.getElementById("countArea");
   if (!area) return;
 
   const list = getFilteredDuos();
   area.textContent = `条件に合致するデュオ：${list.length}件`;
 }
 
 // =============================
 // ランダム抽選
 // =============================
 function bindRandomButton() {
   const btn = document.getElementById("randomBtn");
   if (!btn) return;
   btn.addEventListener("click", pickRandom);
 }
 
 function pickRandom() {
   const list = getFilteredDuos();
   const countArea = document.getElementById("countArea");
   if (countArea) {
     countArea.textContent = `条件に合致するデュオ：${list.length}件`;
   }
 
   if (list.length === 0) {
     const resultArea = document.getElementById("result");
     if (resultArea) {
       resultArea.textContent = "条件に一致するデュオがありません";
     }
     return;
   }
 
   const idx = Math.floor(Math.random() * list.length);
   const duo = list[idx];
 
   showResult(duo);
 
   state.history.unshift(duo);
   if (state.history.length > 50) {
     state.history.pop();
   }
   renderHistory();
 }
 
 function showResult(d) {
  const area = document.getElementById("result");
  if (!area) return;

  const difficultyLabel = difficultyMap[d.difficulty] || d.difficulty;
  const trollLabel = trollMap[d.troll] || d.troll;
  const offmetaLabel = offmetaMap[d.offmeta] || d.offmeta;

  area.innerHTML = `
    <div class="duo-result">

      <div class="champ">
        <div class="role-label">BOT</div>
        <img src="${d.botIcon}" class="duo-img">
        <div class="duo-name">${d.bot}</div>
      </div>

      <div class="duo-x">×</div>

      <div class="champ">
        <div class="role-label">SUP</div>
        <img src="${d.supIcon}" class="duo-img">
        <div class="duo-name">${d.sup}</div>
      </div>

    </div>

    <div class="result-tags">
      <span class="tag-pill">${difficultyLabel}</span>
      <span class="tag-pill">${trollLabel}</span>
      <span class="tag-pill">${offmetaLabel}</span>
    </div>

    <div class="result-comment">
      ${d.comment}
    </div>
  `;
}

 
 // =============================
 // List / History 描画
 // =============================
 function renderList() {
  const area = document.getElementById("listTab");
  if (!area) return;

  area.innerHTML = "";

  DUOS.forEach((d) => {
    const card = document.createElement("div");
    card.className = "duo-card";

    // ここで数値 → ラベルに変換（テンプレートの外）
    const diffLabel = difficultyMap[d.difficulty];
    const trollLabel = trollMap[d.troll];
    const offLabel = offmetaMap[d.offmeta];

    card.innerHTML = `
      <div class="line">
        <img src="${d.botIcon}" class="champ-icon"> ${d.bot}
        &nbsp;/&nbsp;
        <img src="${d.supIcon}" class="champ-icon"> ${d.sup}
      </div>
      <div class="meta">

        <span>${diffLabel}</span>
        <span>${trollLabel}</span>
        <span>${offLabel}</span>
      </div>
      <div class="comment">${d.comment}</div>
    `;

    area.appendChild(card);
  });
}
 
 function renderHistory() {
   const area = document.getElementById("historyTab");
   if (!area) return;
 
   area.innerHTML = "";
 
   state.history.forEach((d, i) => {
     const row = document.createElement("div");
     row.className = "history-item";
     row.innerHTML = `
       <span class="index">${i + 1}.</span>
       <img src="${d.botIcon}" class="champ-icon"> ${d.bot}
       &nbsp;/&nbsp;
       <img src="${d.supIcon}" class="champ-icon"> ${d.sup}
     `;
     area.appendChild(row);
   });
 }