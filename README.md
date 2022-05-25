안녕하세요. 해당 웹은 리액트와 넥스트.js 기반으로 구현되었습니다.
시작하기 위해서는 아래의 순서를 따라해 주세요.

## 1. 시작 방법

우선, 코드를 fork 또는 clone해주세요.
그다음 아래 코드로 develop server를 열어줍니다.

```bash
yarn dev
```

[http://localhost:3000](http://localhost:3000) 로 들어가게 되면 화면을 보실 수 있을 거에요.

## 2. 파일구조

```
.
├── README.md
├── next.config.js
├── package.json
├── public
│   └── Images
│       └── logo.png
├── src
│   ├── components
│   │   ├── Pages
│   │   │   ├── BrandList.jsx
│   │   │   ├── CategoryList.jsx
│   │   │   ├── ColorList.jsx
│   │   │   └── PriceList.jsx
│   │   └── layout
│   │       └── Header.jsx
│   ├── constants
│   │   └── index.jsx
│   ├── pages
│   │   ├── 404.jsx
│   │   ├── _app.js
│   │   ├── api
│   │   │   └── hello.js
│   │   ├── brands
│   │   │   └── index.jsx
│   │   ├── category
│   │   │   └── index.jsx
│   │   ├── colors
│   │   │   └── index.jsx
│   │   ├── prices
│   │   │   └── index.jsx
│   │   └── products
│   │       └── index.jsx
│   └── styles
│       ├── globals.css
│       ├── paging.css
│       └── reset.css
├── yarn-error.log
└── yarn.lock
```

> 폴더 트리는 위와 같이 되어 있습니다. 중요한 라우터들을 설명드리겠습니다.

- /products : 메인 라우터 입니다.
- /brands
- /category
- /prices
- 만일, 이 외의 다른 라우터로 들어가게 되면, 404 에러가 뜨고 5초 뒤에 /products 페이지로 이동 하게 됩니다.

## 3. 구현 내용

> 각각의 라우터들은 해당 결과 값이 나오도록, 각각의 api를 불러와서 필터링을 거쳐 랜더링 했습니다.

## 4. 부족한 부분

- 우선 products 페이지가 어떤 식으로 구현되어야 하는지 글로는 이해하기가 어려워
  우선은 모든 아이템이 불러와지고, 4x5로 grid로 재현 되게했습니다.
