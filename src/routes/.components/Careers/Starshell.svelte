<style lang="less">
  .career-item {
    display: flex;
    align-items: flex-start;
    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
    }
    .career-logo-container {
      padding: 16px;
      border-radius: 6px;
      background-color: #FFF;
      width: 200px;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 768px) {
        width: 100%;
        height: auto;
      }
      .career-logo {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .career-content {
      margin-left: 48px;
      padding-left: 48px;
      border-left: 1px solid var(--bs-gray-300);
      width: 480px;
      @media screen and (max-width: 768px) {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
        padding-left: 0;
        border-left: none;
        margin-top: 24px;
      }
      .title {
        color: var(--bs-dark);
        font-size: 32px;
        font-weight: bold;
      }
      .date {
        font-size: 18px;
        color: var(--bs-gray-500);
        font-style: italic;
        margin-top: 4px;
      }
      .role {
        font-size: 18px;
        color: var(--bs-gray-700);
        margin-top: 8px;
        font-weight: 500;
      }
      .histories {
        list-style: none;
        padding: 0;
        margin: 0;
        margin-top: 24px;
        .histories__item {
          &--title {
            font-weight: bold;
            font-size: 24px;
          }
          & + .histories__item {
            margin-top: 8px;
          }
        }
      }
    }
  }
</style>

<div class="career-item">
  <div class="career-logo-wrap">
    <div
    class="career-logo-container"
    style="background-color: #000">
      <img
        src="{StarshellLogo}"
        alt="스타셸 스튜디오"
        class="career-logo">
    </div>
  </div>
  <div class="career-content">
    <div class="title">스타셸 스튜디오</div>
    <div class="date">2018-09-15 ~ 2021-07-16 (+ 프리랜서 4개월)</div>
    <div class="role">엔지니어링 매니저 / 프론트엔드 엔지니어</div>
    <ul class="histories">
      <li class="histories__item histories__item--title">
        개발 및 프로젝트 총괄
      </li>
      <li class="histories__item">노무법인 '세울' 회사 소개 웹사이트 총괄</li>
      <li class="histories__item">브레이브엔터테인먼트 뮤직브로 웹 / 앱 총괄</li>
      <li class="histories__item">GS편의점 노무 관리 시스템 총괄</li>
      <li class="histories__item">LG상사 '그린긱' 서비스 총괄</li>
      <li class="histories__item">현대이노션 '눈금' 백오피스 개발</li>
      <li class="histories__item">국민은행 순회 점검 관리 시스템 설계 및 개발</li>
      <li class="histories__item">위 프로젝트 외 30여개 프로젝트에 대한 개발 및 관리 진행</li>
    </ul>
    <ul class="histories">
      <li class="histories__item histories__item--title">
        팀 &amp; 프로젝트 매니지먼트
      </li>
      <li class="histories__item">데일리 미팅 주관</li>
      <li class="histories__item">프로젝트 기간 산정 및 조직원의 작업 일정 관리</li>
      <li class="histories__item">고객과의 화상 미팅을 통해 다수의 프로젝트 기획 직접 참여</li>
    </ul>
    <ul class="histories">
      <li class="histories__item histories__item--title">
        사내 교육 및 컨퍼런스
      </li>
      <li class="histories__item">신입 프론트엔드 개발자 분들과의 멘토링 진행 (개발 주도 / 코드 리뷰)</li>
      <li class="histories__item">사내 컨퍼런스 '렛츠기릿'에서 다수의 기술 프레젠테이션 진행</li>
      <li class="histories__item">고객과의 화상 미팅을 통해 다수의 프로젝트 기획 직접 참여</li>
      <li class="histories__item">동료 개발자의 코드 리뷰 다수</li>
    </ul>
  </div>
</div>

<script lang="ts">
  import StarshellLogo from 'images/starshell-logo.png';
</script>