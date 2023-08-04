~.md => markdown 문서
하나의 파일당 최대 99MB 까지만 허용

1. git 명령어를 사용하려면 git-scm 설치
   https://git-scm.com/
   64-bit Git for Windows Setup. 다운로드

2. 로컬저장소로 사용할 폴더에서
   git init 명령어를 실행하여 로컬저장소로 초기화 => .git 라는 숨김폴더가 생성

3. 버전을 생성할 사용자의 name, e-mail 등록
   git config --global user.name "lina"
   git config --global user.email "orangepop9005@gmail.com"

4. 설정 정보 한번에 보기 : -q 입력시 종료
   git config --list

5. 현재 로컬저장소의 git 현황/상태 보기
   git status

6. git으로 관리할 워킹카피(working directory) 영역에 있는 파일을 인덱스(staging area) 영역으로 보냄
   git add 파일명
   git add --all === git add . (이걸 제일 많이 씀)

7. 새로운 버전 생성 -> commit 한다 라고 표현
   commit 할 때는 간단한 설명을 기록해야 하는데
   내가 이 파일을 왜 만들었는지, 왜 수정했는지 또는 왜 기록하는지 알 수 있도록 한다.
   반드시 ""(쌍따옴표) 사용!

   git commit -m "간단한 설명"

   예시) git commit -m "마켓컬리 프로젝트 기본구조"

8. 지금까지 commit한 모든 버전 정보를 열람, 종료 시 q
   git log

   git log 파일명 => 특정 파일의 commit정보만 열람 가능
   git log 커밋번호

▣ 브랜치

1. 현재 존재하는 모든 브랜치 목록보기
   git branch

2. 새 브랜치 만들기
   git brnach 브랜치명
   git brnach 폴더명/브랜치명

   git checkout -b 새브랜치명 -> 브랜치를 생성하면서 동시에 HEAD 이동

2-1.과거의 특정 시점(커밋)에서 브랜치 만들기 1.특정시점으로 Head를 이동
git checkout 커밋번호 2.그 시점에서 브랜치 생성 및 체크아웃
git checkout -b 새브랜치명

3. 브랜치 삭제(삭제할 브랜치에 HEAD가 있으면 삭제 불가)
   git branch -d 브랜치명
   git branch -d 폴더명/브랜치명

4. 브랜치 이동
   git checkout 이동할브랜치명 -> 해당 브랜치로 HEAD(작업포인터) 이동
   git switch 이동할브랜치명

5. 브랜치명 변경
   git branch -m feature/visual feature/main
   git branch -m 변경할브랜치명 새브랜치명

6. 베이스 브랜치에 실험브랜치를 병합(병합 후 실험브랜치를 반드시 삭제)
   git merge 실험브랜치명

# 버전관리 프로그램 sourcetree 설치
