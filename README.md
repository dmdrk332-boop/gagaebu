# 💴 우리 가계부 — Android 앱 빌드 가이드

GitHub에 올리면 **자동으로 APK 파일을 만들어주는** 프로젝트예요.  
별도로 Android Studio나 복잡한 설치 없이 핸드폰에 설치할 수 있어요!

---

## 📋 한 번만 하면 되는 초기 설정

### 1단계 — GitHub 계정 만들기
- [github.com](https://github.com) 에서 회원가입 (무료)

### 2단계 — 이 프로젝트를 GitHub에 올리기

1. GitHub 로그인 후 **우상단 `+` 버튼 → `New repository`** 클릭
2. Repository name: `gaegyebu` (아무 이름이나 OK)
3. **Public** 선택 → **`Create repository`** 클릭
4. 만들어진 페이지에서 **`uploading an existing file`** 클릭
5. 이 폴더 안의 파일들을 **전부** 드래그해서 올리기
   - `package.json`
   - `capacitor.config.json`
   - `www/` 폴더 전체 (index.html 포함)
   - `.github/` 폴더 전체
6. 아래 **`Commit changes`** 초록 버튼 클릭

> ⚠️ `.github` 폴더가 숨김 폴더라서 안 보일 수 있어요.  
> Mac: `Cmd + Shift + .` 으로 숨김 파일 표시  
> Windows: 파일 탐색기 → 보기 → 숨김 항목 체크

---

## 🚀 APK 자동 빌드

파일을 올리는 순간 **자동으로 빌드가 시작돼요!**

### 빌드 확인하기
1. GitHub 저장소 페이지 상단 **`Actions`** 탭 클릭
2. `🤖 Android APK 빌드` 워크플로우 클릭
3. 노란색 원 = 빌드 중 / 초록색 체크 = 완료 / 빨간색 X = 오류

### APK 다운로드
1. 초록색 체크가 뜨면 해당 워크플로우 클릭
2. 맨 아래 **`Artifacts`** 섹션에서 `우리가계부-v숫자` 클릭
3. zip 파일 다운로드 → 압축 풀면 `app-debug.apk` 있음

> ⏱️ 빌드 시간: 약 **5~10분**

---

## 📱 핸드폰에 설치하기

### 안드로이드 설정 (최초 1회)
1. **설정 → 보안** (또는 개인정보 보호)
2. **알 수 없는 출처** 또는 **출처를 알 수 없는 앱 설치** 허용

### 설치
1. 다운받은 `app-debug.apk`를 핸드폰으로 전송 (카톡/메일/구글드라이브)
2. 핸드폰에서 파일 탭 → APK 파일 터치
3. **설치** 버튼 → 완료!

---

## 🔄 앱 업데이트 방법

앱을 수정하고 싶을 때:

1. `www/index.html` 파일을 새 버전으로 교체
2. GitHub에서 해당 파일 클릭 → 연필 아이콘(수정) 또는 다시 업로드
3. Commit → 자동으로 새 APK 빌드 시작

---

## ❓ 자주 묻는 질문

**Q: 빌드가 빨간색 X로 실패해요**  
A: Actions 탭 → 실패한 워크플로우 클릭 → 빨간 X 단계 클릭해서 로그 확인

**Q: `.github` 폴더가 없어요**  
A: 운영체제에서 숨김 폴더를 표시하도록 설정 후 다시 확인

**Q: iOS에도 설치할 수 있나요?**  
A: iOS는 MacBook + Apple 개발자 계정($99/년)이 필요해요.  
대신 **Safari에서 파일 열기 → 공유 → 홈 화면에 추가** 로 앱처럼 쓸 수 있어요.

**Q: Play Store에 올릴 수 있나요?**  
A: 가능하지만 구글 개발자 계정($25 일회성)과 릴리즈 서명 키가 필요해요.  
지금 빌드는 테스트용(Debug) APK예요.

---

## 📁 파일 구조

```
gaegyebu/
├── www/
│   └── index.html          ← 앱 본체 (수정 시 이 파일만 바꾸면 됨)
├── .github/
│   └── workflows/
│       └── build-android.yml  ← 자동 빌드 설정
├── package.json            ← 라이브러리 설정
├── capacitor.config.json   ← 앱 설정 (앱 이름, ID 등)
└── README.md               ← 지금 읽고 있는 파일
```

---

Made with 💴 by Claude
