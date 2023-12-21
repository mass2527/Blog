import styled from 'styled-components';
import { ArrowRightIcon } from '@radix-ui/react-icons';

import Link from 'next/link';

import { Heading, Text } from '@/components/Typography';
import { Center } from '@/layouts/Center';
import { flexColumn, flexRow } from '@/styles/utils';

export default function Custom404() {
  return (
    <Wrapper>
      <div>
        <Heading as="h1" fontSize={48}>
          404
        </Heading>
        <Text textAlign="center" color="mauve11">
          요청하신 페이지를 찾을 수 없습니다.
          <br />
          입력하신 주소가 정확한지 다시 한번 확인해주세요.
        </Text>

        <Link href="/">
          <a>
            시작페이지로 돌아가기
            <ArrowRightIcon />
          </a>
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled(Center)`
  > div {
    ${flexColumn('normal', 'center')};

    h1 {
      margin: 0;
    }

    p {
      margin-top: 0;
      margin-bottom: ${({ theme }) => theme.spacers[24]};
    }

    a {
      ${flexRow('normal', 'center')};
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.plum3},
        -15px 0 30px -15px ${({ theme }) => theme.colors.orange8}, 0 0 30px -15px ${({ theme }) => theme.colors.pink8},
        15px 0 30px -15px ${({ theme }) => theme.colors.violet8};
      background-color: hsl(0 0% 6%);
      color: ${({ theme }) => theme.colors.mauve12};
      padding: 0 20px;
      font-weight: ${({ theme }) => theme.fontWeights[500]};
      height: 45px;
      line-height: 45px;
      border-radius: ${({ theme }) => theme.radiuses[6]};

      &:hover {
        opacity: 0.9;
      }

      svg {
        margin-left: 8px;
        margin-right: -3px;
      }
    }
  }
`;
