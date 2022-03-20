<style lang="less">
  .career-item {
    display: flex;
    align-items: flex-start;
    .career-logo-container {
      padding: 16px;
      border-radius: 6px;
      background-color: #FFF;
      width: 200px;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
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
    style="background-color: #FFF">
      <img
        src="{StarshellLogo}"
        alt="단감소프트"
        class="career-logo">
    </div>
  </div>
  <div class="career-content">
    <div class="title">단감소프트</div>
    <div class="date">2021-08-09 ~ 현재</div>
    <div class="role">프론트엔드 엔지니어 / 산업기능요원</div>
    <ul class="histories">
      <li class="histories__item histories__item--title">
        담당 프로젝트
      </li>
      <li class="histories__item">
        반려인들의 커뮤니티 '구르미랑 단감' 관리자 CMS 페이지 리뉴얼
      </li>
      <li class="histories__item">
        반려인들의 커뮤니티 '구르미랑 단감' 서비스 브랜드 웹페이지 개발
      </li>
      <li class="histories__item">
        E-Club 전자사랑 홈페이지 리뉴얼 작업
      </li>
      <li class="histories__item">
        삼성 퇴직자 커뮤니티 '성대회 및 성우회' 관리자 CMS 및 사용자 어플리케이션 개발
    </ul>
    <ul class="histories">
      <li class="histories__item histories__item--title">
        Team Work
      </li>
      <li class="histories__item">
        프론트엔드 개발팀, Vue &amp; Nuxt 멘토
      </li>
      <li class="histories__item">
        단감소프트 기술블로그 구축 및 운영
      </li>
    </ul>
  </div>
</div>

<script lang="ts">
  import StarshellLogo from 'images/starshell-logo.png';
</script>