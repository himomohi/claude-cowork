[English](README.md) | [简体中文](README_ZH.md)

# Claude Cowork

**프로그래밍, 파일 관리, 그리고 설명할 수 있는 모든 작업**을 도와주는 **데스크톱 AI 비서**입니다.

**Claude Code와 완전히 동일한 구성으로 호환**되므로, **Anthropic 호환 대형 언어 모델**이라면 무엇이든 실행할 수 있습니다.

> 단순한 GUI가 아닙니다.
> 진정한 AI 협업 파트너입니다.
> Claude Agent SDK를 배울 필요가 없습니다. 그저 작업을 생성하고 실행 경로를 선택하면 됩니다.

로컬 폴더 정리 예시:


https://github.com/user-attachments/assets/8ce58c8b-4024-4c01-82ee-f8d8ed6d4bba


---

## ✨ 왜 Claude Cowork인가요?

Claude Code는 강력하지만, **터미널에서만 실행됩니다**.

그 말은 즉:
- ❌ 복잡한 작업에 대한 시각적 피드백 없음
- ❌ 여러 세션을 추적하기 어려움
- ❌ 도구 출력을 확인하기 불편함

**Agent Cowork는 이러한 문제를 해결합니다:**

- 🖥️ **네이티브 데스크톱 애플리케이션**으로 실행
- 🤖 모든 작업에 대한 **AI 협업 파트너** 역할 수행
- 🔁 **기존 `~/.claude/settings.json`** 재사용
- 🧠 Claude Code와 **100% 호환**

당신의 컴퓨터에서 Claude Code가 작동한다면,
**Agent Cowork도 작동합니다.**

---

## 🚀 빠른 시작

Agent Cowork를 사용하기 전에, Claude Code가 설치되어 있고 올바르게 구성되어 있는지 확인하세요.

### 옵션 1: 릴리스 다운로드

👉 [릴리스 바로가기](https://github.com/DevAgentForge/agent-cowork/releases)

---

### 옵션 2: 소스에서 빌드

#### 필수 조건

- [Bun](https://bun.sh/) 또는 Node.js 18+
- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) 설치 및 인증 완료

```bash
# 저장소 복제
git clone https://github.com/DevAgentForge/agent-cowork.git
cd agent-cowork

# 의존성 설치
bun install

# 개발 모드로 실행
bun run dev

# 또는 프로덕션 바이너리 빌드
bun run dist:mac    # macOS
bun run dist:win    # Windows
bun run dist:linux  # Linux
```

---

## 🧠 핵심 기능

### 🤖 AI 협업 파트너 — 단순한 GUI가 아님

Agent Cowork는 다음과 같은 작업을 수행할 수 있는 AI 파트너입니다:

* **코드 작성 및 편집** — 모든 프로그래밍 언어 지원
* **파일 관리** — 생성, 이동 및 정리
* **명령어 실행** — 빌드, 테스트, 배포
* **질문 답변** — 코드베이스 관련 질문
* **모든 작업 수행** — 자연어로 설명할 수 있는 모든 것

---

### 📂 세션 관리

* **사용자 지정 작업 디렉토리**로 세션 생성
* 이전 대화 재개
* 완벽한 로컬 세션 기록 (SQLite에 저장됨)
* 안전한 삭제 및 자동 지속성

---

### 🎯 실시간 스트리밍 출력

* **토큰 단위 스트리밍 출력**
* Claude의 추론 과정 보기
* 구문 강조가 포함된 마크다운 렌더링
* 상태 표시기가 포함된 시각화된 도구 호출

---

### 🔐 도구 권한 제어

* 민감한 작업에 대해 명시적 승인 필요
* 도구별 허용 또는 거부
* 대화형 결정 패널
* Claude가 할 수 있는 작업에 대한 완전한 제어

---

## 🔁 Claude Code와 완전 호환

Agent Cowork는 **Claude Code와 구성을 공유합니다**.

다음 경로의 파일을 직접 재사용합니다:

```text
~/.claude/settings.json
```

즉, 다음 항목들이 동일합니다:

* 동일한 API 키
* 동일한 기본 URL
* 동일한 모델
* 동일한 동작

> Claude Code를 한 번만 구성하면 어디서든 사용할 수 있습니다.

---

## 🧩 아키텍처 개요

| 계층 | 기술 |
| --- | --- |
| 프레임워크 | Electron 39 |
| 프론트엔드 | React 19, Tailwind CSS 4 |
| 상태 관리 | Zustand |
| 데이터베이스 | better-sqlite3 (WAL 모드) |
| AI | @anthropic-ai/claude-agent-sdk |
| 빌드 | Vite, electron-builder |

---

## 🛠 개발

```bash
# 개발 서버 시작 (핫 리로드)
bun run dev

# 타입 확인 / 빌드
bun run build
```

---

## 🗺 로드맵

계획된 기능:

* 모델 및 API 키를 위한 GUI 기반 구성
* 🚧 더 많은 기능이 곧 제공될 예정입니다

---

## 🤝 기여하기

풀 리퀘스트(Pull request)를 환영합니다.

1. 이 저장소를 포크(Fork)합니다
2. 기능 브랜치를 생성합니다
3. 변경 사항을 커밋합니다
4. 풀 리퀘스트를 엽니다

---

## ⭐ 맺음말

다음과 같은 것을 원했다면:

* 지속적인 데스크톱 AI 협업 파트너
* Claude의 작동 방식에 대한 시각적 통찰
* 프로젝트 전반에 걸친 편리한 세션 관리

이 프로젝트는 당신을 위해 만들어졌습니다.

👉 **도움이 되었다면 스타(Star)를 눌러주세요.**

---

## 라이선스

MIT
