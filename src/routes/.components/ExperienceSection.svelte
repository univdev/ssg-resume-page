<style lang="less">
  .projects {
    padding: 60px 16px;
    background-color: #D9C7B8;
    .title {
      font-family: 'Black Han Sans', 'Noto Sans KR';
      text-align: center;
      font-size: 32px;
      margin-bottom: 24px;
    }
    .content {
      width: 100%;
      :global(.time-line) {
        width: 100%;
      }
    }
  }
</style>

<div class="projects">
  <div class="title">Experiences</div>
  <div class="content">
    {#each histories as history}
      <TimeLine
        year="{history.year}"
        items="{history.items}"></TimeLine>
    {/each}
  </div>
</div>

<script lang="ts">
  import TimeLine, { History } from '../../components/TimeLine.svelte';

  type Histories = Array<{
    year: Number,
    items: Array<History>,
  }>;

  const histories: Histories = [
    {
      year: 2020,
      items: [
        {
          title: '인평자동차고 기능경기대회 준비반 프로그래밍 강사',
          date: '20년 05월 - 20년 09월',
          descriptions: [
            '인평자동차고 기능경기대회 준비생들을 위한 20년 전국기능경기대회 예비 문제 해석 및 해결 과정을 강의 하였음.',
          ],
        },
      ],
    },
    {
      year: 2018,
      items: [
        {
          title: '안산공업고 기능경기대회 준비반 프로그래밍 강사 2차',
          date: '18년 04월 ~ 18년 08월',
          descriptions: [
            '졸업했던 모교에서 기능경기 대회를 준비하는 후배들과 함께 과거 국제기능경기대회 출제 문제를 해결해보고 코드를 해석해보는 방식의 교육을 진행 함.',
          ],
        },
      ],
    },
    {
      year: 2017,
      items: [
        {
          title: '세명컴퓨터고등학교 기능경기대회 준비반 프로그래밍 강사',
          date: '17년 05월 ~ 17년 12월',
          descriptions: [
            '동아리 선배들과의 연락이 끊겨서 제대로 된 기술 인계가 되지 않은 학생들에게 어렵지 않은 수준의 프로그래밍 기초를 교육 함.',
          ],
        },
        {
          title: '안산공업고 기능경기대회 준비반 프로그래밍 강사',
          date: '17년 03월 ~ 17년 04월',
          descriptions: [
            '졸업했던 모교에서 기능경기 대회를 준비하는 후배들에게 중급 수준의 프로그래밍 방식과 사용자 친화적인 UI를 그리는 방법에 대해 교육 함.',
          ],
        },
        {
          title: '전국기능경기대회 유공자 일본 해외연수',
          date: '17년 01월',
          descriptions: [
            '경기도 소속 출전 선수 신분으로 웹디자인 및 개발 부문, 3위 동메달의 쾌거를 이룩하여 경기도 교육청 주관으로 진행하는 일본 연수 프로그램에 참여 함.',
          ],
        },
      ],
    },
    {
      year: 2014,
      items: [
        {
          title: '한국산업인력공단 글로벌숙련기술진흥원 웹 개발 교육 이수',
          date: '14년 05월',
          descriptions: [
            'Javascript 라이브러리인 jQuery의 심화 과정 및 현업 응용',
            'jQuery의 파생 라이브러리인 jQuery UI의 다양한 컴포넌트 활용 방법',
          ],
        },
      ],
    },
  ];
</script>