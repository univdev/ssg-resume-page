<style lang="less">
  .award-section {
    background-color: #FACFCE;
    padding: 60px 16px;
    .container {
      max-width: 1320px;
      width: 100%;
    }
    .title {
      font-family: 'Black Han Sans', 'Noto Sans KR';
      text-align: center;
      font-size: 32px;
      margin-bottom: 24px;
    }
  }
</style>

<div class="award-section" id="awards">
  <div class="container">
    <div class="title">Awards &amp; Licenses</div>
    <div class="content">
      <div class="row">
        <div class="col-lg-12">
          {#each awards as award}
            <TimeLine
              year="{award.year}"
              items="{award.items}"></TimeLine>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<script lang="ts">
  import TimeLine, { History } from "../../components/TimeLine.svelte";

  const awards: Array<{
    year: Number,
    items: Array<History>,
  }> = [
    {
      year: 2020,
      items: [
        {
          icon: 'fa fa-certificate',
          title: '정보처리산업기사',
          date: '한국산업인력공단',
          descriptions: [
            '컴퓨터에 관한 전문적인 지식과 기술을 갖춘 사람에게 지급하는 자격증입니다.',
          ],
        },
      ],
    },
    {
      year: 2019,
      items: [
        {
          title: '🥇 인천지방기능경기대회 웹 개발 부문 1위 금메달',
          date: '한국산업인력공단',
          descriptions: [
            '산업인력공단에서 주최하는 프로그래밍 경진대회입니다.',
            '이 대회에서 수상하면 하반기에 열리는 전국기능경기대회에 출전할 수 있는 출전권을 받게 됩니다.',
          ],
        },
      ],
    },
    {
      year: 2016,
      items: [
        {
          icon: 'fa fa-certificate',
          title: '웹디자인 기능사',
          date: '산업통상자원부',
          descriptions: [
            '홈페이지를 기획, 설계제작하며 시스템자원 및 사용할 S/W를 활용하는 사람에게 지급하는 자격증입니다.',
          ],
        },
        {
          title: '🥉 전국기능경기대회 웹 개발 부문 3위 동메달',
          date: '한국산업인력공단',
          descriptions: [
            '경기도 대표 선수단으로 발탁 되어 출천하게 되었습니다.',
            '지방 대회에서 메달을 수상한 전국 각 도 대표들이 모여 치루는 프로그래밍 경진대회입니다.',
          ],
        },
        {
          title: '🥈 경기도 지방기능경기대회 웹 개발 부문 2위 은메달',
          date: '한국산업인력공단',
          descriptions: [
            '산업인력공단에서 주최하는 프로그래밍 경진대회입니다.',
            '이 대회에서 수상하면 하반기에 열리는 전국기능경기대회에 출전할 수 있는 출전권을 받게 됩니다.',
          ],
        },
      ],
    },
    {
      year: 2015,
      items: [
        {
          icon: 'fas fa-certificate',
          title: 'GTQ포토샵1급',
          date: '한국생산성본부',
          descriptions: [
            '사진 및 각종 이미지 편집, 웹디자인 등 디자인에 있어 기본이 되는 역량을 지닌 사람에게 발급하는 자격증입니다.',
          ],
        },
      ],
    },
    {
      year: 2014,
      items: [
        {
          title: '🏆 고교생 멀티미디어 경진대회 \'홈페이지 제작\' 부문 장려상',
          date: '신안산대학교',
          descriptions: [
            '신안산대학교에서 주최한 고등학생들을 대상으로 열리는 홈페이지 제작 경진대회입니다.',
          ],
        },
      ],
    },
  ];
</script>