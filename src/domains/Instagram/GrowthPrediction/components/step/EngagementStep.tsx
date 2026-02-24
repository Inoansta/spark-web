import { useMemo } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { TOKEN } from '@/domains/Login/hooks/useAuthToken';
import { Performance } from '@/domains/Youtube/StrengthWeakness/model/type';
import { Badge } from '@/shared/components';
import { useMoveLocation } from '@/shared/hooks';
import { Storage } from '@/shared/lib';
import { Flex } from '@/shared/ui';
import { Box, BoxContent, BoxHeader } from '../Box';

export interface EngagementStepProps {
  onNext: () => void;
  averageLikes: Performance;
  averageComments: Performance;
}

interface EngagementData {
  period: string;
  likes: string;
  comments: string;
}

const columnHelper = createColumnHelper<EngagementData>();

export default function EngagementStep({
  onNext,
  averageLikes,
  averageComments,
}: EngagementStepProps) {
  // Figma 디자인에 따른 참여도 데이터
  const connected = Storage.getLocalStorage(TOKEN.REFRESH);
  const navigate = useMoveLocation(
    connected ? '/strategy' : '/instagram-strategy',
  );
  const engagementData: EngagementData[] = useMemo(
    () => [
      {
        period: '90일 ~ 60일',
        likes: `❤️ ${averageLikes.days60to90}회`,
        comments: `💬 ${averageComments.days30to60}개`,
      },
      {
        period: '60일 ~ 30일',
        likes: `❤️ ${averageLikes.days30to60}회`,
        comments: `💬 ${averageComments.days30to60}개 `,
      },
      {
        period: '최근 30일',
        likes: `❤️ ${averageLikes.recent30Days}회`,
        comments: `💬 ${averageComments.recent30Days}개`,
      },
    ],
    [],
  );

  const columns = useMemo(
    () => [
      columnHelper.accessor('period', {
        header: '기간',
        cell: (info) => (
          <div className="text-center font-bold text-gray6 text-[11px]">
            {info.getValue()}
          </div>
        ),
      }),
      columnHelper.accessor('likes', {
        header: '평균 좋아요수',
        cell: (info) => (
          <div className="text-center font-bold text-gray8 text-[13px]">
            {info.getValue()}
          </div>
        ),
      }),
      columnHelper.accessor('comments', {
        header: '평균 댓글수',
        cell: (info) => (
          <div className="text-center font-bold text-gray8 text-[13px]">
            {info.getValue()}
          </div>
        ),
      }),
    ],
    [],
  );

  const table = useReactTable({
    data: engagementData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Flex
      direction="column"
      align="center"
      justify="between"
      className="h-full w-full max-w-[375px]"
    >
      {/* 상단 콘텐츠 영역 */}
      <Flex direction="column" align="center" className="flex-1">
        <Box width="full">
          <BoxHeader className="bg-primary5 py-[5px]">
            <Flex align="center" justify="center" className="gap-x-[5px]">
              <p className="text-2xl font-bold text-center text-white">
                팬층의 &quot;참여도&quot;는?
              </p>
            </Flex>
          </BoxHeader>
          <BoxContent className="p-2.5 h-[300px] w-full backdrop-blur-lg">
            <div className="flex flex-col w-full h-full">
              <table className="w-full h-full">
                <thead>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id} className="border-b border-gary3">
                      {headerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          className="py-2 text-center text-[11px] font-medium text-gray6"
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                              )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className="divide-y divide-gary3">
                  {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id} className="py-4">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </BoxContent>
        </Box>

        <div className="h-5" />

        <Flex direction="column" align="start" className="w-full">
          <Badge variant="default" size="default">
            <p className="text-primary11 text-[15px] font-bold">
              팬들의 좋아요, 댓글이 증가했어요!
            </p>
          </Badge>
          <div className="h-[5px]" />
          <p className="text-highEmphasis text-[15px] font-medium">
            팬층이 단단해지고, 콘텐츠에 대한 관심과 만족도가 높아지고 있다고 볼
            수 있어요. 지금의 소통 방식을 유지하며 팬과의 관계를 더욱 깊게
            만들어가세요.
          </p>
        </Flex>
      </Flex>

      {/* 하단 버튼 영역 */}
      <button
        className="w-full bg-[#333] text-white py-3 px-5 rounded-[10px] h-12"
        onClick={() => {
          onNext();
          navigate();
        }}
      >
        다음
      </button>
    </Flex>
  );
}
