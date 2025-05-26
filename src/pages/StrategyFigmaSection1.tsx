import useStrategyStore from '@/app/store/useStrategyStore';
import Bulb from '@/assets/svg/Detail/Bulb';
import Graph2 from '@/assets/svg/Detail/Graph2';
import Magic from '@/assets/svg/Detail/Magic';
import EyeIcon from '@/assets/svg/EyeIcon';
import BlackYoutube from '@/assets/svg/Strategy/BlackYoutube';
import StrategyStarGroup from '@/domains/Strategy/components/StrategyStar';
import { Divider, Flex, Spacing } from '@/shared/ui';
import PageBackground from '@/shared/ui/components/PageBackground';

const UserInfoHashTag = ({ hashTagList }: { hashTagList: string[] }) => {
  return (
    <Flex align="center" gap="1">
      {['패션', '전업', '개인적인 취미 및 즐거움'].map((item) => (
        <div
          key={item}
          className="px-[10px] py-[5px] bg-white bg-opacity-10 rounded-[5px]"
        >
          <span className="text-xs font-medium text-primary2"># {item}</span>
        </div>
      ))}
    </Flex>
  );
};

function ContentCard() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: 10,
        background: '#fff',
        border: '0.5px solid #E5E5EA',
        borderRadius: 20,
        width: 335,
      }}
    >
      {/* 썸네일 */}
      <img
        src={'/src/assets/figma/thumbnail.png'}
        alt="thumbnail"
        style={{
          width: 120,
          height: 90,
          borderRadius: 10,
          objectFit: 'cover',
        }}
      />
      {/* 정보 영역 */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 20,
          paddingRight: 10,
        }}
      >
        {/* 제목 */}
        <div
          style={{
            fontFamily: 'SUIT',
            fontWeight: 700,
            fontSize: 13,
            color: '#1C1C1E',
            lineHeight: 1.38,
          }}
        >
          🍖 성수동 립스테이크 플레이트 야외 먹방! | Eating...
        </div>
        {/* 상세 정보 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 8,
          }}
        >
          {/* 뷰 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <EyeIcon width={20} height={20} color="#333" />
            <span
              style={{
                fontFamily: 'SUIT',
                fontWeight: 700,
                fontSize: 13,
                color: '#333',
              }}
            >
              1,058
            </span>
          </div>
          {/* 날짜 */}
          <span
            style={{
              fontFamily: 'SUIT',
              fontWeight: 500,
              fontSize: 11,
              color: '#8D9199',
              lineHeight: 1.27,
            }}
          >
            2024.11.10
          </span>
        </div>
      </div>
    </div>
  );
}

const UserInfo = () => {
  const {
    userContents = '패션',
    userFulltime = '전업',
    userGoal = '개인적인 취미 및 즐거움',
    channelName,
  } = useStrategyStore((store) => store);
  return (
    <section>
      <p className="text-lg font-bold text-[#FFF]">
        {channelName}님의 채널 성장을 위한
      </p>
      <div className="flex items-center mb-[10px]">
        <p className="text-2xl font-extrabold text-[#C6C5FF]">
          3가지 추천 비법
        </p>
        <Magic />
      </div>
      <UserInfoHashTag hashTagList={[userContents, userFulltime, userGoal]} />
    </section>
  );
};

// AnalysisCard 컴포넌트 정의
function AnalysisCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBg?: string;
}) {
  return (
    <div className="flex flex-col gap-5 border border-[#E5E5EA] rounded-[10px] p-[10px]">
      <div className="flex items-center gap-[2px]">
        {icon}
        <p className="text-sm font-medium text-[#3385FF]">{title}</p>
      </div>
      <div className="flex justify-between px-[5px]">
        <p>최근 30일</p>
        <p>N분 증가</p>
      </div>
    </div>
  );
}

export default function StrategyFigmaSection1() {
  return (
    <main className="bg-white overflow-y-auto">
      <PageBackground color="black_linear_gradient">
        <UserInfo />
        <StrategyStarGroup />
      </PageBackground>
      <Divider size="RowMedium" />
      <section className="p-[20px]">
        <Flex direction="column" gapY={5}>
          <Flex align="center" gap="1">
            <BlackYoutube />
            <p className="text-lg font-extrabold text-[#000]">
              인기콘텐츠 TOP3
            </p>
          </Flex>
          <section>
            <ContentCard />
          </section>
        </Flex>
      </section>
      <Divider size="RowMedium" />
      <section className="p-[20px]">
        <Flex direction="column" gapY={5}>
          <Flex align="center" gap="1">
            <Graph2 fill="#000" />
            <p className="text-lg font-extrabold text-[#000]">
              내 채널의 강 약점 분석
            </p>
          </Flex>
          <section>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              <AnalysisCard
                icon={<Bulb fill="#fff" width={20} height={20} />}
                title="콘텐츠 반응이 뜨거워요"
                description={`최근 업로드한 영상의\n좋아요/댓글 비율이 높아요.`}
              />
              <AnalysisCard
                icon={<Bulb fill="#fff" width={20} height={20} />}
                title="참여율이 낮아요"
                description={`댓글, 좋아요 등\n참여 지표가 업계 평균보다 낮아요.`}
              />
              <AnalysisCard
                icon={<Bulb fill="#fff" width={20} height={20} />}
                title="콘텐츠 반응이 뜨거워요"
                description={`최근 업로드한 영상의\n좋아요/댓글 비율이 높아요.`}
              />
              <AnalysisCard
                icon={<Bulb fill="#fff" width={20} height={20} />}
                title="참여율이 낮아요"
                description={`댓글, 좋아요 등\n참여 지표가 업계 평균보다 낮아요.`}
              />
            </div>
          </section>
        </Flex>
      </section>
      <Divider size="RowMedium" />
      <section className="p-[20px]">
        <Flex direction="column" gapY={5}>
          <Flex align="center" gap="1">
            <Bulb fill="#000" />
            <p className="text-lg font-extrabold text-[#000]">
              홍길동님의 성장예측
            </p>
          </Flex>
          <Flex direction="column" className="gap-[10px]">
            <span className="text-[13px] font-medium text-primary4 bg-primary1 rounded-[5px] px-[5px] py-[10px]">
              3개월 후 성장예측
            </span>
            <Flex justify="between" align="center">
              <span>예상 조회수</span>
              <Flex direction="column" className="gap-[2px]">
                <p>총 1,400회 달성</p>
                <p>매달 400회 증가</p>
              </Flex>
            </Flex>
            <Flex justify="between" align="center">
              <span>예상 조회수</span>
              <Flex direction="column" className="gap-[2px]">
                <p>총 1,400회 달성</p>
                <p>매달 400회 증가</p>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </section>
    </main>
  );
}
