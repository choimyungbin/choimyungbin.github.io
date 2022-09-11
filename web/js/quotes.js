const quotes = [
  {
    quote:
      '어둠의 힘을 지니고 있는 열쇠여.진정한 모습으로 내 앞에 나타나라.너와의 계약에 따라 체리가 명한다.봉인해제!',
    author: '키노모토 사쿠라, 카드캡터 사쿠라',
  },
  {
    quote:
      '하지만 저에겐 무척 좋아하는 사람이 행복해 하는 것이 최고의 행복이에요.',
    author: '다이도우지 토모요, 카드캡터 사쿠라',
  },
  {
    quote: '어떤 마음도 말하지 않으면 전해지지 않아요.',
    author: '다이도우지 토모요, 카드캡터 사쿠라',
  },
  {
    quote: '넌 죽지 않아. 내가 지킬 거니까.',
    author: '아야나미 레이, 에반게리온',
  },
  {
    quote: '웃으면 된다고 생각해.',
    author: '이카리 신지, 에반게리온',
  },
  {
    quote:
      '진실은 마음 속에 있어. 그리고 그 새로운 이미지가 그 사람의 마음과 형태를 바꾸어 가지.',
    author: '아야나미 레이, 에반게리온',
  },
  {
    quote: '한 번 만난 인연은 잊혀지는 것이 아니라 잊고 있을 뿐이다.',
    author: '하쿠, 센과 치히로의 행방불명',
  },
  {
    quote: '난 계속 도망쳐 왔어. 하지만 이제 지켜야 할 것이 생겼어. 바로 너야.',
    author: '하울, 하울의 움직이는 성',
  },
  {
    quote: '키키, 그렇게 겉모습에 신경쓰지 말거라. 중요한 건 마음이야.',
    author: '키키, 마녀 배달부 키키',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
