const heritageData = {
  craft: {
    tag: "匠心相传",
    title: "传统技艺",
    text:
      "传统技艺强调手、眼、心的合一。每一道工序都依赖长年累月的经验积淀，一针一线、一雕一刻之间，既有审美，也有修身。",
    items: [
      "代表项目：苏绣、云锦织造、龙泉青瓷烧制技艺",
      "核心价值：工匠精神、地域文化、生活美学",
      "当代意义：推动文创设计与传统手作复兴"
    ]
  },
  opera: {
    tag: "声腔流韵",
    title: "戏曲曲艺",
    text:
      "戏曲曲艺把文学、音乐、舞蹈、美术和表演融为一体。台上一瞬，是几代艺人不断打磨出的审美秩序。",
    items: [
      "代表项目：昆曲、京剧、评弹、皮影戏",
      "核心价值：叙事传统、方言韵味、舞台程式美学",
      "当代意义：焕新年轻观众的观演体验"
    ]
  },
  festival: {
    tag: "与时偕行",
    title: "岁时节庆",
    text:
      "中国传统节庆以季节变化和农耕节律为基础，在仪式、饮食与团聚中传递对自然与家国的理解。",
    items: [
      "代表项目：春节、端午节、中秋节、二十四节气",
      "核心价值：家庭记忆、共同体认同、自然观念",
      "当代意义：让传统生活智慧重新进入现代日常"
    ]
  },
  folk: {
    tag: "乡土意象",
    title: "民俗民艺",
    text:
      "民俗民艺最贴近日常，它们出现在窗花、灯会、庙会和节庆现场，承载着祈福、团圆与丰收的愿望。",
    items: [
      "代表项目：剪纸、杨柳青年画、潍坊风筝、社火",
      "核心价值：民间想象力、吉祥观念、地方风情",
      "当代意义：成为文旅展示与社区文化的重要纽带"
    ]
  },
  medicine: {
    tag: "东方智慧",
    title: "传统医药",
    text:
      "传统医药关注人与自然的整体关系，通过辨证思维、炮制技艺和养生理念，形成独特的生命文化系统。",
    items: [
      "代表项目：中医诊疗法、中药炮制、针灸",
      "核心价值：天人合一、整体观、预防先行",
      "当代意义：为健康管理与文化传播提供持续启发"
    ]
  }
};

const cards = document.querySelectorAll(".heritage-card");
const tagNode = document.getElementById("detail-tag");
const titleNode = document.getElementById("detail-title");
const textNode = document.getElementById("detail-text");
const listNode = document.getElementById("detail-list");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const key = card.dataset.heritage;
    const selected = heritageData[key];

    if (!selected) {
      return;
    }

    cards.forEach((item) => item.classList.remove("active"));
    card.classList.add("active");

    tagNode.textContent = selected.tag;
    titleNode.textContent = selected.title;
    textNode.textContent = selected.text;
    listNode.innerHTML = selected.items.map((item) => `<li>${item}</li>`).join("");
  });
});

const revealTargets = document.querySelectorAll(".section, .hero-copy, .hero-panel");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((target) => {
    target.classList.add("reveal");
    observer.observe(target);
  });
} else {
  revealTargets.forEach((target) => target.classList.add("visible"));
}
