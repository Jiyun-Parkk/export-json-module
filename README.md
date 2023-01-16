![ezgif com-gif-maker](https://user-images.githubusercontent.com/72537762/211192271-0a402ad4-ab77-4f33-bbd8-75d101d6308c.gif)
test2

## Introduction - 소개

It's module for export JSON file by write in input. You can change colum and label name in App.js.

비슷한 구조의 텍스트 데이터를 Front 화면에서 편하게 작업하고, 바로 JSON 파일로 포맷팅 하여 추출할 수 있습니다.

## Reasons for developing this project - 프로젝트 개발 이유

매 회차로 발송되는 다국어 매거진 프로젝트에서 텍스트 작업을 좀 더 수월하게 할 수 있는 방법을
고민했습니다. 보다 직관적이고 빠르게 작업 하기 위해 Input창에서 쉽게 텍스트를 입력 하여 바로
파일로 추출할 수 있도록 함으로써, 작업자의 편의성과 작업속도를 향상시킬 수 있었습니다.

## Install - 설치

CEJ로 프로젝트를 생성합니다.

```bash
npx create-export-json my-app
```

## Open Server - 서버

```bash
npm run start
```

## Port

```
localhost:8080
```

## Used Stack - 사용기술

This project developed in vanila `javascript` and Apis are developed in `NodeJS` and `Express`

이 프로젝트는 `바닐라 자바스크립트`로 제작되었고, class로 UI를 컴포넌트화 하여 만든 모듈 프로젝트 입니다. 서버는 `NodeJS`와 `Express`로 개발 되었습니다.

<img src="https://img.shields.io/badge/nodeJS-339933?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">

## Usage - 사용법

column 추가와 제거가 가능하고 한번 추출한 파일은 localstorage에 저장됩니다.

따라서 추후에 화면에서 데이터가 남아 있는 상태로 추가 수정작업하여 추출이 가능합니다.

### Naming JSON file name - 파일이름 설정

<p>You can naming your Json file by typing top Input. The default name is `file`.</p>

상단에 있는 `file name` input에서 저장할 파일의 이름을 설정할 수 있습니다. 설정하지 않으면 `file.json`이
기본 값으로 설정됩니다.

![image](https://user-images.githubusercontent.com/72537762/211191295-a51554aa-c515-4d0a-9dc3-374fd5fe69db.png)

### column & key value modify - 데이터 컬럼 & 키 수정

<p>You can modify column and key value at `App.js`.</p>

`App.js`파일에 아래 데이터를 수정하면 column, key 값을 원하는대로 조율 할 수 있습니다.

### ✅ Example - 예시

`App.js`

```javascript
this.menuList = ['kr', 'cn']
this.contentsList = [
  'KEYWORD',
  'INTERVIEW',
  'TRAVEL',
  'FASHION & BEAUTY',
  'EVENT',
  'SPECIAL ISSUE',
]
this.labelList = ['subNum', 'label']
```

`Export result - 추출 결과`

```json
{
  "kr": [
    { "subNum": "", "label": "" },
    { "subNum": "", "label": "" },
    { "subNum": "", "label": "" },
    { "subNum": "", "label": "" },
    { "subNum": "", "label": "" },
    { "subNum": "", "label": "" }
  ],
  "cn": [
    { "subNum": "", "label": "" },
    { "subNum": "", "label": "" },
    { "subNum": "", "label": "" },
    { "subNum": "", "label": "" },
    { "subNum": "", "label": "" },
    { "subNum": "", "label": "" }
  ]
}
```

### Save JSON file - JSON 파일 저장

<p>If you complete typeing all data, click `Save as JSON file` button. Then your data will saved by JSON format file and in localstorage. Although your browser
refreshed, you can check your data remained.</p>

데이터를 모두 입력 후 하단의 `Save as JSON file`을 클릭하면 `export-json-module/dist`폴더에 JSON 파일이 저장됩니다. 그리고 동시에 `localstorage`에 데이터가 저장되어
새로고침을 하여도 입력한 데이터가 남아 있습니다. `dist`폴더가 없다면 파일을 저장함과 동시에 자동으로 폴더를 생성해줍니다.

![image](https://user-images.githubusercontent.com/72537762/211191336-0122bbfd-bcd1-4832-85a6-bcfcf2275ca6.png)

> `export-json-module/dist` > ![image](https://user-images.githubusercontent.com/72537762/211191345-e8170094-501a-46da-b664-7e6960de18c4.png)

### Clear Stoarge - 스토리지비우기

<p>If you clicked `Clear Storage` button localstorage will cleared, and you can write new data.</p>

상단의 `Clear Storage` 버튼을 클릭하면 localstorage가 지워지고 새롭게 데이터를 작성 할 수 있습니다.
